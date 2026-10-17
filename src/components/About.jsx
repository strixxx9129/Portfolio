import { useEffect, useRef } from 'react';
import { animate, motion, useInView } from 'framer-motion';
import { profile, stats } from '../data.js';
import Reveal from './Reveal.jsx';
import SectionTitle from './SectionTitle.jsx';

function Counter({ value, decimals = 0, suffix = '' }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration: 1.8,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => {
        if (ref.current) ref.current.textContent = v.toFixed(decimals) + suffix;
      },
    });
    return () => controls.stop();
  }, [inView, value, decimals, suffix]);

  return <span ref={ref}>{(0).toFixed(decimals) + suffix}</span>;
}

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <SectionTitle eyebrow="01 · About" title="A backend mind with a full-stack toolkit" />
        <div className="about-grid">
          <Reveal direction="right" className="about-text">
            <p>{profile.summary}</p>
            <p>
              I care about systems that stay correct under pressure — idempotent jobs, indexed queries, clear API
              contracts — and about shipping on schedule alongside design and mobile teams. Outside of work, I&apos;m a
              national hackathon winner who still loves building things in 36-hour sprints.
            </p>
          </Reveal>

          <div className="stats-grid">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                className="stat-card"
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -6 }}
              >
                <strong>
                  <Counter value={s.value} decimals={s.decimals} suffix={s.suffix} />
                </strong>
                <span>{s.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
