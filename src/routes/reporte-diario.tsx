import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/reporte-diario")({
  head: () => ({
    meta: [
      { title: "Reporte diario de caja — Andián" },
      {
        name: "description",
        content:
          "Corte de caja diario de Andián Atrio: reporte Z, ventas de la casa, medios de pago y pendientes de banco.",
      },
      { property: "og:title", content: "Reporte diario de caja — Andián" },
      {
        property: "og:description",
        content:
          "Corte de caja diario de Andián Atrio: reporte Z, ventas de la casa, medios de pago y pendientes de banco.",
      },
    ],
  }),
  component: DailyReport,
});

function AutoTag() {
  return (
    <span className="label-caps ml-2 bg-success-soft px-1.5 py-0.5 text-success">Automático</span>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-baseline justify-between gap-4 py-1">
      <span className="text-[13px] text-foreground">{label}</span>
      <span className="num text-[13px] text-foreground">{value}</span>
    </div>
  );
}

function Section({
  title,
  children,
  tone = "default",
}: {
  title: React.ReactNode;
  children: React.ReactNode;
  tone?: "default" | "warning";
}) {
  return (
    <div className="border-t border-dashed border-border py-4">
      <div
        className={`label-caps mb-2 ${tone === "warning" ? "text-warning" : "text-muted-foreground"}`}
      >
        {title}
      </div>
      {children}
    </div>
  );
}

const PENDING = [
  { label: "Tarjeta BAC", note: "Falta el voucher del POS y el depósito en estado de cuenta." },
  { label: "Tarjeta Davivienda", note: "Pendiente confirmar liquidación del lote del día." },
  { label: "Tarjeta Serfinsa", note: "Falta el corte físico firmado por el cajero." },
  { label: "Tarjeta Cuscatlán", note: "Depósito en tránsito, se acredita al siguiente día hábil." },
  { label: "Cheques/Transferencias", note: "Pendiente comprobante de transferencia de eventos." },
];

function DailyReport() {
  return (
    <div className="mx-auto max-w-xl">
      <article className="panel px-8 py-7 font-mono text-foreground shadow-[0_1px_0_var(--color-border)]">
        <header className="pb-4 text-center">
          <div className="text-[13px] font-semibold tracking-wide">CORTE DE CAJA</div>
          <div className="mt-1 text-[13px]">Andián Atrio</div>
          <div className="num mt-1 text-[13px]">17-07-2026</div>
        </header>

        <Section
          title={
            <>
              Ventas según Reporte Z <AutoTag />
            </>
          }
        >
          <Row label="Ventas gravadas" value="$7,201.71" />
          <Row label="Ventas exentas" value="$153.77" />
          <Row label="Propina" value="$440.44" />
          <div className="mt-2 border-t border-dashed border-border pt-2">
            <div className="flex items-baseline justify-between gap-4">
              <span className="text-[13px] font-semibold">Venta total del día</span>
              <span className="num text-[13px] font-semibold">$7,795.92</span>
            </div>
          </div>
        </Section>

        <Section
          title={
            <>
              Ventas de la casa <AutoTag />
            </>
          }
        >
          <Row label="Pedidos Ya" value="$1,055.40" />
          <Row label="Uber Eats" value="$74.95" />
          <Row label="Cuenta de la casa" value="$268.03" />
        </Section>

        <Section
          title={
            <>
              Medios de pago (Simphony) <AutoTag />
            </>
          }
        >
          <Row label="Efectivo" value="$853.51" />
          <Row label="Tarjeta" value="$5,199.56" />
        </Section>

        <Section title="Pendiente de banco/físico" tone="warning">
          <ul className="space-y-2">
            {PENDING.map((p) => (
              <li key={p.label}>
                <div className="flex items-baseline justify-between gap-4">
                  <span className="text-[13px] text-foreground">{p.label}</span>
                  <span className="label-caps bg-warning-soft px-1.5 py-0.5 text-warning">
                    Pendiente
                  </span>
                </div>
                <p className="mt-0.5 text-[11px] italic text-muted-foreground">{p.note}</p>
              </li>
            ))}
          </ul>
        </Section>

        <footer className="border-t border-dashed border-border pt-5 text-[12px] text-muted-foreground">
          <div>Firma cajero: ________________________</div>
          <div className="mt-3">Firma jefe de turno: ________________</div>
        </footer>
      </article>
    </div>
  );
}
