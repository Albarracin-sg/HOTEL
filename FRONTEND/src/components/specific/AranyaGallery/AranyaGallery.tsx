import type { FC } from 'react';
import { useAranyaGallery } from './useAranyaGallery';
import { AranyaCard } from './AranyaCard';
import { AranyaControls } from './AranyaControls';
import { blackBackground } from './AranyaGallery.data';
import './AranyaGallery.css';

const AranyaGallery: FC = () => {
  const {
    activeIndex,
    goToNext,
    goToPrev,
    getCardStyle,
    handleUserInteraction,
    handleCardClick,
    galleryItems: items,
  } = useAranyaGallery();

  const activeItemTitle = items[activeIndex]?.title || 'Experiencia';

  return (
    <div className="w-full h-screen bg-gradient-to-b from-gray-900 to-black flex flex-col items-center justify-center overflow-hidden relative text-white">
      
      {/* Fondo en video 
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={blackBackground} type="video/mp4" />
        Tu navegador no soporta video HTML5.
      </video>*/}

      {/* Fondo de imagen (opcional) */}
      <img
        src={blackBackground}
        alt="Fondo de galería"
        className="absolute inset-0 w-full h-full object-cover z-0"
        style={{ 
          filter: 'blur(8px) brightness(0.4)', // Oscurece y desenfoca
          transform: 'scale(1.05)' // Pequeño zoom para compensar el blur
        }}
      />

      {/* Contenedor principal del carrusel */}
      <div
        className="relative w-full h-full flex items-center justify-center overflow-hidden z-10"
        onClick={handleUserInteraction}
      >
        <div className="absolute w-full h-full flex items-center justify-center" style={{ perspective: '1500px' }}>
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
