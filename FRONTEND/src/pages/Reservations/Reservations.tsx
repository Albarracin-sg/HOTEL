// src/pages/Reservations/Reservations.tsx

import React from 'react';
import Header from '../../components/common/Header/Header'; // Importa el Header
import Footer from '../../components/common/Footer/Footer'; // Importa el Footer
import ReservationForm from '../../components/specific/ReservationForm/ReservationForm'; // Importa el Formulario de Reserva

const Reservations: React.FC = () => {
  // Datos de ejemplo para el Header (deben ser consistentes en toda la app)
  const headerNavLinks = [
    { label: 'Home', href: '/' },
    { label: 'Rooms', href: '/rooms' },
    { label: 'Amenities', href: '/amenities' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'Contact', href: '/contact' },
    { label: 'Reservations', href: '/reservations' }, // Asegúrate de que este enlace esté aquí
  ];

  return (
    // Contenedor principal con fondo oscuro y layout de columna
    <div className="bg-gray-900 text-white min-h-screen flex flex-col">
      {/* Header Component */}
      <Header logoText="Tu Hotel" navLinks={headerNavLinks} />

      {/* Sección de Encabezado de Página (similar a la de Rooms) */}
      {/* Padding superior para dejar espacio del header, centrado de texto, padding inferior, fondo gris oscuro */}
      <section className="pt-32 pb-16 bg-gray-800 text-center">
        <div className="container mx-auto px-4">
          {/* Título de la página - Puedes mantener "Realiza tu Reserva" o usar "Reserva con nosotros" si prefieres */}
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="text-amber-500">Realiza</span> tu Reserva
            {/* O usa: <span className="text-amber-500">Reserva</span> con nosotros */}
          </h1>
          {/* Descripción corta */}
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Selecciona tus fechas y detalles para asegurar tu estancia perfecta.
          </p>
        </div>
      </section>

      {/* Área Principal del Contenido - Contiene el Formulario de Reserva */}
      {/* py-12 para padding vertical, px-4 para horizontal, centrado del contenedor principal */}
      <main className="flex-grow py-12 px-4 md:px-8 container mx-auto">

        {/* Renderiza el componente ReservationForm */}
        <ReservationForm />

      </main>

      {/* Footer Component */}
      <Footer />
    </div>
  );
};

export default Reservations;