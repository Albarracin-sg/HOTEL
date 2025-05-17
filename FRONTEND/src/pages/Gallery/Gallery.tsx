import React from 'react';
import Header from '../../components/common/Header/Header';
import Footer from '../../components/common/Footer/Footer';
import AranyaGallery from "../../components/specific/AranyaGallery/AranyaGallery";

const Gallery: React.FC = () => {
  // Datos para la navegación
  const headerNavLinks = [
    { label: 'Home', href: '/' },
    { label: 'Rooms', href: '/rooms' },
    { label: 'Amenities', href: '/amenities' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'Contact', href: '/contact' },
    { label: 'Reservations', href: '/reservations' },
  ];

  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col">
      {/* Header con fondo semi-transparente */}
      <div className="sticky top-0 z-50 bg-gray-900 bg-opacity-80">
        <Header logoText="Galeria" navLinks={headerNavLinks} />
      </div>
      
      {/* AranyaGallery como componente principal */}
      <main className="flex-grow overflow-hidden">
        <AranyaGallery />
      </main>
      
      {/* Footer con fondo semi-transparente */}
      <div className="bg-gray-900 bg-opacity-80">
        <Footer className='w-full absolute bottom-0 p-6 z-20'/>
      </div>
    </div>
  );
};

export default Gallery;