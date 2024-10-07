import Link from "next/link";

export default function SimpleButton({
  icon,
  link,
  aria,
  color,
}: {
  icon: React.ReactElement;
  link: string;
  aria: string;
  color: string;
}) {
  const style =
    color == "purple"
      ? "bg-purple-500 hover:bg-opacity-30 hover:text-purple-100 border-purple-500 text-neutral-200 hover:shadow-button-hover-1 shadow-button-default"
      : "bg-white hover:bg-opacity-25 border-white text-white hover:shadow-button-hover-white shadow-button-default-white";

  return (
    <Link
      className={`flex items-center justify-center self-center hover:scale-110 ${style} bg-opacity-10 border-2 p-2 rounded-full transition-all ease-button duration-500 flex items-center justify-center`}
      href={link}
      aria-label={`${aria} link`}
      style={{ transformOrigin: "center" }}
    >
      {icon}
    </Link>
  );
}
