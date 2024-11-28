"use client";

import DefaultButton from "@/components/common/buttons/defaultButton";
import Footer from "@/components/common/footer/footer";
import Header from "@/components/common/header/header";

export default function Chat() {
  return (
    <>
      <Header />
      <main className="mx-[20%] max-[1400px]:mx-[10%] max-[1150px]:mx-[5%] max-lg:mx-[20%] max-md:mx-[5%] pt-44 pb-96 grid gap-60">
        <section className="my-16 rounded-xl flex items-center justify-between gap-8">
          <div className="max-w-[50%] flex flex-col gap-16 max-lg:max-w-full">
            <div className="flex flex-col gap-4">
              <h1 className="font-black text-5xl w-[500px] max-lg:w-full max-lg:text-center max-lg:text-4xl">
                Create an <span className="text-purple-500">account</span>,{" "}
                It&apos;s fast and easy!
              </h1>
              <p className="max-w-[550px] text-neutral-300 text-opacity-70 font-medium max-lg:max-w-full max-lg:text-center">
                Rooms are cool, but could be better...{" "}
                <strong className="text-white text-opacity-75">
                  Create an account
                </strong>{" "}
                now, save your chats, add friends,{" "}
                <strong className="text-white text-opacity-75">
                  make communities
                </strong>{" "}
                and more! Don&apos;t wait anymore and start your adventure!
              </p>
            </div>
            <div className="flex gap-8 max-lg:justify-center">
              <DefaultButton
                text="Sign in"
                color="purple"
                aria="Sign in to Flare"
                link="/chat/account"
              />
              <DefaultButton
                text="Register"
                color="white"
                aria="Create an account in Flare"
                link="/chat/account"
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
