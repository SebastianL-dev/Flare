export default function getDate({ date }: { date: Date }) {
  const useDate = new Date(date);
  let hours = useDate.getHours();
  let minutes = useDate.getMinutes();

  let am_pm = hours >= 12 ? "pm" : "am";
  hours = hours % 12;
  hours = hours != 0 ? hours : 12;

  return `${hours}:${minutes < 10 ? "0" + minutes : minutes} ${am_pm}`;
}
