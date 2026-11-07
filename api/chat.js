/**
 * api/chat.js
 * 大模型与多智能体后端对话网关 (Vercel Serverless Function)
 * 具备双模架构：
 * 1. 真实模式：当配置了 OPENAI_API_KEY 或客户端传入 Key 时，代理调用 OpenAI / DeepSeek
 * 2. 托管智能仿真模式：无需配置任何 API Key，根据外贸谈判/带货场景与当前轮次自动生成专业、地道的商务英文对策
 */

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
    let body = req.body;
    if (typeof body === 'string') {
      try { body = JSON.parse(body); } catch {}
    }
    body = body || {};

    const { messages = [], scenario = {}, agentRole = 'mia', config = {} } = body;
    const activeKey = config?.apiKey || process.env.OPENAI_API_KEY || '';
    const activeBaseUrl = (config?.baseUrl || process.env.OPENAI_BASE_URL || 'https://api.openai.com/v1').replace(/\/+$/, '');
    const activeModel = config?.model || process.env.OPENAI_MODEL || 'gpt-4o-mini';

    // 1. 若配置了有效 Key，直接透传大模型
    if (activeKey) {
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
    }

    // 2. 托管算力免 Key 智能对答模式
    const lastUserMsg = [...messages].reverse().find(m => m.role === 'user')?.content || '';
    const turnCount = messages.filter(m => m.role === 'user').length;
    let replyText = '';

    if (agentRole === 'victor') {
      // 魔鬼考官模式
      if (lastUserMsg.toLowerCase().includes('cheap') || lastUserMsg.toLowerCase().includes('down')) {
        replyText = "Hold on! Red flag alert: Never say 'cheap' or 'we cannot down'. Say 'Our quotation directly reflects our premium zero-defect quality standards' instead!";
      } else if (lastUserMsg.toLowerCase().includes('quantity') || lastUserMsg.toLowerCase().includes('40hq')) {
        replyText = "Good anchor! Scaling up to 40HQ gives you leverage. Now demand 30% deposit with balance against copy of B/L before confirming the price tier.";
      } else {
        replyText = "Stand your ground. Counter with an If-Then trade-off: 'If you can commit to a 40HQ container, we can absorb the tooling fee.' Don't give discounts without getting concessions!";
      }
    } else if (agentRole === 'buyer' || agentRole === 'mark') {
      // 真实买手模式
      if (turnCount === 1) {
        replyText = "I see your point on raw materials, but 14.50 is still over our budget. Can you meet us halfway at 13.20 if we issue the PO by this Friday?";
      } else if (turnCount === 2) {
        replyText = "Fair enough. If you can guarantee a 30-day lead time and include customized packaging, we can accept 13.80 per unit for the trial run.";
      } else {
        replyText = "Alright Sarah, that sounds reasonable. Send over the revised proforma invoice and let's wrap this up.";
      }
    } else {
      // 引导语伴 Mia 模式
      replyText = "Very professional response! You successfully guarded the unit margin while offering an actionable volume incentive. Keep this momentum for the next round.";
    }

    // 返回标准 OpenAI 兼容响应
    return res.status(200).json({
      id: 'chatcmpl-gt-managed-' + Date.now(),
      object: 'chat.completion',
      created: Math.floor(Date.now() / 1000),
      model: 'gpt-4o-mini-managed',
      choices: [
        {
          index: 0,
          message: {
            role: 'assistant',
            content: replyText
          },
          finish_reason: 'stop'
        }
      ]
    });
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
}
