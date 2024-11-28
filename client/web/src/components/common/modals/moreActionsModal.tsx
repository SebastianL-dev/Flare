import { useEffect, useState } from "react";
import DefaultButton from "../buttons/defaultButton";

export default function MoreActionsModal({
  show,
  hideModal,
}: {
  show: boolean;
  hideModal: () => void;
}) {
  const [visibility, setVisibility] = useState<string>("opacity-0");
  const [size, setSize] = useState<string>("scale-75");

  // Hide and show modal
  useEffect(() => {
    if (!show) {
      setVisibility("flex opacity-0");
      setSize("scale-75");
      setTimeout(() => {
        setVisibility("hidden");
      }, 200);
    } else {
      setVisibility("flex opacity-0");
      setSize("scale-75");
      setTimeout(() => {
        setVisibility("opacity-100 flex");
        setSize("scale-100");
      }, 35);
    }
  }, [show]);

  return (
    <dialog
      className={`absolute ${visibility} flex items-center justify-center bg-black bg-opacity-30 backdrop-blur-sm w-full h-screen z-30 transition-all ease-linear duration-200`}
    >
      <div
        className={`flex ${size} mx-4 transition-all ease-button duration-200 flex-col gap-10 bg-purple-950 bg-opacity-30 rounded-2xl p-8 items-center justify-center border-2 border-white border-opacity-15`}
      >
        <div className="flex flex-col gap-4 justify-center items-center">
          <span className="text-white text-4xl font-extrabold text-center">
            Don&apos;t have an account?
          </span>
          <p className="text-white text-opacity-60 font-medium text-center max-w-[450px]">
            Create an account to feel Flare&apos;s full experience. Send images
            and videos, record audios, reply messages and more!
          </p>
        </div>
        <form
          className="flex gap-4 w-fit justify-center max-[350px]:flex-col"
          method="dialog"
        >
          <DefaultButton
            text="Register"
            link="chat/account"
            aria="Go to register page button"
            color="purple"
          />
          <button
            className="flex max-[350px]:w-full bg-white justify-center hover:bg-opacity-25 border-white text-white hover:shadow-button-hover-white shadow-button-default-white self-center hover:text-purple-100 bg-opacity-10 border-2 h-min px-7 py-2 rounded-full font-bold items-center relative overflow-hidden group default-transition duration-500"
            onClick={hideModal}
          >
            Close
          </button>
        </form>
      </div>
    </dialog>
  );
}
