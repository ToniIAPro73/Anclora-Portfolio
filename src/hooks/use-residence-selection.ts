import { useState, useCallback } from "react";
import { ResidenceUnit } from "@/types";
import { residenceUnits } from "@/data/residences";

export const useResidenceSelection = () => {
  const [selectedUnit, setSelectedUnit] = useState<ResidenceUnit>(
    residenceUnits[0],
  );
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const selectUnit = useCallback((unit: ResidenceUnit) => {
    setSelectedUnit(unit);
  }, []);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("es-ES", {
      style: "currency",
      currency: "EUR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  const getUnitFeatures = (features: string[]) => {
    const featureLabels = {
      seaView: "Vista al Mar",
      mountainView: "Vista a la Montaña",
      privatePool: "Piscina Privada",
      solarium: "Solarium",
      parking: "Parking",
      storage: "Trastero",
    };

    return features.map(
      (feature) =>
        featureLabels[feature as keyof typeof featureLabels] || feature,
    );
  };

  return {
    selectedUnit,
    residenceUnits,
    selectUnit,
    formatPrice,
    getUnitFeatures,
    isSubmitting,
    setIsSubmitting,
    isSuccess,
    setIsSuccess,
  };
};
