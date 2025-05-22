// src/context/LanguageContext.tsx
import React, { createContext, useState, useContext } from "react";

// Define los idiomas posibles
export type Language = "es" | "en";

// Define la interfaz de las traducciones
export interface Translations {
  [key: string]: {
    [lang in Language]: string;
  };
}

// Define la interfaz del contexto de idioma
interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

// Crea el contexto con valores por defecto
const LanguageContext = createContext<LanguageContextType>({
  language: "es",
  setLanguage: () => {},
  t: (key: string) => key,
});

// Define el objeto de traducciones con todo el texto que necesita ser traducido
export const translations: Translations = {
  // Navegación
  "nav.home": {
    es: "Inicio",
    en: "Home",
  },
  "nav.rooms": {
    es: "Habitaciones",
    en: "Rooms",
  },
  "nav.amenities": {
    es: "Servicios",
    en: "Amenities",
  },
  "nav.gallery": {
    es: "Galería",
    en: "Gallery",
  },
  "nav.contact": {
    es: "Contacto",
    en: "Contact",
  },
  "nav.reservations": {
    es: "Reservaciones",
    en: "Reservations",
  },
  // Sección Hero (ejemplo, incluye otros si es necesario)
  "hero.discover": {
    es: "Descubre",
    en: "Discover",
  },
  "hero.description": {
    es: "Sumérgete en una experiencia de lujo y tranquilidad inigualable. Explora la belleza natural y relájate en un entorno sereno.",
    en: "Immerse yourself in an unparalleled experience of luxury and tranquility. Explore natural beauty and relax in a serene environment.",
  },
  "hero.viewRooms": {
    es: "Ver Habitaciones",
    en: "View Rooms",
  },
  // Página No Encontrada
  "notfound.message": {
    es: "ALGO SALIÓ MAL, O LA PÁGINA NO FUE ENCONTRADA.",
    en: "SOMETHING WENT WRONG, OR THE PAGE WAS NOT FOUND.",
  },
  "notfound.back": {
    es: "VOLVER A INICIO",
    en: "BACK TO HOME",
  },
  "notfound.redirecting": {
    es: "Redirigiendo automáticamente en",
    en: "Redirecting automatically in",
  },
  "notfound.seconds": {
    es: "segundos",
    en: "seconds",
  },
  // Traducciones específicas de la Galería
  "gallery.experience": {
    es: "Experiencia",
    en: "Experience",
  },
  "gallery.backgroundAlt": {
    es: "Fondo de galería",
    en: "Gallery background",
  },
  "gallery.title1": {
    es: "Raíces de Aranya",
    en: "Aranya's Roots",
  },
  "gallery.description1": {
    es: "Un refugio donde la calma y el diseño se funden con la naturaleza.",
    en: "A refuge where calm and design merge with nature.",
  },
  "gallery.year1": {
    es: "Desde 2022",
    en: "Since 2022",
  },
  "gallery.alt1": {
    es: "Historia del hotel Aranya",
    en: "History of Aranya hotel",
  },
  "gallery.title2": {
    es: "Espacios con Propósito",
    en: "Spaces with Purpose",
  },
  "gallery.description2": {
    es: "Diseño que acompaña al entorno sin perturbarlo.",
    en: "Design that complements the environment without disturbing it.",
  },
  "gallery.year2": {
    es: "Diseño & Entorno",
    en: "Design & Environment",
  },
  "gallery.alt2": {
    es: "Arquitectura del hotel",
    en: "Hotel architecture",
  },
  "gallery.title3": {
    es: "Nuestros Valores",
    en: "Our Values",
  },
  "gallery.description3": {
    es: "Naturaleza, hospitalidad y equilibrio sostenible.",
    en: "Nature, hospitality, and sustainable balance.",
  },
  "gallery.year3": {
    es: "Lo que nos guía",
    en: "What guides us",
  },
  "gallery.alt3": {
    es: "Valores de Aranya",
    en: "Aranya's Values",
  },
  "gallery.title4": {
    es: "Únicos por Naturaleza",
    en: "Unique by Nature",
  },
  "gallery.description4": {
    es: "Ubicación, diseño y tecnología pensados para el descanso.",
    en: "Location, design, and technology designed for relaxation.",
  },
  "gallery.year4": {
    es: "La experiencia Aranya",
    en: "The Aranya experience",
  },
  "gallery.alt4": {
    es: "Aspectos únicos del hotel",
    en: "Unique aspects of the hotel",
  },
};

// Crea el componente proveedor
interface LanguageProviderProps {
  children: React.ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({
  children,
}) => {
  const [language, setLanguage] = useState<Language>("es");

  // Función de traducción
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

// Crea y exporta el hook para usar este contexto
export const useLanguage = () => useContext(LanguageContext);