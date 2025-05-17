// src/components/specific/HeroSection/HeroSection.tsx

import React from 'react';
import { motion } from 'framer-motion';

// Define las props para el componente HeroSection
interface HeroSectionProps {
  backgroundImageUrl: string;
  mainTitle: string;
  subtitle: string;
  description: string;
  button1Text: string;
  button1Link: string;
  button2Text: string;
  button2Link: string;
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
      ease: 'easeOut',
    },
  },
};

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
        <div>
          <motion.h2
            variants={heroItemVariants}
            className="text-amber-500 text-4xl font-light tracking-widest mb-0"
            style={{ fontFamily: "'Courier New', monospace" }}
          >
            <span className="inline-block border-b-2 border-amber-500 pb-1">
              {subtitle}
            </span>
          </motion.h2>

          <motion.h1
            variants={heroItemVariants}
            className="text-7xl md:text-8xl lg:text-9xl font-bold text-gray-200 opacity-80 tracking-wider -mt-4"
            style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.5)' }}
          >
            {mainTitle}
          </motion.h1>
        </div>

        {/* Descripción */}
        <motion.p
          variants={heroItemVariants}
          className="text-lg max-w-xl text-gray-300 mb-8 mt-4 font-light"
        >
          {description}
        </motion.p>

        {/* Botones */}
        <motion.div variants={heroItemVariants} className="flex space-x-4 mt-8">
          <a
            href={button1Link}
            className="px-6 py-2 bg-gray-900 text-white font-medium rounded-full hover:bg-gray-800 transition duration-300 flex items-center"
          >
            {button1Text}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 ml-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </a>
          <a
            href={button2Link}
            className="px-6 py-2 bg-amber-500 text-gray-900 font-medium rounded-full hover:bg-amber-600 transition duration-300"
          >
            {button2Text}
          </a>
        </motion.div>
      </motion.div>
    </main>
  );
};

export default HeroSection;
