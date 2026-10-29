const toDataUri = (svg) =>
  `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;

export const languages = {
  zh: "中文",
  en: "EN",
};

export const portfolioContent = {
  zh: {
    nav: {
      projects: "精选项目",
      media: "自媒体矩阵",
      lab: "创意工坊",
      about: "关于我",
      submit: "共建投稿",
      contact: "联系合作",
      builder: "AI Creator & Builder",
      language: "EN",
    },
    home: {
      eyebrow: "AOMYYING · 小A 的个人主页",
      title: "把 AI 落地成好玩、实用的产品，\n用自媒体记录每一个从 0 到 1。",
      description:
        "专注于成人英语学习工具探索、AI 实用工作流搭建与独立产品开发。不只停留在概念，更注重把想法做成真正能上手、解决实际问题的数字化作品。",
      ctaPrimary: "探索主打项目",
      ctaSecondary: "查看自媒体矩阵",
      flagshipBadge: "Flagship Project · 重点主打",
      mediaSectionTitle: "自媒体矩阵 · Creator Presence",
      mediaSectionDesc: "在全网多平台分享 AI 实用玩法、独立开发复盘与英语自学技巧，欢迎关注交流。",
      projectsTitle: "最新项目与开发实践",
      projectsDesc: "从真实需求出发，打造简单、纯粹且体验优秀的小而美产品。",
      contactTitle: "期待与优秀的你交流与合作",
      contactDesc: "无论是 AI 工具共创、自媒体商业合作、项目咨询还是英语学习社群，都欢迎随时联系我。",
    },
    projectSection: {
      viewCaseStudy: "查看项目详情",
      visitOnline: "在线体验",
      viewGithub: "GitHub 源码",
      copyLink: "复制分享链接",
      copied: "已复制！",
    },
    detail: {
      back: "返回主页",
      overview: "项目背景与概览",
      problem: "解决的真实痛点",
      solution: "产品设计与核心方案",
      workflow: "核心功能与架构",
      techStack: "技术栈与依赖",
      results: "项目成果与亮点",
      futurePlan: "后续规划与迭代",
    },
  },
  en: {
    nav: {
      projects: "Projects",
      media: "Media Hub",
      lab: "Creator Lab",
      about: "About Me",
      submit: "Submit",
      contact: "Contact",
      builder: "AI Creator & Builder",
      language: "中",
    },
    home: {
      eyebrow: "AOMYYING · Xiao-A Portfolio",
      title: "Building playful, useful AI products.\nDocumenting zero-to-one journeys.",
      description:
        "Focusing on adult self-directed English learning tools, practical AI workflows, and indie shipping. Crafting tangible digital products that solve real problems.",
      ctaPrimary: "Explore Flagship",
      ctaSecondary: "Media Channels",
      flagshipBadge: "Flagship Project",
      mediaSectionTitle: "Creator Channels · Media Matrix",
      mediaSectionDesc: "Sharing creative AI guides, product build logs, and language learning methods.",
      projectsTitle: "Featured Projects & Experiments",
      projectsDesc: "Clean, purpose-built tools born from real-world workflows.",
      contactTitle: "Let's connect and build together",
      contactDesc: "Open for AI collaborations, media sponsorships, project inquiries, and community building.",
    },
    projectSection: {
      viewCaseStudy: "View Case Study",
      visitOnline: "Live Demo",
      viewGithub: "GitHub Repo",
      copyLink: "Copy Link",
      copied: "Copied!",
    },
    detail: {
      back: "Back to Home",
      overview: "Overview",
      problem: "The Problem",
      solution: "The Solution",
      workflow: "Features & Architecture",
      techStack: "Tech Stack",
      results: "Highlights & Results",
      futurePlan: "Roadmap",
    },
  },
};

export const projects = [
  {
    slug: "english-learning-hub",
    isFlagship: true,
    number: "01",
    accent: "#38bdf8",
    title: {
      zh: "英语学习资源导航站",
      en: "English Learning Hub",
    },
    subtitle: {
      zh: "面向成人自学者的英语学习资源导航与共建平台",
      en: "Curated learning resources & community directory for adult English learners",
    },
    category: {
      zh: "独立全栈产品 · 资源聚合",
      en: "Full-stack Platform · Resource Hub",
    },
    excerpt: {
      zh: "针对成人自学者“好资源散落各处、缺乏分级筛选、不知从何学起”的痛点，精选分类聚合听力、口语、词汇、阅读与实用工具。支持访客免登录推荐投稿，以及基于 Cloudflare + Drizzle ORM 的超轻量边缘架构。",
      en: "A curated English resource navigation hub for adult self-directed learners. Features multi-dimensional filtering, community crowdsourcing, and ultra-fast Cloudflare edge architecture.",
    },
    tags: {
      zh: ["Next.js", "Cloudflare D1", "Drizzle ORM", "成人英语", "开源项目", "边缘部署"],
      en: ["Next.js", "Cloudflare D1", "Drizzle ORM", "English Learning", "Open Source", "Edge"],
    },
    githubUrl: "https://github.com/yingyaoyao88-svg/english-learning-hub",
    demoUrl: "https://imaomyying.com/english",
    stats: [
      { label: { zh: "涵盖模块", en: "Modules" }, value: "5+ 专项分类" },
      { label: { zh: "架构模式", en: "Architecture" }, value: "Edge Fullstack" },
      { label: { zh: "互动机制", en: "Community" }, value: "免登录投稿推荐" },
    ],
    overview: {
      zh: [
        "英语学习资源导航站（English Learning Hub）是我专门为成人自学者打造的精选资源聚合与推荐平台。",
        "网络上的英语学习资源极多，但绝大多数被商业广告、碎片化碎片教程充斥，成年人很难快速找到适合自己当前水平（零基础/进阶/考证）的工具。这个网站通过严格筛选与分类，提供真正高质量的学习路径入口。",
      ],
      en: [
        "English Learning Hub is a purpose-built directory platform specifically designed for adult self-learners.",
        "While the web is full of English learning materials, they are often buried under commercial ads or fragmented advice. This hub organizes handpicked tools and websites into clear, level-appropriate categories.",
      ],
    },
    problem: {
      zh: [
        "信息碎片化严重：自学英语者常在各个社交平台收藏几十篇“资源贴”，但真正要用时找不到或早已失效。",
        "缺乏水平与场景分级：很多工具难度过高或偏离成年人日常交际需求，容易让人在初期产生挫败感。",
        "缺少开放的推荐与共建渠道：优质的冷门好工具很难被更多人看到。",
      ],
      en: [
        "Fragmented information: Learners bookmark countless resource lists on social media that quickly get lost or become obsolete.",
        "Lack of skill-level curation: Many popular tools are either too academic or not geared toward adult practical use.",
        "Limited community contribution: Great niche tools lack a central place to be recommended and reviewed.",
      ],
    },
    solution: {
      zh: [
        "多维精准检索：按技能（听力、口语、阅读、词汇、发音）、价格（免费/付费）与适用阶段立体筛选。",
        "开放共创生态：访客无需复杂注册，直接输入网址与推荐理由即可一键推荐优质资源，进入后台待审流。",
        "轻量敏捷架构：利用 Next.js + Cloudflare D1 数据库与 Drizzle ORM，在边缘端毫秒级响应，无需庞大服务器维护成本。",
      ],
      en: [
        "Multi-dimensional filtering: Search and slice by domain (listening, speaking, reading, vocab), cost, and difficulty level.",
        "Frictionless submission: Visitors can submit recommended resources without account creation, which enter an admin review queue.",
        "Edge-first architecture: Powered by Next.js, Cloudflare D1, and Drizzle ORM for sub-second global responses with minimal overhead.",
      ],
    },
    techStack: [
      "Next.js",
      "React 19",
      "TypeScript",
      "Cloudflare D1 & Workers",
      "Drizzle ORM",
      "Tailwind CSS",
      "Lucide Icons",
      "Vitest",
    ],
    features: {
      zh: [
        { title: "全站即时搜索与过滤", desc: "毫秒级响应关键字检索，按听力/口语/词汇/工具标签快速定位目标资源。" },
        { title: "免登录投稿通道", desc: "极简表单收集优质网址与推荐语，前端自动进行 URL 格式校验与防重复校验。" },
        { title: "管理员审核后台", desc: "内置 /admin 审核面板，支持一键批准、编辑信息或拒绝无效提交。" },
        { title: "自适应深色/浅色模式", desc: "针对长时间自学浏览需求，提供极简、无广告打扰的清爽阅读体验。" },
      ],
      en: [
        { title: "Instant Search & Filtering", desc: "Sub-second search across domain tags (listening, speaking, vocab, tools)." },
        { title: "Frictionless Submissions", desc: "Lightweight submission modal with automatic URL validation and de-duplication." },
        { title: "Admin Curation Panel", desc: "Dedicated admin interface to review, approve, edit, or reject pending items." },
        { title: "Distraction-free UI", desc: "Ad-free, clean reading experience crafted for extended learning sessions." },
      ],
    },
  },
  {
    slug: "xhs-cover-gen",
    isFlagship: false,
    number: "02",
    accent: "#ff2442",
    title: {
      zh: "小红书 AI 封面生成系统",
      en: "XHS AI Cover Generator",
    },
    subtitle: {
      zh: "AI 科技博主个人 IP 视觉固化与爆款封面自动化工作流",
      en: "Personal IP visual consistency & 3D cover automation for Xiaohongshu",
    },
    category: {
      zh: "自媒体提效 · IP 视觉系统",
      en: "Creator Tooling · IP System",
    },
    excerpt: {
      zh: "针对小红书自媒体高频发布痛点，打造了基于个人 IP 角色「小A」的自动化封面生成系统。固化人物大头小身 Q 版比例与特征，结合 3D 悬浮创意场景与立体字排版，将封面制作从 1 小时压缩至 1 分钟。",
      en: "An automated cover generator for personal tech IP 'Xiao-A'. Preserves consistent character features, creates 3D playful scenes, and drops production time from 1 hour to 1 minute.",
    },
    tags: {
      zh: ["AI 创意生图", "小红书爆款", "个人 IP 角色", "自动化工作流", "Prompt 模板"],
      en: ["Generative AI", "Social Media", "Character IP", "Automation", "Prompt Design"],
    },
    githubUrl: "https://github.com/yingyaoyao88-svg/xiao-a-cover-skill",
    demoUrl: "https://github.com/yingyaoyao88-svg/xiao-a-cover-skill",
    stats: [
      { label: { zh: "制图耗时", en: "Time Saved" }, value: "从 60m 降至 1m" },
      { label: { zh: "IP 一致性", en: "Consistency" }, value: "角色特征 100% 固化" },
      { label: { zh: "产出规格", en: "Dimensions" }, value: "3:4 竖版 1242×1656" },
    ],
    overview: {
      zh: [
        "作为自媒体创作者，「小A的AI日记」在日常输出短视频与图文时，封面点击率对流量至关重要。",
        "以往每次制作具有 3D 立体感和个人 IP 形象的封面，需要经历角色修图、场景渲染、打光合成、标题排版等繁重步骤。我把这套流程固化为标准化 AI 工作流，输入主题即可全自动输出视觉统一的品牌封面。",
      ],
      en: [
        "As a content creator on Xiaohongshu, cover click-through rates directly dictate reach and subscriber growth.",
        "Previously, producing high-impact 3D covers featuring personal IP character Xiao-A required complex 3D staging, photo editing, and typography. This workflow encapsulates the entire pipeline into a one-click automated prompt system.",
      ],
    },
    problem: {
      zh: [
        "人物角色易漂移：通用生图工具难以稳定保持同一张脸、发型和穿搭风格。",
        "制作成本高：每期自媒体内容单单在封面构思和修图排版上就要消耗 1 小时以上。",
        "缺少系列辨识度：不同期封面风格各异，难以在主页形成强烈的个人视觉品牌壁垒。",
      ],
      en: [
        "Character drift: Generic generative tools struggle to maintain exact face and style consistency across batches.",
        "High manual overhead: Spending 1+ hours per post tweaking layout and styling hurts publishing frequency.",
        "Visual fragmentation: Inconsistent covers prevent building an instantly recognizable personal brand.",
      ],
    },
    solution: {
      zh: [
        "角色资产包固化：定义固定特征提示词与干净参考图，锁定「大头小身 Q 版」比例。",
        "四大戏剧化创意场景套路：万物悬浮、地图图钉、城市上空俯瞰、素描破纸。",
        "双行蓝白 3D 立体标题体系：上行引子 + 下行核心利益钩子，字号占画面 85%，确保信息一秒传达。",
      ],
      en: [
        "Locked character spec: Strict character references and identity prompts ensure exact visual continuity.",
        "Signature creative scenarios: Zero-gravity floating objects, map pins, high-angle skylines, sketch tear-outs.",
        "3D dual-line typography: Clean white-and-blue extruded 3D lettering that grabs attention instantly in feeds.",
      ],
    },
    techStack: [
      "Python",
      "Prompt Specification",
      "Python PIL",
      "Codex Skill",
      "Character Spec Model",
    ],
    features: {
      zh: [
        { title: "IP 角色特征锚定", desc: "人物脸型、五官比例、发型肤色及服装配件严格一致，拒绝面部漂移。" },
        { title: "3D 标题排版规范", desc: "白字蓝边带立体投影，第一行引子轻巧错位，第二行视觉重心放大。" },
        { title: "开箱即用 Prompt 模板", desc: "只需填入当前主题关键词，自动补齐镜头打光、画质增强与构图约束。" },
      ],
      en: [
        { title: "Identity Locking", desc: "Rigorous face, hairstyle, and outfit consistency without facial distortion." },
        { title: "3D Typography System", desc: "3D extruded titles designed specifically for mobile feed glanceability." },
        { title: "Modular Prompt Engine", desc: "Plug in the topic keyword and generate ready-to-render multi-angle scenes." },
      ],
    },
  },
  {
    slug: "obsidian-wechat-publisher",
    isFlagship: false,
    number: "03",
    accent: "#07c160",
    title: {
      zh: "Obsidian 微信公众号排版插件",
      en: "Obsidian WeChat Publisher",
    },
    subtitle: {
      zh: "打通本地知识库与微信生态的一键式内容发布工具",
      en: "Frictionless Markdown-to-WeChat publication plugin for Obsidian",
    },
    category: {
      zh: "开源工具 · 知识管理扩展",
      en: "Open Source · PKM Workflow",
    },
    excerpt: {
      zh: "解决 Markdown 创作者排版难、复制格式易错、图床繁琐的难题。直接在 Obsidian 笔记软件中将文章一键编译为符合微信公众号阅读习惯的精美格式，支持样式定制与草稿箱无缝发布。",
      en: "Eliminates tedious manual copy-pasting and broken formatting when moving notes from Obsidian to WeChat Official Accounts. Compiles Markdown directly into beautifully styled WeChat drafts.",
    },
    tags: {
      zh: ["Obsidian 插件", "微信公众号", "Markdown", "内容自动化", "开源"],
      en: ["Obsidian Plugin", "WeChat Official", "Markdown", "Publishing", "Open Source"],
    },
    githubUrl: "https://github.com/yingyaoyao88-svg/obsidian-wechat-publisher",
    demoUrl: "https://github.com/yingyaoyao88-svg/obsidian-wechat-publisher",
    stats: [
      { label: { zh: "排版效率", en: "Formatting" }, value: "从 20m 缩短至 5s" },
      { label: { zh: "代码样式", en: "Code Blocks" }, value: "原生高亮无缝适配" },
      { label: { zh: "发布流程", en: "Publishing" }, value: "本地直连草稿箱" },
    ],
    overview: {
      zh: [
        "作为知识创作者，我的大量深度文章都在本地 Obsidian 中用纯 Markdown 撰写。但将 Markdown 复制到微信公众号后台时，标题层级丢失、引用块丑陋、代码块崩坏是长期困扰写作者的痛点。",
        "这个插件让作者可以在 Obsidian 内完成写作、主题排版预览，并直接一键推送到微信公众号草稿箱，真正实现“写完即排好，一键可发布”。",
      ],
      en: [
        "As an indie thinker, most of my deep-dive essays are written in Obsidian using raw Markdown. But pasting Markdown into WeChat's editor frequently breaks headings, quotes, and code blocks.",
        "This plugin bridges the gap: write in Obsidian, preview styled articles locally, and push directly to WeChat drafts with one click.",
      ],
    },
    problem: {
      zh: [
        "微信后台编辑器对 Markdown 支持极弱，手动调整字号、间距与配色费时费力。",
        "多平台第三方排版工具需要来回黏贴，存在数据泄露与隐私顾虑。",
        "图片上传容易超时或丢失，本地图片无法直接随文章发布。",
      ],
      en: [
        "WeChat's native editor lacks proper Markdown support, forcing tedious manual styling every time.",
        "Third-party cloud editors require uploading drafts, creating security and privacy concerns.",
        "Images frequently fail or require separate uploading pipelines.",
      ],
    },
    solution: {
      zh: [
        "本地渲染引擎：内置多套高质感排版主题（极简黑白、技术蓝、自然绿），就地完成 HTML 样式内联。",
        "一键直推草稿箱：调用微信开放接口，安全保存凭证，一键将本地文章、封面图与图片推入草稿箱。",
        "零数据外流：所有编译与排版逻辑全部在本地运行，保护创作者未发布思考的隐私安全。",
      ],
      en: [
        "Local styling compiler: Inlines responsive CSS themes (minimal, tech blue, warm paper) on the fly.",
        "Direct draft injection: Uses official WeChat API to upload articles, images, and covers straight to drafts.",
        "100% local privacy: No intermediate cloud servers; your private thoughts remain safely on your machine.",
      ],
    },
    techStack: ["TypeScript", "Obsidian API", "WeChat Official API", "CSS inlining"],
    features: {
      zh: [
        { title: "多套精选微信排版主题", desc: "专为长文阅读优化行高、字距与引用块色彩，告别千篇一律的粗糙排版。" },
        { title: "代码高亮与公式渲染", desc: "完美支持代码高亮与 KaTeX 数学公式渲染成适合移动端阅读的 SVG。" },
        { title: "图片一键转存微信素材库", desc: "自动提取笔记中的本地或在线图片，合规转存为微信官方临时素材。" },
      ],
      en: [
        { title: "Curated Typography Themes", desc: "Fine-tuned line height, letter spacing, and blockquotes for mobile reading." },
        { title: "Syntax Highlighting & Math", desc: "Renders code and KaTeX formulas into crisp mobile-friendly SVGs." },
        { title: "Automated Asset Sync", desc: "Detects local images and uploads them directly to WeChat media storage." },
      ],
    },
  },
];

export const githubRepositories = [
  {
    name: "english-learning-hub",
    title: { zh: "英语学习资源导航站", en: "English Learning Hub" },
    desc: {
      zh: "面向成人自学者的精选英语资源导航与推荐共建平台，Next.js + Cloudflare D1 边缘架构。",
      en: "Curated learning resources & community directory for adult English learners.",
    },
    language: "TypeScript",
    langColor: "#3178c6",
    stars: 0,
    url: "https://github.com/yingyaoyao88-svg/english-learning-hub",
    isFlagship: true,
  },
  {
    name: "obsidian-wechat-publisher",
    title: { zh: "Obsidian 微信公众号排版与发布工作台", en: "Obsidian WeChat Publisher" },
    desc: {
      zh: "所见即所发的 Obsidian 公众号排版插件，内置 17 款主题与 4 种模板，一键直推草稿箱。",
      en: "Frictionless Markdown-to-WeChat publication plugin with live preview & 17 themes.",
    },
    language: "TypeScript",
    langColor: "#3178c6",
    stars: 2,
    url: "https://github.com/yingyaoyao88-svg/obsidian-wechat-publisher",
  },
  {
    name: "xiao-a-cover-skill",
    title: { zh: "小A 3D 爆款人物 IP 封面 Skill", en: "Xiao-A 3D Cover Generator Skill" },
    desc: {
      zh: "面向 AI 智能体的封面生成 Skill，输入标题自动生成原生 3:4 构图的 1080×1440 PNG。",
      en: "Character IP 3D cover generator skill for AI agents, outputs native 1080x1440 PNG.",
    },
    language: "Python",
    langColor: "#3572A5",
    stars: 0,
    url: "https://github.com/yingyaoyao88-svg/xiao-a-cover-skill",
  },
];

export function getProjectBySlug(slug) {
  if (slug === "xiao-a-cover-skill") {
    return projects.find((project) => project.slug === "xhs-cover-gen");
  }
  return projects.find((project) => project.slug === slug);
}

