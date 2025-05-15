import React, { useState, useEffect } from 'react';
import type { FC } from 'react';
import { ChevronLeft, ChevronRight, Heart, Info, Link } from 'lucide-react'; 
// Import the background image as specified
//import heroBackground from "../../../assets/images/background/v4.jpg";
const heroBackground = "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80";

// Interface definitions
interface GalleryItem {
  id: number;
  title: string;
  quote?: string;

  imageUrl: string;
  alt: string;
}

interface CardStyle {
  zIndex: number;
  opacity: number;
  scale: string;
  translateX: string;
  rotateY: string;
  blur?: string;
}

// Gallery items representing famous artworks
const galleryItems: GalleryItem[] = [
  {
    id: 1,
    title: "Nuestra Historia",
    quote: "Aranya nació del sueño de crear un santuario donde el lujo se mezclara con la serenidad de la naturaleza. Inspirado en los paisajes exóticos y la cultura local, este proyecto abrió sus puertas en 2022 como un refugio para quienes buscan desconexión auténtica y experiencias memorables.",
    imageUrl: "https://images.unsplash.com/photo-1559027615-cdcbf0b1caa8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    alt: "Montañas rodeadas de niebla y naturaleza",
  },
  {
    id: 2,
    title: "Nuestra Misión",
    quote: "Brindar experiencias únicas de descanso, confort y conexión con la naturaleza, combinando hospitalidad de clase mundial con un profundo respeto por el entorno.",
    imageUrl: "https://images.unsplash.com/photo-1605556844014-0d1e3a4b5123?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    alt: "Experiencia de relajación en contacto con la naturaleza",
  },
  {
    id: 3,
    title: "Nuestros Valores",
    quote: "En Aranya creemos en la sostenibilidad, la hospitalidad personalizada, la autenticidad cultural y la innovación constante como pilares de cada experiencia que ofrecemos.",
    imageUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    alt: "Sendero natural rodeado de vegetación",
  },
  {
    id: 4,
    title: "Lo que nos hace únicos",
    quote: "Nuestra ubicación privilegiada entre montañas y ríos, el diseño ecológico de nuestras villas y nuestras experiencias personalizadas nos convierten en un destino inolvidable.",
    imageUrl: "https://images.unsplash.com/photo-1587502537745-84dc75c3a2e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    alt: "Vista aérea de eco-lodges junto a un río",
  },
  {
    id: 5,
    title: "Testimonios de Huéspedes",
    quote: "“Dormir rodeado de montañas y despertar con el sonido del río… no tiene precio.” – David R., España",
    imageUrl: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    alt: "Huésped disfrutando del amanecer desde su habitación",
  },
];

const AranyaGallery: FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  const [autoplay, setAutoplay] = useState<boolean>(true);

  // Autoplay functionality
  useEffect(() => {
    let intervalId: NodeJS.Timeout;
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
    const timeoutId = setTimeout(() => setAutoplay(true), 20000); // Resume autoplay after 20 seconds
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
    // Determine the shortest distance (considering wrap-around)
    let distance = Math.min(
      Math.abs(index - activeIndex),
      Math.abs(index - activeIndex + totalItems),
      Math.abs(index - activeIndex - totalItems)
    );

    // Determine direction for translateX and rotateY
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

  // CSS for glass UI effect
  const glassStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.1)', // Slightly transparent white
    backdropFilter: 'blur(10px)', // Frosted glass effect
    border: '1px solid rgba(255, 255, 255, 0.15)', // Subtle white border
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' // Soft shadow
  };

  const activeArtwork = galleryItems[activeIndex];

  return (
    <div className="w-full h-screen relative flex flex-col items-center justify-center overflow-hidden text-white">
      {/* Real museum gallery background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        
        style={{
          //backgroundImage: `url(${heroBackground})`, // Using the specified path
          filter: 'blur(0)', // No blur on the background
        }}
      />
      
      {/* Dim overlay for better visibility */}
      <div className="absolute inset-0 bg-black opacity-30"></div>

      {/* Top navigation bar - browser-like */}
      <div className="absolute top-4 w-4/5 md:w-2/3 lg:w-1/2 z-50">
        <div className="rounded-full py-2 px-4 flex items-center justify-between space-x-3" style={glassStyle}>
          <div className="flex items-center space-x-2">
            <button className="p-1 hover:bg-white/10 rounded-full transition-colors">
              <ChevronLeft size={18} />
            </button>
            <button className="p-1 hover:bg-white/10 rounded-full transition-colors">
              <ChevronRight size={18} />
            </button>
          </div>
          
          <div className="flex-1 flex items-center justify-center bg-white/5 rounded-full px-4 py-1">
            <span className="text-gray-300 text-sm">🔒 ArtMuseum.com</span>
          </div>
          
          <div className="flex items-center space-x-2">
            <button className="p-1 hover:bg-white/10 rounded-full transition-colors">
              <span className="text-lg">+</span>
            </button>
            <button className="p-1 hover:bg-white/10 rounded-full transition-colors">
              <span className="text-lg">⊙</span>
            </button>
            <button className="p-1 hover:bg-white/10 rounded-full transition-colors">
              <span className="text-lg">□</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main gallery carousel */}
      <div
        className="relative w-full h-full flex items-center justify-center overflow-hidden"
        onClick={handleUserInteraction}
      >
        <div className="absolute w-full h-full flex items-center justify-center" style={{ perspective: '1500px' }}>
          {galleryItems.map((item, index) => {
            const style = getCardStyle(index);

            // Don't render completely hidden cards
            if (style.opacity < 0.05) return null;

            return (
              <div
                key={item.id}
                className="absolute transform transition-all ease-in-out duration-600"
                style={{
                  zIndex: style.zIndex,
                  opacity: style.opacity,
                  transform: `translateX(${style.translateX}) scale(${style.scale}) rotateY(${style.rotateY})`,
                  filter: `blur(${style.blur})`,
                  pointerEvents: index === activeIndex ? 'auto' : 'none',
                }}
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
                  {/* Card Content: Image */}
                  <div className="relative w-full h-full">
                    <img
                      src={item.imageUrl}
                      alt={item.alt}
                      className="w-full h-full object-cover"
                    />
                    
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                    
                    {/* Text content */}
                    <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                      <h3 className="text-2xl font-light">{item.title}</h3>
                      
                      {item.quote && (
                        <p className="text-sm font-light opacity-90 my-2 italic">
                          "{item.quote}"
                        </p>
                      )}
                      
                      <div className="flex items-center justify-between mt-1">
                        
                        
                        {index === activeIndex && (
                          <button className="rounded-full bg-white/20 p-2 hover:bg-white/30 transition-colors">
                            <span className="text-xs font-light px-1">Expand</span>
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Artist profile at bottom */}
      <div className="absolute bottom-12 z-50">
        <div 
          className="rounded-full py-2 px-4 flex items-center justify-between space-x-4" 
          style={glassStyle}
        >
          <button
            className="p-1 hover:bg-white/10 rounded-full transition-colors"
            onClick={() => { goToPrev(); handleUserInteraction(); }}
          >
            <ChevronLeft size={20} />
          </button>
            
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-full bg-gray-300 overflow-hidden flex-shrink-0">
              <img 
                src="/api/placeholder/32/32" 
                className="w-full h-full object-cover"
              />
            </div>
            
          </div>
            
          <button
            className="p-1 hover:bg-white/10 rounded-full transition-colors"
            onClick={() => { goToNext(); handleUserInteraction(); }}
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* Progress indicator */}
      <div className="absolute bottom-6 flex items-center justify-center space-x-1 z-50">
        {galleryItems.map((_, index) => (
          <button
            key={index}
            onClick={() => { setActiveIndex(index); handleUserInteraction(); }}
            className="transition-all duration-300"
          >
            <div 
              className={`h-1 rounded-full transition-all duration-300 ${
                index === activeIndex 
                  ? 'bg-white w-12' 
                  : 'bg-white/40 w-2'
              }`}
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default AranyaGallery;