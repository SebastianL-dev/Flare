import NavButton from "./navButton";

export default function TopHeader() {
  return (
    <header>
      <div className="flex justify-between py-4 px-auto w-auto">
        <h1>Flare</h1>
        <nav>
          <ul className="flex gap-2">
            {/* <li>Home</li>
          <li>Start chatting</li>
          <li>Create an account</li>
          <li>Rooms</li>
          <li>Team</li> */}
            <NavButton text="Home" />
          </ul>
        </nav>
        <button>Download</button>
      </div>
    </header>
  );
}
