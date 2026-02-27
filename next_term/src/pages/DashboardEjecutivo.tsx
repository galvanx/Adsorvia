import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts";
import {
  impactoEnergetico,
  impactoEconomico,
  waterfallData,
  intensidadEnergetica,
  reduccionCo2,
  programa12Plantas,
  cumplimientoBonoVerde,
} from "../lib/mockData";

const intensidadChartData = intensidadEnergetica.map(({ periodo, antes, despues }) => ({
  periodo,
  "kWh/L antes": antes,
  "kWh/L después": despues,
}));

const co2BarData = [
  { tipo: "Scope 2 antes", valor: reduccionCo2.scope2Antes, fill: "#ebebeb" },
  { tipo: "Scope 2 después", valor: reduccionCo2.scope2Despues, fill: "#075056" },
];

function statusColor(s: string) {
  return s === "implementado" ? "bg-[#22c55e]" : s === "piloto" ? "bg-[#eab308]" : "bg-[#3b82f6]";
}

export default function DashboardEjecutivo() {
  return (
    <div className="min-h-screen bg-[#ebebeb]/40">
      <div className="mx-auto max-w-6xl px-4 py-8 md:px-6">
        <h1 className="text-2xl font-bold text-[#16232A] md:text-3xl">
          Dashboard ejecutivo
        </h1>
        <p className="mt-1 text-[#075056]">
          Business / Dirección / ESG – impacto y cumplimiento
        </p>

        <section className="mt-8">
          <h2 className="text-lg font-semibold text-[#16232A]">Impacto energético anual</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-xl border border-[#ebebeb] bg-white p-4 shadow-sm">
              <p className="text-xs font-medium text-[#075056]">kWh eléctricos evitados</p>
              <p className="text-2xl font-bold text-[#16232A]">
                {(impactoEnergetico.kwhElectricosEvitados / 1e6).toFixed(2)} M
              </p>
            </div>
            <div className="rounded-xl border border-[#ebebeb] bg-white p-4 shadow-sm">
              <p className="text-xs font-medium text-[#075056]">% Reducción consumo enfriamiento</p>
              <p className="text-2xl font-bold text-[#16232A]">{impactoEnergetico.reduccionEnfriamientoPercent}%</p>
            </div>
            <div className="rounded-xl border border-[#ebebeb] bg-white p-4 shadow-sm">
              <p className="text-xs font-medium text-[#075056]">GWh térmicos valorizados</p>
              <p className="text-2xl font-bold text-[#16232A]">{impactoEnergetico.gwhTermicosValorizados}</p>
            </div>
            <div className="rounded-xl border border-[#ebebeb] bg-white p-4 shadow-sm">
              <p className="text-xs font-medium text-[#075056]">tCO₂e evitadas (Scope 2)</p>
              <p className="text-2xl font-bold text-[#16232A]">{impactoEnergetico.tCo2eEvitadas}</p>
            </div>
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-lg font-semibold text-[#16232A]">Impacto económico</h2>
          <div className="mt-4 grid gap-6 lg:grid-cols-2">
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-xl border border-[#ebebeb] bg-white p-4 shadow-sm">
                <p className="text-xs font-medium text-[#075056]">Ahorro anual (USD)</p>
                <p className="text-xl font-bold text-[#16232A]">${(impactoEconomico.ahorroAnualUsd / 1000).toFixed(0)}k</p>
              </div>
              <div className="rounded-xl border border-[#ebebeb] bg-white p-4 shadow-sm">
                <p className="text-xs font-medium text-[#075056]">Payback (años)</p>
                <p className="text-xl font-bold text-[#16232A]">{impactoEconomico.paybackAnios}</p>
              </div>
              <div className="rounded-xl border border-[#ebebeb] bg-white p-4 shadow-sm">
                <p className="text-xs font-medium text-[#075056]">IRR (%)</p>
                <p className="text-xl font-bold text-[#16232A]">{impactoEconomico.irrPercent}%</p>
              </div>
              <div className="rounded-xl border border-[#ebebeb] bg-white p-4 shadow-sm">
                <p className="text-xs font-medium text-[#075056]">CAPEX invertido (USD)</p>
                <p className="text-xl font-bold text-[#16232A]">${(impactoEconomico.capexInvertido / 1e6).toFixed(2)} M</p>
              </div>
            </div>
            <div className="h-64 rounded-xl border border-[#ebebeb] bg-white p-4 shadow-sm md:h-72">
              <p className="mb-2 text-sm font-medium text-[#16232A]">Flujo (CAPEX, ahorros, OPEX)</p>
              <ResponsiveContainer width="100%" height="90%">
                <BarChart data={waterfallData} layout="vertical" margin={{ left: 60 }}>
                  <XAxis type="number" fontSize={10} />
                  <YAxis type="category" dataKey="name" width={55} fontSize={10} />
                  <Tooltip formatter={(v) => [typeof v === "number" ? `$${(v / 1000).toFixed(0)}k` : "", ""]} />
                  <Bar dataKey="value">
                    {waterfallData.map((entry, i) => (
                      <Cell key={i} fill={entry.fill} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-lg font-semibold text-[#16232A]">Intensidad energética (kWh/L)</h2>
          <div className="mt-4 h-64 rounded-xl border border-[#ebebeb] bg-white p-4 shadow-sm md:h-72">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={intensidadChartData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#ebebeb" />
                <XAxis dataKey="periodo" stroke="#075056" fontSize={12} />
                <YAxis stroke="#075056" fontSize={12} />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="kWh/L antes" stroke="#ebebeb" strokeWidth={2} connectNulls />
                <Line type="monotone" dataKey="kWh/L después" stroke="#FF5B04" strokeWidth={2} connectNulls />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-lg font-semibold text-[#16232A]">Reducción CO₂ (ESG)</h2>
          <div className="mt-4 flex flex-col gap-4 md:flex-row md:items-start">
            <div className="h-56 w-full rounded-xl border border-[#ebebeb] bg-white p-4 shadow-sm md:w-72">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={co2BarData} layout="vertical" margin={{ left: 80 }}>
                  <XAxis type="number" fontSize={10} />
                  <YAxis type="category" dataKey="tipo" width={75} fontSize={10} />
                  <Tooltip />
                  <Bar dataKey="valor" name="tCO₂e">
                    {co2BarData.map((entry, i) => (
                      <Cell key={i} fill={entry.fill} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="flex flex-1 flex-wrap gap-4">
              <div className="rounded-xl border border-[#ebebeb] bg-white p-4 shadow-sm">
                <p className="text-xs font-medium text-[#075056]">tCO₂e evitadas acumuladas</p>
                <p className="text-2xl font-bold text-[#16232A]">{reduccionCo2.tCo2eEvitadasAcum}</p>
              </div>
              <div className="rounded-xl border border-[#ebebeb] bg-white p-4 shadow-sm">
                <p className="text-xs font-medium text-[#075056]">% avance meta corporativa</p>
                <p className="text-2xl font-bold text-[#16232A]">{reduccionCo2.avanceMetaPercent}%</p>
                <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-[#ebebeb]">
                  <div
                    className="h-full rounded-full bg-[#22c55e]"
                    style={{ width: `${reduccionCo2.avanceMetaPercent}%` }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-lg font-semibold text-[#16232A]">Programa 12 plantas</h2>
          <div className="mt-4 flex flex-col gap-4 lg:flex-row">
            <div className="flex-1 overflow-hidden rounded-xl border border-[#ebebeb] bg-white shadow-sm">
              <div className="grid grid-cols-2 gap-2 p-4 sm:grid-cols-3">
                {programa12Plantas.plantas.map((p) => (
                  <div
                    key={p.nombre}
                    className={`rounded-lg px-3 py-2 text-sm ${statusColor(p.status)} bg-opacity-20`}
                  >
                    <span className="font-medium text-[#16232A]">{p.nombre}</span>
                    <span className="ml-1 text-xs text-[#075056]">({p.estado})</span>
                    <span className="block text-xs capitalize text-[#075056]">{p.status}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-4 border-t border-[#ebebeb] p-4">
                <span className="inline-flex items-center gap-1">
                  <span className="h-3 w-3 rounded-full bg-[#22c55e]" /> Implementado
                </span>
                <span className="inline-flex items-center gap-1">
                  <span className="h-3 w-3 rounded-full bg-[#eab308]" /> Piloto
                </span>
                <span className="inline-flex items-center gap-1">
                  <span className="h-3 w-3 rounded-full bg-[#3b82f6]" /> En ingeniería
                </span>
              </div>
            </div>
            <div className="flex shrink-0 flex-col gap-2 rounded-xl border border-[#ebebeb] bg-white p-4 shadow-sm lg:w-64">
              <p className="text-sm font-medium text-[#16232A]">CAPEX total 12 plantas</p>
              <p className="text-xl font-bold text-[#FF5B04]">
                {programa12Plantas.capexTotalMin} – {programa12Plantas.capexTotalMax} MUSD
              </p>
              <p className="text-sm text-[#075056]">OPEX financiado 5 años</p>
              <p className="font-semibold text-[#16232A]">{programa12Plantas.opexFinanciado5Anos}</p>
            </div>
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-lg font-semibold text-[#16232A]">Cumplimiento Bono Verde</h2>
          <div className="mt-4 overflow-x-auto rounded-xl border border-[#ebebeb] bg-white shadow-sm">
            <table className="w-full min-w-[280px] text-left text-sm">
              <thead>
                <tr className="border-b border-[#ebebeb] bg-[#ebebeb]/50">
                  <th className="px-4 py-3 font-semibold text-[#16232A]">Indicador</th>
                  <th className="px-4 py-3 font-semibold text-[#16232A]">Estado</th>
                </tr>
              </thead>
              <tbody>
                {cumplimientoBonoVerde.map((row) => (
                  <tr key={row.indicador} className="border-b border-[#ebebeb]">
                    <td className="px-4 py-3 text-[#16232A]">{row.indicador}</td>
                    <td className="px-4 py-3">
                      {row.status === "ok" ? (
                        <span className="text-[#22c55e]">✅ Cumplido</span>
                      ) : (
                        <span className="text-[#eab308]">⏳ En proceso</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
}
