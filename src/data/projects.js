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
    demoUrl: "https://github.com/yingyaoyao88-svg/english-learning-hub",
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
  {
    slug: "teaching-tools",
    isFlagship: false,
    number: "04",
    accent: "#10b981",
    title: {
      zh: "AomyYing 英语练习小工具",
      en: "AomyYing Teaching Tools",
    },
    subtitle: {
      zh: "面向初学者与少儿英语的轻量交互式拼读、闪卡打卡与课文对话应用",
      en: "Interactive phonics, vocabulary flashcards & reading dialogue practice Web app",
    },
    category: {
      zh: "教育提效 · 互动练习工具",
      en: "Educational Tool · Interactive App",
    },
    excerpt: {
      zh: "针对英语初学者与少儿日常拼读打卡需求开发的轻量 Web 应用。涵盖 Unit 1-6 课文同步词汇、牛津自然拼读（Oxford Phonics 1-3级）、Let's talk 场景对话演练与听力磨耳朵，支持真人语音发音与错题复盘机制，零依赖轻量化构建。",
      en: "A mobile-first English learning application designed for daily phonics and vocabulary practice. Features multi-unit curriculum, Oxford Phonics levels 1-3, interactive dialogues, native TTS pronunciation, and mistake reviews with zero dependencies.",
    },
    tags: {
      zh: ["Web应用", "英语教学", "自然拼读", "单词打卡", "零依赖架构"],
      en: ["Web App", "English Learning", "Phonics", "Flashcards", "Zero Dependency"],
    },
    githubUrl: "https://github.com/yingyaoyao88-svg/AomyYing-teaching-tools",
    demoUrl: "https://english-practice-app.vercel.app",
    stats: [
      { label: { zh: "打卡模块", en: "Modules" }, value: "4 大专项" },
      { label: { zh: "教材同步", en: "Curriculum" }, value: "Unit 1-6 + 拼读" },
      { label: { zh: "加载体验", en: "Performance" }, value: "<100ms 纯原生" },
    ],
    overview: {
      zh: [
        "AomyYing 英语练习小工具（Speak English）是我针对英语初学者和少儿日常跟读、打卡、拼读复习痛点自研的轻量化交互工具。",
        "市场上多数少儿/初级英语 App 动辄数百兆、充斥营销广告与付费卡点。本工具坚持“开箱即用、无干扰、沉浸式跟读”原则，通过单页面原生技术栈实现秒级响应与丝滑触屏体验，直接在手机或平板浏览器上就能完成高质量英语日常打卡。",
      ],
      en: [
        "AomyYing Teaching Tools (Speak English) is a lightweight, mobile-first Web application created for beginners and young learners to practice daily phonics, vocabulary retention, and dialogues.",
        "Unlike bloated commercial apps full of ads and paywalls, this tool prioritizes instant load times, distraction-free typography, and responsive touch-first cards for daily repetition.",
      ],
    },
    problem: {
      zh: [
        "传统商业英语 App 体积庞大、广告繁琐，缺乏专注纯粹的课本配套练习环境。",
        "单词记忆枯燥：纯文本背诵缺乏语音、释义与生动视觉线索的即时联想绑定。",
        "口语对话缺乏伴读：自学者在课后很难模拟双人分角色朗读（Let's talk）语境。",
      ],
      en: [
        "Heavy bloated commercial apps: Flooded with ads and paywalls, distracting students from core practice.",
        "Boring rote memorization: Text-only flashcards lack immediate visual and native phonetic associations.",
        "Lack of interactive dialogue partner: Hard to simulate real-world Let's Talk role-play conversations at home.",
      ],
    },
    solution: {
      zh: [
        "多维互动闪卡：大字号排版 + 生动 Emoji 图像线索 + 国际音标 + 原生 Web Speech 语音朗读，形成视听双重记忆通道。",
        "教材单元与自然拼读分级：涵盖 Unit 1-6 核心课标词库与牛津自然拼读 1-3 级专项进阶体系。",
        "Let's talk 场景对话演练与错题本：逐句高亮跟读对话，打卡过程中自动收集易错词汇，支持专项错题温故。",
      ],
      en: [
        "Multi-modal flashcards: Crisp typography + emoji cues + phonetic transcriptions + Web Speech native TTS for auditory anchoring.",
        "Curriculum sync & Phonics progression: Covers Unit 1-6 core syllabus alongside Oxford Phonics levels 1 to 3.",
        "Interactive dialogues & mistake bank: Turn-by-turn dialogue guidance and automatic logging of weak words for spaced revision.",
      ],
    },
    techStack: [
      "Vanilla JavaScript",
      "HTML5 & Modern CSS3",
      "Web Speech API",
      "Mobile-First Responsive UI",
      "Vercel Edge Hosting",
    ],
    features: {
      zh: [
        { title: "四大核心学习模式", desc: "单词闪卡卡片、自然拼读进阶、课文对话演练、错题专项温故一体化串联。" },
        { title: "原生语音合成与即时点读", desc: "调用浏览器原生高保真发音引擎，零额外音频流量开销，毫秒级响应发音。" },
        { title: "自适应拟物卡片交互", desc: "精心调试移动端滑动弹性与卡片点击动效，支持掌握程度自评与打卡进度条反馈。" },
        { title: "免登录纯本地状态记录", desc: "学习进度与错题记录自动本地化保存，无隐私泄露风险，打开即练。" },
      ],
      en: [
        { title: "4 Core Learning Modes", desc: "Seamless flow across Flashcards, Phonics, Let's Talk Dialogues, and Mistake Reviews." },
        { title: "Native Speech Synthesis", desc: "Instant audio playback via native Web Speech API with zero audio download latency." },
        { title: "Tactile Mobile UI", desc: "Fine-tuned touch springs, card flipping, self-rating buttons, and animated daily progress bars." },
        { title: "Zero Setup & Privacy-first", desc: "Local state preservation without account logins or trackers — instant practice on any device." },
      ],
    },
  },
  {
    slug: "portfolio-site",
    isFlagship: false,
    number: "05",
    accent: "#6366f1",
    title: {
      zh: "AOMYYING AI 个人主页与作品集",
      en: "AOMYYING AI Portfolio & Lab",
    },
    subtitle: {
      zh: "融合 Linear 工业黑曜石极客风与 Rauno 拟态微动效的高审美作品库官网",
      en: "Crafted developer portfolio with Linear Obsidian aesthetic and tactile micro-interactions",
    },
    category: {
      zh: "个人品牌 · 开源作品集",
      en: "Personal Brand · Open Source",
    },
    excerpt: {
      zh: "为 AI 科技博主与独立开发者量身打造的高审美数字化主页。采用 React 18 + Vite + Tailwind CSS 构建，深度融合 Linear 工业黑曜石暗调网格与 Apple 拟态触感交互。集成 React Bits 动效、Canvas 粒子星空、三套高质感主题切换、全平台自媒体矩阵及共建投稿审核系统。",
      en: "A high-craft portfolio website for AI creators and indie builders. Built with React 18, Vite, and Tailwind CSS. Features React Bits motion components, dynamic particle canvas, 3 curated aesthetic themes, and an interactive showcase.",
    },
    tags: {
      zh: ["React 18", "Vite", "Tailwind CSS", "Framer Motion", "Bento Grid", "开源项目"],
      en: ["React 18", "Vite", "Tailwind CSS", "Framer Motion", "Bento Grid", "Open Source"],
    },
    githubUrl: "https://github.com/yingyaoyao88-svg/imaomyying",
    demoUrl: "https://imaomyying.com/",
    stats: [
      { label: { zh: "视觉主题", en: "Themes" }, value: "3 款高质感" },
      { label: { zh: "动效引擎", en: "Motion" }, value: "React Bits + Framer" },
      { label: { zh: "部署平台", en: "Hosting" }, value: "Vercel Global CDN" },
    ],
    overview: {
      zh: [
        "AOMYYING 个人作品库官网是我作为 AI 科技博主与独立开发者对外展示作品、沉淀开源项目以及连接同行的核心数字门户。",
        "网站全面告别千篇一律的通用模板，汲取 Linear、Paco Coursey 与 Rauno 的前沿设计工程美学，注重 1px 微发光边框、鼠标聚光灯反光、柔和星空粒子与触觉反馈，呈现极客专业度与审美质感的平衡。",
      ],
      en: [
        "AOMYYING Portfolio Website is the primary digital gateway showcasing my indie software projects, open-source repositories, and cross-platform creator matrix.",
        "Moving beyond generic templates, it draws inspiration from Linear, Paco Coursey, and Rauno. It features 1px specular borders, mouse spotlights, ambient canvas particles, and tactile micro-interactions.",
      ],
    },
    problem: {
      zh: [
        "常规模板视觉平庸：市面上常见个人主页缺乏独特的视觉识别度与设计工程细节。",
        "移动端体验割裂：很多设计感强的网站在手机端排版错乱、交互卡顿或缺少触控适配。",
        "作品展示缺少深度：简单的文字卡片无法生动呈现复杂的 AI 工作流与交互逻辑。",
      ],
      en: [
        "Generic portfolio templates: Lack distinctive visual identity and design engineering craftsmanship.",
        "Poor mobile adaptation: Fancy web designs frequently break or suffer from sluggish touch interactions on phones.",
        "Shallow project showcases: Static cards fail to convey the dynamic workflows and logic behind AI products.",
      ],
    },
    solution: {
      zh: [
        "Linear + Rauno 工业双生美学：自研 Bento Grid 布局，支持琥珀曜岩、雅致纸境、赛博薄荷三款配色秒切。",
        "React Bits 动效矩阵：引入 DecryptedText 字符解密打字机、ShinyText 流光文字、StarBorder 动态聚光流光边框与 Canvas 粒子场。",
        "深度互动沙盒与全平台自媒体联动：每个核心项目配备独立交互演示模块，并在全站打通微信公众号、小红书、视频号与二维码悬浮坞（Floating Dock）。",
      ],
      en: [
        "Linear + Rauno twin aesthetic: Modular Bento Grid supporting instant toggling between Amber Obsidian, Warm Linen, and Cyber Mint.",
        "React Bits animation suite: Integrated DecryptedText typewriter, ShinyText shimmer, StarBorder glow borders, and canvas particles.",
        "Interactive feature sandboxes: Every project features an interactive sandbox alongside an Apple-inspired floating dock with WeChat QR.",
      ],
    },
    techStack: [
      "React 18",
      "Vite",
      "Tailwind CSS",
      "Framer Motion",
      "Lucide Icons",
      "Vercel Edge",
    ],
    features: {
      zh: [
        { title: "三大沉浸式主题系统", desc: "一键切换「琥珀曜岩」高级黑金、「雅致纸境」温润燕麦纸质与「赛博薄荷」极客板岩绿。" },
        { title: "React Bits 高质感微动效", desc: "字符解密渐现、流光边框、动态粒子网格与悬浮卡片聚光灯反光。" },
        { title: "独立项目交互展示页", desc: "为各个开源工具定制沉浸式操作沙盒，所见即所得体验产品核心能力。" },
        { title: "底部浮动交互坞 (Dock)", desc: "iOS/macOS 风格磨砂玻璃 Dock，集成多主题快切、微信联系二维码弹窗与语言切换。" },
      ],
      en: [
        { title: "3 Curated Themes", desc: "Instant toggle between Amber Obsidian, Warm Linen, and Cyber Mint palettes." },
        { title: "React Bits Micro-Interactions", desc: "DecryptedText typewriter, StarBorder shimmering outlines, and interactive canvas particles." },
        { title: "Dedicated Interactive Sandboxes", desc: "Playable feature demos inside each project detail page for hands-on evaluation." },
        { title: "Floating Dock with WeChat Modal", desc: "iOS/macOS frosted glass dock with quick theme switching, WeChat QR modal, and language toggle." },
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
  {
    name: "AomyYing-teaching-tools",
    title: { zh: "AomyYing 英语练习小工具 (Speak English)", en: "AomyYing Teaching Tools" },
    desc: {
      zh: "面向少儿与初学者的轻量交互式英语拼读、单词打卡与口语对话应用，零依赖纯原生轻量化构建。",
      en: "Lightweight interactive phonics, flashcards & dialogue practice Web app built with zero dependencies.",
    },
    language: "JavaScript / HTML",
    langColor: "#f1e05a",
    stars: 0,
    url: "https://github.com/yingyaoyao88-svg/AomyYing-teaching-tools",
    demoUrl: "https://english-practice-app.vercel.app",
  },
  {
    name: "imaomyying",
    title: { zh: "AOMYYING AI 个人主页与作品库", en: "AOMYYING Portfolio Website" },
    desc: {
      zh: "融合 Linear 工业黑曜石极客风与 Rauno 拟态微动效的个人官网，React 18 + Vite + Tailwind CSS。",
      en: "High-aesthetic developer portfolio with Linear Obsidian style & Rauno micro-interactions.",
    },
    language: "JavaScript / React",
    langColor: "#61dafb",
    stars: 0,
    url: "https://github.com/yingyaoyao88-svg/imaomyying",
    demoUrl: "https://imaomyying.com/",
  },
];

export function getProjectBySlug(slug) {
  if (slug === "xiao-a-cover-skill") {
    return projects.find((project) => project.slug === "xhs-cover-gen");
  }
  if (slug === "AomyYing-teaching-tools") {
    return projects.find((project) => project.slug === "teaching-tools");
  }
  if (slug === "imaomyying") {
    return projects.find((project) => project.slug === "portfolio-site");
  }
  return projects.find((project) => project.slug === slug);
}

