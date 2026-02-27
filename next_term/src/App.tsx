import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import DashboardTecnico from "./pages/DashboardTecnico";
import DashboardEjecutivo from "./pages/DashboardEjecutivo";

export default function App() {
  return (
    <div className="flex min-h-screen flex-col antialiased font-sans">
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard-tecnico" element={<DashboardTecnico />} />
          <Route path="/dashboard-ejecutivo" element={<DashboardEjecutivo />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
