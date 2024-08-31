export default function NavButton({ text }: { text: string }) {
  return (
    <li className="py-1 px-4 cursor-pointer text-neutral-300 font-semibold hover:text-white shadow-white transition-all ease-linear">
      {text}
    </li>
  );
}
