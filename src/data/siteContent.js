import {
  BookOpen,
  Bot,
  BrainCircuit,
  Code2,
  Compass,
  ExternalLink,
  Flame,
  Globe,
  Github,
  Layers,
  Mail,
  MessageCircle,
  MessageSquareCode,
  Network,
  Phone,
  Radio,
  Share2,
  Smartphone,
  Sparkles,
  Tv,
  Video,
  Workflow,
} from "lucide-react";

export const creatorBio = {
  name: {
    zh: "小A (Aomy Ying)",
    en: "Aomy Ying (小A)",
  },
  role: {
    zh: "AI 科技博主 · 独立产品开发者 · 英语学习探索者",
    en: "AI Tech Creator · Independent Builder · English Learning Explorer",
  },
  tagline: {
    zh: "把 AI 落地成好玩、实用的工具与工作流，记录每一个从 0 到 1 的探索故事。",
    en: "Turning AI into tangible, enjoyable tools and workflows, documenting every zero-to-one journey.",
  },
  description: {
    zh: "专注于把前沿 AI 与实际学习场景（尤其是成人自学、英语效率工具、自媒体工作流）结合。不只是做概念，更注重把想法落地为可交互、能解决真实痛点的独立产品，并通过自媒体持续分享实践复盘与踩坑心得。",
    en: "Focusing on blending state-of-the-art AI with everyday learning needs — specifically adult self-directed English study and content workflows. Building real, shippable prototypes while documenting lessons and insights.",
  },
};

export const mediaAccounts = [
  {
    id: "x",
    platform: "X (Twitter)",
    platformEn: "X (Twitter)",
    handle: "@Aomyying",
    tag: "全球阵地 · Build in Public",
    tagEn: "Global Voice · Build in Public",
    color: "#0f1419",
    bgSoft: "rgba(15, 20, 25, 0.12)",
    url: "https://x.com/Aomyying",
    desc: "实时同步独立全栈开发动态、AI 工具测评、全球前沿科技观察与精选短文专栏。",
    descEn: "Daily build-in-public logs, generative AI workflows, and tech insights.",
  },
  {
    id: "xhs",
    platform: "小红书",
    platformEn: "Xiaohongshu",
    handle: "小A的AI日记",
    tag: "AI创意玩法 & 实用工具",
    tagEn: "Creative AI & Practical Tools",
    color: "#ff2442",
    bgSoft: "rgba(255, 36, 66, 0.12)",
    icon: Flame,
    desc: "实测最新 AI 工具、提示词技巧与好玩的 AI 落地场景。",
    descEn: "Sharing practical AI tools, prompt tricks, and creative workflows.",
  },
  {
    id: "gzh",
    platform: "微信公众号",
    platformEn: "WeChat Official",
    handle: "小A 的AI日记",
    tag: "深度长文 & 技术复盘",
    tagEn: "In-depth Articles & Case Studies",
    color: "#07c160",
    bgSoft: "rgba(7, 193, 96, 0.12)",
    icon: MessageSquareCode,
    desc: "系统化复盘独立开发经验、AI 赋能学习方法论与思考总结。",
    descEn: "Systematic deep-dives on indie building, learning models, and workflows.",
  },
  {
    id: "sph",
    platform: "微信视频号",
    platformEn: "WeChat Channels",
    handle: "小A的AI日记",
    tag: "实操演示 & 案例精讲",
    tagEn: "Live Demos & Screen Walkthroughs",
    color: "#fa9d3b",
    bgSoft: "rgba(250, 157, 59, 0.12)",
    icon: Video,
    desc: "高清录屏实操、工具对比评测与沉浸式产品搭建过程。",
    descEn: "Product walkthroughs, screen demos, and build-in-public logs.",
  },
  {
    id: "dy",
    platform: "抖音",
    platformEn: "Douyin / TikTok",
    handle: "小A的AI指南",
    tag: "新手友好 & 提效指南",
    tagEn: "Beginner-friendly AI Guide",
    color: "#00f2fe",
    bgSoft: "rgba(0, 242, 254, 0.12)",
    icon: Tv,
    desc: "30秒快速上手的 AI 玩法，帮普通人无门槛享受 AI 红利。",
    descEn: "Bite-sized, zero-friction AI tips and daily productivity boosters.",
  },
];

export const featuredArticles = [
  {
    id: "art-1",
    title: {
      zh: "英语卡住的地方，从来不是缺资料：商务、口语、写作、雅思4个场景的AI练法",
      en: "Why English Learning Stalls: AI Workflows for Business, Speaking, Writing & IELTS",
    },
    excerpt: {
      zh: "成年人学英语最大的痛点不是没资源，而是改过的句子不留痕、犯过的错没人记。本文详解如何通过桌面 AI Agent 与记忆类 Skills，打通商务、日常口语、英文写作与雅思 4 个高频场景的真实练习闭环。",
      en: "The real bottleneck in adult English study isn't lack of material — it's the lack of iterative retention. Exploring how to use AI Agents and memory skills to build real feedback loops across 4 core scenarios.",
    },
    category: {
      zh: "AI × 英语实战",
      en: "AI × English",
    },
    date: "2026-10",
    readTime: "8 min read",
    platform: "X 专栏 / 好文集",
    platformEn: "X Thread & Haowenji",
    author: "@Aomyying",
    url: "https://x.com/Aomyying",
    tags: ["AI学英语", "工作流", "口语训练", "商务表达", "提示词"],
  },
  {
    id: "art-2",
    title: {
      zh: "豆包工作学英语：口语词汇商务英语实操指南",
      en: "Mastering Spoken & Business English with AI: Practical Workflow Guide",
    },
    excerpt: {
      zh: "针对职场人时间碎片化、缺乏纯英文语言环境的现实，分享如何把 AI 深度调优为 24 小时待命的私人商务私教。涵盖外企日常开会、跨国邮件沟通、薪资谈判与场景模拟三件套实战实操。",
      en: "A step-by-step practical blueprint for working professionals to transform AI into a 24/7 personal business English coach for meetings, emails, and conversational drills.",
    },
    category: {
      zh: "职场商务 · 提效",
      en: "Business English",
    },
    date: "2026-09",
    readTime: "6 min read",
    platform: "X 专栏 / 好文集",
    platformEn: "X Thread & Haowenji",
    author: "@Aomyying",
    url: "https://x.com/Aomyying",
    tags: ["职场英语", "商务邮件", "口语对话", "豆包AI", "高频词汇"],
  },
  {
    id: "art-3",
    title: {
      zh: "从 0 到 1 打造独立产品：AI 辅助编程开发与边缘部署全记录",
      en: "Zero-to-One Shipping: Full-stack AI Coding & Edge Deployment Field Notes",
    },
    excerpt: {
      zh: "复盘如何借助 Claude Code、Cursor、Next.js 与 Cloudflare D1 边缘架构，在无需高昂服务器运维成本的前提下，一个人从真实痛点构想到上线生产级全栈产品的完整实战与踩坑指南。",
      en: "A comprehensive retrospective on building and shipping full-stack products using Claude Code, Cursor, Next.js, and Cloudflare D1 with minimal server overhead.",
    },
    category: {
      zh: "独立开发 · 复盘",
      en: "Indie Building",
    },
    date: "2026-10",
    readTime: "10 min read",
    platform: "X / 小A的AI日记",
    platformEn: "X / Xiao-A Diary",
    author: "@Aomyying",
    url: "https://x.com/Aomyying",
    tags: ["独立全栈", "Claude Code", "Cloudflare D1", "Next.js", "出海产品"],
  },
  {
    id: "art-4",
    title: {
      zh: "自媒体 IP 视觉一致性方案：个人角色固化与爆款封面自动化",
      en: "Personal IP Visual Continuity: Character Locking & Automated Cover Generation",
    },
    excerpt: {
      zh: "自媒体创作者如何解决角色面部漂移与制图繁琐的痛点？把个人 IP 形象参数化，锁定比例与五官特征，结合 3D 创意场景与立体字排版模板，将单张爆款封面制作耗时从 1 小时压缩至 1 分钟。",
      en: "How content creators can anchor character visual consistency using structured prompt specs and 3D typography to cut cover production time from 1 hour to 60 seconds.",
    },
    category: {
      zh: "创作者经济 · 工作流",
      en: "Creator Economy",
    },
    date: "2026-10",
    readTime: "5 min read",
    platform: "X / 小A的AI日记",
    platformEn: "X / Xiao-A Diary",
    author: "@Aomyying",
    url: "https://x.com/Aomyying",
    tags: ["IP角色设计", "AIGC生图", "小红书爆款", "Prompt规范", "自动化"],
  },
];

export const contactDetails = {
  wechat: "15038098595",
  email: "yingyaoyao88@gmail.com",
  phone: "15038098595",
  github: "https://github.com/yingyaoyao88-svg",
  x: "https://x.com/Aomyying",
  twitter: "https://x.com/Aomyying",
  xHandle: "@Aomyying",
  qrcode: "/wechat-qrcode.jpg",
};

export const skillsList = [
  { name: "Next.js & React 19", category: "Frontend" },
  { name: "Cloudflare D1 & Workers", category: "Backend" },
  { name: "Drizzle ORM", category: "Database" },
  { name: "Prompt Engineering", category: "AI" },
  { name: "Claude Code & Cursor", category: "Tools" },
  { name: "Workflow Automation", category: "System" },
  { name: "English Learning Design", category: "Domain" },
  { name: "Content Creation (XHS/GZH)", category: "Media" },
];

export const creatorHighlights = [
  {
    number: "01",
    title: { zh: "英语学习资源导航站", en: "English Learning Hub" },
    tag: { zh: "已上线 / 核心旗舰", en: "Flagship / Live" },
    desc: {
      zh: "面向成人自学者，分类聚合全网顶尖英语资源，支持社区免登录推荐与后台智能审核。",
      en: "Curated learning resources for adult learners with community submissions and Drizzle ORM.",
    },
  },
  {
    number: "02",
    title: { zh: "声幕练习 · 影视听说训练", en: "Scene Practice · Cinema English" },
    tag: { zh: "已上线 / 独立产品", en: "Live Web App" },
    desc: {
      zh: "用一段好戏练会一句地道英语，精选影视原声切片与30秒微练，打通原声盲听到场景实战表达。",
      en: "Cinema-based English listening & speech trainer featuring authentic movie clips & 30s shadowing loops.",
    },
  },
  {
    number: "03",
    title: { zh: "小红书 AI 封面生成系统", en: "XHS AI Cover Generator" },
    tag: { zh: "自用提效 / 孵化中", en: "Creator Tool" },
    desc: {
      zh: "基于个人 IP 角色「小A」特征固化与 3D 立体字排版，一键生成爆款小红书封面图。",
      en: "Automated 3D cover generator maintaining consistent IP character Xiao-A.",
    },
  },
  {
    number: "04",
    title: { zh: "Obsidian 微信排版发布插件", en: "Obsidian WeChat Publisher" },
    tag: { zh: "开源工具 / 插件", en: "Open Source Plugin" },
    desc: {
      zh: "将本地 Obsidian Markdown 笔记无缝转换为精美微信公众号排版并一键发布草稿箱。",
      en: "Seamlessly converts Markdown notes into styled WeChat Official articles.",
    },
  },
  {
    number: "05",
    title: { zh: "AomyYing 英语练习小工具", en: "AomyYing Teaching Tools" },
    tag: { zh: "已上线 / 教学应用", en: "Live Web App" },
    desc: {
      zh: "移动优先的高效英语打卡练习工具，融合自然拼读、课本同步对话演练与智能语音发音磨耳朵。",
      en: "Mobile-first English practice app with phonics, textbook dialogues, and audio pronunciation.",
    },
  },
];
