import { motion } from 'framer-motion';
import heroBackgroundImg from '../../assets/images/hero-background.png';
import { clipReveal } from '../../animations/variants';

export function HeroSection() {
  return (
    <section className="relative w-full h-screen overflow-hidden text-center text-white">
      <img
        src={heroBackgroundImg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none z-0"
      />

      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="w-full max-w-[1040px] md:h-[216px] h-auto flex flex-col justify-between items-center px-4 md:px-0">
          <motion.h1
            className="text-white text-center font-sans text-[30px] sm:text-[38px] md:text-[50px] leading-[40px] sm:leading-[50px] md:leading-[65px] tracking-normal font-bold"
            variants={clipReveal}
            initial="hidden"
            animate="visible"
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          >
            RemoteRecruit's Difference
          </motion.h1>

          <motion.p
            className="text-white/90 text-center font-sans max-w-[960px] mt-6 md:mt-0 text-[20px] leading-[32px] tracking-[0px] font-medium"
            initial={{ opacity: 0, filter: 'blur(8px)', y: 10 }}
            animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
            transition={{ duration: 1.3, ease: [0.16, 1, 0.3, 1], delay: 0.55 }}
          >
            RemoteRecruit is connecting the world with an easy-to-use platform that lets
            full-time, part-time, and freelance workers showcase their talents to
            businesses that need them. With no paywalls, no fees, and no barriers, there's
            nothing but you, your talents, and the next step in your career.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
