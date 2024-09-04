import { permanentMarker } from "@/styles/fonts";
import NavButton from "./buttons/navButton";
import Link from "next/link";
import DefaultButton from "./buttons/defaultButton";

export default function Header() {
  return (
    <header className="flex h-fit w-full fixed">
      <div className="flex justify-between py-8 mx-[20%] w-full">
        <Link
          className={`peer transition-all ${permanentMarker.className} text-[40px] hover:-rotate-[4deg] hover:scale-125 h-min ease-message-button duration-300`}
          href={"/"}
          aria-label="Home logo"
        >
          Fl<span className="text-purple-500">a</span>re
          <span className="text-purple-500">!</span>
        </Link>

        <nav className="flex items-center" aria-label="Main navigation">
          <ul className="flex gap-4">
            <NavButton text="Discover" link="/" />
            <NavButton text="Chat" link="/" />
            <NavButton text="Rooms" link="/" />
            <NavButton text="Support" link="/" />
            <NavButton text="Team" link="/" />
          </ul>
        </nav>

        <DefaultButton text="Download" color="purple" />
      </div>
    </header>
  );
}
