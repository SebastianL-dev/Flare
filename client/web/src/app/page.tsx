import DefaultButton from "@/components/common/buttons/defaultButton";
import Footer from "@/components/common/footer";
import Header from "@/components/common/header";
import Image from "next/image";
import ChatImg from "@/../public/images/Chat.svg";
import HomeCard from "@/components/homeCard";
import { FaDoorOpen } from "react-icons/fa6";
import { MdOutlineSwitchAccount } from "react-icons/md";
import { RiApps2AddLine } from "react-icons/ri";
import FlareLogoWhite from "@/../public/images/logos/svg/Logo-White.svg";
import HomeInfo from "@/components/homeInfo";

export const runtime = "edge";

export default function Home() {
  return (
    // FIXME: Fix HTML sematic, add aria labels and others
    <>
      <Header />
      <main className="mx-[20%] pt-44 pb-96 grid gap-60">
        <section className="my-16 rounded-xl flex items-center bg-card-right justify-between gap-8">
          <div className="max-w-[50%] flex flex-col gap-16">
            <div className="flex flex-col gap-4">
              <h1 className="font-black text-5xl max-w-[500px]">
                Chat with <span className="text-purple-500">everyone</span>{" "}
                whenever you want!
              </h1>
              <p className="max-w-[550px] text-neutral-300 text-opacity-70 font-medium">
                Connect with friends and meet new people now. Explore "The
                Rooms" and start your new adventure. No account needed in rooms,
                just join in one and dive into the conversation!
              </p>
            </div>
            <div className="flex gap-8">
              <DefaultButton
                text="Start now!"
                color="purple"
                aria="Start chatting now"
              />
              <DefaultButton
                text="More"
                color="white"
                aria="Learn more about Flare's features"
              />
            </div>
          </div>
          <div className="flex flex-col gap-4 min-w-96">
            <Image
              className="image-shadow"
              width={"400"}
              height={"400"}
              src={ChatImg}
              alt="Illustration of people chatting and joining in a chat room"
            />
          </div>
        </section>
        <section className="flex justify-between">
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
          />
          <div className="max-w-1/2 w-1/2"></div>
        </section>
        <section className="flex flex-col items-center gap-16">
          <h2 className="text-4xl font-black">Amazing features</h2>
          <div className="flex gap-8">
            <HomeCard
              tittle="The Rooms - Fastest way to chat"
              text={
                <p className="text-base text-white text-opacity-50">
                  Did you know you can chat with friends without an account?
                  With{" "}
                  <strong className="text-white text-opacity-65">rooms</strong>,
                  all you need is your name and a{" "}
                  <strong className="text-white text-opacity-65">
                    room ID
                  </strong>{" "}
                  to join a conversation with friends.
                </p>
              }
              link="/"
              info="rooms"
              icon={<FaDoorOpen className="h-6 w-6 text-neutral-300" />}
            />
            <HomeCard
              tittle="Account - Want to save your chats?"
              text={
                <>
                  <p className="text-base text-white text-opacity-60">
                    In rooms, your chat history isn't saved, but by creating an{" "}
                    <strong className="text-white text-opacity-75">
                      account
                    </strong>
                    , you can save your conversations and send direct messages
                    to your friends. Don't wait anymore, create an account and{" "}
                    <strong className="text-white text-opacity-75">
                      start chatting now
                    </strong>
                    !
                  </p>
                </>
              }
              link="/"
              info="accounts"
              icon={
                <MdOutlineSwitchAccount className="h-6 w-6 text-neutral-300" />
              }
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
              info="desktop and mobile apps"
              icon={<RiApps2AddLine className="h-6 w-6 text-neutral-300" />}
            />
          </div>
        </section>
        <section className="flex justify-between flex-row-reverse">
          <HomeInfo
            icon={<FaDoorOpen className="h-5 w-5" />}
            infoText="The Rooms"
            tittle="The Rooms? A new place to stay?"
            text="'The Rooms' provide a fast and easy way to chat with your
              friends.No need for an account! Just jump into a room, chat, and
              even meet new people! However, keep in mind that conversations in
              rooms aren't saved."
          />
        </section>
      </main>
      <Footer />
    </>
  );
}
