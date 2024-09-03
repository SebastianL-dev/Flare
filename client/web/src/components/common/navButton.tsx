import Link from "next/link";

export default function NavButton({
  text,
  link,
}: {
  text: string;
  link: string;
}) {
  return (
    <li className="font-semibold ">
      <Link
        className="py-2 px-5 cursor-pointer text-neutral-400 hover:text-purple-100 transition-all ease-linear duration-200 rounded-full nav-button relative"
        href={link}
        aria-label={`${text} link`}
      >
        {text}
      </Link>
    </li>
  );
}
