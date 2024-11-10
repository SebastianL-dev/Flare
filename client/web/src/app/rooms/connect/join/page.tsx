"use client";

import { FormEvent, useState } from "react";
import { TextInput } from "@/components/inputs";

import { useServerContext } from "@/contexts/serverCtx";
import { useRouter } from "next/navigation";

export default function CreateChat() {
  // Variables
  const [username, setUsername] = useState<string>("");
  const [room, setRoom] = useState<string>("");
  const [error, setError] = useState<boolean>(false);

  const router = useRouter();
  const { socket } = useServerContext();

  // Emit a socket action to join in a room
  const JoinRoom = (e: React.MouseEvent | FormEvent) => {
    if (username != "" && room != "") {
      socket?.emit("joinRoom", {
        userName: username,
        roomId: room,
      });

      sessionStorage.setItem("canJoin", "true");
      router.push(`/rooms/connect/room?roomid=${room}&user=${username}`);
    } else {
      e.preventDefault();
      setError(true);
    }
  };

  // Render page
  return (
    <main className="flex justify-center items-center flex-col gap-16 h-full w-full">
      <section className="relative">
        <article className="grid gap-12 m-5 bg-join-card max-w-[600px] max-[550px]:p-4 border-2 bg-opacity-25 border-white border-opacity-10 p-10 rounded-2xl backdrop-blur-sm shadow-card">
          <header className="flex flex-col gap-4 items-center">
            <h1 className="font-black text-4xl text-center max-sm:text-3xl">
              Join to the party!{" "}
              <span className="text-purple-500">Conversation</span> is waiting
              for you!
            </h1>
            <p className="w-full text-neutral-400 text-center">
              Join a room to talk with your friends! Your chats never will be
              saved, to save all of your conversations{" "}
              <a className="font-bold text-purple-400 text-opacity-80 cursor-pointer transition-all ease-linear hover:text-opacity-70 ">
                Create an account
              </a>{" "}
              rigth now!
            </p>
          </header>
          <form
            onSubmit={(e: FormEvent) => {
              e.preventDefault();
              JoinRoom(e);
            }}
            action="/rooms/connecy/room"
            className="flex flex-col gap-16 items-center"
          >
            <fieldset className="flex gap-8 max-sm:flex-col max-sm:w-full max-sm:items-center">
              <TextInput
                text="Username"
                errTxt={"Who are you today?"}
                change={setUsername}
                errorHandler={error}
              />
              <TextInput
                text="Room ID"
                errTxt={"Secret key is missing!"}
                change={setRoom}
                errorHandler={error}
              />
            </fieldset>
            <button
              type="submit"
              className="flex self-center bg-purple-500 hover:bg-opacity-30 hover:text-purple-100 border-purple-500 text-neutral-200 hover:shadow-button-hover-1 shadow-button-default bg-opacity-10 border-2 h-min px-7 py-2 rounded-full font-bold items-center relative overflow-hidden group default-transition duration-500"
            >
              Join!
            </button>
          </form>
        </article>
      </section>
    </main>
  );
}
