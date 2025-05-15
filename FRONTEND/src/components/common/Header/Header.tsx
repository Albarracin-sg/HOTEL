// src/components/common/Header/Header.tsx

import React from 'react';

// Define las props para el componente Header
interface HeaderProps {
  logoText: string; // Texto para el logo o nombre del sitio
  navLinks: { label: string; href: string }[]; // Array de objetos para los links de navegación
}

const Header: React.FC<HeaderProps> = ({ logoText, navLinks }) => {
  return (
    // Header con posicionamiento absoluto para estar sobre el Hero, padding, y z-index alto
    <header className="w-full absolute top-0 left-0 py-6 px-8 z-20">
      {/* Contenedor centralizado con ancho máximo, flex y espacio entre elementos */}
      <div className="container mx-auto flex justify-between items-center">
        {/* Área del Logo (placeholder para el globo/balloon) */}
        <div className="flex items-center text-amber-500 text-3xl font-bold">
          {/* Icono SVG de globo/balloon (ejemplo) */}
          <svg viewBox="0 0 24 24" fill="currentColor" className="h-8 w-8 mr-2">
            <path d="M12,2C8.13,2 5,5.13 5,9c0,5.25 7,13 7,13s7,-7.75 7,-13c0,-3.87 -3.13,-7 -7,-7zM12,11.5c-1.38,0 -2.5,-1.12 -2.5,-2.5s1.12,-2.5 2.5,-2.5 2.5,1.12 2.5,2.5 -1.12,2.5 -2.5,2.5z" />
          </svg>
          {/* Texto del Logo */}
          <span>{logoText}</span>
        </div>

        {/* Navegación Horizontal (visible solo en desktop) */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-white hover:text-amber-500 transition-colors">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Iconos de Búsqueda y Otros (Placeholder para la bandera/idioma si aplica) */}
        <div className="flex items-center space-x-4">
          {/* Botón de Búsqueda */}
          <button className="text-white hover:text-amber-500 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
          {/* Botón de Idioma/Bandera (Placeholder) */}
          <button className="text-white hover:text-amber-500 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
            </svg>
          </button>
          {/* Ícono de Menú Hamburguesa para móviles (Placeholder) */}
           <div className="md:hidden text-white text-2xl">
             &#9776; {/* Unicode para ícono de hamburguesa */}
           </div>
        </div>
      </div>
    </header>
  );
};

export default Header;