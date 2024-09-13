import { FaArrowRight } from "react-icons/fa6";
import DefaultButton from "../buttons/defaultButton";

export default function FooterCard() {
  return (
    <article className="flex flex-col items-center py-12 footer gap-10 absolute inset-0 h-fit -top-[calc(220%_+_96px_)] rounded-xl ">
      <section className="flex flex-col gap-4">
        <h2 className="font-black text-center text-4xl">
          Still scrolling? <br /> Let's go to the party!
        </h2>
        <p className="text-center text-lg max-w-[580px] text-white text-opacity-85">
          Maybe you should stop scrolling... you already reach the end of this
          page, but you can continue the party with just one click!
        </p>
      </section>

      <DefaultButton
        text="Let's Chat"
        color="white"
        aria="Start chatting now"
      />
    </article>
  );
}
