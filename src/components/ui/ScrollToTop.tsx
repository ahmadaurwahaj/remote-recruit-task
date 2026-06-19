import { useState, useEffect } from 'react';
import { FiChevronUp } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

const SCROLL_THRESHOLD = 300;

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [isOverFooter, setIsOverFooter] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > SCROLL_THRESHOLD);
    };

    window.addEventListener('scroll', handleScroll);

    const footer = document.getElementById('footer-content');
    let observer: IntersectionObserver | null = null;

    if (footer) {
      observer = new IntersectionObserver(
        ([entry]) => {
          setIsOverFooter(entry.isIntersecting);
        },
        {
          rootMargin: '0px',
          threshold: 0.1,
        }
      );
      observer.observe(footer);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (observer && footer) {
        observer.unobserve(footer);
      }
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <style>{`
        .scroll-to-top-footer {
          border: 2px solid transparent;
          background-image: linear-gradient(white, white), linear-gradient(132.56deg, #52B4DA 5.63%, #1E3E85 106.18%);
          background-origin: border-box;
          background-clip: padding-box, border-box;
          color: #2B4490;
          transition: all 0.35s cubic-bezier(0.22, 1, 0.36, 1);
        }
      `}</style>
      <AnimatePresence>
        {isVisible && (
          <motion.button
            onClick={scrollToTop}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            whileHover="hover"
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className={`fixed bottom-8 right-8 z-50 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 ${
              isOverFooter
                ? 'scroll-to-top-footer'
                : 'bg-gradient-to-br from-rr-navy to-rr-teal text-white'
            }`}
            aria-label="Scroll to top"
          >
            <motion.div
              variants={{
                hover: { y: -3 },
              }}
              transition={{
                type: 'spring',
                stiffness: 260,
                damping: 20,
              }}
            >
              <FiChevronUp className="w-6 h-6" />
            </motion.div>
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
