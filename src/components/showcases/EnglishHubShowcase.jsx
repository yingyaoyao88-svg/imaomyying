import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  ExternalLink,
  Sparkles,
  Filter,
  Layers,
  CheckCircle2,
  Send,
  Database,
  ShieldCheck,
  Zap,
  Globe,
  Tag,
  Star,
  Copy,
  Check,
} from "lucide-react";
import { useState, useMemo } from "react";

const SAMPLE_RESOURCES = [
  {
    id: 1,
    title: "BBC 6 Minute English",
    url: "https://www.bbc.co.uk/learningenglish",
    category: "listening",
    categoryLabel: "听力精磨",
    level: "intermediate",
    levelLabel: "进阶精听",
    price: "free",
    priceLabel: "免费纯享",
    rating: 4.9,
    desc: "BBC 经典王牌栏目，每期 6 分钟探讨科技、文化与社会热点，配有完整双语文本和关键生词精讲，英式发音磨耳朵首选。",
    highlights: ["双语剧本对照", "生词音频发音", "离线音频下载"],
    featured: true,
  },
  {
    id: 2,
    title: "All Ears English Podcast",
    url: "https://www.allearsenglish.com",
    category: "speaking",
    categoryLabel: "口语实战",
    level: "intermediate",
    levelLabel: "进阶交流",
    price: "free",
    priceLabel: "免费收听",
    rating: 4.8,
    desc: "主打“Connection NOT Perfection”理念，聚焦美式日常口语、地道俚语与职场社交破冰，告别教科书式生硬对话。",
    highlights: ["真实生活口语", "职场破冰技巧", "日常文化拓展"],
    featured: true,
  },
  {
    id: 3,
    title: "Readlang",
    url: "https://readlang.com",
    category: "reading",
    categoryLabel: "原版泛读",
    level: "all",
    levelLabel: "全阶段通用",
    price: "freemium",
    priceLabel: "免费/高级",
    rating: 4.9,
    desc: "网页即点即译神器，遇到生词点击立刻浮现上下文翻译，并在后台静默将生词导出为间隔重复闪卡，极大降低原版阅读门槛。",
    highlights: ["即点即查", "自动生成生词本", "支持自导入电子书"],
    featured: true,
  },
  {
    id: 4,
    title: "ELSA Speak AI Coach",
    url: "https://elsaspeak.com",
    category: "speaking",
    categoryLabel: "口语发音",
    level: "beginner",
    levelLabel: "零基础到进阶",
    price: "freemium",
    priceLabel: "基础免费",
    rating: 4.7,
    desc: "专为发音打造的 AI 智能教练，通过深度语音模型识别微小音素差异，精确指出重音、连读、元音饱满度的扣分项。",
    highlights: ["音素级评测", "智能纠音建议", "每日微习惯任务"],
    featured: false,
  },
  {
    id: 5,
    title: "DeepL Write",
    url: "https://www.deepl.com/write",
    category: "tools",
    categoryLabel: "提效工具",
    level: "all",
    levelLabel: "全阶段通用",
    price: "free",
    priceLabel: "免费使用",
    rating: 4.9,
    desc: "由 DeepL 团队打造的 AI 英语润色工具，不仅纠正拼写和语法错漏，更能一键切换“商务”、“口语”、“学术”等多种写作语调。",
    highlights: ["语调风格改写", "同义词替换建议", "保留作者原意"],
    featured: false,
  },
  {
    id: 6,
    title: "TED-Ed Animations",
    url: "https://ed.ted.com",
    category: "reading",
    categoryLabel: "原版泛读",
    level: "advanced",
    levelLabel: "高阶挑战",
    price: "free",
    priceLabel: "完全免费",
    rating: 4.9,
    desc: "每期 5 分钟精美科普动画，配有世界顶级学者的深度文案。兼具知识趣味性与高级学术词汇，配有课后思考问答题。",
    highlights: ["趣味手绘动画", "中英双显字幕", "思维拓展问答"],
    featured: true,
  },
  {
    id: 7,
    title: "NPR News Now",
    url: "https://www.npr.org",
    category: "listening",
    categoryLabel: "听力精磨",
    level: "advanced",
    levelLabel: "高阶母语速",
    price: "free",
    priceLabel: "完全免费",
    rating: 4.7,
    desc: "每小时更新 5 分钟权威美式新闻速报，真实播音员原生语速，涵盖国际时政与财经生活，是突破听力天花板的试金石。",
    highlights: ["母语级真实语速", "每小时整点更新", "纯正标准美音"],
    featured: false,
  },
  {
    id: 8,
    title: "Coach Shane Daily Dictation",
    url: "https://www.youtube.com/@DailyDictation",
    category: "listening",
    categoryLabel: "听力精磨",
    level: "beginner",
    levelLabel: "零基础/突破",
    price: "free",
    priceLabel: "完全免费",
    rating: 4.8,
    desc: "老牌外教 Coach Shane 逐字听写教学，逐句拆解弱读（Weak forms）、连读（Linking）与失爆，专治“单个词都认识连起来听不懂”。",
    highlights: ["逐句听写", "美音连读拆解", "千集免费视频库"],
    featured: false,
  },
];

export function EnglishHubShowcase({ language = "zh" }) {
  const [activeTab, setActiveTab] = useState("sandbox"); // 'sandbox' | 'architecture' | 'contribute'
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedLevel, setSelectedLevel] = useState("all");
  const [selectedPrice, setSelectedPrice] = useState("all");
  const [copiedId, setCopiedId] = useState(null);

  // Contribution simulation form state
  const [contribForm, setContribForm] = useState({
    title: "",
    url: "",
    category: "listening",
    level: "all",
    reason: "",
  });
  const [contribSubmitted, setContribSubmitted] = useState(false);

  const filteredResources = useMemo(() => {
    return SAMPLE_RESOURCES.filter((item) => {
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchTitle = item.title.toLowerCase().includes(q);
        const matchDesc = item.desc.toLowerCase().includes(q);
        const matchCat = item.categoryLabel.toLowerCase().includes(q);
        const matchHigh = item.highlights.some((h) => h.toLowerCase().includes(q));
        if (!matchTitle && !matchDesc && !matchCat && !matchHigh) return false;
      }
      if (selectedCategory !== "all" && item.category !== selectedCategory) {
        return false;
      }
      if (selectedLevel !== "all" && item.level !== selectedLevel && item.level !== "all") {
        return false;
      }
      if (selectedPrice !== "all" && item.price !== selectedPrice) {
        return false;
      }
      return true;
    });
  }, [searchQuery, selectedCategory, selectedLevel, selectedPrice]);

  const handleCopyLink = (item) => {
    navigator.clipboard?.writeText(item.url);
    setCopiedId(item.id);
    setTimeout(() => setCopiedId(null), 1800);
  };

  const handleContribSubmit = (e) => {
    e.preventDefault();
    if (!contribForm.title || !contribForm.url) return;
    setContribSubmitted(true);
    setTimeout(() => {
      setContribSubmitted(false);
      setContribForm({ title: "", url: "", category: "listening", level: "all", reason: "" });
      setActiveTab("sandbox");
    }, 2400);
  };

  return (
    <div className="showcase-box">
      {/* Showcase Top Control Bar */}
      <div className="showcase-nav-bar">
        <div className="showcase-badge-row">
          <span className="showcase-pill-badge">
            <Sparkles size={13} />
            <span>{language === "zh" ? "产品介绍展示页 · 实时交互沙盒" : "Live Product Showcase Sandbox"}</span>
          </span>
          <span className="showcase-version-badge">v1.2.0 · Cloudflare D1 Inside</span>
        </div>

        <div className="showcase-tabs">
          <button
            type="button"
            className={`showcase-tab-btn ${activeTab === "sandbox" ? "active" : ""}`}
            onClick={() => setActiveTab("sandbox")}
          >
            <Filter size={14} />
            <span>{language === "zh" ? "资源检索沙盒" : "Resource Sandbox"}</span>
          </button>
          <button
            type="button"
            className={`showcase-tab-btn ${activeTab === "architecture" ? "active" : ""}`}
            onClick={() => setActiveTab("architecture")}
          >
            <Layers size={14} />
            <span>{language === "zh" ? "边缘架构与审核流" : "Edge Architecture"}</span>
          </button>
          <button
            type="button"
            className={`showcase-tab-btn ${activeTab === "contribute" ? "active" : ""}`}
            onClick={() => setActiveTab("contribute")}
          >
            <Send size={14} />
            <span>{language === "zh" ? "免登录投稿体验" : "Crowdsource Flow"}</span>
          </button>
        </div>
      </div>

      {/* Main Showcase Panel Body */}
      <div className="showcase-body">
        {activeTab === "sandbox" && (
          <div className="hub-sandbox">
            {/* Search and Filters Bar */}
            <div className="hub-sandbox__toolbar">
              <div className="hub-search-input-wrap">
                <Search size={16} className="hub-search-icon" />
                <input
                  type="text"
                  placeholder={language === "zh" ? "搜索资源名称、关键词（如：BBC、口语、闪卡、TED）..." : "Search resources..."}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="hub-search-input"
                />
                {searchQuery && (
                  <button
                    type="button"
                    className="hub-search-clear"
                    onClick={() => setSearchQuery("")}
                  >
                    ×
                  </button>
                )}
              </div>

              {/* Quick tags */}
              <div className="hub-quick-tags">
                <span className="hub-quick-tag-label">{language === "zh" ? "热门检索：" : "Quick:"}</span>
                {["BBC", "口语", "泛读", "AI", "听写"].map((tag) => (
                  <button
                    key={tag}
                    type="button"
                    className="hub-quick-tag-btn"
                    onClick={() => setSearchQuery(tag)}
                  >
                    #{tag}
                  </button>
                ))}
              </div>
            </div>

            {/* Dimensional Pills Bar */}
            <div className="hub-filters-row">
              <div className="hub-filter-group">
                <span className="hub-filter-label">{language === "zh" ? "分类：" : "Cat:"}</span>
                {[
                  { key: "all", label: "全部" },
                  { key: "listening", label: "🎧 听力精磨" },
                  { key: "speaking", label: "🗣️ 口语实战" },
                  { key: "reading", label: "📖 原版泛读" },
                  { key: "tools", label: "🛠️ 提效工具" },
                ].map((c) => (
                  <button
                    key={c.key}
                    type="button"
                    className={`hub-pill ${selectedCategory === c.key ? "hub-pill--active" : ""}`}
                    onClick={() => setSelectedCategory(c.key)}
                  >
                    {c.label}
                  </button>
                ))}
              </div>

              <div className="hub-filter-group">
                <span className="hub-filter-label">{language === "zh" ? "水平：" : "Level:"}</span>
                {[
                  { key: "all", label: "全部水平" },
                  { key: "beginner", label: "🟢 零基础 / 启蒙" },
                  { key: "intermediate", label: "🟡 进阶拓展" },
                  { key: "advanced", label: "🟣 高阶挑战" },
                ].map((l) => (
                  <button
                    key={l.key}
                    type="button"
                    className={`hub-pill ${selectedLevel === l.key ? "hub-pill--active" : ""}`}
                    onClick={() => setSelectedLevel(l.key)}
                  >
                    {l.label}
                  </button>
                ))}
              </div>

              <div className="hub-filter-group">
                <span className="hub-filter-label">{language === "zh" ? "资费：" : "Price:"}</span>
                {[
                  { key: "all", label: "全部" },
                  { key: "free", label: "完全免费" },
                  { key: "freemium", label: "Freemium" },
                ].map((p) => (
                  <button
                    key={p.key}
                    type="button"
                    className={`hub-pill ${selectedPrice === p.key ? "hub-pill--active" : ""}`}
                    onClick={() => setSelectedPrice(p.key)}
                  >
                    {p.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Results Count & Status */}
            <div className="hub-results-meta">
              <span>
                {language === "zh"
                  ? `找到 ${filteredResources.length} 个精选自学资源`
                  : `Found ${filteredResources.length} resources`}
              </span>
              {(searchQuery || selectedCategory !== "all" || selectedLevel !== "all" || selectedPrice !== "all") && (
                <button
                  type="button"
                  className="hub-reset-btn"
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedCategory("all");
                    setSelectedLevel("all");
                    setSelectedPrice("all");
                  }}
                >
                  {language === "zh" ? "重置筛选条件" : "Reset Filters"}
                </button>
              )}
            </div>

            {/* Resources Cards Grid */}
            <div className="hub-cards-grid">
              {filteredResources.map((item) => (
                <div key={item.id} className="hub-card">
                  <div className="hub-card__header">
                    <div>
                      <div className="hub-card__badges">
                        <span className="hub-badge hub-badge--category">{item.categoryLabel}</span>
                        <span className="hub-badge hub-badge--level">{item.levelLabel}</span>
                        <span className={`hub-badge hub-badge--price hub-badge--${item.price}`}>
                          {item.priceLabel}
                        </span>
                      </div>
                      <h4 className="hub-card__title">{item.title}</h4>
                    </div>
                    <div className="hub-card__rating">
                      <Star size={12} className="star-icon" fill="currentColor" />
                      <span>{item.rating}</span>
                    </div>
                  </div>

                  <p className="hub-card__desc">{item.desc}</p>

                  <div className="hub-card__highlights">
                    {item.highlights.map((h, i) => (
                      <span key={i} className="hub-highlight-tag">
                        ✓ {h}
                      </span>
                    ))}
                  </div>

                  <div className="hub-card__footer">
                    <span className="hub-card__url">{item.url.replace("https://", "")}</span>
                    <div className="hub-card__actions">
                      <button
                        type="button"
                        className="hub-card-btn"
                        onClick={() => handleCopyLink(item)}
                        title="复制网址"
                      >
                        {copiedId === item.id ? <Check size={13} className="text-success" /> : <Copy size={13} />}
                      </button>
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noreferrer"
                        className="hub-card-btn hub-card-btn--primary"
                      >
                        <span>{language === "zh" ? "访问原站" : "Visit"}</span>
                        <ExternalLink size={12} />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredResources.length === 0 && (
              <div className="hub-empty-state">
                <Search size={32} />
                <p>{language === "zh" ? "没有找到符合条件的资源，您可以点击上方「免登录投稿」推荐优质站点！" : "No resources found."}</p>
                <button
                  type="button"
                  className="btn-pill btn-pill--primary"
                  onClick={() => setActiveTab("contribute")}
                >
                  <Send size={14} />
                  <span>{language === "zh" ? "立即去推荐这个好资源" : "Submit a Resource"}</span>
                </button>
              </div>
            )}
          </div>
        )}

        {/* Architecture Tab */}
        {activeTab === "architecture" && (
          <div className="hub-arch-panel">
            <div className="hub-arch-header">
              <Database size={24} className="text-accent" />
              <div>
                <h3>{language === "zh" ? "边缘轻量全栈架构规范 (Edge-First Fullstack)" : "Edge Architecture"}</h3>
                <p>{language === "zh" ? "基于 Next.js 16 + Cloudflare D1 (SQLite) + Drizzle ORM，毫秒级冷启动与零运维数据库" : "Zero-maintenance edge stack"}</p>
              </div>
            </div>

            <div className="hub-arch-flow">
              <div className="arch-step">
                <div className="arch-step__badge">01. 客户端访问</div>
                <div className="arch-step__box">
                  <h4>Next.js 16 App Router</h4>
                  <p>React 19 Server Components，客户端仅传输超轻 JSON 状态，全站响应小于 60ms。</p>
                </div>
              </div>

              <div className="arch-arrow">➔</div>

              <div className="arch-step">
                <div className="arch-step__badge">02. 边缘路由与网关</div>
                <div className="arch-step__box">
                  <h4>Cloudflare Workers</h4>
                  <p>全球 300+ 边缘节点就近解析路由，内置免登录投稿频率限制与 URL 规范性清洗。</p>
                </div>
              </div>

              <div className="arch-arrow">➔</div>

              <div className="arch-step">
                <div className="arch-step__badge">03. 边缘持久化存储</div>
                <div className="arch-step__box">
                  <h4>Cloudflare D1 & Drizzle</h4>
                  <p>原生分布式 SQLite 边缘数据库，Drizzle ORM 类型安全保证，公开接口仅暴露 published 记录。</p>
                </div>
              </div>

              <div className="arch-arrow">➔</div>

              <div className="arch-step">
                <div className="arch-step__badge">04. 审核管理闭环</div>
                <div className="arch-step__box">
                  <h4>ChatGPT OAuth + /admin</h4>
                  <p>管理员免密码使用 ChatGPT 账号安全授权登录，一键审核待处理资源并触发边缘缓存刷新。</p>
                </div>
              </div>
            </div>

            <div className="hub-arch-stats-row">
              <div className="hub-arch-stat">
                <Zap size={18} className="text-warning" />
                <div>
                  <strong>&lt; 50ms</strong>
                  <span>全球边缘节点 P95 响应耗时</span>
                </div>
              </div>
              <div className="hub-arch-stat">
                <ShieldCheck size={18} className="text-success" />
                <div>
                  <strong>0 运维成本</strong>
                  <span>Cloudflare D1 边缘无服务器原生架构</span>
                </div>
              </div>
              <div className="hub-arch-stat">
                <Globe size={18} className="text-accent" />
                <div>
                  <strong>100% 类型安全</strong>
                  <span>TypeScript + Drizzle 架构保证</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Contribute Tab */}
        {activeTab === "contribute" && (
          <div className="hub-contrib-panel">
            <div className="hub-contrib-box">
              <div className="hub-contrib-header">
                <Send size={20} className="text-accent" />
                <div>
                  <h3>{language === "zh" ? "免登录共建与推荐通道仿真" : "Community Submission"}</h3>
                  <p>{language === "zh" ? "访客无需注册登录，输入资源信息即可直接推入审核流队列" : "Submit resources without login"}</p>
                </div>
              </div>

              {contribSubmitted ? (
                <div className="hub-contrib-success">
                  <CheckCircle2 size={42} className="text-success" />
                  <h4>{language === "zh" ? "感谢您的推荐！已成功送入后台待审核队列" : "Submitted successfully!"}</h4>
                  <p>{language === "zh" ? "系统已校验 URL 并生成待审记录（Status: Pending），管理员在 /admin 审核通过后将即时在首页点亮！" : "Pending admin review."}</p>
                </div>
              ) : (
                <form onSubmit={handleContribSubmit} className="hub-contrib-form">
                  <div className="form-row-two">
                    <div className="form-group">
                      <label>{language === "zh" ? "资源名称 *" : "Resource Title *"}</label>
                      <input
                        type="text"
                        required
                        placeholder={language === "zh" ? "如：Grammar in Use 交互练习站" : "e.g. Grammar in Use"}
                        value={contribForm.title}
                        onChange={(e) => setContribForm({ ...contribForm, title: e.target.value })}
                      />
                    </div>
                    <div className="form-group">
                      <label>{language === "zh" ? "官方网址 URL *" : "Website URL *"}</label>
                      <input
                        type="url"
                        required
                        placeholder="https://..."
                        value={contribForm.url}
                        onChange={(e) => setContribForm({ ...contribForm, url: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="form-row-two">
                    <div className="form-group">
                      <label>{language === "zh" ? "归属模块分类" : "Category"}</label>
                      <select
                        value={contribForm.category}
                        onChange={(e) => setContribForm({ ...contribForm, category: e.target.value })}
                      >
                        <option value="listening">🎧 听力精磨</option>
                        <option value="speaking">🗣️ 口语实战</option>
                        <option value="reading">📖 原版泛读</option>
                        <option value="tools">🛠️ 提效工具</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label>{language === "zh" ? "建议适用难度" : "Level"}</label>
                      <select
                        value={contribForm.level}
                        onChange={(e) => setContribForm({ ...contribForm, level: e.target.value })}
                      >
                        <option value="all">全阶段通用</option>
                        <option value="beginner">零基础入门</option>
                        <option value="intermediate">进阶拓展</option>
                        <option value="advanced">高阶挑战</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label>{language === "zh" ? "为什么推荐它？（一句真诚的使用心得）" : "Why do you recommend it?"}</label>
                    <textarea
                      rows={3}
                      placeholder={language === "zh" ? "写下你用过它之后最大的收获，例如“帮我搞定了美音连读”、“生词查阅极快”等..." : "Your honest review..."}
                      value={contribForm.reason}
                      onChange={(e) => setContribForm({ ...contribForm, reason: e.target.value })}
                    />
                  </div>

                  <button type="submit" className="btn-pill btn-pill--primary">
                    <Send size={15} />
                    <span>{language === "zh" ? "模拟提交至待审核流" : "Submit for Moderation"}</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
