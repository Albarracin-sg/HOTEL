import React, { useState, useEffect } from "react"; // Importa useEffect
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

// Define las props para el componente Header - simplificadas
interface HeaderProps {
  logoText: string; // Texto para el logo o nombre del sitio
}

const Header: React.FC<HeaderProps> = ({ logoText }) => {
  // Usar el contexto de idioma
  const { language, setLanguage, t } = useLanguage();

  // Estado para controlar si el menú móvil está abierto o cerrado
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Estado para controlar si el menú de idiomas está abierto
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);

  // --- EFECTO CLAVE PARA EVITAR EL SCROLL ---
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
    } else {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
    }

    return () => {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
    };
  }, [isMenuOpen]);

  // Definir los enlaces de navegación usando las traducciones
  const navLinks = [
    { label: t("nav.home"), href: "/" },
    { label: t("nav.rooms"), href: "/rooms" },
    { label: t("nav.amenities"), href: "/amenities" },
    { label: t("nav.gallery"), href: "/gallery" },
    { label: t("nav.contact"), href: "/contact" },
    { label: t("nav.reservations"), href: "/reservations" },
  ];

  // Idiomas disponibles
  const languages = [
    { code: "es", name: "Español" },
    { code: "en", name: "English" },
  ];

  // Función para alternar el estado del menú
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Función para alternar el menú de idiomas
  const toggleLanguageMenu = () => {
    setIsLanguageMenuOpen(!isLanguageMenuOpen);
  };

  // Función para cambiar el idioma
  const changeLanguage = (langCode: "es" | "en") => {
    setLanguage(langCode);
    setIsLanguageMenuOpen(false); // Cierra el menú de idioma al seleccionar uno
  };

  // Variantes de animación para el menú
  const menuVariants = {
    closed: {
      opacity: 0,
      y: "-100vh",
      transition: {
        when: "afterChildren",
        staggerChildren: 0.05,
        staggerDirection: -1,
        duration: 0.3,
      },
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.07,
        delayChildren: 0.2,
        duration: 0.5,
      },
    },
  };

  // Variantes para los elementos del menú
  const itemVariants = {
    closed: { opacity: 0, y: -20 },
    open: { opacity: 1, y: 0 },
  };

  // Variantes para el icono de hamburguesa
  const hamburgerVariants = {
    open: { rotate: 90 },
    closed: { rotate: 0 },
  };

  // Variantes para el menú de idiomas
  const languageMenuVariants = {
    closed: {
      opacity: 0,
      scale: 0.95,
      y: -5,
    },
    open: {
      opacity: 1,
      scale: 1,
      y: 0,
    },
  };

  return (
    <header className="w-full absolute top-0 left-0 py-6 px-8 z-20">
      <div className="container mx-auto flex justify-between items-center">
        <a
          href="/"
          className="flex items-center text-amber-500 text-3xl font-bold"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="h-8 w-8 mr-2">
            <path d="M12,2C8.13,2 5,5.13 5,9c0,5.25 7,13 7,13s7,-7.75 7,-13c0,-3.87 -3.13,-7 -7,-7zM12,11.5c-1.38,0 -2.5,-1.12 -2.5,-2.5s1.12,-2.5 2.5,-2.5 2.5,1.12 2.5,2.5 -1.12,2.5 -2.5,2.5z" />
          </svg>
          <span>{logoText}</span>
        </a>

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

        <div className="flex items-center space-x-4">
          <div className="relative">
            <button
              className="text-white hover:text-amber-500 transition-colors flex items-center space-x-1"
              onClick={toggleLanguageMenu}
              aria-label="Cambiar idioma"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
                />
              </svg>
              <span className="text-sm uppercase">{language}</span>
            </button>

            <AnimatePresence>
              {isLanguageMenuOpen && (
                <motion.div
                  className="absolute top-full right-0 mt-2 w-40 bg-black bg-opacity-90 border border-gray-700 rounded shadow-lg z-30"
                  initial="closed"
                  animate="open"
                  exit="closed"
                  variants={languageMenuVariants}
                  style={{
                    pointerEvents: isLanguageMenuOpen ? "auto" : "none",
                  }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <ul className="py-2">
                    {languages.map((lang) => (
                      <li key={lang.code}>
                        <button
                          className={`w-full text-left px-4 py-2 hover:bg-gray-800 transition-colors ${
                            language === lang.code
                              ? "text-amber-500"
                              : "text-white"
                          }`}
                          // === CAMBIO AQUÍ ===
                          onClick={() => changeLanguage(lang.code as "es" | "en")}
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

          <motion.div
            className="md:hidden text-white cursor-pointer z-30"
            animate={isMenuOpen ? "open" : "closed"}
            variants={hamburgerVariants}
            onClick={toggleMenu}
          >
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

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="md:hidden fixed top-0 left-0 w-full h-screen bg-black bg-opacity-90 z-20 pt-24 overflow-y-auto"
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
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.label}
                    </a>
                    <motion.div
                      className="h-px bg-gray-700 mt-4 w-full"
                      whileHover={{ scaleX: 1.05, backgroundColor: "#f59e0b" }}
                    />
                  </motion.li>
                ))}

                <motion.li variants={itemVariants} whileTap={{ scale: 0.95 }}>
                  <div className="text-white block text-xl font-medium mb-2">
                    {language === "es" ? "Idioma" : "Language"}
                  </div>
                  <div className="flex space-x-4">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        className={`px-3 py-1 rounded transition-colors ${
                          language === lang.code
                            ? "bg-amber-500 text-black"
                            : "bg-gray-800 text-white hover:bg-gray-700"
                        }`}
                        // === CAMBIO AQUÍ ===
                        onClick={() => changeLanguage(lang.code as "es" | "en")}
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