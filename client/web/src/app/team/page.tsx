import Header from "@/components/header/header";
import Image from "next/image";
import Profile from "@/assets/images/V2.png";
import SimpleFooter from "@/components/common/footer/simpleFooter";
import { TbMail } from "react-icons/tb";
import ProfileButton from "@/components/common/buttons/profileButton";
import { FaGithub, FaInstagram } from "react-icons/fa6";

export default function Team() {
  return (
    <>
      <Header />
      <main className="mx-[20%] max-[1400px]:mx-[10%] max-[1150px]:mx-[5%] max-lg:mx-[20%] max-md:mx-[5%] h-full grid">
        <section className="flex h-full w-full items-center">
          <article className="flex profile-card backdrop-blur-sm rounded-xl p-[3px] w-full">
            <div className="bg-black flex w-full rounded-xl p-8 bg-opacity-70 gap-12 relative overflow-hidden">
              <div className="ml-36 flex profile-card-image z-10 h-min self-center">
                <Image
                  className="rounded-full border-4 border-white border-opacity-20 image-profile"
                  src={Profile}
                  width={300}
                  height={300}
                  alt="Profile image"
                />
              </div>

              <div className="flex flex-col flex-grow justify-between">
                <div className="flex flex-col mb-8">
                  <h1 className="text-white text-3xl font-bold">
                    Sebastián Lozano
                  </h1>
                  <span className="text-white text-opacity-60 text-xl mb-4">
                    Lead Developer
                  </span>

                  <div className="flex gap-0.5 items-center text-sm justify-center text-white text-opacity-50 bg-white w-fit bg-opacity-10 px-3 py-0.5 rounded-full">
                    <span className="mb-0.5">Colombia</span>
                  </div>

                  <div className="flex flex-col gap-2 text-white text-opacity-80">
                    <p className="mt-4">
                      Hey there 👋! Thanks for using Flare, Contact me if you
                      have any problem or question about Flare, I'm always happy
                      to help.
                    </p>
                    <p>
                      Enjoy Flare, and don't forget to star ⭐ the project on
                      GitHub if you like it!
                    </p>
                  </div>
                </div>

                <ul className="flex gap-4">
                  <ProfileButton
                    text="Email"
                    link="mailto: sebastianl2.dev@gmail.com"
                    icon={<TbMail className="w-5 h-5" />}
                  />
                  <ProfileButton
                    text="GitHub"
                    link="https://github.com/SebastianL-dev"
                    icon={<FaGithub className="w-5 h-5" />}
                  />
                  <ProfileButton
                    text="Instagram"
                    link="https://www.instagram.com/sebastianlozano086"
                    icon={<FaInstagram className="w-5 h-5" />}
                  />
                </ul>
              </div>
            </div>
          </article>
        </section>
      </main>
      <SimpleFooter />
    </>
  );
}
