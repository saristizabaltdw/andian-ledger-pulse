import { createFileRoute } from "@tanstack/react-router";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { branchSales, money, paymentMix, salesTrend } from "@/lib/andian-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dashboard de operaciones — Andián" },
      {
        name: "description",
        content:
          "Panel interno de Andián: ventas del día y del mes, medios de pago y diferencias abiertas por sucursal.",
      },
      { property: "og:title", content: "Dashboard de operaciones — Andián" },
      {
        property: "og:description",
        content:
          "Panel interno de Andián: ventas del día y del mes, medios de pago y diferencias abiertas por sucursal.",
      },
    ],
  }),
  component: Dashboard,
});

const KPIS = [
  { label: "Ventas de hoy", value: "$7,795.92", sub: "Andián Atrio · 17 jul" },
  { label: "Ventas del mes", value: "$164,230", sub: "Todas las sucursales" },
  { label: "Diferencias abiertas", value: "2", sub: "Requieren revisión" },
  { label: "Sucursales al día", value: "5/7", sub: "Corte recibido hoy" },
];

const DONUT_COLORS = ["var(--color-chart-1)", "var(--color-chart-2)", "var(--color-chart-3)"];

const tooltipStyle = {
  contentStyle: {
    background: "var(--color-card)",
    border: "1px solid var(--color-border)",
    borderRadius: 2,
    fontSize: 12,
    fontFamily: "var(--font-sans)",
  },
} as const;

function Panel({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="panel p-5">
      <h2 className="mb-4 font-serif text-base text-foreground">{title}</h2>
      {children}
    </section>
  );
}

function Dashboard() {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {KPIS.map((k) => (
          <div key={k.label} className="panel p-5">
            <div className="label-caps text-muted-foreground">{k.label}</div>
            <div className="num mt-3 font-serif text-3xl text-foreground">{k.value}</div>
            <div className="mt-1 text-xs text-muted-foreground">{k.sub}</div>
          </div>
        ))}
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <Panel title="Tendencia de ventas — julio">
            <ResponsiveContainer width="100%" height={260}>
              <LineChart data={salesTrend} margin={{ top: 8, right: 8, left: -12, bottom: 0 }}>
                <CartesianGrid stroke="var(--color-border)" vertical={false} />
                <XAxis
                  dataKey="day"
                  tick={{ fontSize: 11, fill: "var(--color-muted-foreground)" }}
                  tickLine={false}
                  axisLine={{ stroke: "var(--color-border)" }}
                />
                <YAxis
                  domain={[6000, 8200]}
                  tick={{ fontSize: 11, fill: "var(--color-muted-foreground)" }}
                  tickLine={false}
                  axisLine={false}
                />
                <Tooltip {...tooltipStyle} formatter={(v: number) => money(v)} />
                <Line
                  type="monotone"
                  dataKey="total"
                  stroke="var(--color-chart-1)"
                  strokeWidth={2}
                  dot={{ r: 3, fill: "var(--color-chart-1)" }}
                />
              </LineChart>
            </ResponsiveContainer>
          </Panel>
        </div>

        <Panel title="Medios de pago — hoy">
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie
                data={paymentMix}
                dataKey="value"
                nameKey="name"
                innerRadius={52}
                outerRadius={80}
                paddingAngle={1}
                stroke="var(--color-card)"
              >
                {paymentMix.map((_, i) => (
                  <Cell key={i} fill={DONUT_COLORS[i]} />
                ))}
              </Pie>
              <Tooltip {...tooltipStyle} formatter={(v: number) => money(v)} />
            </PieChart>
          </ResponsiveContainer>
          <ul className="mt-3 space-y-2">
            {paymentMix.map((p, i) => (
              <li key={p.name} className="flex items-center justify-between text-sm">
                <span className="flex items-center gap-2 text-muted-foreground">
                  <span
                    className="inline-block size-2.5"
                    style={{ background: DONUT_COLORS[i] }}
                  />
                  {p.name}
                </span>
                <span className="num text-foreground">{money(p.value)}</span>
              </li>
            ))}
          </ul>
        </Panel>
      </div>

      <Panel title="Ventas por sucursal — hoy">
        <ResponsiveContainer width="100%" height={280}>
          <BarChart data={branchSales} margin={{ top: 8, right: 8, left: -12, bottom: 0 }}>
            <CartesianGrid stroke="var(--color-border)" vertical={false} />
            <XAxis
              dataKey="name"
              tick={{ fontSize: 11, fill: "var(--color-muted-foreground)" }}
              tickLine={false}
              axisLine={{ stroke: "var(--color-border)" }}
            />
            <YAxis
              tick={{ fontSize: 11, fill: "var(--color-muted-foreground)" }}
              tickLine={false}
              axisLine={false}
            />
            <Tooltip {...tooltipStyle} cursor={{ fill: "var(--color-muted)" }} formatter={(v: number) => money(v)} />
            <Bar dataKey="total" fill="var(--color-chart-1)" barSize={38} />
          </BarChart>
        </ResponsiveContainer>
      </Panel>
    </div>
  );
}
