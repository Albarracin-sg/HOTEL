// src/pages/Gallery/Gallery.tsx
import React from 'react';
import Header from '../../components/common/Header/Header';
import Footer from '../../components/common/Footer/Footer';
import AranyaGallery from "../../components/specific/AranyaGallery/AranyaGallery";
import { useLanguage } from '../../components/common/context/LanguageContext'; // Importa el hook useLanguage

const Gallery: React.FC = () => {
  const { t } = useLanguage(); // Usa el hook de traducción para acceder a la función 't'

  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col">
      {/* Header con fondo semi-transparente */}
      <div className="sticky top-0 z-50 bg-gray-900 bg-opacity-80">
        {/* Pasa el texto 'Galería' traducido al componente Header */}
        <Header logoText={t('nav.gallery')} />
      </div>

      {/* AranyaGallery como componente principal */}
      <main className="flex-grow overflow-hidden">
        <AranyaGallery />
      </main>

      <Footer isGalleryPage={true} className='w-full z-20'/>
    </div>
  );
};

export default Gallery;