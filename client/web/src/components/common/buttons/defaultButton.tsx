import { FaArrowRight } from "react-icons/fa6";

export default function DefaultButton({
  text,
  color,
  aria,
}: {
  text: string;
  color: string;
  aria: string;
}) {
  const style =
    color == "purple"
      ? "bg-purple-500 hover:bg-opacity-30 hover:text-purple-100 border-purple-500 text-neutral-200 hover:shadow-button-hover-1 shadow-button-default"
      : "bg-white hover:bg-opacity-25 border-white text-white hover:shadow-button-hover-white shadow-button-default-white";

  return (
    <button
      className={`flex self-center ${style} bg-opacity-10 border-2 h-min px-7 py-2 rounded-full font-bold items-center relative overflow-hidden group default-transition duration-500`}
      aria-label={aria}
    >
      <span className=" transition-all ease-linear group-hover:-translate-x-2">
        {text}
      </span>
      <FaArrowRight className="w-4 h-4 transition-all ease-linear absolute top-1/2 -translate-y-1/2 -right-2 opacity-0 group-hover:right-3 group-hover:opacity-100" />
    </button>
  );
}
