import { useState } from "react";
import "./App.css";
import Map from "./components/map";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      style={{ backgroundColor: "#ceedcb" }}
      className="min-h-screen flex flex-col relative"
    >
      {/* Header */}
      <header
        style={{ backgroundColor: "#2c8949" }}
        className="rounded-b-xl w-full"
      >
        <nav className="flex items-center justify-between px-12 py-4.5">
          {/* Logo */}
          <div className="flex items-center space-x-3">
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
              onClick={() => setIsOpen(true)}
            >
              📑 Registers
            </li>
            <li className="cursor-pointer hover:text-green-200">LOGIN</li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="flex-1">
        <section className="container mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-12 px-8 py-16">
          {/* Left Content */}
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-green-900 mb-4">
              RHZ & Intiqal Register
            </h1>
            <p className="text-gray-700 text-lg mb-8">
              Manage District, Tehsil, Mouza with Professional Indexing
            </p>

            {/* Toggle Buttons */}
            <div className="flex flex-wrap gap-4 mb-8">
              <button className="bg-green-700 text-white px-6 py-3 rounded-lg font-semibold shadow hover:bg-green-800 transition">
                RHZ Register
              </button>
              <button className="border border-green-700 text-green-700 px-6 py-3 rounded-lg font-semibold hover:bg-green-50 transition">
                Intiqal Register
              </button>
            </div>

            {/* Dropdowns */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <select className="flex-1 rounded-lg border border-gray-300 px-4 py-3 shadow-sm focus:ring-2 focus:ring-green-500 focus:outline-none bg-[#f5fbf2]">
                <option>Select District</option>
              </select>
              <select className="flex-1 rounded-lg border border-gray-300 px-4 py-3 shadow-sm focus:ring-2 focus:ring-green-500 focus:outline-none bg-[#f5fbf2]">
                <option>Select Tehsil</option>
              </select>
              <select className="flex-1 rounded-lg border border-gray-300 px-4 py-3 shadow-sm focus:ring-2 focus:ring-green-500 focus:outline-none bg-[#f5fbf2]">
                <option>Select Mouza</option>
              </select>
            </div>

            {/* Create Buttons */}
            <div className="flex flex-wrap gap-4">
              <button className="bg-green-700 text-white px-6 py-3 rounded-lg font-semibold shadow hover:bg-green-800 transition">
                Create RHZ Register
              </button>
              <button className="border border-green-700 text-green-700 px-6 py-3 rounded-lg font-semibold hover:bg-green-50 transition">
                Create Intiqal Register
              </button>
            </div>
          </div>

          {/* Right Map Section */}
            <Map />

        </section>
      </main>

      {/* Footer */}
      <footer
        style={{ backgroundColor: "#f5fbf2" }}
        className="rounded-t-xl mt-12 w-full"
      >
        <div className="container mx-auto px-8 py-6 flex flex-col md:flex-row justify-between items-center text-gray-700 text-sm">
          <p className="mb-4 md:mb-0">
            © {new Date().getFullYear()} RHZ & Intiqal Register. All rights
            reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-green-700 transition">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-green-700 transition">
              Terms of Service
            </a>
            <a href="#" className="hover:text-green-700 transition">
              Contact
            </a>
          </div>
        </div>
      </footer>

      {/* Overlay */}
{isOpen && (
  <div
    className="fixed inset-0 bg-[#e6f4ec] bg-opacity-60 z-40"
    onClick={() => setIsOpen(false)}
  />
)}

{/* Sliding Panel - LEFT */}
<div
  className={`fixed top-0 left-0 h-full w-80 bg-[#f2f8ef] shadow-xl transform transition-transform duration-300 ease-in-out z-50 ${
    isOpen ? "translate-x-0" : "-translate-x-full"
  }`}
>
  {/* Panel Header */}
  <div className="flex justify-between items-center px-6 py-4 bg-[#2e8c4b]">
    <h2 className="text-lg font-bold text-white">📑 Registers</h2>
    <button
      onClick={() => setIsOpen(false)}
      className="text-gray-200 hover:text-white"
    >
      ✕
    </button>
  </div>

  {/* Search */}
  <div className="px-6 py-4 border-b border-green-200">
    <input
      type="text"
      placeholder="🔍 Search registers..."
      className="w-full border border-green-300 rounded-lg px-4 py-2 bg-white text-gray-800 focus:ring-2 focus:ring-green-400 focus:outline-none"
    />
  </div>
  
{/* Panel Content */}
<div className="p-6 space-y-6 overflow-y-auto h-[calc(100%-120px)]">
  {/* Dropdowns */}
  <div className="flex flex-col gap-4">

    {/* District  Dropdown */}
    <select className="border border-gray-300 rounded-lg px-4 py-2 text-sm shadow-sm focus:ring-2 focus:ring-green-400 focus:outline-none bg-white">
      <option>Select District</option>
      <option>Tehsil 1</option>
      <option>Tehsil 2</option>
      <option>Tehsil 3</option>
    </select>
    {/* Tehsil Dropdown */}
    <select className="border border-gray-300 rounded-lg px-4 py-2 text-sm shadow-sm focus:ring-2 focus:ring-green-400 focus:outline-none bg-white">
      <option>Select Tehsil</option>
      <option>Tehsil 1</option>
      <option>Tehsil 2</option>
      <option>Tehsil 3</option>
    </select>

    {/* Mouza Dropdown */}
    <select className="border border-gray-300 rounded-lg px-4 py-2 text-sm shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none bg-white">
      <option>Select Mouza</option>
      <option>Mouza 1</option>
      <option>Mouza 2</option>
      <option>Mouza 3</option>
    </select>

    {/* Year Dropdown */}
    <select className="border border-gray-300 rounded-lg px-4 py-2 text-sm shadow-sm focus:ring-2 focus:ring-purple-400 focus:outline-none bg-white">
      <option>Select Year</option>
      <option>2025</option>
      <option>2024</option>
      <option>2023</option>
      <option>2022</option>
    </select>
  </div>
</div>
</div>

    </div>
  );
}