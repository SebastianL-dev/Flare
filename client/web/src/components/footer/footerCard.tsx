import DefaultButton from "../common/buttons/defaultButton";

export default function FooterCard() {
  return (
    <article className="flex flex-col items-center py-12 footer gap-10 absolute inset-0 h-fit -top-[calc(220%_+_96px_)] max-lg:-top-[calc(90%_+_96px_)] max-lg:py-4 max-lg:px-4 max-[400px]:-top-[calc(45%_+_96px_)] rounded-xl ">
      <section className="flex flex-col gap-4">
        <h2 className="font-black text-center text-4xl max-lg:text-2xl">
          Still scrolling? <br /> Let&apos;s go to the party!
        </h2>
        <p className="text-center text-lg max-w-[580px] text-white text-opacity-85 max-lg:text-base">
          Maybe you should stop scrolling... you already reach the end of this
          page, but you can continue the party with just one click!
        </p>
      </section>

      <DefaultButton
        text="Let's Chat"
        color="white"
        aria="Start chatting now"
        link="/"
      />
    </article>
  );
}
