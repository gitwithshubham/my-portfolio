
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { X, ExternalLink, CodeXml } from "lucide-react";

export default function ProjectDialog({ project: p, onClose }) {
  const closeRef = useRef(null);

  useEffect(() => {
    const trigger = document.activeElement;

    closeRef.current?.focus();

    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      trigger?.focus();
    };
  }, [onClose]);

  return (
    <motion.div
      className="backdrop"
      onClick={onClose}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="dialog"
        role="dialog"
        aria-modal="true"
        aria-label={p.title}
        onClick={(e) => e.stopPropagation()}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 40 }}
        transition={{
          duration: 0.4,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <button
          ref={closeRef}
          className="icon-btn close"
          onClick={onClose}
          aria-label="Close"
        >
          <X size={22} />
        </button>

        {p.coverImage && (
          <img src={p.coverImage} alt={p.title} />
        )}

        <span className="tag">
          {p.category}
          {p.year && ` · ${p.year}`}
        </span>

        <h3>{p.title}</h3>
        <p>{p.description}</p>

        {p.role && (
          <p className="muted">
            <strong>Role:</strong> {p.role}
          </p>
        )}

        {p.tools?.length > 0 && (
          <p className="chips">
            {p.tools.map((t) => (
              <span key={t} className="chip on">
                {t}
              </span>
            ))}
          </p>
        )}

        <div className="cta-row">
          {p.liveUrl && (
            <a
              className="btn"
              href={p.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink size={16} />
              Live demo
            </a>
          )}

          {p.sourceUrl && (
            <a
              className="btn"
              href={p.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <CodeXml size={16} />
              Source code
            </a>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}
