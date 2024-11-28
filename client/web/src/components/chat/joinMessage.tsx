import { IMessageData } from "@/interfaces/messageData";

export default function JoinMessage({
  message,
  index,
}: {
  message: IMessageData;
  index: number;
}) {
  return (
    <div
      className={`flex justify-center text-neutral-300 bg-purple-500 bg-opacity-10 rounded-full px-2 py-1 mb-4 ${
        index == 0 ? "max-sm:mt-[75px]" : ""
      }`}
      key={index}
    >
      <span className="text-purple-500 font-bold">{message.userName}</span>{" "}
      &nbsp;
      <p>has joined the chat, say hello! :)</p>
    </div>
  );
}
