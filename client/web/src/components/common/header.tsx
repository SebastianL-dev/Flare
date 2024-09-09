"use client";

import { permanentMarker } from "@/styles/fonts";
import NavButton from "./buttons/navButton";
import Link from "next/link";
import DefaultButton from "./buttons/defaultButton";
import { useEffect, useState } from "react";
import Image from "next/image";
import DefaultLogo2 from "@/../public/images/logos/svg/Text-Logo-Default-2.svg";

export default function Header() {
  const [headerS, setHeaderS] = useState<string>(
    "bg-transparent border-opacity-0"
  );
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
        ? (setHeaderS("bg-transparent border-opacity-0"),
          setHeaderPadding("py-8"),
          setHeaderTop("top-0"))
        : (setHeaderS(
            "bg-[#120022] bg-opacity-60 backdrop-blur-[6px] border-opacity-10"
          ),
          setHeaderPadding("py-2"));
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <header
      className={`flex h-fit w-full fixed ${headerS} ${headerTop} transition-all ease-linear duration-300 z-50 border-b-2 border-purple-500`}
    >
      <div
        className={`flex justify-between mx-[20%] w-full ${headerPadding} transition-all ease-linear`}
      >
        <Link
          className={`text-[40px] h-min logo`}
          href={"/"}
          aria-label="Home logo"
        >
          <Image
            width={150}
            height={150}
            src={DefaultLogo2}
            alt="Default Flare's logo with white text"
          />
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

        <DefaultButton text="Download" color="purple" aria="Download Flare" />
      </div>
    </header>
  );
}
