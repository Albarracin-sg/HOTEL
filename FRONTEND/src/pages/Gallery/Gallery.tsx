// src/pages/Gallery/Gallery.tsx
import React from "react";
import Header from "../../components/common/Header/Header";
import SocialMedia from "../../components/common/socialMedia/SocialMedia";
import AranyaGallery from "../../components/specific/AranyaGallery/AranyaGallery";
import Footer from "../../components/common/footer/footer";
import { useTranslation } from "react-i18next";

const Gallery: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col">
      {/* Header con fondo semi-transparente */}
      <div className="sticky top-0 z-50 bg-gray-900 bg-opacity-80">
        <Header logoText={t("nav.gallery")} />
      </div>
      
      {/* Galería principal */}
      <main className="flex-grow overflow-hidden">
        <AranyaGallery />
      </main>
      
      {/* Social Media */}
      <SocialMedia isGalleryPage={true} className="w-full z-20" />
      
      {/* Línea decorativa de separación */}
      <div className="h-px bg-gradient-to-r from-transparent via-orange-500/60 to-transparent mx-8 my-4"></div>
      
      {/* Footer integrado */}
      <Footer />
    </div>
  );
};

export default Gallery;