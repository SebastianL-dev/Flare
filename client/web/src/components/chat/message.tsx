import { IMessageData } from "@/interfaces/messageData";
import getDate from "@/utils/getDate";
import { useSearchParams } from "next/navigation";
import { IoPersonCircleOutline } from "react-icons/io5";

export default function Message({
  messages,
  message,
  index,
}: {
  messages: IMessageData[];
  message: IMessageData;
  index: number;
}) {
  const URLParams = useSearchParams();

  const messageStyle = URLParams.get("user") == message.userName ? true : false;

  const previousMessage = index > 0 ? messages[index - 1] : null;
  const lastUserMessage = messages[index + 1];

  const messageProfile =
    previousMessage?.userName == message.userName && previousMessage?.message
      ? "hidden"
      : "";

  const messageMargin = messageStyle
    ? previousMessage?.userName == message.userName && previousMessage?.message
      ? "mr-10"
      : ""
    : previousMessage?.userName == message.userName && previousMessage?.message
    ? "ml-10"
    : "";

  const messageProps =
    lastUserMessage?.userName == message.userName && lastUserMessage?.message
      ? true
      : false;

  return (
    <div className="flex flex-col gap-1" key={index}>
      <div
        className={`flex gap-2 justify-start items-start h-fit ${
          index === 0 ? "max-sm:mt-[75px]" : ""
        } ${messageStyle ? "flex-row-reverse" : ""}`}
      >
        <IoPersonCircleOutline
          className={`min-h-8 min-w-8 text-neutral-500 ${messageProfile}`}
        />
        <div
          className={`flex gap-0 flex-col py-2 px-4 backdrop-blur-sm max-w-96 max-[550px]:max-w-52 w-auto  ${
            messageStyle
              ? `items-end ${
                  messageProps
                    ? "rounded-l-xl rounded-r-[4px]"
                    : "rounded-s-xl rounded-b-xl rounded-tr-[4px]"
                } ml-[30%] ${messageMargin} bg-purple-500 bg-opacity-20`
              : `items-start ${
                  messageProps
                    ? "rounded-r-xl rounded-l-[4px]"
                    : "rounded-e-xl rounded-b-xl rounded-tl-[4px]"
                } mr-[30%] ${messageMargin} bg-neutral-800 bg-opacity-50`
          }`}
        >
          <span
            className={`text-white text-opacity-40 text-sm font-bold ${messageProfile}`}
          >
            {messageStyle ? "You" : `${message.userName}`}
          </span>
          <p className="text-white max-w-full whitespace-pre-wrap w-fit break-words overflow-hidden">
            {message.message.trim()}
          </p>
        </div>
      </div>

      <div
        className={`flex gap-2 justify-start items-start h-fit mb-4 ${
          messageProps ? "hidden" : ""
        } ${messageStyle ? "flex-row-reverse" : ""}`}
      >
        <time
          className={`flex gap-0 flex-col rounded-b-xl backdrop-blur-sm text-xs text-white text-opacity-30 ${
            messageStyle ? `items-end mx-10` : `items-start mx-10`
          }`}
        >
          {getDate({ date: message.date })}
        </time>
      </div>
    </div>
  );
}
