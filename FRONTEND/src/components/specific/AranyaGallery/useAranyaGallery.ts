import { useState, useEffect } from 'react';
import type { CardStyle, UseAranyaGalleryResult } from './AranyaGallery.types'; // Importar tipos
import { galleryItems } from './AranyaGallery.data'; // Importar los datos de la galería

// Custom hook que encapsula la lógica del carrusel
export const useAranyaGallery = (): UseAranyaGalleryResult => {
  const [activeIndex, setActiveIndex] = useState<number>(0); // Estado para el índice de la tarjeta activa
  const [isAnimating, setIsAnimating] = useState<boolean>(false); // Estado para saber si una animación está en curso
  const [autoplay, setAutoplay] = useState<boolean>(true); // Estado para controlar el autoplay

  // Efecto para manejar el autoplay del carrusel
  useEffect(() => {
    let intervalId: ReturnType<typeof setTimeout>;
    if (autoplay) {
      intervalId = setInterval(() => {
        goToNext();
      }, 3000); // Cambia de slide cada 3 segundos
    }
    // Limpiar el intervalo al desmontar o si autoplay cambia
    return () => clearInterval(intervalId);
  }, [activeIndex, autoplay]); // Reinicia el timer cada vez que cambia el índice o el estado de autoplay

  // Función para pausar temporalmente el autoplay (llamada al interactuar manualmente)
  const handleUserInteraction = () => {
    setAutoplay(false);
    // Opcional: Puedes añadir un timeout aquí para reanudar el autoplay después de un período de inactividad
    // setTimeout(() => setAutoplay(true), 2000);
  };

  // Función para avanzar a la siguiente tarjeta
  const goToNext = (): void => {
    if (isAnimating) return; // Prevenir clics mientras anima
    setIsAnimating(true);
    setActiveIndex((prev) => (prev === galleryItems.length - 1 ? 0 : prev + 1)); // Lógica de ciclo (del último al primero)
    // La duración del timeout debe coincidir con la duración de la transición CSS
    setTimeout(() => setIsAnimating(false), 600); // Desactiva el flag de animación después de la transición
  };

  // Función para retroceder a la tarjeta anterior
  const goToPrev = (): void => {
    if (isAnimating) return; // Prevenir clics mientras anima
    setIsAnimating(true);
    setActiveIndex((prev) => (prev === 0 ? galleryItems.length - 1 : prev - 1)); // Lógica de ciclo (del primero al último)
    // La duración del timeout debe coincidir con la duración de la transición CSS
    setTimeout(() => setIsAnimating(false), 600); // Desactiva el flag de animación después de la transición
  };

  // Determina si una tarjeta está a la izquierda o derecha de la activa (útil para navegación al hacer clic)
   const getCardPosition = (index: number): 'left' | 'right' | 'active' => {
    if (index === activeIndex) return 'active';

    const totalItems = galleryItems.length;
    const directDist = index - activeIndex;
    // Maneja la distancia considerando el ciclo del carrusel
    const wrapDist = directDist > 0 ? directDist - totalItems : directDist + totalItems;
    const effectiveDist = Math.abs(directDist) < Math.abs(wrapDist) ? directDist : wrapDist;

    return effectiveDist < 0 ? 'left' : 'right';
  };


  // Calcula los estilos de transformación y opacidad para cada tarjeta basándose en su distancia al índice activo
  const getCardStyle = (index: number): CardStyle => {
    const totalItems = galleryItems.length;
    // Calcula la distancia más corta alrededor del carrusel
    const distance = Math.min(
      Math.abs(index - activeIndex),
      Math.abs(index - activeIndex + totalItems),
      Math.abs(index - activeIndex - totalItems)
    );

    // Determina la dirección (+1 para derecha, -1 para izquierda)
    let direction = 0;
    if (index !== activeIndex) {
        const directDist = index - activeIndex;
        // Maneja la distancia considerando el ciclo
        const wrapDist = directDist > 0 ? directDist - totalItems : directDist + totalItems;
        direction = (Math.abs(directDist) < Math.abs(wrapDist) ? directDist : wrapDist) > 0 ? 1 : -1;
    }


    // Devuelve los estilos basados en la distancia al centro
    switch (distance) {
        case 0: // Tarjeta activa
            return {
                zIndex: 30,
                opacity: 1,
                scale: '1',
                translateX: '0px',
                rotateY: '0deg',
                blur: '0px'
            };
        case 1: // ±1 posición (izquierda o derecha inmediata)
            return {
                zIndex: 20,
                opacity: 0.7,
                scale: '0.88',
                translateX: `${direction * 180}px`,
                rotateY: `${direction * -12}deg`,
                blur: '1px'
            };
        case 2: // ±2 posiciones
            return {
                zIndex: 10,
                opacity: 0.4,
                scale: '0.75',
                translateX: `${direction * 320}px`,
                rotateY: `${direction * -18}deg`,
                blur: '2px'
            };
          case 3: // ±3 posiciones
              return {
                  zIndex: 5,
                  opacity: 0.2,
                  scale: '0.65',
                  translateX: `${direction * 420}px`,
                  rotateY: `${direction * -22}deg`,
                  blur: '3px'
              };
        default: // Posiciones más lejanas (poco o nada visibles)
            return {
                zIndex: 1,
                opacity: 0, // Completamente transparente
                scale: '0.5',
                translateX: `${direction * 500}px`,
                rotateY: `${direction * -25}deg`,
                blur: '4px'
            };
    }
  };

  // Maneja el clic en una tarjeta específica y navega en la dirección correspondiente
  const handleCardClick = (index: number) => {
    if (isAnimating) return; // Prevenir clics durante la animación
    if (index === activeIndex) return; // No hacer nada si es la tarjeta activa

    const position = getCardPosition(index);
    if (position === 'left') {
      goToPrev();
    } else if (position === 'right') {
      goToNext();
    }

    handleUserInteraction(); // Pausar autoplay en navegación manual
  };


  // Devuelve el estado actual y las funciones de control y lógica
  return {
    activeIndex,
    goToNext,
    goToPrev,
    getCardStyle,
    handleUserInteraction,
    handleCardClick,
    galleryItems, // Exportar los datos a través del hook también es útil
  };
};