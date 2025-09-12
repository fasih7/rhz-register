export function DropdownMenu({ options }: { options?: string[] }) {
  return (
    // <select className="border border-gray-300 rounded-lg px-4 py-2 text-sm shadow-sm focus:ring-2 focus:ring-green-400 focus:outline-none bg-white">
    <select className="flex-1 rounded-lg border border-gray-300 px-4 py-3 shadow-sm focus:ring-2 focus:ring-green-500 focus:outline-none bg-[#f5fbf2]">
      {options?.map((val) => (
        <option>{val}</option>
      ))}
      <option>Value 1</option>
      <option>Value 2</option>
      <option>Value 3</option>
    </select>
  );
}
