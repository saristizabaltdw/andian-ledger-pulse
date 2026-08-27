import { createFileRoute } from "@tanstack/react-router";
import { alerts, money, type Severity } from "@/lib/andian-data";

export const Route = createFileRoute("/conciliacion")({
  head: () => ({
    meta: [
      { title: "Conciliación de diferencias — Andián" },
      {
        name: "description",
        content:
          "Alertas de conciliación entre Simphony, banco y caja física por sucursal, con severidad y estado de resolución.",
      },
      { property: "og:title", content: "Conciliación de diferencias — Andián" },
      {
        property: "og:description",
        content:
          "Alertas de conciliación entre Simphony, banco y caja física por sucursal, con severidad y estado de resolución.",
      },
    ],
  }),
  component: Reconciliation,
});

const severityStyles: Record<Severity, string> = {
  alta: "bg-danger-soft text-destructive",
  media: "bg-warning-soft text-warning",
  baja: "bg-success-soft text-success",
};

function Reconciliation() {
  return (
    <div className="mx-auto max-w-3xl space-y-4">
      {alerts.map((a) => (
        <article key={a.id} className="panel p-5">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <div className="flex items-center gap-2">
                <h2 className="font-serif text-lg text-foreground">{a.title}</h2>
                <span className={`label-caps px-2 py-0.5 ${severityStyles[a.severity]}`}>
                  Severidad {a.severity}
                </span>
              </div>
              <div className="num mt-1 text-xs text-muted-foreground">
                {a.branch} · {a.date}
              </div>
            </div>
            <div className="text-right">
              <div className="label-caps text-muted-foreground">Monto</div>
              <div className="num font-serif text-2xl text-foreground">{money(a.amount)}</div>
            </div>
          </div>

          <p className="mt-4 border-t border-border pt-4 text-sm text-muted-foreground">
            {a.detail}
          </p>

          <div className="mt-4 flex flex-wrap items-center gap-3">
            {a.status === "Pendiente" ? (
              <>
                <span className="label-caps bg-warning-soft px-2 py-0.5 text-warning">
                  Pendiente
                </span>
                <div className="ml-auto flex flex-wrap gap-2">
                  <button className="rounded-sm bg-primary px-3 py-2 text-xs font-medium text-primary-foreground transition-colors hover:bg-accent">
                    Marcar como resuelto
                  </button>
                  <button className="rounded-sm border border-border px-3 py-2 text-xs font-medium text-foreground transition-colors hover:bg-secondary">
                    Escalar al jefe de sucursal
                  </button>
                </div>
              </>
            ) : (
              <span className="label-caps bg-success-soft px-2 py-0.5 text-success">Resuelto</span>
            )}
          </div>
        </article>
      ))}
    </div>
  );
}
