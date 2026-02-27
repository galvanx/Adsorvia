import { Link } from "react-router-dom";
import { useState } from "react";

const navLinks = [
  { to: "/", label: "Inicio" },
  { to: "/", label: "Caso y propuesta" },
  { to: "/dashboard-tecnico", label: "Dashboard técnico" },
  { to: "/dashboard-ejecutivo", label: "Dashboard ejecutivo" },
];

const base = import.meta.env.BASE_URL;

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#ebebeb] bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6">
        <Link to="/" className="flex min-h-[44px] items-center gap-2">
          <img
            src={`${base}logo-icon.png`}
            alt="NexTherm"
            width={40}
            height={40}
            className="rounded-lg"
          />
          <span className="text-lg font-semibold text-[#16232A]">NexTherm</span>
        </Link>

        <nav className="hidden md:flex md:items-center md:gap-6">
          {navLinks.map(({ to, label }) => (
            <Link
              key={to + label}
              to={to}
              className="min-h-[44px] min-w-[44px] items-center rounded-md px-3 py-2 text-[#075056] transition hover:bg-[#ebebeb] hover:text-[#FF5B04]"
            >
              {label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          aria-label="Abrir menú"
          aria-expanded={menuOpen}
          className="flex min-h-[44px] min-w-[44px] items-center justify-center rounded-md border border-[#ebebeb] bg-transparent md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            className="h-6 w-6 text-[#16232A]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-[#ebebeb] bg-white px-4 py-3 md:hidden">
          <nav className="flex flex-col gap-1">
            {navLinks.map(({ to, label }) => (
              <Link
                key={to + label}
                to={to}
                className="min-h-[44px] rounded-md px-3 py-2 text-[#075056] hover:bg-[#ebebeb]"
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
