interface SectionBadgeProps {
  text: string;
}

export function SectionBadge({ text }: SectionBadgeProps) {
  return <span className="inline-flex items-center px-4 py-1.5 rounded-full font-semibold text-[11px] leading-[15px] tracking-[0.4px] align-middle text-[#3DBDE3] bg-[#E1F6FC] font-sans">{text}</span>;
}
