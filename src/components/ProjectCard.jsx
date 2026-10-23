import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

function ProjectVisual({ project }) {
  return (
    <div
      className="project-card__visual"
      style={{
        "--project-accent": project.accent,
        "--project-accent-soft": `${project.accent}22`,
      }}
    >
      <div className="project-card__visual-shell">
        <div className="project-card__visual-top">
          <span />
          <span />
          <span />
        </div>
        <div className="project-card__visual-grid">
          <div className="project-card__visual-panel project-card__visual-panel--primary">
            <strong>{project.cardPreview.title}</strong>
            <p>{project.cardPreview.subtitle}</p>
          </div>
          <div className="project-card__visual-panel">
            <span>{project.cardPreview.metrics[0]}</span>
            <span>{project.cardPreview.metrics[1]}</span>
          </div>
          <div className="project-card__visual-panel project-card__visual-panel--chart">
            {project.cardPreview.bars.map((value) => (
              <span key={value} style={{ height: `${value}%` }} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function ProjectCard({ project, index }) {
  const cardClassName =
    index === 0
      ? "project-card project-card--feature"
      : index === 2
        ? "project-card project-card--wide"
        : "project-card";

  return (
    <motion.article
      className={cardClassName}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -8, scale: 1.01 }}
    >
      <Link to={`/project/${project.slug}`} className="project-card__inner">
        <div className="project-card__meta">
          <span className="project-card__number">Project {project.number}</span>
          <span className="project-card__eyebrow">{project.category}</span>
        </div>

        <ProjectVisual project={project} />

        <div className="project-card__content">
          <div>
            <h3>{project.title}</h3>
            <p>{project.excerpt}</p>
          </div>

          <div className="project-card__footer">
            <div className="chip-row">
              {project.tags.map((tag) => (
                <span key={tag} className="chip">
                  {tag}
                </span>
              ))}
            </div>

            <span className="project-card__link">
              View Project
              <ArrowRight size={16} />
            </span>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
