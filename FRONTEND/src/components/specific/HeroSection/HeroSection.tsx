// src/components/specific/HeroSection/HeroSection.tsx

import React from 'react';

// Define las props para el componente HeroSection
interface HeroSectionProps {
  backgroundImageUrl: string; // URL de la imagen de fondo
  mainTitle: string; // Título principal (ej: "VIETNAM" o "TU HOTEL")
  subtitle: string; // Subtítulo o lema (ej: "Explora" o "Bienvenido")
  description: string; // Descripción breve
  button1Text: string; // Texto del primer botón
  button1Link: string; // Link del primer botón
  button2Text: string; // Texto del segundo botón
  button2Link: string; // Link del segundo botón
}

const HeroSection: React.FC<HeroSectionProps> = ({
  backgroundImageUrl,
  mainTitle,
  subtitle,
  description,
  button1Text,
  button1Link,
  button2Text,
  button2Link,
}) => {
  return (
    // Sección principal que ocupa el espacio restante, con fondo y overlay
    <main
      className="flex-grow relative bg-cover bg-center flex items-center"
      style={{ backgroundImage: `url(${backgroundImageUrl})` }}
    >
      {/* Overlay oscuro para mejorar legibilidad */}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      {/* Contenido principal del hero, centrado y con padding */}
      <div className="container mx-auto relative z-10 px-4 lg:px-8 pt-20">
        {/* Subtítulo (similar a "Explore") */}
        <div>
          <h2
            className="text-amber-500 text-4xl font-light tracking-widest mb-0"
            style={{ fontFamily: "'Courier New', monospace" }} // Estilo de fuente de la imagen
          >
             {/* Línea y texto del subtítulo (replica el estilo de "Explore") */}
            <span className="inline-block border-b-2 border-amber-500 pb-1">
              {subtitle}
            </span>
          </h2>
          {/* Título principal (similar a "VIETNAM") */}
          <h1
            className="text-7xl md:text-8xl lg:text-9xl font-bold text-gray-200 opacity-80 tracking-wider -mt-4"
            style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.5)' }} // Sombra de texto
          >
            {mainTitle}
          </h1>
        </div>

        {/* Descripción breve */}
        <p className="text-lg max-w-xl text-gray-300 mb-8 mt-4 font-light">
          {description}
        </p>

        {/* Botones de acción estilizados */}
        <div className="flex space-x-4 mt-8">
          <a href={button1Link} className="px-6 py-2 bg-gray-900 text-white font-medium rounded-full
                                          hover:bg-gray-800 transition duration-300 flex items-center">
            {button1Text}
            {/* Icono de flecha (ejemplo) */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" viewBox="0 0 20 20" fill="currentColor">
               <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
             </svg>
          </a>
          <a href={button2Link} className="px-6 py-2 bg-amber-500 text-gray-900 font-medium rounded-full
                                          hover:bg-amber-600 transition duration-300">
            {button2Text}
          </a>
        </div>
      </div>
    </main>
  );
};

export default HeroSection;