import DefaultButton from "@/components/common/buttons/defaultButton";
import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The rooms | Connect Without an Account",
  description:
    "Dive into real-time conversations with our instant chat rooms. No account needed, just enter a room ID and start chatting with friends or new people instantly. It's quick, easy, and hassle-free. Whether you're looking for a casual chat or a private discussion, our rooms make connecting seamless and secure.",
  icons: {
    icon: "/images/logos/ico/Logo-Purple.ico",
  },
  authors: {
    name: "Sebastián Lozano",
    url: "https://www.instagram.com/sebastianlozano086",
  },
  appleWebApp: {
    capable: true,
    title: "The rooms | Connect Without an Account",
  },
  openGraph: {
    title: "The rooms | Connect Without an Account",
    description:
      "Dive into real-time conversations with our instant chat rooms. No account needed, just enter a room ID and start chatting with friends or new people instantly. It's quick, easy, and hassle-free. Whether you're looking for a casual chat or a private discussion, our rooms make connecting seamless and secure.",
    images:
      "https://flare-a4x.pages.dev/_next/static/media/Text-Logo-Default-2.9e371669.svg",
    url: "https://flare-a4x.pages.dev/rooms",
    type: "website",
    siteName: "Flare Rooms",
  },
};

export default function Rooms() {
  return (
    <>
      <Header />
      <main className="mx-[20%] max-[1400px]:mx-[10%] max-[1150px]:mx-[5%] max-lg:mx-[20%] max-md:mx-[5%] pt-44 pb-96 grid gap-60">
        <section className="my-16 rounded-xl flex items-center justify-between gap-8">
          <div className="max-w-[50%] flex flex-col gap-16 max-lg:max-w-full">
            <div className="flex flex-col gap-4">
              <h1 className="font-black text-5xl w-[500px] max-lg:w-full max-lg:text-center max-lg:text-4xl">
                Short on time?{" "}
                <span className="text-purple-500">The rooms</span> make it easy
              </h1>
              <p className="max-w-[550px] text-neutral-300 text-opacity-70 font-medium max-lg:max-w-full max-lg:text-center">
                Need to chat in a hurry?{" "}
                <strong className="text-white text-opacity-75">
                  The rooms
                </strong>{" "}
                are here for you. No accounts, no sign-ups. It&apos;s the{" "}
                <strong className="text-white text-opacity-75">fastest</strong>{" "}
                way to get in touch with friends. Join a room now!
              </p>
            </div>
            <div className="flex gap-8 max-lg:justify-center">
              <DefaultButton
                text="Join a room"
                color="purple"
                aria="Start chatting now"
                link="rooms/connect/join"
              />
            </div>
          </div>
          <div className="flex flex-col gap-4 min-w-96 max-lg:hidden">
            {/* <Image
              className="image-shadow"
              width={"400"}
              height={"400"}
              src={ChatImg}
              alt="Illustration of people chatting and joining in a chat room"
            /> */}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
