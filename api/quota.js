/**
 * api/quota.js
 * 用户额度与会员权益管控接口 (Vercel Serverless Function)
 * 职责：
 * 1. 查询用户当日剩余通话秒数与会员等级 (GET /api/quota?userId=xxx)
 * 2. 扣减通话秒数或核销生成次数 (POST /api/quota/consume)
 */

const inMemoryQuotas = new Map();

export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  let body = req.body;
  if (typeof body === 'string') {
    try { body = JSON.parse(body); } catch {}
  }
  body = body || {};

  const userId = req.query?.userId || body.userId || 'guest_default';
  const today = new Date().toISOString().slice(0, 10);

  // 初始化今日配额
  let userRecord = inMemoryQuotas.get(userId);
  if (!userRecord || userRecord.lastDate !== today) {
    userRecord = {
      userId,
      role: 'free',
      dailySecondsLeft: 180, // 每日 3 分钟免费时长
      totalPaidSeconds: 0,
      dailyScriptsLeft: 1,   // 每日 1 次自定义商品生成
      lastDate: today
    };
    inMemoryQuotas.set(userId, userRecord);
  }

  // 1. 扣减时长 (POST /api/quota)
  if (req.method === 'POST') {
    const { secondsUsed = 0, scriptUsed = false } = body;
    if (secondsUsed > 0) {
      userRecord.dailySecondsLeft = Math.max(0, userRecord.dailySecondsLeft - secondsUsed);
    }
    if (scriptUsed) {
      userRecord.dailyScriptsLeft = Math.max(0, userRecord.dailyScriptsLeft - 1);
    }

    return res.status(200).json({
      success: true,
      quota: userRecord,
      message: '配额已更新'
    });
  }

  // 2. 查询配额 (GET /api/quota)
  return res.status(200).json({
    success: true,
    quota: userRecord
  });
}
