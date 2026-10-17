import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FiCheck, FiCopy, FiGithub, FiLinkedin, FiMail, FiPhone } from 'react-icons/fi';
import { profile } from '../data.js';
import SectionTitle from './SectionTitle.jsx';
import Reveal from './Reveal.jsx';

const channels = [
  { icon: FiMail, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
  { icon: FiPhone, label: 'Phone', value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, '')}` },
  { icon: FiLinkedin, label: 'LinkedIn', value: 'in/chetan9129', href: profile.linkedin },
  { icon: FiGithub, label: 'GitHub', value: 'chetan9129', href: profile.github },
];

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  return (
    <section id="contact" className="section section-alt">
      <div className="container">
        <SectionTitle eyebrow="06 · Contact" title="Let's build something together" />

        <Reveal className="contact-lead">
          <p>
            I&apos;m open to full-stack and backend roles, freelance Shopify work, or just a good conversation about
            async systems. My inbox is always open.
          </p>
          <div className="contact-actions">
            <motion.a className="btn btn-primary" href={`mailto:${profile.email}`} whileHover={{ y: -3 }} whileTap={{ scale: 0.97 }}>
              <FiMail /> Say hello
            </motion.a>
            <motion.button className="btn btn-ghost" onClick={copyEmail} whileHover={{ y: -3 }} whileTap={{ scale: 0.97 }}>
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={copied ? 'done' : 'copy'}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2 }}
                  className="btn-inner"
                >
                  {copied ? <><FiCheck /> Copied!</> : <><FiCopy /> Copy email</>}
                </motion.span>
              </AnimatePresence>
            </motion.button>
          </div>
        </Reveal>

        <div className="contact-grid">
          {channels.map((c, i) => (
            <motion.a
              key={c.label}
              href={c.href}
              target={c.href.startsWith('http') ? '_blank' : undefined}
              rel="noreferrer"
              className="contact-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -6 }}
            >
              <span className="contact-icon">
                <c.icon />
              </span>
              <span className="contact-label">{c.label}</span>
              <span className="contact-value">{c.value}</span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
