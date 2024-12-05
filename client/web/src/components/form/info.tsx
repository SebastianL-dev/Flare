import FlareLogoPurple from "@/../public/images/logos/svg/Logo-Purple.svg";
import Image from "next/image";
import { useState } from "react";

export default function Info() {
  const hash = window.location.hash.replace("#", "");
  const [hashStyle, setHashStyle] = useState<string>(hash);
  const [tittleStyle, setTittleStyle] = useState<string>("");
  const [textStyle, setTextStyle] = useState<string>("");
  const [listStyle, setListStyle] = useState<string>("");

  const changeHash = (hashValue: string) => {
    window.location.hash = hashValue;

    setTittleStyle("opacity-0");
    setTextStyle("opacity-0");
    setListStyle("opacity-0");
    setTimeout(() => {
      setHashStyle(hashValue);
      setTittleStyle("opacity-100 translate-y-4");
      setListStyle("opacity-100 translate-x-4");
      setTextStyle("opacity-100 ");
    }, 300);
  };

  return (
    <>
      <div className="flex flex-col gap-8 h-fit">
        <div
          className={`flex gap-4 items-center justify-center w-fit h-min ${tittleStyle} transition-all ease-linear duration-300`}
        >
          <div className="flex bg-purple-400 bg-opacity-10 border-purple-500 border-2 border-opacity-20 rounded-lg w-12 h-12 items-center justify-center shadow-feature-card">
            <Image
              width={25}
              height={25}
              src={FlareLogoPurple}
              alt="Flare logo in purple color"
              loading="lazy"
            />
          </div>
          <h1 className="flex w-fit text-center text-5xl font-black">
            {hashStyle === "register" ? "Join the Party!" : "Welcome back!"}
          </h1>
        </div>
        <p
          className={`w-fit text-white text-opacity-75 mr-8 h-fit ${textStyle} transition-all ease-linear duration-300`}
        >
          {hashStyle === "register"
            ? "Create your account and become part of the adventure! 🌟 Start chatting, connecting, and making memories today."
            : "Sign in with your acocunt to get yout chats back and rejoin to the party 🎉. Don't keep your fiends waiting!"}
        </p>

        <ul className="flex flex-col pl-4 gap-4 text-white text-opacity-75 py-2 ">
          <li
            className={`flex transition-all ease-linear hover:translate-x-2 ${listStyle} duration-200 w-fit`}
          >
            <span className="text-white text-opacity-100">🌟</span> Meet new
            people and chat with friends.
          </li>
          <li
            className={`flex transition-all ease-linear hover:translate-x-2 ${listStyle} duration-200 delay-75 w-fit`}
          >
            <span className="text-white text-opacity-100">🔒</span> Keep yout
            chats and data secure.
          </li>
          <li
            className={`flex transition-all ease-linear hover:translate-x-2 ${listStyle} duration-200 delay-100 w-fit`}
          >
            <span className="text-white text-opacity-100">🎨</span> Customize
            your profile and express yourself!
          </li>
          <li
            className={`flex transition-all ease-linear hover:translate-x-2 ${listStyle} duration-200 delay-150 w-fit`}
          >
            <span className="text-white text-opacity-100">📱</span> Switch
            devices and keep the conversation going.
          </li>
        </ul>
      </div>

      <div className="flex flex-col items-center justify-center gap-4 h-fit mt-16">
        <span
          className={`text-white text-opacity-70 ${textStyle} transition-all ease-linear duration-300`}
        >
          {hashStyle === "register"
            ? "Already have an account?"
            : "Don't have an account yet?"}
        </span>
        <button
          className={`flex max-[350px]:w-full bg-white justify-center ${textStyle} hover:bg-opacity-25 border-white text-white hover:shadow-button-hover-white shadow-button-default-white self-center hover:text-purple-100 bg-opacity-10 border-2 h-min px-7 py-2 rounded-full font-bold items-center relative overflow-hidden group default-transition duration-500`}
          onClick={() =>
            changeHash(hashStyle === "register" ? "signin" : "register")
          }
        >
          {hashStyle === "register" ? "Sign in" : "Register"}
        </button>
      </div>
    </>
  );
}
