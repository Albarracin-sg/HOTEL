// src/pages/Contact/Contact.tsx

import React from 'react';
import Header from '../../components/common/Header/Header'; // Importa el Header
import Footer from '../../components/common/Footer/Footer'; // Importa el Footer

const Contact: React.FC = () => {
  // Datos de ejemplo para el Header (asegúrate de que coincidan con los de Home)
  const headerNavLinks = [
    { label: 'Home', href: '/' },
    { label: 'Rooms', href: '/rooms' },
    { label: 'Amenities', href: '/amenities' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'Contact', href: '/contact' },
    { label: 'Reservations', href: '/reservations' }, 
  ];


  return (
    // Contenedor principal con fondo oscuro, texto blanco y layout de columna
    <div className="bg-gray-900 text-white min-h-screen flex flex-col">
      {/* Header */}
      <Header logoText="Tu Hotel" navLinks={headerNavLinks} />

      {/* Main Content Area */}
      {/* pt-24 para espacio del header, padding horizontal, centrado, ancho máximo */}
      <main className="flex-grow pt-24 px-4 md:px-8 container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12"> {/* Layout de 2 columnas en desktop */}

        {/* Sección de Información de Contacto */}
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg flex flex-col justify-center">
          {/* Título de la sección */}
          <h2 className="text-3xl font-bold mb-6 text-amber-500">Contáctanos</h2>
          {/* Información */}
          <p className="text-lg text-gray-300 mb-4">Si tienes alguna pregunta o necesitas asistencia, no dudes en contactarnos.</p>
          <div className="text-gray-300">
            <p className="mb-2"><span className="font-semibold text-amber-400">Dirección:</span> Calle Principal 123, Ciudad, País</p>
            <p className="mb-2"><span className="font-semibold text-amber-400">Teléfono:</span> +123 456 7890</p>
            <p className="mb-2"><span className="font-semibold text-amber-400">Email:</span> info@tuhotel.com</p>
          </div>
           {/* Mapa (Placeholder) */}
           <div className="mt-8 bg-gray-700 h-48 rounded-lg flex items-center justify-center text-gray-400">
              Placeholder para Mapa
           </div>
        </div>

        {/* Sección del Formulario de Contacto */}
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
          {/* Título del Formulario */}
          <h2 className="text-3xl font-bold mb-6 text-amber-500">Envíanos un Mensaje</h2>
          {/* Formulario (Placeholder) */}
          <form>
            {/* Campo Nombre */}
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-300 text-sm font-semibold mb-2">Nombre</label>
              <input type="text" id="name" className="w-full px-3 py-2 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-amber-500" />
            </div>
            {/* Campo Email */}
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-300 text-sm font-semibold mb-2">Email</label>
              <input type="email" id="email" className="w-full px-3 py-2 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-amber-500" />
            </div>
            {/* Campo Mensaje */}
            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-300 text-sm font-semibold mb-2">Mensaje</label>
              <textarea id="message" rows={4} className="w-full px-3 py-2 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-amber-500"></textarea>
            </div>
            {/* Botón Enviar */}
            <button type="submit" className="w-full px-4 py-2 bg-amber-500 text-gray-900 font-semibold rounded hover:bg-amber-600 transition duration-300">
              Enviar Mensaje
            </button>
          </form>
        </div>

      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Contact;