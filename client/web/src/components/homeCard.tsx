import Link from "next/link";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { FaArrowRightFromBracket } from "react-icons/fa6";
import { HiMiniArrowUpRight } from "react-icons/hi2";
import {
  IoIosArrowDropright,
  IoIosArrowForward,
  IoMdArrowDropright,
} from "react-icons/io";

export default function HomeCard() {
  return (
    <article className="bg-neutral-900 border-2 border-neutral-800 rounded-xl p-4">
      <div className="grid gap-4">
        <header>
          <h1 className="font-bold text-lg">The Rooms - Fastest way to chat</h1>
        </header>
        <div className="flex flex-col gap-6">
          <p className="text-base text-white text-opacity-75">
            Did you know you can chat with friends without an account? With{" "}
            <span className="text-purple-500 font-bold text-opacity-100 cursor-pointer hover:text-opacity-70 transition-all ease-linear duration-300">
              rooms
            </span>
            , all you need is your name and a room ID to join a conversation
            with friends.
          </p>
          <Link
            className="flex w-fit items-center text-purple-500 hover:text-opacity-60 gap-1 transition-all ease-linear duration-300"
            href={"/"}
          >
            Learn more
            <HiMiniArrowUpRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </article>
  );
}
