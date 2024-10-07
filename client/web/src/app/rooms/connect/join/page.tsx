"use client";

import { FormEvent, useState } from "react";
import { TextInput } from "@/components/inputs";

import { useServerContext } from "@/contexts/serverCtx";
import { useRouter } from "next/navigation";

export default function CreateChat() {
  // Variables
  const [username, setUsername] = useState<string>("");
  const [room, setRoom] = useState<string>("");

  // Router
  const router = useRouter();

  // Server conection with server context
  const { socket } = useServerContext();

  // Emit a socket action to join in a room
  const JoinRoom = (e: React.MouseEvent | FormEvent) => {
    if (username != "" && room != "") {
      socket?.emit("joinRoom", {
        userName: username,
        roomid: room,
      });
      router.push(`/rooms/connect/room?roomid=${room}&user=${username}`);
    } else {
      e.preventDefault();
    }
  };

  // Render page
  return (
    <main className="flex justify-center items-center flex-col gap-16 h-full w-full">
      <section>
        <article className="grid gap-12 bg-join-card max-w-[600px] border-2 bg-opacity-25 border-white border-opacity-10 shadow-card p-10 rounded-2xl backdrop-blur-sm shadow-card">
          <header className="flex flex-col gap-4 items-center">
            <h1 className="font-black text-4xl text-center">
              Join to the party!{" "}
              <span className="text-purple-500">Conversation</span> is waiting
              for you!
            </h1>
            <p className="w-full text-neutral-400 text-center">
              Join a room to talk with your friends now! In rooms your chats
              never will be saved, to save all of your conversations{" "}
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
            <fieldset className="flex gap-8">
              <TextInput
                text="Username"
                errTxt={"Who are you today?"}
                change={setUsername}
              />
              <TextInput
                text="Room ID"
                errTxt={"Secret key is missing!"}
                change={setRoom}
              />
            </fieldset>
            <button
              type="submit"
              onClick={(e) => JoinRoom(e)}
              className="font-bold px-8 py-2 text-neutral-300 hover:text-white transition-all ease-linear duration-300 flex w-fit bg-white bg-opacity-10 rounded-full button-hover shadow-button-default hover:shadow-button-hover hover:bg-purple-500"
            >
              Join!
            </button>
          </form>
        </article>
      </section>
    </main>
  );
}
