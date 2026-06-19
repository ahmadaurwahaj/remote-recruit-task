import { HeroSection } from '../components/sections/HeroSection';
import { FeatureSection } from '../components/sections/FeatureSection';
import { FAQSection } from '../components/sections/FAQSection';
import { SignUpCTASection } from '../components/sections/SignUpCTASection';
import { features } from '../data/features';

export function HomePage() {
  return (
    <>
      <HeroSection />
      {features.map((feature, index) => (
        <FeatureSection key={feature.id} {...feature} isFirst={index === 0} />
      ))}
      <SignUpCTASection />
      <FAQSection />
    </>
  );
}
