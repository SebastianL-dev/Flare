import Link from "next/link";
import { FaGithub, FaInstagram } from "react-icons/fa6";
import FooterButtonsSection from "./footer/footerButtonsSection";
import { permanentMarker } from "@/styles/fonts";
import FooterCard from "./footer/footerCard";
import SocialMediaBtn from "./buttons/socialMediaBtn";

export default function Footer() {
  return (
    <footer className="mt-auto bg-opacity-5 gap-16 grid bg-purple-400 pt-64">
      <section className="mx-[20%] flex items-start justify-between relative">
        <FooterCard />
        <aside className="flex flex-col gap-2">
          <Link
            className={`peer transition-all ${permanentMarker.className} text-4xl hover:-rotate-[4deg] w-min hover:scale-110 ease-message-button duration-300`}
            href={"/"}
            aria-label="Home logo"
          >
            Fl<span className="text-purple-500">a</span>re
            <span className="text-purple-500">!</span>
          </Link>
          <p className="max-w-80 text-white text-opacity-50">
            Talk with friends or meet new people! Save your chats by creating an
            account, or join rooms to chat without signing up...
          </p>
        </aside>
        <nav className="flex gap-24" aria-label="Footer navigation">
          <FooterButtonsSection
            tittle="Flare"
            buttons={[
              { text: "Download", link: "" },
              { text: "Chat", link: "" },
              { text: "Create account", link: "" },
              { text: "Rooms", link: "" },
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
              { text: "Contact", link: "" },
            ]}
          />
        </nav>
      </section>

      <section className="flex justify-between mx-[20%] items-center text-neutral-300 border-t-[1px] border-white border-opacity-15 py-8">
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
