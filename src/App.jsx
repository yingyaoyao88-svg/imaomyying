import { AnimatePresence, motion, useScroll } from "framer-motion";
import { useEffect, useState } from "react";
import { HashRouter, Route, Routes, useLocation } from "react-router-dom";
import { Header } from "./components/Header";
import { FloatingDock } from "./components/FloatingDock";
import { ClickSpark } from "./components/reactbits";
import { AdminPage } from "./pages/AdminPage";
import { HomePage } from "./pages/HomePage";
import { ProjectDetailPage } from "./pages/ProjectDetailPage";

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [location.pathname]);

  return null;
}

function AppFrame() {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const isAdmin = location.pathname === "/admin";
  const { scrollYProgress } = useScroll();
  const [language, setLanguage] = useState("zh");
  const [theme, setTheme] = useState("warm"); // 'warm' (复古画报 Neo-Brutalism) | 'obsidian' | 'aurora'
  const [qrModalOpen, setQrModalOpen] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <div className={`app-shell theme-${theme}`} data-theme={theme}>
      {/* Ambient Aurora Mesh & Grain Texture Layer */}
      <div className="ambient-aurora-mesh" aria-hidden="true">
        <div className="aurora-orb aurora-orb--1" />
        <div className="aurora-orb aurora-orb--2" />
        <div className="aurora-orb aurora-orb--3" />
      </div>
      <div className="ambient-grain-overlay" aria-hidden="true" />

      {!isAdmin && (
        <motion.div
          className="scroll-progress"
          style={{ scaleX: scrollYProgress }}
        />
      )}
      {!isAdmin && (
        <Header
          isHome={isHome}
          language={language}
          theme={theme}
          onSelectTheme={setTheme}
          onToggleLanguage={() =>
            setLanguage((current) => (current === "zh" ? "en" : "zh"))
          }
        />
      )}
      <ScrollToTop />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <HomePage
                language={language}
                theme={theme}
                onSelectTheme={setTheme}
                onOpenQrModal={() => setQrModalOpen(true)}
              />
            }
          />
          <Route
            path="/project/:slug"
            element={<ProjectDetailPage language={language} />}
          />
          <Route
            path="/admin"
            element={<AdminPage language={language} theme={theme} />}
          />
        </Routes>
      </AnimatePresence>

      {/* Floating Interactive Dock (Rauno / Apple Style) */}
      {!isAdmin && (
        <FloatingDock
          language={language}
          theme={theme}
          onSelectTheme={setTheme}
          onToggleLanguage={() =>
            setLanguage((current) => (current === "zh" ? "en" : "zh"))
          }
          onOpenQrModal={() => setQrModalOpen(true)}
        />
      )}

      {/* Global WeChat QR Modal */}
      {qrModalOpen && (
        <div className="qr-modal-backdrop" onClick={() => setQrModalOpen(false)}>
          <motion.div
            className="qr-modal-card"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="qr-modal-close"
              onClick={() => setQrModalOpen(false)}
              aria-label="关闭"
            >
              ✕
            </button>

            <div className="qr-modal-header">
              <span className="badge-pill badge-pill--accent">
                {language === "zh" ? "微信扫一扫" : "Scan on WeChat"}
              </span>
              <h3>{language === "zh" ? "添加小A为微信好友" : "Connect with Xiao-A"}</h3>
              <p>
                {language === "zh"
                  ? "欢迎扫码添加好友，交流 AI 实用工具、独立全栈产品共建与英语自学"
                  : "Scan QR code on WeChat to add friend."}
              </p>
            </div>

            <div className="qr-modal-img-container">
              <img
                src="/wechat-qrcode.jpg"
                alt="小A 微信二维码"
                className="qr-modal-img"
              />
            </div>

            <div className="qr-modal-footer">
              <div className="qr-id-pill">
                <span>微信号：<strong>15038098595</strong></span>
                <button
                  type="button"
                  className="qr-copy-btn"
                  onClick={() => {
                    navigator.clipboard.writeText("15038098595");
                  }}
                >
                  {language === "zh" ? "一键复制" : "Copy"}
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}

export default function App() {
  return (
    <HashRouter>
      <ClickSpark sparkColor="var(--accent)" sparkCount={8} sparkRadius={24} duration={400}>
        <AppFrame />
      </ClickSpark>
    </HashRouter>
  );
}
