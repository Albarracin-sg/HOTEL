import React from 'react';

// !!! IMÁGENES DE ALTA CALIDAD SON CRUCIALES AQUÍ !!!
// Asegúrate de reemplazar '../assets/images/background/v1.jpg' con tus imágenes reales
import vistaSerena from '../assets/images/background/v1.jpg';
import texturaPiedra from '../assets/images/background/v1.jpg';
import detalleArquitectonico from '../assets/images/background/v1.jpg';
import momentoCalma from '../assets/images/background/v1.jpg';
import experienciaCulinaria from '../assets/images/background/v1.jpg';
import experienciaNaturaleza from '../assets/images/background/v1.jpg';

const goldColorClass = 'text-amber-500';
const softBlackClass = 'bg-gray-950';
const textGrayClass = 'text-gray-300';

const AboutUsVisual: React.FC = () => {
  return (
    <section id="about-us" className={`${softBlackClass} ${textGrayClass} py-32 md:py-40 overflow-hidden`}>
      <div className="container mx-auto px-6 md:px-12 max-w-8xl">

        {/* --- Introducción Minimalista y Elegante --- */}
        <div className="text-center mb-28 md:mb-36">
          <h2 className={`text-5xl md:text-7xl font-serif font-light ${goldColorClass} mb-4 tracking-tight leading-none`}>
            Aranya
          </h2>
          <p className="text-xl md:text-2xl text-gray-400 font-light italic">
            El Arte de la Calma
          </p>
        </div>

        {/* --- Bloque Visual 1: Vista Serena (Diseño similar al bloque 3) --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-20 items-center mb-28 md:mb-36">
          <div className="md:col-span-2 relative overflow-hidden rounded-lg shadow-xl group">
            <img
              src={vistaSerena}
              alt="Vista panorámica serena de Aranya"
              className="w-full h-80 md:h-96 object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className={`absolute -bottom-8 md:-bottom-12 left-8 md:left-auto md:right-8 ${softBlackClass} p-5 rounded-lg shadow-xl text-center`}>
              <p className={`text-sm font-light ${goldColorClass}`}>Refugio Natural</p>
            </div>
          </div>
          <div className="md:col-span-1">
            <h3 className={`text-3xl font-serif font-light ${goldColorClass} mb-4`}>
              Vista Serena
            </h3>
            <p className="text-lg font-light leading-relaxed">
              Un santuario donde la arquitectura se funde con la naturaleza, ofreciendo un retiro de paz absoluta.
            </p>
          </div>
        </div>

        {/* --- Bloque Visual 2: Diseño y Arquitectura --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-20 items-center mb-28 md:mb-36">
          <div className="md:col-span-1">
            <h3 className={`text-3xl font-serif font-light ${goldColorClass} mb-4`}>
              Diseño Consciente
            </h3>
            <p className="text-lg font-light leading-relaxed">
              Materiales nobles y líneas puras crean espacios que inspiran serenidad y respetan el entorno natural circundante.
            </p>
          </div>
          <div className="md:col-span-2 overflow-hidden rounded-lg shadow-xl group">
            <img
              src={detalleArquitectonico}
              alt="Detalle arquitectónico moderno de Aranya"
              className="w-full h-80 md:h-96 object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        </div>

        {/* --- Bloque Visual 3: Textura y Filosofía --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-20 items-center mb-28 md:mb-36">
          <div className="md:col-span-2 relative overflow-hidden rounded-lg shadow-xl group">
            <img
              src={texturaPiedra}
              alt="Textura de piedra natural en Aranya"
              className="w-full h-80 md:h-96 object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className={`absolute -bottom-8 md:-bottom-12 left-8 md:left-auto md:right-8 ${softBlackClass} p-5 rounded-lg shadow-xl text-center`}>
              <p className={`text-sm font-light ${goldColorClass}`}>Paz Interior</p>
            </div>
          </div>
          <div className="md:col-span-1">
            <h3 className={`text-3xl font-serif font-light ${goldColorClass} mb-4`}>
              Filosofía de Bienestar
            </h3>
            <p className="text-lg font-light leading-relaxed">
              Un espacio para desconectar, reconectar y encontrar el equilibrio en un entorno que respeta la esencia natural.
            </p>
          </div>
        </div>

        {/* --- Bloque Visual 4: Experiencias / Momentos Clave --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-28 md:mb-36">
          {/* Card 1 */}
          <div className="transform transition-transform duration-500 hover:-translate-y-4">
            <div className={`${softBlackClass} rounded-lg shadow-2xl overflow-hidden h-full`}>
              <div className="overflow-hidden">
                <img
                  src={momentoCalma}
                  alt="Momento de calma en Aranya"
                  className="w-full h-72 object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6 text-center">
                <h4 className={`text-xl font-serif font-light ${goldColorClass} mb-3`}>Serenidad</h4>
                <p className={`${textGrayClass} text-sm font-light`}>Instantes de paz que transforman el presente.</p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="transform transition-transform duration-500 hover:-translate-y-4">
            <div className={`${softBlackClass} rounded-lg shadow-2xl overflow-hidden h-full`}>
              <div className="overflow-hidden">
                <img
                  src={experienciaCulinaria}
                  alt="Experiencia culinaria en Aranya"
                  className="w-full h-72 object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6 text-center">
                <h4 className={`text-xl font-serif font-light ${goldColorClass} mb-3`}>Sabores</h4>
                <p className={`${textGrayClass} text-sm font-light`}>Gastronomía sutil que despierta los sentidos.</p>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="transform transition-transform duration-500 hover:-translate-y-4">
            <div className={`${softBlackClass} rounded-lg shadow-2xl overflow-hidden h-full`}>
              <div className="overflow-hidden">
                <img
                  src={experienciaNaturaleza}
                  alt="Actividad en la naturaleza cerca de Aranya"
                  className="w-full h-72 object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6 text-center">
                <h4 className={`text-xl font-serif font-light ${goldColorClass} mb-3`}>Explora</h4>
                <p className={`${textGrayClass} text-sm font-light`}>Descubre el entorno y conecta con la naturaleza.</p>
              </div>
            </div>
          </div>
        </div>

        {/* --- Llamado a la acción --- */}
        <div className="text-center">
          <h3 className={`text-3xl md:text-4xl font-serif font-light ${goldColorClass} mb-8`}>
            Vive la Experiencia Aranya
          </h3>
          <a
            href="/reservations"
            className={`inline-block border border-current ${goldColorClass} bg-transparent text-lg py-3 px-10 rounded-full font-light hover:bg-amber-500 hover:text-gray-950 transition duration-300 shadow-lg tracking-wide`}
            aria-label="Reservar una estancia en Aranya"
          >
            Reservar
          </a>
        </div>

      </div>
    </section>
  );
};

export default AboutUsVisual;