import { motion } from 'framer-motion';
import { Container } from '../ui/Container';
import { faqs } from '../../data/faq';
import { staggerContainer, staggerChild, clipReveal, VIEWPORT_FAQ, EASE } from '../../animations/variants';
import { useScrollVelocity } from '../../hooks/useScrollVelocity';

export function FAQSection() {
  const vel = useScrollVelocity();

  return (
    <section id="faq" className="bg-white py-24 md:py-32">
      <Container>
        <div>
          <motion.h2
            className="text-[#1E293B] font-medium text-[38px] leading-[50px] tracking-normal mb-12 font-sans"
            variants={clipReveal}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT_FAQ}
            transition={{ duration: 1.2 * vel, ease: EASE }}
          >
            Common Questions
          </motion.h2>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT_FAQ}
            className="flex flex-col gap-0"
            transition={{ staggerChildren: 0.2 * vel }}
          >
            {faqs.map((faq, idx) => (
              <motion.div
                key={idx}
                variants={staggerChild}
                transition={{ duration: 0.9 * vel, ease: EASE }}
                className={`${
                  idx < faqs.length - 1 ? 'border-b border-[#f1f5f9]' : 'border-b-0'
                } pb-8 mb-8`}
              >
                <p className="font-sans font-medium text-[18px] leading-[33px] tracking-normal text-[#1E293B] mb-3">
                  {faq.question}
                </p>
                <p className="font-sans font-normal text-[18px] leading-[33px] tracking-normal text-[#64748B]">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="mt-2"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT_FAQ}
            transition={{ duration: 0.75 * vel, ease: EASE, delay: 0.45 * vel }}
          >
            <motion.button
              whileHover={{ scale: 1.02, backgroundColor: '#f0f9fc' }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.25, ease: EASE }}
              className="bg-white cursor-pointer flex items-center justify-center w-[185px] h-[67px] border-[1.5px] border-[#3DBDE3] rounded-[24px] text-[#2B4490] font-sans font-semibold text-[15px] leading-[21px] tracking-normal transition-colors duration-300"
            >
              More Questions
            </motion.button>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
