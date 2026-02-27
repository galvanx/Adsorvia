import { useState } from "react";

export default function CasoPropuesta() {
  const [verMasOpen, setVerMasOpen] = useState(false);

  return (
    <div id="caso" className="space-y-8">
      <h2 className="text-2xl font-bold text-[#16232A] md:text-3xl">
        Caso y propuesta
      </h2>

      <div className="space-y-6 text-[#16232A]">
        <div>
          <h3 className="text-lg font-semibold text-[#075056]">Introducción</h3>
          <p className="mt-2 leading-relaxed">
            Arca Continental genera calor residual en calderas, compresores y
            procesos térmicos que normalmente se pierde al ambiente. En paralelo,
            sus plantas consumen electricidad para enfriamiento industrial. La
            propuesta es implementar, de forma escalable en plantas seleccionadas
            en México, un sistema de enfriamiento por adsorción de silicagel que
            transforme ese calor desperdiciado en frío útil, reduciendo el uso
            de compresores eléctricos y las emisiones asociadas.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-[#075056]">
            Objetivos del proyecto
          </h3>
          <ul className="mt-2 list-inside list-disc space-y-1 leading-relaxed">
            <li>Recuperar calor residual disponible en plantas seleccionadas.</li>
            <li>
              Convertir calor residual en capacidad de enfriamiento (kW/TR)
              mediante sistemas de adsorción.
            </li>
            <li>
              Reducir el consumo eléctrico asociado a enfriamiento por compresión
              mecánica.
            </li>
            <li>
              Disminuir emisiones indirectas (Scope 2) mediante sustitución
              parcial de chillers eléctricos.
            </li>
            <li>
              Medir kWh evitados, tCO₂e evitadas, TR instaladas y disponibilidad.
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-[#075056]">
            Justificación Bonos Verdes
          </h3>
          <p className="mt-2 leading-relaxed">
            El proyecto clasifica en Eficiencia Energética bajo marcos como los
            Green Bond Principles (ICMA) y guías mexicanas para Bonos Verdes:
            inversión en activos con beneficios ambientales medibles, verificables
            y reportables (ahorro energético, reducción de emisiones, mejora de
            indicadores de desempeño energético).
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-[#075056]">Cifras clave</h3>
          <ul className="mt-2 space-y-1 leading-relaxed">
            <li>
              <strong>Intensidad energética:</strong> 0.24 MJ/L de bebida.
            </li>
            <li>
              <strong>Energía total México:</strong> ~530 GWh/año (estimada).
            </li>
            <li>
              <strong>12 plantas seleccionadas:</strong> ~55% del volumen
              nacional.
            </li>
            <li>
              <strong>Calor residual estimado por planta:</strong> ~4.74
              GWh/año.
            </li>
            <li>
              <strong>Chiller de adsorción:</strong> 50–100 kW de enfriamiento;
              COP de diseño 0.5.
            </li>
            <li>
              <strong>CAPEX por planta:</strong> 1.1 – 1.7 MUSD.
            </li>
            <li>
              <strong>Programa 12 plantas:</strong> 13.9 – 21.1 MUSD (CAPEX
              consolidado).
            </li>
          </ul>
        </div>

        <div>
          <button
            type="button"
            onClick={() => setVerMasOpen(!verMasOpen)}
            className="flex min-h-[44px] items-center gap-2 rounded-md bg-[#075056] px-4 py-2 text-white hover:bg-[#063d42] focus:outline-none focus:ring-2 focus:ring-[#FF5B04]"
          >
            {verMasOpen ? "Ver menos" : "Ver más"}
            <svg
              className={`h-5 w-5 transition ${verMasOpen ? "rotate-180" : ""}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          {verMasOpen && (
            <div className="mt-4 space-y-4 rounded-lg border border-[#ebebeb] bg-white p-4">
              <p className="text-sm">
                <strong>Costos por área:</strong> recuperación de calor (100–165
                kUSD), almacenamiento (45–75 kUSD), chiller adsorción (195–325
                kUSD), circuitos hidráulicos (100–170 kUSD), instrumentación
                (80–130 kUSD), eléctrico (40–75 kUSD), obras civiles (45–85
                kUSD), ingeniería y puesta en marcha (110–175 kUSD), gestión,
                QA/QC, HSE y pruebas piloto (190–325 kUSD).
              </p>
              <p className="text-sm">
                <strong>Certificaciones y MRV:</strong> alineación ISO 50001,
                ISO 14001, marco Bonos Verdes y verificación externa; costo
                considerado para el programa ≈ 650 kUSD.
              </p>
              <p className="text-sm">
                <strong>OPEX financiado (5 años):</strong> 18–30 kUSD/año por
                planta (mantenimiento, calibración, monitoreo); total programa
                1.1–1.8 MUSD a 5 años.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
