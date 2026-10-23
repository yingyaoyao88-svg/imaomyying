import { motion } from "framer-motion";
import { ArrowUpRight, Menu, Palette, Sparkles, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { portfolioContent } from "../data/projects";

const navItems = [
  { key: "projects", target: "projects" },
  { key: "media", target: "media" },
  { key: "lab", target: "lab" },
  { key: "about", target: "about" },
  { key: "submit", target: "submit" },
  { key: "contact", target: "contact" },
];

const THEMES = [
  { id: "obsidian", label: "琥珀曜岩", labelEn: "Amber Obsidian", icon: "✨" },
  { id: "warm", label: "雅致纸境", labelEn: "Warm Linen", icon: "📖" },
  { id: "aurora", label: "赛博薄荷", labelEn: "Cyber Mint", icon: "🌌" },
];

export function Header({
  isHome,
  language,
  theme = "obsidian",
  onSelectTheme,
  onToggleLanguage,
}) {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showThemeMenu, setShowThemeMenu] = useState(false);
  const copy = portfolioContent[language].nav;

  useEffect(() => {
    const handleScrollState = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScrollState();
    window.addEventListener("scroll", handleScrollState, { passive: true });
    return () => window.removeEventListener("scroll", handleScrollState);
  }, []);

  const handleScroll = (target) => {
    setIsOpen(false);
    if (!isHome) {
      navigate("/");
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          document.getElementById(target)?.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        });
      });
      return;
    }

    document.getElementById(target)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const nextTheme = () => {
    const currentIndex = THEMES.findIndex((t) => t.id === theme);
    const nextIndex = (currentIndex + 1) % THEMES.length;
    onSelectTheme?.(THEMES[nextIndex].id);
  };

  const currentThemeObj = THEMES.find((t) => t.id === theme) || THEMES[0];

  return (
    <motion.header
      className={`site-header ${isScrolled ? "is-scrolled" : ""}`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="site-header__inner">
        <Link to="/" className="site-header__brand">
          <span className="site-header__brand-mark">
            <span>A</span>
          </span>
          <span className="site-header__brand-copy">
            <strong>小A · AOMYYING</strong>
            <em>{copy.builder}</em>
          </span>
        </Link>

        <nav className="site-header__nav">
          {navItems.map((item) => (
            <button
              key={item.target}
              type="button"
              className="site-header__link"
              onClick={() => handleScroll(item.target)}
            >
              {copy[item.key]}
            </button>
          ))}
        </nav>

        <div className="site-header__actions">
          {/* Quick Theme Switcher Button */}
          <div className="theme-toggle-wrap">
            <button
              type="button"
              className="site-header__theme-btn"
              onClick={nextTheme}
              title={language === "zh" ? "切换配色方案" : "Switch Color Scheme"}
            >
              <span className="theme-icon">{currentThemeObj.icon}</span>
              <span className="theme-name">
                {language === "zh" ? currentThemeObj.label : currentThemeObj.labelEn}
              </span>
            </button>
          </div>

          <button
            type="button"
            className="site-header__lang"
            onClick={onToggleLanguage}
            aria-label="Toggle language"
          >
            {copy.language}
          </button>

          <button
            type="button"
            className="site-header__cta"
            onClick={() => handleScroll("contact")}
          >
            {copy.contact}
            <ArrowUpRight size={14} />
          </button>
        </div>

        <button
          type="button"
          className="site-header__menu"
          onClick={() => setIsOpen((current) => !current)}
          aria-label={isOpen ? "Close navigation" : "Open navigation"}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {isOpen ? (
        <div className="site-header__mobile">
          <Link to="/" className="site-header__mobile-brand" onClick={() => setIsOpen(false)}>
            <span className="site-header__brand-mark">A</span>
            <span className="site-header__brand-copy">
              <strong>小A · AOMYYING</strong>
              <em>{copy.builder}</em>
            </span>
          </Link>
          {navItems.map((item) => (
            <button
              key={item.target}
              type="button"
              className="site-header__mobile-link"
              onClick={() => handleScroll(item.target)}
            >
              {copy[item.key]}
            </button>
          ))}
          <div className="mobile-theme-row">
            {THEMES.map((t) => (
              <button
                key={t.id}
                type="button"
                className={`mobile-theme-chip ${theme === t.id ? "active" : ""}`}
                onClick={() => {
                  onSelectTheme?.(t.id);
                  setIsOpen(false);
                }}
              >
                <span>{t.icon}</span>
                <span>{language === "zh" ? t.label : t.labelEn}</span>
              </button>
            ))}
          </div>
          <button
            type="button"
            className="site-header__mobile-link"
            onClick={() => {
              setIsOpen(false);
              onToggleLanguage();
            }}
          >
            🌐 切换语言 ({copy.language})
          </button>
          <button
            type="button"
            className="site-header__mobile-cta"
            onClick={() => handleScroll("contact")}
          >
            {copy.contact}
          </button>
        </div>
      ) : null}
    </motion.header>
  );
}
