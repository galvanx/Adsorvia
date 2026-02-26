"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ComposedChart,
  Bar,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import {
  kpiTecnico,
  energiaRecuperadaVsDiseño,
  balanceEnergetico,
  circuitoSemana,
  produccionFrioVsDemanda,
  alarmasEstado,
  degradacionCop,
} from "../../lib/mockData";

export default function DashboardTecnicoPage() {
  const donutData = [
    { name: "Disponible", value: kpiTecnico.disponibilidadPercent, color: "#22c55e" },
    { name: "No disp.", value: 100 - kpiTecnico.disponibilidadPercent, color: "#ebebeb" },
  ];

  return (
    <div className="min-h-screen bg-[#ebebeb]/40">
      <div className="mx-auto max-w-6xl px-4 py-8 md:px-6">
        <h1 className="text-2xl font-bold text-[#16232A] md:text-3xl">
          Dashboard técnico
        </h1>
        <p className="mt-1 text-[#075056]">
          Ingenieros / Operadores – desempeño y eficiencia térmica
        </p>

        {/* 1. KPIs */}
        <section className="mt-8">
          <h2 className="text-lg font-semibold text-[#16232A]">KPIs principales</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            <div className="rounded-xl bg-white p-4 shadow-sm border border-[#ebebeb]">
              <p className="text-xs font-medium text-[#075056]">kW térmicos recuperados</p>
              <p className="text-2xl font-bold text-[#16232A]">{kpiTecnico.kwTermicosRecuperados}</p>
              <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-[#ebebeb]">
                <div
                  className="h-full rounded-full bg-[#FF5B04]"
                  style={{ width: "85%" }}
                />
              </div>
            </div>
            <div className="rounded-xl bg-white p-4 shadow-sm border border-[#ebebeb]">
              <p className="text-xs font-medium text-[#075056]">kW frío producido</p>
              <p className="text-2xl font-bold text-[#16232A]">{kpiTecnico.kwFrioProducido}</p>
            </div>
            <div className="rounded-xl bg-white p-4 shadow-sm border border-[#ebebeb]">
              <p className="text-xs font-medium text-[#075056]">COP térmico real</p>
              <p className="text-2xl font-bold text-[#16232A]">{kpiTecnico.copReal}</p>
              <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-[#ebebeb]">
                <div
                  className="h-full rounded-full bg-[#075056]"
                  style={{ width: `${(kpiTecnico.copReal / 0.7) * 100}%` }}
                />
              </div>
            </div>
            <div className="rounded-xl bg-white p-4 shadow-sm border border-[#ebebeb]">
              <p className="text-xs font-medium text-[#075056]">% Disponibilidad</p>
              <div className="flex items-center gap-2">
                <ResponsiveContainer width={60} height={60}>
                  <PieChart>
                    <Pie
                      data={donutData}
                      cx="50%"
                      cy="50%"
                      innerRadius={18}
                      outerRadius={26}
                      dataKey="value"
                    >
                      {donutData.map((_, i) => (
                        <Cell key={i} fill={donutData[i].color} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
                <p className="text-2xl font-bold text-[#16232A]">{kpiTecnico.disponibilidadPercent}%</p>
              </div>
            </div>
            <div className="rounded-xl bg-white p-4 shadow-sm border border-[#ebebeb]">
              <p className="text-xs font-medium text-[#075056]">ΔT intercambiador (°C)</p>
              <p className="text-2xl font-bold text-[#16232A]">{kpiTecnico.deltaTIntercambiador}</p>
            </div>
          </div>
        </section>

        {/* 2. Energía recuperada vs diseño */}
        <section className="mt-10">
          <h2 className="text-lg font-semibold text-[#16232A]">Energía recuperada vs diseño</h2>
          <div className="mt-4 h-64 rounded-xl bg-white p-4 shadow-sm border border-[#ebebeb] md:h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={energiaRecuperadaVsDiseño}>
                <CartesianGrid strokeDasharray="3 3" stroke="#ebebeb" />
                <XAxis dataKey="periodo" stroke="#075056" fontSize={12} />
                <YAxis stroke="#075056" fontSize={12} />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="recuperada" stroke="#FF5B04" strokeWidth={2} name="Recuperada (kWh)" />
                <Line type="monotone" dataKey="objetivo" stroke="#075056" strokeDasharray="5 5" strokeWidth={2} name="Objetivo diseño" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </section>

        {/* 3. Balance energético (simplified) */}
        <section className="mt-10">
          <h2 className="text-lg font-semibold text-[#16232A]">Balance energético</h2>
          <p className="mt-1 text-sm text-[#075056]">Entrada: {balanceEnergetico.entrada} MWh/año (estimado)</p>
          <div className="mt-4 flex flex-wrap gap-4">
            <div className="flex items-center gap-2 rounded-lg bg-white px-4 py-2 shadow-sm border border-[#ebebeb]">
              <span className="h-3 w-3 rounded-full bg-[#22c55e]" />
              <span>Recuperado {balanceEnergetico.recuperado}%</span>
            </div>
            <div className="flex items-center gap-2 rounded-lg bg-white px-4 py-2 shadow-sm border border-[#ebebeb]">
              <span className="h-3 w-3 rounded-full bg-[#ebebeb]" />
              <span>No recuperable {balanceEnergetico.noRecuperable}%</span>
            </div>
            <div className="flex items-center gap-2 rounded-lg bg-white px-4 py-2 shadow-sm border border-[#ebebeb]">
              <span className="h-3 w-3 rounded-full bg-[#FF5B04]" />
              <span>Frío generado {balanceEnergetico.frioGenerado}%</span>
            </div>
            <div className="flex items-center gap-2 rounded-lg bg-white px-4 py-2 shadow-sm border border-[#ebebeb]">
              <span className="h-3 w-3 rounded-full bg-[#075056]" />
              <span>Pérdidas {balanceEnergetico.perdidas}%</span>
            </div>
          </div>
        </section>

        {/* 4. Circuito hidráulico */}
        <section className="mt-10">
          <h2 className="text-lg font-semibold text-[#16232A]">Circuito hidráulico</h2>
          <p className="mt-1 text-sm text-[#075056]">Temperatura (°C), flujo (m³/h), presión (bar)</p>
          <div className="mt-4 h-64 rounded-xl bg-white p-4 shadow-sm border border-[#ebebeb] md:h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={circuitoSemana}>
                <CartesianGrid strokeDasharray="3 3" stroke="#ebebeb" />
                <XAxis dataKey="dia" stroke="#075056" fontSize={12} />
                <YAxis stroke="#075056" fontSize={12} />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="TEntrada" stroke="#FF5B04" strokeWidth={2} name="T entrada °C" />
                <Line type="monotone" dataKey="TSalida" stroke="#075056" strokeWidth={2} name="T salida °C" />
                <Line type="monotone" dataKey="flujo" stroke="#16232A" strokeWidth={2} name="Flujo m³/h" />
                <Line type="monotone" dataKey="presion" stroke="#22c55e" strokeDasharray="5 5" strokeWidth={2} name="Presión bar" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </section>

        {/* 5. Producción frío vs demanda */}
        <section className="mt-10">
          <h2 className="text-lg font-semibold text-[#16232A]">Producción de frío vs demanda</h2>
          <div className="mt-4 h-64 rounded-xl bg-white p-4 shadow-sm border border-[#ebebeb] md:h-80">
            <ResponsiveContainer width="100%" height="100%">
              <ComposedChart data={produccionFrioVsDemanda}>
                <CartesianGrid strokeDasharray="3 3" stroke="#ebebeb" />
                <XAxis dataKey="mes" stroke="#075056" fontSize={12} />
                <YAxis stroke="#075056" fontSize={12} />
                <Tooltip />
                <Legend />
                <Bar dataKey="demanda" fill="#ebebeb" name="Demanda (kW)" />
                <Line type="monotone" dataKey="adsorcion" stroke="#FF5B04" strokeWidth={2} name="Adsorción" />
                <Line type="monotone" dataKey="respaldo" stroke="#075056" strokeDasharray="5 5" strokeWidth={2} name="Respaldo eléctrico" />
              </ComposedChart>
            </ResponsiveContainer>
          </div>
        </section>

        {/* 6. Alarmas y estado */}
        <section className="mt-10">
          <h2 className="text-lg font-semibold text-[#16232A]">Alarmas y estado del sistema</h2>
          <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-5">
            {[
              { key: "vacio", label: "Vacío correcto", value: alarmasEstado.vacio },
              { key: "nivelBuffer", label: "Nivel tanque buffer", value: alarmasEstado.nivelBuffer },
              { key: "bomba1", label: "Bomba 1", value: alarmasEstado.bomba1 },
              { key: "bomba2", label: "Bomba 2", value: alarmasEstado.bomba2 },
              { key: "vibracion", label: "Vibración", value: alarmasEstado.vibracion },
            ].map(({ key, label, value }) => (
              <div
                key={key}
                className={`flex items-center justify-center gap-2 rounded-xl border p-4 ${
                  value ? "border-[#22c55e] bg-[#22c55e]/10" : "border-[#ef4444] bg-[#ef4444]/10"
                }`}
              >
                <span
                  className={`h-4 w-4 rounded-full ${value ? "bg-[#22c55e]" : "bg-[#ef4444]"}`}
                />
                <span className="text-sm font-medium text-[#16232A]">{label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* 7. Degradación COP */}
        <section className="mt-10">
          <h2 className="text-lg font-semibold text-[#16232A]">Degradación del COP</h2>
          <div className="mt-4 h-64 rounded-xl bg-white p-4 shadow-sm border border-[#ebebeb] md:h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={degradacionCop}>
                <CartesianGrid strokeDasharray="3 3" stroke="#ebebeb" />
                <XAxis dataKey="mes" stroke="#075056" fontSize={12} />
                <YAxis domain={[0.4, 0.6]} stroke="#075056" fontSize={12} />
                <Tooltip />
                <Line type="monotone" dataKey="cop" stroke="#FF5B04" strokeWidth={2} name="COP" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </section>
      </div>
    </div>
  );
}
