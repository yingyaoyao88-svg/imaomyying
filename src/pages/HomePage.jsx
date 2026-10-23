import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Check,
  CheckCircle2,
  Clock,
  Code2,
  Compass,
  Copy,
  Cpu,
  ExternalLink,
  Flame,
  Github,
  Globe,
  Headphones,
  Layers,
  Mail,
  MessageCircle,
  MessageSquareCode,
  Mic,
  Palette,
  Phone,
  QrCode,
  Radio,
  Search,
  Send,
  Share2,
  Shuffle,
  Sparkles,
  Terminal,
  Tv,
  Video,
  Workflow,
  X,
  Zap,
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  githubRepositories,
  portfolioContent,
  projects,
} from "../data/projects";
import {
  contactDetails,
  creatorBio,
  mediaAccounts,
  skillsList,
} from "../data/siteContent";
import { addSubmission } from "../utils/storage";
import {
  DecryptedText,
  Particles,
  ShinyText,
  StarBorder,
} from "../components/reactbits";

const pick = (value, language) =>
  value && typeof value === "object" && !Array.isArray(value) && value[language] !== undefined
    ? value[language]
    : value;

const fadeUp = {
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.1 },
  transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
};

const XIAOA_MOODS = [
  {
    id: 0,
    label: "⚡ 专注构建",
    labelEn: "⚡ Focus",
    status: "FOCUS MODE // 正在写代码中",
    statusEn: "FOCUS MODE // Coding & Shipping",
    pos: "0% 50%",
    photo: "/xiaoa-real-0.jpg",
    pixel: "/xiaoa-pixel-0.jpg",
    badgeColor: "#FF5A26",
  },
  {
    id: 1,
    label: "💡 灵感发现",
    labelEn: "💡 Eureka",
    status: "EUREKA! // 发现神仙 AI 工具",
    statusEn: "EUREKA! // Discovering Next-Gen AI",
    pos: "33.33% 50%",
    photo: "/xiaoa-real-1.jpg",
    pixel: "/xiaoa-pixel-1.jpg",
    badgeColor: "#FFD600",
  },
  {
    id: 2,
    label: "🔥 硬核死磕",
    labelEn: "🔥 Debug",
    status: "DEBUGGING // 攻克复杂工作流",
    statusEn: "DEBUGGING // Cracking Workflows",
    pos: "66.66% 50%",
    photo: "/xiaoa-real-2.jpg",
    pixel: "/xiaoa-pixel-2.jpg",
    badgeColor: "#2563EB",
  },
  {
    id: 3,
    label: "✨ 完美交付",
    labelEn: "✨ Shipped",
    status: "SHIPPED // 新一期干货已发布",
    statusEn: "SHIPPED // New Drop Live",
    pos: "100% 50%",
    photo: "/xiaoa-real-3.jpg",
    pixel: "/xiaoa-pixel-3.jpg",
    badgeColor: "#10B981",
  },
];

const THEMES = [
  {
    id: "warm",
    label: "复古画报",
    labelEn: "Warm Editorial",
    color: "#ff5a26",
    desc: "新粗野主义 · 暖米报纸质感 · 错位硬阴影与活力橙",
  },
  {
    id: "obsidian",
    label: "琥珀曜岩",
    labelEn: "Amber Obsidian",
    color: "#f59e0b",
    desc: "黑曜石高级暗调 · 暖金流光 · 奢感低反光",
  },
  {
    id: "aurora",
    label: "波普拼贴",
    labelEn: "Pop Brutalism",
    color: "#10b981",
    desc: "波普拼贴美学 · 电光柠檬黄 · 翡翠薄荷撞色",
  },
];

const HUB_RESOURCE_DATABASE = [
  {
    id: "h1",
    category: "listening",
    title: "Daily Audio News",
    level: "beginner",
    tag: "FREE",
    badge: "入门精选",
    note: "分级慢速新闻，附带逐句中英双语对齐听力稿与重点生词释义，适合每天磨耳朵。",
    urlHint: "daily-audio.org",
  },
  {
    id: "h2",
    category: "listening",
    title: "BBC 6-Minute English",
    level: "intermediate",
    tag: "HOT",
    badge: "经典必听",
    note: "经典场景短对话，提炼核心地道短语与语法辨析，英音发音与原汁原味语料库。",
    urlHint: "bbc.co.uk/learningenglish",
  },
  {
    id: "h3",
    category: "listening",
    title: "TED-Ed Animated Science",
    level: "advanced",
    tag: "STAR",
    badge: "进阶思维",
    note: "通识科普短视频配双语字幕与跟读训练点，训练学术词汇与自然母语表达语速。",
    urlHint: "ed.ted.com",
  },
  {
    id: "h4",
    category: "speaking",
    title: "Interactive AI Speaking Bot",
    level: "beginner",
    tag: "AI",
    badge: "AI 对练",
    note: "基于大模型的实时口语对练助手，智能纠正连读弱读、语法错误并生成替代地道表达。",
    urlHint: "ai-speaking.internal",
  },
  {
    id: "h5",
    category: "speaking",
    title: "YouGlish Pronounce",
    level: "all",
    tag: "FREE",
    badge: "真实语境",
    note: "真实 YouTube 影视片段搜索目标词汇发音语境，一键听取英、美、澳不同口音发音。",
    urlHint: "youglish.com",
  },
  {
    id: "h6",
    category: "speaking",
    title: "Echo Shadowing Trainer",
    level: "intermediate",
    tag: "METHOD",
    badge: "跟读神器",
    note: "复述跟读法专用播放器，支持 0.8x 变速、单句循环与录音回放波形对比对比。",
    urlHint: "shadowing-player.dev",
  },
  {
    id: "h7",
    category: "reading",
    title: "News in Levels",
    level: "beginner",
    tag: "GRADED",
    badge: "分级新闻",
    note: "同一篇全球热点拆为 3 个不同词汇难度级别，初学者零查词门槛阅读原汁原味英文。",
    urlHint: "newsinlevels.com",
  },
  {
    id: "h8",
    category: "reading",
    title: "ReadTheory Adaptive Library",
    level: "intermediate",
    tag: "ADAPTIVE",
    badge: "自适应测试",
    note: "根据阅读答题情况动态调整文章难度的自适应阅读库，精准评测 Lexile 蓝思值。",
    urlHint: "readtheory.org",
  },
  {
    id: "h9",
    category: "reading",
    title: "Project Gutenberg Classics",
    level: "advanced",
    tag: "OPEN",
    badge: "原版公版书",
    note: "70,000+ 免费公有领域原版经典书与高质量排版 EPUB，支持 Kindle 与电子书下载。",
    urlHint: "gutenberg.org",
  },
  {
    id: "h10",
    category: "vocab",
    title: "EtymOnline 词源全书",
    level: "intermediate",
    tag: "CORE",
    badge: "底层逻辑",
    note: "追溯词根词缀前世今生，用希腊罗马神话逻辑替代死记硬背，单词过目不忘。",
    urlHint: "etymonline.com",
  },
  {
    id: "h11",
    category: "vocab",
    title: "Anki High-Yield Decks",
    level: "all",
    tag: "OPEN",
    badge: "科学抗遗忘",
    note: "经百万自学者验证的间隔重复高效记忆词库包，包含柯林斯高频五星与雅思核心词。",
    urlHint: "ankiweb.net",
  },
  {
    id: "h12",
    category: "tools",
    title: "LanguageTool Grammar Pro",
    level: "all",
    tag: "FREE",
    badge: "智能纠错",
    note: "多语言精准语法纠错与句式润色建议浏览器插件，让英文邮件与写作告别低级中式表达。",
    urlHint: "languagetool.org",
  },
  {
    id: "h13",
    category: "tools",
    title: "Obsidian English Vault Sync",
    level: "intermediate",
    tag: "PLUGIN",
    badge: "笔记联动",
    note: "在个人知识库内划词查词并自动同步归档至生词复习库，构建个人长期英语资产。",
    urlHint: "obsidian.md/plugins",
  },
];

const CREATIVE_LAB_TABS = [
  {
    id: "prompt",
    title: "英语自学 AI 提示词库",
    tag: "PROMPT ENGINEERING",
    desc: "小A自用的「生词语境重构与口语纠错」系统级 Prompt，让大模型变成全天候专属外教。",
    pills: ["CEFR分级对齐", "语境造句", "地道替换表达", "发音易错点提示"],
    codeSnippet: `### System Role
You are Xiao-A's Private English Coach, trained in CEFR lexical framework.

### Instructions:
1. Explain the target phrase with 2 natural, contemporary spoken scenarios.
2. Provide 1 common mistake made by non-native speakers and why it sounds unnatural.
3. Suggest 3 native alternative expressions (from casual to professional).
4. Break down the connected speech (linking, elision) for pronunciation practice.`,
  },
  {
    id: "workflow",
    title: "自媒体 3D 爆款视觉流",
    tag: "AUTOMATION WORKFLOW",
    desc: "基于个人 IP 角色统一性与高辨识度 3D 字体，从大纲到小红书 1080x1440 封面的半自动化流水线。",
    pills: ["IP Consistency", "3D Typography", "高对比度排版", "自动批处理"],
    codeSnippet: `// Xiao-A XHS Cover Automation Pipeline
const coverConfig = {
  aspectRatio: "3:4", // 1080 x 1440
  colorPalette: ["#11141c", "#f59e0b", "#f8fafc"],
  ipModel: "XiaoA_Clay3D_v2.safetensors",
  prompt: "3D stylized avatar Xiao-A holding a glowing holographic device, clean matte clay texture, soft studio lighting, high CTR composition --ar 3:4",
};`,
  },
  {
    id: "tech",
    title: "轻量独立开发极简栈",
    tag: "SYSTEM ARCHITECTURE",
    desc: "为什么选择 Next.js + Cloudflare D1 + Drizzle ORM？零服务器运维费用，毫秒级边缘响应。",
    pills: ["Serverless Edge", "Cloudflare D1", "Drizzle ORM", "零月租成本"],
    codeSnippet: `// schema.ts - Zero maintenance edge database
export const resources = sqliteTable("resources", {
  id: text("id").primaryKey(),
  title: text("title").notNull(),
  url: text("url").notNull(),
  category: text("category").notNull(),
  status: text("status").default("pending"), // 免登录提交待审
  createdAt: integer("created_at", { mode: "timestamp" }).notNull(),
});`,
  },
];

export function HomePage({ language, theme = "obsidian", onSelectTheme, onOpenQrModal }) {
  const [toastMsg, setToastMsg] = useState("");
  const [activeCategory, setActiveCategory] = useState("listening");
  const [searchQuery, setSearchQuery] = useState("");
  const [levelFilter, setLevelFilter] = useState("all");
  const [highlightedId, setHighlightedId] = useState(null);
  const [copiedMediaId, setCopiedMediaId] = useState(null);
  const [activeLabTab, setActiveLabTab] = useState("prompt");
  const [labCopied, setLabCopied] = useState(false);
  const [currentTime, setCurrentTime] = useState("");
  const [qrModalOpen, setQrModalOpen] = useState(false);
  const [moodIdx, setMoodIdx] = useState(0);
  const [avatarStyle, setAvatarStyle] = useState("sheet"); // "sheet" (真人四格) | "pixel" (复古像素) | "collage" (画报拼贴)
  const currentMood = XIAOA_MOODS[moodIdx];

  const handleOpenQr = () => {
    if (onOpenQrModal) {
      onOpenQrModal();
    } else {
      setQrModalOpen(true);
    }
  };

  // 3D Tilt state for Creator Pass
  const [tiltStyle, setTiltStyle] = useState({ transform: "rotateX(0deg) rotateY(0deg)" });

  // Submission Form State
  const [subType, setSubType] = useState("resource");
  const [subName, setSubName] = useState("");
  const [subContact, setSubContact] = useState("");
  const [subTitle, setSubTitle] = useState("");
  const [subUrl, setSubUrl] = useState("");
  const [subMessage, setSubMessage] = useState("");
  const [subSubmitted, setSubSubmitted] = useState(false);

  // Update real-time clock
  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleTimeString("zh-CN", {
          hour12: false,
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })
      );
    };
    updateClock();
    const timer = setInterval(updateClock, 1000);
    return () => clearInterval(timer);
  }, []);

  const copy = portfolioContent[language].home;
  const projectActionCopy = portfolioContent[language].projectSection;

  const showToast = (text) => {
    setToastMsg(text);
    setTimeout(() => {
      setToastMsg("");
    }, 2500);
  };

  const copyToClipboard = (text, label, id = null) => {
    navigator.clipboard.writeText(text).then(() => {
      if (id) {
        setCopiedMediaId(id);
        setTimeout(() => setCopiedMediaId(null), 2000);
      }
      showToast(
        language === "zh"
          ? `已复制 ${label}：${text}`
          : `Copied ${label}: ${text}`
      );
    });
  };

  const copyLabSnippet = (snippet) => {
    navigator.clipboard.writeText(snippet).then(() => {
      setLabCopied(true);
      showToast(language === "zh" ? "✓ 已成功复制到剪贴板！" : "Copied snippet to clipboard!");
      setTimeout(() => setLabCopied(false), 2200);
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!subName.trim() || !subContact.trim()) {
      showToast(language === "zh" ? "请填写称呼与联系方式" : "Please provide name & contact");
      return;
    }
    const typeMap = {
      resource: language === "zh" ? "推荐学习资源" : "Resource Recommendation",
      collab: language === "zh" ? "项目合作咨询" : "Project Collaboration",
      media: language === "zh" ? "自媒体商业/交流" : "Media Inquiry",
      other: language === "zh" ? "其他建议反馈" : "Feedback / Other",
    };

    addSubmission({
      type: subType,
      typeName: typeMap[subType] || subType,
      name: subName.trim(),
      contact: subContact.trim(),
      title: subTitle.trim() || (subType === "resource" ? "精选学习资源推荐" : "项目或合作交流"),
      url: subUrl.trim(),
      message: subMessage.trim(),
    });

    setSubSubmitted(true);
    showToast(language === "zh" ? "✅ 提交成功！小A 会尽快查收与联系。" : "Submitted successfully!");
  };

  // Cursor Spotlight handler for Bento Cards
  const handleCardMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty("--mouse-x", `${x}px`);
    e.currentTarget.style.setProperty("--mouse-y", `${y}px`);
  };

  // 3D Parallax tilt handler for Creator Pass
  const handlePassMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -9;
    const rotateY = ((x - centerX) / centerX) * 9;

    setTiltStyle({
      transform: `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.02, 1.02, 1.02)`,
    });
  };

  const handlePassMouseLeave = () => {
    setTiltStyle({
      transform: "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
    });
  };

  // Filtered resources for the English Hub Mockup
  const filteredResources = useMemo(() => {
    return HUB_RESOURCE_DATABASE.filter((item) => {
      const matchCat = activeCategory === "all" || item.category === activeCategory;
      const matchLevel = levelFilter === "all" || item.level === levelFilter || item.level === "all";
      const q = searchQuery.trim().toLowerCase();
      const matchSearch =
        !q ||
        item.title.toLowerCase().includes(q) ||
        item.note.toLowerCase().includes(q) ||
        item.tag.toLowerCase().includes(q);
      return matchCat && matchLevel && matchSearch;
    });
  }, [activeCategory, levelFilter, searchQuery]);

  // Surprise Me / Random Pick Feature
  const handleSurprisePick = () => {
    const pool = HUB_RESOURCE_DATABASE;
    const randomItem = pool[Math.floor(Math.random() * pool.length)];
    setActiveCategory(randomItem.category);
    setSearchQuery("");
    setLevelFilter("all");
    setHighlightedId(randomItem.id);
    showToast(
      language === "zh"
        ? `✨ 随选发现：${randomItem.title}（${randomItem.badge}）`
        : `✨ Discovered: ${randomItem.title}`
    );
    setTimeout(() => {
      setHighlightedId(null);
    }, 3500);
  };

  const flagshipProject = projects.find((p) => p.isFlagship) || projects[0];
  const secondaryProjects = projects.filter((p) => !p.isFlagship);
  const currentLabTab = CREATIVE_LAB_TABS.find((t) => t.id === activeLabTab) || CREATIVE_LAB_TABS[0];

  return (
    <motion.main
      className="page bento-home-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.45 }}
    >
      {/* Background Ambient Glow Orbs & React Bits Particles */}
      <div className="ambient-glow ambient-glow--1" />
      <div className="ambient-glow ambient-glow--2" />
      <Particles
        particleCount={42}
        speed={0.3}
        particleColors={
          theme === "aurora"
            ? ["#10b981", "#34d399", "#38bdf8"]
            : theme === "warm"
            ? ["#d97706", "#b45309", "#f59e0b"]
            : ["#f59e0b", "#fbbf24", "#38bdf8"]
        }
      />

      {/* Toast Notification */}
      {toastMsg && (
        <div className="toast-notification">
          <Check size={16} className="text-success" />
          <span>{toastMsg}</span>
        </div>
      )}

      {/* Floating Theme Studio Switcher */}
      <aside className="floating-theme-bar" aria-label="Theme selector">
        <div className="floating-theme-bar__inner">
          <span className="floating-theme-label">
            <Palette size={13} />
            <span>{language === "zh" ? "配色方案" : "Palette"}</span>
          </span>
          {THEMES.map((t) => (
            <button
              key={t.id}
              type="button"
              className={`theme-chip-btn ${theme === t.id ? "is-active" : ""}`}
              onClick={() => {
                onSelectTheme?.(t.id);
                showToast(
                  language === "zh"
                    ? `已切换至：${t.label}（${t.desc}）`
                    : `Switched to ${t.labelEn}`
                );
              }}
              title={t.desc}
            >
              <span className="theme-color-dot" style={{ background: t.color }} />
              <span className="theme-chip-name">{language === "zh" ? t.label : t.labelEn}</span>
            </button>
          ))}
        </div>
      </aside>

      <div className="section-shell bento-container">
        {/* ============================================================ */}
        {/* ROW 1: HERO & 3D TILT CREATOR PASS                           */}
        {/* ============================================================ */}
        <section className="bento-row bento-row--hero" id="entry">
          {/* Main Hero Card with Cursor Spotlight */}
          <motion.article
            className="bento-card bento-card--hero"
            onMouseMove={handleCardMouseMove}
            {...fadeUp}
          >
            <div className="bento-card__badge-row">
              <span className="live-status-pill">
                <span className="status-dot"></span>
                <span>
                  {language === "zh"
                    ? "OPEN FOR CREATIVE PROJECTS · 正在构建"
                    : "Building in public · AI & Learning"}
                </span>
              </span>

              {currentTime && (
                <span className="live-clock-pill" title="北京时间实时状态">
                  <Clock size={11} />
                  <span>CST {currentTime} · 在线创作</span>
                </span>
              )}

              <span className="bento-tag">
                <ShinyText text="AI Creator & Builder" speed={3.5} />
              </span>
            </div>

            <h1 className="bento-hero__title">
              {language === "zh" ? (
                <>
                  把 AI 落地成 <span className="hero-highlighter">好玩、实用的产品</span>，<br />
                  用自媒体记录每一个 <span className="hero-zero-to-one">从 0 到 1</span>。
                </>
              ) : (
                <>
                  Building <span className="hero-highlighter">useful, playful AI products</span>.<br />
                  Documenting every <span className="hero-zero-to-one">zero-to-one journey</span>.
                </>
              )}
            </h1>

            <p className="bento-hero__subtitle">
              {pick(creatorBio.description, language)}
            </p>

            {/* Quick Micro-stats Bento Strip (Gemini Canvas Neo-Brutalist Layout) */}
            <div className="hero-bento-stats-grid">
              <div className="hero-bento-stat hero-bento-stat--white">
                <strong className="bento-stat-val">4 大阵地</strong>
                <span className="bento-stat-lbl">{language === "zh" ? "全网「小A的AI日记」" : "Omni-channel Media"}</span>
              </div>
              <div className="hero-bento-stat hero-bento-stat--yellow">
                <strong className="bento-stat-val">100% 实战</strong>
                <span className="bento-stat-lbl">{language === "zh" ? "独立全栈开发开源" : "Independent Fullstack"}</span>
              </div>
              <div className="hero-bento-stat hero-bento-stat--lavender">
                <strong className="bento-stat-val">50+ 站点</strong>
                <span className="bento-stat-lbl">{language === "zh" ? "成人英语分级导航" : "Curated English Hub"}</span>
              </div>
            </div>

            <div className="bento-hero__actions">
              <a href="#projects" className="btn-bento btn-bento--primary neo-btn-primary">
                <span>✦ {language === "zh" ? "探索实战作品集" : "Explore Featured Works"}</span>
                <ArrowRight size={15} />
              </a>
              <a href="#media" className="btn-bento btn-bento--secondary neo-btn-secondary">
                <span>{language === "zh" ? "关注小A的AI日记" : "Follow Xiao-A's Diary"}</span>
              </a>
              <button
                type="button"
                className="btn-bento btn-bento--ghost neo-btn-ghost"
                onClick={handleOpenQr}
              >
                <QrCode size={15} />
                <span>{language === "zh" ? "微信：15038098595" : "WeChat: 15038098595"}</span>
              </button>
            </div>
          </motion.article>

          {/* High-Design Neo-Brutalist Creator Pass Card with Xiao-A Interactive Mood Sheet */}
          <div className="bento-card--pass-container">
            <motion.article
              className="bento-card bento-card--pass neo-pass-card"
              style={tiltStyle}
              onMouseMove={(e) => {
                handleCardMouseMove(e);
                handlePassMouseMove(e);
              }}
              onMouseLeave={handlePassMouseLeave}
              {...fadeUp}
            >
              {/* Tape sticker at top */}
              <div className="neo-tape-top">
                <span>CREATOR ID PASS // 2026</span>
              </div>

              <div className="pass-top-hardware">
                <div className="pass-chip neo-chip">
                  <Cpu size={13} />
                  <DecryptedText text="AI-CREATOR // 小A" speed={45} animateOn="both" />
                </div>
                <span className="pass-serial neo-serial">
                  <DecryptedText text="#AOMY-01 // VERIFIED" speed={40} animateOn="both" />
                </span>
              </div>

              {/* 3 Avatar Styles Switcher */}
              <div className="neo-style-switcher-row">
                <button
                  type="button"
                  onClick={() => setAvatarStyle("sheet")}
                  className={`neo-style-pill ${avatarStyle === "sheet" ? "is-active" : ""}`}
                >
                  <span>📸 {language === "zh" ? "真人四格" : "Photo"}</span>
                </button>
                <button
                  type="button"
                  onClick={() => setAvatarStyle("pixel")}
                  className={`neo-style-pill ${avatarStyle === "pixel" ? "is-active" : ""}`}
                >
                  <span>👾 {language === "zh" ? "复古像素" : "Pixel"}</span>
                </button>
                <button
                  type="button"
                  onClick={() => setAvatarStyle("collage")}
                  className={`neo-style-pill ${avatarStyle === "collage" ? "is-active" : ""}`}
                >
                  <span>🎨 {language === "zh" ? "画报拼贴" : "Collage"}</span>
                </button>
              </div>

              {/* Xiao-A Avatar Frame */}
              <div className="neo-avatar-frame">
                {avatarStyle === "pixel" ? (
                  <>
                    <div className="pixel-crt-scanline" />
                    <img
                      src={currentMood.pixel || "/xiaoa-pixel-avatar.jpg"}
                      alt="小A 16-bit 像素风头像"
                      className="neo-avatar-img neo-avatar-pixel"
                    />
                  </>
                ) : avatarStyle === "collage" ? (
                  <img
                    src="/xiaoa-collage.jpg"
                    alt="小A 先锋画报拼贴头像"
                    className="neo-avatar-img neo-avatar-collage"
                  />
                ) : (
                  <img
                    src={currentMood.photo || "/xiaoa-real-0.jpg"}
                    alt="小A 真实摄影展示"
                    className="neo-avatar-img neo-avatar-real"
                  />
                )}

                {/* Bottom Tape Status Strip */}
                <div
                  className="neo-avatar-status-strip"
                  style={{ backgroundColor: currentMood.badgeColor }}
                >
                  <span className={`neo-status-text ${avatarStyle === "pixel" ? "pixel-font" : ""}`}>
                    {avatarStyle === "pixel"
                      ? (language === "zh" ? `[LV.99 PIXEL] ${currentMood.status}` : `[LV.99 PIXEL] ${currentMood.statusEn}`)
                      : (language === "zh" ? currentMood.status : currentMood.statusEn)}
                  </span>
                </div>
              </div>

              {/* 4 Mood Selector Buttons (visible in sheet and pixel mode) */}
              {(avatarStyle === "sheet" || avatarStyle === "pixel") && (
                <div className="neo-mood-grid">
                  {XIAOA_MOODS.map((m, idx) => (
                    <button
                      key={m.id}
                      type="button"
                      onClick={() => setMoodIdx(idx)}
                      className={`neo-mood-btn ${moodIdx === idx ? "is-active" : ""}`}
                      style={{
                        borderColor: moodIdx === idx ? m.badgeColor : undefined,
                        boxShadow: moodIdx === idx ? `0 0 0 2px ${m.badgeColor}` : undefined,
                      }}
                    >
                      <span>{language === "zh" ? m.label : m.labelEn}</span>
                    </button>
                  ))}
                </div>
              )}

              {/* Pixel Art Download / Save Actions (visible in pixel mode) */}
              {avatarStyle === "pixel" && (
                <div style={{ display: "flex", gap: "6px", margin: "4px 0 10px" }}>
                  <a
                    href="/xiaoa-pixel-avatar.jpg"
                    download="xiao-a-pixel-avatar.jpg"
                    target="_blank"
                    rel="noreferrer"
                    className="neo-mood-btn"
                    style={{ flex: 1, textDecoration: "none", background: "#ffd600", color: "#111", fontSize: "11px", fontWeight: "800" }}
                    title="下载高清 1:1 像素风头像"
                  >
                    <span>💾 下载像素头像</span>
                  </a>
                  <a
                    href="/xiaoa-pixel-sheet.jpg"
                    download="xiao-a-pixel-sheet.jpg"
                    target="_blank"
                    rel="noreferrer"
                    className="neo-mood-btn"
                    style={{ flex: 1, textDecoration: "none", fontSize: "11px", fontWeight: "800" }}
                    title="下载像素表情序列图"
                  >
                    <span>🖼️ 像素序列图</span>
                  </a>
                </div>
              )}

              <div className="pass-profile neo-pass-profile">
                <div className="pass-info">
                  <h3>{pick(creatorBio.name, language)}</h3>
                  <p className="pass-role">{pick(creatorBio.role, language)}</p>
                </div>
              </div>

              <div className="pass-meta-box neo-meta-box">
                <div className="pass-meta-row">
                  <span className="pass-meta-lbl">BASE // 坐标</span>
                  <span className="pass-meta-val">China · Remote Builder</span>
                </div>
                <div className="pass-meta-row">
                  <span className="pass-meta-lbl">MATRIX // 矩阵</span>
                  <span className="pass-meta-val">小红书 / 公众号 / 视频号 / 抖音</span>
                </div>
                <div className="pass-meta-row">
                  <span className="pass-meta-lbl">FOCUS // 核心</span>
                  <span className="pass-meta-val" style={{ color: "#10b981", fontWeight: 700 }}>
                    ● 英语自学导航 & AI 工作流
                  </span>
                </div>
              </div>

              {/* Barcode & Connect Strip */}
              <div className="pass-barcode-strip">
                <span className="pass-barcode-lines">||| |||| || ||||</span>
                <span className="pass-barcode-text">AOMYYING-2026-PASS</span>
              </div>

              <button
                type="button"
                className="pass-connect-btn neo-connect-btn"
                onClick={handleOpenQr}
              >
                <QrCode size={14} />
                <span>{language === "zh" ? "扫码加小A微信" : "Scan to Add WeChat"}</span>
              </button>
            </motion.article>
          </div>
        </section>

        {/* ============================================================ */}
        {/* ROW 2: FLAGSHIP PROJECT SPOTLIGHT (英语学习资源导航站)           */}
        {/* ============================================================ */}
        <section className="bento-section" id="projects">
          <div className="section-head">
            <span className="section-eyebrow">
              <Sparkles size={14} />
              <ShinyText text={copy.flagshipBadge} speed={3.5} />
            </span>
            <h2>{copy.projectsTitle}</h2>
            <p>{copy.projectsDesc}</p>
          </div>

          {/* Flagship Big Bento Box with Live Interactive Sandbox */}
          <motion.article
            className="bento-card bento-card--flagship"
            onMouseMove={handleCardMouseMove}
            {...fadeUp}
          >
            <div className="flagship-left">
              <div className="flagship-badge-row">
                <span className="badge-pill badge-pill--gold">
                  <ShinyText text={language === "zh" ? "★ 重点主推" : "★ Flagship"} speed={3} />
                </span>
                <span className="badge-pill badge-pill--tech">{pick(flagshipProject.category, language)}</span>
                <span className="badge-pill badge-pill--accent">开源首发</span>
              </div>

              <h3 className="flagship-title">{pick(flagshipProject.title, language)}</h3>
              <p className="flagship-subtitle">{pick(flagshipProject.subtitle, language)}</p>
              <p className="flagship-excerpt">{pick(flagshipProject.excerpt, language)}</p>

              {/* Tag Chips */}
              <div className="flagship-tags">
                {pick(flagshipProject.tags, language).map((tag) => (
                  <span key={tag} className="tag-chip">{tag}</span>
                ))}
              </div>

              {/* Stats Bar */}
              <div className="flagship-metrics">
                {flagshipProject.stats?.map((stat, i) => (
                  <div key={i} className="metric-box">
                    <span className="metric-label">{pick(stat.label, language)}</span>
                    <strong className="metric-value">{stat.value}</strong>
                  </div>
                ))}
              </div>

              {/* Actions */}
              <div className="flagship-actions">
                <StarBorder
                  as="a"
                  href={flagshipProject.demoUrl || flagshipProject.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  speed="4s"
                >
                  <ExternalLink size={16} />
                  <span>{language === "zh" ? "在线访问体验" : "Live Demo"}</span>
                  <ArrowUpRight size={14} />
                </StarBorder>

                <Link to={`/project/${flagshipProject.slug}`} className="btn-bento btn-bento--secondary">
                  <span>{projectActionCopy.viewCaseStudy}</span>
                  <ArrowRight size={15} />
                </Link>

                {flagshipProject.githubUrl && (
                  <a
                    href={flagshipProject.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-bento btn-bento--ghost"
                  >
                    <Github size={15} />
                    <span>{projectActionCopy.viewGithub}</span>
                    <ArrowUpRight size={13} />
                  </a>
                )}
              </div>
            </div>

            {/* Flagship Right: Real Interactive Sandbox Browser Mockup */}
            <div className="flagship-right">
              <div className="mockup-browser">
                <div className="mockup-browser__bar">
                  <div className="mockup-dots">
                    <span className="dot dot--red"></span>
                    <span className="dot dot--yellow"></span>
                    <span className="dot dot--green"></span>
                  </div>
                  <div className="mockup-address">
                    <Search size={12} className="text-muted" />
                    <span>english-learning-hub.internal/directory</span>
                    <span className="kbd-pill">
                      <DecryptedText text="LIVE MOCK" speed={60} animateOn="view" />
                    </span>
                  </div>
                </div>

                <div className="mockup-browser__content">
                  <div className="hub-preview-header">
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <span className="hub-tag">
                        <DecryptedText text="ADULT ENGLISH DIRECTORY" speed={55} animateOn="view" />
                      </span>
                      <span className="hub-live-badge">
                        <ShinyText text="● LIVE DIRECTORY" speed={3.2} />
                      </span>
                    </div>
                    <h4>英语自学资源分类导航</h4>
                    <p>在下方搜索框输入关键词，或点击分类实时体验：</p>
                  </div>

                  {/* Interactive Live Search Box */}
                  <div className="hub-search-box">
                    <Search size={13} className="text-muted" />
                    <input
                      type="text"
                      className="hub-search-input"
                      placeholder="搜索听力、AI、BBC、词源、字典..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    {searchQuery && (
                      <span className="hub-search-clear" onClick={() => setSearchQuery("")}>
                        <X size={12} />
                      </span>
                    )}
                  </div>

                  {/* Interactive Category Chips */}
                  <div className="hub-category-chips">
                    <button
                      type="button"
                      className={activeCategory === "listening" ? "active" : ""}
                      onClick={() => setActiveCategory("listening")}
                    >
                      🎧 听力
                    </button>
                    <button
                      type="button"
                      className={activeCategory === "speaking" ? "active" : ""}
                      onClick={() => setActiveCategory("speaking")}
                    >
                      🗣️ 口语
                    </button>
                    <button
                      type="button"
                      className={activeCategory === "reading" ? "active" : ""}
                      onClick={() => setActiveCategory("reading")}
                    >
                      📚 阅读
                    </button>
                    <button
                      type="button"
                      className={activeCategory === "vocab" ? "active" : ""}
                      onClick={() => setActiveCategory("vocab")}
                    >
                      🧩 词汇
                    </button>
                    <button
                      type="button"
                      className={activeCategory === "tools" ? "active" : ""}
                      onClick={() => setActiveCategory("tools")}
                    >
                      ⚡ 工具
                    </button>
                  </div>

                  {/* Dynamically Filtered Items */}
                  <div className="hub-items-grid">
                    {filteredResources.length > 0 ? (
                      filteredResources.slice(0, 3).map((item) => (
                        <div
                          key={item.id}
                          className={`hub-item-card ${highlightedId === item.id ? "is-highlighted" : ""}`}
                          onClick={() => {
                            showToast(
                              language === "zh"
                                ? `💡 资源收录：${item.title} (${item.urlHint})`
                                : `Resource: ${item.title}`
                            );
                          }}
                        >
                          <div className="hub-item-top">
                            <strong>{item.title}</strong>
                            <span className={`badge-hub-tag tag-${item.tag.toLowerCase()}`}>
                              {item.tag}
                            </span>
                          </div>
                          <p>{item.note}</p>
                        </div>
                      ))
                    ) : (
                      <div style={{ textAlign: "center", padding: "20px 0", color: "#64748b", fontSize: "12px" }}>
                        未找到匹配资源，尝试清空搜索词
                      </div>
                    )}
                  </div>

                  <div className="hub-bottom-banner">
                    <span>已收录 50+ 精选成人自学站点</span>
                    <button
                      type="button"
                      className="hub-surprise-btn"
                      onClick={handleSurprisePick}
                      title="随机抽取一个自学资源"
                    >
                      <Shuffle size={11} />
                      <span>随机随选</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.article>

          {/* Secondary Projects Grid (3 Cards) */}
          <div className="secondary-projects-grid">
            {secondaryProjects.map((p, index) => (
              <motion.article
                key={p.slug}
                className="bento-card bento-card--secondary-project"
                onMouseMove={handleCardMouseMove}
                {...fadeUp}
                transition={{ duration: 0.55, delay: index * 0.1 }}
              >
                <div className="bento-card__badge-row">
                  <span className="badge-pill badge-pill--tech">{pick(p.category, language)}</span>
                  <span className="project-index">0{index + 2}</span>
                </div>

                <h3 className="subproject-title">{pick(p.title, language)}</h3>
                <p className="subproject-subtitle">{pick(p.subtitle, language)}</p>
                <p className="subproject-excerpt">{pick(p.excerpt, language)}</p>

                <div className="flagship-tags" style={{ marginBottom: "16px" }}>
                  {pick(p.tags, language).slice(0, 4).map((tag) => (
                    <span key={tag} className="tag-chip">{tag}</span>
                  ))}
                </div>

                {p.stats && (
                  <div className="flagship-metrics" style={{ gridTemplateColumns: "1fr 1fr", marginBottom: "18px" }}>
                    {p.stats.slice(0, 2).map((s, i) => (
                      <div key={i} className="metric-box">
                        <span className="metric-label">{pick(s.label, language)}</span>
                        <strong className="metric-value">{s.value}</strong>
                      </div>
                    ))}
                  </div>
                )}

                <div className="subproject-actions">
                  <StarBorder
                    as="a"
                    href={p.demoUrl || p.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    style={{ width: "100%" }}
                    title={`在线访问 / 体验 ${pick(p.title, language)}`}
                    speed="4.5s"
                  >
                    <ExternalLink size={14} />
                    <span>{language === "zh" ? "在线访问体验" : "Live Demo"}</span>
                    <ArrowUpRight size={13} />
                  </StarBorder>

                  <div className="subproject-actions__row">
                    <Link
                      to={`/project/${p.slug}`}
                      className="btn-bento btn-bento--secondary"
                      style={{ flex: 1, justifyContent: "center" }}
                    >
                      <span>{projectActionCopy.viewCaseStudy}</span>
                      <ArrowRight size={13} />
                    </Link>

                    {p.githubUrl && (
                      <a
                        href={p.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="btn-bento btn-bento--github"
                        style={{ flex: 1, justifyContent: "center" }}
                        aria-label={`GitHub - ${pick(p.title, language)}`}
                        title="在 GitHub 上查看源码"
                      >
                        <Github size={14} />
                        <span>GitHub</span>
                        <ArrowUpRight size={12} />
                      </a>
                    )}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* GitHub Open Source Repositories Showcase Matrix */}
          <motion.div className="github-repos-section" {...fadeUp}>
            <div className="github-repos-header">
              <div className="github-repos-title">
                <Github size={18} />
                <span>
                  {language === "zh" ? "GitHub 开源项目与代码仓库 (" : "GitHub Repositories ("}
                  <DecryptedText text="@yingyaoyao88-svg" speed={45} animateOn="view" />
                  {")"}
                </span>
              </div>
              <a
                href="https://github.com/yingyaoyao88-svg"
                target="_blank"
                rel="noreferrer"
                className="github-profile-link"
              >
                <span>{language === "zh" ? "访问 GitHub 个人主页" : "Visit GitHub Profile"}</span>
                <ArrowUpRight size={14} />
              </a>
            </div>

            <div className="github-repos-grid">
              {githubRepositories.map((repo) => (
                <a
                  key={repo.name}
                  href={repo.url}
                  target="_blank"
                  rel="noreferrer"
                  className="github-repo-card"
                  title={`点击访问 ${repo.name} 开源代码`}
                >
                  <div className="repo-card-top">
                    <div className="repo-name-wrap">
                      <BookOpen size={14} className="repo-book-icon" />
                      <strong className="repo-name">{repo.name}</strong>
                    </div>
                    <span className="repo-lang-pill">
                      <span className="lang-dot" style={{ background: repo.langColor }} />
                      <span>{repo.language}</span>
                    </span>
                  </div>

                  <p className="repo-desc">{pick(repo.desc, language)}</p>

                  <div className="repo-card-footer">
                    <span className="repo-action-hint">
                      <span>{language === "zh" ? "在 GitHub 查看源码" : "View Source"}</span>
                      <ArrowUpRight size={12} />
                    </span>
                    {repo.stars > 0 && (
                      <span className="repo-stars-badge">
                        ★ {repo.stars}
                      </span>
                    )}
                  </div>
                </a>
              ))}
            </div>
          </motion.div>
        </section>

        {/* ============================================================ */}
        {/* ROW 3: CREATOR PRESENCE & SOCIAL MEDIA MATRIX                */}
        {/* ============================================================ */}
        <section className="bento-section" id="media">
          <div className="section-head">
            <span className="section-eyebrow">
              <Flame size={14} className="text-accent" />
              <ShinyText
                text={language === "zh" ? "全网阵地 · CREATOR PRESENCE" : "CHANNELS · CREATOR PRESENCE"}
                speed={3.8}
              />
            </span>
            <h2>{copy.mediaSectionTitle}</h2>
            <p>{copy.mediaSectionDesc}</p>
          </div>

          <div className="media-bento-grid">
            {mediaAccounts.map((item, index) => {
              const Icon = item.icon;
              const isCopied = copiedMediaId === item.id;
              return (
                <motion.article
                  key={item.id}
                  className="bento-card bento-card--media"
                  onMouseMove={handleCardMouseMove}
                  {...fadeUp}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  style={{ "--card-accent": item.color, "--card-bg-soft": item.bgSoft }}
                >
                  <div className="media-glow-aura" />

                  <div className="media-card-top">
                    <div className="media-icon-wrap" style={{ background: item.bgSoft, color: item.color }}>
                      <Icon size={24} />
                    </div>
                    <span className="media-platform-name">{item.platform}</span>
                  </div>

                  <div className="media-card-body">
                    <div className="media-handle-wrap">
                      <strong className="media-handle">{item.handle}</strong>
                      <span className="media-tag">{pick(item.tag, language)}</span>
                    </div>

                    <p className="media-desc">{pick(item.desc, language)}</p>

                    <div className="media-tip-hint">
                      <span>🔍 在{item.platform}搜索「{item.handle}」</span>
                    </div>
                  </div>

                  <button
                    type="button"
                    className={`media-copy-btn ${isCopied ? "is-copied" : ""}`}
                    onClick={() => copyToClipboard(item.handle, item.platform, item.id)}
                  >
                    {isCopied ? <Check size={13} /> : <Copy size={13} />}
                    <span>{isCopied ? "✓ 已复制账号" : (language === "zh" ? "复制账号名" : "Copy Handle")}</span>
                  </button>
                </motion.article>
              );
            })}
          </div>
        </section>

        {/* ============================================================ */}
        {/* ROW 4: CREATIVE PLAYGROUND (小A的 AI 创意实验室)              */}
        {/* ============================================================ */}
        <section className="bento-section" id="lab">
          <motion.article
            className="bento-card bento-card--lab"
            onMouseMove={handleCardMouseMove}
            {...fadeUp}
          >
            <div className="lab-header">
              <div className="lab-header-left">
                <span className="section-eyebrow">
                  <Terminal size={14} />
                  <ShinyText
                    text={language === "zh" ? "创作者工坊 · CREATIVE LAB" : "CREATOR WORKSHOP · LAB"}
                    speed={3.8}
                  />
                </span>
                <h3>{language === "zh" ? "小A的 AI 创意实验室 · 核心实践" : "Xiao-A's Creative Lab"}</h3>
                <p>点击切换查看小A在英语自学、自媒体视觉与独立开发中的实际工作流与自用提示词：</p>
              </div>
            </div>

            {/* Interactive Lab Tabs */}
            <div className="lab-tabs">
              {CREATIVE_LAB_TABS.map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  className={`lab-tab-btn ${activeLabTab === tab.id ? "is-active" : ""}`}
                  onClick={() => setActiveLabTab(tab.id)}
                >
                  <Code2 size={14} />
                  <span>{tab.title}</span>
                </button>
              ))}
            </div>

            {/* Active Tab Interactive Content */}
            <div className="lab-content-box">
              <div className="lab-content-info">
                <span className="bento-tag">
                  <DecryptedText text={currentLabTab.tag} speed={40} animateOn="view" />
                </span>
                <h4 className="lab-content-title">{currentLabTab.title}</h4>
                <p className="lab-content-desc">{currentLabTab.desc}</p>
                <div className="lab-feature-pills">
                  {currentLabTab.pills.map((pill) => (
                    <span key={pill} className="lab-feature-pill">
                      #{pill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="lab-code-viewer">
                <div className="lab-code-top">
                  <span>SNIPPET / CONFIG</span>
                  <span>PREVIEW</span>
                </div>
                <pre className="lab-code-snippet">{currentLabTab.codeSnippet}</pre>
                <button
                  type="button"
                  className={`lab-copy-btn ${labCopied ? "is-copied" : ""}`}
                  onClick={() => copyLabSnippet(currentLabTab.codeSnippet)}
                >
                  {labCopied ? <Check size={13} /> : <Copy size={13} />}
                  <span>{labCopied ? "✓ 已复制提示词" : "复制此模板"}</span>
                </button>
              </div>
            </div>
          </motion.article>
        </section>

        {/* ============================================================ */}
        {/* ROW 5: ABOUT ME & SKILLS                                     */}
        {/* ============================================================ */}
        <section className="bento-section" id="about">
          <div className="section-head">
            <span className="section-eyebrow">
              <Compass size={14} />
              <span>{language === "zh" ? "关于我" : "About Me"}</span>
            </span>
            <h2>{language === "zh" ? "为什么做自媒体与独立开发？" : "Why I Build & Share"}</h2>
          </div>

          <div className="about-bento-grid">
            <motion.article
              className="bento-card bento-card--philosophy neo-manifesto-card"
              onMouseMove={handleCardMouseMove}
              {...fadeUp}
            >
              <div className="neo-sticker-badge neo-sticker-badge--yellow">
                <span>EDITORIAL MANIFESTO // 关于小A</span>
              </div>
              <h3 className="about-block-title" style={{ marginTop: "12px" }}>
                {language === "zh" ? "💡 为什么我同时做「独立开发」与「自媒体」？" : "💡 Why Build & Share in Public?"}
              </h3>
              <p>
                {language === "zh"
                  ? "我坚信：AI 最大的价值不在于生成宏大的空泛概念，而在于把哪怕最细微的一个日常摩擦点（比如成人学英语找不到分级听力、做自媒体封面太耗时、公众号排版太繁琐）彻底自动化和产品化。"
                  : "I believe the greatest value of AI is not in abstract concepts, but in solving tangible frictions — whether streamlining vocabulary retention, generating high-CTR covers, or automating article publishing."}
              </p>
              <p>
                {language === "zh"
                  ? "通过「小A的AI日记」，我把每一个真实的探索过程透明地分享出来。开源工具、交付产品、写下心得，与所有渴望用 AI 赋能自己的同路人一起进化。"
                  : "Through Xiaohongshu, WeChat, and video channels, I transparently document each experiment. Shipping tools, sharing insights, and growing alongside fellow creators and learners."}
              </p>
            </motion.article>

            <motion.article
              className="bento-card bento-card--skills neo-skills-wall"
              onMouseMove={handleCardMouseMove}
              {...fadeUp}
            >
              <div className="neo-sticker-badge neo-sticker-badge--orange">
                <span>TECH & CREATIVE STACK // 技能贴纸墙</span>
              </div>
              <h3 className="about-block-title" style={{ marginTop: "12px", marginBottom: "16px" }}>
                {language === "zh" ? "🛠️ 核心武器库与工作流" : "🛠️ Core Superpowers & Stack"}
              </h3>
              <div className="neo-sticker-grid">
                {[
                  { cat: "AI 编程", name: "Claude Code / Cursor", bg: "#ffd600", text: "#111" },
                  { cat: "智能体工作流", name: "Agent Skills & MCP", bg: "#ff5a26", text: "#fff" },
                  { cat: "全栈开发", name: "Next.js / React / Tailwind", bg: "#10b981", text: "#fff" },
                  { cat: "边缘架构", name: "Cloudflare D1 & Workers", bg: "#c4b5fd", text: "#111" },
                  { cat: "提示词工程", name: "System Prompt 架构", bg: "#fde047", text: "#111" },
                  { cat: "视觉生成", name: "AIGC 个人 IP 视觉流", bg: "#f472b6", text: "#111" },
                  { cat: "知识管理", name: "Obsidian 自动化发布", bg: "#38bdf8", text: "#111" },
                  { cat: "教育产品", name: "成人英语分级体系设计", bg: "#a3e635", text: "#111" },
                ].map((s) => (
                  <div
                    key={s.name}
                    className="neo-sticker-brick"
                    style={{ backgroundColor: s.bg, color: s.text }}
                  >
                    <span className="neo-brick-cat">{s.cat}</span>
                    <strong className="neo-brick-name">{s.name}</strong>
                  </div>
                ))}
              </div>
            </motion.article>
          </div>
        </section>

        {/* ============================================================ */}
        {/* ROW 6: INFORMATION COLLECTION & COLLABORATION FORM           */}
        {/* ============================================================ */}
        <section className="bento-section" id="submit">
          <div className="section-head">
            <span className="section-eyebrow">
              <Sparkles size={14} />
              <ShinyText
                text={language === "zh" ? "共建与交流 · COLLABORATION" : "SUBMIT & COLLABORATE"}
                speed={3.8}
              />
            </span>
            <h2>{language === "zh" ? "推荐优质资源 · 合作与共建通道" : "Resource Submission & Collaboration"}</h2>
            <p>
              {language === "zh"
                ? "如果你发现了惊艳的英语自学网站、想共同打造 AI 工具，或有自媒体商业合作意向，欢迎直接提交信息："
                : "Discovered an outstanding English learning tool, want to collaborate on AI projects, or have business inquiries? Drop a message:"}
            </p>
          </div>

          <motion.article
            className="bento-card bento-card--submit"
            onMouseMove={handleCardMouseMove}
            {...fadeUp}
          >
            <div className="submit-form-header">
              <h3>{language === "zh" ? "📬 信息收集与推荐提交" : "📬 Submit Info & Recommendations"}</h3>
              <p>
                {language === "zh"
                  ? "提交后的信息将直接同步至小A的专属管理后台，免登录即刻推送，期待与您建立连接！"
                  : "Submissions are instantly synced to Xiao-A's verified admin dashboard without login required."}
              </p>
            </div>

            {/* Type Selector Pills */}
            <div className="submit-type-selector">
              {[
                { id: "resource", labelZh: "🎧 推荐自学资源", labelEn: "🎧 Curate Resource" },
                { id: "collab", labelZh: "🤝 项目合作咨询", labelEn: "🤝 Project Collab" },
                { id: "media", labelZh: "📱 自媒体商务/约稿", labelEn: "📱 Media & Brand" },
                { id: "other", labelZh: "💡 建议与交流", labelEn: "💡 Other Feedback" },
              ].map((t) => (
                <button
                  key={t.id}
                  type="button"
                  className={`submit-type-pill ${subType === t.id ? "is-active" : ""}`}
                  onClick={() => setSubType(t.id)}
                >
                  {language === "zh" ? t.labelZh : t.labelEn}
                </button>
              ))}
            </div>

            {subSubmitted ? (
              <div className="submit-success-banner">
                <div className="success-banner-left">
                  <div className="success-icon-wrap">
                    <CheckCircle2 size={24} className="text-success" />
                  </div>
                  <div>
                    <strong className="success-banner-title">
                      {language === "zh" ? "🎉 提交成功！信息已安全存入管理后台" : "🎉 Submitted Successfully!"}
                    </strong>
                    <p style={{ fontSize: "13px", color: "var(--text-muted)", marginTop: "4px" }}>
                      {language === "zh"
                        ? "感谢您的推荐与留言，小A 会在 24 小时内通过您留下的联系方式与您沟通。"
                        : "Thank you! Xiao-A will review the details and reach out shortly."}
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  className="btn-bento btn-bento--secondary"
                  onClick={() => setSubSubmitted(false)}
                >
                  <span>{language === "zh" ? "再提交一条" : "Submit Another"}</span>
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="submit-form-grid">
                <div className="form-group">
                  <label>
                    <span>{language === "zh" ? "您的称呼 / 昵称" : "Your Name / Nickname"}</span>
                    <span className="required-star">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder={language === "zh" ? "如：李同学、Mark、科技探索者" : "e.g. Alex, Researcher"}
                    value={subName}
                    onChange={(e) => setSubName(e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label>
                    <span>{language === "zh" ? "联系方式 (微信 / 邮箱 / 电话)" : "Contact (WeChat / Email / Phone)"}</span>
                    <span className="required-star">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder={language === "zh" ? "如：微信号或邮箱，方便小A给您回复" : "WeChat ID or Email"}
                    value={subContact}
                    onChange={(e) => setSubContact(e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label>
                    <span>
                      {subType === "resource"
                        ? (language === "zh" ? "推荐资源 / 网站名称" : "Resource / Website Name")
                        : (language === "zh" ? "合作主题 / 项目名称" : "Subject / Project Name")}
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder={
                      subType === "resource"
                        ? (language === "zh" ? "如：BBC 6 Minute English、YouGlish" : "e.g. YouGlish, DeepL")
                        : (language === "zh" ? "如：AI 英语插件共创、自媒体商业测评" : "e.g. AI Extension Collab")
                    }
                    value={subTitle}
                    onChange={(e) => setSubTitle(e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label>
                    <span>{language === "zh" ? "相关网址 / 访问链接" : "Link / URL"}</span>
                  </label>
                  <input
                    type="url"
                    placeholder="https://"
                    value={subUrl}
                    onChange={(e) => setSubUrl(e.target.value)}
                  />
                </div>

                <div className="form-group form-group--full">
                  <label>
                    <span>
                      {subType === "resource"
                        ? (language === "zh" ? "推荐理由或特色描述" : "Recommendation Notes")
                        : (language === "zh" ? "详细诉求与说明" : "Message / Details")}
                    </span>
                  </label>
                  <textarea
                    rows={3}
                    placeholder={
                      subType === "resource"
                        ? (language === "zh" ? "介绍一下这个自学网站的亮点、适合哪个阶段的学习者..." : "Describe why this resource is awesome...")
                        : (language === "zh" ? "简述您的项目想法、合作预期或任何想与小A交流的内容..." : "Briefly describe your proposal or thoughts...")
                    }
                    value={subMessage}
                    onChange={(e) => setSubMessage(e.target.value)}
                  />
                </div>

                <div className="form-group--full submit-form-footer">
                  <span className="submit-hint-text">
                    🔒 {language === "zh" ? "信息仅用于小A联系您或审核收录，绝不对外公开。" : "Information is private & only shared with Xiao-A."}
                  </span>
                  <StarBorder as="button" type="submit" speed="4.5s">
                    <Send size={15} />
                    <span>{language === "zh" ? "确认提交信息" : "Send Submission"}</span>
                  </StarBorder>
                </div>
              </form>
            )}
          </motion.article>
        </section>

        {/* ============================================================ */}
        {/* ROW 7: CONTACT & CONNECT BENTO FOOTER                        */}
        {/* ============================================================ */}
        <section className="bento-section" id="contact">
          <motion.article
            className="bento-card bento-card--contact"
            onMouseMove={handleCardMouseMove}
            {...fadeUp}
          >
            <div className="contact-box-left">
              <span className="badge-pill badge-pill--accent">
                {language === "zh" ? "随时交流" : "Get In Touch"}
              </span>
              <h2>{copy.contactTitle}</h2>
              <p>{copy.contactDesc}</p>

              {/* Direct WeChat QR Card */}
              <div className="contact-qr-card">
                <div
                  className="contact-qr-thumb-wrap"
                  onClick={handleOpenQr}
                  title={language === "zh" ? "点击查看大图" : "Click to enlarge"}
                >
                  <img
                    src="/wechat-qrcode.jpg"
                    alt="小A 微信二维码"
                    className="contact-qr-thumb"
                  />
                  <div className="contact-qr-overlay">
                    <QrCode size={18} />
                    <span>{language === "zh" ? "点击放大" : "Enlarge"}</span>
                  </div>
                </div>

                <div className="contact-qr-details">
                  <div className="qr-status-pill">
                    <span className="status-dot status-dot--green" />
                    <span>{language === "zh" ? "微信在线 · 欢迎添加" : "WeChat Available"}</span>
                  </div>
                  <strong className="contact-qr-title">
                    {language === "zh" ? "小A (Aomunnie) 个人微信" : "Xiao-A (Aomunnie)"}
                  </strong>
                  <p className="contact-qr-tip">
                    {language === "zh"
                      ? "扫码添加好友，备注来意（项目共创 / 学习交流 / 商业合作）"
                      : "Scan to add friend for AI collabs, consulting or study community"}
                  </p>
                  <div className="contact-qr-actions">
                    <button
                      type="button"
                      className="btn-pill btn-pill--sm btn-pill--secondary"
                      onClick={() =>
                        copyToClipboard(contactDetails.wechat, language === "zh" ? "微信号" : "WeChat")
                      }
                    >
                      <Copy size={12} />
                      <span>{language === "zh" ? "复制微信号: 15038098595" : "Copy WeChat ID"}</span>
                    </button>
                    <button
                      type="button"
                      className="btn-pill btn-pill--sm btn-pill--primary"
                      onClick={handleOpenQr}
                    >
                      <QrCode size={12} />
                      <span>{language === "zh" ? "查看高清码" : "View QR"}</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-box-right">
              {/* WeChat */}
              <div
                className="contact-touch-card"
                onClick={handleOpenQr}
              >
                <div className="contact-icon contact-icon--wechat">
                  <QrCode size={20} />
                </div>
                <div>
                  <span className="contact-label">
                    {language === "zh" ? "微信二维码 (点击弹出大图)" : "WeChat QR (Click to open)"}
                  </span>
                  <strong className="contact-val">{contactDetails.wechat}</strong>
                </div>
                <ArrowUpRight size={15} className="contact-copy-icon" />
              </div>

              {/* Email */}
              <a
                href={`mailto:${contactDetails.email}`}
                className="contact-touch-card"
              >
                <div className="contact-icon contact-icon--email">
                  <Mail size={20} />
                </div>
                <div>
                  <span className="contact-label">{language === "zh" ? "电子邮箱" : "Email"}</span>
                  <strong className="contact-val">{contactDetails.email}</strong>
                </div>
                <ArrowUpRight size={15} className="contact-copy-icon" />
              </a>

              {/* GitHub */}
              <a
                href={contactDetails.github}
                target="_blank"
                rel="noreferrer"
                className="contact-touch-card"
              >
                <div className="contact-icon contact-icon--github">
                  <Github size={20} />
                </div>
                <div>
                  <span className="contact-label">GitHub 开源主页</span>
                  <strong className="contact-val">@yingyaoyao88-svg</strong>
                </div>
                <ArrowUpRight size={15} className="contact-copy-icon" />
              </a>
            </div>
          </motion.article>
        </section>

        {/* Minimal Footer */}
        <footer className="bento-footer">
          <p>© 2026 小A (AOMYYING) · All rights reserved.</p>
          <div className="footer-links">
            <a href="#entry">返回顶部</a>
            <span>·</span>
            <a href="https://github.com/yingyaoyao88-svg" target="_blank" rel="noreferrer">
              GitHub
            </a>
            <span>·</span>
            <Link to="/admin" style={{ color: "var(--accent)", fontWeight: 600 }}>
              🔒 管理后台
            </Link>
          </div>
        </footer>

        {/* WeChat QR Code Modal */}
        {qrModalOpen && (
          <div className="qr-modal-backdrop" onClick={() => setQrModalOpen(false)}>
            <motion.div
              className="qr-modal-card"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                className="qr-modal-close"
                onClick={() => setQrModalOpen(false)}
                aria-label="关闭"
              >
                <X size={18} />
              </button>

              <div className="qr-modal-header">
                <span className="badge-pill badge-pill--accent">
                  {language === "zh" ? "微信扫一扫" : "Scan on WeChat"}
                </span>
                <h3>{language === "zh" ? "添加小A为微信好友" : "Connect with Xiao-A"}</h3>
                <p>
                  {language === "zh"
                    ? "欢迎扫码添加好友，交流 AI 实用工具、独立全栈产品共建与英语自学"
                    : "Scan QR code on WeChat to add friend."}
                </p>
              </div>

              <div className="qr-modal-img-container">
                <img
                  src="/wechat-qrcode.jpg"
                  alt="小A 微信二维码"
                  className="qr-modal-img"
                />
              </div>

              <div className="qr-modal-footer">
                <div className="qr-id-pill">
                  <span>微信号：<strong>15038098595</strong></span>
                  <button
                    type="button"
                    className="qr-copy-btn"
                    onClick={() =>
                      copyToClipboard(contactDetails.wechat, language === "zh" ? "微信号" : "WeChat")
                    }
                  >
                    <Copy size={13} />
                    <span>{language === "zh" ? "一键复制" : "Copy"}</span>
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </motion.main>
  );
}
