import LearnMoreButton from "./common/buttons/textButton";

export default function HomeInfo({
  icon,
  infoText,
  tittle,
  text,
  link,
  info,
  button,
}: {
  icon: React.ReactElement;
  infoText: string;
  tittle: string;
  text: string;
  link: string;
  info: string;
  button: string;
}) {
  return (
    <div className="max-w-1/2 w-1/2 flex flex-col gap-4 max-lg:w-full ">
      <div className="flex gap-2 opacity-50 items-center">
        <div className="flex bg-white bg-opacity-10 border-white border-2 border-opacity-50 rounded-md w-9 h-9 items-center justify-center">
          {icon}
        </div>
        <span>{infoText}</span>
      </div>
      <h2 className="text-4xl font-black">{tittle}</h2>
      <p className="text-white text-opacity-60">{text}</p>
      <LearnMoreButton link={link} info={info} text={button} />
    </div>
  );
}
