"use client";

import { permanentMarker } from "@/styles/fonts";
import NavButton from "./buttons/navButton";
import Link from "next/link";
import DefaultButton from "./buttons/defaultButton";
import { useEffect, useState } from "react";

// let lastScroll: number = 0;
export default function Header() {
  const [headerS, setHeaderS] = useState<string>("bg-transparent");
  const [headerPadding, setHeaderPadding] = useState<string>("py-8");
  const [headerTop, setHeaderTop] = useState<string>("top-0");
  const [lastScroll, setLastScroll] = useState<number>(0);

  useEffect(() => {
    let scrollTop: number = document.documentElement.scrollTop;

    const handleScroll = () => {
      scrollTop > lastScroll
        ? setHeaderTop("-top-[77px]")
        : setHeaderTop("top-0");

      setLastScroll(scrollTop);

      window.scrollY == 0
        ? (setHeaderS("bg-transparent"), setHeaderPadding("py-8"))
        : (setHeaderS("bg-[#120022] bg-opacity-60 backdrop-blur-[6px]"),
          setHeaderPadding("py-2"));
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <header
      className={`flex h-fit w-full fixed ${headerS} ${headerTop} transition-all ease-linear duration-200 z-50`}
    >
      <div
        className={`flex justify-between mx-[20%] w-full ${headerPadding} transition-all ease-linear`}
      >
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
