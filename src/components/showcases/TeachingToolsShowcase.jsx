import { motion, AnimatePresence } from "framer-motion";
import {
  Volume2,
  Sparkles,
  RotateCw,
  CheckCircle2,
  HelpCircle,
  XCircle,
  ExternalLink,
  ChevronRight,
  BookOpen,
  Headphones,
  Smartphone,
  Layers,
  ArrowRight,
  Play,
  Github,
} from "lucide-react";
import { useState, useCallback } from "react";

const SAMPLE_WORDS = [
  {
    id: 1,
    emoji: "🍎",
    word: "apple",
    phonetic: "/ˈæp.əl/",
    meaning: "苹果",
    example: "An apple a day keeps the doctor away.",
    unit: "Unit 1 · 核心水果词汇",
    phonicsRule: "Short vowel /æ/",
  },
  {
    id: 2,
    emoji: "🚀",
    word: "rocket",
    phonetic: "/ˈrɒk.ɪt/",
    meaning: "火箭",
    example: "The rocket flies into outer space.",
    unit: "Unit 2 · 科技与交通",
    phonicsRule: "Digraph -ck /k/",
  },
  {
    id: 3,
    emoji: "📚",
    word: "library",
    phonetic: "/ˈlaɪ.brər.i/",
    meaning: "图书馆",
    example: "We read quietly in the school library.",
    unit: "Unit 3 · 校园与学习",
    phonicsRule: "Three-syllable rhythm",
  },
  {
    id: 4,
    emoji: "🎨",
    word: "creative",
    phonetic: "/kriˈeɪ.tɪv/",
    meaning: "有创造力的",
    example: "Xiao-A is working on creative AI tools.",
    unit: "Unit 4 · 特质与表达",
    phonicsRule: "Suffix -ive",
  },
  {
    id: 5,
    emoji: "🐱",
    word: "cat",
    phonetic: "/kæt/",
    meaning: "猫咪",
    example: "The cute cat is sleeping on the desk.",
    unit: "Oxford Phonics 1 · 自然拼读",
    phonicsRule: "C-A-T blend /k/-/æ/-/t/",
  },
];

const DIALOGUES = [
  {
    speaker: "Xiao-A (博主小A)",
    avatar: "👩‍💻",
    en: "Good morning! Welcome to our English practice session.",
    zh: "早上好！欢迎来到我们的英语打卡练习时间。",
  },
  {
    speaker: "Learner (自学者)",
    avatar: "🌱",
    en: "Hi Xiao-A! I'm ready to practice today's phonics and dialogue.",
    zh: "小A你好！我已经准备好练习今天的自然拼读与对话了。",
  },
  {
    speaker: "Xiao-A (博主小A)",
    avatar: "👩‍💻",
    en: "Awesome! Let's read this aloud: Connection NOT perfection!",
    zh: "太棒了！让我们大声朗读：勇敢表达，不必追求完美！",
  },
];

const PHONICS_GROUPS = [
  {
    group: "Level 1: Short Vowels",
    pattern: "-at / -an / -ap",
    examples: ["cat", "hat", "pan", "map"],
    accent: "#10b981",
  },
  {
    group: "Level 2: Long Vowels",
    pattern: "a_e / i_e / o_e",
    examples: ["cake", "bike", "home", "nose"],
    accent: "#38bdf8",
  },
  {
    group: "Level 3: Blends & Digraphs",
    pattern: "sh / ch / th / ck",
    examples: ["ship", "chat", "this", "duck"],
    accent: "#f59e0b",
  },
];

export function TeachingToolsShowcase({ language = "zh" }) {
  const [activeTab, setActiveTab] = useState("flashcard");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showMeaning, setShowMeaning] = useState(true);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [scoreCounts, setScoreCounts] = useState({ know: 3, unsure: 1, forgot: 0 });
  const [activePlayingIndex, setActivePlayingIndex] = useState(null);

  const currentWord = SAMPLE_WORDS[currentIndex];

  const playTTS = useCallback((text) => {
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = "en-US";
      utterance.rate = 0.9;
      utterance.pitch = 1.05;
      utterance.onstart = () => setIsPlayingAudio(true);
      utterance.onend = () => setIsPlayingAudio(false);
      utterance.onerror = () => setIsPlayingAudio(false);
      window.speechSynthesis.speak(utterance);
    } else {
      setIsPlayingAudio(true);
      setTimeout(() => setIsPlayingAudio(false), 800);
    }
  }, []);

  const handleNextWord = (result) => {
    if (result) {
      setScoreCounts((prev) => ({
        ...prev,
        [result]: prev[result] + 1,
      }));
    }
    setCurrentIndex((prev) => (prev + 1) % SAMPLE_WORDS.length);
  };

  const handlePrevWord = () => {
    setCurrentIndex((prev) => (prev - 1 + SAMPLE_WORDS.length) % SAMPLE_WORDS.length);
  };

  const playDialogueAudio = (text, idx) => {
    setActivePlayingIndex(idx);
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = "en-US";
      utterance.rate = 0.92;
      utterance.onend = () => setActivePlayingIndex(null);
      utterance.onerror = () => setActivePlayingIndex(null);
      window.speechSynthesis.speak(utterance);
    } else {
      setTimeout(() => setActivePlayingIndex(null), 1200);
    }
  };

  return (
    <div className="showcase-container">
      {/* Top Bar Info */}
      <div className="showcase-topbar">
        <div className="showcase-topbar__left">
          <div className="showcase-status-indicator">
            <span className="live-dot" />
            <span>{language === "zh" ? "AomyYing-teaching-tools 交互沙盒" : "Teaching Tools Live Sandbox"}</span>
          </div>
          <span className="showcase-pill-badge">
            <Smartphone size={12} />
            <span>{language === "zh" ? "移动优先 · 拟物卡片" : "Mobile First · Tactile UI"}</span>
          </span>
        </div>

        <div className="showcase-topbar__right">
          <a
            href="https://english-practice-app.vercel.app"
            target="_blank"
            rel="noreferrer"
            className="btn-bento btn-bento--sm"
          >
            <span>{language === "zh" ? "打开在线打卡 App" : "Open Live App"}</span>
            <ExternalLink size={12} />
          </a>
          <a
            href="https://github.com/yingyaoyao88-svg/AomyYing-teaching-tools"
            target="_blank"
            rel="noreferrer"
            className="btn-bento btn-bento--sm btn-bento--github"
          >
            <Github size={12} />
            <span>GitHub</span>
          </a>
        </div>
      </div>

      {/* Tabs */}
      <div className="showcase-tabs" style={{ display: "flex", gap: "8px", padding: "12px 20px", borderBottom: "1px solid var(--border)", flexWrap: "wrap" }}>
        <button
          className={`tab-chip ${activeTab === "flashcard" ? "tab-chip--active" : ""}`}
          onClick={() => setActiveTab("flashcard")}
        >
          <span>🔤 {language === "zh" ? "单词跟读闪卡" : "Word Flashcard"}</span>
        </button>
        <button
          className={`tab-chip ${activeTab === "dialogue" ? "tab-chip--active" : ""}`}
          onClick={() => setActiveTab("dialogue")}
        >
          <span>📖 {language === "zh" ? "课本对话演练 (Let's talk)" : "Dialogue Practice"}</span>
        </button>
        <button
          className={`tab-chip ${activeTab === "phonics" ? "tab-chip--active" : ""}`}
          onClick={() => setActiveTab("phonics")}
        >
          <span>🎯 {language === "zh" ? "自然拼读进阶 (Phonics)" : "Phonics Progress"}</span>
        </button>
      </div>

      {/* Content Area */}
      <div style={{ padding: "24px 20px" }}>
        {activeTab === "flashcard" && (
          <div style={{ display: "grid", gridTemplateColumns: "minmax(280px, 400px) 1fr", gap: "24px", alignItems: "start" }}>
            {/* Phone Mockup Card */}
            <div
              style={{
                background: "linear-gradient(180deg, rgba(25, 30, 44, 0.95) 0%, rgba(15, 18, 28, 0.98) 100%)",
                border: "1px solid rgba(255, 255, 255, 0.12)",
                borderRadius: "28px",
                padding: "24px 20px",
                boxShadow: "0 20px 40px rgba(0,0,0,0.45)",
                display: "flex",
                flexDirection: "column",
                gap: "16px",
                position: "relative",
              }}
            >
              {/* Header inside phone */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div>
                  <span style={{ fontSize: "11px", fontWeight: "700", color: "#10b981", textTransform: "uppercase", letterSpacing: "1px" }}>
                    Speak English · 打卡模式
                  </span>
                  <div style={{ fontSize: "12px", color: "var(--text-muted)", marginTop: "2px" }}>
                    {currentWord.unit}
                  </div>
                </div>
                <div style={{ fontSize: "11.5px", background: "rgba(255,255,255,0.06)", padding: "4px 10px", borderRadius: "999px", color: "var(--text)" }}>
                  {currentIndex + 1} / {SAMPLE_WORDS.length}
                </div>
              </div>

              {/* Progress bar */}
              <div style={{ width: "100%", height: "6px", background: "rgba(255,255,255,0.08)", borderRadius: "3px", overflow: "hidden" }}>
                <div
                  style={{
                    width: `${((currentIndex + 1) / SAMPLE_WORDS.length) * 100}%`,
                    height: "100%",
                    background: "#10b981",
                    transition: "width 0.3s ease",
                  }}
                />
              </div>

              {/* The Interactive Card */}
              <motion.div
                key={currentWord.id}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.25 }}
                style={{
                  background: "rgba(255, 255, 255, 0.04)",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                  borderRadius: "20px",
                  padding: "24px 18px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  gap: "12px",
                }}
              >
                <div style={{ fontSize: "52px", lineHeight: 1 }}>{currentWord.emoji}</div>
                <div style={{ fontSize: "32px", fontWeight: "800", color: "var(--text)", letterSpacing: "-0.5px" }}>
                  {currentWord.word}
                </div>
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    background: "rgba(56, 189, 248, 0.12)",
                    color: "#38bdf8",
                    padding: "4px 12px",
                    borderRadius: "8px",
                    fontSize: "13px",
                    fontFamily: "var(--font-mono)",
                    cursor: "pointer",
                  }}
                  onClick={() => playTTS(currentWord.word)}
                  title="点击朗读发音"
                >
                  <Volume2 size={13} className={isPlayingAudio ? "animate-pulse" : ""} />
                  <span>{currentWord.phonetic}</span>
                </div>

                {/* Meaning Reveal */}
                <div
                  style={{
                    background: "rgba(16, 185, 129, 0.1)",
                    border: "1px solid rgba(16, 185, 129, 0.2)",
                    borderRadius: "12px",
                    padding: "10px 18px",
                    width: "100%",
                    marginTop: "6px",
                    minHeight: "44px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {showMeaning ? (
                    <span style={{ fontSize: "16px", fontWeight: "700", color: "#34d399" }}>
                      {currentWord.meaning}
                    </span>
                  ) : (
                    <span style={{ fontSize: "12.5px", color: "var(--text-dim)" }}>
                      {language === "zh" ? "（释义已折叠，自我检验中）" : "(Meaning hidden for recall)"}
                    </span>
                  )}
                </div>

                <div style={{ fontSize: "12px", color: "var(--text-muted)", fontStyle: "italic", marginTop: "4px" }}>
                  "{currentWord.example}"
                </div>
              </motion.div>

              {/* Audio & Toggle Row */}
              <div style={{ display: "flex", gap: "8px" }}>
                <button
                  onClick={() => playTTS(currentWord.word)}
                  className="btn-bento"
                  style={{ flex: 1, justifyContent: "center", background: "#10b981", color: "#000", fontWeight: "700" }}
                >
                  <Volume2 size={15} />
                  <span>{isPlayingAudio ? "发音中..." : "朗读单词发音"}</span>
                </button>
                <button
                  onClick={() => setShowMeaning((v) => !v)}
                  className="btn-bento btn-bento--secondary"
                  style={{ padding: "0 14px" }}
                  title="切换中文释义显示"
                >
                  <RotateCw size={14} />
                  <span>{showMeaning ? "隐藏" : "显示"}</span>
                </button>
              </div>

              {/* Feedback Buttons */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "8px" }}>
                <button
                  onClick={() => handleNextWord("know")}
                  className="btn-bento btn-bento--secondary"
                  style={{ padding: "8px 6px", fontSize: "12px", flexDirection: "column", gap: "2px" }}
                >
                  <span style={{ color: "#10b981", fontWeight: "700" }}>✓ 认识</span>
                  <span style={{ fontSize: "10px", color: "var(--text-dim)" }}>熟记于心</span>
                </button>
                <button
                  onClick={() => handleNextWord("unsure")}
                  className="btn-bento btn-bento--secondary"
                  style={{ padding: "8px 6px", fontSize: "12px", flexDirection: "column", gap: "2px" }}
                >
                  <span style={{ color: "#f59e0b", fontWeight: "700" }}>? 模糊</span>
                  <span style={{ fontSize: "10px", color: "var(--text-dim)" }}>稍后巩固</span>
                </button>
                <button
                  onClick={() => handleNextWord("forgot")}
                  className="btn-bento btn-bento--secondary"
                  style={{ padding: "8px 6px", fontSize: "12px", flexDirection: "column", gap: "2px" }}
                >
                  <span style={{ color: "#ef4444", fontWeight: "700" }}>✕ 忘记</span>
                  <span style={{ fontSize: "10px", color: "var(--text-dim)" }}>入错题本</span>
                </button>
              </div>
            </div>

            {/* Right Side: Architecture & Tool Highlights */}
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <div className="bento-card" style={{ padding: "20px" }}>
                <h4 style={{ fontSize: "15px", fontWeight: "700", marginBottom: "8px", display: "flex", alignItems: "center", gap: "8px" }}>
                  <Sparkles size={16} className="text-accent" />
                  <span>{language === "zh" ? "AomyYing-teaching-tools 核心亮点" : "Core Capabilities"}</span>
                </h4>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px", fontSize: "13px", color: "var(--text-muted)" }}>
                  <li style={{ display: "flex", alignItems: "flex-start", gap: "8px" }}>
                    <CheckCircle2 size={16} style={{ color: "#10b981", flexShrink: 0, marginTop: "2px" }} />
                    <span><strong>零依赖纯原生架构：</strong>采用轻量 HTML5 + CSS3 + 原生 JS 构建，无重型框架负担，手机秒开，极度丝滑。</span>
                  </li>
                  <li style={{ display: "flex", alignItems: "flex-start", gap: "8px" }}>
                    <CheckCircle2 size={16} style={{ color: "#10b981", flexShrink: 0, marginTop: "2px" }} />
                    <span><strong>Web Speech API 智能发音：</strong>免下载庞大 MP3 音频包，直接调用现代浏览器内置高保真 TTS 朗读引擎，省流省电。</span>
                  </li>
                  <li style={{ display: "flex", alignItems: "flex-start", gap: "8px" }}>
                    <CheckCircle2 size={16} style={{ color: "#10b981", flexShrink: 0, marginTop: "2px" }} />
                    <span><strong>分级自然拼读与课本同步：</strong>完整收录 Unit 1-6 核心词汇、牛津 Phonics 1-3 级，针对初学者与少儿英语学习科学进阶。</span>
                  </li>
                  <li style={{ display: "flex", alignItems: "flex-start", gap: "8px" }}>
                    <CheckCircle2 size={16} style={{ color: "#10b981", flexShrink: 0, marginTop: "2px" }} />
                    <span><strong>错题复盘与间隔重复：</strong>自主打标掌握程度，自动沉淀薄弱词汇，形成高效闭环复习。</span>
                  </li>
                </ul>
              </div>

              {/* Live Session Counter */}
              <div className="bento-card" style={{ padding: "18px" }}>
                <div style={{ fontSize: "12px", color: "var(--text-dim)", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "10px" }}>
                  本次沙盒互动实时统计 (Session Metrics)
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "12px" }}>
                  <div style={{ background: "rgba(16, 185, 129, 0.08)", border: "1px solid rgba(16, 185, 129, 0.2)", borderRadius: "12px", padding: "12px", textAlign: "center" }}>
                    <div style={{ fontSize: "20px", fontWeight: "800", color: "#10b981" }}>{scoreCounts.know}</div>
                    <div style={{ fontSize: "11px", color: "var(--text-muted)", marginTop: "2px" }}>已熟练掌握</div>
                  </div>
                  <div style={{ background: "rgba(245, 158, 11, 0.08)", border: "1px solid rgba(245, 158, 11, 0.2)", borderRadius: "12px", padding: "12px", textAlign: "center" }}>
                    <div style={{ fontSize: "20px", fontWeight: "800", color: "#f59e0b" }}>{scoreCounts.unsure}</div>
                    <div style={{ fontSize: "11px", color: "var(--text-muted)", marginTop: "2px" }}>需巩固</div>
                  </div>
                  <div style={{ background: "rgba(239, 68, 68, 0.08)", border: "1px solid rgba(239, 68, 68, 0.2)", borderRadius: "12px", padding: "12px", textAlign: "center" }}>
                    <div style={{ fontSize: "20px", fontWeight: "800", color: "#ef4444" }}>{scoreCounts.forgot}</div>
                    <div style={{ fontSize: "11px", color: "var(--text-muted)", marginTop: "2px" }}>错题待练</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "dialogue" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px", maxWidth: "680px", margin: "0 auto" }}>
            <div style={{ fontSize: "13px", color: "var(--text-muted)", marginBottom: "4px" }}>
              {language === "zh"
                ? "Let's talk 真实双人角色朗读对话模拟，点击每句话右侧播放图标即可收听地道纯正语音："
                : "Interactive role-play dialogue reader. Tap the speaker icon beside any turn to listen:"}
            </div>

            {DIALOGUES.map((d, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: idx * 0.1 }}
                style={{
                  background: "rgba(255, 255, 255, 0.04)",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                  borderRadius: "16px",
                  padding: "16px 20px",
                  display: "flex",
                  gap: "14px",
                  alignItems: "flex-start",
                }}
              >
                <div style={{ fontSize: "28px", flexShrink: 0 }}>{d.avatar}</div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: "12px", fontWeight: "700", color: "var(--text-dim)", marginBottom: "4px" }}>
                    {d.speaker}
                  </div>
                  <div style={{ fontSize: "15px", fontWeight: "600", color: "var(--text)", lineHeight: 1.5 }}>
                    {d.en}
                  </div>
                  <div style={{ fontSize: "13px", color: "var(--text-muted)", marginTop: "4px" }}>
                    {d.zh}
                  </div>
                </div>
                <button
                  onClick={() => playDialogueAudio(d.en, idx)}
                  style={{
                    background: activePlayingIndex === idx ? "#10b981" : "rgba(255, 255, 255, 0.08)",
                    color: activePlayingIndex === idx ? "#000" : "var(--text)",
                    border: "none",
                    borderRadius: "50%",
                    width: "36px",
                    height: "36px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                    flexShrink: 0,
                  }}
                  title="朗读本句"
                >
                  <Volume2 size={16} />
                </button>
              </motion.div>
            ))}
          </div>
        )}

        {activeTab === "phonics" && (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "16px" }}>
            {PHONICS_GROUPS.map((g, idx) => (
              <div
                key={idx}
                className="bento-card"
                style={{ padding: "20px", display: "flex", flexDirection: "column", gap: "12px" }}
              >
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <span style={{ fontSize: "12px", fontWeight: "700", color: g.accent }}>{g.group}</span>
                  <span style={{ fontSize: "12px", fontFamily: "var(--font-mono)", background: "rgba(255,255,255,0.06)", padding: "2px 8px", borderRadius: "6px" }}>
                    {g.pattern}
                  </span>
                </div>
                <div style={{ fontSize: "13px", color: "var(--text-muted)" }}>
                  点击单词可即时听发音并对比拼读规律：
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "4px" }}>
                  {g.examples.map((word) => (
                    <button
                      key={word}
                      onClick={() => playTTS(word)}
                      style={{
                        background: "rgba(255, 255, 255, 0.05)",
                        border: "1px solid rgba(255, 255, 255, 0.12)",
                        color: "var(--text)",
                        borderRadius: "8px",
                        padding: "6px 14px",
                        fontSize: "14px",
                        fontWeight: "600",
                        fontFamily: "var(--font-mono)",
                        cursor: "pointer",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "6px",
                        transition: "all 0.2s ease",
                      }}
                      onMouseOver={(e) => {
                        e.currentTarget.style.borderColor = g.accent;
                        e.currentTarget.style.color = g.accent;
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.12)";
                        e.currentTarget.style.color = "var(--text)";
                      }}
                    >
                      <Volume2 size={12} />
                      <span>{word}</span>
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
