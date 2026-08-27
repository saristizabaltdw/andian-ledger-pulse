import { Link, useRouterState } from "@tanstack/react-router";
import { LayoutDashboard, FileText, CalendarRange, Scale, ChevronDown } from "lucide-react";
import { createContext, useContext, useState, type ReactNode } from "react";
import { BRANCHES } from "@/lib/andian-data";

const NAV = [
  { to: "/", label: "Dashboard", icon: LayoutDashboard },
  { to: "/reporte-diario", label: "Reporte diario", icon: FileText },
  { to: "/reporte-mensual", label: "Reporte mensual", icon: CalendarRange },
  { to: "/conciliacion", label: "Conciliación", icon: Scale },
] as const;

const BranchContext = createContext<{ branch: string; setBranch: (b: string) => void }>({
  branch: BRANCHES[0],
  setBranch: () => {},
});

export const useBranch = () => useContext(BranchContext);

export function AppShell({ children }: { children: ReactNode }) {
  const [branch, setBranch] = useState<string>(BRANCHES[0]);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const active = NAV.find((n) => n.to === pathname) ?? NAV[0];

  return (
    <BranchContext.Provider value={{ branch, setBranch }}>
      <div className="min-h-screen bg-background">
        <aside className="fixed inset-y-0 left-0 z-20 hidden w-60 flex-col bg-sidebar text-sidebar-foreground md:flex">
          <div className="border-b border-sidebar-border px-6 py-7">
            <div className="font-serif text-2xl tracking-wide">ANDIÁN</div>
            <div className="label-caps mt-1 text-sidebar-foreground/60">
              Panel de operaciones
            </div>
          </div>
          <nav className="flex-1 px-3 py-5">
            {NAV.map(({ to, label, icon: Icon }) => {
              const isActive = to === active.to;
              return (
                <Link
                  key={to}
                  to={to}
                  className={`mb-1 flex items-center gap-3 rounded-sm px-3 py-2.5 text-sm transition-colors ${
                    isActive
                      ? "bg-sidebar-accent text-sidebar-foreground"
                      : "text-sidebar-foreground/70 hover:bg-sidebar-accent/50 hover:text-sidebar-foreground"
                  }`}
                >
                  <Icon className="size-4" strokeWidth={1.75} />
                  {label}
                </Link>
              );
            })}
          </nav>
          <div className="border-t border-sidebar-border px-6 py-4 text-xs text-sidebar-foreground/50">
            Andián Bistro &amp; Café
          </div>
        </aside>

        <div className="md:pl-60">
          <header className="sticky top-0 z-10 flex flex-wrap items-center justify-between gap-3 border-b border-border bg-card px-6 py-4">
            <h1 className="font-serif text-xl text-foreground">{active.label}</h1>
            <div className="relative">
              <select
                aria-label="Seleccionar sucursal"
                value={branch}
                onChange={(e) => setBranch(e.target.value)}
                className="num appearance-none rounded-sm border border-border bg-background py-2 pl-3 pr-9 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              >
                {BRANCHES.map((b) => (
                  <option key={b} value={b}>
                    {b}
                  </option>
                ))}
              </select>
              <ChevronDown className="pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
            </div>
          </header>
          <main className="px-6 py-7">{children}</main>
        </div>
      </div>
    </BranchContext.Provider>
  );
}
