import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  Code2,
  Compass,
  ExternalLink,
  Github,
  Layers,
  Lightbulb,
  MessageCircle,
  QrCode,
  Sparkles,
  Workflow,
} from "lucide-react";
import { useMemo } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { getProjectBySlug, portfolioContent } from "../data/projects";
import {
  EnglishHubShowcase,
  XiaoACoverShowcase,
  WeChatPublisherShowcase,
  TeachingToolsShowcase,
  PortfolioSiteShowcase,
} from "../components/showcases";


const pick = (value, language) =>
  value && typeof value === "object" && !Array.isArray(value) && value[language] !== undefined
    ? value[language]
    : value;

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
};

export function ProjectDetailPage({ language }) {
  const { slug } = useParams();
  const project = getProjectBySlug(slug);
  const copy = portfolioContent[language].detail;

  if (!project) {
    return <Navigate to="/" replace />;
  }

  const projectTitle = pick(project.title, language);
  const projectSubtitle = pick(project.subtitle, language);
  const projectCategory = pick(project.category, language);
  const projectExcerpt = pick(project.excerpt, language);
  const projectTags = pick(project.tags, language) || [];
  const overviewList = pick(project.overview, language) || [];
  const problemList = pick(project.problem, language) || [];
  const solutionList = pick(project.solution, language) || [];
  const featuresList = pick(project.features, language) || [];

  return (
    <motion.main
      className="page project-detail-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="section-shell">
        <Link to="/" className="detail-back-btn">
          <ArrowLeft size={16} />
          <span>{copy.back}</span>
        </Link>

        {/* Hero Header */}
        <section className="detail-hero" {...fadeUp}>
          <div className="detail-hero__top">
            <span className="badge-pill badge-pill--accent">{projectCategory}</span>
            {project.isFlagship ? (
              <span className="badge-pill badge-pill--gold">
                ★ {language === "zh" ? "核心主打项目" : "Flagship Project"}
              </span>
            ) : null}
          </div>

          <h1 className="detail-hero__title">{projectTitle}</h1>
          <p className="detail-hero__subtitle">{projectSubtitle}</p>
          <p className="detail-hero__excerpt">{projectExcerpt}</p>

          <div className="detail-hero__tags">
            {projectTags.map((tag) => (
              <span key={tag} className="tag-chip">
                {tag}
              </span>
            ))}
          </div>

          <div className="detail-hero__actions">
            {project.githubUrl ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="btn-pill btn-pill--primary"
              >
                <Github size={16} />
                <span>{language === "zh" ? "查看 GitHub 源码" : "View on GitHub"}</span>
                <ArrowUpRight size={14} />
              </a>
            ) : null}

            {project.demoUrl ? (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noreferrer"
                className="btn-pill btn-pill--secondary"
              >
                <ExternalLink size={16} />
                <span>{language === "zh" ? "在线访问体验" : "Live Demo"}</span>
              </a>
            ) : null}
          </div>

          {/* Stats Grid */}
          {project.stats ? (
            <div className="detail-stats-grid">
              {project.stats.map((s, index) => (
                <div key={index} className="detail-stat-card">
                  <span className="detail-stat-label">{pick(s.label, language)}</span>
                  <strong className="detail-stat-val">{s.value}</strong>
                </div>
              ))}
            </div>
          ) : null}
        </section>

        {/* Interactive Showcase Section (介绍展示页核心体验) */}
        <section className="detail-showcase-section">
          <div className="detail-showcase-section__header">
            <div className="section-pill-tag">
              <Sparkles size={14} />
              <span>{language === "zh" ? "产品介绍展示与交互体验" : "Interactive Product Showcase"}</span>
            </div>
            <h2>{language === "zh" ? "核心体验与功能沙盒" : "Live Feature Sandbox & Workflow"}</h2>
            <p>
              {language === "zh"
                ? "直接在下方操作探索核心功能与工作流，体验所见即所得的交互设计与底层逻辑。"
                : "Interact directly with core workflows and examine the technical design below."}
            </p>
          </div>

          {project.slug === "english-learning-hub" && <EnglishHubShowcase language={language} />}
          {(project.slug === "xhs-cover-gen" || project.slug === "xiao-a-cover-skill") && (
            <XiaoACoverShowcase language={language} />
          )}
          {project.slug === "obsidian-wechat-publisher" && (
            <WeChatPublisherShowcase language={language} />
          )}
          {(project.slug === "teaching-tools" || project.slug === "AomyYing-teaching-tools") && (
            <TeachingToolsShowcase language={language} />
          )}
          {(project.slug === "portfolio-site" || project.slug === "imaomyying") && (
            <PortfolioSiteShowcase language={language} />
          )}
        </section>

        {/* Overview & Problem & Solution Section */}
        <div className="detail-sections">

          {/* Overview */}
          <motion.section className="detail-card-panel" {...fadeUp}>
            <div className="detail-card-panel__header">
              <Compass size={20} className="text-accent" />
              <h2>{copy.overview}</h2>
            </div>
            <div className="detail-text-list">
              {overviewList.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </motion.section>

          {/* Problem & Solution Grid */}
          <div className="detail-two-col">
            <motion.section className="detail-card-panel" {...fadeUp}>
              <div className="detail-card-panel__header">
                <Lightbulb size={20} className="text-warning" />
                <h2>{copy.problem}</h2>
              </div>
              <ul className="detail-bullet-list">
                {problemList.map((item, i) => (
                  <li key={i}>
                    <span className="bullet-num">0{i + 1}</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.section>

            <motion.section className="detail-card-panel" {...fadeUp}>
              <div className="detail-card-panel__header">
                <CheckCircle2 size={20} className="text-success" />
                <h2>{copy.solution}</h2>
              </div>
              <ul className="detail-bullet-list">
                {solutionList.map((item, i) => (
                  <li key={i}>
                    <span className="bullet-num bullet-num--success">0{i + 1}</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.section>
          </div>

          {/* Core Features */}
          {featuresList.length ? (
            <motion.section className="detail-card-panel" {...fadeUp}>
              <div className="detail-card-panel__header">
                <Workflow size={20} className="text-accent" />
                <h2>{copy.workflow}</h2>
              </div>
              <div className="features-grid">
                {featuresList.map((feat, idx) => (
                  <div key={idx} className="feature-item-card">
                    <span className="feature-item-index">0{idx + 1}</span>
                    <h3>{feat.title}</h3>
                    <p>{feat.desc}</p>
                  </div>
                ))}
              </div>
            </motion.section>
          ) : null}

          {/* Tech Stack */}
          {project.techStack ? (
            <motion.section className="detail-card-panel" {...fadeUp}>
              <div className="detail-card-panel__header">
                <Code2 size={20} className="text-accent" />
                <h2>{copy.techStack}</h2>
              </div>
              <div className="detail-stack-chips">
                {project.techStack.map((tech) => (
                  <span key={tech} className="stack-chip">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.section>
          ) : null}
        </div>

        {/* Creator Connect & WeChat QR Card */}
        <motion.section className="detail-card-panel detail-card-panel--connect" {...fadeUp}>
          <div className="detail-connect-wrap">
            <div className="detail-connect-info">
              <span className="badge-pill badge-pill--accent">
                {language === "zh" ? "交流探讨" : "Connect & Collaborate"}
              </span>
              <h2>{language === "zh" ? "对这个项目感兴趣？欢迎交流" : "Interested in this project?"}</h2>
              <p>
                {language === "zh"
                  ? "无论是项目实操、功能定制、AI 落地探讨还是自媒体合作，欢迎直接微信扫码添加小A好友交流。"
                  : "Feel free to scan the QR code to connect with Xiao-A on WeChat."}
              </p>
              <div className="detail-connect-meta">
                <span className="wechat-badge">
                  <MessageCircle size={14} />
                  <span>微信号: 15038098595</span>
                </span>
              </div>
            </div>
            <div className="detail-connect-qr-box">
              <img
                src="/wechat-qrcode.jpg"
                alt="小A 微信二维码"
                className="detail-connect-qr-img"
              />
              <span className="detail-qr-caption">
                <QrCode size={12} />
                <span>微信扫一扫 · 添加好友</span>
              </span>
            </div>
          </div>
        </motion.section>

        {/* Back Link Footer */}
        <div className="detail-footer">
          <Link to="/" className="btn-pill btn-pill--secondary">
            <ArrowLeft size={16} />
            <span>{copy.back}</span>
          </Link>
        </div>
      </div>
    </motion.main>
  );
}
