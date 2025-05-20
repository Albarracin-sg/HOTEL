import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface HeroSectionProps {
  backgroundImageUrl: string;
  mainTitle: string;
  subtitle: string;
  description: string;
  button1Text: string;
  button1Link: string;
  button2Text?: string;
  button2Link?: string;
}

// Variants para el contenedor principal del Hero
const heroContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

// Variants para los elementos hijos del Hero
const heroItemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

// Variants para la animación del botón
const buttonVariants = {
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.2,
      ease: "easeInOut",
    },
  },
  tap: {
    scale: 0.95,
  },
};

const HeroSection: React.FC<HeroSectionProps> = ({
  backgroundImageUrl,
  mainTitle,
  subtitle,
  description,
  button1Text,
  button1Link,
}) => {
  // Estado para controlar si estamos en vista móvil
  const [isMobile, setIsMobile] = useState(false);

  // Efecto para detectar el tamaño de pantalla y actualizar isMobile
  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;
      // Define mobile as anything up to 768px (sm breakpoint usually)
      if (width <= 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    // Comprobar al cargar
    checkScreenSize();

    // Comprobar al cambiar el tamaño de la ventana
    window.addEventListener("resize", checkScreenSize);

    // Limpiar event listener
    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  // Acortar la descripción para móviles
  const mobileDescription = description.split(".")[0] + ".";

  return (
    <main
      className="flex-grow relative bg-cover bg-center flex items-center"
      style={{ backgroundImage: `url(${backgroundImageUrl})` }}
    >
      {/* Overlay oscuro */}
      <div className="absolute inset-0 bg-black opacity-40" />

      {/* Contenedor animado */}
      <motion.div
        className="container mx-auto relative z-10 px-4 lg:px-8 pt-20"
        variants={heroContainerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Subtítulo y título */}
        <div className="flex flex-col">
          <motion.h2
            variants={heroItemVariants}
            className="text-amber-500 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light tracking-widest mb-4 overflow-hidden whitespace-nowrap"
            style={{ fontFamily: "'Courier New', monospace" }}
          >
            <span className="inline-block border-b-2 border-amber-500 pb-1">
              {subtitle}
            </span>
          </motion.h2>
          <motion.h1
            variants={heroItemVariants}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-gray-200 opacity-80 tracking-wider mt-0"
            style={{ textShadow: "2px 2px 8px rgba(0,0,0,0.5)" }}
          >
            {mainTitle}
          </motion.h1>
        </div>

        {/* Descripción - más corta en móvil */}
        <motion.p
          variants={heroItemVariants}
          className="text-base md:text-lg max-w-xl text-gray-300 mb-8 mt-4 font-light"
        >
          {isMobile ? mobileDescription : description}
        </motion.p>

        {/* Botón mejorado - más grande en móvil */}
        <motion.div variants={heroItemVariants} className="mt-8">
          <motion.div
            variants={heroItemVariants}
            className="mt-8 flex justify-start"
          >
            <motion.a
              href={button1Link}
              className={`group relative overflow-hidden inline-flex items-center justify-center rounded-full bg-amber-500 text-gray-900 font-semibold transition-all duration-300 hover:bg-amber-600 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 ${
                isMobile ? "px-8 py-3 text-lg" : "px-6 py-3 text-base"
              }`}
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                {button1Text}
              </span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`ml-2 transition-all duration-300 group-hover:translate-x-1 ${
                  isMobile ? "h-5 w-5" : "h-4 w-4"
                }`}
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>

              <div className="absolute inset-0 h-full w-full scale-0 rounded-full bg-white/20 transition-all duration-300 group-hover:scale-100 group-active:bg-white/10"></div>
            </motion.a>
          </motion.div>
        </motion.div>
      </motion.div>
    </main>
  );
};

export default HeroSection;