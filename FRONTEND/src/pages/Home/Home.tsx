// src/pages/Home/Home.tsx

import React from 'react';
// Importa los componentes fraccionados
import Header from '../../components/common/Header/Header';
import HeroSection from '../../components/specific/HeroSection/HeroSection';
import Footer from '../../components/common/Footer/Footer';

// Importa la imagen de fondo del hero (la del paisaje "Explore Vietnam")
import heroBackground from '../../assets/images/background/v3.jpg'; // Asegúrate que esta ruta sea correcta

const Home: React.FC = () => {
  // Datos para pasar al Header (ejemplo de links de navegación para hotel)
  const headerNavLinks = [
    { label: 'Home', href: '/' },
    { label: 'Rooms', href: '/rooms' }, // Cambiado a Rooms
    { label: 'Amenities', href: '/amenities' }, // Cambiado a Amenities
    { label: 'Gallery', href: '/gallery' }, // Cambiado a Gallery
    { label: 'Contact', href: '/contact' }, // Cambiado a Contact
  ];

  // Datos para pasar al HeroSection (adaptados para un hotel)
  const heroSectionData = {
    backgroundImageUrl: heroBackground, // Usa la imagen importada
    subtitle: 'Descubre', // Subtítulo elegante
    mainTitle: 'TU PARAÍSO', // Título principal (ej: nombre del hotel o destino)
    description: 'Sumérgete en una experiencia de lujo y tranquilidad inigualable. Explora la belleza natural y relájate en un entorno sereno.', // Descripción del hotel
    button1Text: 'Reservar Ahora', // Texto del primer botón
    button1Link: '/reservations', // Link del primer botón
    button2Text: 'Ver Habitaciones', // Texto del segundo botón
    button2Link: '/rooms', // Link del segundo botón
  };

  return (
    // Contenedor principal que define el layout general de la página
    <div className="bg-gray-900 text-white min-h-screen flex flex-col">
      {/* Renderiza el componente Header, pasándole las props */}
      <Header logoText="Tu Hotel" navLinks={headerNavLinks} />

      {/* Renderiza el componente HeroSection, pasándole los datos */}
      <HeroSection {...heroSectionData} />

      {/* Renderiza el componente Footer */}
      <Footer className="w-full absolute bottom-0 p-6 z-20"/>
    </div>
  );
};

export default Home;