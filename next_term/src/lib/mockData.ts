/**
 * Mock data for NexTherm dashboards. Invented but realistic per project (Arca Continental).
 */

export const kpiTecnico = {
  kwTermicosRecuperados: 127,
  kwFrioProducido: 63,
  copReal: 0.49,
  disponibilidadPercent: 94.2,
  deltaTIntercambiador: 12.4,
};

export const energiaRecuperadaVsDiseño = [
  { periodo: "Lun", recuperada: 2850, objetivo: 3000 },
  { periodo: "Mar", recuperada: 2920, objetivo: 3000 },
  { periodo: "Mié", recuperada: 2780, objetivo: 3000 },
  { periodo: "Jue", recuperada: 3010, objetivo: 3000 },
  { periodo: "Vie", recuperada: 2890, objetivo: 3000 },
  { periodo: "Sáb", recuperada: 2650, objetivo: 2800 },
  { periodo: "Dom", recuperada: 2420, objetivo: 2600 },
];

export const balanceEnergetico = {
  entrada: 4740,
  recuperado: 58,
  noRecuperable: 22,
  frioGenerado: 12,
  perdidas: 8,
};

export const circuitoSemana = [
  { dia: "L", TEntrada: 82, TSalida: 68, flujo: 12.2, presion: 2.1 },
  { dia: "M", TEntrada: 81, TSalida: 67, flujo: 11.8, presion: 2.0 },
  { dia: "X", TEntrada: 83, TSalida: 69, flujo: 12.5, presion: 2.2 },
  { dia: "J", TEntrada: 80, TSalida: 66, flujo: 11.5, presion: 1.9 },
  { dia: "V", TEntrada: 84, TSalida: 70, flujo: 12.8, presion: 2.3 },
  { dia: "S", TEntrada: 79, TSalida: 65, flujo: 10.2, presion: 1.8 },
  { dia: "D", TEntrada: 78, TSalida: 64, flujo: 9.8, presion: 1.7 },
];

export const produccionFrioVsDemanda = [
  { mes: "Ene", demanda: 420, adsorcion: 380, respaldo: 40 },
  { mes: "Feb", demanda: 410, adsorcion: 365, respaldo: 45 },
  { mes: "Mar", demanda: 435, adsorcion: 398, respaldo: 37 },
  { mes: "Abr", demanda: 450, adsorcion: 412, respaldo: 38 },
  { mes: "May", demanda: 468, adsorcion: 428, respaldo: 40 },
  { mes: "Jun", demanda: 485, adsorcion: 442, respaldo: 43 },
];

export const alarmasEstado = {
  vacio: true,
  nivelBuffer: true,
  bomba1: true,
  bomba2: true,
  vibracion: false,
};

export const degradacionCop = [
  { mes: "Jul", cop: 0.52 },
  { mes: "Ago", cop: 0.51 },
  { mes: "Sep", cop: 0.5 },
  { mes: "Oct", cop: 0.49 },
  { mes: "Nov", cop: 0.48 },
  { mes: "Dic", cop: 0.49 },
];

export const impactoEnergetico = {
  kwhElectricosEvitados: 1247000,
  reduccionEnfriamientoPercent: 28.5,
  gwhTermicosValorizados: 3.82,
  tCo2eEvitadas: 412,
};

export const impactoEconomico = {
  ahorroAnualUsd: 148000,
  paybackAnios: 6.2,
  irrPercent: 11.4,
  capexInvertido: 1400000,
};

export const waterfallData = [
  { name: "CAPEX", value: -1400000, fill: "#075056" },
  { name: "Ahorro año 1", value: 148000, fill: "#22c55e" },
  { name: "Ahorro año 2", value: 148000, fill: "#22c55e" },
  { name: "OPEX año 1", value: -22000, fill: "#ebebeb" },
  { name: "Flujo neto acum.", value: -1138000, fill: "#FF5B04" },
];

export const intensidadEnergetica = [
  { periodo: "2023", antes: 0.068, despues: null },
  { periodo: "2024", antes: 0.067, despues: 0.048 },
  { periodo: "2025", antes: null, despues: 0.046 },
];

export const reduccionCo2 = {
  scope2Antes: 1450,
  scope2Despues: 1038,
  tCo2eEvitadasAcum: 1240,
  avanceMetaPercent: 62,
};

export const programa12Plantas = {
  capexTotalMin: 13.9,
  capexTotalMax: 21.1,
  opexFinanciado5Anos: "1.1 – 1.8 MUSD",
  plantas: [
    { nombre: "Guadalupe", estado: "NL", status: "implementado" },
    { nombre: "Monterrey", estado: "NL", status: "implementado" },
    { nombre: "Apodaca", estado: "NL", status: "piloto" },
    { nombre: "Saltillo", estado: "Coah", status: "piloto" },
    { nombre: "Monclova", estado: "Coah", status: "ingenieria" },
    { nombre: "Piedras Negras", estado: "Coah", status: "ingenieria" },
    { nombre: "Chihuahua", estado: "Chih", status: "ingenieria" },
    { nombre: "Cd. Juárez", estado: "Chih", status: "ingenieria" },
    { nombre: "Hermosillo", estado: "Son", status: "ingenieria" },
    { nombre: "Cd. Obregón", estado: "Son", status: "ingenieria" },
    { nombre: "Navojoa", estado: "Son", status: "ingenieria" },
    { nombre: "Culiacán", estado: "Sin", status: "ingenieria" },
  ],
};

export const cumplimientoBonoVerde = [
  { indicador: "kWh medibles", status: "ok" },
  { indicador: "MRV implementado", status: "ok" },
  { indicador: "ISO 50001 alineado", status: "ok" },
  { indicador: "Verificación externa", status: "pendiente" },
];
