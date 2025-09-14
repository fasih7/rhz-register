import { useState } from "react";
import { DropdownMenu } from "../components/utils/Dropdown";
import {
  districts,
  tehsilsData,
  propertyAreaData,
} from "../shared/static.data";
// import { useRegisterForm } from "../hooks/useRegisterForm";

// Left Sidebar Component
function RegistersSidebar({
  formData,
  updateField,
  resetForm,
  isFormValid,
}: any) {
  // Convert data to dropdown options
  const districtOptions = districts.data.map((district) => ({
    value: district.id.toString(),
    label: district.name,
  }));

  const tehsilOptions = tehsilsData.data.map((tehsil) => ({
    value: tehsil.id?.toString() || "",
    label: tehsil.name,
  }));

  const mouzaOptions = propertyAreaData.data.map((mouza) => ({
    value: mouza.id.toString(),
    label: mouza.name,
  }));

  const yearOptions = [
    { value: "2025", label: "2025" },
    { value: "2024", label: "2024" },
    { value: "2023", label: "2023" },
    { value: "2022", label: "2022" },
    { value: "2021", label: "2021" },
  ];

  return (
    <div className="w-80 bg-white rounded-xl shadow-xl overflow-hidden h-fit">
      {/* Sidebar Header */}
      <div className="flex justify-between items-center px-6 py-4 bg-[#2e8c4b]">
        <h2 className="text-lg font-bold text-white">📑 Search Filters</h2>
      </div>

      {/* Search */}
      <div className="px-6 py-4 border-b border-green-200">
        <input
          type="text"
          placeholder="🔍 Search registers..."
          value={formData.searchQuery}
          onChange={(e) => updateField("searchQuery", e.target.value)}
          className="w-full border border-green-300 rounded-lg px-4 py-2 bg-white text-gray-800 focus:ring-2 focus:ring-green-400 focus:outline-none"
          aria-label="Search registers"
        />
      </div>

      {/* Sidebar Content */}
      <div className="p-6 space-y-6">
        {/* Dropdowns */}
        <div className="flex flex-col gap-4">
          <DropdownMenu
            options={districtOptions}
            placeholder="Select District"
            value={formData.district}
            onChange={(value) => updateField("district", value)}
          />
          <DropdownMenu
            options={tehsilOptions}
            placeholder="Select Tehsil"
            value={formData.tehsil}
            onChange={(value) => updateField("tehsil", value)}
            disabled={!formData.district}
          />
          <DropdownMenu
            options={mouzaOptions}
            placeholder="Select Mouza"
            value={formData.mouza}
            onChange={(value) => updateField("mouza", value)}
            disabled={!formData.tehsil}
          />
          <DropdownMenu
            options={yearOptions}
            placeholder="Select Year"
            value={formData.year}
            onChange={(value) => updateField("year", value)}
          />

          {/* Action Buttons */}
          <div className="flex gap-3 pt-4">
            <button
              onClick={resetForm}
              className="flex-1 px-4 py-2 border border-gray-300 text-sm font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              Reset
            </button>
            <button
              disabled={!isFormValid}
              className="flex-1 px-4 py-2 border border-transparent text-sm font-medium rounded-lg text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 disabled:bg-gray-300 disabled:cursor-not-allowed"
            >
              Search Registers
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// Register Book Placeholder Component
function RegisterBookPlaceholder() {
  return (
    <div className="flex-1 bg-white rounded-xl shadow-xl overflow-hidden">
      {/* Book Header */}
      <div className="flex justify-between items-center px-8 py-6 bg-gradient-to-r from-[#2e8c4b] to-[#3a9c5a]">
        <h2 className="text-2xl font-bold text-white">📖 Register Book</h2>
        <div className="flex items-center space-x-2 text-white">
          <span className="text-sm">Page 1 of 1</span>
        </div>
      </div>

      {/* Book Content Placeholder */}
      <div className="p-8 h-full flex flex-col items-center justify-center bg-gradient-to-br from-[#f8fdf9] to-[#f0f8f2]">
        <div className="text-center space-y-6">
          {/* Book Icon */}
          <div className="mx-auto w-24 h-24 bg-[#2e8c4b] rounded-full flex items-center justify-center">
            <svg
              className="w-12 h-12 text-white"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>

          {/* Placeholder Text */}
          <div className="space-y-3">
            <h3 className="text-2xl font-semibold text-gray-700">
              Register Book
            </h3>
            <p className="text-gray-500 max-w-md">
              This is where the register book will be displayed. You can
              navigate through pages, view register entries, and interact with
              the book content.
            </p>
          </div>

          {/* Navigation Placeholder */}
          <div className="flex items-center space-x-4 pt-4">
            <button
              className="px-6 py-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
              disabled
            >
              ← Previous
            </button>
            <div className="px-4 py-2 bg-[#2e8c4b] text-white rounded-lg">
              Page 1
            </div>
            <button
              className="px-6 py-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
              disabled
            >
              Next →
            </button>
          </div>

          {/* Additional Info */}
          <div className="mt-8 p-4 bg-white rounded-lg border border-gray-200 max-w-lg">
            <p className="text-sm text-gray-600 text-center">
              <strong>Coming Soon:</strong> Interactive register book with page
              navigation, search functionality, and detailed register entries.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Registers() {
  // Simple state management - keeping it simple for now
  const [formData, setFormData] = useState({
    searchQuery: "",
    district: "",
    tehsil: "",
    mouza: "",
    year: "",
  });

  const updateField = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const resetForm = () => {
    setFormData({
      searchQuery: "",
      district: "",
      tehsil: "",
      mouza: "",
      year: "",
    });
  };

  const isFormValid =
    formData.district && formData.tehsil && formData.mouza && formData.year;

  // Original hook code (commented out for future use)
  // const { formData, updateField, resetForm, isFormValid } = useRegisterForm();

  return (
    <div className="min-h-screen bg-[#f2f8ef]">
      <div className="container mx-auto px-2 py-8">
        {/* Two Column Layout */}
        <div className="flex gap-8 items-start">
          {/* Left Sidebar */}
          <RegistersSidebar
            formData={formData}
            updateField={updateField}
            resetForm={resetForm}
            isFormValid={isFormValid}
          />

          {/* Right Side - Register Book */}
          <RegisterBookPlaceholder />
        </div>
      </div>
    </div>
  );
}
