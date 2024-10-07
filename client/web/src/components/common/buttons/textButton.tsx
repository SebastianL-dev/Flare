import Link from "next/link";
import { HiMiniArrowUpRight } from "react-icons/hi2";

export default function TextMoreButton({
  link,
  info,
  text,
}: {
  link: string;
  info: string;
  text: string;
}) {
  return (
    <Link
      className="flex gap-1 items-center w-fit hover:gap-1.5 hover:text-purple-400 ease-linear duration-300 px-1 relative learn-more-button"
      aria-label={`More information about ${info}`}
      href={link}
    >
      <span>{text}</span>
      <HiMiniArrowUpRight className="h-5 w-5" />
    </Link>
  );
}
