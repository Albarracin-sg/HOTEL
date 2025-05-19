import React from 'react';

// !!! IMÁGENES DE ALTA CALIDAD SON CRUCIALES AQUÍ !!!
// Asegúrate de reemplazar '../assets/images/background/v1.jpg' con tus imágenes reales
import vistaSerena from '../assets/images/background/v1.jpg';
import texturaPiedra from '../assets/images/background/v1.jpg';
import detalleArquitectonico from '../assets/images/background/v1.jpg';
import momentoCalma from '../assets/images/background/v1.jpg';
import experienciaCulinaria from '../assets/images/background/v1.jpg';
import experienciaNaturaleza from '../assets/images/background/v1.jpg';



// Definición de clases comunes para mantener consistencia visual
const goldColorClass = 'text-amber-500';
const softBlackClass = 'bg-gray-950';
const textGrayClass = 'text-gray-300';

const AboutUsVisual: React.FC = () => {
  return (
    <section 
      id="about" 
      className={`${softBlackClass} ${textGrayClass} py-20 md:py-32 lg:py-40 overflow-hidden scroll-mt-20`}  
      // scroll-mt-20 añade margen superior para el scroll, considerando la altura del navbar
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 max-w-8xl">

        {/* --- Introducción Minimalista y Elegante --- */}
        <div className="text-center mb-16 md:mb-24 lg:mb-32">
          <h2 className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-light ${goldColorClass} mb-4 tracking-tight leading-none`}>
            Aranya
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-400 font-light italic max-w-xl mx-auto">
            El Arte de la Calma
          </p>
        </div>

        {/* --- Bloque Visual 1: Vista Serena --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 lg:gap-20 items-center mb-16 md:mb-24 lg:mb-32">
          <div className="md:col-span-2 relative overflow-hidden rounded-lg shadow-xl group">
            <img
              src={vistaSerena}
              alt="Vista panorámica de paisajes naturales rodeando al hotel Aranya"
              className="w-full h-64 sm:h-72 md:h-80 lg:h-96 object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
            <div className={`absolute -bottom-8 md:-bottom-12 left-8 md:left-auto md:right-8 ${softBlackClass} p-4 sm:p-5 rounded-lg shadow-xl text-center`}>
              <p className={`text-sm font-light ${goldColorClass}`}>Refugio Natural</p>
            </div>
          </div>
          <div className="md:col-span-1 px-4 md:px-0 mt-12 md:mt-0">
            <h3 className={`text-2xl sm:text-3xl font-serif font-light ${goldColorClass} mb-4`}>
              Vista Serena
            </h3>
            <p className="text-base sm:text-lg font-light leading-relaxed">
              Un santuario donde la arquitectura se funde con la naturaleza, ofreciendo un retiro de paz absoluta.
            </p>
          </div>
        </div>

        {/* --- Bloque Visual 2: Diseño y Arquitectura --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 lg:gap-20 items-center mb-16 md:mb-24 lg:mb-32">
          <div className="md:col-span-1 px-4 md:px-0 mb-12 md:mb-0 order-2 md:order-1">
            <h3 className={`text-2xl sm:text-3xl font-serif font-light ${goldColorClass} mb-4`}>
              Diseño Consciente
            </h3>
            <p className="text-base sm:text-lg font-light leading-relaxed">
              Materiales nobles y líneas puras crean espacios que inspiran serenidad y respetan el entorno natural circundante.
            </p>
          </div>
          <div className="md:col-span-2 overflow-hidden rounded-lg shadow-xl group order-1 md:order-2">
            <img
              src={detalleArquitectonico}
              alt="Detalle arquitectónico minimalista que muestra la integración de materiales naturales"
              className="w-full h-64 sm:h-72 md:h-80 lg:h-96 object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
          </div>
        </div>

        {/* --- Bloque Visual 3: Textura y Filosofía --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 lg:gap-20 items-center mb-16 md:mb-24 lg:mb-32">
          <div className="md:col-span-2 relative overflow-hidden rounded-lg shadow-xl group">
            <img
              src={texturaPiedra}
              alt="Textura de piedra natural incorporada en los espacios de Aranya"
              className="w-full h-64 sm:h-72 md:h-80 lg:h-96 object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
            <div className={`absolute -bottom-8 md:-bottom-12 left-8 md:left-auto md:right-8 ${softBlackClass} p-4 sm:p-5 rounded-lg shadow-xl text-center`}>
              <p className={`text-sm font-light ${goldColorClass}`}>Paz Interior</p>
            </div>
          </div>
          <div className="md:col-span-1 px-4 md:px-0 mt-12 md:mt-0">
            <h3 className={`text-2xl sm:text-3xl font-serif font-light ${goldColorClass} mb-4`}>
              Filosofía de Bienestar
            </h3>
            <p className="text-base sm:text-lg font-light leading-relaxed">
              Un espacio para desconectar, reconectar y encontrar el equilibrio en un entorno que respeta la esencia natural.
            </p>
          </div>
        </div>

        {/* --- Bloque Visual 4: Experiencias / Momentos Clave --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 lg:gap-12 mb-16 md:mb-24 lg:mb-32">
          {/* Card 1 */}
          <div className="transform transition-transform duration-500 hover:-translate-y-4">
            <div className={`${softBlackClass} rounded-lg shadow-2xl overflow-hidden h-full`}>
              <div className="overflow-hidden">
                <img
                  src={momentoCalma}
                  alt="Espacio de relajación diseñado para momentos de calma en Aranya"
                  className="w-full h-56 sm:h-64 lg:h-72 object-cover transition-transform duration-500 hover:scale-110"
                  loading="lazy"
                />
              </div>
              <div className="p-5 sm:p-6 text-center">
                <h4 className={`text-lg sm:text-xl font-serif font-light ${goldColorClass} mb-3`}>Serenidad</h4>
                <p className={`${textGrayClass} text-sm sm:text-base font-light`}>Instantes de paz que transforman el presente.</p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="transform transition-transform duration-500 hover:-translate-y-4">
            <div className={`${softBlackClass} rounded-lg shadow-2xl overflow-hidden h-full`}>
              <div className="overflow-hidden">
                <img
                  src={experienciaCulinaria}
                  alt="Experiencia gastronómica exclusiva ofrecida en Aranya"
                  className="w-full h-56 sm:h-64 lg:h-72 object-cover transition-transform duration-500 hover:scale-110"
                  loading="lazy"
                />
              </div>
              <div className="p-5 sm:p-6 text-center">
                <h4 className={`text-lg sm:text-xl font-serif font-light ${goldColorClass} mb-3`}>Sabores</h4>
                <p className={`${textGrayClass} text-sm sm:text-base font-light`}>Gastronomía sutil que despierta los sentidos.</p>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="transform transition-transform duration-500 hover:-translate-y-4">
            <div className={`${softBlackClass} rounded-lg shadow-2xl overflow-hidden h-full`}>
              <div className="overflow-hidden">
                <img
                  src={experienciaNaturaleza}
                  alt="Actividades en la naturaleza disponibles cerca de Aranya"
                  className="w-full h-56 sm:h-64 lg:h-72 object-cover transition-transform duration-500 hover:scale-110"
                  loading="lazy"
                />
              </div>
              <div className="p-5 sm:p-6 text-center">
                <h4 className={`text-lg sm:text-xl font-serif font-light ${goldColorClass} mb-3`}>Explora</h4>
                <p className={`${textGrayClass} text-sm sm:text-base font-light`}>Descubre el entorno y conecta con la naturaleza.</p>
              </div>
            </div>
          </div>
        </div>

        {/* --- Llamado a la acción --- */}
        <div className="text-center">
          <h3 className={`text-2xl sm:text-3xl md:text-4xl font-serif font-light ${goldColorClass} mb-6 md:mb-8`}>
            Vive la Experiencia Aranya
          </h3>
          <a
            href="#reservations"
            className={`inline-block border border-current ${goldColorClass} bg-transparent text-base sm:text-lg py-3 px-8 sm:px-10 rounded-full font-light hover:bg-amber-500 hover:text-gray-950 transition duration-300 shadow-lg tracking-wide`}
            aria-label="Reservar una estancia en Aranya"
          >
            Reservar
          </a>
        </div>

        {/* Espaciador para secciones adicionales */}
        <div className="mt-32 md:mt-40">
          {/* TODO: Componente Contáctanos aquí */}
        </div>

        <div className="mt-32 md:mt-40">
          {/* TODO: Componente Reserva aquí */}
        </div>

      </div>
    </section>
  );
};

export default AboutUsVisual;