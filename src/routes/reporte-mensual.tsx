import { createFileRoute } from "@tanstack/react-router";
import { monthlyRows } from "@/lib/andian-data";

export const Route = createFileRoute("/reporte-mensual")({
  head: () => ({
    meta: [
      { title: "Reporte mensual de ventas — Andián" },
      {
        name: "description",
        content:
          "Detalle diario de ventas gravadas, exentas, propina, efectivo y tarjeta de Andián Atrio en julio 2026.",
      },
      { property: "og:title", content: "Reporte mensual de ventas — Andián" },
      {
        property: "og:description",
        content:
          "Detalle diario de ventas gravadas, exentas, propina, efectivo y tarjeta de Andián Atrio en julio 2026.",
      },
    ],
  }),
  component: MonthlyReport,
});

const fmt = (n: number) => n.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

function MonthlyReport() {
  return (
    <section className="panel">
      <div className="border-b border-border px-5 py-4">
        <h2 className="font-serif text-base text-foreground">Detalle diario — Julio 2026</h2>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="border-b border-border bg-secondary/60">
              <th className="label-caps px-5 py-3 text-left text-muted-foreground">Día</th>
              {["Gravada", "Exenta", "Propina", "Total", "Efectivo", "Tarjeta"].map((h) => (
                <th key={h} className="label-caps px-5 py-3 text-right text-muted-foreground">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {monthlyRows.map((r) => (
              <tr key={r.day} className="border-b border-border last:border-0 hover:bg-secondary/40">
                <td className="num px-5 py-3 text-left text-foreground">{r.day}</td>
                <td className="num px-5 py-3 text-right text-foreground">{fmt(r.gravada)}</td>
                <td className="num px-5 py-3 text-right text-foreground">{fmt(r.exenta)}</td>
                <td className="num px-5 py-3 text-right text-foreground">{fmt(r.propina)}</td>
                <td className="num px-5 py-3 text-right font-semibold text-foreground">
                  {fmt(r.total)}
                </td>
                <td className="num px-5 py-3 text-right text-foreground">{fmt(r.efectivo)}</td>
                <td className="num px-5 py-3 text-right text-foreground">{fmt(r.tarjeta)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="border-t border-border px-5 py-3 text-xs text-muted-foreground">
        Mostrando 4 de 31 días · Andián Atrio · Julio 2026
      </div>
    </section>
  );
}
