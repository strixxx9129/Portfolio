import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { FiAward, FiCalendar } from 'react-icons/fi';
import { projects } from '../data.js';
import SectionTitle from './SectionTitle.jsx';

// Card that tilts gently toward the cursor.
function TiltCard({ children, index }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [6, -6]), { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-6, 6]), { stiffness: 200, damping: 20 });

  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - r.left) / r.width - 0.5);
    y.set((e.clientY - r.top) / r.height - 0.5);
  };
  const onLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.article
      className="project-card"
      style={{ rotateX, rotateY, transformPerspective: 900 }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section section-alt">
      <div className="container">
        <SectionTitle eyebrow="04 · Projects" title="Things I've built" />
        <div className="projects-grid">
          {projects.map((p, i) => (
            <TiltCard key={p.title} index={i}>
              <div className="project-top">
                <span className="project-index">0{i + 1}</span>
                <span className="project-date">
                  <FiCalendar /> {p.date}
                </span>
              </div>
              <h3>{p.title}</h3>
              <p className="project-subtitle">{p.subtitle}</p>
              {p.badge && (
                <motion.span
                  className="badge"
                  initial={{ scale: 0.6, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: 'spring', stiffness: 260, damping: 14, delay: 0.4 }}
                >
                  <FiAward /> {p.badge}
                </motion.span>
              )}
              <p className="project-desc">{p.description}</p>
              <div className="tags">
                {p.tags.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}
