"use client";

import DefaultButton from "@/components/common/buttons/defaultButton";
import Footer from "@/components/common/footer/footer";
import Header from "@/components/header/header";
import Image from "next/image";
import ChatImg from "@/../public/images/Chat.svg";
import HomeCard from "@/components/homeCard";
import { FaDoorOpen } from "react-icons/fa6";
import { MdOutlineSwitchAccount } from "react-icons/md";
import { RiApps2AddLine } from "react-icons/ri";
import FlareLogoWhite from "@/../public/images/logos/svg/Logo-White.svg";
import HomeInfo from "@/components/homeInfo";
import { useEffect, useState } from "react";

export default function Home() {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const handleSize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    window.addEventListener("resize", handleSize);
    window.addEventListener("load", handleSize);

    return () => {
      window.removeEventListener("resize", handleSize);
      window.removeEventListener("load", handleSize);
    };
  });

  return (
    <>
      <Header />
      <main className="mx-[20%] max-[1400px]:mx-[10%] max-[1150px]:mx-[5%] max-lg:mx-[20%] max-md:mx-[5%] pt-44 pb-96 grid gap-60">
        <section className="my-16 rounded-xl flex items-center lg:bg-card-right justify-between gap-8">
          <div className="max-w-[50%] flex flex-col gap-16 max-lg:max-w-full">
            <div className="flex flex-col gap-4 max-lg:items-center">
              <h1 className="font-black text-5xl max-w-[500px] max-lg:text-4xl max-lg:w-full max-lg:text-center">
                Chat with <span className="text-purple-500">everyone</span>{" "}
                whenever you want!
              </h1>
              <p className="w-full text-neutral-400 max-lg:text-center">
                Connect with friends and meet new people. Explore{" "}
                <strong className="text-white text-opacity-75">
                  The Rooms
                </strong>{" "}
                and start your new{" "}
                <strong className="text-white text-opacity-75">
                  adventure
                </strong>
                . Don&apos;t wait anymore and Create an account now!
              </p>
            </div>
            <div className="flex gap-8 max-lg:justify-center">
              <DefaultButton
                text="Open Flare"
                color="purple"
                aria="Start chatting now with Flare"
                link="/"
              />
              <DefaultButton
                text="Blog"
                color="white"
                aria="Learn more about Flare's features"
                link="/"
              />
            </div>
          </div>
          {!isMobile ? (
            <div className="flex flex-col gap-4 min-w-96 max-lg:hidden">
              <Image
                className="image-shadow"
                width={"400"}
                height={"400"}
                src={ChatImg}
                alt="Illustration of people chatting and joining in a chat room"
                loading="eager"
              />
            </div>
          ) : (
            <></>
          )}
        </section>

        <section className="flex justify-between max-lg:flex-col max-lg:items-center">
          <HomeInfo
            icon={
              <Image
                width={18}
                height={18}
                src={FlareLogoWhite}
                alt="Flare logo in color white"
              />
            }
            infoText="Get started with Flare!"
            tittle="Say hello! Start chatting with anyone, anytime."
            text="Create an account now to keep your conversations secure and save
              your chat history. Explore all the features Flare has to offer!"
            link="/chat"
            info="Flare"
            button="About Flare"
          />
          <div className="max-w-1/2 w-1/2"></div>
        </section>

        <section className="flex flex-col items-center gap-16">
          <h2 className="text-4xl font-black">Amazing features</h2>
          <div className="flex gap-8 max-lg:flex-col items-center">
            <HomeCard
              tittle="The Rooms - Fastest way to chat"
              text={
                <p className="text-base text-white text-opacity-50">
                  Did you know you can chat with friends without an account?
                  With{" "}
                  <strong className="text-white text-opacity-75">rooms</strong>,
                  all you need is your name and a{" "}
                  <strong className="text-white text-opacity-75">
                    room ID
                  </strong>{" "}
                  to join a conversation with friends.
                </p>
              }
              link="/rooms"
              info="Flare rooms"
              icon={<FaDoorOpen className="h-6 w-6 text-neutral-300" />}
              button="Rooms"
            />
            <HomeCard
              tittle="Account - Want to save your chats?"
              text={
                <>
                  <p className="text-base text-white text-opacity-60">
                    In rooms, your chat history isn&apos;t saved, but by
                    creating an{" "}
                    <strong className="text-white text-opacity-75">
                      account
                    </strong>
                    , you can save your conversations and send direct messages
                    to your friends. Don&apos;t wait anymore, create an account
                    and{" "}
                    <strong className="text-white text-opacity-75">
                      start chatting now
                    </strong>
                    !
                  </p>
                </>
              }
              link="/chat"
              info="Flare accounts"
              icon={
                <MdOutlineSwitchAccount className="h-6 w-6 text-neutral-300" />
              }
              button="Account"
            />
            <HomeCard
              tittle="Download the app - Desktop? Mobile?"
              text={
                <p className="text-base text-white text-opacity-60">
                  Flare offers both,{" "}
                  <strong className="text-white text-opacity-75">mobile</strong>{" "}
                  and{" "}
                  <strong className="text-white text-opacity-75">
                    desktop
                  </strong>{" "}
                  applications for free. Why not try{" "}
                  <strong className="text-white text-opacity-75">
                    downloading
                  </strong>{" "}
                  them and stay connected anytime, anywhere!
                </p>
              }
              link="/"
              info="Flare desktop and mobile app"
              icon={<RiApps2AddLine className="h-6 w-6 text-neutral-300" />}
              button="Download"
            />
          </div>
        </section>

        {/* <section className="flex justify-between flex-row-reverse">
          <HomeInfo
            icon={<FaDoorOpen className="h-5 w-5" />}
            infoText="The Rooms"
            tittle="The Rooms? A new place to stay?"
            text='"The Rooms" provide a fast and easy way to chat with your
              friends.No need for an account! Just jump into a room, chat, and
              even meet new people! However, keep in mind that conversations in
              rooms aren&apos;t saved.'
            link="/rooms"
            info="Flare rooms"
            button="About Rooms"
          />
        </section> */}
      </main>
      <Footer />
    </>
  );
}
