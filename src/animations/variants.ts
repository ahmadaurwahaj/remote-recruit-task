import type { Variants } from 'framer-motion';

// Smooth cubic-bezier: gentle ease-out — no abrupt snap, silky deceleration
export const EASE = [0.22, 1, 0.36, 1] as const;

// Slightly softer ease for larger element movements
export const EASE_SOFT = [0.25, 0.46, 0.45, 0.94] as const;

// Cinematic ease for image reveals — very slow ease-out with dramatic deceleration
export const EASE_IMAGE = [0.16, 1, 0.3, 1] as const;

export const VIEWPORT = { once: true, amount: 0.2 } as const;
export const VIEWPORT_STRICT = { once: true, amount: 0.3 } as const;
export const VIEWPORT_FAQ = { once: true, amount: 0.15 } as const;
export const VIEWPORT_FEATURE = { once: true, amount: 0.4 } as const;
export const VIEWPORT_SIGNUP = { once: true, amount: 0.4 } as const;

// Fade + slide up — used in Hero, FAQ heading, footer bar
// Reduced y travel from 24→14 for a subtler, smoother lift
export const fadeSlideUp: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: EASE },
  },
};

// Fade + slide from left — text when image is on the right
export const fadeSlideLeft: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1.1, ease: EASE },
  },
};

// Fade + slide from right — text when image is on the left / CTA text
export const fadeSlideRight: Variants = {
  hidden: { opacity: 0, x: 20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1.1, ease: EASE },
  },
};

// Image reveals from opposite side
export const imageRevealRight: Variants = {
  hidden: { opacity: 0, x: 28 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.85, ease: EASE, delay: 0.15 },
  },
};

export const imageRevealLeft: Variants = {
  hidden: { opacity: 0, x: -28 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.85, ease: EASE, delay: 0.15 },
  },
};

// Stagger container — wraps staggered children
// Increased stagger from 0.14→0.16 gives each child more breathing room
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.20 },
  },
};

// Stagger child — generic fade + slide up + scale child
// Removed scale to avoid compounding transforms; reduced y from 18→10 for subtlety
export const staggerChild: Variants = {
  hidden: { opacity: 0, y: 8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: EASE },
  },
};

// Clip-path reveal for section headings
// Reduced y offset from 16→8 so the heading doesn't jump noticeably
export const clipReveal: Variants = {
  hidden: { opacity: 0, clipPath: 'inset(0% 0% 100% 0%)', y: 6 },
  visible: {
    opacity: 1,
    clipPath: 'inset(0% 0% 0% 0%)',
    y: 0,
    transition: { duration: 1.2, ease: EASE },
  },
};

// Spring-physics entrance for pricing cards
// Increased damping 20→28 and stiffness 90→80 for a settled, non-bouncy spring
export const springPop: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.96 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: 'spring',
      damping: 32,
      stiffness: 80,
      mass: 1.0,
      delay,
    },
  }),
};

// Blur + opacity fade for images — cinematic reveal with scale, blur, and gentle lift
export const blurFadeIn: Variants = {
  hidden: { opacity: 0, filter: 'blur(12px)', scale: 0.96, y: 16 },
  visible: {
    opacity: 1,
    filter: 'blur(0px)',
    scale: 1,
    y: 0,
    transition: { duration: 1.4, ease: EASE_IMAGE },
  },
};

// FAQ / SignUpCTA items
export const itemVariant: Variants = {
  hidden: { opacity: 0, y: 8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: EASE },
  },
};
