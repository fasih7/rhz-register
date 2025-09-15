import { useEffect, useState } from "react";
import Map from "../components/map";
import { MainButton } from "./utils/Button";
import { DropdownMenu } from "./utils/Dropdown";
import { MapPin, FileText, TrendingUp, CheckCircle } from "lucide-react";
import {
  districts,
  mouzaData,
  mouzaZoom,
  tehsilsData,
} from "../shared/static.data";
// import { useRegisterForm } from "../hooks/useRegisterForm";

export function HeroSection() {
  const [currentBounds, setCurrentBounds] = useState<undefined | string>(
    undefined
  );
  const [formData, setFormData] = useState({
    district: "",
    tehsil: "",
    mouza: "",
  });

  const updateField = (field: string, value: string) => {
    if (field === "district") {
      setCurrentBounds(tehsilsData.extent[0].extent);
      return setFormData({ district: value, tehsil: "", mouza: "" });
    }
    if (field === "tehsil") {
      setCurrentBounds(mouzaData.extent[0].extent);
      return setFormData((prev) => ({ ...prev, [field]: value, mouza: "" }));
    }
    setCurrentBounds(mouzaZoom.extent[0].extent);
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const isFormValid = formData.district && formData.tehsil && formData.mouza;

  // Original hook code (commented out for future use)
  // const { formData, updateField, isFormValid } = useRegisterForm();

  useEffect(() => {
    setCurrentBounds("BOX(69.12 27.50,75.57 34.20)");
  }, []);

  // Convert data to dropdown options
  const districtOptions = districts.data.map((district) => ({
    value: district.id.toString(),
    label: district.name,
  }));

  const tehsilOptions = tehsilsData.data.map((tehsil) => ({
    value: tehsil.id?.toString() || "",
    label: tehsil.name,
  }));

  const mouzaOptions = mouzaData.data.map((mouza) => ({
    value: mouza.id?.toString() || "",
    label: mouza.name,
  }));

  return (
    <main className="flex-1">
      {/* Hero Section with Background Pattern */}
      <section className="relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-white to-blue-50"></div>
        <div
          className="absolute inset-0 opacity-50"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2316a34a' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="animate-fade-in">
              {/* Main Heading */}
              <h1 className="text-4xl md:text-5xl font-extrabold text-green-900 mb-4">
                RHZ & Intiqal Register
              </h1>
              <p className="text-gray-700 text-lg mb-8">
                Manage District, Tehsil, Mouza with Professional Indexing
              </p>

              {/* Feature Highlights */}
              {/* <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                <div className="flex items-center space-x-3 p-3 bg-white rounded-lg shadow-sm border border-gray-100">
                  <div className="p-2 bg-green-100 rounded-lg">
                    <MapPin className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">
                      Geographic
                    </p>
                    <p className="text-xs text-gray-500">Mapping</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-white rounded-lg shadow-sm border border-gray-100">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <FileText className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">Digital</p>
                    <p className="text-xs text-gray-500">Records</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-white rounded-lg shadow-sm border border-gray-100">
                  <div className="p-2 bg-purple-100 rounded-lg">
                    <TrendingUp className="w-4 h-4 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">
                      Analytics
                    </p>
                    <p className="text-xs text-gray-500">Insights</p>
                  </div>
                </div>
              </div> */}

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <MainButton mainText="📋 RHZ Register" variant="primary" />
                <MainButton
                  mainText="📄 Intiqal Register"
                  variant="secondary"
                />
              </div>

              {/* Location Selection Form */}
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <MapPin className="w-5 h-5 text-green-600 mr-2" />
                  Select Location
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
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
                </div>

                {/* Create Register Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 mt-6">
                  <MainButton
                    mainText="Create RHZ Register"
                    variant="primary"
                    disabled={!isFormValid}
                    className="flex-1"
                  />
                  <MainButton
                    mainText="Create Intiqal Register"
                    variant="secondary"
                    disabled={!isFormValid}
                    className="flex-1"
                  />
                </div>
              </div>

              {/* Stats */}
              {/* <div className="grid grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-2xl font-bold text-green-600">50+</div>
                  <div className="text-sm text-gray-500">Districts</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-600">500+</div>
                  <div className="text-sm text-gray-500">Tehsils</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-600">5000+</div>
                  <div className="text-sm text-gray-500">Mouzas</div>
                </div>
              </div> */}
            </div>

            {/* Right Map Section */}
            <div className="animate-slide-in">
              <div className="relative">
                {/* Map Container with Enhanced Styling */}
                <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
                  {/* <div className="bg-gradient-to-r from-green-600 to-green-700 px-6 py-4">
                    <h3 className="text-white font-semibold flex items-center">
                      <MapPin className="w-5 h-5 mr-2" />
                      Interactive Map View
                    </h3>
                  </div> */}
                  <div className="h-96 lg:h-[500px]">
                    <Map bounds={currentBounds || undefined} />
                  </div>
                </div>

                {/* Map Overlay Info */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Selected Area:</span>
                      <span className="font-medium text-gray-900">
                        {formData.district && formData.tehsil && formData.mouza
                          ? `${formData.district} → ${formData.tehsil} → ${formData.mouza}`
                          : "Select location to view details"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
