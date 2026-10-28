import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Check,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  FileCheck,
  FileText,
  Folder,
  FolderOpen,
  Layers,
  RotateCcw,
  Shuffle,
  Sparkles,
} from "lucide-react";
import React, { useState } from "react";
import { featuredArticles } from "../data/siteContent";

const pick = (value, language) =>
  value && typeof value === "object" && !Array.isArray(value) && value[language] !== undefined
    ? value[language]
    : value;

export function ArticleFolderStand({ language = "zh", theme = "obsidian" }) {
  // activeIndex: which article is currently selected (0 to 3)
  const [activeIndex, setActiveIndex] = useState(0);
  // isExtracted: whether the paper has been pulled out from the folder
  const [isExtracted, setIsExtracted] = useState(true);
  // direction for slide animation: 1 = forward, -1 = backward
  const [direction, setDirection] = useState(1);

  const total = featuredArticles.length;
  const currentArticle = featuredArticles[activeIndex];

  // Tab click: if clicking same active tab, toggle extraction; if different tab, pull that one
  const handleTabClick = (index) => {
    if (index === activeIndex) {
      setIsExtracted((prev) => !prev);
    } else {
      setDirection(index > activeIndex ? 1 : -1);
      setActiveIndex(index);
      setIsExtracted(true);
    }
  };

  const handleNext = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % total);
    setIsExtracted(true);
  };

  const handlePrev = () => {
    setDirection(-1);
    setActiveIndex((prev) => (prev - 1 + total) % total);
    setIsExtracted(true);
  };

  const handleRandom = () => {
    if (total <= 1) return;
    let nextIdx = activeIndex;
    while (nextIdx === activeIndex) {
      nextIdx = Math.floor(Math.random() * total);
    }
    setDirection(nextIdx > activeIndex ? 1 : -1);
    setActiveIndex(nextIdx);
    setIsExtracted(true);
  };

  const toggleExtract = () => {
    setIsExtracted((prev) => !prev);
  };

  return (
    <div className="folder-showcase-container">
      {/* ============================================================ */}
      {/* 1. FOLDER STAND TOP CONTROLS & ARCHIVE META BAR              */}
      {/* ============================================================ */}
      <div className="folder-meta-bar">
        <div className="folder-meta-left">
          <span className="folder-dossier-pill">
            <span className="folder-status-indicator"></span>
            <span className="folder-dossier-code">
              ARCHIVE // X_AOMYYING_VOL.01
            </span>
          </span>
          <span className="folder-status-label">
            {isExtracted ? (
              <>
                <FileCheck size={13} className="text-accent" />
                <span>
                  {language === "zh"
                    ? `已抽出第 0${activeIndex + 1} 份档案 · 可查阅`
                    : `File 0${activeIndex + 1}/${total} Extracted · Ready`}
                </span>
              </>
            ) : (
              <>
                <Folder size={13} />
                <span>
                  {language === "zh"
                    ? "档案夹已闭合 · 点击标签抽取"
                    : "Dossier Closed · Click tab to pull"}
                </span>
              </>
            )}
          </span>
        </div>

        <div className="folder-meta-actions">
          <button
            type="button"
            className="folder-control-btn"
            onClick={handleRandom}
            title={language === "zh" ? "随机抽取一篇" : "Random Extract"}
          >
            <Shuffle size={13} />
            <span className="btn-text">
              {language === "zh" ? "随机抽取" : "Random"}
            </span>
          </button>

          <button
            type="button"
            className="folder-control-btn folder-control-btn--toggle"
            onClick={toggleExtract}
            title={
              isExtracted
                ? language === "zh"
                  ? "放回文件夹"
                  : "Tuck into folder"
                : language === "zh"
                ? "抽出查阅"
                : "Extract file"
            }
          >
            {isExtracted ? (
              <>
                <Folder size={13} />
                <span className="btn-text">
                  {language === "zh" ? "放回文件夹" : "Tuck In"}
                </span>
              </>
            ) : (
              <>
                <FolderOpen size={13} />
                <span className="btn-text">
                  {language === "zh" ? "抽出档案" : "Pull Out"}
                </span>
              </>
            )}
          </button>

          <div className="folder-nav-pair">
            <button
              type="button"
              className="folder-arrow-btn"
              onClick={handlePrev}
              aria-label="Previous file"
            >
              <ChevronLeft size={15} />
            </button>
            <span className="folder-page-indicator">
              0{activeIndex + 1} / 0{total}
            </span>
            <button
              type="button"
              className="folder-arrow-btn"
              onClick={handleNext}
              aria-label="Next file"
            >
              <ChevronRight size={15} />
            </button>
          </div>
        </div>
      </div>

      {/* ============================================================ */}
      {/* 2. THE PHYSICAL FOLDER PODIUM (文件夹实体基座与抽取口)         */}
      {/* ============================================================ */}
      <div className={`folder-physical-stand ${isExtracted ? "is-extracted" : "is-closed"}`}>
        {/* Back Spine & Shadow */}
        <div className="folder-back-spine"></div>

        {/* Protruding Folder Index Tabs (文件夹上方突出的标签页) */}
        <div className="folder-tabs-rack" role="tablist">
          {featuredArticles.map((art, idx) => {
            const isActive = idx === activeIndex && isExtracted;
            const isCurrent = idx === activeIndex;

            // Short tab titles for tactile binder look
            const shortTitles = [
              language === "zh" ? "01 · 英语AI练法" : "01 · AI English",
              language === "zh" ? "02 · 豆包商务实操" : "02 · Business AI",
              language === "zh" ? "03 · 独立产品全记" : "03 · Indie Shipping",
              language === "zh" ? "04 · IP视觉一致性" : "04 · IP Visuals",
            ];

            return (
              <button
                key={art.id}
                type="button"
                role="tab"
                aria-selected={isCurrent}
                className={`folder-tab-item ${isCurrent ? "is-active-tab" : ""} ${
                  isActive ? "is-extracted-tab" : ""
                }`}
                onClick={() => handleTabClick(idx)}
              >
                <div className="folder-tab-cutout">
                  <span className="folder-tab-badge">DOC-0{idx + 1}</span>
                  <span className="folder-tab-title">{shortTitles[idx]}</span>
                  {isActive ? (
                    <span className="folder-tab-state-dot" title="已抽出查阅"></span>
                  ) : (
                    <span className="folder-tab-pull-hint">抽取 ↗</span>
                  )}
                </div>
              </button>
            );
          })}
        </div>

        {/* ============================================================ */}
        {/* 3. THE FOLDER POCKET & EXTRACTED DOCUMENT SHEET              */}
        {/* ============================================================ */}
        <div className="folder-pocket-interior">
          <AnimatePresence mode="wait">
            {isExtracted ? (
              <motion.div
                key={currentArticle.id}
                className="extracted-document-sheet"
                initial={{
                  y: 50,
                  opacity: 0,
                  rotate: direction > 0 ? 1 : -1,
                  scale: 0.98,
                }}
                animate={{
                  y: 0,
                  opacity: 1,
                  rotate: 0,
                  scale: 1,
                }}
                exit={{
                  y: 40,
                  opacity: 0,
                  rotate: direction > 0 ? -1 : 1,
                  scale: 0.98,
                }}
                transition={{
                  type: "spring",
                  damping: 24,
                  stiffness: 280,
                  mass: 0.8,
                }}
              >
                {/* Vintage / Confidential Stamp Overlay */}
                <div className="document-stamp">
                  <span>OFFICIAL X POST</span>
                  <small>VERIFIED</small>
                </div>

                {/* Document Top Bar */}
                <div className="doc-sheet-header">
                  <div className="doc-code-wrap">
                    <span className="doc-code-pill">
                      DOC // 2026-X-0{activeIndex + 1}
                    </span>
                    <span className="doc-category-badge">
                      {pick(currentArticle.category, language)}
                    </span>
                  </div>

                  <div className="doc-meta-right">
                    <span className="doc-date-chip">{currentArticle.date}</span>
                    <span className="doc-readtime-chip">
                      ⏱ {currentArticle.readTime}
                    </span>
                    <span className="doc-platform-chip">
                      {pick(currentArticle.platform, language)}
                    </span>
                  </div>
                </div>

                {/* Article Main Title */}
                <h3 className="doc-sheet-title">
                  <a
                    href={currentArticle.url}
                    target="_blank"
                    rel="noreferrer"
                    title={language === "zh" ? "在 X 上阅读全文" : "Read full thread on X"}
                  >
                    {pick(currentArticle.title, language)}
                  </a>
                </h3>

                {/* Core Excerpt / Key Abstract Callout */}
                <div className="doc-abstract-callout">
                  <div className="doc-callout-bar"></div>
                  <p className="doc-sheet-excerpt">
                    {pick(currentArticle.excerpt, language)}
                  </p>
                </div>

                {/* Article Tags */}
                <div className="doc-tags-row">
                  <span className="doc-tags-label">TOPICS //</span>
                  {currentArticle.tags.map((tag) => (
                    <span key={tag} className="doc-tag-pill">
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Sheet Bottom Footer / Action Row */}
                <div className="doc-sheet-footer">
                  <div className="doc-author-badge">
                    <div className="doc-x-avatar-chip">
                      <svg viewBox="0 0 24 24" width={13} height={13} fill="currentColor">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                      <span>{currentArticle.author} · 小A本人</span>
                    </div>
                    <span className="doc-footer-hint">
                      {language === "zh"
                        ? "点击右侧按钮直达 X 官方发布页"
                        : "Direct link to original X post"}
                    </span>
                  </div>

                  <div className="doc-actions-cluster">
                    <button
                      type="button"
                      className="btn-doc-tuck"
                      onClick={() => setIsExtracted(false)}
                      title={language === "zh" ? "放回文件夹" : "Tuck into folder"}
                    >
                      <Folder size={13} />
                      <span>{language === "zh" ? "放回文件夹" : "Tuck In"}</span>
                    </button>

                    <a
                      href={currentArticle.url}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-doc-read"
                    >
                      <span>{language === "zh" ? "在 X 阅读全文" : "Read on X"}</span>
                      <ArrowUpRight size={14} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ) : (
              /* Closed Folder Empty / Rest State (未抽取或放回时的质感封皮) */
              <motion.div
                key="closed-state"
                className="folder-closed-stage"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.25 }}
              >
                <div className="folder-closed-emboss">
                  <div className="folder-closed-seal">
                    <FolderOpen size={32} className="text-accent" />
                  </div>
                  <h4>
                    {language === "zh"
                      ? "小A的专栏档案夹 · 已安全归档"
                      : "Aomy's Featured Dossier · Safely Filed"}
                  </h4>
                  <p>
                    {language === "zh"
                      ? "共有 4 篇技术长文与实操指南收录在册。点击上方标签即可抽取阅读，或直接一键抽取："
                      : "4 long-form guides and retrospectives are archived. Click any tab above or draw below:"}
                  </p>

                  <div className="folder-closed-btn-group">
                    <button
                      type="button"
                      className="btn-folder-extract-primary"
                      onClick={() => setIsExtracted(true)}
                    >
                      <Sparkles size={15} />
                      <span>
                        {language === "zh"
                          ? `抽取第 0${activeIndex + 1} 份长文档案`
                          : `Extract File 0${activeIndex + 1}`}
                      </span>
                      <ArrowRight size={14} />
                    </button>

                    <button
                      type="button"
                      className="btn-folder-extract-random"
                      onClick={handleRandom}
                    >
                      <Shuffle size={14} />
                      <span>
                        {language === "zh" ? "随机抽取一篇" : "Random Pull"}
                      </span>
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Realistic Front Folder Pocket Flap / Rim (文件夹前袋边缘，形成纸张从中抽出的实体层级感) */}
          <div className="folder-pocket-front-rim">
            <div className="folder-rim-stripe">
              <span className="folder-rim-barcode">||| | | || ||| | ||| ||</span>
              <span className="folder-rim-meta">
                DOSSIER STAND // READY FOR EXTRACTION · 4 ARTICLES
              </span>
            </div>
            <div className="folder-rim-controls">
              <button
                type="button"
                className="folder-quick-step-btn"
                onClick={handlePrev}
                title="上一篇"
              >
                <ChevronLeft size={14} />
                <span>上一篇</span>
              </button>
              <div className="folder-rim-divider"></div>
              <button
                type="button"
                className="folder-quick-step-btn"
                onClick={handleNext}
                title="下一篇"
              >
                <span>下一篇</span>
                <ChevronRight size={14} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArticleFolderStand;
