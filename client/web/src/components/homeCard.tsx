"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { HiMiniArrowUpRight } from "react-icons/hi2";

export default function HomeCard({
  tittle,
  text,
  link,
  info,
  icon,
}: {
  tittle: string;
  text: React.ReactElement;
  link: string;
  info: string;
  icon: React.ReactElement;
}) {
  const [color, setColor] = useState<string>("");

  useEffect(() => {
    if (info == "rooms") {
      setColor("card-features-purple-1");
    } else if (info == "accounts") {
      setColor("card-features-purple-2");
    } else {
      setColor("card-features-purple-3");
    }
  });

  return (
    <article className="group bg-neutral-900 relative border-2 border-neutral-800 rounded-xl overflow-hidden w-[33%] h-full flex flex-col shadow-feature-card hover:scale-105 transition-all ease-bounce duration-500">
      <div className={`flex w-full min-h-2 h-2 ${color}`}></div>
      <div className="flex flex-grow flex-col h-max gap-4 p-4 mt-">
        <div className="bg-white bg-opacity-5 rounded-lg py-2 w-min px-2 border-2 border-white border-opacity-10">
          {icon}
        </div>
        <header>
          <h3 className="font-bold text-lg group-hover:text-purple-400 transition-all ease-linear duration-300">
            {tittle}
          </h3>
        </header>
        <div className="flex flex-col gap-8 justify-between h-full">
          {text}
          {/* FIXME: fix and improve learn more button */}
          <Link
            className="flex w-fit items-center text-purple-500 hover:text-opacity-60 gap-1 transition-all hover:gap-1.5 ease-linear duration-150"
            href={link}
            aria-label={`Learn more about ${info}`}
          >
            Learn more
            <HiMiniArrowUpRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </article>
  );
}
