"use client";

import Input from "@/components/form/input";
import { HiOutlineMail } from "react-icons/hi";
import { LuKeyRound } from "react-icons/lu";
import Link from "next/link";
import { RiGoogleFill } from "react-icons/ri";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa6";
import { useEffect, useState } from "react";
import Info from "@/components/form/info";
import { FiUser } from "react-icons/fi";

export default function Access() {
  // TODO: Create a user page, like the site where user can see all the info
  // TODO: Create a component for the login and register form, to re-use it
  // FIXME: Change a lot of useStates, better use useRef
  // FIXME: Add better imports -> require('')..., made website faster

  const [formStyle, setFormStyle] = useState<boolean>(false);
  const [textForm, setTextForm] = useState<string>("");

  useEffect(() => {
    const handleHash = () => {
      if (typeof window !== "undefined") {
        const hash = window.location.hash.replace("#", "");
        if (hash === "register") {
          setFormStyle(false);
          setTextForm("right-0");
        } else {
          setFormStyle(true);
          setTextForm("right-1/2");
        }
      }
    };

    handleHash();

    window.addEventListener("hashchange", handleHash);

    return () => {
      window.removeEventListener("hashchange", handleHash);
    };
  });

  return (
    <>
      <main className="mx-[20%] max-[1400px]:mx-[10%] max-[1150px]:mx-[5%] max-lg:mx-[20%] max-md:mx-[5%] pt-48 grid gap-60">
        <section>
          <article className="flex relative w-full bg-purple-500 bg-opacity-5 backdrop-blur-sm border-2 border-purple-500 border-opacity-20 rounded-3xl overflow-hidden content-between">
            <div
              className={`absolute z-50 grid w-1/2 px-8 py-20 bg-purple-500 bg-login bg-opacity-10 backdrop-blur-lg content-between transition-all ease-form duration-500 ${textForm}`}
            >
              <Info />
            </div>

            <div
              className={`w-1/2 py-12 px-24 grid gap-12 ${
                !formStyle ? "delay-200" : "opacity-0 pointer-events-none"
              } transition-all ease-linear duration-200`}
            >
              <div className="flex w-full justify-center ">
                <h2 className="flex w-fit text-center text-4xl font-black">
                  Create your account
                </h2>
              </div>

              <form action="" className="flex flex-col gap-12">
                <div className="flex flex-col gap-6">
                  <ul className="flex flex-col gap-12">
                    <li>
                      <Input
                        text="You need a username"
                        icon={<FiUser className="w-5 h-5" />}
                      />
                    </li>
                    <li>
                      <Input
                        text="What's your email?"
                        icon={<HiOutlineMail className="w-5 h-5" />}
                      />
                    </li>
                    <li>
                      <Input
                        text="Choose your password"
                        icon={<LuKeyRound className="w-5 h-5" />}
                      />
                    </li>
                  </ul>
                </div>
                <button className="flex w-full bg-purple-500 justify-center hover:bg-opacity-25 border-purple-500 text-white hover:shadow-button-hover-1 shadow-button-default self-center hover:text-purple-100 bg-opacity-10 border-2 h-min px-7 py-2 rounded-full font-bold items-center relative overflow-hidden default-transition duration-500">
                  Start chatting
                </button>
              </form>

              <div className="flex w-full justify-center relative">
                <span className="text-center text-xs text-white text-opacity-50">
                  Or join with
                </span>
                <div className="bg-white absolute rounded-full w-1/3 left-0 h-0.5 bg-opacity-30 top-1/2" />
                <div className="bg-white absolute rounded-full w-1/3 right-0 h-0.5 bg-opacity-30 top-1/2" />
              </div>

              <div>
                <ul className="flex w-full gap-4 justify-center items-center">
                  <Link
                    href={""}
                    className="flex w-min bg-white justify-center hover:bg-opacity-25 border-white text-white hover:shadow-button-hover-white shadow-button-default-white self-center hover:text-purple-100 bg-opacity-10 border-2 h-min p-2 rounded-full font-bold items-center relative overflow-hidden default-transition duration-500"
                  >
                    <RiGoogleFill className="w-5 h-5" />
                  </Link>
                  <Link
                    href={""}
                    className="flex w-min bg-white justify-center hover:bg-opacity-25 border-white text-white hover:shadow-button-hover-white shadow-button-default-white self-center hover:text-purple-100 bg-opacity-10 border-2 h-min p-2 rounded-full font-bold items-center relative overflow-hidden default-transition duration-500"
                  >
                    <FaFacebookF className="w-5 h-5" />
                  </Link>
                  <Link
                    href={""}
                    className="flex w-min bg-white justify-center hover:bg-opacity-25 border-white text-white hover:shadow-button-hover-white shadow-button-default-white self-center hover:text-purple-100 bg-opacity-10 border-2 h-min p-2 rounded-full font-bold items-center relative overflow-hidden default-transition duration-500"
                  >
                    <FaLinkedinIn className="w-5 h-5" />
                  </Link>
                </ul>
              </div>
            </div>

            <div
              className={`w-1/2 py-12 px-24 grid gap-12 ${
                formStyle ? "delay-200" : "opacity-0 pointer-events-none"
              } transition-all ease-linear duration-200`}
            >
              <div className="flex w-full justify-center ">
                <h2 className="flex w-fit text-center text-4xl font-black">
                  Sign In
                </h2>
              </div>

              <form action="" className="flex flex-col gap-12">
                <div className="flex flex-col gap-6">
                  <ul className="flex flex-col gap-12">
                    <li>
                      <Input
                        text="Email"
                        icon={<HiOutlineMail className="w-5 h-5" />}
                      />
                    </li>
                    <li>
                      <Input
                        text="Password"
                        icon={<LuKeyRound className="w-5 h-5" />}
                      />
                    </li>
                  </ul>

                  <Link
                    href={""}
                    className="flex text-xs transition-all ease-linear duration-200 text-purple-400 text-opacity-80 self-end hover:text-opacity-60"
                  >
                    Forgot passsword?
                  </Link>
                </div>
                <button className="flex w-full bg-purple-500 justify-center hover:bg-opacity-25 border-purple-500 text-white hover:shadow-button-hover-1 shadow-button-default self-center hover:text-purple-100 bg-opacity-10 border-2 h-min px-7 py-2 rounded-full font-bold items-center relative overflow-hidden default-transition duration-500">
                  Return to party
                </button>
              </form>

              <div className="flex w-full justify-center relative">
                <span className="text-center text-xs text-white text-opacity-50">
                  Or join with
                </span>
                <div className="bg-white absolute rounded-full w-1/3 left-0 h-0.5 bg-opacity-30 top-1/2" />
                <div className="bg-white absolute rounded-full w-1/3 right-0 h-0.5 bg-opacity-30 top-1/2" />
              </div>

              <div>
                <ul className="flex w-full gap-4 justify-center items-center">
                  <Link
                    href={""}
                    className="flex w-min bg-white justify-center hover:bg-opacity-25 border-white text-white hover:shadow-button-hover-white shadow-button-default-white self-center hover:text-purple-100 bg-opacity-10 border-2 h-min p-2 rounded-full font-bold items-center relative overflow-hidden default-transition duration-500"
                  >
                    <RiGoogleFill className="w-5 h-5" />
                  </Link>
                  <Link
                    href={""}
                    className="flex w-min bg-white justify-center hover:bg-opacity-25 border-white text-white hover:shadow-button-hover-white shadow-button-default-white self-center hover:text-purple-100 bg-opacity-10 border-2 h-min p-2 rounded-full font-bold items-center relative overflow-hidden default-transition duration-500"
                  >
                    <FaFacebookF className="w-5 h-5" />
                  </Link>
                  <Link
                    href={""}
                    className="flex w-min bg-white justify-center hover:bg-opacity-25 border-white text-white hover:shadow-button-hover-white shadow-button-default-white self-center hover:text-purple-100 bg-opacity-10 border-2 h-min p-2 rounded-full font-bold items-center relative overflow-hidden default-transition duration-500"
                  >
                    <FaLinkedinIn className="w-5 h-5" />
                  </Link>
                </ul>
              </div>
            </div>
          </article>
        </section>
      </main>
    </>
  );
}
