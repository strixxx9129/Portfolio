import { motion } from 'framer-motion';
import { FiClock, FiCode, FiDatabase, FiLayers, FiShoppingBag, FiTool } from 'react-icons/fi';
import { skills } from '../data.js';
import SectionTitle from './SectionTitle.jsx';

const icons = [FiCode, FiLayers, FiClock, FiShoppingBag, FiDatabase, FiTool];

const list = {
  hidden: {},
  show: { transition: { staggerChildren: 0.04, delayChildren: 0.2 } },
};
const chip = {
  hidden: { opacity: 0, y: 10, scale: 0.9 },
  show: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring', stiffness: 260, damping: 20 } },
};

export default function Skills() {
  return (
    <section id="skills" className="section section-alt">
      <div className="container">
        <SectionTitle eyebrow="02 · Skills" title="Tools I reach for" />
        <div className="skills-grid">
          {skills.map((group, i) => {
            const Icon = icons[i % icons.length];
            return (
              <motion.div
                key={group.title}
                className="skill-card"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: (i % 3) * 0.1, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -6 }}
              >
                <div className="skill-head">
                  <span className="skill-icon">
                    <Icon />
                  </span>
                  <h3>{group.title}</h3>
                </div>
                <motion.ul
                  className="chips"
                  variants={list}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.3 }}
                >
                  {group.items.map((s) => (
                    <motion.li key={s} variants={chip} whileHover={{ scale: 1.06 }}>
                      {s}
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
