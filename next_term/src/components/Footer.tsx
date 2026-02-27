import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t border-[#ebebeb] bg-[#16232A] text-[#ebebeb]">
      <div className="mx-auto max-w-6xl px-4 py-8 md:px-6">
        <p className="font-semibold text-white">NexTherm – Thermal Recovery</p>
        <p className="mt-2 text-sm opacity-90">
          Prototipo – Recuperación térmica. Emprendimiento Tecnológico. Campus
          Monterrey (Estefanía Rico, Luisa Contreras, Daphne Juarez, Jorge
          Galván, Valeria Sada Bello, Crisia Pineda). Febrero 2025.
        </p>
        <nav className="mt-4 flex flex-wrap gap-4 text-sm">
          <Link to="/" className="hover:text-white underline-offset-2 hover:underline">
            Inicio
          </Link>
          <Link to="/" className="hover:text-white underline-offset-2 hover:underline">
            Caso y propuesta
          </Link>
          <Link to="/dashboard-tecnico" className="hover:text-white underline-offset-2 hover:underline">
            Dashboard técnico
          </Link>
          <Link to="/dashboard-ejecutivo" className="hover:text-white underline-offset-2 hover:underline">
            Dashboard ejecutivo
          </Link>
        </nav>
      </div>
    </footer>
  );
}
