import { motion, AnimatePresence } from "framer-motion";
import {
  Compass,
  Flame,
  Globe,
  Home,
  Layers,
  MessageCircle,
  Moon,
  Palette,
  QrCode,
  Send,
  Sparkles,
  Sun,
  Tv,
} from "lucide-react";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export function FloatingDock({
  language = "zh",
  theme = "obsidian",
  onSelectTheme,
  onToggleLanguage,
  onOpenQrModal,
}) {
  const [hoveredIdx, setHoveredIdx] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === "/";

  const handleNavClick = (anchor) => {
    if (!isHome) {
      navigate("/");
      setTimeout(() => {
        const el = document.querySelector(anchor);
        el?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      const el = document.querySelector(anchor);
      el?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const cycleTheme = () => {
    const nextTheme =
      theme === "obsidian" ? "warm" : theme === "warm" ? "aurora" : "obsidian";
    onSelectTheme?.(nextTheme);
  };

  const navItems = [
    {
      id: "home",
      label: language === "zh" ? "回到顶部" : "Top",
      icon: Home,
      action: () => handleNavClick("#entry"),
    },
    {
      id: "projects",
      label: language === "zh" ? "核心项目" : "Projects",
      icon: Sparkles,
      action: () => handleNavClick("#projects"),
    },
    {
      id: "media",
      label: language === "zh" ? "自媒体矩阵" : "Media Matrix",
      icon: Flame,
      action: () => handleNavClick("#media"),
    },
    {
      id: "lab",
      label: language === "zh" ? "创意工坊" : "Creator Lab",
      icon: Layers,
      action: () => handleNavClick("#lab"),
    },
    {
      id: "contact",
      label: language === "zh" ? "联系合作" : "Contact",
      icon: Send,
      action: () => handleNavClick("#contact"),
    },
  ];

  return (
    <motion.nav
      className="floating-dock-container"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
      aria-label="Floating Navigation Dock"
    >
      <div className="floating-dock-pill">
        {/* Navigation Items */}
        <div className="dock-group">
          {navItems.map((item, index) => {
            const Icon = item.icon;
            const isHovered = hoveredIdx === index;

            return (
              <div
                key={item.id}
                className="dock-item-wrapper"
                onMouseEnter={() => setHoveredIdx(index)}
                onMouseLeave={() => setHoveredIdx(null)}
              >
                <AnimatePresence>
                  {isHovered && (
                    <motion.div
                      className="dock-tooltip"
                      initial={{ opacity: 0, y: 8, scale: 0.9 }}
                      animate={{ opacity: 1, y: -6, scale: 1 }}
                      exit={{ opacity: 0, y: 4, scale: 0.9 }}
                      transition={{ duration: 0.15 }}
                    >
                      {item.label}
                    </motion.div>
                  )}
                </AnimatePresence>

                <motion.button
                  type="button"
                  className="dock-btn"
                  onClick={item.action}
                  whileHover={{ scale: 1.18, y: -2 }}
                  whileTap={{ scale: 0.92 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  aria-label={item.label}
                >
                  <Icon size={17} />
                </motion.button>
              </div>
            );
          })}
        </div>

        <div className="dock-separator" />

        {/* Action Controls */}
        <div className="dock-group dock-group--actions">
          {/* WeChat QR Modal Trigger */}
          <div
            className="dock-item-wrapper"
            onMouseEnter={() => setHoveredIdx("qr")}
            onMouseLeave={() => setHoveredIdx(null)}
          >
            <AnimatePresence>
              {hoveredIdx === "qr" && (
                <motion.div
                  className="dock-tooltip"
                  initial={{ opacity: 0, y: 8, scale: 0.9 }}
                  animate={{ opacity: 1, y: -6, scale: 1 }}
                  exit={{ opacity: 0, y: 4, scale: 0.9 }}
                  transition={{ duration: 0.15 }}
                >
                  {language === "zh" ? "微信二维码" : "WeChat QR"}
                </motion.div>
              )}
            </AnimatePresence>

            <motion.button
              type="button"
              className="dock-btn dock-btn--accent"
              onClick={onOpenQrModal}
              whileHover={{ scale: 1.18, y: -2 }}
              whileTap={{ scale: 0.92 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              aria-label="WeChat QR Code"
            >
              <QrCode size={17} />
            </motion.button>
          </div>

          {/* Theme switcher */}
          <div
            className="dock-item-wrapper"
            onMouseEnter={() => setHoveredIdx("theme")}
            onMouseLeave={() => setHoveredIdx(null)}
          >
            <AnimatePresence>
              {hoveredIdx === "theme" && (
                <motion.div
                  className="dock-tooltip"
                  initial={{ opacity: 0, y: 8, scale: 0.9 }}
                  animate={{ opacity: 1, y: -6, scale: 1 }}
                  exit={{ opacity: 0, y: 4, scale: 0.9 }}
                  transition={{ duration: 0.15 }}
                >
                  {theme === "obsidian"
                    ? "黑曜石极客"
                    : theme === "warm"
                    ? "暖阳纸质"
                    : "极光弥散"}
                </motion.div>
              )}
            </AnimatePresence>

            <motion.button
              type="button"
              className="dock-btn"
              onClick={cycleTheme}
              whileHover={{ scale: 1.18, y: -2 }}
              whileTap={{ scale: 0.92 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              aria-label="Toggle Theme"
            >
              <Palette size={16} />
            </motion.button>
          </div>

          {/* Language toggle */}
          <div
            className="dock-item-wrapper"
            onMouseEnter={() => setHoveredIdx("lang")}
            onMouseLeave={() => setHoveredIdx(null)}
          >
            <AnimatePresence>
              {hoveredIdx === "lang" && (
                <motion.div
                  className="dock-tooltip"
                  initial={{ opacity: 0, y: 8, scale: 0.9 }}
                  animate={{ opacity: 1, y: -6, scale: 1 }}
                  exit={{ opacity: 0, y: 4, scale: 0.9 }}
                  transition={{ duration: 0.15 }}
                >
                  {language === "zh" ? "Switch to English" : "切换为中文"}
                </motion.div>
              )}
            </AnimatePresence>

            <motion.button
              type="button"
              className="dock-btn dock-btn--text"
              onClick={onToggleLanguage}
              whileHover={{ scale: 1.15, y: -2 }}
              whileTap={{ scale: 0.92 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              aria-label="Toggle Language"
            >
              <span className="dock-lang-label">{language === "zh" ? "EN" : "中"}</span>
            </motion.button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
