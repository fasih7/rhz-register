import { BookOpen, LogIn } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface HeaderProps {
  className?: string;
}

export function Header({ className = "" }: HeaderProps) {
  const navigate = useNavigate();
  return (
    <header
      style={{ backgroundColor: "#2c8949" }}
      className={`rounded-b-xl w-full ${className}`}
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
        <div className="hidden md:flex items-center space-x-8">
          <button
            onClick={() => navigate("/registers")}
            className="flex items-center space-x-2 text-white hover:text-green-200 transition-colors duration-200 group"
          >
            <BookOpen className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
            <span className="font-medium">Registers</span>
          </button>

          <button className="flex items-center space-x-2 text-white hover:text-green-200 transition-colors duration-200 group">
            <LogIn className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
            <span className="font-medium">Login</span>
          </button>
        </div>
      </nav>
    </header>
  );
}
