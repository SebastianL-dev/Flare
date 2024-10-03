import Link from "next/link";
import { FaGithub, FaInstagram } from "react-icons/fa6";
import SocialMediaBtn from "./common/buttons/socialMediaButton";

export default function SimpleFooter() {
  return (
    <footer className="mt-auto bg-opacity-5 gap-16 grid bg-purple-400 border-t-2 border-purple-500 border-opacity-20">
      <section className="flex justify-between mx-[20%] max-[1400px]:mx-[10%] max-[1150px]:mx-[5%] max-lg:mx-[20%] max-md:mx-[5%] items-center text-neutral-300 py-4">
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
              <FaInstagram className="w-8 h-8 text-white text-opacity-35 hover:scale-[1.15] hover:text-opacity-80 duration-200 transition-all ease-linear cursor-pointer" />
            }
            social="Instagram"
          />
          <SocialMediaBtn
            link="https://github.com/SebastianL-dev/Flare"
            icon={
              <FaGithub className="w-8 h-8 text-white text-opacity-35 hover:scale-[1.15] hover:text-opacity-80 duration-200 transition-all ease-linear cursor-pointer" />
            }
            social="GitHub"
          />
        </ul>
      </section>
    </footer>
  );
}
