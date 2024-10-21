import { useEffect, useState } from "react";
import { BiMessageSquareError } from "react-icons/bi";

export function TextInput({
  text,
  errTxt,
  change,
  errorHandler,
}: {
  text: string;
  errTxt: string;
  change: (value: string) => void;
  errorHandler: boolean;
}) {
  // Variables
  const [value, setValue] = useState<string>("");
  const [isFocus, setIsFocus] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const style =
    value.length == 0
      ? "text-opacity-35"
      : !isFocus
      ? "text-opacity-0"
      : "text-opacity-35";

  const errorStyle = error
    ? "opacity-70 translate-y-9"
    : "opacity-0 translate-y-12";

  // Set error on send void form
  useEffect(() => {
    setError(errorHandler);
  }, [errorHandler]);

  return (
    <div className="flex relative max-sm:w-max flex-col gap-2 before:content-[''] before:absolute before:left-[50%] before:translate-x-[-50%] before:w-[65%] hover:before:bg-purple-500 before:bg-white max-sm:before:w-full before:bg-opacity-25 focus-within:before:bg-purple-500 focus-within:before:w-[100%] transition-all ease-linear before:transition-all before:ease-linear before:duration-200 before:h-0.5 before:rounded-full before:-bottom-0.5">
      <input
        type="text"
        className="bg-transparent flex relative px-1 py-0.5 outline-none peer text-neutral-300 text-center transition-all ease-linear"
        onChange={(e) => {
          change(e.target.value);
          setValue(e.target.value);
        }}
        onFocus={() => setIsFocus(true)}
        onBlur={() => {
          setIsFocus(false);
          setError(value.length === 0 ? true : false);
        }}
      />
      <span
        className={`absolute w-max px-1.5 py-0.5 select-none text-white ${style} -z-10 peer-focus-within:text-xs peer-focus-within:-translate-y-5 left-[50%] translate-x-[-50%] peer-focus-within:px-0.5 transition-all ease-bounce duration-500`}
      >
        {text}
      </span>
      <div
        className={`flex items-center gap-1.5 absolute w-max px-1.5 py-0.5 ${errorStyle} left-[50%] translate-x-[-50%] text-red-500 error-anim -z-10`}
      >
        <BiMessageSquareError />
        <p className="font-bold text-xs">{errTxt}</p>
      </div>
    </div>
  );
}
