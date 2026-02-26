import Image from "next/image";
import Link from "next/link";
import CasoPropuesta from "./components/CasoPropuesta";

export default function Home() {
  return (
    <div className="bg-[#ebebeb]/40">
      <section className="bg-[#16232A] px-4 py-16 text-white md:py-24">
        <div className="mx-auto max-w-6xl md:px-6">
          <div className="flex flex-col items-center gap-8 md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
                Recuperación térmica para frío sostenible
              </h1>
              <p className="mt-4 max-w-xl text-lg text-[#ebebeb]">
                Monitoreo de eficiencia energética y reducción de emisiones en
                plantas industriales.
              </p>
            </div>
            <Image
              src="/logo-full.png"
              alt="NexTherm – Thermal Recovery"
              width={280}
              height={100}
              className="shrink-0"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16">
        <CasoPropuesta />
      </section>

      <section
        id="dashboards"
        className="border-t border-[#ebebeb] bg-white px-4 py-12 md:px-6 md:py-16"
      >
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl font-bold text-[#16232A] md:text-3xl">
            Dashboards
          </h2>
          <p className="mt-2 text-[#075056]">
            Accede a las vistas técnica y ejecutiva del sistema.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <Link
              href="/dashboard-tecnico"
              className="flex min-h-[120px] flex-col rounded-xl border-2 border-[#ebebeb] bg-white p-6 shadow-sm transition hover:border-[#FF5B04] hover:shadow-md focus:outline-none focus:ring-2 focus:ring-[#FF5B04]"
            >
              <span className="text-lg font-semibold text-[#16232A]">
                Dashboard técnico
              </span>
              <span className="mt-2 text-sm text-[#075056]">
                Para ingenieros y operadores: KPIs en tiempo real, energía
                recuperada vs diseño, balance energético, circuito hidráulico,
                alarmas y degradación del COP.
              </span>
              <span className="mt-4 inline-flex items-center text-[#FF5B04] font-medium">
                Abrir
                <svg
                  className="ml-1 h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </span>
            </Link>
            <Link
              href="/dashboard-ejecutivo"
              className="flex min-h-[120px] flex-col rounded-xl border-2 border-[#ebebeb] bg-white p-6 shadow-sm transition hover:border-[#FF5B04] hover:shadow-md focus:outline-none focus:ring-2 focus:ring-[#FF5B04]"
            >
              <span className="text-lg font-semibold text-[#16232A]">
                Dashboard ejecutivo
              </span>
              <span className="mt-2 text-sm text-[#075056]">
                Para dirección y ESG: impacto energético y económico, reducción
                CO₂, programa 12 plantas y cumplimiento Bono Verde.
              </span>
              <span className="mt-4 inline-flex items-center text-[#FF5B04] font-medium">
                Abrir
                <svg
                  className="ml-1 h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
