import { motion } from 'framer-motion';
import type { Variants, TargetAndTransition } from 'framer-motion';
import { Container } from '../ui/Container';
import { SectionBadge } from '../ui/SectionBadge';
import {
  fadeSlideLeft,
  fadeSlideRight,
  blurFadeIn,
  staggerChild,
  VIEWPORT_FEATURE,
  EASE,
  EASE_IMAGE,
} from '../../animations/variants';
import { useScrollVelocity } from '../../hooks/useScrollVelocity';

interface FeatureSectionProps {
  id: string;
  badgeText: string;
  heading: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  imagePosition: 'left' | 'right';
  isFirst?: boolean;
}

export function FeatureSection({
  id,
  badgeText,
  heading,
  description,
  imageSrc,
  imageAlt,
  imagePosition,
  isFirst,
}: FeatureSectionProps) {
  const isImageRight = imagePosition === 'right';
  const vel = useScrollVelocity();

  const textVariants = isImageRight ? fadeSlideLeft : fadeSlideRight;

  // Scale delays with velocity — no waiting when the user is scrolling fast
  const delay = (isFirst ? 0.35 : 0.15) * vel;
  const imageDelay = (isFirst ? 0.55 : 0.3) * vel;

  const containerVariants: Variants = {
    hidden: textVariants.hidden,
    visible: {
      ...(textVariants.visible as TargetAndTransition),
      transition: {
        duration: 1.1 * vel,
        ease: EASE,
        delay,
        delayChildren: delay,
        staggerChildren: 0.18 * vel,
      },
    },
  };

  const imageVariants: Variants = {
    hidden: blurFadeIn.hidden,
    visible: {
      ...(blurFadeIn.visible as TargetAndTransition),
      transition: {
        duration: 1.4 * vel,
        ease: EASE_IMAGE,
        delay: imageDelay,
      },
    },
  };

  const textContent = (
    <motion.div
      className="flex flex-col space-y-6 w-full lg:max-w-xl"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT_FEATURE}
    >
      <motion.div
        variants={staggerChild}
        transition={{ duration: 0.9 * vel, ease: EASE }}
      >
        <SectionBadge text={badgeText} />
      </motion.div>

      <motion.h2
        className="text-[#1E293B] font-medium text-[38px] leading-[50px] tracking-normal font-sans mt-6"
        variants={staggerChild}
        transition={{ duration: 0.9 * vel, ease: EASE }}
      >
        {heading}
      </motion.h2>

      <motion.p
        className="text-[#64748B] font-normal text-[18px] leading-[33px] tracking-normal font-sans mt-4"
        variants={staggerChild}
        transition={{ duration: 0.9 * vel, ease: EASE }}
      >
        {description}
      </motion.p>
    </motion.div>
  );

  const imageContent = (
    <motion.div
      className={`relative flex justify-center ${
        isImageRight ? 'lg:justify-end' : 'lg:justify-start'
      } w-full`}
      variants={imageVariants}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT_FEATURE}
    >
      {/* Inner hover wrapper — keeps the entrance and hover animations independent */}
      <motion.div
        className="w-full max-w-[560px] rounded-[20px] overflow-hidden"
        whileHover={{
          scale: 1.035,
          y: -10,
        }}
        transition={{ type: 'spring', stiffness: 160, damping: 22, mass: 0.9 }}
      >
        <img
          src={imageSrc}
          alt={imageAlt}
          className="w-full h-auto rounded-[20px] block"
          loading="lazy"
        />
      </motion.div>
    </motion.div>
  );

  return (
    <section id={id} className="bg-white py-12 md:py-16 overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {isImageRight ? (
            <>
              {textContent}
              {imageContent}
            </>
          ) : (
            <>
              {imageContent}
              {textContent}
            </>
          )}
        </div>
      </Container>
    </section>
  );
}
