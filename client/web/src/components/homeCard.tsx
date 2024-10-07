"use client";

import React, { useEffect, useState } from "react";
import TextMoreButton from "./common/buttons/textButton";

export default function HomeCard({
  tittle,
  text,
  link,
  info,
  icon,
  button,
}: {
  tittle: string;
  text: React.ReactElement;
  link: string;
  info: string;
  icon: React.ReactElement;
  button: string;
}) {
  const [color, setColor] = useState<string>("");

  useEffect(() => {
    if (info == "Flare rooms") {
      setColor("card-features-purple-1");
    } else if (info == "Flare accounts") {
      setColor("card-features-purple-2");
    } else {
      setColor("card-features-purple-3");
    }
  }, [info]);

  return (
    <article className="group max-lg:h-max max-lg:w-full bg-neutral-900 relative border-2 border-neutral-800 rounded-xl overflow-hidden w-[33%] h-full flex flex-col shadow-feature-card hover:scale-105 transition-all ease-bounce duration-500">
      <div className={`flex w-full min-h-2 h-2 ${color}`}></div>
      <div className="flex flex-grow flex-col h-max gap-4 p-4 mt-">
        <header className="flex flex-col gap-2">
          <div className="bg-white bg-opacity-5 rounded-lg py-2 w-min px-2 border-2 border-white border-opacity-10">
            {icon}
          </div>
          <h3 className="font-bold text-lg group-hover:text-purple-400 transition-all ease-linear duration-300">
            {tittle}
          </h3>
        </header>
        <div className="flex flex-col gap-8 justify-between h-full">
          {text}
          <TextMoreButton link={link} info={info} text={button} />
        </div>
      </div>
    </article>
  );
}
