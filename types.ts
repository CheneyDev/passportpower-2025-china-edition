export enum Region {
  ASIA = "亚洲",
  AFRICA = "非洲",
  EUROPE = "欧洲",
  AMERICAS_OCEANIA = "美洲与大洋洲"
}

export enum VisaType {
  MUTUAL_FREE = "互免签证",
  VISA_FREE = "免签",
  VOA = "落地签 (VOA)",
  ETA = "电子旅行许可/电子签",
  OTHER = "其他"
}

export interface CountryData {
  id: string;
  name: string;
  flag: string;
  region: Region;
  type: VisaType;
  days: string;
  cost?: string;
  note?: string;
  coordinates: [number, number]; // [Longitude, Latitude]
}

export interface StatSummary {
  total: number;
  mutual: number;
  free: number;
  voa: number;
}