// src/components/specific/AranyaGallery/AranyaGallery.tsx
import type { FC } from 'react';
import { useAranyaGallery } from './useAranyaGallery';
import { AranyaCard } from './AranyaCard';
import { AranyaControls } from './AranyaControls';
import { blackBackground } from './AranyaGallery.data';
import './AranyaGallery.css';
import { useLanguage } from "../../common/context/LanguageContext"; // Importa el hook useLanguage

const AranyaGallery: FC = () => {
  const { t } = useLanguage(); // Usa el hook de traducción

  const {
    activeIndex,
    goToNext,
    goToPrev,
    getCardStyle,
    handleUserInteraction,
    handleCardClick,
    galleryItems: items, // Renombra a 'items' para mayor claridad
  } = useAranyaGallery();

  // Obtiene el título del elemento activo, traducido. Si no hay título, usa una clave de traducción por defecto.
  const activeItemTitle = items[activeIndex]?.title ? t(items[activeIndex].title as any) : t('gallery.experience');

  return (
    <div className="w-full h-screen bg-gradient-to-b from-gray-900 to-black flex flex-col items-center justify-center overflow-hidden relative text-white">
     
      {/* Fondo de imagen de la galería */}
      <img
        src={blackBackground}
        // Traduce el texto alternativo de la imagen de fondo
        alt={t('gallery.backgroundAlt')}
        className="absolute inset-0 w-full h-full object-cover z-0"
        style={{
          filter: 'blur(8px) brightness(0.4)',
          transform: 'scale(1.05)'
        }}
      />
      {/* Contenedor principal del carrusel */}
      <div
        className="relative w-full h-full flex items-center justify-center overflow-hidden z-10"
        onClick={handleUserInteraction}
      >
        {/* Ajuste de perspectiva para una mejor visualización en pantallas más pequeñas */}
        <div className="absolute w-full h-full flex items-center justify-center" style={{ perspective: '1000px' }}>
          {items.map((item, index) => {
            const style = getCardStyle(index);
            // Solo renderiza las tarjetas si son mínimamente visibles para optimizar el rendimiento
            if (style.opacity < 0.01) return null;
            return (
              <AranyaCard
                key={item.id}
                item={item}
                index={index}
                activeIndex={activeIndex}
                style={style}
                onClick={handleCardClick}
              />
            );
          })}
        </div>
      </div>
      {/* Controles del carrusel */}
      <AranyaControls
        goToPrev={() => { goToPrev(); handleUserInteraction(); }}
        goToNext={() => { goToNext(); handleUserInteraction(); }}
        activeItemTitle={activeItemTitle}
      />
    </div>
  );
};

export default AranyaGallery;