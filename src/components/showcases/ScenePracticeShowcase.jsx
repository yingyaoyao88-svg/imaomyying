import { motion, AnimatePresence } from "framer-motion";
import {
  Film,
  Play,
  Pause,
  RotateCcw,
  Volume2,
  Mic,
  CheckCircle2,
  Sparkles,
  ExternalLink,
  MessageSquare,
  Clock,
  ArrowRight,
  Headphones,
  BookOpen,
  Coffee,
  Briefcase,
  Users,
  Tv,
  Award,
  Zap,
} from "lucide-react";
import { useState, useCallback, useEffect, useRef } from "react";

const SCENES_DATA = [
  {
    id: "coffee-mix-up",
    title: { zh: "Coffee Shop Mix-up", en: "Coffee Shop Mix-up" },
    titleZh: "咖啡店的小乌龙",
    category: "生活场景 · 餐饮点单",
    categoryEn: "Everyday · Coffee Shop",
    level: "进阶 · Intermediate",
    accent: "美式发音 (US Accent)",
    duration: "24 秒",
    focusExpression: "I think this might be mine.",
    focusMeaning: "礼貌确认饮品或物品是否拿错，用不冒犯的方式解决误会",
    icon: Coffee,
    color: "#f97316",
    stageBg: "linear-gradient(135deg, rgba(249, 115, 22, 0.15) 0%, rgba(245, 158, 11, 0.08) 100%)",
    dialogues: [
      {
        speaker: "Customer (小A)",
        role: "顾客",
        avatar: "👩‍💻",
        en: "Excuse me, I think this might be mine. I ordered an oat latte with vanilla.",
        zh: "打扰一下，这杯好像是我的。我点的是香草燕麦拿铁。",
        note: "地道表达：用 'I think this might be...' 替代生硬的 'You gave me the wrong coffee'，语气极其得体委婉。",
      },
      {
        speaker: "Barista",
        role: "咖啡师",
        avatar: "☕",
        en: "Oh, so sorry about that! Let me remake that for you right away.",
        zh: "哎呀真不好意思！我马上为您重新做一杯。",
        note: "口语连读：'so sorry about that' 中的 about 与 that 连读，that 末尾 /t/ 弱读甚至吞音。",
      },
      {
        speaker: "Customer (小A)",
        role: "顾客",
        avatar: "👩‍💻",
        en: "No worries at all, thank you so much!",
        zh: "完全没关系，非常感谢！",
        note: "高频回应：'No worries at all' 是母语者最自然的日常宽慰用语，比 'You're welcome' 更亲切。",
      },
    ],
  },
  {
    id: "friends-central-perk",
    title: { zh: "Friends · Central Perk", en: "Friends · Central Perk" },
    titleZh: "老友记 · 经典咖啡馆茶歇",
    category: "影视原声 · 美剧精讲",
    categoryEn: "Cinema Clip · Friends Classic",
    level: "中级 · Intermediate",
    accent: "美剧原声 (Native US)",
    duration: "20 秒",
    focusExpression: "Could I be any more clear?",
    focusMeaning: "老友记经典反问句式，强调『难道这还不明显吗？』",
    icon: Tv,
    color: "#e11d48",
    stageBg: "linear-gradient(135deg, rgba(225, 29, 72, 0.15) 0%, rgba(244, 63, 94, 0.08) 100%)",
    dialogues: [
      {
        speaker: "Joey",
        role: "老友记角色",
        avatar: "🍕",
        en: "Hey Rachel! How you doin'? Did someone order a fresh blueberry muffin?",
        zh: "嘿瑞秋！过得怎么样？有人点了新鲜的蓝莓松饼吗？",
        note: "经典梗：'How you doin'?' 标志性搭讪语调，轻重音在 'doin'' 上，连读自然下沉。",
      },
      {
        speaker: "Rachel",
        role: "老友记角色",
        avatar: "☕",
        en: "Joey, I literally hide it under the counter every morning! Could I be any more clear?",
        zh: "乔伊，我每天早上都特意藏在柜台下面！难道这还不明显吗？",
        note: "经典 Chandler 句式反问：'Could I BE any more clear?' 重读 BE，表达无奈与幽默。",
      },
      {
        speaker: "Joey",
        role: "老友记角色",
        avatar: "🍕",
        en: "Say no more! You are the sweetest friend in the whole wide world.",
        zh: "不用多说了！你真是全世界最好的朋友。",
        note: "地道表达：'Say no more' 意思是『心领神会，啥也别说了』，生活高频口语。",
      },
    ],
  },
  {
    id: "workplace-standup",
    title: { zh: "Workplace Standup Handover", en: "Workplace Standup Handover" },
    titleZh: "职场敏捷站会交接",
    category: "职场沟通 · 敏捷会议",
    categoryEn: "Workplace · Agile Standup",
    level: "进阶 · Business Fluent",
    accent: "国际职场 (Global Business)",
    duration: "22 秒",
    focusExpression: "I'll pass the mic over to...",
    focusMeaning: "会议交接发言棒：『话不多说，我把麦克风交接给...』",
    icon: Briefcase,
    color: "#2563eb",
    stageBg: "linear-gradient(135deg, rgba(37, 99, 235, 0.15) 0%, rgba(59, 130, 246, 0.08) 100%)",
    dialogues: [
      {
        speaker: "PM (小A)",
        role: "产品负责人",
        avatar: "👩‍💻",
        en: "All sprint deliverables are deployed. Without further ado, I'll pass the mic over to Leo for backend updates.",
        zh: "本期迭代产物已全部部署上线。话不多说，我把麦克风交接给 Leo 进行后端进展同步。",
        note: "会议转场神仙套句：'Without further ado' (言归正传/话不多说) + 'pass the mic over to...'",
      },
      {
        speaker: "Leo",
        role: "后端架构师",
        avatar: "⚡",
        en: "Thanks Aomy! The database migration finished ahead of schedule with zero downtime.",
        zh: "谢谢小A！数据库迁移已提前完成，全程零停机。",
        note: "实战短语：'ahead of schedule' (提前完成) 与 'zero downtime' (零故障/零宕机)。",
      },
    ],
  },
];

const METHOD_STEPS = [
  {
    step: "01",
    nameZh: "盲听原声磨耳朵",
    nameEn: "Blind Audio Input",
    tagZh: "屏蔽字幕",
    tagEn: "Audio First",
    descZh: "关掉字幕，先听 2~3 遍真实母语影视语速，感受自然语调起伏、连读与吞音弱读。",
    descEn: "Listen 2-3 times without captions to tune into natural rhythm, linking sounds, and stress.",
    icon: Headphones,
    color: "#38bdf8",
  },
  {
    step: "02",
    nameZh: "核心表达精析",
    nameEn: "Target Decoding",
    tagZh: "只练一句",
    tagEn: "Single Focus",
    descZh: "每次只聚焦 1 个核心地道表达，逐词拆解英美母语者思维，拒绝机械生硬的中式直译。",
    descEn: "Dissect one authentic expression per session with cultural nuances and situational etiquette.",
    icon: BookOpen,
    color: "#f59e0b",
  },
  {
    step: "03",
    nameZh: "影子跟读训练",
    nameEn: "Speech Shadowing",
    tagZh: "变速复读",
    tagEn: "0.75x~1.25x",
    descZh: "开启 0.75x 慢速精听至 1.0x 常速原声，跟随母语者节奏开口复读，建立唇齿肌肉记忆。",
    descEn: "Practice sentence-by-sentence vocal shadowing from 0.75x slow speed to native pacing.",
    icon: Mic,
    color: "#10b981",
  },
  {
    step: "04",
    nameZh: "真实场景迁移",
    nameEn: "Real-world Transfer",
    tagZh: "即学即用",
    tagEn: "Active Recall",
    descZh: "在咖啡店、校园破冰、敏捷站会等衍生场景中举一反三，让学到的表达真正能脱口而出。",
    descEn: "Apply newly mastered expressions directly into recurring everyday and workplace scenarios.",
    icon: Zap,
    color: "#8b5cf6",
  },
];

const CATALOG_MODULES = [
  {
    titleZh: "☕ 咖啡店常用表达",
    titleEn: "Coffee Shop Essentials",
    countZh: "处理点单与小误会",
    countEn: "Ordering & Resolving Mix-ups",
    href: "https://scene-practice.vercel.app/scenes",
    badge: "生活高频",
  },
  {
    titleZh: "🎓 校园初次见面",
    titleEn: "Campus First Meetings",
    countZh: "在校园自然开启对话破冰",
    countEn: "Natural Campus Icebreakers",
    href: "https://scene-practice.vercel.app/scenes",
    badge: "社交破冰",
  },
  {
    titleZh: "💼 职场演示与汇报",
    titleEn: "Workplace Presentations",
    countZh: "简洁说明、交接与答疑",
    countEn: "Concise Handovers & Syncs",
    href: "https://scene-practice.vercel.app/scenes",
    badge: "职场必备",
  },
  {
    titleZh: "🎬 《老友记》精选语料",
    titleEn: "Friends Series Special",
    countZh: "原声微切片与幽默反问",
    countEn: "Iconic Clips & Native Sarcasm",
    href: "https://scene-practice.vercel.app/scenes",
    badge: "美剧专区",
  },
];

export function ScenePracticeShowcase({ language = "zh" }) {
  const isZh = language === "zh";
  const [activeTab, setActiveTab] = useState("player"); // 'player' | 'loop' | 'scenes'
  const [selectedSceneIndex, setSelectedSceneIndex] = useState(0);
  const [activeLineIndex, setActiveLineIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [playbackRate, setPlaybackRate] = useState(1.0);
  const [subtitleMode, setSubtitleMode] = useState("bilingual"); // 'bilingual' | 'en' | 'hidden'
  const [shadowingStatus, setShadowingStatus] = useState("idle"); // 'idle' | 'recording' | 'feedback'
  const [shadowingScore, setShadowingScore] = useState(null);

  const currentScene = SCENES_DATA[selectedSceneIndex];
  const timerRef = useRef(null);

  // Play dialogue line using Web Speech Synthesis
  const speakLine = useCallback(
    (lineText, rate = playbackRate) => {
      if (typeof window !== "undefined" && "speechSynthesis" in window) {
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(lineText);
        utterance.lang = "en-US";
        utterance.rate = rate;
        utterance.pitch = 1.0;
        window.speechSynthesis.speak(utterance);
      }
    },
    [playbackRate]
  );

  // Automated playback runner
  const handleTogglePlay = () => {
    if (isPlaying) {
      setIsPlaying(false);
      if (timerRef.current) clearInterval(timerRef.current);
    } else {
      setIsPlaying(true);
      speakLine(currentScene.dialogues[activeLineIndex].en, playbackRate);

      let step = activeLineIndex;
      timerRef.current = setInterval(() => {
        step = (step + 1) % currentScene.dialogues.length;
        setActiveLineIndex(step);
        speakLine(currentScene.dialogues[step].en, playbackRate);
        if (step === currentScene.dialogues.length - 1) {
          // stop at end of loop or continue
        }
      }, 4200 / playbackRate);
    }
  };

  useEffect(() => {
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
      if (typeof window !== "undefined" && "speechSynthesis" in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  const handleSelectLine = (index) => {
    setActiveLineIndex(index);
    speakLine(currentScene.dialogues[index].en, playbackRate);
    setShadowingStatus("idle");
  };

  const handleTriggerShadowing = () => {
    setShadowingStatus("recording");
    setTimeout(() => {
      setShadowingStatus("feedback");
      const scores = [96, 98, 95, 99];
      const randomScore = scores[Math.floor(Math.random() * scores.length)];
      setShadowingScore(randomScore);
    }, 1800);
  };

  return (
    <div className="showcase-box scene-practice-showcase">
      {/* Top Bar with Live App Indicator */}
      <div className="showcase-nav-bar">
        <div className="showcase-badge-row">
          <span className="showcase-pill-badge" style={{ background: "rgba(249, 115, 22, 0.14)", color: "#f97316", borderColor: "rgba(249, 115, 22, 0.3)" }}>
            <Film size={13} />
            {isZh ? "声幕练习 · 影视听说训练" : "Scene Practice · Cinema Trainer"}
          </span>
          <span className="showcase-version-badge">Next.js · Turbopack · Vercel Edge</span>
        </div>

        {/* Tab switcher */}
        <div className="showcase-tabs">
          <button
            type="button"
            className={`showcase-tab-btn ${activeTab === "player" ? "active" : ""}`}
            onClick={() => setActiveTab("player")}
          >
            <Film size={13} />
            {isZh ? "影视微剧场" : "Cinema Stage"}
          </button>
          <button
            type="button"
            className={`showcase-tab-btn ${activeTab === "loop" ? "active" : ""}`}
            onClick={() => setActiveTab("loop")}
          >
            <Zap size={13} />
            {isZh ? "四步闭环法" : "4-Step Loop"}
          </button>
          <button
            type="button"
            className={`showcase-tab-btn ${activeTab === "scenes" ? "active" : ""}`}
            onClick={() => setActiveTab("scenes")}
          >
            <Coffee size={13} />
            {isZh ? "口语场景库" : "Scenarios"}
          </button>
        </div>

        {/* Live Demo Outbound Button */}
        <a
          href="https://scene-practice.vercel.app/scenes"
          target="_blank"
          rel="noreferrer"
          className="hub-card-btn hub-card-btn--primary"
          style={{ background: "rgba(249, 115, 22, 0.18)", color: "#f97316", borderColor: "rgba(249, 115, 22, 0.4)" }}
        >
          <span>{isZh ? "打开在线产品" : "Launch App"}</span>
          <ExternalLink size={12} />
        </a>
      </div>

      {/* Main Showcase Body */}
      <div className="showcase-body">
        {/* Tab 1: Interactive Cinema Stage */}
        {activeTab === "player" && (
          <div className="scene-player-container">
            {/* Scene Selector Ribbon */}
            <div className="scene-selector-ribbon">
              {SCENES_DATA.map((scene, idx) => {
                const IconComponent = scene.icon;
                const isSelected = selectedSceneIndex === idx;
                return (
                  <button
                    key={scene.id}
                    type="button"
                    className={`scene-select-chip ${isSelected ? "active" : ""}`}
                    onClick={() => {
                      setSelectedSceneIndex(idx);
                      setActiveLineIndex(0);
                      setIsPlaying(false);
                      if (timerRef.current) clearInterval(timerRef.current);
                      speakLine(scene.dialogues[0].en, playbackRate);
                    }}
                  >
                    <IconComponent size={14} style={{ color: scene.color }} />
                    <span className="scene-chip-title">{isZh ? scene.titleZh : scene.title.en}</span>
                    <span className="scene-chip-tag">{scene.duration}</span>
                  </button>
                );
              })}
            </div>

            {/* Cinema Stage Frame */}
            <div
              className="scene-stage-screen"
              style={{
                background: currentScene.stageBg,
                border: "1px solid rgba(255, 255, 255, 0.08)",
                borderRadius: "16px",
                padding: "24px",
                position: "relative",
                overflow: "hidden",
                marginTop: "16px",
              }}
            >
              {/* Top Film Strip Info */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  flexWrap: "wrap",
                  gap: "12px",
                  marginBottom: "20px",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <span
                    style={{
                      background: currentScene.color,
                      color: "#fff",
                      fontSize: "10px",
                      fontWeight: 800,
                      padding: "2px 8px",
                      borderRadius: "4px",
                      letterSpacing: "0.05em",
                    }}
                  >
                    ORIGINAL SCENE
                  </span>
                  <span style={{ fontSize: "14px", fontWeight: 700, color: "var(--text)" }}>
                    {isZh ? currentScene.titleZh : currentScene.title.en}
                  </span>
                  <span style={{ fontSize: "12px", color: "var(--text-muted)" }}>
                    · {currentScene.accent} · {currentScene.level}
                  </span>
                </div>

                {/* Subtitle Visibility Toggle */}
                <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                  <span style={{ fontSize: "11px", color: "var(--text-muted)" }}>{isZh ? "字幕:" : "Subs:"}</span>
                  <button
                    type="button"
                    className={`sub-toggle-btn ${subtitleMode === "bilingual" ? "active" : ""}`}
                    onClick={() => setSubtitleMode("bilingual")}
                  >
                    {isZh ? "双语" : "Dual"}
                  </button>
                  <button
                    type="button"
                    className={`sub-toggle-btn ${subtitleMode === "en" ? "active" : ""}`}
                    onClick={() => setSubtitleMode("en")}
                  >
                    {isZh ? "纯英文" : "EN Only"}
                  </button>
                  <button
                    type="button"
                    className={`sub-toggle-btn ${subtitleMode === "hidden" ? "active" : ""}`}
                    onClick={() => setSubtitleMode("hidden")}
                  >
                    {isZh ? "盲听" : "Blind"}
                  </button>
                </div>
              </div>

              {/* Target Expression Spotlight Box */}
              <div
                style={{
                  background: "rgba(0, 0, 0, 0.45)",
                  backdropFilter: "blur(8px)",
                  border: "1px solid rgba(255, 255, 255, 0.12)",
                  borderRadius: "12px",
                  padding: "14px 18px",
                  marginBottom: "20px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "14px",
                  flexWrap: "wrap",
                }}
              >
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "4px" }}>
                    <Sparkles size={13} style={{ color: currentScene.color }} />
                    <span style={{ fontSize: "11px", fontWeight: 700, color: currentScene.color, textTransform: "uppercase" }}>
                      {isZh ? "本片核心地道表达" : "Target Idiom"}
                    </span>
                  </div>
                  <strong style={{ fontSize: "17px", color: "#fff", letterSpacing: "-0.01em" }}>
                    "{currentScene.focusExpression}"
                  </strong>
                  <p style={{ fontSize: "12px", color: "rgba(255, 255, 255, 0.7)", margin: "4px 0 0 0" }}>
                    {isZh ? currentScene.focusMeaning : "Natural situational usage"}
                  </p>
                </div>

                <button
                  type="button"
                  className="practice-listen-btn"
                  onClick={() => speakLine(currentScene.focusExpression, playbackRate)}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    padding: "8px 14px",
                    borderRadius: "8px",
                    background: currentScene.color,
                    color: "#fff",
                    border: "none",
                    fontWeight: 700,
                    fontSize: "12px",
                    cursor: "pointer",
                  }}
                >
                  <Volume2 size={14} />
                  <span>{isZh ? "示范发音" : "Pronounce"}</span>
                </button>
              </div>

              {/* Animated Dialogue Flow */}
              <div className="scene-dialogue-stack" style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                {currentScene.dialogues.map((dlg, idx) => {
                  const isActive = activeLineIndex === idx;
                  return (
                    <motion.div
                      key={idx}
                      className={`scene-dialogue-card ${isActive ? "active-line" : ""}`}
                      onClick={() => handleSelectLine(idx)}
                      animate={{ scale: isActive ? 1.01 : 1 }}
                      transition={{ duration: 0.2 }}
                      style={{
                        background: isActive ? "rgba(0, 0, 0, 0.7)" : "rgba(0, 0, 0, 0.3)",
                        border: isActive ? `2px solid ${currentScene.color}` : "1px solid rgba(255, 255, 255, 0.08)",
                        borderRadius: "12px",
                        padding: "14px 16px",
                        cursor: "pointer",
                        transition: "all 0.2s ease",
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                        <span style={{ fontSize: "24px", lineHeight: "1" }}>{dlg.avatar}</span>
                        <div style={{ flex: 1 }}>
                          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "4px" }}>
                            <strong style={{ fontSize: "13px", color: isActive ? currentScene.color : "#fff" }}>
                              {dlg.speaker}
                            </strong>
                            <span style={{ fontSize: "11px", color: "rgba(255, 255, 255, 0.4)" }}>({dlg.role})</span>
                            {isActive && (
                              <span
                                style={{
                                  fontSize: "10px",
                                  padding: "1px 6px",
                                  borderRadius: "4px",
                                  background: "rgba(255, 255, 255, 0.15)",
                                  color: "#fff",
                                  marginLeft: "auto",
                                }}
                              >
                                {isZh ? "当前播放行" : "Current"}
                              </span>
                            )}
                          </div>

                          {/* English Subtitle */}
                          {subtitleMode !== "hidden" ? (
                            <p
                              style={{
                                fontSize: "15px",
                                fontWeight: 600,
                                color: "#ffffff",
                                margin: "4px 0",
                                lineHeight: "1.4",
                              }}
                            >
                              {dlg.en}
                            </p>
                          ) : (
                            <p style={{ fontSize: "13px", color: "rgba(255, 255, 255, 0.35)", fontStyle: "italic", margin: "4px 0" }}>
                              {isZh ? "【盲听模式：字幕已隐藏，专注捕捉原声音频】" : "[Blind Mode: Subtitle hidden]"}
                            </p>
                          )}

                          {/* Chinese Translation */}
                          {subtitleMode === "bilingual" && (
                            <p style={{ fontSize: "12.5px", color: "rgba(255, 255, 255, 0.75)", margin: "2px 0 0 0" }}>
                              {dlg.zh}
                            </p>
                          )}

                          {/* Annotation & Pronunciation Note */}
                          {isActive && dlg.note && (
                            <div
                              style={{
                                marginTop: "8px",
                                paddingTop: "8px",
                                borderTop: "1px dashed rgba(255, 255, 255, 0.15)",
                                fontSize: "11.5px",
                                color: "rgba(255, 255, 255, 0.65)",
                                display: "flex",
                                alignItems: "center",
                                gap: "6px",
                              }}
                            >
                              <Sparkles size={12} style={{ color: currentScene.color }} />
                              <span>{dlg.note}</span>
                            </div>
                          )}
                        </div>

                        {/* Line Voice Button */}
                        <button
                          type="button"
                          className="line-audio-btn"
                          aria-label="Play Line"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleSelectLine(idx);
                          }}
                          style={{
                            background: "rgba(255, 255, 255, 0.1)",
                            border: "none",
                            borderRadius: "8px",
                            padding: "8px",
                            color: "#fff",
                            cursor: "pointer",
                          }}
                        >
                          <Volume2 size={16} />
                        </button>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Player Control Bar */}
              <div
                style={{
                  marginTop: "20px",
                  paddingTop: "16px",
                  borderTop: "1px solid rgba(255, 255, 255, 0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  flexWrap: "wrap",
                  gap: "14px",
                }}
              >
                {/* Playback action buttons */}
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <button
                    type="button"
                    onClick={handleTogglePlay}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                      padding: "8px 16px",
                      borderRadius: "8px",
                      background: isPlaying ? "#ef4444" : currentScene.color,
                      color: "#fff",
                      border: "none",
                      fontWeight: 700,
                      fontSize: "13px",
                      cursor: "pointer",
                    }}
                  >
                    {isPlaying ? <Pause size={15} /> : <Play size={15} />}
                    <span>{isPlaying ? (isZh ? "暂停演练" : "Pause") : (isZh ? "循环朗读演练" : "Play Scene")}</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      setActiveLineIndex(0);
                      speakLine(currentScene.dialogues[0].en, playbackRate);
                    }}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                      padding: "8px 12px",
                      borderRadius: "8px",
                      background: "rgba(255, 255, 255, 0.08)",
                      color: "#fff",
                      border: "1px solid rgba(255, 255, 255, 0.15)",
                      fontSize: "12px",
                      cursor: "pointer",
                    }}
                  >
                    <RotateCcw size={13} />
                    <span>{isZh ? "重头开始" : "Restart"}</span>
                  </button>
                </div>

                {/* Speed Controls & Shadowing */}
                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
                  {/* Speed switch */}
                  <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                    <span style={{ fontSize: "11px", color: "rgba(255, 255, 255, 0.5)" }}>{isZh ? "倍速:" : "Speed:"}</span>
                    {[0.75, 1.0, 1.25].map((rate) => (
                      <button
                        key={rate}
                        type="button"
                        onClick={() => {
                          setPlaybackRate(rate);
                          speakLine(currentScene.dialogues[activeLineIndex].en, rate);
                        }}
                        style={{
                          padding: "4px 8px",
                          borderRadius: "6px",
                          border: playbackRate === rate ? `1px solid ${currentScene.color}` : "1px solid rgba(255, 255, 255, 0.1)",
                          background: playbackRate === rate ? currentScene.color : "transparent",
                          color: "#fff",
                          fontSize: "11px",
                          fontWeight: 700,
                          cursor: "pointer",
                        }}
                      >
                        {rate}×
                      </button>
                    ))}
                  </div>

                  {/* Vocal Shadowing Test Trigger */}
                  <button
                    type="button"
                    onClick={handleTriggerShadowing}
                    disabled={shadowingStatus === "recording"}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                      padding: "8px 14px",
                      borderRadius: "8px",
                      background:
                        shadowingStatus === "recording"
                          ? "#ef4444"
                          : shadowingStatus === "feedback"
                          ? "#10b981"
                          : "rgba(255, 255, 255, 0.12)",
                      border: "1px solid rgba(255, 255, 255, 0.2)",
                      color: "#fff",
                      fontWeight: 600,
                      fontSize: "12px",
                      cursor: "pointer",
                    }}
                  >
                    <Mic size={14} />
                    <span>
                      {shadowingStatus === "recording"
                        ? (isZh ? "正在录音跟读中..." : "Listening...")
                        : shadowingStatus === "feedback"
                        ? `${isZh ? "跟读契合度" : "Shadowing Score"}: ${shadowingScore}%`
                        : (isZh ? "影子跟读测试" : "Vocal Shadowing")}
                    </span>
                  </button>
                </div>
              </div>
            </div>

            {/* Quick Feature Callouts */}
            <div
              style={{
                marginTop: "16px",
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                gap: "12px",
              }}
            >
              <div className="feature-callout-card">
                <Headphones size={16} className="text-accent" />
                <div>
                  <strong>{isZh ? "原声盲听输入" : "Blind Listening"}</strong>
                  <p>{isZh ? "支持隐藏字幕，专注捕捉自然母语吞音与连读" : "Hide captions to focus purely on native auditory rhythm"}</p>
                </div>
              </div>
              <div className="feature-callout-card">
                <Mic size={16} style={{ color: "#10b981" }} />
                <div>
                  <strong>{isZh ? "30秒影子跟读" : "30s Shadowing Loop"}</strong>
                  <p>{isZh ? "0.75x 慢速到 1.0x 常速，逐句磨出地道肌肉记忆" : "Variable speed vocal shadowing builds oral muscle memory"}</p>
                </div>
              </div>
              <div className="feature-callout-card">
                <Zap size={16} style={{ color: "#f59e0b" }} />
                <div>
                  <strong>{isZh ? "场景化表达迁移" : "Scenario Transfer"}</strong>
                  <p>{isZh ? "咖啡店、职场站会、社交破冰，学完直接脱口而出" : "Transfer targeted expressions directly into your conversations"}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: 4-Step Methodology Loop */}
        {activeTab === "loop" && (
          <div className="method-loop-container">
            <div style={{ marginBottom: "20px" }}>
              <h3 style={{ fontSize: "18px", fontWeight: 800, color: "var(--text)", margin: "0 0 6px 0" }}>
                {isZh ? "声幕练习 4 步沉浸听说闭环" : "4-Step Immersion Loop"}
              </h3>
              <p style={{ fontSize: "13px", color: "var(--text-muted)", margin: 0 }}>
                {isZh
                  ? "拒绝死记硬背！从影视切片盲听、句法深度拆解、逐句开口影子跟读，到场景迁移变式训练。"
                  : "From raw cinema audio to confident oral muscle memory."}
              </p>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                gap: "16px",
              }}
            >
              {METHOD_STEPS.map((step) => {
                const IconComp = step.icon;
                return (
                  <div
                    key={step.step}
                    style={{
                      background: "var(--panel-elevated)",
                      border: "1px solid var(--border)",
                      borderRadius: "14px",
                      padding: "20px",
                      display: "flex",
                      flexDirection: "column",
                      position: "relative",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        marginBottom: "14px",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "12px",
                          fontWeight: 800,
                          fontFamily: "var(--font-mono)",
                          color: step.color,
                        }}
                      >
                        STEP {step.step}
                      </span>
                      <span
                        style={{
                          fontSize: "10.5px",
                          fontWeight: 700,
                          padding: "2px 8px",
                          borderRadius: "999px",
                          background: `${step.color}20`,
                          color: step.color,
                          border: `1px solid ${step.color}40`,
                        }}
                      >
                        {isZh ? step.tagZh : step.tagEn}
                      </span>
                    </div>

                    <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px" }}>
                      <div
                        style={{
                          width: "36px",
                          height: "36px",
                          borderRadius: "10px",
                          background: `${step.color}15`,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: step.color,
                        }}
                      >
                        <IconComp size={18} />
                      </div>
                      <strong style={{ fontSize: "15px", color: "var(--text)" }}>
                        {isZh ? step.nameZh : step.nameEn}
                      </strong>
                    </div>

                    <p style={{ fontSize: "13px", color: "var(--text-muted)", lineHeight: "1.6", margin: 0 }}>
                      {isZh ? step.descZh : step.descEn}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Scientific Repetition Notice */}
            <div
              style={{
                marginTop: "20px",
                padding: "16px 20px",
                background: "rgba(249, 115, 22, 0.08)",
                border: "1px dashed rgba(249, 115, 22, 0.3)",
                borderRadius: "12px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "16px",
                flexWrap: "wrap",
              }}
            >
              <div>
                <strong style={{ fontSize: "14px", color: "var(--text)", display: "block", marginBottom: "4px" }}>
                  {isZh ? "🔁 内置遗忘曲线复习台账" : "Spaced Repetition System"}
                </strong>
                <p style={{ fontSize: "12px", color: "var(--text-muted)", margin: 0 }}>
                  {isZh
                    ? "自动记录正在练习与已掌握的表达，根据艾宾浩斯记忆周期在首页智能推送待复习内容。"
                    : "Tracks newly acquired and mastered idioms, queuing timely spaced reviews on your learning dashboard."}
                </p>
              </div>
              <a
                href="https://scene-practice.vercel.app/scenes"
                target="_blank"
                rel="noreferrer"
                className="hub-card-btn hub-card-btn--primary"
                style={{ background: "#f97316", color: "#fff", borderColor: "#f97316", whiteSpace: "nowrap" }}
              >
                <span>{isZh ? "进入复习工作台" : "Open Review Hub"}</span>
                <ArrowRight size={13} />
              </a>
            </div>
          </div>
        )}

        {/* Tab 3: Catalog & Real Scenarios */}
        {activeTab === "scenes" && (
          <div className="scenes-catalog-container">
            <div style={{ marginBottom: "18px" }}>
              <h3 style={{ fontSize: "18px", fontWeight: 800, color: "var(--text)", margin: "0 0 6px 0" }}>
                {isZh ? "按口语场景探索 · 选你马上会遇到的情境" : "Explore Spoken Scenarios"}
              </h3>
              <p style={{ fontSize: "13px", color: "var(--text-muted)", margin: 0 }}>
                {isZh
                  ? "真实交流目标导向：不再按孤立语法背单词，而是按真实生活、社交破冰与职场需求成套掌握。"
                  : "Goal-oriented conversational training categorized by real-world situations."}
              </p>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                gap: "16px",
              }}
            >
              {CATALOG_MODULES.map((mod, index) => (
                <a
                  key={index}
                  href={mod.href}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    padding: "20px",
                    background: "var(--panel-elevated)",
                    border: "1px solid var(--border)",
                    borderRadius: "14px",
                    textDecoration: "none",
                    transition: "all 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "#f97316";
                    e.currentTarget.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "var(--border)";
                    e.currentTarget.style.transform = "none";
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "10px" }}>
                    <span
                      style={{
                        fontSize: "11px",
                        fontWeight: 700,
                        padding: "3px 8px",
                        borderRadius: "6px",
                        background: "rgba(249, 115, 22, 0.12)",
                        color: "#f97316",
                      }}
                    >
                      {mod.badge}
                    </span>
                    <ExternalLink size={14} style={{ color: "var(--text-muted)" }} />
                  </div>
                  <strong style={{ fontSize: "16px", color: "var(--text)", marginBottom: "4px" }}>
                    {isZh ? mod.titleZh : mod.titleEn}
                  </strong>
                  <p style={{ fontSize: "12.5px", color: "var(--text-muted)", margin: "0 0 14px 0", lineHeight: "1.5" }}>
                    {isZh ? mod.countZh : mod.countEn}
                  </p>
                  <span
                    style={{
                      marginTop: "auto",
                      fontSize: "12px",
                      fontWeight: 600,
                      color: "#f97316",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "4px",
                    }}
                  >
                    <span>{isZh ? "开始练习本场景" : "Practice This Scene"}</span>
                    <ArrowRight size={12} />
                  </span>
                </a>
              ))}
            </div>

            {/* Direct App Link Banner */}
            <div
              style={{
                marginTop: "24px",
                padding: "20px 24px",
                background: "linear-gradient(135deg, rgba(249, 115, 22, 0.12) 0%, rgba(225, 29, 72, 0.08) 100%)",
                borderRadius: "16px",
                border: "1px solid rgba(249, 115, 22, 0.25)",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "20px",
                flexWrap: "wrap",
              }}
            >
              <div>
                <strong style={{ fontSize: "16px", color: "var(--text)", display: "block", marginBottom: "4px" }}>
                  🎬 {isZh ? "在 scene-practice.vercel.app 体验完整应用" : "Experience Scene Practice Online"}
                </strong>
                <p style={{ fontSize: "13px", color: "var(--text-muted)", margin: 0 }}>
                  {isZh
                    ? "全端自适应、免登录开箱即练，支持老友记原声切片、30秒微训练与艾宾浩斯复习流。"
                    : "Zero login required, mobile-optimized, cinema clips & spaced review ready."}
                </p>
              </div>

              <a
                href="https://scene-practice.vercel.app/scenes"
                target="_blank"
                rel="noreferrer"
                className="btn-bento btn-bento--primary"
                style={{
                  background: "#f97316",
                  color: "#fff",
                  borderColor: "#f97316",
                  padding: "10px 20px",
                  borderRadius: "10px",
                  fontWeight: 700,
                  fontSize: "13px",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  textDecoration: "none",
                }}
              >
                <span>{isZh ? "前往声幕练习官方站" : "Launch Scene Practice"}</span>
                <ExternalLink size={14} />
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
