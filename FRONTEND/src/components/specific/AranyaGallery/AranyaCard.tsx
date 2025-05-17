import type { FC } from 'react';
import type { AranyaCardProps } from './AranyaGallery.types';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Componente de presentación para una única tarjeta de la galería no renderizar tarjetas completamente ocultas para rendimiento
export const AranyaCard: FC<AranyaCardProps> = ({ item, index, activeIndex, style, onClick }) => {
    if (style.opacity < 0.01) return null;

  // Función para determinar la posición de la tarjeta (izquierda, derecha o activa)
   const getCardPosition = (cardIndex: number): 'left' | 'right' | 'active' => {
      if (cardIndex === activeIndex) return 'active';
      const totalItems = 5;
      const directDist = cardIndex - activeIndex;
      const wrapDist = directDist > 0 ? directDist - totalItems : directDist + totalItems;
      const effectiveDist = Math.abs(directDist) < Math.abs(wrapDist) ? directDist : wrapDist;
      return effectiveDist < 0 ? 'left' : 'right';
   };
   const position = getCardPosition(index);


  return (
    <div
      key={item.id}
      className="absolute transform transition-all ease-in-out duration-600"
      style={{
        zIndex: style.zIndex, // Aplicar zIndex del estilo calculado
        opacity: style.opacity, // Aplicar opacidad del estilo calculado
        transform: `translateX(${style.translateX}) scale(${style.scale}) rotateY(${style.rotateY})`, // Aplicar transformaciones del estilo calculado
        filter: `blur(${style.blur})`, // Aplicar blur del estilo calculado
        pointerEvents: 'auto', // Permitir clics en todas las tarjetas visibles
        cursor: 'pointer', // Mostrar cursor de mano
      }}
      // Llama a la función onClick recibida como prop, pasando el índice de esta tarjeta
      onClick={() => onClick(index)}
    >
      <div
        className="rounded-xl overflow-hidden shadow-2xl"
        style={{
          width: '460px',
          height: '340px',
          boxShadow: index === activeIndex
            ? '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
            : '0 10px 15px -3px rgba(0, 0, 0, 0.4)',
        }}
      >
        {/* Contenido de la tarjeta: Imagen, gradiente, texto */}
        <div className="relative w-full h-full">
          <img
            src={item.imageUrl}
            alt={item.alt}
            className="w-full h-full object-cover"
          />

          {/* Superposición de gradiente */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>

          {/* Indicador visual para mostrar dirección (opcional) */}
          {/* Mostrar solo si NO es la tarjeta activa y si está a la izquierda/derecha */}
          {position === 'left' && ( // Corregida la condición
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 rounded-full p-1">
              <ChevronLeft size={16} className="text-white" />
            </div>
          )}
          {position === 'right' && ( // Corregida la condición
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 rounded-full p-1">
              <ChevronRight size={16} className="text-white" />
            </div>
          )}


          {/* Contenido de texto */}
          <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
            <h3 className="text-2xl font-light">{item.title}</h3>

            {/* Descripción solo para el item activo */}
            {index === activeIndex && (
              <div className="text-sm font-light opacity-90 my-2">
                {item.description} {/* description es ReactNode, puede contener JSX con íconos */}
              </div>
            )}

          </div>
        </div>
      </div>
    </div>
  );
};