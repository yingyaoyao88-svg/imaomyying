import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useEffect } from "react";

export function Lightbox({ items, activeIndex, onClose, onNavigate }) {
  useEffect(() => {
    if (activeIndex === null) {
      document.body.style.overflow = "";
      return undefined;
    }

    document.body.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
      if (event.key === "ArrowRight") {
        onNavigate(1);
      }
      if (event.key === "ArrowLeft") {
        onNavigate(-1);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeIndex, onClose, onNavigate]);

  const activeItem = activeIndex !== null ? items[activeIndex] : null;

  return (
    <AnimatePresence>
      {activeItem ? (
        <motion.div
          className="lightbox"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <button
            type="button"
            className="lightbox__close"
            onClick={onClose}
            aria-label="Close lightbox"
          >
            <X size={20} />
          </button>

          <button
            type="button"
            className="lightbox__nav lightbox__nav--left"
            onClick={(event) => {
              event.stopPropagation();
              onNavigate(-1);
            }}
            aria-label="Previous image"
          >
            <ChevronLeft size={20} />
          </button>

          <motion.div
            className="lightbox__content"
            initial={{ opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            onClick={(event) => event.stopPropagation()}
          >
            <img src={activeItem.src} alt={activeItem.alt} />
            <div className="lightbox__caption">
              <h4>{activeItem.alt}</h4>
              <p>{activeItem.caption}</p>
            </div>
          </motion.div>

          <button
            type="button"
            className="lightbox__nav lightbox__nav--right"
            onClick={(event) => {
              event.stopPropagation();
              onNavigate(1);
            }}
            aria-label="Next image"
          >
            <ChevronRight size={20} />
          </button>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
