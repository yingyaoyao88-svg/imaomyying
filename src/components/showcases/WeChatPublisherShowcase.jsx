import { motion } from "framer-motion";
import {
  Sparkles,
  Send,
  Smartphone,
  Palette,
  Layout,
  CheckCircle2,
  Copy,
  Check,
  RefreshCw,
  Code2,
  FileText,
  ShieldCheck,
  ExternalLink,
  ChevronRight,
  Layers,
} from "lucide-react";
import { useState } from "react";

const THEMES = [
  {
    id: "mint",
    name: "优雅薄荷绿",
    primary: "#07c160",
    bgSoft: "rgba(7, 193, 96, 0.08)",
    borderSoft: "rgba(7, 193, 96, 0.25)",
    textDark: "#1f2937",
    fontFamily: "system-ui, -apple-system, sans-serif",
  },
  {
    id: "tech-blue",
    name: "科技邃蓝",
    primary: "#0284c7",
    bgSoft: "rgba(2, 132, 199, 0.08)",
    borderSoft: "rgba(2, 132, 199, 0.25)",
    textDark: "#0f172a",
    fontFamily: "system-ui, -apple-system, sans-serif",
  },
  {
    id: "crimson",
    name: "雅致朱砂",
    primary: "#e11d48",
    bgSoft: "rgba(225, 29, 72, 0.08)",
    borderSoft: "rgba(225, 29, 72, 0.25)",
    textDark: "#1c1917",
    fontFamily: "system-ui, -apple-system, sans-serif",
  },
  {
    id: "minimal-black",
    name: "极简黑白",
    primary: "#18181b",
    bgSoft: "rgba(24, 24, 27, 0.06)",
    borderSoft: "rgba(24, 24, 27, 0.2)",
    textDark: "#18181b",
    fontFamily: "Georgia, serif, -apple-system",
  },
  {
    id: "morandi",
    name: "柔和莫兰迪",
    primary: "#8b5cf6",
    bgSoft: "rgba(139, 92, 246, 0.08)",
    borderSoft: "rgba(139, 92, 246, 0.25)",
    textDark: "#1e1b4b",
    fontFamily: "system-ui, -apple-system, sans-serif",
  },
  {
    id: "aurora-cyan",
    name: "极光青蓝",
    primary: "#06b6d4",
    bgSoft: "rgba(6, 182, 212, 0.08)",
    borderSoft: "rgba(6, 182, 212, 0.25)",
    textDark: "#083344",
    fontFamily: "system-ui, -apple-system, sans-serif",
  },
];

const TEMPLATES = [
  {
    id: "deep-dive",
    name: "深度长文模板",
    icon: "📑",
    title: "如何用 AI 搭建不漂移的角色视觉系统？",
    subtitle: "从 Prompt 约束到 Lanczos 定稿，全流程落地复盘",
  },
  {
    id: "tech-code",
    name: "极客技术模板",
    icon: "💻",
    title: "手把手解析：Markdown AST 编译微信内联 CSS",
    subtitle: "让微信官方编辑器完美解析代码高亮与 KaTeX 数学公式",
  },
  {
    id: "insight-memo",
    name: "灵感随笔模板",
    icon: "💡",
    title: "做独立开发的第 100 天：关于好工具的三个非共识",
    subtitle: "不追求大而全，只做真正能解决痛点的小而美作品",
  },
];

export function WeChatPublisherShowcase({ language = "zh" }) {
  const [selectedTheme, setSelectedTheme] = useState(THEMES[0]);
  const [selectedTemplate, setSelectedTemplate] = useState(TEMPLATES[0]);
  const [publishingState, setPublishingState] = useState("idle"); // 'idle' | 'publishing' | 'done'
  const [publishStep, setPublishStep] = useState(0);
  const [copiedHtml, setCopiedHtml] = useState(false);

  const handleSimulatePublish = () => {
    if (publishingState === "publishing") return;
    setPublishingState("publishing");
    setPublishStep(1);

    setTimeout(() => setPublishStep(2), 600);
    setTimeout(() => setPublishStep(3), 1200);
    setTimeout(() => setPublishStep(4), 1800);
    setTimeout(() => {
      setPublishStep(5);
      setPublishStateSafe();
    }, 2400);
  };

  const setPublishStateSafe = () => {
    setPublishingState("done");
    setTimeout(() => {
      setPublishingState("idle");
      setPublishStep(0);
    }, 5000);
  };

  const handleCopyHtml = () => {
    setCopiedHtml(true);
    setTimeout(() => setCopiedHtml(false), 2000);
  };

  return (
    <div className="showcase-box">
      {/* Top Banner */}
      <div className="showcase-nav-bar">
        <div className="showcase-badge-row">
          <span className="showcase-pill-badge showcase-pill-badge--green">
            <Sparkles size={13} />
            <span>{language === "zh" ? "公众号排版工作台 · 所见即所发仿真" : "WeChat Publisher Studio"}</span>
          </span>
          <span className="showcase-version-badge">v0.2.0 · 17 款主题 × 4 款排版模板</span>
        </div>

        <div className="showcase-stat-inline">
          <span className="status-indicator">
            <span className="status-dot status-dot--green" />
            <span>微信官方 API 已授权 · IP 白名单已通过</span>
          </span>
        </div>
      </div>

      {/* Main Studio Grid */}
      <div className="wechat-studio-layout">
        {/* Left Column: Interactive Settings & Themes */}
        <div className="wechat-studio-controls">
          <div className="studio-section-title">
            <Palette size={16} className="text-accent" />
            <span>{language === "zh" ? "1. 快速切换精选排版主题" : "1. Select Theme Palette"}</span>
          </div>

          <div className="wechat-themes-grid">
            {THEMES.map((theme) => (
              <button
                key={theme.id}
                type="button"
                className={`theme-preset-card ${selectedTheme.id === theme.id ? "theme-preset-card--active" : ""}`}
                onClick={() => setSelectedTheme(theme)}
              >
                <span className="theme-color-indicator" style={{ backgroundColor: theme.primary }} />
                <span className="theme-preset-name">{theme.name}</span>
              </button>
            ))}
          </div>

          <div className="studio-section-title" style={{ marginTop: "20px" }}>
            <Layout size={16} className="text-warning" />
            <span>{language === "zh" ? "2. 选择排版内容模板" : "2. Select Article Template"}</span>
          </div>

          <div className="template-pills-list">
            {TEMPLATES.map((tmpl) => (
              <button
                key={tmpl.id}
                type="button"
                className={`template-pill-card ${selectedTemplate.id === tmpl.id ? "template-pill-card--active" : ""}`}
                onClick={() => setSelectedTemplate(tmpl)}
              >
                <span className="template-icon">{tmpl.icon}</span>
                <div className="template-info">
                  <strong>{tmpl.name}</strong>
                  <span>{tmpl.title}</span>
                </div>
              </button>
            ))}
          </div>

          {/* Publishing Pipeline Box */}
          <div className="wechat-publish-action-box">
            <div className="action-box-header">
              <Send size={15} className="text-accent" />
              <strong>{language === "zh" ? "一键推送到微信草稿箱" : "One-Click Sync to WeChat"}</strong>
            </div>

            <p className="action-box-desc">
              无需繁琐复制粘贴，自动完成 Markdown 解析、公式转 SVG、图片素材转存并写入草稿箱。
            </p>

            <button
              type="button"
              className={`btn-pill btn-pill--primary btn-pill--block ${publishingState === "publishing" ? "loading" : ""}`}
              onClick={handleSimulatePublish}
              disabled={publishingState === "publishing"}
            >
              {publishingState === "publishing" ? (
                <>
                  <RefreshCw size={14} className="spin-icon" />
                  <span>正在编译与推送到微信...</span>
                </>
              ) : publishingState === "done" ? (
                <>
                  <CheckCircle2 size={14} className="text-success" />
                  <span>推送到微信草稿箱成功！</span>
                </>
              ) : (
                <>
                  <Send size={14} />
                  <span>✈️ 立即推送到微信草稿箱</span>
                </>
              )}
            </button>

            {/* Pipeline progress steps */}
            {publishingState !== "idle" && (
              <div className="publish-pipeline-steps">
                <div className={`step-item ${publishStep >= 1 ? "done" : ""}`}>
                  <span className="step-dot" />
                  <span>1. 解析 Markdown AST 与 Frontmatter 属性</span>
                </div>
                <div className={`step-item ${publishStep >= 2 ? "done" : ""}`}>
                  <span className="step-dot" />
                  <span>2. 编译 MathJax 公式与 Mermaid 图为矢量 SVG</span>
                </div>
                <div className={`step-item ${publishStep >= 3 ? "done" : ""}`}>
                  <span className="step-dot" />
                  <span>3. 内联 17 款微调 CSS 样式（防微信排版引擎过滤）</span>
                </div>
                <div className={`step-item ${publishStep >= 4 ? "done" : ""}`}>
                  <span className="step-dot" />
                  <span>4. 同步封面与配图至微信素材库并替换 MediaID</span>
                </div>
                <div className={`step-item ${publishStep >= 5 ? "done" : ""}`}>
                  <span className="step-dot" />
                  <strong className="text-success">5. 成功写入微信公众号草稿箱（Draft ID: #90824）</strong>
                </div>
              </div>
            )}

            <div className="action-box-footer">
              <button
                type="button"
                className="btn-pill btn-pill--secondary btn-pill--sm btn-pill--block"
                onClick={handleCopyHtml}
              >
                {copiedHtml ? <Check size={13} className="text-success" /> : <Copy size={13} />}
                <span>{copiedHtml ? "已复制排版 HTML（直接在微信后台粘贴）！" : "复制排版 HTML (备用粘贴)"}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Right Column: Realistic WeChat Mobile Phone Preview */}
        <div className="wechat-studio-phone-col">
          <div className="phone-mockup-frame">
            {/* Phone Top Notch / Status Bar */}
            <div className="phone-status-bar">
              <span className="phone-time">09:41</span>
              <div className="phone-notch-island" />
              <div className="phone-status-icons">
                <span>5G</span>
                <span>100%</span>
              </div>
            </div>

            {/* WeChat App Header Bar */}
            <div className="wechat-app-nav">
              <div className="nav-left">
                <span className="back-arrow">‹</span>
                <span className="nav-title">小A的AI日记</span>
              </div>
              <div className="nav-right">
                <span>···</span>
              </div>
            </div>

            {/* WeChat Article Scrollable View */}
            <div
              className="wechat-article-container"
              style={{
                fontFamily: selectedTheme.fontFamily,
                "--theme-primary": selectedTheme.primary,
                "--theme-bg-soft": selectedTheme.bgSoft,
                "--theme-border-soft": selectedTheme.borderSoft,
              }}
            >
              {/* Article Top 2.35:1 Cover Banner */}
              <div className="article-cover-banner">
                <div className="article-cover-aspect-tag">2.35:1 官方封面规格</div>
                <div className="article-cover-gradient" style={{ background: `linear-gradient(135deg, ${selectedTheme.primary}44, #111827)` }}>
                  <span className="cover-title-overlay">{selectedTemplate.title}</span>
                </div>
              </div>

              {/* Title & Metadata */}
              <h1 className="article-main-title">{selectedTemplate.title}</h1>

              <div className="article-meta-row">
                <span className="article-author" style={{ color: selectedTheme.primary }}>
                  小A
                </span>
                <span className="article-tag">小A的AI日记</span>
                <span className="article-date">2026-10-17</span>
                <span className="article-origin">原创 · 广东</span>
              </div>

              {/* Article Styled Body Content */}
              <div className="article-body-content">
                {/* Blockquote with theme style */}
                <div
                  className="article-styled-quote"
                  style={{
                    borderLeftColor: selectedTheme.primary,
                    backgroundColor: selectedTheme.bgSoft,
                  }}
                >
                  <p className="quote-text">
                    “{selectedTemplate.subtitle}。所见即所发，让写作者彻底告别在排版工具和公众号后台来回黏贴的痛苦。”
                  </p>
                </div>

                {/* Section H2 Header */}
                <h2
                  className="article-h2-title"
                  style={{
                    borderBottom: `2px solid ${selectedTheme.primary}`,
                    color: selectedTheme.primary,
                  }}
                >
                  <span>01</span>
                  <span>核心突破与技术机制</span>
                </h2>

                <p className="article-paragraph">
                  在日常创作中，直接将 Markdown 粘贴进微信后台常常会遇到代码换行崩塌、公式乱码、引用块变形等顽疾。我们通过在本地直接内联计算后的 CSS，完美解决这一难题：
                </p>

                {/* Styled Highlight Callout Box */}
                <div
                  className="article-callout-box"
                  style={{
                    backgroundColor: selectedTheme.bgSoft,
                    borderColor: selectedTheme.borderSoft,
                  }}
                >
                  <strong style={{ color: selectedTheme.primary }}>💡 关键设计原则：</strong>
                  <ul>
                    <li><strong>样式原子化内联：</strong>所有 CSS 编译为 style 属性，规避公众号编辑器样式剥离。</li>
                    <li><strong>公式矢量化：</strong>KaTeX 数学公式在本地直接转为 SVG，无需等待外部渲染。</li>
                    <li><strong>图床直通车：</strong>自动检测本地与网络图片，一键批量上传至微信素材库。</li>
                  </ul>
                </div>

                {/* Code Block */}
                <div className="article-code-wrapper">
                  <div className="code-header-bar">
                    <span className="code-lang-tag">TypeScript</span>
                    <span className="code-dots">● ● ●</span>
                  </div>
                  <pre className="article-code-block">
                    <code>{`// 示例：将 Markdown AST 一键注入微信草稿箱
import { WeChatClient } from "wechat-mp-publisher";

const client = new WeChatClient({
  appId: process.env.MP_APP_ID,
  secret: process.env.MP_SECRET,
});

const result = await client.publishDraft({
  title: "${selectedTemplate.title.slice(0, 16)}...",
  theme: "${selectedTheme.name}",
  inlinedHtml: renderedHtml,
  coverUrl: "./assets/cover.png"
});
console.log("Draft created:", result.media_id);`}</code>
                  </pre>
                </div>

                <p className="article-paragraph" style={{ marginTop: "12px" }}>
                  无论在 Mac 还是 Windows 平台，点击右侧的推送到草稿箱，即可直接在手机订阅号助手中一键群发，全程不到 5 秒钟。
                </p>

                {/* Ending Signature */}
                <div className="article-ending-sign">
                  <span className="sign-divider" style={{ backgroundColor: selectedTheme.borderSoft }} />
                  <span className="sign-text">—— 本文由 WeChat MP Publisher 在 Obsidian 中一键排版发布 ——</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
