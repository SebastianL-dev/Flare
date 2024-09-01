import { permanentMarker } from "@/styles/fonts";
import NavButton from "./navButton";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

export default function Header() {
  return (
    <header className="">
      <div className="flex justify-between py-8 px-[20%] w-auto">
        <Link
          className={`peer transition-all ${permanentMarker.className} text-[40px] hover:-rotate-[4deg] hover:scale-125 h-min ease-message-button duration-300`}
          href={"/"}
        >
          Fl<span className="text-purple-500">a</span>re
          <span className="text-purple-500">!</span>
        </Link>
        <nav className="flex items-center">
          <ul className="flex gap-4">
            <NavButton text="Discover" link="/" />
            <NavButton text="Chat" link="/" />
            <NavButton text="Rooms" link="/" />
            <NavButton text="Support" link="/" />
            <NavButton text="Team" link="/" />
          </ul>
        </nav>
        <button className="flex self-center shadow-button-default bg-purple-500 bg-opacity-10 hover:shadow-button-hover-1 hover:bg-opacity-30 hover:text-purple-100 border-2 border-purple-500 text-neutral-200 h-min px-7 py-2 rounded-full font-bold items-center relative overflow-hidden group default-transition duration-500">
          <span className=" transition-all ease-linear group-hover:-translate-x-2">
            Download
          </span>
          <FaArrowRight className="w-4 h-4 transition-all ease-linear absolute top-1/2 -translate-y-1/2 -right-2 opacity-0 group-hover:right-3 group-hover:opacity-100" />
        </button>
      </div>
    </header>
  );
}
