// src/pages/Gallery/Gallery.tsx

import React from 'react';
import Header from '../../components/common/Header/Header'; // Importa el Header
import Footer from '../../components/common/Footer/Footer'; // Importa el Footer

const Gallery: React.FC = () => {
  // Datos de ejemplo para el Header (asegúrate de que coincidan con los de Home)
  const headerNavLinks = [
    { label: 'Home', href: '/' },
    { label: 'Rooms', href: '/rooms' },
    { label: 'Amenities', href: '/amenities' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'Contact', href: '/contact' },
  ];

  // Datos de ejemplo para imágenes de la galería
  const galleryImages = [
    { id: 1, src: 'gallery-pool.jpg', alt: 'Piscina del hotel' },
    { id: 2, src: 'gallery-lobby.jpg', alt: 'Lobby del hotel' },
    { id: 3, src: 'gallery-restaurant.jpg', alt: 'Restaurante del hotel' },
    { id: 4, src: 'gallery-room-view.jpg', alt: 'Vista desde la habitación' },
    { id: 5, src: 'gallery-spa.jpg', alt: 'Área de spa' },
    { id: 6, src: 'gallery-exterior.jpg', alt: 'Exterior del hotel' },
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
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-amber-500">Galería</h1>

        {/* Grid de Galería de Imágenes */}
        {/* Grid responsivo: 2 columnas en móvil, 3 en md, 4 en lg. Espacio entre imágenes */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
           {galleryImages.map(image => (
             // Contenedor de Imagen
             // overflow-hidden para mantener las esquinas redondeadas de la imagen
             <div key={image.id} className="rounded-lg overflow-hidden shadow-lg">
               {/* Imagen de la galería (placeholder) */}
               {/* Asegúrate de tener imágenes en src/assets/images/gallery/ */}
               {/* object-cover para asegurar que la imagen cubra el área sin distorsionarse */}
               <img src={`/assets/images/gallery/${image.src}`} alt={image.alt} className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300 cursor-pointer" /> {/* Efecto hover de escala */}
             </div>
           ))}
        </div>

      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Gallery;