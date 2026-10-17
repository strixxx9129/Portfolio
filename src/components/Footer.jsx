import { motion } from 'framer-motion';
import { FiArrowUp } from 'react-icons/fi';
import { profile } from '../data.js';
import { scrollToId } from './scroll.js';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p>
          © {new Date().getFullYear()} {profile.name}. Built with React & Framer Motion.
        </p>
        <motion.button
          className="icon-btn"
          onClick={() => scrollToId('home')}
          whileHover={{ y: -4 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Back to top"
        >
          <FiArrowUp />
        </motion.button>
      </div>
    </footer>
  );
}
