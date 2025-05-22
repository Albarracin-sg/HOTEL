// src/components/specific/AranyaGallery/AranyaCard.tsx
import type { FC } from "react";
import type { AranyaCardProps } from "./AranyaGallery.types";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "../../common/context/LanguageContext"; // Importa el hook useLanguage

export const AranyaCard: FC<AranyaCardProps> = ({
  item,
  index,
  activeIndex,
  style,
  onClick,
}) => {
  const { t } = useLanguage(); // Usa el hook de traducción

  // No renderiza la tarjeta si su opacidad es casi cero (oculta)
  if (style.opacity < 0.01) return null;

  // Función para determinar la posición de la tarjeta (izquierda, derecha o activa)
  const getCardPosition = (cardIndex: number): "left" | "right" | "active" => {
    if (cardIndex === activeIndex) return "active";
    const totalItems = 5; // Asume un total de 5 elementos para la lógica del carrusel
    const directDist = cardIndex - activeIndex;
    const wrapDist =
      directDist > 0 ? directDist - totalItems : directDist + totalItems;
    const effectiveDist =
      Math.abs(directDist) < Math.abs(wrapDist) ? directDist : wrapDist;
    return effectiveDist < 0 ? "left" : "right";
  };

  const position = getCardPosition(index);

  return (
    <div
      key={item.id}
      className="absolute transform transition-all ease-in-out duration-600"
      style={{
        zIndex: style.zIndex,
        opacity: style.opacity,
        transform: `translateX(${style.translateX}) scale(${style.scale}) rotateY(${style.rotateY})`,
        filter: `blur(${style.blur})`,
        pointerEvents: "auto", // Permite clics en todas las tarjetas visibles
        cursor: "pointer", // Muestra cursor de mano
      }}
      // Llama a la función onClick recibida como prop, pasando el índice de esta tarjeta
      onClick={() => onClick(index)}
    >
      <div
        className="rounded-xl overflow-hidden shadow-2xl w-[280px] h-[200px] sm:w-[360px] sm:h-[260px] md:w-[460px] md:h-[340px]"
        style={{
          boxShadow:
            index === activeIndex
              ? "0 25px 50px -12px rgba(0, 0, 0, 0.5)"
              : "0 10px 15px -3px rgba(0, 0, 0, 0.4)",
        }}
      >
        {/* Contenido de la tarjeta: Imagen, gradiente, texto */}
        <div className="relative w-full h-full">
          <img
            src={item.imageUrl}
            // Traduce el texto alternativo de la imagen
            alt={t(item.alt as any)}
            className="w-full h-full object-cover"
          />
          {/* Superposición de gradiente */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
          {/* Indicador visual para mostrar dirección (opcional) */}
          {/* Posición de los íconos de chevron ajustada para móvil (left-2, right-2) y luego para pantallas pequeñas (sm:left-4, sm:right-4) */}
          {position === "left" && (
            <div className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/20 rounded-full p-1 sm:left-4">
              <ChevronLeft size={16} className="text-white" />
            </div>
          )}
          {position === "right" && (
            <div className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/20 rounded-full p-1 sm:right-4">
              <ChevronRight size={16} className="text-white" />
            </div>
          )}
          {/* Contenido de texto */}
          {/* Padding y tamaño de fuente ajustados para móvil (p-4, text-lg, text-xs) y luego para pantallas pequeñas (sm:p-6, sm:text-2xl, sm:text-sm) */}
          <div className="absolute inset-0 flex flex-col justify-end p-4 text-white sm:p-6">
            <h3 className="text-lg font-light sm:text-2xl">
              {t(item.title as any)}
            </h3>{" "}
            {/* Traduce el título */}
            {/* Descripción solo para el item activo */}
            {index === activeIndex && (
              <div className="text-xs font-light opacity-90 my-1 sm:text-sm sm:my-2">
                {t(item.description as any)} {/* Traduce la descripción */}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
