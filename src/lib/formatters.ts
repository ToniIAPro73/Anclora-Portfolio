import type { Language } from "@/types"

const EUR_TO_GBP = 0.86
const SQM_TO_SQFT = 10.7639

const rounded = (value: number) => Math.round(value)

export const convertEurToGbp = (eurAmount: number) => eurAmount * EUR_TO_GBP

export const convertSqmToSqft = (sqm: number) => sqm * SQM_TO_SQFT

export const convertEurPerSqmToGbpPerSqft = (eurPerSqm: number) =>
  convertEurToGbp(eurPerSqm) / SQM_TO_SQFT

export const formatPriceFromEur = (lang: Language, eurAmount: number) => {
  if (lang === "es") {
    return `${new Intl.NumberFormat("es-ES").format(rounded(eurAmount))} €`
  }

  return `£ ${new Intl.NumberFormat("en-GB").format(rounded(convertEurToGbp(eurAmount)))}`
}

export const formatAreaFromSqm = (lang: Language, sqm: number) => {
  if (lang === "es") {
    return new Intl.NumberFormat("es-ES").format(rounded(sqm))
  }

  return new Intl.NumberFormat("en-GB").format(rounded(convertSqmToSqft(sqm)))
}
