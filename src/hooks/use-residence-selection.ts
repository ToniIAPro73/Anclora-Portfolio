import { useState } from "react"
import { residenceUnits } from "@/data/residence-units"
import type { ResidenceUnit } from "@/types"

export const useResidenceSelection = (units: ResidenceUnit[] = residenceUnits) => {
  const [selectedUnit, setSelectedUnit] = useState<ResidenceUnit>(units[0])

  return {
    units,
    selectedUnit,
    setSelectedUnit,
  }
}
