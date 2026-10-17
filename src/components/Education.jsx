import { motion } from 'framer-motion';
import { FiAward, FiBookOpen } from 'react-icons/fi';
import { achievements, education } from '../data.js';
import SectionTitle from './SectionTitle.jsx';
import Reveal from './Reveal.jsx';

export default function Education() {
  return (
    <section id="education" className="section">
      <div className="container">
        <SectionTitle eyebrow="05 · Education & Wins" title="Foundations and milestones" />
        <div className="edu-grid">
          <Reveal direction="right" className="edu-card">
            <span className="edu-icon">
              <FiBookOpen />
            </span>
            <div>
              <h3>{education.degree}</h3>
              <p className="edu-school">{education.school}</p>
              <p className="edu-period">{education.period}</p>
              <motion.span
                className="score"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}
              >
                {education.score}
              </motion.span>
            </div>
          </Reveal>

          {achievements.map((a) => (
            <Reveal key={a.title} direction="left" delay={0.15} className="edu-card achievement">
              <motion.span
                className="edu-icon gold"
                whileInView={{ rotate: [0, -12, 12, -6, 0] }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                <FiAward />
              </motion.span>
              <div>
                <h3>{a.title}</h3>
                <p>{a.detail}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
