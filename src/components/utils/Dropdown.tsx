import type { DropdownOption } from "../../types";
import { ChevronDown, Check } from "lucide-react";
import { useState, useRef, useEffect } from "react";

interface DropdownMenuProps {
  options?: DropdownOption[];
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  className?: string;
  disabled?: boolean;
  label?: string;
  error?: string;
}

export function DropdownMenu({
  options = [],
  placeholder = "Select an option",
  value = "",
  onChange,
  className = "",
  disabled = false,
  label,
  error,
}: DropdownMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const selectedOption = options.find((option) => option.value === value);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSelect = (optionValue: string) => {
    onChange?.(optionValue);
    setIsOpen(false);
  };

  return (
    <div className={`relative ${className}`} ref={dropdownRef}>
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-2">
          {label}
        </label>
      )}

      <div className="relative">
        <button
          type="button"
          onClick={() => !disabled && setIsOpen(!isOpen)}
          disabled={disabled}
          className={`
            w-full px-4 py-3 text-left bg-white border-2 rounded-xl shadow-sm
            transition-all duration-200 ease-in-out
            ${
              disabled
                ? "bg-gray-50 text-gray-400 cursor-not-allowed border-gray-200"
                : isOpen
                ? "border-green-500 ring-4 ring-green-500/20 shadow-lg"
                : "border-gray-200 hover:border-green-300 focus:border-green-500 focus:ring-4 focus:ring-green-500/20"
            }
            ${
              error
                ? "border-red-300 focus:border-red-500 focus:ring-red-500/20"
                : ""
            }
          `}
          aria-label={placeholder}
        >
          <div className="flex items-center justify-between">
            <span
              className={`${
                !selectedOption ? "text-gray-400" : "text-gray-900"
              } truncate`}
            >
              {selectedOption ? selectedOption.label : placeholder}
            </span>
            <ChevronDown
              className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${
                isOpen ? "rotate-180" : ""
              }`}
            />
          </div>
        </button>

        {isOpen && !disabled && (
          <div className="absolute z-50 w-full mt-1 bg-white border border-gray-200 rounded-xl shadow-xl max-h-60 overflow-auto">
            {options.length === 0 ? (
              <div className="px-4 py-3 text-gray-500 text-sm">
                No options available
              </div>
            ) : (
              options.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => handleSelect(option.value)}
                  className={`
                    w-full px-4 py-3 text-left hover:bg-green-50 transition-colors duration-150
                    flex items-center justify-between
                    ${
                      value === option.value
                        ? "bg-green-50 text-green-700"
                        : "text-gray-900"
                    }
                  `}
                >
                  <span className="truncate">{option.label}</span>
                  {value === option.value && (
                    <Check className="w-4 h-4 text-green-600 flex-shrink-0 ml-2" />
                  )}
                </button>
              ))
            )}
          </div>
        )}
      </div>

      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
    </div>
  );
}
