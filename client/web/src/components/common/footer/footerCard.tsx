import { FaArrowRight } from "react-icons/fa6";

export default function FooterCard() {
  return (
    <article className="flex flex-col items-center py-12 footer gap-10 absolute inset-0 h-fit -top-[calc(220%_+_96px_)] rounded-xl ">
      <section className="flex flex-col gap-4">
        <h1 className="font-black text-center text-4xl">
          Still scrolling? <br /> Let's go to the party!
        </h1>
        <p className="text-center text-lg max-w-[580px] text-white text-opacity-85">
          Maybe you should stop scrolling... you already reach the end of this
          page, but you can continue the party with just one click
        </p>
      </section>
      <button className="flex self-center shadow-button-default bg-white bg-opacity-10 hover:bg-opacity-20 border-2 border-white text-white h-min px-7 py-2 rounded-full font-bold items-center relative overflow-hidden group default-transition duration-500">
        <span className=" transition-all ease-linear group-hover:-translate-x-2">
          Let's chat
        </span>
        <FaArrowRight className="w-4 h-4 transition-all ease-linear absolute top-1/2 -translate-y-1/2 -right-2 opacity-0 group-hover:right-3 group-hover:opacity-100" />
      </button>
    </article>
  );
}
