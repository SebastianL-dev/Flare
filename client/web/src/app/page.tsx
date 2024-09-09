import DefaultButton from "@/components/common/buttons/defaultButton";
import Footer from "@/components/common/footer";
import Header from "@/components/common/header";
import Image from "next/image";
import ChatImg from "@/../public/images/Chat.svg";
import HomeCard from "@/components/homeCard";

export const runtime = "edge";

export default function Home() {
  return (
    <>
      <Header />
      <main className="mx-[20%] pt-44 pb-96 grid gap-56">
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
        <section className="flex flex-col items-center gap-16">
          <h2 className="text-4xl font-black">Amazing features</h2>
          <div className="flex gap-8">
            <HomeCard />
            <HomeCard />
            <HomeCard />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
