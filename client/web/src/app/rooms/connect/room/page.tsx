"use client";

import { useServerContext } from "@/contexts/serverCtx";
import { IMessageData } from "@/interfaces/messageData";
import { useSearchParams } from "next/navigation";
import { FormEvent, useEffect, useMemo, useRef, useState } from "react";
import { BiSolidSend } from "react-icons/bi";
import { FaPlus } from "react-icons/fa6";
import { RiEmojiStickerLine } from "react-icons/ri";
import { useRouter } from "next/navigation";
import { AiFillAudio } from "react-icons/ai";
import MoreActionsModal from "@/components/common/modals/moreActionsModal";
import Message from "@/components/chat/message";
import JoinMessage from "@/components/chat/joinMessage";

export const runtime = "edge";

export default function RoomChat() {
  // Variables
  const [sendMessage, setSendMessage] = useState<string>("");
  const [messages, setMessages] = useState<IMessageData[]>([]);
  const [typing, setTyping] = useState<boolean>(false);
  const [typingName, setTypingName] = useState<string>("");
  const [typingStyle, setTypingStyle] = useState<string>("opacity-0");

  // Show modal
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const showModal = () => setModalVisible(true);
  const hideModal = () => setModalVisible(false);

  // Ref, router, url params and socket context
  const chatRef = useRef<HTMLDivElement>(null);
  const URLParams = useSearchParams();
  const { socket } = useServerContext();
  const router = useRouter();

  // Memo to detect when user can join to chat
  const correctJoin = useMemo(() => sessionStorage.getItem("canJoin"), []);

  // Recieve messages from the server
  useEffect(() => {
    socket?.on("recieveMessage", (data) =>
      setMessages((messagesData) => [...messagesData, data])
    );

    socket?.on("isTyping", (data) => {
      setTyping(data.typing);
      setTypingName(data.userName);
    });

    return () => {
      socket?.off("recieveMessage");
      socket?.off("isTyping");
    };
  }, [socket]);

  // Auto scroll to bottom
  useEffect(() => {
    chatRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Check if the user join correctly to the room
  useEffect(() => {
    correctJoin != "true"
      ? router.push("/rooms/connect/join")
      : sessionStorage.removeItem("canJoin");
  }, [router, correctJoin]);

  // Show user typing
  useEffect(() => {
    if (!typing) {
      setTypingStyle("opacity-0 flex");
      setTimeout(() => {
        setTypingStyle("hidden");
      }, 150);
    } else {
      setTypingStyle("opacity-0 flex");
      setTimeout(() => {
        setTypingStyle("opacity-100 flex");
      }, 1);
    }
  }, [typing]);

  // Send message to the server
  const SendMessage = () => {
    if (sendMessage.trim() !== "") {
      socket?.emit("sendMessage", {
        userName: URLParams.get("user"),
        roomId: URLParams.get("roomid"),
        message: sendMessage,
        date: Date(),
      });

      socket?.emit("typingMessage", {
        userName: URLParams.get("user"),
        roomId: URLParams.get("roomid"),
        typing: false,
      });

      setSendMessage("");
    }
  };

  // Detect when a user is typing
  const isTyping = (e: string) => {
    socket?.emit("typingMessage", {
      userName: URLParams.get("user"),
      roomId: URLParams.get("roomid"),
      typing: true,
    });

    if (e == "") {
      socket?.emit("typingMessage", {
        userName: URLParams.get("user"),
        roomId: URLParams.get("roomid"),
        typing: false,
      });
    }
  };

  // Render page
  return (
    <main className="flex justify-center h-full w-full">
      <MoreActionsModal show={modalVisible} hideModal={hideModal} />
      <section className="flex w-full h-full justify-center">
        <article className="relative h-[100%_-_margin] flex flex-col my-12 max-w-[800px] max-[920px]:border-0 max-[920px]:my-0 max-[920px]:max-w-full gap-2 bg-chat-card border-2 border-white border-opacity-10 rounded-xl w-full overflow-hidden">
          <div
            className={`absolute text-sm typing ${typingStyle} bottom-[92px] left-4 z-50 gap-2 items-center justify-center bg-white py-1 px-4 rounded-full bg-opacity-10 backdrop-blur-sm transition-all ease-linear duration-150`}
          >
            <span className="text-white text-opacity-50">
              {" "}
              <strong>{typingName}</strong> is typing
            </span>
            <div className="loader opacity-50"></div>
          </div>

          <div className="flex flex-col gap-1 overflow-y-scroll px-4 h-full chat-scroll mt-2">
            {messages.map((message: IMessageData, index) => {
              return (
                <>
                  {message.message ? (
                    <Message
                      messages={messages}
                      message={message}
                      index={index}
                    />
                  ) : (
                    <JoinMessage message={message} index={index} />
                  )}
                </>
              );
            })}

            <div ref={chatRef} />
          </div>

          <div className="flex w-full h-fit p-4 bg-purple-700 border-t-2 border-white bg-opacity-10 border-opacity-10">
            <form
              className="bg-purple-950 bg-opacity-25 flex p-2 gap-4 rounded-full w-full self-end items-center"
              onSubmit={(e: FormEvent) => {
                e.preventDefault();
                SendMessage();
              }}
              action="Send message"
            >
              <div className="flex gap-2">
                <button
                  className="bg-neutral-300 group bg-opacity-10 rounded-full p-2 hover:bg-opacity-10 hover:-rotate-90 hover:scale-105 transition-all ease-message-button duration-[.4s]"
                  type="button"
                  onClick={showModal}
                >
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
                onChange={(e) => {
                  setSendMessage(e.target.value);
                  isTyping(e.target.value);
                }}
                value={sendMessage}
              />
              <div className="relative flex w-9 h-9 items-center justify-center mr-2">
                <button
                  className={`absolute left-0 top-0 bg-purple-500 ${
                    sendMessage.trim() === ""
                      ? "opacity-0 scale-90 pointer-events-none"
                      : "opacity-100 scale-100"
                  } rounded-full p-2 hover:-rotate-45 hover:scale-110 transition-all ease-message-button duration-[.4s] hover:shadow-button-hover`}
                  type="button"
                  onClick={SendMessage}
                >
                  <BiSolidSend className="h-5 w-5" />
                </button>
                <button
                  className={`absolute left-0 top-0 bg-purple-500 ${
                    sendMessage.trim() === ""
                      ? "opacity-100 scale-100"
                      : "opacity-0 scale-0 pointer-events-none"
                  } rounded-full p-2 hover:scale-110 transition-all ease-message-button duration-[.4s] hover:shadow-button-hover`}
                  type="button"
                  onClick={showModal}
                >
                  <AiFillAudio className="h-5 w-5" />
                </button>
              </div>
            </form>
          </div>
        </article>
      </section>
    </main>
  );
}
