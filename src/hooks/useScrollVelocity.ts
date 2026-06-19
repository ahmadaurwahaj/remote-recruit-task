import { useScroll, useVelocity } from 'framer-motion';
import { useState, useEffect } from 'react';

/**
 * Returns a duration multiplier driven by live scroll velocity.
 *
 *  - Idle / slow scroll  → 1.0  (full cinematic timings)
 *  - Fast scroll >800px/s → 0.35 (animations run at 35% of base duration)
 *
 * Consuming components should multiply every `duration` and `delay` value
 * by this multiplier so elements that enter the viewport during a fast scroll
 * snap into place quickly, while deliberate slow scrolls play the full reveal.
 */
export function useScrollVelocity(): number {
  const { scrollY } = useScroll();
  const velocity = useVelocity(scrollY);
  const [multiplier, setMultiplier] = useState(1.0);

  useEffect(() => {
    let resetTimer: ReturnType<typeof setTimeout>;

    const unsubscribe = velocity.onChange((v) => {
      const isFast = Math.abs(v) > 800;
      setMultiplier(isFast ? 0.35 : 1.0);

      // Once fast scrolling stops, give a short grace period then revert to
      // slow timing so the next element that scrolls into view gets full beauty.
      clearTimeout(resetTimer);
      if (isFast) {
        resetTimer = setTimeout(() => setMultiplier(1.0), 200);
      }
    });

    return () => {
      unsubscribe();
      clearTimeout(resetTimer);
    };
  }, [velocity]);

  return multiplier;
}
