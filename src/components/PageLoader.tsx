import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const PageLoader: React.FC = () => {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    // Check prefers-reduced-motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setIsComplete(true);
      return;
    }

    // Refined, quick 400ms loading sweep
    const t1 = setTimeout(() => setProgress(35), 60);
    const t2 = setTimeout(() => setProgress(75), 180);
    const t3 = setTimeout(() => setProgress(100), 320);
    const t4 = setTimeout(() => setIsComplete(true), 480);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, []);

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="fixed top-0 left-0 right-0 z-[100] pointer-events-none"
          aria-hidden="true"
        >
          <motion.div
            className="h-[2.5px] bg-accent shadow-[0_0_14px_rgba(117,153,255,0.9)]"
            initial={{ width: '0%' }}
            animate={{ width: `${progress}%` }}
            transition={{ ease: [0.16, 1, 0.3, 1], duration: 0.18 }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};
