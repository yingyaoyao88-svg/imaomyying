import { motion } from "framer-motion";
import {
  Sparkles,
  Layers,
  Palette,
  Terminal,
  ExternalLink,
  Github,
  Zap,
  Code2,
  CheckCircle2,
  Cpu,
  Monitor,
  Layout,
  Star,
  RefreshCw,
} from "lucide-react";
import { useState } from "react";
import { DecryptedText, ShinyText, StarBorder } from "../reactbits";

const ARCH_STACK = [
  { name: "React 18", role: "现代并发 UI 框架", color: "#61dafb" },
  { name: "Vite 5", role: "毫秒级 HMR 与轻量构建", color: "#a855f7" },
  { name: "Tailwind CSS", role: "原子化精准排版与暗调变量", color: "#38bdf8" },
  { name: "Framer Motion", role: "物理级弹性过渡与滚动联动", color: "#ec4899" },
  { name: "React Bits", role: "字符解密、流光与边框微动效", color: "#f59e0b" },
  { name: "Vercel Edge", role: "全球边缘节点毫秒分发", color: "#ffffff" },
];

const PRESET_PHRASES = [
  "Building playful, useful AI products.",
  "从 0 到 1 打造极客与高审美并存的独立作品。",
  "Linear 工业黑曜石 · Apple 拟态交互美学",
  "Connection NOT perfection.",
];

export function PortfolioSiteShowcase({ language = "zh" }) {
  const [selectedPhraseIndex, setSelectedPhraseIndex] = useState(0);
  const [customKey, setCustomKey] = useState(0);
  const [activeSpeed, setActiveSpeed] = useState(40);

  const triggerDecrypt = () => {
    setCustomKey((prev) => prev + 1);
  };

  const nextPhrase = () => {
    setSelectedPhraseIndex((prev) => (prev + 1) % PRESET_PHRASES.length);
    setCustomKey((prev) => prev + 1);
  };

  return (
    <div className="showcase-container">
      {/* Top Bar Info */}
      <div className="showcase-topbar">
        <div className="showcase-topbar__left">
          <div className="showcase-status-indicator">
            <span className="live-dot" />
            <span>{language === "zh" ? "imaomyying 个人作品库官网沙盒" : "imaomyying Portfolio Sandbox"}</span>
          </div>
          <span className="showcase-pill-badge">
            <Layout size={12} />
            <span>{language === "zh" ? "Linear 黑曜石 · Rauno 拟态美学" : "Linear Obsidian · Rauno Aesthetics"}</span>
          </span>
        </div>

        <div className="showcase-topbar__right">
          <a
            href="https://imaomyying.com/"
            target="_blank"
            rel="noreferrer"
            className="btn-bento btn-bento--sm"
          >
            <span>{language === "zh" ? "访问正式上线主页" : "Visit imaomyying.com"}</span>
            <ExternalLink size={12} />
          </a>
          <a
            href="https://github.com/yingyaoyao88-svg/imaomyying"
            target="_blank"
            rel="noreferrer"
            className="btn-bento btn-bento--sm btn-bento--github"
          >
            <Github size={12} />
            <span>GitHub</span>
          </a>
        </div>
      </div>

      {/* Main Grid */}
      <div style={{ padding: "24px 20px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "20px" }}>
        {/* Left Card: React Bits Interactive Sandbox */}
        <div className="bento-card" style={{ padding: "22px", display: "flex", flexDirection: "column", gap: "18px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span style={{ fontSize: "12px", fontWeight: "700", color: "#f59e0b", display: "inline-flex", alignItems: "center", gap: "6px" }}>
              <Sparkles size={14} />
              <span>{language === "zh" ? "React Bits 字符解密引擎测试" : "React Bits DecryptedText Sandbox"}</span>
            </span>
            <button
              onClick={triggerDecrypt}
              className="btn-bento btn-bento--secondary"
              style={{ padding: "4px 10px", fontSize: "11.5px" }}
              title="重新触发解密动画"
            >
              <RefreshCw size={12} />
              <span>{language === "zh" ? "重播动效" : "Replay"}</span>
            </button>
          </div>

          {/* Interactive DecryptedText Display Box */}
          <div
            style={{
              background: "rgba(0, 0, 0, 0.4)",
              border: "1px solid rgba(245, 158, 11, 0.3)",
              borderRadius: "16px",
              padding: "24px 18px",
              minHeight: "110px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              boxShadow: "inset 0 0 20px rgba(245, 158, 11, 0.05)",
            }}
          >
            <div style={{ fontSize: "20px", fontWeight: "700", color: "var(--text)", fontFamily: "var(--font-mono)", lineHeight: 1.5 }}>
              <DecryptedText
                key={customKey}
                text={PRESET_PHRASES[selectedPhraseIndex]}
                speed={activeSpeed}
                maxIterations={16}
                revealDirection="center"
              />
            </div>
            <div style={{ marginTop: "12px" }}>
              <ShinyText
                text="✦ CYBERNETIC DECRYPTION ACTIVE ✦"
                speed={3}
                style={{ fontSize: "11px", letterSpacing: "1.5px", fontWeight: "700" }}
              />
            </div>
          </div>

          {/* Controls */}
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ fontSize: "12px", color: "var(--text-muted)" }}>
                {language === "zh" ? "切换测试语料：" : "Switch Test Phrase:"}
              </span>
              <button
                onClick={nextPhrase}
                className="btn-bento btn-bento--secondary"
                style={{ padding: "4px 12px", fontSize: "12px" }}
              >
                <span>{language === "zh" ? "下一句测试句" : "Next Phrase"}</span>
              </button>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <span style={{ fontSize: "12px", color: "var(--text-dim)" }}>
                {language === "zh" ? "解密速率：" : "Speed:"}
              </span>
              {[20, 40, 70].map((spd) => (
                <button
                  key={spd}
                  onClick={() => {
                    setActiveSpeed(spd);
                    setCustomKey((k) => k + 1);
                  }}
                  className={`tab-chip ${activeSpeed === spd ? "tab-chip--active" : ""}`}
                  style={{ padding: "3px 10px", fontSize: "11px" }}
                >
                  {spd === 20 ? "极速 (20ms)" : spd === 40 ? "标准 (40ms)" : "慢速 (70ms)"}
                </button>
              ))}
            </div>
          </div>

          {/* StarBorder component preview */}
          <div style={{ paddingTop: "10px", borderTop: "1px solid var(--border)" }}>
            <div style={{ fontSize: "12px", color: "var(--text-dim)", marginBottom: "8px" }}>
              {language === "zh" ? "StarBorder 动态聚光流光边框组件：" : "StarBorder Glowing Outline Component:"}
            </div>
            <StarBorder
              as="a"
              href="https://imaomyying.com/"
              target="_blank"
              rel="noreferrer"
              style={{ width: "100%", justifyContent: "center" }}
              speed="3.5s"
            >
              <Sparkles size={14} />
              <span>{language === "zh" ? "体验官网完整 React Bits 流光系统" : "Experience React Bits on imaomyying.com"}</span>
              <ExternalLink size={13} />
            </StarBorder>
          </div>
        </div>

        {/* Right Card: Architecture & Design System */}
        <div className="bento-card" style={{ padding: "22px", display: "flex", flexDirection: "column", gap: "16px" }}>
          <h4 style={{ fontSize: "15px", fontWeight: "700", display: "flex", alignItems: "center", gap: "8px" }}>
            <Cpu size={16} className="text-accent" />
            <span>{language === "zh" ? "工程架构与全栈技术底座" : "Fullstack Architecture"}</span>
          </h4>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
            {ARCH_STACK.map((item) => (
              <div
                key={item.name}
                style={{
                  background: "rgba(255, 255, 255, 0.04)",
                  border: "1px solid rgba(255, 255, 255, 0.07)",
                  borderRadius: "12px",
                  padding: "10px 12px",
                }}
              >
                <div style={{ fontSize: "13px", fontWeight: "700", color: item.color }}>{item.name}</div>
                <div style={{ fontSize: "11px", color: "var(--text-muted)", marginTop: "2px" }}>{item.role}</div>
              </div>
            ))}
          </div>

          <div style={{ fontSize: "13px", color: "var(--text-muted)", lineHeight: 1.6, marginTop: "6px" }}>
            {language === "zh" ? (
              <>
                <strong>设计美学哲学：</strong>汲取 Linear 的深黑低反光与 1px Specular 边框，结合 Rauno 的弹性拟物触控，配备纯前端免依赖 LocalStorage 共建投稿池，打造兼具独立开发者硬核极客感与国际先锋审美的数字品牌资产。
              </>
            ) : (
              <>
                <strong>Design Philosophy:</strong> Blends Linear's deep obsidian low-sheen surfaces and 1px specular outlines with Rauno's spring micro-interactions. Complete with a zero-friction crowdsourced submission workflow.
              </>
            )}
          </div>

          <div style={{ display: "flex", gap: "10px", marginTop: "auto", paddingTop: "12px", borderTop: "1px solid var(--border)" }}>
            <div style={{ flex: 1, background: "rgba(56, 189, 248, 0.08)", border: "1px solid rgba(56, 189, 248, 0.2)", borderRadius: "10px", padding: "10px", textAlign: "center" }}>
              <div style={{ fontSize: "18px", fontWeight: "800", color: "#38bdf8" }}>100%</div>
              <div style={{ fontSize: "10.5px", color: "var(--text-muted)", marginTop: "2px" }}>Lighthouse 性能</div>
            </div>
            <div style={{ flex: 1, background: "rgba(16, 185, 129, 0.08)", border: "1px solid rgba(16, 185, 129, 0.2)", borderRadius: "10px", padding: "10px", textAlign: "center" }}>
              <div style={{ fontSize: "18px", fontWeight: "800", color: "#10b981" }}>&lt; 0.5s</div>
              <div style={{ fontSize: "10.5px", color: "var(--text-muted)", marginTop: "2px" }}>边缘全球首屏</div>
            </div>
            <div style={{ flex: 1, background: "rgba(245, 158, 11, 0.08)", border: "1px solid rgba(245, 158, 11, 0.2)", borderRadius: "10px", padding: "10px", textAlign: "center" }}>
              <div style={{ fontSize: "18px", fontWeight: "800", color: "#f59e0b" }}>3 款</div>
              <div style={{ fontSize: "10.5px", color: "var(--text-muted)", marginTop: "2px" }}>沉浸式主题</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
