import { motion } from 'framer-motion';
import { PricingSection } from '../sections/PricingSection';
import { socialLinks } from '../../data/social';
import footerLogoImg from '../../assets/images/logo.png';
import rrIconLogoImg from '../../assets/images/logo-icon.png';
import footerBgImg from '../../assets/images/footer-background.png';
import socialIconBgImg from '../../assets/images/social-icon-bg.png';
import { staggerContainer, staggerChild, VIEWPORT_STRICT, EASE } from '../../animations/variants';
import { useScrollVelocity } from '../../hooks/useScrollVelocity';

export function Footer() {
  const vel = useScrollVelocity();

  return (
    <footer className="w-full">
      {/* Pricing section lives in its own file but is rendered here inside the footer */}
      <PricingSection />

      <div
        id="footer-content"
        className="relative overflow-hidden text-white w-full pt-28 lg:pt-0 lg:h-[580px] h-auto bg-cover lg:bg-[length:100%_100%]"
        style={{
          backgroundImage: `url("${footerBgImg}")`,
          backgroundPosition: 'top center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Desktop footer bar */}
        <div className="hidden lg:block w-full max-w-[1440px] mx-auto h-full relative pointer-events-none">
          <motion.div
            className="absolute left-0 right-0 flex justify-between items-center pointer-events-auto px-8 xl:pl-[200px] xl:pr-[218px] top-[319px]"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT_STRICT}
            transition={{ staggerChildren: 0.2 * vel }}
          >
            <motion.a
              href="#"
              aria-label="RemoteRecruit home"
              className="w-[184.32px] h-[74px]"
              variants={staggerChild}
              transition={{ duration: 0.9 * vel, ease: EASE }}
            >
              <img
                src={footerLogoImg}
                alt="RemoteRecruit"
                className="w-full h-full object-contain"
              />
            </motion.a>

            <motion.div
              className="flex items-center justify-between w-[242px] h-8"
              variants={staggerChild}
              transition={{ duration: 0.9 * vel, ease: EASE }}
            >
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href="#"
                  aria-label={link.label}
                  className="hover:-translate-y-[2px] transition-transform duration-200 w-8 h-8 rounded-[40px] bg-cover bg-center bg-no-repeat flex items-center justify-center text-white no-underline"
                  style={{ backgroundImage: `url("${socialIconBgImg}")` }}
                >
                  {link.icon}
                </a>
              ))}
            </motion.div>
          </motion.div>

          <motion.a
            href="#"
            className="absolute pointer-events-auto left-1/2 -translate-x-1/2 top-[517px] w-10 h-8 opacity-100"
            variants={staggerChild}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT_STRICT}
            transition={{ duration: 0.9 * vel, ease: EASE }}
          >
            <img
              src={rrIconLogoImg}
              alt="RemoteRecruit"
              className="w-full h-full object-contain"
            />
          </motion.a>
        </div>

        <div className="hidden lg:block absolute left-0 right-0 top-[495px] h-[1px] bg-white/12" />

        {/* Mobile footer bar */}
        <motion.div
          className="block lg:hidden flex flex-col items-center gap-8 py-10 relative z-10 px-4"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_STRICT}
          transition={{ staggerChildren: 0.2 * vel }}
        >
          <motion.a
            href="#"
            aria-label="RemoteRecruit home"
            variants={staggerChild}
            transition={{ duration: 0.9 * vel, ease: EASE }}
          >
            <img
              src={footerLogoImg}
              alt="RemoteRecruit"
              className="w-[148px] h-[60px] object-contain"
            />
          </motion.a>
          <motion.div
            className="flex flex-wrap justify-center items-center gap-4"
            variants={staggerChild}
            transition={{ duration: 0.9 * vel, ease: EASE }}
          >
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href="#"
                aria-label={link.label}
                className="w-8 h-8 rounded-[40px] bg-cover bg-center bg-no-repeat flex items-center justify-center text-white no-underline transition-all duration-200 hover:-translate-y-[2px]"
                style={{ backgroundImage: `url("${socialIconBgImg}")` }}
              >
                {link.icon}
              </a>
            ))}
          </motion.div>
          <motion.div
            className="w-full h-[1px] bg-white/12 my-2"
            variants={staggerChild}
            transition={{ duration: 0.9 * vel, ease: EASE }}
          />
          <motion.img
            src={rrIconLogoImg}
            alt="RemoteRecruit"
            className="w-10 h-8 object-contain opacity-70"
            variants={staggerChild}
            transition={{ duration: 0.9 * vel, ease: EASE }}
          />
        </motion.div>
      </div>
    </footer>
  );
}
