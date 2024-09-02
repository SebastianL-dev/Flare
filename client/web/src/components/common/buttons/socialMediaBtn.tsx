import Link from "next/link";

export default function SocialMediaBtn({
  link,
  icon,
}: {
  link: string;
  icon: React.ReactElement;
}) {
  return (
    <li>
      <Link href={link} target="blank">
        {icon}
      </Link>
    </li>
  );
}
