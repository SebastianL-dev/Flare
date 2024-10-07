import Image from "next/image";
import Logo from "@/../public/images/logos/svg/Logo-Purple.svg";
import Link from "next/link";
import SimpleNavButton from "../buttons/simpleNavButton";
import { TbFlare, TbHelpCircle } from "react-icons/tb";
import SimpleButton from "../buttons/simpleButton";
import { HiOutlineDownload } from "react-icons/hi";
import { FaUserGroup } from "react-icons/fa6";
import { MdOutlineAccountCircle, MdOutlineFileDownload } from "react-icons/md";
import { FaDoorOpen } from "react-icons/fa";
import { BsPeopleFill } from "react-icons/bs";

export default function SimpleHeader() {
  return (
    <header className="flex flex-col h-full w-fit bg-[#120022] bg-opacity-60 backdrop-blur-[6px] border-opacity-10 transition-all ease-linear duration-300 z-50 border-r-2 border-purple-500">
      <div className="flex h-full flex-col justify-between my-16 px-4 items-center">
        <Link
          className="hover:scale-110 transition-all ease-bounce duration-500"
          href={"/"}
          aria-label="Home Logo link"
        >
          <Image src={Logo} alt="Home Logo" width={30} height={38} />
        </Link>

        <nav className="flex items-center">
          <ul className="flex flex-col gap-4">
            <SimpleNavButton
              icon={<TbFlare className="w-6 h-6" />}
              aria="Discover"
              link="/"
            />
            <SimpleNavButton
              icon={<MdOutlineAccountCircle className="w-6 h-6" />}
              aria="Discover"
              link="/"
            />
            <SimpleNavButton
              icon={<FaDoorOpen className="w-6 h-6" />}
              aria="Discover"
              link="/"
            />
            <SimpleNavButton
              icon={<TbHelpCircle className="w-6 h-6" />}
              aria="Discover"
              link="/"
            />
            <SimpleNavButton
              icon={<BsPeopleFill className="w-6 h-6" />}
              aria="Discover"
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
      </div>
    </header>
  );
}
