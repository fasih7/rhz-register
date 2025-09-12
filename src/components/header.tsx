import { useNavigate } from "react-router-dom";
export function Header() {
  const navigate = useNavigate();
  return (
    <header
      style={{ backgroundColor: "#2c8949" }}
      className="rounded-b-xl w-full"
    >
      <nav className="flex items-center justify-between px-12 py-4.5">
        {/* Logo */}
        <div
          className="flex items-center space-x-3"
          onClick={() => navigate("/")}
        >
          <img
            src="https://kad.pulse.gop.pk:5000/assets/img/pulse-logo-Light.png"
            alt="RHZ Logo"
            className="h-14 w-auto"
          />
        </div>

        {/* Menu */}
        <ul className="flex space-x-10 text-white text-sm font-medium tracking-wide">
          <li
            className="cursor-pointer hover:text-green-200"
            onClick={() => navigate("/registers")}
          >
            📑 Registers
          </li>
          <li className="cursor-pointer hover:text-green-200">LOGIN</li>
        </ul>
      </nav>
    </header>
  );
}
