import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 500);
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          onClick={scrollToTop}
          className="fixed bottom-24 right-8 z-50 w-12 h-12 bg-solar-primary text-white rounded-full shadow-2xl flex items-center justify-center hover:bg-rose-600 transition-colors group"
          aria-label="Back to top"
        >
          <i className="fas fa-arrow-up transition-transform group-hover:-translate-y-1"></i>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default BackToTop;
