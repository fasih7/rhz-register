import { DropdownMenu } from "../components/utils/Dropdown";

export function Registers() {
  return (
    <div className={`h-full w-80 bg-[#f2f8ef] shadow-xl`}>
      {/* Panel Header */}
      {/* <div className="flex justify-between items-center px-6 py-4 bg-[#2e8c4b]">
        <h2 className="text-lg font-bold text-white">📑 Registers</h2>
        <button
          onClick={() => setIsOpen(false)}
          className="text-gray-200 hover:text-white"
        >
          ✕
        </button>
      </div> */}

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
          <DropdownMenu options={["Select District"]} />
          <DropdownMenu options={["Select Tehsil"]} /> {/* Tehsil Dropdown */}
          <DropdownMenu options={["Select Mauza"]} /> {/* Mouza Dropdown */}
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
  );
}
