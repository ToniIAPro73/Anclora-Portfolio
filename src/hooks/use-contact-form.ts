import { useState, useCallback } from "react";
import { ContactFormData } from "@/types";

export const useContactForm = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    budget: 5000000,
    interest: "investment",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Load saved data on mount
  const loadInitialData = useCallback(() => {
    if (typeof window === "undefined") return;
    const savedData = localStorage.getItem("anclora_lead_data");
    if (savedData) {
      try {
        const parsed = JSON.parse(savedData);
        setFormData({
          name: parsed.name || "",
          email: parsed.email || "",
          phone: parsed.phone || "",
          budget: parsed.budget || 5000000,
          interest: parsed.interest || "investment",
          message: parsed.message || "",
        });
      } catch {
        // Use defaults if parsing fails
      }
    }
  }, []);

  const updateField = useCallback(
    (field: keyof ContactFormData, value: any) => {
      setFormData((prev) => ({ ...prev, [field]: value }));
    },
    [],
  );

  const validateForm = useCallback(() => {
    if (!formData.name.trim()) return false;
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) return false;
    if (!formData.phone.trim()) return false;
    return true;
  }, [formData]);

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();

      if (!validateForm()) {
        throw new Error("Form validation failed");
      }

      setIsSubmitting(true);

      // Save to localStorage
      const leadData = {
        ...formData,
        timestamp: new Date().toISOString(),
      };
      localStorage.setItem("anclora_lead_data", JSON.stringify(leadData));

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      setIsSubmitting(false);
      setIsSuccess(true);
    },
    [formData, validateForm],
  );

  const resetForm = useCallback(() => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      budget: 5000000,
      interest: "investment",
      message: "",
    });
    setIsSuccess(false);
  }, []);

  return {
    formData,
    isSubmitting,
    isSuccess,
    loadInitialData,
    updateField,
    validateForm,
    handleSubmit,
    resetForm,
  };
};
