import { useState } from "react";
import { DropdownMenu } from "../components/utils/Dropdown";
import { MainButton } from "../components/utils/Button";
import {
  Search,
  Filter,
  RotateCcw,
  BookOpen,
  Calendar,
  MapPin,
  FileText,
  Download,
  Eye,
  Edit,
  Trash2,
} from "lucide-react";
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
    <div className="w-80 bg-white rounded-2xl shadow-xl overflow-hidden h-fit card-hover">
      {/* Sidebar Header */}
      <div className="bg-gradient-to-r from-green-600 to-green-700 px-6 py-5">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-white/20 rounded-lg">
            <Filter className="w-5 h-5 text-white" />
          </div>
          <h2 className="text-lg font-bold text-white">Search Filters</h2>
        </div>
      </div>

      {/* Search */}
      <div className="px-6 py-4 border-b border-gray-100 bg-gray-50">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search registers..."
            value={formData.searchQuery}
            onChange={(e) => updateField("searchQuery", e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl bg-white text-gray-800 focus:ring-2 focus:ring-green-500 focus:border-green-500 focus:outline-none transition-all duration-200"
            aria-label="Search registers"
          />
        </div>
      </div>

      {/* Sidebar Content */}
      <div className="p-6 space-y-6">
        {/* Dropdowns */}
        <div className="space-y-4">
          <DropdownMenu
            options={districtOptions}
            placeholder="Select District"
            value={formData.district}
            onChange={(value) => updateField("district", value)}
            label="District"
          />
          <DropdownMenu
            options={tehsilOptions}
            placeholder="Select Tehsil"
            value={formData.tehsil}
            onChange={(value) => updateField("tehsil", value)}
            disabled={!formData.district}
            label="Tehsil"
          />
          <DropdownMenu
            options={mouzaOptions}
            placeholder="Select Mouza"
            value={formData.mouza}
            onChange={(value) => updateField("mouza", value)}
            disabled={!formData.tehsil}
            label="Mouza"
          />
          <DropdownMenu
            options={yearOptions}
            placeholder="Select Year"
            value={formData.year}
            onChange={(value) => updateField("year", value)}
            label="Year"
          />

          {/* Action Buttons */}
          <div className="flex gap-3 pt-4">
            <MainButton
              mainText="Reset"
              variant="outline"
              size="sm"
              icon={<RotateCcw className="w-4 h-4" />}
              onClick={resetForm}
              className="flex-1"
            />
            <MainButton
              mainText="Search"
              variant="primary"
              size="sm"
              icon={<Search className="w-4 h-4" />}
              disabled={!isFormValid}
              className="flex-1"
            />
          </div>
        </div>

        {/* Quick Stats */}
        <div className="bg-gray-50 rounded-xl p-4 space-y-3">
          <h4 className="text-sm font-semibold text-gray-700 flex items-center">
            <FileText className="w-4 h-4 mr-2" />
            Quick Stats
          </h4>
          <div className="grid grid-cols-2 gap-3 text-xs">
            <div className="text-center">
              <div className="text-lg font-bold text-green-600">24</div>
              <div className="text-gray-500">Total Registers</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-blue-600">156</div>
              <div className="text-gray-500">Entries</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Register Book Component
function RegisterBookPlaceholder() {
  // Mock data for demonstration
  const mockRegisters = [
    {
      id: 1,
      type: "RHZ",
      district: "Islamabad",
      tehsil: "Islamabad",
      mouza: "Sector F-8",
      year: "2024",
      entries: 45,
      status: "Active",
    },
    {
      id: 2,
      type: "Intiqal",
      district: "Lahore",
      tehsil: "Lahore",
      mouza: "Gulberg",
      year: "2024",
      entries: 32,
      status: "Active",
    },
    {
      id: 3,
      type: "RHZ",
      district: "Karachi",
      tehsil: "East",
      mouza: "Malir",
      year: "2023",
      entries: 28,
      status: "Completed",
    },
    {
      id: 4,
      type: "Intiqal",
      district: "Rawalpindi",
      tehsil: "Rawalpindi",
      mouza: "Cantt",
      year: "2024",
      entries: 67,
      status: "Active",
    },
    {
      id: 5,
      type: "RHZ",
      district: "Peshawar",
      tehsil: "Peshawar",
      mouza: "University Town",
      year: "2023",
      entries: 23,
      status: "Completed",
    },
  ];

  return (
    <div className="flex-1 bg-white rounded-2xl shadow-xl overflow-hidden card-hover">
      {/* Book Header */}
      <div className="bg-gradient-to-r from-green-600 to-green-700 px-6 py-5">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-white/20 rounded-lg">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white">Register Book</h2>
              <p className="text-green-100 text-sm">
                Manage and view all registers
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <div className="text-right text-white">
              <div className="text-sm text-green-100">Total Registers</div>
              <div className="text-lg font-bold">{mockRegisters.length}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Toolbar */}
      <div className="px-6 py-4 bg-gray-50 border-b border-gray-200">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <MainButton
              mainText="Export All"
              variant="outline"
              size="sm"
              icon={<Download className="w-4 h-4" />}
            />
            <MainButton
              mainText="Create New"
              variant="primary"
              size="sm"
              icon={<FileText className="w-4 h-4" />}
            />
          </div>
          <div className="flex items-center space-x-2 text-sm text-gray-500">
            <Calendar className="w-4 h-4" />
            <span>Last updated: {new Date().toLocaleDateString()}</span>
          </div>
        </div>
      </div>

      {/* Register List */}
      <div className="p-6">
        <div className="space-y-4">
          {mockRegisters.map((register) => (
            <div
              key={register.id}
              className="bg-gray-50 rounded-xl p-4 hover:bg-gray-100 transition-colors duration-200 border border-gray-200"
            >
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <div
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        register.type === "RHZ"
                          ? "bg-blue-100 text-blue-800"
                          : "bg-purple-100 text-purple-800"
                      }`}
                    >
                      {register.type}
                    </div>
                    <div
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        register.status === "Active"
                          ? "bg-green-100 text-green-800"
                          : "bg-gray-100 text-gray-800"
                      }`}
                    >
                      {register.status}
                    </div>
                  </div>

                  <div className="space-y-1">
                    <div className="flex items-center space-x-2 text-gray-600">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm">
                        {register.district} → {register.tehsil} →{" "}
                        {register.mouza}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-600">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">Year: {register.year}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-600">
                      <FileText className="w-4 h-4" />
                      <span className="text-sm">
                        {register.entries} entries
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <button
                    className="p-2 text-gray-400 hover:text-green-600 transition-colors duration-200"
                    title="View"
                  >
                    <Eye className="w-4 h-4" />
                  </button>
                  <button
                    className="p-2 text-gray-400 hover:text-blue-600 transition-colors duration-200"
                    title="Edit"
                  >
                    <Edit className="w-4 h-4" />
                  </button>
                  <button
                    className="p-2 text-gray-400 hover:text-red-600 transition-colors duration-200"
                    title="Delete"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center space-x-4 mt-8 pt-6 border-t border-gray-200">
          <MainButton
            mainText="Previous"
            variant="outline"
            size="sm"
            disabled
          />
          <div className="flex items-center space-x-2">
            <span className="px-3 py-1 bg-green-600 text-white rounded-lg text-sm font-medium">
              1
            </span>
            <span className="px-3 py-1 text-gray-600 hover:bg-gray-100 rounded-lg text-sm cursor-pointer">
              2
            </span>
            <span className="px-3 py-1 text-gray-600 hover:bg-gray-100 rounded-lg text-sm cursor-pointer">
              3
            </span>
          </div>
          <MainButton mainText="Next" variant="outline" size="sm" />
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
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-50"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2316a34a' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      ></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 relative">
        {/* Page Header */}
        <div className="mb-8">
          <div className="flex items-center space-x-3 mb-4">
            <div className="p-3 bg-green-100 rounded-xl">
              <BookOpen className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                Register Management
              </h1>
              <p className="text-gray-600">
                Search, view, and manage RHZ and Intiqal registers
              </p>
            </div>
          </div>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Left Sidebar */}
          <div className="lg:col-span-1">
            <RegistersSidebar
              formData={formData}
              updateField={updateField}
              resetForm={resetForm}
              isFormValid={isFormValid}
            />
          </div>

          {/* Right Side - Register Book */}
          <div className="lg:col-span-3">
            <RegisterBookPlaceholder />
          </div>
        </div>
      </div>
    </div>
  );
}
