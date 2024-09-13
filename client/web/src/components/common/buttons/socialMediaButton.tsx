import Link from "next/link";

export default function SocialMediaBtn({
  link,
  icon,
  social,
}: {
  link: string;
  icon: React.ReactElement;
  social: string;
}) {
  return (
    <li>
      <Link
        href={link}
        target="blank"
        rel="noopener noreferrer"
        aria-label={`${
          social == "Instagram" ? "Sebastián Lozano's " : "Flare's"
        }${social} page`}
      >
        {icon}
      </Link>
    </li>
  );
}
