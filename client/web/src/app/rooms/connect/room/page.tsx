"use client";

import { useServerContext } from "@/contexts/serverCtx";
import { IMessageData } from "@/interfaces/messageData";
import getDate from "@/utils/getDate";
import { useSearchParams } from "next/navigation";
import { FormEvent, useEffect, useRef, useState } from "react";
import { BiSolidSend } from "react-icons/bi";
import { FaPlus } from "react-icons/fa6";
import { IoPersonCircleOutline } from "react-icons/io5";
import { RiEmojiStickerLine } from "react-icons/ri";
import { useRouter } from "next/navigation";

export const runtime = "edge";

export default function RoomChat() {
  // Variables
  const [sendMessage, setSendMessage] = useState<string>("");
  const [messages, setMessages] = useState<IMessageData[]>([]);

  const chatRef = useRef<HTMLDivElement>(null);
  const URLParams = useSearchParams();
  const { socket } = useServerContext();
  const router = useRouter();

  const correctJoin = sessionStorage.getItem("canJoin");

  // Recieve messages from the server
  useEffect(() => {
    socket?.on("recieveMessage", (data) =>
      setMessages((messagesData) => [...messagesData, data])
    );

    return () => {
      socket?.off("recieveMessage");
    };
  }, [socket]);

  // Auto scroll to bottom
  useEffect(() => {
    chatRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Check if the user join correctly to the room
  useEffect(() => {
    if (correctJoin != "true") {
      router.push("/rooms/connect/join");
    } else {
      sessionStorage.removeItem("canJoin");
    }
  }, [router]);

  // Send message to the server
  const SendMessage = () => {
    if (sendMessage != "") {
      socket?.emit("sendMessage", {
        userName: URLParams.get("user"),
        roomid: URLParams.get("roomid"),
        message: sendMessage,
        date: Date(),
      });

      setSendMessage("");
    }
  };

  // Render page
  return (
    <main className="flex justify-center h-full w-full">
      <section className="flex w-full h-full justify-center">
        <article className="h-[100%_-_margin] flex flex-col my-12 max-w-[800px] max-[920px]:border-0 max-[920px]:my-0 max-[920px]:max-w-full gap-2 bg-chat-card border-2 border-white border-opacity-10 rounded-xl w-full overflow-hidden">
          <div className="flex flex-col gap-1 overflow-y-scroll px-4 h-full chat-scroll mt-4">
            {messages.map((message: IMessageData, index) => {
              const messageStyle =
                URLParams.get("user") == message.userName ? true : false;

              const previousMessage = index > 0 ? messages[index - 1] : null;
              const lastUserMessage = messages[index + 1];

              const messageProfile =
                previousMessage?.userName == message.userName &&
                previousMessage?.message
                  ? "hidden"
                  : "";

              const messageProps =
                lastUserMessage?.userName == message.userName &&
                lastUserMessage?.message
                  ? true
                  : false;

              const messageMargin = messageStyle
                ? previousMessage?.userName == message.userName &&
                  previousMessage?.message
                  ? "mr-10"
                  : ""
                : previousMessage?.userName == message.userName &&
                  previousMessage?.message
                ? "ml-10"
                : "";

              return (
                <>
                  {message.message ? (
                    <div className="flex flex-col gap-1">
                      <div
                        key={index}
                        className={`flex gap-2 justify-start items-start h-fit ${
                          index == 0 ? "max-sm:mt-[75px]" : ""
                        } ${messageStyle ? "flex-row-reverse" : ""}`}
                      >
                        <IoPersonCircleOutline
                          className={`min-h-8 min-w-8 text-neutral-500 ${messageProfile}`}
                        />
                        <div
                          className={`flex gap-0 flex-col py-2 px-4 backdrop-blur-sm  ${
                            messageStyle
                              ? `items-end ${
                                  messageProps
                                    ? "rounded-l-xl"
                                    : "rounded-s-xl rounded-b-xl"
                                } ml-[30%] ${messageMargin} bg-purple-500 bg-opacity-20`
                              : `items-start ${
                                  messageProps
                                    ? "rounded-r-xl"
                                    : "rounded-e-xl rounded-b-xl"
                                } mr-[30%] ${messageMargin} bg-neutral-800 bg-opacity-50`
                          }`}
                        >
                          <span
                            className={`text-white text-opacity-40 text-sm font-bold ${messageProfile}`}
                          >
                            {messageStyle ? "You" : `${message.userName}`}
                          </span>
                          <p className="text-white">{message.message}</p>
                        </div>
                      </div>

                      <div
                        className={`flex gap-2 justify-start items-start h-fit mb-4 ${
                          messageProps ? "hidden" : ""
                        } ${messageStyle ? "flex-row-reverse" : ""}`}
                      >
                        <time
                          className={`flex gap-0 flex-col rounded-b-xl backdrop-blur-sm text-xs text-white text-opacity-30 ${
                            messageStyle
                              ? `items-end mx-10`
                              : `items-start mx-10`
                          }`}
                        >
                          {getDate({ date: message.date })}
                        </time>
                      </div>
                    </div>
                  ) : (
                    <div className="flex justify-center text-neutral-300 bg-purple-500 bg-opacity-10 rounded-lg py-1 mb-4">
                      <span className="text-purple-500 font-bold">
                        {message.userName.charAt(0).toUpperCase() +
                          message.userName.slice(1)}
                      </span>{" "}
                      &nbsp;
                      <p>has joined the chat, say hello! :)</p>
                    </div>
                  )}
                </>
              );
            })}

            <div ref={chatRef} />
          </div>

          <div className="flex w-full h-fit p-4 bg-purple-700 border-t-2 border-white bg-opacity-10 border-opacity-10">
            <form
              className="bg-purple-950 bg-opacity-25 flex px-4 py-2 gap-4 rounded-xl w-full self-end items-center"
              onSubmit={(e: FormEvent) => {
                e.preventDefault();
                SendMessage();
              }}
              action="Send message"
            >
              <div className="flex gap-2">
                <button className="bg-neutral-300 group bg-opacity-10 rounded-full p-2 hover:bg-opacity-10 hover:-rotate-90 hover:scale-105 transition-all ease-message-button duration-[.4s]">
                  <FaPlus className="h-5 w-5 text-white text-opacity-60 group-hover:text-opacity-80 transition-all ease-linear" />
                </button>
                <button className=" hover:scale-105 group transition-all ease-message-button duration-[.4s]">
                  <RiEmojiStickerLine className="h-7 w-7 text-white text-opacity-60 group-hover:text-opacity-80 transition-all ease-linear" />
                </button>
              </div>
              <input
                className="bg-transparent w-full placeholder:text-purple-100 outline-none placeholder:select-none placeholder:text-opacity-30"
                type="text"
                placeholder="Type your message"
                onChange={(e) => setSendMessage(e.target.value)}
                value={sendMessage}
              />
              <button
                className="bg-purple-500 rounded-full p-2 hover:-rotate-45 hover:scale-110 transition-all ease-message-button duration-[.4s] hover:shadow-button-hover"
                type="button"
                onClick={SendMessage}
              >
                <BiSolidSend className="h-5 w-5" />
              </button>
            </form>
          </div>
        </article>
      </section>
    </main>
  );
}
