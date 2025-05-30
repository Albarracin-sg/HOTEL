import type { FC } from 'react';
import { useAranyaGallery } from './useAranyaGallery';
import { AranyaCard } from './AranyaCard';
import { AranyaControls } from './AranyaControls';
import { blackBackground } from './AranyaGallery.data';
import './AranyaGallery.css';
import { useTranslation } from "react-i18next";

const AranyaGallery: FC = () => {
  const { t } = useTranslation();
  const {
    activeIndex,
    goToNext,
    goToPrev,
    getCardStyle,
    handleUserInteraction,
    handleCardClick,
    galleryItems: items,
  } = useAranyaGallery();

  const activeItemTitle = items[activeIndex]?.title ? t(items[activeIndex].title as any) : t('gallery.experience');

  return (
    <>
      {/* Contenedor principal de la galería */}
      <div className="w-full h-screen bg-gradient-to-b from-gray-900 to-black flex flex-col items-center justify-center overflow-hidden relative text-white">
       
        {/* Fondo de imagen de la galería */}
        <img
          src={blackBackground}
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
          <div className="absolute w-full h-full flex items-center justify-center" style={{ perspective: '1000px' }}>
            {items.map((item, index) => {
              const style = getCardStyle(index);
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
      </div>

      {/* Controles del carrusel - FUERA del contenedor principal */}
      <AranyaControls
        goToPrev={() => { goToPrev(); handleUserInteraction(); }}
        goToNext={() => { goToNext(); handleUserInteraction(); }}
        activeItemTitle={activeItemTitle}
      />
    </>
  );
};

export default AranyaGallery;