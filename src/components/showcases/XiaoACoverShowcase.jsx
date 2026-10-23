import { motion } from "framer-motion";
import {
  Sparkles,
  Sliders,
  Copy,
  Check,
  Zap,
  Layers,
  Palette,
  Terminal,
  RefreshCw,
  Box,
  Image as ImageIcon,
  CheckCircle2,
} from "lucide-react";
import { useState } from "react";

const SCENARIOS = [
  {
    id: "zero-gravity",
    name: "失重零重力浮空",
    icon: "🌌",
    tagline: "漂浮科技设备与全息粒子",
    desc: "人物处于失重悬浮态，周围漂浮发光 iPad、AI 芯片模型、书本与能量光环，极具科技视觉张力。",
    bgGradient: "radial-gradient(circle at 50% 30%, #1e293b 0%, #090d16 100%)",
    floatingItems: ["📱", "⚡", "✨", "🪐", "💡"],
  },
  {
    id: "map-pin",
    name: "巨型地图打卡",
    icon: "📍",
    tagline: "等高线地标底座与实景突破",
    desc: "脚踩 3D 浮雕城市等高线地表，身后立着发光的巨型立体地图图钉与导航箭头，适合“路线/实操/打卡”主题。",
    bgGradient: "radial-gradient(circle at 50% 30%, #1a2e35 0%, #07151a 100%)",
    floatingItems: ["📍", "🧭", "🗺️", "🚀", "🚩"],
  },
  {
    id: "torn-paper",
    name: "撕纸破次元弹窗",
    icon: "📄",
    tagline: "黑白手绘撕开 · 3D小A破纸而出",
    desc: "背景为 2D 黑白线稿草图，边缘呈手撕纸张的立体锯齿厚度，生动饱满的 3D 小A从撕裂口跃出，视觉冲击力极强。",
    bgGradient: "radial-gradient(circle at 50% 30%, #2a2438 0%, #0f0c14 100%)",
    floatingItems: ["✂️", "💥", "🎨", "🌟", "🔥"],
  },
  {
    id: "cyber-hud",
    name: "未来全息科技",
    icon: "🏙️",
    tagline: "赛博发光 HUD 与悬浮代码块",
    desc: "蓝紫霓虹赛博边缘光，半透明悬浮代码面板与发光数据流环绕，专为“AI 大模型/自动化工作流”高阶议题定制。",
    bgGradient: "radial-gradient(circle at 50% 30%, #1b1e38 0%, #090a18 100%)",
    floatingItems: ["💻", "🤖", "🔮", "🧬", "📊"],
  },
];

const THEME_PALETTES = [
  { id: "cyan", name: "电光青", color: "#38bdf8", shadow: "rgba(56, 189, 248, 0.45)" },
  { id: "orange", name: "警戒橙", color: "#f97316", shadow: "rgba(249, 115, 22, 0.45)" },
  { id: "purple", name: "极客紫", color: "#a855f7", shadow: "rgba(168, 85, 247, 0.45)" },
  { id: "emerald", name: "能量绿", color: "#10b981", shadow: "rgba(16, 185, 129, 0.45)" },
];

export function XiaoACoverShowcase({ language = "zh" }) {
  const [selectedScenario, setSelectedScenario] = useState(SCENARIOS[0]);
  const [selectedPalette, setSelectedPalette] = useState(THEME_PALETTES[0]);
  const [mainTitle, setMainTitle] = useState("让 AI 按时上班");
  const [subtitle, setSubtitle] = useState("实测6步设置 · 避开3个致命坑");
  const [seriesName, setSeriesName] = useState("AI 自动化进阶");
  const [copied, setCopied] = useState(false);

  const generatedSkillCommand = `$xiao-a-cover 标题："${mainTitle}" 副标："${subtitle}" 系列："${seriesName}" 场景："${selectedScenario.name}" 配色："${selectedPalette.name}" --finalize --tolerance 0.005`;

  const handleCopyCommand = () => {
    navigator.clipboard?.writeText(generatedSkillCommand);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="showcase-box">
      {/* Top Bar */}
      <div className="showcase-nav-bar">
        <div className="showcase-badge-row">
          <span className="showcase-pill-badge showcase-pill-badge--crimson">
            <Sparkles size={13} />
            <span>{language === "zh" ? "小A 3D 爆款人物 IP 封面 · 交互工作台" : "3D Character IP Cover Studio"}</span>
          </span>
          <span className="showcase-version-badge">原生 3:4 · 1080×1440 PNG 定稿规范</span>
        </div>

        <div className="showcase-stat-inline">
          <span>⚡ 生成耗时: <strong>&lt; 60秒</strong></span>
          <span>🎯 IP 固化度: <strong>100%</strong></span>
        </div>
      </div>

      {/* Main Studio Grid */}
      <div className="cover-studio-layout">
        {/* Left Column: Interactive Controls */}
        <div className="cover-studio-controls">
          <div className="studio-section-title">
            <Sliders size={16} className="text-accent" />
            <span>{language === "zh" ? "1. 封面标题与文案定制" : "1. Typography & Hooks"}</span>
          </div>

          <div className="studio-form-group">
            <label>{language === "zh" ? "主标题（上行动词/利益点）" : "Main Title"}</label>
            <input
              type="text"
              value={mainTitle}
              onChange={(e) => setMainTitle(e.target.value)}
              placeholder="如：让 AI 按时上班"
              className="studio-input"
            />
          </div>

          <div className="studio-form-group">
            <label>{language === "zh" ? "副标题 / 钩子（下行量化细节）" : "Subtitle / Hook"}</label>
            <input
              type="text"
              value={subtitle}
              onChange={(e) => setSubtitle(e.target.value)}
              placeholder="如：实测6步设置 · 避开3个致命坑"
              className="studio-input"
            />
          </div>

          <div className="studio-form-group">
            <label>{language === "zh" ? "系列栏目名称（右上角角标）" : "Series Badge"}</label>
            <input
              type="text"
              value={seriesName}
              onChange={(e) => setSeriesName(e.target.value)}
              placeholder="如：AI 自动化进阶"
              className="studio-input"
            />
          </div>

          <div className="studio-section-title" style={{ marginTop: "16px" }}>
            <Box size={16} className="text-warning" />
            <span>{language === "zh" ? "2. 切换四大戏剧化场景" : "2. Signature Scenarios"}</span>
          </div>

          <div className="scenario-selector-grid">
            {SCENARIOS.map((sc) => (
              <button
                key={sc.id}
                type="button"
                className={`scenario-card ${selectedScenario.id === sc.id ? "scenario-card--active" : ""}`}
                onClick={() => setSelectedScenario(sc)}
              >
                <div className="scenario-card__icon">{sc.icon}</div>
                <div className="scenario-card__info">
                  <strong>{sc.name}</strong>
                  <span>{sc.tagline}</span>
                </div>
              </button>
            ))}
          </div>

          <div className="studio-section-title" style={{ marginTop: "16px" }}>
            <Palette size={16} className="text-accent" />
            <span>{language === "zh" ? "3. 3D 立体霓虹配色家族" : "3. Neon Palette"}</span>
          </div>

          <div className="palette-pill-row">
            {THEME_PALETTES.map((pal) => (
              <button
                key={pal.id}
                type="button"
                className={`palette-chip ${selectedPalette.id === pal.id ? "palette-chip--active" : ""}`}
                onClick={() => setSelectedPalette(pal)}
                style={{ "--chip-color": pal.color }}
              >
                <span className="palette-chip__dot" />
                <span>{pal.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Right Column: Live 3:4 Visual Simulator */}
        <div className="cover-studio-preview-col">
          <div className="preview-canvas-wrapper">
            {/* 3:4 Canvas Phone Card */}
            <div
              className="cover-canvas-card"
              style={{
                background: selectedScenario.bgGradient,
                borderColor: selectedPalette.color,
                boxShadow: `0 20px 50px -10px ${selectedPalette.shadow}, 0 0 0 1px rgba(255,255,255,0.1)`,
              }}
            >
              {/* Canvas Specs Overlay Badge */}
              <div className="canvas-spec-tag">
                <span>3:4 NATIVE · 1080 × 1440 PNG</span>
              </div>

              {/* Floating Series Badge */}
              {seriesName && (
                <div className="canvas-series-pill" style={{ borderColor: selectedPalette.color }}>
                  <span className="dot" style={{ background: selectedPalette.color }} />
                  <span>{seriesName}</span>
                </div>
              )}

              {/* Floating Scenario Particles */}
              <div className="canvas-floating-decor">
                {selectedScenario.floatingItems.map((item, idx) => (
                  <span
                    key={idx}
                    className={`floating-item floating-item--${idx}`}
                  >
                    {item}
                  </span>
                ))}
              </div>

              {/* Main 3D Title Block */}
              <div className="canvas-title-wrap">
                <h2
                  className="canvas-3d-title"
                  style={{
                    textShadow: `
                      0 1px 0 #fff,
                      0 2px 0 #cbd5e1,
                      0 3px 0 #94a3b8,
                      0 5px 0 #475569,
                      0 8px 16px ${selectedPalette.shadow},
                      0 0 20px ${selectedPalette.color}
                    `,
                  }}
                >
                  {mainTitle || "主标题文案"}
                </h2>

                <div
                  className="canvas-subtitle-pill"
                  style={{
                    backgroundColor: selectedPalette.color,
                    boxShadow: `0 4px 14px ${selectedPalette.shadow}`,
                  }}
                >
                  <span>{subtitle || "副标题关键钩子"}</span>
                </div>
              </div>

              {/* Xiao-A IP 3D Character Area */}
              <div className="canvas-character-area">
                <div className="character-avatar-halo" style={{ borderColor: selectedPalette.color }}>
                  <div className="character-3d-avatar">
                    <span className="avatar-q-emoji">👩‍💻</span>
                    <span className="avatar-ip-name">小A · IP 固化</span>
                  </div>
                </div>
                <div className="character-ground-shadow" />
              </div>

              {/* Bottom Watermark & Brand */}
              <div className="canvas-bottom-meta">
                <span className="canvas-author-tag">@小A的AI日记 · 视觉规范</span>
                <span className="canvas-ratio-tag">Lanczos 质感定稿</span>
              </div>
            </div>
          </div>

          <div className="cover-rules-bar">
            <div className="rule-point">
              <CheckCircle2 size={13} className="text-success" />
              <span>拒绝黑边拉伸 · 空白画布原生 3:4 构图</span>
            </div>
            <div className="rule-point">
              <CheckCircle2 size={13} className="text-success" />
              <span>双行 3D 立体标题体系 · 字号占比 &gt; 80%</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Command Output Box */}
      <div className="cover-command-footer">
        <div className="command-footer-header">
          <div className="command-title">
            <Terminal size={14} className="text-accent" />
            <span>{language === "zh" ? "自动生成的 Skill 运行指令 (Codex / Antigravity)" : "Generated Command"}</span>
          </div>
          <button
            type="button"
            className={`btn-pill btn-pill--sm ${copied ? "btn-pill--success" : "btn-pill--secondary"}`}
            onClick={handleCopyCommand}
          >
            {copied ? <Check size={13} /> : <Copy size={13} />}
            <span>{copied ? (language === "zh" ? "已复制指令！" : "Copied!") : (language === "zh" ? "一键复制指令" : "Copy Command")}</span>
          </button>
        </div>
        <pre className="command-code-box">
          <code>{generatedSkillCommand}</code>
        </pre>
      </div>
    </div>
  );
}
