export default async function handler(req, res) {
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
    const { messages, scenario, agentRole, config } = body;
    const activeKey = config?.apiKey || process.env.OPENAI_API_KEY || '';
    const activeBaseUrl = (config?.baseUrl || process.env.OPENAI_BASE_URL || 'https://api.openai.com/v1').replace(/\/+$/, '');
    const activeModel = config?.model || process.env.OPENAI_MODEL || 'gpt-4o-mini';

    if (!activeKey) {
      return res.status(401).json({
        error: 'MISSING_API_KEY',
        message: '请在前端设置中填写 OpenAI 或兼容的大模型 API Key'
      });
    }

    const response = await fetch(`${activeBaseUrl}/chat/completions`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${activeKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: activeModel,
        messages,
        temperature: 0.7
      })
    });

    const data = await response.json();
    return res.status(response.status).json(data);
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
}
