import { useState, useCallback } from "react";
import type { RegisterFormData } from "../types";

export const useRegisterForm = (initialData?: Partial<RegisterFormData>) => {
  const [formData, setFormData] = useState<RegisterFormData>({
    district: "",
    tehsil: "",
    mouza: "",
    year: "",
    searchQuery: "",
    ...initialData,
  });

  const updateField = useCallback(
    (field: keyof RegisterFormData, value: string) => {
      setFormData((prev) => {
        const newData = { ...prev, [field]: value };

        // Reset dependent fields when parent field changes
        if (field === "district") {
          newData.tehsil = "";
          newData.mouza = "";
        } else if (field === "tehsil") {
          newData.mouza = "";
        }

        return newData;
      });
    },
    []
  );

  const resetForm = useCallback(() => {
    setFormData({
      district: "",
      tehsil: "",
      mouza: "",
      year: "",
      searchQuery: "",
    });
  }, []);

  const isFormValid =
    formData.district && formData.tehsil && formData.mouza && formData.year;

  return {
    formData,
    updateField,
    resetForm,
    isFormValid,
  };
};
