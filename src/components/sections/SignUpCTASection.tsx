import { motion } from 'framer-motion';
import type { Variants, TargetAndTransition } from 'framer-motion';
import { Container } from '../ui/Container';
import ctaBackgroundImg from '../../assets/images/cta-background.png';
import ctaGetStartedBtnImg from '../../assets/images/cta-get-started-btn.png';
import { fadeSlideRight, staggerContainer, staggerChild, VIEWPORT_SIGNUP, EASE, EASE_IMAGE } from '../../animations/variants';
import { useScrollVelocity } from '../../hooks/useScrollVelocity';

export function SignUpCTASection() {
  const vel = useScrollVelocity();

  const ctaTextVariants: Variants = {
    hidden: fadeSlideRight.hidden,
    visible: {
      ...(fadeSlideRight.visible as TargetAndTransition),
      transition: {
        duration: 1.1 * vel,
        ease: EASE,
        delay: 0.15 * vel,
      },
    },
  };

  return (
    <section
      id="signup"
      className="relative w-full xl:h-[610px] h-auto overflow-hidden bg-white flex flex-col xl:block"
    >
      <motion.img
        src={ctaBackgroundImg}
        alt=""
        className="w-full h-[250px] md:h-[350px] xl:absolute xl:inset-0 xl:h-full object-cover select-none pointer-events-none z-0"
        initial={{ scale: 1.04, opacity: 0.85 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={VIEWPORT_SIGNUP}
        transition={{ duration: 1.4 * vel, ease: EASE_IMAGE, delay: 0.05 * vel }}
      />

      <div className="relative xl:absolute xl:inset-0 xl:h-full z-10 flex flex-col justify-center py-10 xl:py-0">
        <Container className="relative h-full z-10 flex items-center justify-center">
          <div className="hidden xl:block w-full max-w-[1440px] mx-auto h-full relative z-10 pointer-events-none">
            <div className="hidden xl:flex justify-end items-center h-full w-full pointer-events-auto pr-12 xl:pr-[288px]">
              <motion.div
                className="relative left-[12%] w-[390px] h-[339px] opacity-100"
                variants={ctaTextVariants}
                initial="hidden"
                whileInView="visible"
                viewport={VIEWPORT_SIGNUP}
              >
                <motion.div
                  variants={staggerContainer}
                  className="flex flex-col text-left"
                  transition={{ staggerChildren: 0.2 * vel }}
                >
                  <motion.p
                    className="font-sans font-semibold text-[15px] leading-[28px] tracking-[1px] text-[#2B4490] mb-2"
                    variants={staggerChild}
                    transition={{ duration: 0.9 * vel, ease: EASE }}
                  >
                    Are you ready?
                  </motion.p>
                  <motion.h2
                    className="font-sans font-semibold text-[42px] leading-[54px] tracking-normal text-[#1E293B] mb-3"
                    variants={staggerChild}
                    transition={{ duration: 0.9 * vel, ease: EASE }}
                  >
                    Help is only a few clicks away!
                  </motion.h2>
                  <motion.p
                    className="font-sans font-normal text-[17px] leading-[31px] tracking-normal text-[#64748B]"
                    variants={staggerChild}
                    transition={{ duration: 0.9 * vel, ease: EASE }}
                  >
                    Click Below to get set up super quickly and find help now!
                  </motion.p>
                </motion.div>

                <motion.button
                  className="absolute cursor-pointer top-[278px] left-0 w-[180px] h-[61px] border-none bg-transparent p-0 rounded-[24px]"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  variants={staggerChild}
                  transition={{ duration: 0.9 * vel, ease: EASE }}
                >
                  <img
                    src={ctaGetStartedBtnImg}
                    alt="Get Started"
                    className="w-[180px] h-[61px] rounded-[24px]"
                  />
                </motion.button>
              </motion.div>
            </div>
          </div>

          {/* Mobile layout */}
          <motion.div
            className="block xl:hidden w-full max-w-lg mx-auto p-8 text-center pointer-events-auto"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT_SIGNUP}
            transition={{ duration: 0.9 * vel, ease: EASE, delay: 0.15 * vel }}
          >
            <p className="font-sans font-semibold text-[15px] leading-[28px] tracking-[1px] text-[#2B4490] mb-2">
              Are you ready?
            </p>
            <h2 className="font-sans font-semibold text-[30px] leading-[40px] tracking-normal text-[#1E293B] mb-3">
              Help is only a few clicks away!
            </h2>
            <p className="font-sans font-normal text-[15px] leading-[26px] tracking-normal text-[#64748B] mb-6">
              Click Below to get set up super quickly and find help now!
            </p>
            <motion.button
              className="mx-auto cursor-pointer rounded-[24px] shadow-[0px_4px_20px_rgba(43,68,144,0.1)] block bg-transparent border-none p-0"
              whileHover={{ scale: 1.04, boxShadow: '0px 10px 25px rgba(43,68,144,0.2)' }}
              whileTap={{ scale: 0.96 }}
            >
              <img
                src={ctaGetStartedBtnImg}
                alt="Get Started"
                className="w-[180px] h-[61px] rounded-[24px]"
              />
            </motion.button>
          </motion.div>
        </Container>
      </div>
    </section>
  );
}
