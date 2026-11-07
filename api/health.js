export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.status(200).json({
    status: 'healthy',
    service: 'GlobalTalk AI on imaomyying.com',
    timestamp: new Date().toISOString(),
    ttsEngine: 'Microsoft Edge Neural (Free) + OpenAI',
    hasEnvKey: Boolean(process.env.OPENAI_API_KEY)
  });
}
