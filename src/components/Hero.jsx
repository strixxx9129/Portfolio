import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FiArrowDown, FiGithub, FiLinkedin, FiMail, FiMapPin } from 'react-icons/fi';
import { profile } from '../data.js';
import { scrollToId } from './scroll.js';

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
};
const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};

const codeLines = [
  ['@celery.task', '(bind=True, max_retries=5)'],
  ['def ', 'sync_order', '(self, payload):'],
  ['    ', 'if ', 'already_processed(payload.id):'],
  ['        ', 'return ', '# idempotent ✓'],
  ['    ', 'upsert_order(payload)'],
  ['    ', 'notify_mobile(payload.customer)'],
];

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '35%']);
  const cardY = useTransform(scrollYProgress, [0, 1], ['0%', '-20%']);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const blobY = useTransform(scrollYProgress, [0, 1], ['0%', '60%']);

  const firstName = profile.name.split(' ')[0];

  return (
    <section id="home" className="hero" ref={ref}>
      <motion.div className="blob blob-1" style={{ y: blobY }} />
      <motion.div className="blob blob-2" style={{ y: blobY }} />

      <div className="container hero-grid">
        <motion.div style={{ y: textY, opacity: fade }}>
          <motion.div variants={container} initial="hidden" animate="show">
            <motion.span variants={item} className="status-pill">
              <span className="dot" /> Open to new opportunities
            </motion.span>

            <motion.h1 variants={item} className="hero-title">
              Hi, I&apos;m{' '}
              <span className="accent-text">
                {firstName.split('').map((ch, i) => (
                  <motion.span
                    key={i}
                    style={{ display: 'inline-block' }}
                    initial={{ opacity: 0, y: 40, rotate: 8 }}
                    animate={{ opacity: 1, y: 0, rotate: 0 }}
                    transition={{ delay: 0.5 + i * 0.06, type: 'spring', stiffness: 220, damping: 16 }}
                  >
                    {ch}
                  </motion.span>
                ))}
              </span>
              .
            </motion.h1>

            <motion.h2 variants={item} className="hero-role">
              {profile.role}
            </motion.h2>
            <motion.p variants={item} className="hero-tagline">
              {profile.tagline}
            </motion.p>

            <motion.div variants={item} className="hero-meta">
              <FiMapPin /> {profile.location}
            </motion.div>

            <motion.div variants={item} className="hero-cta">
              <motion.button
                className="btn btn-primary"
                onClick={() => scrollToId('projects')}
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.97 }}
              >
                View my work
              </motion.button>
              <motion.button
                className="btn btn-ghost"
                onClick={() => scrollToId('contact')}
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.97 }}
              >
                Get in touch
              </motion.button>
            </motion.div>

            <motion.div variants={item} className="socials">
              {[
                { href: profile.github, icon: <FiGithub />, label: 'GitHub' },
                { href: profile.linkedin, icon: <FiLinkedin />, label: 'LinkedIn' },
                { href: `mailto:${profile.email}`, icon: <FiMail />, label: 'Email' },
              ].map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  whileHover={{ y: -4, scale: 1.08 }}
                  whileTap={{ scale: 0.92 }}
                >
                  {s.icon}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-visual"
          style={{ y: cardY }}
          initial={{ opacity: 0, scale: 0.92, rotate: -2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            className="code-card"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          >
            <div className="code-head">
              <span /> <span /> <span />
              <em>tasks.py</em>
            </div>
            <pre>
              {codeLines.map((parts, i) => (
                <motion.div
                  key={i}
                  className="code-line"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1 + i * 0.15 }}
                >
                  <span className="ln">{i + 1}</span>
                  {parts.map((p, j) => (
                    <span key={j} className={`tok tok-${j}`}>
                      {p}
                    </span>
                  ))}
                </motion.div>
              ))}
              <motion.span
                className="caret"
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              />
            </pre>
          </motion.div>

          <motion.div
            className="float-chip chip-a"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          >
            🏆 HackRx 3.0 Winner
          </motion.div>
          <motion.div
            className="float-chip chip-b"
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}
          >
            ⚡ FastAPI · Celery · Redis
          </motion.div>
        </motion.div>
      </div>

      <motion.button
        className="scroll-hint"
        onClick={() => scrollToId('about')}
        style={{ opacity: fade }}
        aria-label="Scroll to about section"
      >
        <motion.span animate={{ y: [0, 8, 0] }} transition={{ duration: 1.6, repeat: Infinity }}>
          <FiArrowDown />
        </motion.span>
      </motion.button>
    </section>
  );
}
