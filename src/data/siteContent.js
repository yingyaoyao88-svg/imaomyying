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

export const contactDetails = {
  wechat: "15038098595",
  email: "yingyaoyao88@gmail.com",
  phone: "15038098595",
  github: "https://github.com/yingyaoyao88-svg",
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
    title: { zh: "小红书 AI 封面生成系统", en: "XHS AI Cover Generator" },
    tag: { zh: "自用提效 / 孵化中", en: "Creator Tool" },
    desc: {
      zh: "基于个人 IP 角色「小A」特征固化与 3D 立体字排版，一键生成爆款小红书封面图。",
      en: "Automated 3D cover generator maintaining consistent IP character Xiao-A.",
    },
  },
  {
    number: "03",
    title: { zh: "Obsidian 微信排版发布插件", en: "Obsidian WeChat Publisher" },
    tag: { zh: "开源工具 / 插件", en: "Open Source Plugin" },
    desc: {
      zh: "将本地 Obsidian Markdown 笔记无缝转换为精美微信公众号排版并一键发布草稿箱。",
      en: "Seamlessly converts Markdown notes into styled WeChat Official articles.",
    },
  },
];
