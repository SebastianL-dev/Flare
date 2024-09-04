import DefaultButton from "@/components/common/buttons/defaultButton";
import Footer from "@/components/common/footer";
import Header from "@/components/common/header";

export const runtime = "edge";

export default function Home() {
  return (
    <>
      <Header />
      <main className="mx-[20%] pt-64 pb-96">
        <div className="bg-purple-500 p-8 rounded-xl bg-opacity-5">
          <section className="max-w-[50%] flex flex-col gap-16">
            <div className="flex flex-col gap-4">
              <h1 className="font-black text-5xl max-w-[500px]">
                Chat with everyone when you want!
              </h1>
              <p className="max-w-[550px] text-neutral-400">
                Chat with friends? Meet new people? You can do everything rigth
                now. Who needs an account when you can use rooms to talk with
                firends?
              </p>
            </div>
            <div className="flex gap-8">
              <DefaultButton text="Start now!" color="purple" />
              <DefaultButton text="Start now!" color="white" />
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
