import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Define las props para el componente Header
interface HeaderProps {
  logoText: string; // Texto para el logo o nombre del sitio
  navLinks: { label: string; href: string }[]; // Array de objetos para los links de navegación
}

const Header: React.FC<HeaderProps> = ({ logoText, navLinks }) => {
  // Estado para controlar si el menú móvil está abierto o cerrado
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Función para alternar el estado del menú
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Variantes de animación para el menú
  const menuVariants = {
    closed: {
      opacity: 0,
      y: -20,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.07,
        delayChildren: 0.1
      }
    }
  };

  // Variantes para los elementos del menú
  const itemVariants = {
    closed: { opacity: 0, y: -10 },
    open: { opacity: 1, y: 0 }
  };

  // Variantes para el icono de hamburguesa
  const hamburgerVariants = {
    open: { rotate: 90 },
    closed: { rotate: 0 }
  };

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
                <a 
                  href={link.href} 
                  className="text-white hover:text-amber-500 transition-colors relative group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-500 transition-all group-hover:w-full"></span>
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
          
          {/* Ícono de Menú para móviles con animación */}
          <motion.div 
            className="md:hidden text-white cursor-pointer z-30"
            animate={isMenuOpen ? "open" : "closed"}
            variants={hamburgerVariants}
            onClick={toggleMenu}
          >
            {/* Reemplazo del icono de texto por un SVG más estético */}
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-6 w-6" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M6 18L18 6M6 6l12 12" 
                />
              ) : (
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M4 6h16M4 12h16M4 18h16" 
                />
              )}
            </svg>
          </motion.div>
        </div>
      </div>

      {/* Menú desplegable para móviles con animación */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            className="md:hidden fixed top-0 left-0 w-full h-full bg-black bg-opacity-90 z-20 pt-24"
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
          >
            <nav className="px-8">
              <ul className="flex flex-col space-y-6">
                {navLinks.map((link) => (
                  <motion.li 
                    key={link.href}
                    variants={itemVariants}
                    whileTap={{ scale: 0.95 }}
                  >
                    <a 
                      href={link.href} 
                      className="text-white hover:text-amber-500 transition-colors block text-xl font-medium"
                      onClick={() => setIsMenuOpen(false)} // Cierra el menú al hacer clic en un enlace
                    >
                      {link.label}
                    </a>
                    <motion.div 
                      className="h-px bg-gray-700 mt-4 w-full" 
                      whileHover={{ scaleX: 1.05, backgroundColor: "#f59e0b" }}
                    />
                  </motion.li>
                ))}
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;