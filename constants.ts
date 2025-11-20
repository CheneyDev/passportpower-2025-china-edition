import { CountryData, Region, VisaType } from './types';

export const GEO_URL = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

export const COUNTRIES: CountryData[] = [
  // --- ASIA ---
  {
    id: "THA",
    name: "泰国",
    flag: "🇹🇭",
    region: Region.ASIA,
    type: VisaType.MUTUAL_FREE,
    days: "30 天",
    note: "永久互免，每180天累计不超过90天",
    coordinates: [100.9925, 15.8700]
  },
  {
    id: "SGP",
    name: "新加坡",
    flag: "🇸🇬",
    region: Region.ASIA,
    type: VisaType.MUTUAL_FREE,
    days: "30 天",
    note: "入境前需填写电子入境卡 (SG Arrival Card)",
    coordinates: [103.8198, 1.3521]
  },
  {
    id: "MYS",
    name: "马来西亚",
    flag: "🇲🇾",
    region: Region.ASIA,
    type: VisaType.VISA_FREE,
    days: "30 天",
    note: "需提前填写数字入境卡 (MDAC)",
    coordinates: [101.9758, 4.2105]
  },
  {
    id: "KAZ",
    name: "哈萨克斯坦",
    flag: "🇰🇿",
    region: Region.ASIA,
    type: VisaType.MUTUAL_FREE,
    days: "30 天",
    note: "每180天累计不超过90天",
    coordinates: [66.9237, 48.0196]
  },
  {
    id: "ARE",
    name: "阿联酋",
    flag: "🇦🇪",
    region: Region.ASIA,
    type: VisaType.MUTUAL_FREE,
    days: "30 天",
    note: "免费，可付费延期",
    coordinates: [53.8478, 23.4241]
  },
  {
    id: "QAT",
    name: "卡塔尔",
    flag: "🇶🇦",
    region: Region.ASIA,
    type: VisaType.MUTUAL_FREE,
    days: "30 天",
    note: "免费",
    coordinates: [51.1839, 25.3548]
  },
  {
    id: "GEO",
    name: "格鲁吉亚",
    flag: "🇬🇪",
    region: Region.ASIA,
    type: VisaType.VISA_FREE,
    days: "30 天",
    note: "每180天累计不超过90天",
    coordinates: [43.3569, 42.3154]
  },
  {
    id: "UZB",
    name: "乌兹别克斯坦",
    flag: "🇺🇿",
    region: Region.ASIA,
    type: VisaType.VISA_FREE,
    days: "30 天",
    note: "2025年新政",
    coordinates: [64.5853, 41.3775]
  },
  {
    id: "IRN",
    name: "伊朗",
    flag: "🇮🇷",
    region: Region.ASIA,
    type: VisaType.VISA_FREE,
    days: "21 天",
    note: "单方面免签",
    coordinates: [53.6880, 32.4279]
  },
  {
    id: "KOR_JEJU",
    name: "济州岛 (韩国)",
    flag: "🇰🇷",
    region: Region.ASIA,
    type: VisaType.VISA_FREE,
    days: "30 天",
    note: "仅限济州岛，不能进入韩国本土",
    coordinates: [126.5312, 33.4996]
  },
  {
    id: "IDN",
    name: "印度尼西亚",
    flag: "🇮🇩",
    region: Region.ASIA,
    type: VisaType.VOA,
    days: "30 天",
    cost: "约 $35",
    note: "可延期一次",
    coordinates: [113.9213, -0.7893]
  },
  {
    id: "LAO",
    name: "老挝",
    flag: "🇱🇦",
    region: Region.ASIA,
    type: VisaType.VOA,
    days: "30 天",
    cost: "$20-40",
    coordinates: [102.4955, 19.8563]
  },
  {
    id: "KHM",
    name: "柬埔寨",
    flag: "🇰🇭",
    region: Region.ASIA,
    type: VisaType.VOA,
    days: "30 天",
    cost: "约 $30",
    note: "推荐电子签 (E-visa)",
    coordinates: [104.9910, 12.5657]
  },
  {
    id: "NPL",
    name: "尼泊尔",
    flag: "🇳🇵",
    region: Region.ASIA,
    type: VisaType.VOA,
    days: "15-90 天",
    cost: "免费",
    note: "Gratis Visa (免签证费)",
    coordinates: [84.1240, 28.3949]
  },
  {
    id: "LKA",
    name: "斯里兰卡",
    flag: "🇱🇰",
    region: Region.ASIA,
    type: VisaType.VISA_FREE,
    days: "30 天",
    note: "试行免签证费，需提前ETA或落地办",
    coordinates: [80.7718, 7.8731]
  },
  {
    id: "MDV",
    name: "马尔代夫",
    flag: "🇲🇻",
    region: Region.ASIA,
    type: VisaType.VISA_FREE,
    days: "30 天",
    note: "免费落地视同免签",
    coordinates: [73.2207, 3.2028]
  },
  {
    id: "BHR",
    name: "巴林",
    flag: "🇧🇭",
    region: Region.ASIA,
    type: VisaType.VOA,
    days: "14/30 天",
    cost: "$15-70",
    coordinates: [50.5577, 26.0667]
  },
  {
    id: "JOR",
    name: "约旦",
    flag: "🇯🇴",
    region: Region.ASIA,
    type: VisaType.VOA,
    days: "30 天",
    cost: "约 $56",
    note: "持 Jordan Pass 可免签证费",
    coordinates: [36.2384, 30.5852]
  },
  {
    id: "VNM",
    name: "越南",
    flag: "🇻🇳",
    region: Region.ASIA,
    type: VisaType.ETA,
    days: "30-90 天",
    cost: "约 $25",
    note: "推荐电子签，落地签需批文",
    coordinates: [108.2772, 14.0583]
  },

  // --- AFRICA ---
  {
    id: "MAR",
    name: "摩洛哥",
    flag: "🇲🇦",
    region: Region.AFRICA,
    type: VisaType.VISA_FREE,
    days: "90 天",
    coordinates: [-7.0926, 31.7917]
  },
  {
    id: "TUN",
    name: "突尼斯",
    flag: "🇹🇳",
    region: Region.AFRICA,
    type: VisaType.VISA_FREE,
    days: "90 天",
    note: "需出示酒店预订单和往返机票",
    coordinates: [9.5375, 33.8869]
  },
  {
    id: "MUS",
    name: "毛里求斯",
    flag: "🇲🇺",
    region: Region.AFRICA,
    type: VisaType.MUTUAL_FREE,
    days: "60 天",
    coordinates: [57.5522, -20.3484]
  },
  {
    id: "SYC",
    name: "塞舌尔",
    flag: "🇸🇨",
    region: Region.AFRICA,
    type: VisaType.MUTUAL_FREE,
    days: "30 天",
    coordinates: [55.4920, -4.6796]
  },
  {
    id: "EGY",
    name: "埃及",
    flag: "🇪🇬",
    region: Region.AFRICA,
    type: VisaType.VOA,
    days: "30 天",
    cost: "约 $25",
    note: "需携带$2000现金或等值货币备查",
    coordinates: [30.8025, 26.8206]
  },
  {
    id: "TZA",
    name: "坦桑尼亚",
    flag: "🇹🇿",
    region: Region.AFRICA,
    type: VisaType.VOA,
    days: "90 天",
    cost: "约 $50",
    coordinates: [34.8888, -6.3690]
  },
  {
    id: "KEN",
    name: "肯尼亚",
    flag: "🇰🇪",
    region: Region.AFRICA,
    type: VisaType.ETA,
    days: "90 天",
    cost: "约 $30",
    note: "需申请 eTA",
    coordinates: [37.9062, -0.0236]
  },
  {
    id: "MDG",
    name: "马达加斯加",
    flag: "🇲🇬",
    region: Region.AFRICA,
    type: VisaType.VOA,
    days: "15-60 天",
    cost: "€0-35",
    coordinates: [46.8691, -18.7669]
  },
  {
    id: "AGO",
    name: "安哥拉",
    flag: "🇦🇴",
    region: Region.AFRICA,
    type: VisaType.VISA_FREE,
    days: "30 天",
    note: "需往返机票和酒店订单",
    coordinates: [17.8739, -11.2027]
  },
  {
    id: "MOZ",
    name: "莫桑比克",
    flag: "🇲🇿",
    region: Region.AFRICA,
    type: VisaType.VISA_FREE,
    days: "30 天",
    cost: "约 $10 手续费",
    coordinates: [35.5296, -18.6657]
  },

  // --- EUROPE ---
  {
    id: "SRB",
    name: "塞尔维亚",
    flag: "🇷🇸",
    region: Region.EUROPE,
    type: VisaType.MUTUAL_FREE,
    days: "30 天",
    coordinates: [21.0059, 44.0165]
  },
  {
    id: "BIH",
    name: "波黑",
    flag: "🇧🇦",
    region: Region.EUROPE,
    type: VisaType.MUTUAL_FREE,
    days: "30 天",
    note: "每60天内累计停留30天",
    coordinates: [17.6791, 43.9159]
  },
  {
    id: "ARM",
    name: "亚美尼亚",
    flag: "🇦🇲",
    region: Region.EUROPE,
    type: VisaType.MUTUAL_FREE,
    days: "90 天",
    note: "每180天累计不超过90天",
    coordinates: [45.0382, 40.0691]
  },
  {
    id: "BLR",
    name: "白俄罗斯",
    flag: "🇧🇾",
    region: Region.EUROPE,
    type: VisaType.MUTUAL_FREE,
    days: "30 天",
    note: "一年内累计不超过90天",
    coordinates: [27.9534, 53.7098]
  },
  {
    id: "ALB",
    name: "阿尔巴尼亚",
    flag: "🇦🇱",
    region: Region.EUROPE,
    type: VisaType.VISA_FREE,
    days: "90 天",
    coordinates: [20.1683, 41.1533]
  },
  {
    id: "SMR",
    name: "圣马力诺",
    flag: "🇸🇲",
    region: Region.EUROPE,
    type: VisaType.MUTUAL_FREE,
    days: "90 天",
    note: "需申根签证经意大利入境",
    coordinates: [12.4578, 43.9424]
  },

  // --- AMERICAS & OCEANIA ---
  {
    id: "BRB",
    name: "巴巴多斯",
    flag: "🇧🇧",
    region: Region.AMERICAS_OCEANIA,
    type: VisaType.MUTUAL_FREE,
    days: "30 天",
    coordinates: [-59.5432, 13.1939]
  },
  {
    id: "BHS",
    name: "巴哈马",
    flag: "🇧🇸",
    region: Region.AMERICAS_OCEANIA,
    type: VisaType.MUTUAL_FREE,
    days: "30 天",
    note: "通常需从美国转机",
    coordinates: [-77.3963, 25.0343]
  },
  {
    id: "ECU",
    name: "厄瓜多尔",
    flag: "🇪🇨",
    region: Region.AMERICAS_OCEANIA,
    type: VisaType.MUTUAL_FREE,
    days: "90 天",
    note: "一年内累计不超过90天",
    coordinates: [-78.1834, -1.8312]
  },
  {
    id: "DMA",
    name: "多米尼克",
    flag: "🇩🇲",
    region: Region.AMERICAS_OCEANIA,
    type: VisaType.MUTUAL_FREE,
    days: "21 天",
    coordinates: [-61.3710, 15.4150]
  },
  {
    id: "CUB",
    name: "古巴",
    flag: "🇨🇺",
    region: Region.AMERICAS_OCEANIA,
    type: VisaType.VISA_FREE,
    days: "90 天",
    note: "需持有效护照",
    coordinates: [-77.7812, 21.5218]
  },
  {
    id: "FJI",
    name: "斐济",
    flag: "🇫🇯",
    region: Region.AMERICAS_OCEANIA,
    type: VisaType.MUTUAL_FREE,
    days: "30 天",
    coordinates: [178.0650, -17.7134]
  },
  {
    id: "TON",
    name: "汤加",
    flag: "🇹🇴",
    region: Region.AMERICAS_OCEANIA,
    type: VisaType.MUTUAL_FREE,
    days: "30 天",
    coordinates: [-175.1982, -21.1790]
  },
  {
    id: "WSM",
    name: "萨摩亚",
    flag: "🇼🇸",
    region: Region.AMERICAS_OCEANIA,
    type: VisaType.VISA_FREE,
    days: "60 天",
    coordinates: [-172.1046, -13.7590]
  },
  {
    id: "KIR",
    name: "基里巴斯",
    flag: "🇰🇮",
    region: Region.AMERICAS_OCEANIA,
    type: VisaType.VISA_FREE,
    days: "30 天",
    coordinates: [-157.3661, 1.8709]
  },
  {
    id: "MNP",
    name: "塞班岛 (美属)",
    flag: "🇲🇵",
    region: Region.AMERICAS_OCEANIA,
    type: VisaType.VISA_FREE,
    days: "45 天",
    note: "需填写 CNMI 申请表",
    coordinates: [145.6739, 15.0979]
  },
];