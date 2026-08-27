export const BRANCHES = [
  "Andián Atrio",
  "Andián Malta",
  "Andián La Gran Vía",
  "Gelú EDC",
  "Gelú Metrocentro",
  "Gelú Ramblas",
  "Eventos",
] as const;

export const money = (n: number) =>
  n.toLocaleString("en-US", { style: "currency", currency: "USD" });

export const salesTrend = [
  { day: "1", total: 6938 },
  { day: "3", total: 7215 },
  { day: "5", total: 6710 },
  { day: "7", total: 7490 },
  { day: "9", total: 7050 },
  { day: "11", total: 7680 },
  { day: "13", total: 7320 },
  { day: "15", total: 7560 },
  { day: "17", total: 7796 },
];

export const paymentMix = [
  { name: "Tarjeta", value: 5200 },
  { name: "Efectivo", value: 854 },
  { name: "Delivery/Casa", value: 1398 },
];

export const branchSales = [
  { name: "Atrio", total: 7796 },
  { name: "Malta", total: 5210 },
  { name: "La Gran Vía", total: 6340 },
  { name: "Gelú EDC", total: 2180 },
  { name: "Gelú Metro", total: 3120 },
  { name: "Gelú Ramblas", total: 2940 },
  { name: "Eventos", total: 1560 },
];

export const monthlyRows = [
  { day: "01/07", gravada: 5133.66, exenta: 0, propina: 263.58, total: 5397.24, efectivo: 518.98, tarjeta: 3018.04 },
  { day: "02/07", gravada: 5176.02, exenta: 13.27, propina: 312.95, total: 5502.24, efectivo: 938.6, tarjeta: 3600.62 },
  { day: "03/07", gravada: 5320.1, exenta: 8.4, propina: 298.11, total: 5626.61, efectivo: 610.22, tarjeta: 3455.3 },
  { day: "17/07", gravada: 7201.71, exenta: 153.77, propina: 440.44, total: 7795.92, efectivo: 853.51, tarjeta: 5199.56 },
];

export type Severity = "alta" | "media" | "baja";

export const alerts: {
  id: string;
  title: string;
  severity: Severity;
  branch: string;
  date: string;
  amount: number;
  detail: string;
  status: "Pendiente" | "Resuelto";
}[] = [
  {
    id: "a1",
    title: "Diferencia en tarjeta",
    severity: "alta",
    branch: "Andián Atrio",
    date: "17-07-2026",
    amount: 283.42,
    detail:
      "El total según Simphony ($5,199.56) no coincide con el corte físico de banco ($5,482.98)",
    status: "Pendiente",
  },
  {
    id: "a2",
    title: "Diferencia en efectivo",
    severity: "media",
    branch: "Andián Atrio",
    date: "17-07-2026",
    amount: 27.33,
    detail:
      "El efectivo contado en caja ($826.18) no coincide con el efectivo registrado en Simphony ($853.51)",
    status: "Pendiente",
  },
  {
    id: "a3",
    title: "Sobrante en tarjeta",
    severity: "baja",
    branch: "Andián Malta",
    date: "16-07-2026",
    amount: 0.15,
    detail: "Sobrante de $0.15 en tarjeta por mal cobro",
    status: "Resuelto",
  },
];
