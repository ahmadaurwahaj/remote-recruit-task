import featureGlobalSearchImg from '../assets/images/feature-global-search.png';
import featureFeeFreeImg from '../assets/images/feature-fee-free.png';
import featureTalentProfileImg from '../assets/images/feature-talent-profile.png';

export interface FeatureItem {
  id: string;
  badgeText: string;
  heading: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  imagePosition: 'left' | 'right';
}

export const features: FeatureItem[] = [
  {
    id: 'features',
    badgeText: 'Global Search',
    heading: 'The First Fully Global Job Board, Anywhere, Ever',
    description:
      'RemoteRecruit connects candidates with opportunities around the world. With today\'s remote-first workforce, you need to be able to find the best jobs and the best people for them, wherever they may be.',
    imageSrc: featureGlobalSearchImg,
    imageAlt: 'Global Search Interface',
    imagePosition: 'right',
  },
  {
    id: 'employers',
    badgeText: 'Actually Fee Free',
    heading: 'Fee-Free Forever',
    description:
      'We don\'t charge you fees and we don\'t put up paywalls. We\'re the bridge that connects job opportunities with the best candidates, with no middleman involved.',
    imageSrc: featureFeeFreeImg,
    imageAlt: 'Fee-Free Forever Interface',
    imagePosition: 'left',
  },
  {
    id: 'job-seekers',
    badgeText: 'Talent Profile',
    heading: 'Showcase Your Skills & Experience',
    description:
      'Create a rich, interactive profile that displays your portfolio, feedback, and certifications. RemoteRecruit gives you the tools to stand out to global employers without any gatekeepers or paywalls blocking your path.',
    imageSrc: featureTalentProfileImg,
    imageAlt: 'RemoteRecruit Developer Profile & Portfolio Interface',
    imagePosition: 'right',
  },
];
