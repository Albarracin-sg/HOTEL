// src/context/LanguageContext.tsx
import React, { createContext, useState, useContext } from 'react'; // Removed ReactNode from destructuring here, as we'll use React.ReactNode

// Define possible languages
export type Language = 'es' | 'en';

// Define translations interface
export interface Translations {
  [key: string]: {
    [lang in Language]: string;
  };
}

// Define the context interface
interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

// Create context with default values
const LanguageContext = createContext<LanguageContextType>({
  language: 'es',
  setLanguage: () => {},
  t: (key: string) => key,
});

// Define translations object with all text that needs to be translated
export const translations: Translations = {
  // Navigation
  'nav.home': {
    es: 'Inicio',
    en: 'Home',
  },
  'nav.rooms': {
    es: 'Habitaciones',
    en: 'Rooms',
  },
  'nav.amenities': {
    es: 'Servicios',
    en: 'Amenities',
  },
  'nav.gallery': {
    es: 'Galería',
    en: 'Gallery',
  },
  'nav.contact': {
    es: 'Contacto',
    en: 'Contact',
  },
  'nav.reservations': {
    es: 'Reservaciones',
    en: 'Reservations',
  },
  // Hero Section
  'hero.discover': {
    es: 'Descubre',
    en: 'Discover',
  },
  'hero.description': {
    es: 'Sumérgete en una experiencia de lujo y tranquilidad inigualable. Explora la belleza natural y relájate en un entorno sereno.',
    en: 'Immerse yourself in an unparalleled experience of luxury and tranquility. Explore natural beauty and relax in a serene environment.',
  },
  'hero.viewRooms': {
    es: 'Ver Habitaciones',
    en: 'View Rooms',
  },
};

// Create the provider component
interface LanguageProviderProps {
  children: React.ReactNode; // Changed to React.ReactNode
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('es');

  // Translation function
  const t = (key: string): string => {
    if (!translations[key]) {
      console.warn(`Translation key "${key}" not found.`);
      return key;
    }
    return translations[key][language];
  };

  const value = {
    language,
    setLanguage,
    t,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

// Create and export the hook for using this context
export const useLanguage = () => useContext(LanguageContext);