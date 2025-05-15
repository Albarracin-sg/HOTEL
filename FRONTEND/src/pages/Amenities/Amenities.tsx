// src/pages/Amenities/Amenities.tsx

import React from 'react';
import Header from '../../components/common/Header/Header'; // Importa el Header
import Footer from '../../components/common/Footer/Footer'; // Importa el Footer

const Amenities: React.FC = () => {
  // Datos de ejemplo para el Header (asegúrate de que coincidan con los de Home)
  const headerNavLinks = [
    { label: 'Home', href: '/' },
    { label: 'Rooms', href: '/rooms' },
    { label: 'Amenities', href: '/amenities' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'Contact', href: '/contact' },
  ];

  // Datos de ejemplo para servicios del hotel
  const amenitiesList = [
    { name: 'Piscina Infinity', description: 'Relájate en nuestra impresionante piscina con vistas panorámicas.' },
    { name: 'Spa y Bienestar', description: 'Una gama completa de tratamientos para rejuvenecer cuerpo y mente.' },
    { name: 'Gimnasio Equipado', description: 'Mantente activo con nuestro moderno equipo de fitness.' },
    { name: 'Restaurante Gourmet', description: 'Deléitate con exquisiteces locales e internacionales.' },
    { name: 'Wi-Fi Gratuito de Alta Velocidad', description: 'Conexión confiable en todas las áreas del hotel.' },
    { name: 'Servicio a la Habitación 24/7', description: 'Disfruta de nuestro menú en la comodidad de tu habitación.' },
  ];

  return (
    // Contenedor principal con fondo oscuro, texto blanco y layout de columna
    <div className="bg-gray-900 text-white min-h-screen flex flex-col">
      {/* Header */}
      <Header logoText="Tu Hotel" navLinks={headerNavLinks} />

      {/* Main Content Area */}
      {/* pt-24 para espacio del header, padding horizontal, centrado, ancho máximo */}
      <main className="flex-grow pt-24 px-4 md:px-8 container mx-auto">

        {/* Título de la página */}
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-amber-500">Nuestros Servicios</h1>

        {/* Lista de Servicios */}
        {/* Grid o lista simple con espacio entre items */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
           {amenitiesList.map((amenity, index) => (
             // Item de Servicio
             // Fondo oscuro, padding, esquinas redondeadas, sombra
             <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg">
               {/* Nombre del Servicio */}
               <h2 className="text-2xl font-semibold mb-2 text-amber-400">{amenity.name}</h2>
               {/* Descripción del Servicio */}
               <p className="text-gray-300">{amenity.description}</p>
             </div>
           ))}
        </div>

      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Amenities;