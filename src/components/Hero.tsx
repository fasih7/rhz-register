import { useEffect, useState } from "react";
import Map from "../components/map";
import { MainButton } from "./utils/Button";
import { DropdownMenu } from "./utils/Dropdown";
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
      <section className="container mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-12 px-8 py-16">
        {/* Left Content */}
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-green-900 mb-4">
            RHZ & Intiqal Register
          </h1>
          <p className="text-gray-700 text-lg mb-8">
            Manage District, Tehsil, Mouza with Professional Indexing
          </p>

          <div className="flex flex-wrap gap-4 mb-8">
            <MainButton mainText="RHZ Register" variant="primary" />
            <MainButton mainText="Intiqal Register" variant="secondary" />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
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

          <div className="flex flex-wrap gap-4">
            <MainButton
              mainText="Create RHZ Register"
              variant="primary"
              disabled={!isFormValid}
            />
            <MainButton
              mainText="Create Intiqal Register"
              variant="secondary"
              disabled={!isFormValid}
            />
          </div>
        </div>

        {/* Right Map Section */}
        <Map bounds={currentBounds || undefined} />
      </section>
    </main>
  );
}
