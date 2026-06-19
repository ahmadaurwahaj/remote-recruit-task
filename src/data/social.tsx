import type { ReactNode } from 'react';
import { FaFacebookF, FaInstagram, FaXTwitter, FaTwitter, FaLinkedinIn } from 'react-icons/fa6';
import { RiSnapchatFill } from 'react-icons/ri';

export interface SocialLink {
  label: string;
  icon: ReactNode;
}

export const socialLinks: SocialLink[] = [
  {
    label: 'Facebook',
    icon: <FaFacebookF className="w-4 h-4 text-white" />,
  },
  {
    label: 'Instagram',
    icon: <FaInstagram className="w-4 h-4 text-white" />,
  },
  {
    label: 'X',
    icon: <FaXTwitter className="w-4 h-4 text-white" />,
  },
  {
    label: 'Twitter',
    icon: <FaTwitter className="w-4 h-4 text-white" />,
  },
  {
    label: 'LinkedIn',
    icon: <FaLinkedinIn className="w-4 h-4 text-white" />,
  },
  {
    label: 'Snapchat',
    icon: <RiSnapchatFill className="w-4 h-4 text-white" />,
  },
];
