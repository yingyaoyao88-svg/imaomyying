export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const url = req.url || '';

  if (url.includes('/config')) {
    return res.status(200).json({
      configured: false,
      mode: 'demo',
      hasAppSecret: false,
      message: '支持免配置测试微信登录或配置正式微信服务号'
    });
  }

  if (url.includes('/qrcode')) {
    const sceneId = 'demo_' + Date.now();
    return res.status(200).json({
      success: true,
      sceneId,
      ticket: 'mock_ticket_' + Date.now(),
      qrUrl: `https://imaomyying.com/talk/?wechat_scene=${sceneId}`,
      isMock: true,
      expiresIn: 600
    });
  }

  if (url.includes('/mock-confirm')) {
    return res.status(200).json({
      success: true,
      message: '微信模拟扫码授权成功',
      user: {
        openid: 'wx_demo_' + Math.random().toString(36).substring(7),
        nickname: '外贸精英 · 小A',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Aomy',
        role: 'VIP 学员',
        level: 'L3 谈判专家'
      },
      token: 'mock_jwt_token_' + Date.now()
    });
  }

  if (url.includes('/check-status')) {
    return res.status(200).json({
      status: 'pending',
      message: '等待微信用户扫码'
    });
  }

  return res.status(200).json({ status: 'ok', service: 'wechat-auth' });
}
