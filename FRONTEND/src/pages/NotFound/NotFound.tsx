import { useState, useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import Header from "../../components/common/Header/Header";
import Footer from "../../components/common/Footer/Footer";

import leafBackground from "../../assets/images/background/fondoHojas.avif";

const NotFoundPage = () => {
  const [countdown, setCountdown] = useState(10);

  // redirección
  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      window.location.href = "/"; 
    }
  }, [countdown]);

  const navLinks = [
    { label: "Inicio", href: "/" },
    { label: "Habitaciones", href: "/rooms" },
    { label: "Servicios", href: "/amenities" },
    { label: "Galería", href: "/gallery" },
    { label: "Contacto", href: "/contact" },
    { label: "Reservas", href: "/reservations" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-black text-white overflow-hidden">
      <Header
        logoText=""
        navLinks={navLinks}
      />

      {/* Sección principal del error 404 */}
      <main
        className="flex-1 flex items-center justify-center relative"
        style={{
          backgroundColor: "black", // Cambiado a negro puro para mayor contraste
        }}
      >
        {/* imagen como fondo del div y se combinan los efectos */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${leafBackground})`,
            opacity: 0.50, 
            mixBlendMode: "normal", 
            filter: "brightness(0.4)", 
          }}
        ></div>

        {/* Capa oscura adicional para mayor profundidad visual */}
        <div className="absolute inset-0 bg-black/50 z-0"></div>

        {/* Contenido central del mensaje 404 */}
        <div className="relative z-10 text-center max-w-2xl mx-auto px-6">
          <h1
            className="text-9xl md:text-9xl lg:text-9xl xl:text-9xl font-extrabold mb-4 text-white"
            style={{ letterSpacing: "0.05em" }}
          >
            <span className="text-yellow-500">404</span>
          </h1>
          <p className="text-lg md:text-xl uppercase tracking-wider mb-8">
            ALGO SALIÓ MAL, O LA PÁGINA NO FUE ENCONTRADA.
          </p>

          {/* Línea divisoria horizontal */}
          <div className="w-24 h-0.5 bg-white/30 mx-auto mb-8"></div>

          {/* Botón para regresar a la página principal */}
          <a
            href="/"
            className="inline-flex items-center border border-white px-8 py-3 rounded-none text-white transition-all duration-300 hover:bg-white/10 mb-4"
          >
            <ArrowLeft className="mr-2" size={18} />
            VOLVER A INICIO
          </a>

          {/* Cuenta regresiva visible */}
          <p className="text-sm text-white/60">
            Redirigiendo automáticamente en{" "}
            <span className="text-yellow-500 font-semibold">{countdown}</span>{" "}
            segundos...
          </p>
        </div>
        <Footer className="w-full absolute bottom-0 p-6 z-20" />
      </main>
       
    </div>
  );
};

export default NotFoundPage;
