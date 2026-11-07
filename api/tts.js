import { MsEdgeTTS, OUTPUT_FORMAT } from 'msedge-tts';

// 内存音频缓存 (LRU 最大 300 条，免重复网络请求秒开)
const ttsAudioCache = new Map();

async function synthesizeWithEdgeTTS(cleanText, role = 'mia') {
  // 角色拟真音色映射 (微软官方顶级 Azure Neural 音色库)
  // en-US-JennyNeural: 温暖活泼自然美音女声 (Mia 语伴)
  // en-US-ChristopherNeural: 威严深沉严苛美音男声 (Victor 魔鬼考官)
  // en-US-GuyNeural: 成熟专业洗练商业美音男声 (Mark / 采购商买手)
  // en-US-AvaNeural: 极富激情与感染力出海带货女声 (Alex TikTok主播)
  const edgeVoiceMap = {
    mia: 'en-US-JennyNeural',
    victor: 'en-US-ChristopherNeural',
    buyer: 'en-US-GuyNeural',
    alex: 'en-US-AvaNeural'
  };
  const voice = edgeVoiceMap[role] || 'en-US-JennyNeural';
  const cacheKey = `${voice}:${cleanText}`;

  if (ttsAudioCache.has(cacheKey)) {
    return ttsAudioCache.get(cacheKey);
  }

  const tts = new MsEdgeTTS();
  await tts.setMetadata(voice, OUTPUT_FORMAT.AUDIO_24KHZ_48KBITRATE_MONO_MP3);
  const { audioStream } = tts.toStream(cleanText);

  return new Promise((resolve, reject) => {
    const chunks = [];
    audioStream.on('data', chunk => chunks.push(chunk));
    audioStream.on('end', () => {
      const buffer = Buffer.concat(chunks);
      if (ttsAudioCache.size > 300) {
        const firstKey = ttsAudioCache.keys().next().value;
        ttsAudioCache.delete(firstKey);
      }
      ttsAudioCache.set(cacheKey, buffer);
      resolve(buffer);
    });
    audioStream.on('error', err => reject(err));
  });
}

export default async function handler(req, res) {
  // 跨域支持
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const body = typeof req.body === 'string' ? JSON.parse(req.body) : (req.body || {});
    const { text, role, config } = body;
    const ttsEngine = config?.ttsEngine || 'edge';
    const activeKey = config?.apiKey || process.env.OPENAI_API_KEY || '';
    const activeBaseUrl = (config?.baseUrl || process.env.OPENAI_BASE_URL || 'https://api.openai.com/v1').replace(/\/+$/, '');

    // 过滤文本
    let cleanText = text || '';
    if (cleanText.includes('💡 中文释义')) cleanText = cleanText.split('💡 中文释义')[0];
    else if (cleanText.includes('中文释义：')) cleanText = cleanText.split('中文释义：')[0];
    else if (cleanText.includes('中文释义:')) cleanText = cleanText.split('中文释义:')[0];
    cleanText = cleanText.replace(/🚨\s*\[.*?\]/g, '').replace(/👉.*$/g, '').trim();

    if (!cleanText) {
      return res.status(400).json({ error: 'No text to speak' });
    }

    // 1. 若配置了 OpenAI TTS 且提供了 Key
    if (ttsEngine === 'openai' && activeKey) {
      try {
        const roleVoiceMap = { mia: 'nova', victor: 'onyx', buyer: 'echo', alex: 'shimmer' };
        const voice = roleVoiceMap[role] || 'nova';
        const ttsRes = await fetch(`${activeBaseUrl}/audio/speech`, {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${activeKey}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            model: config?.ttsModel || 'tts-1',
            input: cleanText,
            voice,
            speed: role === 'victor' ? 1.05 : 0.98
          })
        });
        if (ttsRes.ok) {
          const ab = await ttsRes.arrayBuffer();
          res.setHeader('Content-Type', 'audio/mpeg');
          res.setHeader('Cache-Control', 'public, max-age=86400');
          res.setHeader('X-TTS-Engine', 'openai');
          return res.status(200).send(Buffer.from(ab));
        }
      } catch (err) {
        console.warn('[Vercel TTS] OpenAI fallback to Edge TTS:', err.message);
      }
    }

    // 2. 默认通道：微软 Edge 免费高保真神经网络语音 (100% 免费 · 免Key)
    const mp3Buffer = await synthesizeWithEdgeTTS(cleanText, role);
    res.setHeader('Content-Type', 'audio/mpeg');
    res.setHeader('Cache-Control', 'public, max-age=86400');
    res.setHeader('X-TTS-Engine', 'edge-neural-free');
    return res.status(200).send(mp3Buffer);
  } catch (e) {
    console.error('[Vercel TTS] Error:', e);
    return res.status(500).json({ error: 'TTS_FAILED', message: e.message });
  }
}
