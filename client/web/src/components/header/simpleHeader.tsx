import Image from "next/image";
import Logo from "@/../public/images/logos/svg/Logo-Purple.svg";
import Link from "next/link";
import SimpleNavButton from "@/components/common/buttons/simpleNavButton";
import { TbFlare, TbHelpCircle } from "react-icons/tb";
import SimpleButton from "@/components/common/buttons/simpleButton";
import { MdOutlineAccountCircle, MdOutlineFileDownload } from "react-icons/md";
import { FaDoorOpen } from "react-icons/fa";
import { BsPeopleFill } from "react-icons/bs";

// TODO: Add show/hide animation to the header
export default function SimpleHeader() {
  return (
    <header className="flex sm:flex-col sm:h-full max-sm:fixed max-sm:w-full w-fit bg-[#120022] bg-opacity-60 backdrop-blur-[6px] border-opacity-10 transition-all ease-linear duration-300 z-50 sm:border-r-2 max-sm:border-b-2 border-purple-500">
      <div className="flex sm:h-full max-sm:w-[calc(100%_-_40px)] max-sm:mx-5 max-sm:py-4 sm:flex-col justify-between sm:my-16 sm:px-4 items-center">
        <Link
          className="hover:scale-110 transition-all ease-bounce duration-500"
          href={"/"}
          aria-label="Home Logo link"
        >
          <Image src={Logo} alt="Home Logo" width={30} height={38} />
        </Link>

        <nav className="flex items-center max-sm:hidden">
          <ul className="flex sm:flex-col gap-4">
            <SimpleNavButton
              icon={<TbFlare className="w-6 h-6" />}
              aria="Discover"
              link="/"
            />
            <SimpleNavButton
              icon={<MdOutlineAccountCircle className="w-6 h-6" />}
              aria="Chat"
              link="/chat"
            />
            <SimpleNavButton
              icon={<FaDoorOpen className="w-6 h-6" />}
              aria="Rooms"
              link="/rooms"
            />
            <SimpleNavButton
              icon={<TbHelpCircle className="w-6 h-6" />}
              aria="Support"
              link="/"
            />
            <SimpleNavButton
              icon={<BsPeopleFill className="w-6 h-6" />}
              aria="Team"
              link="/"
            />
          </ul>
        </nav>

        <SimpleButton
          icon={<MdOutlineFileDownload className="w-6 h-6" />}
          link="/"
          aria="Dowload"
          color="purple"
        />

        <div className="flex gap-8 sm:hidden">
          <input className="hidden" type="checkbox" id="checkbox" />
          <label
            htmlFor="checkbox"
            className="lg:hidden toggle w-8 h-fit self-center cursor-pointer flex flex-col justify-center gap-1 hover:scale-110 duration-500"
          >
            <div
              className="bars w-[60%] duration-300 h-1 bg-white rounded-full"
              id="bar1"
            ></div>
            <div
              className="bars w-full h-1 bg-white rounded-full duration-700"
              id="bar2"
            ></div>
            <div
              className="bars w-[60%] self-end duration-300 h-1 bg-white rounded-full"
              id="bar3"
            ></div>
          </label>
        </div>
      </div>
    </header>
  );
}
