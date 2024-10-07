import Link from "next/link";

export default function SimpleNavButton({
  icon,
  aria,
  link,
}: {
  icon: React.ReactElement;
  aria: string;
  link: string;
}) {
  return (
    <li className="flex rounded-full">
      <Link
        className="p-2 cursor-pointer text-neutral-400 hover:text-purple-100 transition-all ease-linear duration-200 rounded-full nav-button relative"
        href={link}
        aria-label={`${aria} link`}
      >
        {icon}
      </Link>
    </li>
  );
}
