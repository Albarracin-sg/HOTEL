import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Define las props para el componente Header
interface HeaderProps {
  logoText: string; // Texto para el logo o nombre del sitio
  navLinks: { label: string; href: string }[]; // Array de objetos para los links de navegación
  languages?: { code: string; name: string }[]; // Idiomas disponibles
  currentLanguage?: string; // Idioma actual
  onLanguageChange?: (langCode: string) => void; // Función para cambiar el idioma
}

const Header: React.FC<HeaderProps> = ({ 
  logoText, 
  navLinks, 
  languages = [
    { code: 'es', name: 'Español' },
    { code: 'en', name: 'English' },
  ],
  currentLanguage = 'es',
  onLanguageChange = () => {} 
}) => {
  // Estado para controlar si el menú móvil está abierto o cerrado
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Estado para controlar si el menú de idiomas está abierto
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);

  // Función para alternar el estado del menú
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  // Función para alternar el menú de idiomas
  const toggleLanguageMenu = () => {
    setIsLanguageMenuOpen(!isLanguageMenuOpen);
  };
  
  // Función para cambiar el idioma
  const changeLanguage = (langCode: string) => {
    onLanguageChange(langCode);
    setIsLanguageMenuOpen(false);
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
  
  // Variantes para el menú de idiomas - quitamos pointerEvents para evitar el error
  const languageMenuVariants = {
    closed: { 
      opacity: 0,
      scale: 0.95,
      y: -5
    },
    open: { 
      opacity: 1,
      scale: 1,
      y: 0
    }
  };

  return (
    // Header con posicionamiento absoluto para estar sobre el Hero, padding, y z-index alto
    <header className="w-full absolute top-0 left-0 py-6 px-8 z-20">
      {/* Contenedor centralizado con ancho máximo, flex y espacio entre elementos */}
      <div className="container mx-auto flex justify-between items-center">
        {/* Área del Logo (placeholder para el globo/balloon) - ahora con link al home */}
        <a href="/" className="flex items-center text-amber-500 text-3xl font-bold">
          {/* Icono SVG de globo/balloon (ejemplo) */}
          <svg viewBox="0 0 24 24" fill="currentColor" className="h-8 w-8 mr-2">
            <path d="M12,2C8.13,2 5,5.13 5,9c0,5.25 7,13 7,13s7,-7.75 7,-13c0,-3.87 -3.13,-7 -7,-7zM12,11.5c-1.38,0 -2.5,-1.12 -2.5,-2.5s1.12,-2.5 2.5,-2.5 2.5,1.12 2.5,2.5 -1.12,2.5 -2.5,2.5z" />
          </svg>
          {/* Texto del Logo */}
          <span>{logoText}</span>
        </a>
        
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
          
          {/* Botón de Idioma/Bandera con menú desplegable */}
          <div className="relative">
            <button 
              className="text-white hover:text-amber-500 transition-colors"
              onClick={toggleLanguageMenu}
              aria-label="Cambiar idioma"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
              </svg>
            </button>
            
            {/* Menú desplegable de idiomas */}
            <AnimatePresence>
              {isLanguageMenuOpen && (
                <motion.div 
                  className="absolute top-full right-0 mt-2 w-40 bg-black bg-opacity-90 border border-gray-700 rounded shadow-lg z-30"
                  initial="closed"
                  animate="open"
                  exit="closed"
                  variants={languageMenuVariants}
                  style={{ pointerEvents: isLanguageMenuOpen ? 'auto' : 'none' }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <ul className="py-2">
                    {languages.map((lang) => (
                      <li key={lang.code}>
                        <button
                          className={`w-full text-left px-4 py-2 hover:bg-gray-800 ${currentLanguage === lang.code ? 'text-amber-500' : 'text-white'}`}
                          onClick={() => changeLanguage(lang.code)}
                        >
                          {lang.name}
                        </button>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          
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
                
                {/* Selector de idioma en el menú móvil */}
                <motion.li
                  variants={itemVariants}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="text-white block text-xl font-medium mb-2">Idioma</div>
                  <div className="flex space-x-4">
                    {languages.map((lang) => (
                      <button 
                        key={lang.code} 
                        className={`px-3 py-1 rounded ${currentLanguage === lang.code ? 'bg-amber-500 text-black' : 'bg-gray-800 text-white'}`}
                        onClick={() => changeLanguage(lang.code)}
                      >
                        {lang.name}
                      </button>
                    ))}
                  </div>
                  <motion.div 
                    className="h-px bg-gray-700 mt-4 w-full" 
                    whileHover={{ scaleX: 1.05, backgroundColor: "#f59e0b" }}
                  />
                </motion.li>
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;