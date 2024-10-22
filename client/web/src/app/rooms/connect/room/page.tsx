"use client";

import { useServerContext } from "@/contexts/serverCtx";
import { IMessageData } from "@/interfaces/messageData";
import getDate from "@/utils/getDate";
import { useSearchParams } from "next/navigation";
import { FormEvent, useEffect, useState } from "react";
import { BiSolidSend } from "react-icons/bi";
import { FaPlus } from "react-icons/fa6";
import { IoPersonCircleOutline } from "react-icons/io5";
import { RiEmojiStickerLine } from "react-icons/ri";

export const runtime = "edge";

export default function RoomChat() {
  // Variables
  const [sendMessage, setSendMessage] = useState<string>("");
  const [messages, setMessages] = useState<IMessageData[]>([]);

  const URLParams = useSearchParams();
  const { socket } = useServerContext();

  useEffect(() => {
    socket?.on("recieveMessage", (data) =>
      setMessages((messagesData) => [...messagesData, data])
    );

    return () => {
      socket?.off("recieveMessage");
    };
  }, [socket]);

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

  return (
    <main className="flex justify-center h-full w-full">
      <section className="h-[100%_-_margin] flex flex-col my-12 max-w-[800px] max-[920px]:border-0 max-[920px]:my-0 max-[920px]:max-w-full gap-4 bg-chat-card border-2 border-white border-opacity-10 p-6 rounded-xl w-full">
        <div className="flex flex-col gap-2 overflow-y-scroll pr-4 h-full chat-scroll">
          {messages.map((message: IMessageData, index) => {
            const messageStyle =
              URLParams.get("user") == message.userName ? true : false;

            return (
              <>
                {message.message ? (
                  <div
                    key={index}
                    className={`flex gap-2 justify-start items-start h-fit ${
                      messageStyle ? "flex-row-reverse" : ""
                    }`}
                  >
                    <IoPersonCircleOutline className="min-h-8 min-w-8 text-neutral-700 text-opacity-80" />
                    <div
                      className={`flex gap-0 flex-col bg-neutral-800 bg-opacity-55 py-2 px-4 rounded-b-xl backdrop-blur-sm ${
                        messageStyle
                          ? "items-end rounded-s-xl ml-[30%]"
                          : "items-start rounded-e-xl mr-[30%]"
                      }`}
                    >
                      <span className="text-white text-opacity-30 text-sm font-bold">
                        {messageStyle ? "You" : `${message.userName}`}
                      </span>
                      <p className="text-white text-opacity-90">
                        {message.message}
                      </p>
                      <time className="text-xs text-white text-opacity-15">
                        {getDate({ date: message.date })}
                      </time>
                    </div>
                  </div>
                ) : (
                  <div className="flex justify-center text-neutral-300 bg-purple-500 bg-opacity-10 rounded-lg py-1">
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
        </div>

        <form
          className="bg-purple-900 bg-opacity-15 flex px-4 py-2 gap-4 rounded-xl w-full self-end items-center"
          onSubmit={(e: FormEvent) => {
            e.preventDefault();
            SendMessage();
          }}
          action="Send message"
        >
          <div className="flex gap-2">
            <button className="bg-white group bg-opacity-5 rounded-full p-2 hover:bg-opacity-10 hover:-rotate-90 hover:scale-105 transition-all ease-message-button duration-[.4s]">
              <FaPlus className="h-5 w-5 text-white text-opacity-50 group-hover:text-opacity-70 transition-all ease-linear" />
            </button>
            <button className=" hover:scale-105 group transition-all ease-message-button duration-[.4s]">
              <RiEmojiStickerLine className="h-7 w-7 text-white text-opacity-40 group-hover:text-opacity-70 transition-all ease-linear" />
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
      </section>
    </main>
  );
}
