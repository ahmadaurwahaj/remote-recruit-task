import { motion } from 'framer-motion';
import { Container } from '../ui/Container';
import { PricingCard } from '../ui/PricingCard';
import { basicFeatures, premiumFeatures } from '../../data/pricing';
import { clipReveal, VIEWPORT_STRICT, EASE } from '../../animations/variants';
import { useScrollVelocity } from '../../hooks/useScrollVelocity';

export function PricingSection() {
  const vel = useScrollVelocity();

  return (
    <section id="pricing" className="relative py-24 md:py-32 bg-transparent">
      <Container>
        <motion.h2
          className="text-[#1E293B] font-semibold text-[38px] leading-[50px] tracking-normal text-center align-middle mb-14 font-sans"
          variants={clipReveal}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_STRICT}
          transition={{ duration: 1.2 * vel, ease: EASE }}
        >
          Help Is One Click Away
        </motion.h2>

        {/* Desktop layout — absolute positioned cards inside a fixed-height container */}
        <div className="w-full max-w-[1440px] mx-auto relative z-10 pointer-events-none">
          <div className="hidden xl:flex absolute pointer-events-auto top-[100%] left-[10%] z-30 gap-10">
            <PricingCard variant="free" features={basicFeatures} delay={0} layout="desktop" />
            <PricingCard variant="premium" features={premiumFeatures} delay={0.15} layout="desktop" />
          </div>

          {/* Mobile layout — flex column cards */}
          <div className="block xl:hidden w-full max-w-lg mx-auto flex flex-col gap-8 px-4 pointer-events-auto">
            <PricingCard variant="free" features={basicFeatures} delay={0} layout="mobile" />
            <PricingCard variant="premium" features={premiumFeatures} delay={0.15} layout="mobile" />
          </div>
        </div>
      </Container>
    </section>
  );
}
