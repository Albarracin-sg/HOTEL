// src/components/specific/AranyaGallery/AranyaGallery.tsx

// 1. Importar tipos explícitamente
import React, { useState, useEffect } from 'react';
import type { FC, ReactNode } from 'react'; // <-- Importación de tipo para FC y ReactNode

// Importar solo los iconos que se usan
import { ChevronLeft, ChevronRight, Heart, Info, Leaf, MapPin, Palette, Sparkles, Code } from 'lucide-react'; // Eliminado Expand, Home, Flag

// !! Importación CORRECTA del componente Image de Next.js !!
import Image from 'next/image';

// Interface definitions
interface GalleryItem {
  id: number;
  title: string;
  description: string | ReactNode; // Permitir nodos React (como iconos)
  year?: string; // Opcional si no aplica a todas las secciones
  imageUrl: string; // Aquí solo va la RUTA de la imagen
  alt: string;
  // color: string; // Menos relevante para un estilo minimalista/glass
}

interface CardStyle {
  zIndex: number;
  opacity: number;
  scale: string;
  translateX: string;
  rotateY: string;
  blur?: string;
}

// Datos adaptados de tu sección About Us
const galleryItems: GalleryItem[] = [
  {
    id: 1,
    title: "Nuestra Historia",
    description: "Aranya, concebido desde la serenidad, emergió como un santuario donde el diseño y la naturaleza coexisten. Busca redefinir el escape de lujo.",
    year: "Fundado en 2022",
    imageUrl: "/images/aranya-history-minimal.jpg", // <-- Reemplaza con tus imágenes reales (rutas públicas)
    alt: "Origen de Aranya",
  },
  // ... el resto de tus galleryItems sigue igual ...
  {
    id: 2,
    title: "Misión & Visión",
    description: (
      <>
        <span className="font-medium">Misión:</span> Facilitar un retiro que conecte con la paz interior y el entorno, a través de un servicio discreto y estético.
        <br /><br />
        <span className="font-medium">Visión:</span> Ser un referente de hospitalidad consciente, reconocida por su integración minimalista y respetuosa con el paisaje.
      </>
    ),
    year: "Presente & Futuro",
    imageUrl: "/images/aranya-mission-vision-minimal.jpg", // <-- Reemplaza
    alt: "Misión y Visión de Aranya",
  },
  {
    id: 3,
    title: "Nuestros Valores",
    description: (
        <ul className="list-disc list-inside space-y-1">
            <li><Leaf size={16} className="inline-block mr-1" />Consciencia: Respeto y preservación del entorno.</li>
            <li><Heart size={16} className="inline-block mr-1" />Paz: Un ambiente de calma y reflexión.</li>
            <li><Sparkles size={16} className="inline-block mr-1" />Armonía: Diseño y servicio en equilibrio.</li>
        </ul>
    ),
    year: "Pilares Esenciales",
    imageUrl: "/images/aranya-values-minimal.jpg", // <-- Reemplaza
    alt: "Valores de Aranya",
  },
  {
    id: 4,
    title: "¿Qué nos Hace Únicos?",
    description: (
        <ul className="list-disc list-inside space-y-1">
            <li><MapPin size={16} className="inline-block mr-1" />Entorno: Ubicación prístina para desconexión.</li>
            <li><Palette size={16} className="inline-block mr-1" />Diseño: Arquitectura sutil que complementa la naturaleza.</li>
            <li><Code size={16} className="inline-block mr-1" />Innovación: Integración discreta de tecnología.</li>
        </ul>
    ),
    year: "Distintivos Aranya",
    imageUrl: "/images/aranya-unique-minimal.jpg", // <-- Reemplaza
    alt: "¿Qué nos Hace Únicos?",
  },
];

const AranyaGallery: FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  const [autoplay, setAutoplay] = useState<boolean>(true);

  // Autoplay functionality
  useEffect(() => {
    let intervalId: NodeJS.Timeout; // <-- Asumiendo que ya resolviste el error NodeJS.Timeout
    if (autoplay) {
      intervalId = setInterval(() => {
        goToNext();
      }, 7000);
    }
    return () => clearInterval(intervalId);
  }, [activeIndex, autoplay]);

  // Pause autoplay when user interacts
  const handleUserInteraction = () => {
    setAutoplay(false);
    const timeoutId = setTimeout(() => setAutoplay(true), 20000);
    return () => clearTimeout(timeoutId);
  };

  const goToNext = (): void => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev === galleryItems.length - 1 ? 0 : prev + 1));
    setTimeout(() => setIsAnimating(false), 600);
  };

  const goToPrev = (): void => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev === 0 ? galleryItems.length - 1 : prev - 1));
    setTimeout(() => setIsAnimating(false), 600);
  };

  // Calculate position and scale for each card
  const getCardStyle = (index: number): CardStyle => {
    const totalItems = galleryItems.length;
    const distance = Math.min(
        Math.abs(index - activeIndex),
        Math.abs(index - activeIndex + totalItems),
        Math.abs(index - activeIndex - totalItems)
    );

    let direction = 0;
    if (index !== activeIndex) {
        const directDist = index - activeIndex;
        const wrapDist = directDist > 0 ? directDist - totalItems : directDist + totalItems;
        direction = (Math.abs(directDist) < Math.abs(wrapDist) ? directDist : wrapDist) > 0 ? 1 : -1;
    }

    switch (distance) {
        case 0: // Active card
            return {
                zIndex: 30,
                opacity: 1,
                scale: '1',
                translateX: '0px',
                rotateY: '0deg',
                blur: '0px'
            };
        case 1: // ±1 position
            return {
                zIndex: 20,
                opacity: 0.7,
                scale: '0.88',
                translateX: `${direction * 180}px`,
                rotateY: `${direction * -12}deg`,
                blur: '1px'
            };
        case 2: // ±2 positions
            return {
                zIndex: 10,
                opacity: 0.4,
                scale: '0.75',
                translateX: `${direction * 320}px`,
                rotateY: `${direction * -18}deg`,
                blur: '2px'
            };
        case 3: // ±3 positions
             return {
                zIndex: 5,
                opacity: 0.2,
                scale: '0.65',
                translateX: `${direction * 420}px`,
                rotateY: `${direction * -22}deg`,
                blur: '3px'
            };
        default: // Further positions (less visible or hidden)
            return {
                zIndex: 1,
                opacity: 0,
                scale: '0.5',
                translateX: `${direction * 500}px`,
                rotateY: `${direction * -25}deg`,
                blur: '4px'
            };
    }
  };

  return (
    <div className="w-full h-screen bg-gradient-to-b from-gray-900 to-black flex flex-col items-center justify-center overflow-hidden relative text-white">

        {/* Top navigation bar (Minimalista) */}
        <div className="absolute top-6 w-4/5 max-w-sm z-50">
            <div className="glass-ui text-white rounded-full py-2 px-4 flex items-center justify-center">
                 <span className="text-gray-300 text-sm font-light">Aranya Experiencia</span>
            </div>
        </div>

        {/* Side actions panel (Minimalista) - Opcional */}
        {/* Si no necesitas estos botones, remueve este div */}
        <div className="absolute left-6 top-1/2 transform -translate-y-1/2 z-50 hidden md:flex">
            <div className="glass-ui rounded-full py-4 px-2 flex flex-col space-y-6 text-white/80">
                <button className="p-2 hover:bg-white/10 rounded-full transition-colors"><Info size={20} /></button>
                <button className="p-2 hover:bg-white/10 rounded-full transition-colors"><Heart size={20} /></button>
            </div>
        </div>

        {/* Main gallery carousel */}
        <div
            className="relative w-full h-full flex items-center justify-center overflow-hidden"
            onClick={handleUserInteraction}
        >
            <div className="absolute w-full h-full flex items-center justify-center perspective-1000">
                {galleryItems.map((item, index) => {
                    const style = getCardStyle(index);

                    // No renderizar tarjetas completamente ocultas para optimización si opacity es 0
                    if (style.opacity < 0.05 && style.zIndex === 1) return null; // Umbral un poco más alto

                    return (
                        <div
                            key={item.id}
                            className="absolute transform transition-all ease-in-out duration-600"
                            style={{
                                zIndex: style.zIndex,
                                opacity: style.opacity,
                                transform: `translateX(${style.translateX}) scale(${style.scale}) rotateY(${style.rotateY})`,
                                filter: `blur(${style.blur})`,
                                pointerEvents: style.opacity > 0.1 ? 'auto' : 'none', // Deshabilita eventos en tarjetas casi invisibles
                                backfaceVisibility: 'hidden', // Evita que el contenido se vea al rotar
                            }}
                        >
                            <div
                                className={`rounded-lg overflow-hidden shadow-2xl transition-all glass-effect`} // Aplica la clase glass-effect
                                style={{
                                    width: '460px',
                                    height: '340px',
                                    boxShadow: index === activeIndex ? '0 25px 50px -12px rgba(0, 0, 0, 0.7)' : '0 10px 15px -3px rgba(0, 0, 0, 0.5)',
                                }}
                            >
                                {/* Contenido de la tarjeta: Imagen y texto superpuesto */}
                                <div className="relative w-full h-full">
                                    {/* Usar Next/Image si estás en Next.js */}
                                    <Image
                                        src={item.imageUrl}
                                        alt={item.alt}
                                        layout="fill"
                                        objectFit="cover"
                                        className="pointer-events-none"
                                    />
                                    {/* Overlay degradado sobre la imagen */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none"></div>
                                </div>

                                {/* Contenedor del texto y botones */}
                                <div className="absolute inset-0 flex flex-col justify-between p-8 text-white z-10">
                                    {/* Puedes añadir botones específicos de la tarjeta aquí si son necesarios y solo en la tarjeta activa */}
                                    {/* Ejemplo: if(index === activeIndex) { ... } */}

                                    {/* Bottom Section (Título, Descripción, Año) */}
                                    <div className="relative">
                                        <h3 className="text-3xl font-light mb-3">{item.title}</h3>
                                        <div className="text-sm font-light opacity-90 mb-4 space-y-2">
                                            {item.description}
                                        </div>
                                        {item.year && (
                                             <div className="text-xs opacity-60 font-light">
                                                {item.year}
                                             </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>

        {/* Bottom control bar (Minimalista) */}
        <div className="absolute bottom-16 w-4/5 max-w-md z-50">
            <div className="glass-ui text-white rounded-full py-3 px-6 flex items-center justify-between">
                <button
                    className="p-2 hover:bg-white/10 rounded-full transition-colors"
                    onClick={() => { goToPrev(); handleUserInteraction(); }}
                >
                    <ChevronLeft size={24} />
                </button>

                {/* Información central simplificada */}
                <div className="flex items-center space-x-4 opacity-80">
                     <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                       <Leaf size={20} />
                     </div>
                    <div className="text-left">
                        <p className="text-sm font-light">Aranya</p>
                        {/* Mostrar el título de la tarjeta activa o un texto genérico */}
                        <p className="text-xs text-gray-400 font-light">{galleryItems[activeIndex]?.title || 'Experiencia'}</p>
                    </div>
                </div>

                <button
                    className="p-2 hover:bg-white/10 rounded-full transition-colors"
                    onClick={() => { goToNext(); handleUserInteraction(); }}
                >
                    <ChevronRight size={24} />
                </button>
            </div>
        </div>

        {/* Navigation dots (Minimalista) */}
        <div className="absolute bottom-6 flex space-x-2 z-50">
            {galleryItems.map((_, index) => (
                <button
                    key={index}
                    onClick={() => { setActiveIndex(index); handleUserInteraction(); }}
                    className={`rounded-full transition-all duration-300 ${
                        index === activeIndex
                            ? 'bg-white w-8 h-2'
                            : 'bg-gray-500 w-2 h-2 opacity-50 hover:opacity-80'
                    }`}
                />
            ))}
        </div>
    </div>
  );
};
