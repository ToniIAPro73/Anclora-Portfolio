import type { Language } from "@/types"

const DEFAULT_EUR_TO_GBP = 0.86
const SQM_TO_SQFT = 10.7639

const rounded = (value: number) => Math.round(value)

const resolveEurToGbpRate = () => {
  const envRate = Number(process.env.NEXT_PUBLIC_EUR_TO_GBP)

  if (!Number.isFinite(envRate) || envRate <= 0) {
    return DEFAULT_EUR_TO_GBP
  }

  return envRate
}

export const convertEurToGbp = (eurAmount: number) => eurAmount * resolveEurToGbpRate()

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
