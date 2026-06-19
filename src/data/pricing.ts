export interface PricingFeature {
  text: string;
  included: boolean;
}

export const basicFeatures: PricingFeature[] = [
  { text: '1 Active Job', included: true },
  { text: 'Basic List Placement', included: true },
  { text: 'Unlimited Job Applicants', included: false },
  { text: 'Invite Anyone to Apply to Your Jobs', included: false },
];

export const premiumFeatures: PricingFeature[] = [
  { text: 'Unlimited Job Posts', included: true },
  { text: 'Instant Job Post Approval', included: true },
  { text: 'Premium List Placement', included: true },
  { text: 'Unlimited Job Applicants', included: true },
];
