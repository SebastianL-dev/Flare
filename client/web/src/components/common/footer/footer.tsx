import Link from "next/link";
import { FaGithub, FaInstagram } from "react-icons/fa6";
import FooterButtonsSection from "./footerButtonsSection";
import FooterCard from "./footerCard";
import SocialMediaBtn from "../buttons/socialMediaButton";
import Image from "next/image";
import TextLogoWhite from "@/../public/images/logos/svg/Text-Logo-White.svg";

export default function Footer() {
  return (
    <footer className="mt-auto bg-opacity-5 gap-16 grid bg-purple-400 pt-64">
      <section className="mx-[20%] max-[1400px]:mx-[10%] max-[1150px]:mx-[5%] max-lg:mx-[20%] max-md:mx-[5%] max-lg:flex-col max-lg:gap-12 flex items-start justify-between relative">
        <FooterCard />
        <aside className="flex flex-col gap-4 max-lg:items-center max-lg:pb-4 max-lg:border-b-2 max-[400px]:items-start border-purple-400 border-opacity-30">
          <Link className={`text-4xl w-fit`} href={"/"} aria-label="Home logo">
            <Image
              width={130}
              height={130}
              src={TextLogoWhite}
              alt="Flare's logo with text in white"
            />
          </Link>
          <p className="max-w-80 text-white text-opacity-50 max-lg:max-w-full max-lg:text-center max-[400px]:text-left">
            Talk with friends or meet new people! Save your chats by creating an
            account, or join rooms to chat without signing up...
          </p>
        </aside>
        <nav
          className="flex gap-24 max-lg:w-full max-lg:gap-0 max-lg:justify-between max-[400px]:flex-col max-[400px]:gap-8"
          aria-label="Footer navigation"
        >
          <FooterButtonsSection
            tittle="Flare"
            buttons={[
              { text: "Download", link: "" },
              { text: "Chat", link: "/chat" },
              { text: "Create account", link: "" },
              { text: "Rooms", link: "/rooms" },
            ]}
          />
          <FooterButtonsSection
            tittle="What is Flare?"
            buttons={[
              { text: "Blog", link: "" },
              { text: "Features", link: "" },
            ]}
          />
          <FooterButtonsSection
            tittle="Support"
            buttons={[
              { text: "Help", link: "" },
              { text: "FAQ", link: "" },
              { text: "Contact", link: "/team" },
            ]}
          />
        </nav>
      </section>

      <section className="flex justify-between mx-[20%] max-[1400px]:mx-[10%] max-[1150px]:mx-[5%] max-lg:mx-[20%] max-md:mx-[5%] items-center text-neutral-300 border-t-[1px] border-white border-opacity-15 py-8">
        <span className="text-sm">
          Made with ❤️ by{" "}
          <Link
            className="font-bold text-purple-400 hover:text-opacity-65 transition-all ease-linear duration-200"
            href={"https://github.com/SebastianL-dev"}
            target="blank"
            rel="noopener noreferrer"
            aria-label="Sebastián Lozano's GitHub"
          >
            Sebastián Lozano
          </Link>
        </span>
        <ul className="flex gap-4" aria-label="Social media links">
          <SocialMediaBtn
            link="https://www.instagram.com/sebastianlozano086"
            icon={
              <FaInstagram className="w-9 h-9 text-white text-opacity-35 hover:scale-[1.15] hover:text-opacity-80 duration-200 transition-all ease-linear cursor-pointer" />
            }
            social="Instagram"
          />
          <SocialMediaBtn
            link="https://github.com/SebastianL-dev/Flare"
            icon={
              <FaGithub className="w-9 h-9 text-white text-opacity-35 hover:scale-[1.15] hover:text-opacity-80 duration-200 transition-all ease-linear cursor-pointer" />
            }
            social="GitHub"
          />
        </ul>
      </section>
    </footer>
  );
}
