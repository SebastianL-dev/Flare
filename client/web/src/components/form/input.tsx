"use client";

import { ReactElement, useState } from "react";

export default function Input({
  text,
  icon,
}: {
  text: string;
  icon: ReactElement;
}) {
  const [value, setValue] = useState<string>("");
  const [isFocus, setIsFocus] = useState<boolean>(false);

  const style =
    value.length == 0
      ? "text-opacity-60"
      : !isFocus
      ? "text-opacity-0"
      : "text-opacity-60";
  return (
    <div className="flex relative max-sm:w-max flex-col gap-2 before:content-[''] before:pointer-events-none before:-bottom-1.5 before:absolute before:left-[50%] before:translate-x-[-50%] before:w-full hover:before:bg-purple-500 before:bg-white before:bg-opacity-35 focus-within:before:bg-purple-500 transition-all ease-linear before:transition-all before:ease-linear before:duration-200 before:h-0.5 before:rounded-full">
      <input
        type="text"
        className="bg-transparent flex relative px-1 py-0.5 outline-none peer text-neutral-300 transition-all ease-linear"
        onFocus={() => setIsFocus(true)}
      />
      <span
        className={`absolute w-max px-1.5 py-0.5 select-none text-white ${style} -z-10 peer-focus-within:text-xs peer-focus-within:-translate-y-5 peer-focus-within:px-0.5 transition-all ease-bounce duration-500`}
      >
        {text}
      </span>
      <span
        className={`absolute text-white w-max px-1.5 py-0.5 select-none ${style} peer-focus-within:text-purple-500 peer-hover:text-purple-500 -z-10 right-0 bottom-0 transition-all ease-bounce duration-500`}
      >
        {icon}
      </span>
      {/* <div
    className={`flex items-center gap-1.5 absolute w-max px-1.5 py-0.5 ${errorStyle} left-[50%] translate-x-[-50%] text-red-500 error-anim -z-10`}
  >
    <BiMessageSquareError />
    <p className="font-bold text-xs">{errTxt}</p>
  </div> */}
    </div>
  );
}
