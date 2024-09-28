"use client";

import NavButton from "./buttons/navButton";
import Link from "next/link";
import DefaultButton from "./buttons/defaultButton";
import { useEffect, useState } from "react";
// import Image from "next/image";
// import DefaultLogo2 from "@/../public/images/logos/webp/Text-Logo-Default-1.webp";

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
        className={`flex justify-between items-center mx-[20%] max-[1400px]:mx-[10%] max-[1150px]:mx-[5%] max-lg:mx-[20%] max-md:mx-[5%] w-full ${headerPadding} transition-all ease-linear`}
      >
        <Link
          className={`text-[40px] h-min logo hover:scale-105 transition-all ease-linear`}
          href={"/"}
          aria-label="Home logo"
        >
          {/* <Image
            width={100}
            src={DefaultLogo2}
            alt="Default Flare's logo with white text"
            layout="responsive"
            sizes="(max-width: 1024px) 100px, (min-width: 1024px) 150px"
            priority
          /> */}
          <img
            className="w-36 max-lg:w-24"
            src="images/logos/webp/Text-Logo-Default-1.webp"
            alt="Default Flare's logo with white text"
            loading="eager"
          />
        </Link>

        <nav
          className="flex items-center max-lg:hidden"
          aria-label="Main navigation"
        >
          <ul className="flex gap-4">
            <NavButton text="Discover" link="/" />
            <NavButton text="Chat" link="/chat" />
            <NavButton text="Rooms" link="/rooms" />
            <NavButton text="Support" link="/" />
            <NavButton text="Team" link="/" />
          </ul>
        </nav>

        <div className="flex max-lg:hidden">
          <DefaultButton
            text="Download"
            color="purple"
            aria="Download Flare application"
            link="/"
            hide="max-[450px]:hidden"
          />
        </div>

        <div className="flex gap-8">
          <input className="hidden" type="checkbox" id="checkbox" />
          <label
            htmlFor="checkbox"
            className="lg:hidden toggle w-8 h-fit self-center cursor-pointer flex flex-col justify-center gap-1 hover:scale-110 duration-500"
          >
            <div
              className="bars w-[60%] duration-300 h-1 bg-white rounded-full"
              id="bar1"
            ></div>
            <div
              className="bars w-full h-1 bg-white rounded-full duration-700"
              id="bar2"
            ></div>
            <div
              className="bars w-[60%] self-end duration-300 h-1 bg-white rounded-full"
              id="bar3"
            ></div>
          </label>
        </div>
      </div>
    </header>
  );
}
