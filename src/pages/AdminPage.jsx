import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowUpRight,
  BookOpen,
  Check,
  CheckCircle2,
  Clock,
  Copy,
  Download,
  ExternalLink,
  Eye,
  Filter,
  Globe,
  KeyRound,
  Lock,
  LogOut,
  Mail,
  MessageCircle,
  MessageSquare,
  Plus,
  RefreshCw,
  Search,
  ShieldCheck,
  Sparkles,
  Tag,
  Trash2,
  X,
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { projects } from "../data/projects";
import {
  addSubmission,
  DEFAULT_SUBMISSIONS,
  deleteSubmission,
  exportSubmissionsToCSV,
  getSubmissions,
  saveSubmissions,
  updateSubmissionStatus,
} from "../utils/storage";

const DEFAULT_PIN = "aomy2026";

export function AdminPage({ language = "zh", theme = "obsidian" }) {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return sessionStorage.getItem("aomy_admin_session") === "true";
  });
  const [pinInput, setPinInput] = useState("");
  const [pinError, setPinError] = useState("");
  const [submissions, setSubmissions] = useState([]);
  const [filterStatus, setFilterStatus] = useState("all");
  const [filterType, setFilterType] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSub, setSelectedSub] = useState(null);
  const [toastMsg, setToastMsg] = useState("");

  useEffect(() => {
    if (isAuthenticated) {
      setSubmissions(getSubmissions());
    }
  }, [isAuthenticated]);

  const showToast = (msg) => {
    setToastMsg(msg);
    setTimeout(() => setToastMsg(""), 2200);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (pinInput.trim() === DEFAULT_PIN) {
      setIsAuthenticated(true);
      sessionStorage.setItem("aomy_admin_session", "true");
      setPinError("");
      setSubmissions(getSubmissions());
    } else {
      setPinError("密码不正确（默认密码：aomy2026）");
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem("aomy_admin_session");
    setPinInput("");
  };

  const handleStatusChange = (id, newStatus) => {
    const updated = updateSubmissionStatus(id, newStatus);
    setSubmissions(updated);
    showToast("状态已更新！");
    if (selectedSub && selectedSub.id === id) {
      setSelectedSub({ ...selectedSub, status: newStatus });
    }
  };

  const handleDelete = (id) => {
    if (window.confirm("确定要删除这条信息记录吗？")) {
      const updated = deleteSubmission(id);
      setSubmissions(updated);
      showToast("已删除该条记录");
      if (selectedSub && selectedSub.id === id) {
        setSelectedSub(null);
      }
    }
  };

  const handleResetSampleData = () => {
    if (window.confirm("确定重置为演示样本数据吗？")) {
      saveSubmissions(DEFAULT_SUBMISSIONS);
      setSubmissions(DEFAULT_SUBMISSIONS);
      showToast("已重置示例数据");
    }
  };

  const copyText = (text, label) => {
    navigator.clipboard.writeText(text).then(() => {
      showToast(`已复制 ${label}: ${text}`);
    });
  };

  // Filtered submissions
  const filteredList = useMemo(() => {
    return submissions.filter((item) => {
      const matchStatus = filterStatus === "all" || item.status === filterStatus;
      const matchType = filterType === "all" || item.type === filterType;
      const q = searchQuery.trim().toLowerCase();
      const matchSearch =
        !q ||
        item.name?.toLowerCase().includes(q) ||
        item.contact?.toLowerCase().includes(q) ||
        item.title?.toLowerCase().includes(q) ||
        item.message?.toLowerCase().includes(q) ||
        item.url?.toLowerCase().includes(q);
      return matchStatus && matchType && matchSearch;
    });
  }, [submissions, filterStatus, filterType, searchQuery]);

  // Statistics
  const stats = useMemo(() => {
    const total = submissions.length;
    const pending = submissions.filter((s) => s.status === "pending").length;
    const contacted = submissions.filter((s) => s.status === "contacted").length;
    const approved = submissions.filter((s) => s.status === "approved").length;
    const resources = submissions.filter((s) => s.type === "resource").length;
    return { total, pending, contacted, approved, resources };
  }, [submissions]);

  // If not logged in, render password modal
  if (!isAuthenticated) {
    return (
      <div className="admin-login-screen">
        <motion.div
          className="admin-login-card"
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="admin-login-icon">
            <ShieldCheck size={32} />
          </div>
          <h2>小A 网站管理后台</h2>
          <p className="admin-login-subtitle">
            查看访客提交的信息、合作意向及资源推荐，管理全站作品链接
          </p>

          <form onSubmit={handleLogin} className="admin-login-form">
            <div className="admin-input-group">
              <label>管理验证密码</label>
              <div className="admin-password-wrap">
                <KeyRound size={16} className="text-muted" />
                <input
                  type="password"
                  placeholder="默认管理密码：aomy2026"
                  value={pinInput}
                  onChange={(e) => setPinInput(e.target.value)}
                  autoFocus
                />
              </div>
              {pinError && <span className="admin-error-text">{pinError}</span>}
            </div>

            <button type="submit" className="admin-submit-btn">
              <Lock size={15} />
              <span>验证并进入后台</span>
            </button>
          </form>

          <div className="admin-login-footer">
            <Link to="/" className="admin-back-home-link">
              <ArrowLeft size={14} />
              <span>返回前台网站主页</span>
            </Link>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="admin-dashboard-page">
      {/* Toast */}
      {toastMsg && (
        <div className="toast-notification">
          <Check size={16} className="text-success" />
          <span>{toastMsg}</span>
        </div>
      )}

      {/* Top Navbar */}
      <header className="admin-topbar">
        <div className="admin-topbar-inner">
          <div className="admin-topbar-left">
            <Link to="/" className="admin-back-btn" title="返回网站主页">
              <ArrowLeft size={16} />
              <span>前台首页</span>
            </Link>
            <div className="admin-brand">
              <span className="admin-brand-tag">ADMIN PORTAL</span>
              <h1>信息收集与作品链接管理后台</h1>
            </div>
          </div>

          <div className="admin-topbar-actions">
            <button
              type="button"
              className="admin-btn admin-btn--secondary"
              onClick={() => exportSubmissionsToCSV(submissions)}
              title="将全部收集信息导出为 CSV 文件"
            >
              <Download size={15} />
              <span>导出 CSV 报表</span>
            </button>

            <button
              type="button"
              className="admin-btn admin-btn--danger"
              onClick={handleLogout}
              title="退出管理后台"
            >
              <LogOut size={15} />
              <span>退出登录</span>
            </button>
          </div>
        </div>
      </header>

      <main className="admin-main-container">
        {/* KPI Summary Cards */}
        <section className="admin-kpi-grid">
          <div className="admin-kpi-card">
            <div className="kpi-icon-wrap" style={{ background: "rgba(245, 158, 11, 0.15)", color: "#f59e0b" }}>
              <MessageSquare size={20} />
            </div>
            <div className="kpi-info">
              <span className="kpi-label">累计收集信息</span>
              <strong className="kpi-val">{stats.total} 条</strong>
            </div>
          </div>

          <div className="admin-kpi-card">
            <div className="kpi-icon-wrap" style={{ background: "rgba(239, 68, 68, 0.15)", color: "#ef4444" }}>
              <Clock size={20} />
            </div>
            <div className="kpi-info">
              <span className="kpi-label">待跟进 / 待审</span>
              <strong className="kpi-val text-warning">{stats.pending} 条</strong>
            </div>
          </div>

          <div className="admin-kpi-card">
            <div className="kpi-icon-wrap" style={{ background: "rgba(16, 185, 129, 0.15)", color: "#10b981" }}>
              <CheckCircle2 size={20} />
            </div>
            <div className="kpi-info">
              <span className="kpi-label">已联系 / 已采纳</span>
              <strong className="kpi-val text-success">{stats.contacted + stats.approved} 条</strong>
            </div>
          </div>

          <div className="admin-kpi-card">
            <div className="kpi-icon-wrap" style={{ background: "rgba(56, 189, 248, 0.15)", color: "#38bdf8" }}>
              <Globe size={20} />
            </div>
            <div className="kpi-info">
              <span className="kpi-label">自学资源推荐</span>
              <strong className="kpi-val">{stats.resources} 个</strong>
            </div>
          </div>
        </section>

        {/* Section 1: Submissions Management */}
        <section className="admin-section-box">
          <div className="admin-box-header">
            <div>
              <h2>📝 访客留言与资源推荐清单</h2>
              <p>在此查看访客提交的联系方式、合作需求与自学站点推荐，支持一键复制联系方式与状态管理。</p>
            </div>

            <button
              type="button"
              className="admin-btn-ghost-sm"
              onClick={handleResetSampleData}
              title="重置预置演示样本"
            >
              <RefreshCw size={13} />
              <span>重置演示数据</span>
            </button>
          </div>

          {/* Filter Bar */}
          <div className="admin-filters-bar">
            {/* Search Box */}
            <div className="admin-search-input-wrap">
              <Search size={14} className="text-muted" />
              <input
                type="text"
                placeholder="搜索姓名、微信、电话、标题或内容..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              {searchQuery && (
                <button type="button" onClick={() => setSearchQuery("")}>
                  <X size={13} />
                </button>
              )}
            </div>

            {/* Status Tabs */}
            <div className="admin-filter-tabs">
              <button
                type="button"
                className={`filter-pill ${filterStatus === "all" ? "active" : ""}`}
                onClick={() => setFilterStatus("all")}
              >
                全部 ({submissions.length})
              </button>
              <button
                type="button"
                className={`filter-pill ${filterStatus === "pending" ? "active" : ""}`}
                onClick={() => setFilterStatus("pending")}
              >
                待处理 ({stats.pending})
              </button>
              <button
                type="button"
                className={`filter-pill ${filterStatus === "contacted" ? "active" : ""}`}
                onClick={() => setFilterStatus("contacted")}
              >
                已联系 ({stats.contacted})
              </button>
              <button
                type="button"
                className={`filter-pill ${filterStatus === "approved" ? "active" : ""}`}
                onClick={() => setFilterStatus("approved")}
              >
                已采纳 ({stats.approved})
              </button>
            </div>

            {/* Type Selector */}
            <select
              className="admin-select"
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
            >
              <option value="all">全部分类</option>
              <option value="resource">推荐学习资源</option>
              <option value="collab">项目合作咨询</option>
              <option value="media">自媒体商务/交流</option>
              <option value="feedback">意见与提问</option>
            </select>
          </div>

          {/* Submissions List */}
          <div className="admin-table-wrap">
            {filteredList.length > 0 ? (
              <div className="admin-cards-list">
                {filteredList.map((item) => (
                  <article key={item.id} className={`admin-sub-card status-${item.status}`}>
                    <div className="sub-card-top">
                      <div className="sub-type-badge">
                        <Tag size={12} />
                        <span>{item.typeName || item.type}</span>
                      </div>

                      <span className={`sub-status-pill pill-${item.status}`}>
                        {item.status === "pending" && "⏳ 待处理"}
                        {item.status === "contacted" && "📞 已联系"}
                        {item.status === "approved" && "★ 已采纳上线"}
                      </span>

                      <span className="sub-time">{item.createdAt}</span>
                    </div>

                    <div className="sub-card-middle">
                      <div className="sub-user-line">
                        <strong className="sub-user-name">{item.name}</strong>
                        <button
                          type="button"
                          className="sub-copy-contact-btn"
                          onClick={() => copyText(item.contact, "联系方式")}
                          title="点击快速复制联系方式"
                        >
                          <Copy size={12} />
                          <span>{item.contact}</span>
                        </button>
                      </div>

                      {item.title && (
                        <div className="sub-title-row">
                          <span className="sub-title-label">标的/推荐：</span>
                          <strong>{item.title}</strong>
                          {item.url && (
                            <a
                              href={item.url}
                              target="_blank"
                              rel="noreferrer"
                              className="sub-link-pill"
                              title="点击打开访问链接"
                            >
                              <ExternalLink size={12} />
                              <span>访问链接</span>
                            </a>
                          )}
                        </div>
                      )}

                      <p className="sub-message-text">{item.message}</p>
                    </div>

                    <div className="sub-card-bottom">
                      <div className="sub-actions-left">
                        {item.status !== "contacted" && (
                          <button
                            type="button"
                            className="sub-act-btn sub-act-btn--contact"
                            onClick={() => handleStatusChange(item.id, "contacted")}
                          >
                            <Check size={13} />
                            <span>标为已联系</span>
                          </button>
                        )}
                        {item.status !== "approved" && (
                          <button
                            type="button"
                            className="sub-act-btn sub-act-btn--approve"
                            onClick={() => handleStatusChange(item.id, "approved")}
                          >
                            <Sparkles size={13} />
                            <span>标为已采纳</span>
                          </button>
                        )}
                        {item.status !== "pending" && (
                          <button
                            type="button"
                            className="sub-act-btn sub-act-btn--reset"
                            onClick={() => handleStatusChange(item.id, "pending")}
                          >
                            <Clock size={13} />
                            <span>重置为待办</span>
                          </button>
                        )}
                      </div>

                      <button
                        type="button"
                        className="sub-delete-btn"
                        onClick={() => handleDelete(item.id)}
                        title="删除记录"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <div className="admin-empty-state">
                <p>暂无符合筛选条件的提交记录</p>
                <button
                  type="button"
                  className="admin-btn admin-btn--secondary"
                  onClick={() => {
                    setFilterStatus("all");
                    setFilterType("all");
                    setSearchQuery("");
                  }}
                >
                  清空筛选条件
                </button>
              </div>
            )}
          </div>
        </section>

        {/* Section 2: Projects & Live Access Links Quick Hub */}
        <section className="admin-section-box">
          <div className="admin-box-header">
            <div>
              <h2>🌐 作品访问链接与在线体验管理</h2>
              <p>在此一站式核对所有展示作品的在线体验地址、GitHub 开源仓库与入口健康状态：</p>
            </div>
          </div>

          <div className="admin-projects-grid">
            {projects.map((proj) => (
              <div key={proj.slug} className="admin-proj-card">
                <div className="admin-proj-top">
                  <span className="proj-badge">{proj.isFlagship ? "★ 重点主打" : "精选项目"}</span>
                  <span className="proj-num">{proj.number}</span>
                </div>

                <h3 className="admin-proj-title">{typeof proj.title === "object" ? proj.title.zh : proj.title}</h3>
                <p className="admin-proj-sub">{typeof proj.subtitle === "object" ? proj.subtitle.zh : proj.subtitle}</p>

                <div className="admin-proj-links">
                  {/* Live Demo / Access Link */}
                  <div className="proj-link-row">
                    <span className="link-type-label">🌐 访问链接:</span>
                    <a
                      href={proj.demoUrl || proj.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="proj-url-text"
                    >
                      <span>{proj.demoUrl || proj.githubUrl}</span>
                      <ArrowUpRight size={13} />
                    </a>
                  </div>

                  {/* GitHub Repo */}
                  {proj.githubUrl && (
                    <div className="proj-link-row">
                      <span className="link-type-label">📦 GitHub:</span>
                      <a
                        href={proj.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="proj-url-text"
                      >
                        <span>{proj.githubUrl}</span>
                        <ArrowUpRight size={13} />
                      </a>
                    </div>
                  )}
                </div>

                <div className="admin-proj-actions">
                  <a
                    href={proj.demoUrl || proj.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="admin-proj-btn"
                  >
                    <ExternalLink size={14} />
                    <span>一键测试访问</span>
                  </a>
                  <Link to={`/project/${proj.slug}`} className="admin-proj-btn admin-proj-btn--ghost">
                    <Eye size={14} />
                    <span>查看详情页</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
