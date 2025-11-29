export const NUMERIC_TO_ID: Record<string, string> = {
  "764": "THA", "702": "SGP", "458": "MYS", "398": "KAZ", "784": "ARE",
  "634": "QAT", "268": "GEO", "860": "UZB", "364": "IRN", "410": "KOR_JEJU",
  "360": "IDN", "418": "LAO", "116": "KHM", "524": "NPL", "144": "LKA",
  "462": "MDV", "048": "BHR", "400": "JOR", "704": "VNM", "504": "MAR",
  "788": "TUN", "480": "MUS", "690": "SYC", "818": "EGY", "834": "TZA",
  "404": "KEN", "450": "MDG", "024": "AGO", "508": "MOZ", "688": "SRB",
  "070": "BIH", "051": "ARM", "112": "BLR", "008": "ALB", "674": "SMR",
  "052": "BRB", "044": "BHS", "218": "ECU", "212": "DMA", "192": "CUB",
  "242": "FJI", "776": "TON", "882": "WSM", "296": "KIR", "580": "MNP"
};

export const ID_TO_NUMERIC = Object.fromEntries(
  Object.entries(NUMERIC_TO_ID).map(([numericId, countryId]) => [countryId, numericId])
);
