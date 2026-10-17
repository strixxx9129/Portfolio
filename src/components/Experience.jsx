import { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { FiBriefcase, FiMapPin } from 'react-icons/fi';
import { experience } from '../data.js';
import SectionTitle from './SectionTitle.jsx';

export default function Experience() {
  const ref = useRef(null);
  // The timeline line "draws" itself as the section scrolls past.
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 75%', 'end 60%'] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 25 });

  return (
    <section id="experience" className="section">
      <div className="container">
        <SectionTitle eyebrow="03 · Experience" title="Where I've been building" />

        <div className="timeline" ref={ref}>
          <div className="timeline-track">
            <motion.div className="timeline-fill" style={{ scaleY }} />
          </div>

          {experience.map((job) => (
            <div key={job.company} className="timeline-item">
              <motion.span
                className="timeline-dot"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: 'spring', stiffness: 300, damping: 15 }}
              >
                <FiBriefcase />
              </motion.span>

              <motion.div
                className="job-card"
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="job-head">
                  <div>
                    <h3>{job.role}</h3>
                    <p className="job-company">{job.company}</p>
                  </div>
                  <div className="job-meta">
                    <span className="period">{job.period}</span>
                    <span>
                      <FiMapPin /> {job.location}
                    </span>
                  </div>
                </div>

                <ul className="job-points">
                  {job.points.map((p, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.8 }}
                      transition={{ duration: 0.5, delay: 0.05 * i }}
                    >
                      {p}
                    </motion.li>
                  ))}
                </ul>

                <div className="tags">
                  {job.tags.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
