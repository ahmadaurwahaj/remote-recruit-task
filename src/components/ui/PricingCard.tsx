import { motion } from 'framer-motion';
import tickIcon from '../../assets/images/icon-check.svg';
import crossIcon from '../../assets/images/icon-cross.svg';
import premiumTagImg from '../../assets/images/pricing-premium-tag.png';
import type { PricingFeature } from '../../data/pricing';
import { springPop, VIEWPORT_STRICT } from '../../animations/variants';

interface PricingCardProps {
  variant: 'free' | 'premium';
  features: PricingFeature[];
  delay?: number;
  layout: 'desktop' | 'mobile';
}

interface FeatureRowProps {
  item: PricingFeature;
  isDesktop: boolean;
}

function FeatureRow({ item, isDesktop }: FeatureRowProps) {
  const textClassName = isDesktop
    ? `font-sans font-medium text-[15px] leading-[24px] tracking-normal align-middle ${
        item.included ? 'text-[#1E293B]' : 'text-[#94A3B8]'
      }`
    : `text-[13px] font-medium font-sans ${
        item.included ? 'text-[#1E293B]' : 'text-[#94A3B8]'
      }`;

  return (
    <div className={isDesktop ? 'flex items-start gap-3' : 'flex items-center gap-2'}>
      <img
        src={item.included ? tickIcon : crossIcon}
        alt=""
        className={isDesktop ? 'w-5 h-5 opacity-100 rotate-0 mt-[2px] flex-shrink-0' : 'w-5 h-5 flex-shrink-0 mt-[2px]'}
      />
      <span className={textClassName}>{item.text}</span>
    </div>
  );
}

export function PricingCard({ variant, features, delay = 0, layout }: PricingCardProps) {
  const isFree = variant === 'free';
  const isDesktop = layout === 'desktop';

  const styleBlock = (
    <style>{`
      .pricing-free-btn {
        border: 2px solid transparent;
        background-image: linear-gradient(white, white), linear-gradient(132.56deg, #52B4DA 5.63%, #1E3E85 106.18%);
        background-origin: border-box;
        background-clip: padding-box, border-box;
        color: #2B4490;
        transition: all 0.3s ease;
      }
      .pricing-free-btn:hover {
        background: linear-gradient(129.98deg, #52B4DA -106.35%, #1E3E85 95.25%);
        border: 0;
        color: white;
        box-shadow: 10px 0px 50px 0px rgba(49, 89, 211, 0.28);
      }
      .pricing-premium-btn {
        background: linear-gradient(129.98deg, #52B4DA -106.35%, #1E3E85 95.25%);
        box-shadow: 10px 0px 50px 0px rgba(49, 89, 211, 0.28);
        color: white;
        transition: all 0.3s ease;
      }
      .pricing-premium-btn:hover {
        opacity: 0.9;
        box-shadow: 10px 0px 60px 0px rgba(49, 89, 211, 0.38);
      }
    `}</style>
  );

  if (isDesktop) {
    return (
      <>
        {styleBlock}
        <motion.div
          className="relative bg-white rounded-[24px] w-[500px] h-[343px] shadow-[0px_4px_32px_rgba(43,68,144,0.06)] border border-[#F1F5F9]"
          custom={delay}
          variants={springPop}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_STRICT}
          whileHover={
            isFree
              ? { y: -10, scale: 1.015, boxShadow: '0px 20px 40px rgba(43,68,144,0.12)' }
              : { y: -10, scale: 1.015, boxShadow: '0px 20px 50px rgba(49,89,211,0.22)' }
          }
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="absolute bg-[#F0F4FF] flex flex-col items-center justify-center left-8 top-8 w-40 h-[180px] rounded-2xl">
            {!isFree && (
              <img
                src={premiumTagImg}
                alt="Premium"
                className="absolute -top-3 left-0 w-full h-6 object-contain"
              />
            )}
            {isFree ? (
              <>
                <p className="font-sans font-semibold text-[32px] leading-[45px] tracking-[0px] text-center align-middle text-[#3DBDE3] m-0">Free</p>
                <p className="font-sans font-medium text-[20px] leading-[35px] tracking-[0px] text-center align-middle text-[#11142D65] m-0 mt-1">Basic</p>
              </>
            ) : (
              <>
                <p
                  className="font-sans font-semibold text-[32px] leading-[45px] tracking-[0px] text-center align-middle bg-clip-text text-transparent m-0 mt-2"
                  style={{ backgroundImage: 'linear-gradient(132.56deg, #52B4DA 5.63%, #1E3E85 106.18%)' }}
                >
                  $79.99
                </p>
                <p className="font-sans font-medium text-[20px] leading-[35px] tracking-[0px] text-center align-middle text-[#11142D65] m-0 mt-[2px]">Per Month</p>
              </>
            )}
          </div>

          <div className="absolute flex flex-col justify-between left-[224px] top-8 w-[244px] h-[180px]">
            {features.map((item, idx) => (
              <FeatureRow key={idx} item={item} isDesktop={true} />
            ))}
          </div>

          <button
            className={`absolute cursor-pointer left-8 top-[255px] w-[436px] h-14 rounded-[24px] font-sans font-bold text-[15px] ${
              isFree ? 'pricing-free-btn' : 'pricing-premium-btn border-0'
            }`}
          >
            Get Started
          </button>
        </motion.div>
      </>
    );
  }

  // Mobile layout
  return (
    <>
      {styleBlock}
      <motion.div
        className="bg-white rounded-[24px] p-6 border border-[#F1F5F9] shadow-lg flex flex-col gap-6 w-full min-h-[340px] justify-between"
        custom={delay}
        variants={springPop}
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT_STRICT}
        whileHover={
          isFree
            ? { y: -6, scale: 1.01, boxShadow: '0px 12px 40px rgba(43,68,144,0.12)' }
            : { y: -6, scale: 1.01, boxShadow: '0px 16px 50px rgba(49,89,211,0.18)' }
        }
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="flex gap-4 items-center">
          <div className="w-[120px] h-[120px] bg-[#F0F4FF] rounded-2xl flex flex-col items-center justify-center flex-shrink-0 relative">
            {!isFree && (
              <img src={premiumTagImg} alt="Premium" className="absolute -top-2 left-0 w-full h-5 object-contain" />
            )}
            {isFree ? (
              <>
                <p className="font-sans font-semibold text-[32px] leading-[45px] tracking-[0px] text-center align-middle text-[#3DBDE3] m-0">Free</p>
                <p className="font-sans font-medium text-[20px] leading-[35px] tracking-[0px] text-center align-middle text-[#11142D65] m-0 mt-1">Basic</p>
              </>
            ) : (
              <>
                <p
                  className="font-sans font-semibold text-[32px] leading-[45px] tracking-[0px] text-center align-middle bg-clip-text text-transparent m-0 mt-2"
                  style={{ backgroundImage: 'linear-gradient(132.56deg, #52B4DA 5.63%, #1E3E85 106.18%)' }}
                >
                  $79.99
                </p>
                <p className="font-sans font-medium text-[20px] leading-[35px] tracking-[0px] text-center align-middle text-[#11142D65] m-0 mt-[2px]">Per Month</p>
              </>
            )}
          </div>
          <div className="flex-grow flex flex-col gap-2">
            {features.map((item, idx) => (
              <FeatureRow key={idx} item={item} isDesktop={false} />
            ))}
          </div>
        </div>
        <button
          className={`w-full h-[50px] rounded-[24px] font-bold text-[13px] font-sans ${
            isFree ? 'pricing-free-btn' : 'pricing-premium-btn'
          }`}
        >
          Get Started
        </button>
      </motion.div>
    </>
  );
}
