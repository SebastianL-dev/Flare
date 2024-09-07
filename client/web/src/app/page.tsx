import DefaultButton from "@/components/common/buttons/defaultButton";
import Footer from "@/components/common/footer";
import Header from "@/components/common/header";
import Image from "next/image";
import ChatImg from "@/../public/Chat.svg";

export const runtime = "edge";

export default function Home() {
  return (
    <>
      <Header />
      <main className="mx-[20%] pt-44 pb-96 grid gap-36">
        <section className="my-16 rounded-xl min-h-[600] flex items-center bg-card-right bg-opacity-5 justify-between gap-8 border-opacity-10">
          <div className="max-w-[50%] flex flex-col gap-16">
            <div className="flex flex-col gap-4">
              <h1 className="font-black text-5xl max-w-[500px]">
                Chat with <span className="text-purple-500">everyone</span> when
                you want!
              </h1>
              <p className="max-w-[550px] text-neutral-400 font-medium">
                Chat with friends? Meet new people? You can do everything rigth
                now. Who needs an account when you can use rooms?
              </p>
            </div>
            <div className="flex gap-8">
              <DefaultButton text="Start now!" color="purple" />
              <DefaultButton text="More" color="white" />
            </div>
          </div>
          <div className="flex flex-col gap-4 min-w-96">
            <Image
              className="image-shadow"
              width={"400"}
              height={"400"}
              src={ChatImg}
              alt=""
            />
          </div>
        </section>
        <section>
          <h2 className="">The rooms</h2>
        </section>
      </main>
      <Footer />
    </>
  );
}
