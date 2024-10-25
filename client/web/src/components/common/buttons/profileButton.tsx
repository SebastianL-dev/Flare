import Link from "next/link";
import { ReactElement } from "react";

export default function ProfileButton({
  text,
  link,
  icon,
}: {
  text: string;
  link: string;
  icon: ReactElement;
}) {
  return (
    <li>
      <Link
        className="flex gap-1.5 items-center bg-white bg-opacity-15 rounded-lg px-4 py-1 w-fit hover:scale-105 hover:bg-opacity-20 transition-all ease-bounce duration-500"
        href={link}
        aria-label="Send email to Sebastián Lozano"
      >
        {icon}
        <span>{text}</span>
      </Link>
    </li>
  );
}
