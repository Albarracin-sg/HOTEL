import React, { useState, useEffect } from "react";
import { ArrowLeft } from "lucide-react";

// Importa los componentes comunes
import Header from "../../components/common/Header/Header";
import Footer from "../../components/common/Footer/Footer";

// Componente para la sección principal de error 404
const NotFoundSection: React.FC<{
  countdown: number;
}> = ({ countdown }) => {
  return (
    <div 
      className="relative flex items-center justify-center py-24 px-4 bg-cover bg-center"
      style={{ 
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(/api/placeholder/1600/900)'
      }}
    >
      <div className="text-center text-white max-w-4xl mx-auto bg-black/30 p-12 rounded-lg backdrop-blur-sm">
        <p className="text-amber-500 uppercase tracking-wider mb-2">Error</p>
        <h1 className="text-6xl font-light mb-6">404</h1>
        <h2 className="text-4xl font-light mb-8 text-amber-500">PÁGINA NO ENCONTRADA</h2>
        
        <div className="w-16 h-1 bg-amber-500 mx-auto mb-8"></div>
        
        <p className="text-xl mb-8">Lo sentimos, la página que buscas no existe o ha sido movida.</p>
        <p className="mb-12">Serás redirigido a la página principal en {countdown} segundos o puedes hacer clic en el botón de abajo.</p>
        
        <div className="flex flex-col md:flex-row gap-6 justify-center">
          <a href="/" className="bg-amber-500 hover:bg-amber-600 text-white py-3 px-8 rounded flex items-center justify-center transition-colors duration-300">
            <ArrowLeft className="mr-2" size={20} />
            Volver al Inicio
          </a>
          <a href="/contact" className="bg-transparent border border-white hover:bg-white/10 text-white py-3 px-8 rounded transition-colors duration-300">
            Contactar con Soporte
          </a>
        </div>
      </div>
    </div>
  );
};

const NotFoundPage: React.FC = () => {
  // Estado para el contador de redirección
  const [countdown, setCountdown] = useState(10);
  
  // Efecto para el contador de redirección
  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      // Redirigir cuando el contador llegue a 0
      window.location.href = "/";
    }
  }, [countdown]);

  // Datos para pasar al Header (links de navegación)
  const headerNavLinks = [
    { label: "Home", href: "/" },
    { label: "Rooms", href: "/rooms" },
    { label: "Amenities", href: "/amenities" },
    { label: "Gallery", href: "/gallery" },
    { label: "Contact", href: "/contact" },
    { label: "Reservations", href: "/reservations" },
  ];

  return (
    // Contenedor principal que define el layout general de la página
    <>
      <div className="bg-gray-900 text-white min-h-screen flex flex-col">
        {/* Renderiza el componente Header, pasándole las props */}
        <Header logoText="Aranya" navLinks={headerNavLinks} />
        
        {/* Renderiza el componente NotFoundSection */}
        <NotFoundSection countdown={countdown} />
        
        {/* Renderiza el componente Footer */}
        <Footer className="w-full p-6 z-20" />
      </div>
      
      <div>
        {/* Sección de sugerencias */}
        <section className="w-full">
          <div className="flex flex-col items-center justify-center py-20">
            <h2 className="text-4xl font-bold mb-6 text-amber-500">Páginas Sugeridas</h2>
            <p className="text-lg text-gray-700 max-w-2xl text-center mb-10">
              Puede que no hayas encontrado lo que buscabas, pero te invitamos a explorar algunas de nuestras páginas más populares.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
              <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-amber-700">Nuestras Habitaciones</h3>
                <p className="text-gray-600 mb-4">Descubre nuestras lujosas habitaciones y suites, diseñadas para ofrecerte el máximo confort.</p>
                <a href="/rooms" className="text-amber-500 hover:text-amber-700 font-medium">Explorar habitaciones →</a>
              </div>
              
              <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-amber-700">Servicios Exclusivos</h3>
                <p className="text-gray-600 mb-4">Conoce todos los servicios y amenidades que tenemos para hacer tu estancia inolvidable.</p>
                <a href="/amenities" className="text-amber-500 hover:text-amber-700 font-medium">Ver servicios →</a>
              </div>
              
              <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-amber-700">Reserva Ahora</h3>
                <p className="text-gray-600 mb-4">Asegura tu estancia en Aranya con nuestro sistema de reservas fácil y rápido.</p>
                <a href="/reservations" className="text-amber-500 hover:text-amber-700 font-medium">Hacer reserva →</a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default NotFoundPage;