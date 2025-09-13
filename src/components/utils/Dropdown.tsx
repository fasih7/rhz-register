import { useState } from "react";
import type { DropdownOption } from "../../types";

interface DropdownMenuProps {
  options?: DropdownOption[];
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  className?: string;
  disabled?: boolean;
}

export function DropdownMenu({
  options = [],
  placeholder = "Select an option",
  value,
  onChange,
  className = "",
  disabled = false,
}: DropdownMenuProps) {
  const [selectedValue, setSelectedValue] = useState(value || "");

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newValue = e.target.value;
    setSelectedValue(newValue);
    onChange?.(newValue);
  };

  return (
    <select
      value={selectedValue}
      onChange={handleChange}
      disabled={disabled}
      className={`flex-1 rounded-lg border border-gray-300 px-4 py-3 shadow-sm focus:ring-2 focus:ring-green-500 focus:outline-none bg-[#f5fbf2] disabled:bg-gray-100 disabled:cursor-not-allowed ${className}`}
      aria-label={placeholder}
    >
      <option value="" disabled>
        {placeholder}
      </option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}
