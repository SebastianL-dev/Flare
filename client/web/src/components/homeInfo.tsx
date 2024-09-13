import Link from "next/link";
import { HiMiniArrowUpRight } from "react-icons/hi2";

export default function HomeInfo({
  icon,
  infoText,
  tittle,
  text,
}: {
  icon: React.ReactElement;
  infoText: string;
  tittle: string;
  text: string;
}) {
  return (
    // TODO: Improve learn more button, make it prettier and create a component to use it.
    <div className="max-w-1/2 w-1/2 flex flex-col gap-4">
      <div className="flex gap-2 opacity-50 items-center">
        <div className="flex bg-white bg-opacity-10 border-white border-2 border-opacity-50 rounded-md w-9 h-9 items-center justify-center">
          {icon}
        </div>
        <span>{infoText}</span>
      </div>
      <h2 className="text-4xl font-black">{tittle}</h2>
      <p className="text-white text-opacity-60">{text}</p>
      <Link
        className="flex gap-1 text-purple-500 items-center w-fit hover:text-opacity-60 transition-all ease-linear duration-300"
        href={""}
      >
        <span>Learn more</span>
        <HiMiniArrowUpRight className="h-5 w-5" />
      </Link>
    </div>
  );
}
