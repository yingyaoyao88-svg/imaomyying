import { motion } from "framer-motion";

export function BrandShowcase() {
  return (
    <motion.div
      className="brand-showcase"
      initial={{ opacity: 0, scale: 0.96, y: 30 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
    >
      <div className="brand-showcase__glow" />
      <div className="brand-showcase__badge brand-showcase__badge--top">
        AI Systems
      </div>
      <div className="brand-showcase__badge brand-showcase__badge--bottom">
        MVP Delivery
      </div>

      <motion.div
        className="brand-mark"
        animate={{ rotate: [-3, 2, -3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="brand-mark__line brand-mark__line--left" />
        <span className="brand-mark__line brand-mark__line--right" />
        <span className="brand-mark__bar" />
      </motion.div>

      <div className="portrait-card">
        <div className="portrait-card__halo" />
        <div className="portrait-card__frame">
          <div className="portrait-card__screen">
            <div className="portrait-card__signal" />
            <div className="portrait-card__pulse" />
            <div className="portrait-card__silhouette">
              <div className="portrait-card__head" />
              <div className="portrait-card__body" />
            </div>
          </div>
        </div>
        <div className="portrait-card__copy">
          <span className="portrait-card__eyebrow">Personal Brand</span>
          <h3>Building clear AI products from messy real-world needs.</h3>
        </div>
      </div>
    </motion.div>
  );
}
