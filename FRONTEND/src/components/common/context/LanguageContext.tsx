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
  "nav.aboutus": {
    es: "Quienes Somos",
    en: "about Us",
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

  // Traducciones específicas de la página de Habitaciones (Rooms.tsx)
  "rooms.pageTitle": {
    es: "Nuestras Habitaciones",
    en: "Our Rooms",
  },
  "rooms.uniqueExperiences": {
    es: "Experiencias Únicas",
    en: "Unique Experiences",
  },
  "rooms.discover": {
    es: "Descubre",
    en: "Discover",
  },
  "rooms.heroDescriptionMobile": {
    es: "Lujo y comodidad en cada detalle para momentos inolvidables",
    en: "Luxury and comfort in every detail for unforgettable moments",
  },
  "rooms.heroDescriptionDesktop": {
    es: "Sumérgete en el lujo y la comodidad con nuestras exclusivas opciones de alojamiento, diseñadas especialmente para crear momentos inolvidables.",
    en: "Immerse yourself in luxury and comfort with our exclusive accommodation options, specially designed to create unforgettable moments.",
  },
  "rooms.roomCount": {
    es: "Habitaciones",
    en: "Rooms",
  },
  "rooms.rating": {
    es: "Calificación",
    en: "Rating",
  },
  "rooms.service": {
    es: "Servicio",
    en: "Service",
  },
  "rooms.needHelpMobile": {
    es: "¿Necesitas ayuda?",
    en: "Need help?",
  },
  "rooms.needHelpDesktop": {
    es: "¿Necesitas asesoría personalizada?",
    en: "Need personalized advice?",
  },
  "rooms.contactButtonMobile": {
    es: "Contactar",
    en: "Contact",
  },
  "rooms.contactButtonDesktop": {
    es: "Contactar Experto",
    en: "Contact Expert",
  },
  "rooms.resultsCountSingular": {
    es: "habitación disponible para ti",
    en: "room available for you",
  },
  "rooms.resultsCountPlural": {
    es: "habitaciones disponibles para ti",
    en: "rooms available for you",
  },
  "rooms.noResults": {
    es: "Sin resultados",
    en: "No results",
  },
  "rooms.oopsNoResults": {
    es: "Oops! No encontramos nada",
    en: "Oops! We couldn't find anything",
  },
  "rooms.noMatchSearchTerm": {
    es: "No hay habitaciones que coincidan con \"{{searchTerm}}\".",
    en: "No rooms match \"{{searchTerm}}\".",
  },
  "rooms.tryOtherSearchTerms": {
    es: "Intenta con otros términos de búsqueda.",
    en: "Try other search terms.",
  },
  "rooms.noRoomsInCategory": {
    es: "No hay habitaciones en \"{{categoryName}}\".",
    en: "No rooms in \"{{categoryName}}\".",
  },
  "rooms.exploreOtherOptions": {
    es: "Explora otras opciones.",
    en: "Explore other options.",
  },
  "rooms.clearSearchMobile": {
    es: "🗑️ Limpiar",
    en: "🗑️ Clear",
  },
  "rooms.clearSearchDesktop": {
    es: "🗑️ Limpiar búsqueda",
    en: "🗑️ Clear search",
  },
  "rooms.viewAllRoomsMobile": {
    es: "🏠 Ver todas",
    en: "🏠 View all",
  },
  "rooms.viewAllRoomsDesktop": {
    es: "🏠 Ver todas las habitaciones",
    en: "🏠 View all rooms",
  },
  "rooms.alertCompleteFields": {
    es: "Por favor, completa todos los campos de reserva",
    en: "Please complete all booking fields",
  },
  "rooms.alertBookingConfirmed": {
    es: "¡Reserva confirmada y pago exitoso!",
    en: "Booking confirmed and payment successful!",
  },
  "rooms.alertPaymentCancelled": {
    es: "Proceso de pago cancelado.",
    en: "Payment process cancelled.",
  },
  // Traducciones para categorías de habitaciones
  "roomCategory.all": {
    es: "Todas",
    en: "All",
  },
  "roomCategory.standard": {
    es: "Estándar",
    en: "Standard",
  },
  "roomCategory.deluxe": {
    es: "Deluxe",
    en: "Deluxe",
  },
  "roomCategory.villa": {
    es: "Villa",
    en: "Villa",
  },
  // Traducciones para tipos de habitaciones y descripciones
  "room.standardRoomName": {
    es: "Habitación Estándar",
    en: "Standard Room",
  },
  "room.standardRoomDescription": {
    es: "Confortable y acogedora, ideal para viajeros solitarios o parejas.",
    en: "Comfortable and cozy, ideal for solo travelers or couples.",
  },
  "room.standardRoomFullDescription": {
    es: "Nuestra habitación estándar ofrece el equilibrio perfecto entre comodidad y precio. Con vistas parciales al mar, esta habitación cuenta con todas las comodidades esenciales para una estancia relajante. El diseño moderno y funcional garantiza que tengas todo lo que necesitas para un descanso reparador.",
    en: "Our standard room offers the perfect balance between comfort and price. With partial sea views, this room has all the essential amenities for a relaxing stay. The modern and functional design ensures you have everything you need for a restful night's sleep.",
  },
  "room.deluxeSuiteName": {
    es: "Suite Deluxe",
    en: "Deluxe Suite",
  },
  "room.deluxeSuiteDescription": {
    es: "Espaciosa y lujosa, con sala de estar separada y vistas panorámicas.",
    en: "Spacious and luxurious, with a separate living room and panoramic views.",
  },
  "room.deluxeSuiteFullDescription": {
    es: "La Suite Deluxe redefine el concepto de lujo y comodidad. Con una sala de estar separada, esta suite ofrece el espacio perfecto para relajarse y disfrutar de las vistas panorámicas al paisaje natural. Cada detalle ha sido cuidadosamente seleccionado para proporcionar una experiencia única e inolvidable.",
    en: "The Deluxe Suite redefines the concept of luxury and comfort. With a separate living room, this suite offers the perfect space to relax and enjoy panoramic views of the natural landscape. Every detail has been carefully selected to provide a unique and unforgettable experience.",
  },
  "room.privatePoolVillaName": {
    es: "Villa con Piscina Privada",
    en: "Private Pool Villa",
  },
  "room.privatePoolVillaDescription": {
    es: "Máxima privacidad y exclusividad con piscina privada y terraza.",
    en: "Maximum privacy and exclusivity with private pool and terrace.",
  },
  "room.privatePoolVillaFullDescription": {
    es: "Experimenta el lujo absoluto en nuestra Villa con Piscina Privada. Este santuario de tranquilidad ofrece privacidad total con su propia piscina y terraza exclusiva. Disfruta de servicios de primera clase incluidos como el servicio de mayordomo y cenas románticas, todo mientras contemplas vistas impresionantes desde tu propio paraíso personal.",
    en: "Experience absolute luxury in our Private Pool Villa. This sanctuary of tranquility offers total privacy with its own private pool and exclusive terrace. Enjoy first-class services including butler service and romantic dinners, all while contemplating breathtaking views from your own personal paradise.",
  },
  "room.familySuiteName": {
    es: "Suite Familiar",
    en: "Family Suite",
  },
  "room.familySuiteDescription": {
    es: "Amplia y confortable, diseñada para familias que desean compartir momentos especiales.",
    en: "Spacious and comfortable, designed for families who wish to share special moments.",
  },
  "room.familySuiteFullDescription": {
    es: "Nuestra Suite Familiar ha sido especialmente diseñada pensando en las necesidades de las familias. Con dos habitaciones conectadas y una zona de juegos dedicada, esta suite ofrece el espacio perfecto para que todos puedan disfrutar de unas vacaciones memorables. Las comodidades incluyen televisores en cada habitación y una nevera familiar para mayor conveniencia.",
    en: "Our Family Suite has been specially designed with the needs of families in mind. With two connecting rooms and a dedicated play area, this suite offers the perfect space for everyone to enjoy a memorable vacation. Amenities include TVs in each room and a family refrigerator for added convenience.",
  },
  // Traducciones para características y comodidades
  "feature.freeWifi": {
    es: "Wi-Fi gratis",
    en: "Free Wi-Fi",
  },
  "feature.breakfastIncluded": {
    es: "Desayuno incluido",
    en: "Breakfast included",
  },
  "feature.airConditioning": {
    es: "Aire acondicionado",
    en: "Air conditioning",
  },
  "feature.flatScreenTv": {
    es: "TV de pantalla plana",
    en: "Flat-screen TV",
  },
  "feature.privateBathroom": {
    es: "Baño privado",
    en: "Private bathroom",
  },
  "feature.gourmetBreakfast": {
    es: "Desayuno gourmet",
    en: "Gourmet breakfast",
  },
  "feature.separateLivingRoom": {
    es: "Sala de estar",
    en: "Living room",
  },
  "feature.premiumMinibar": {
    es: "Minibar premium",
    en: "Premium minibar",
  },
  "feature.privateBalcony": {
    es: "Balcón privado",
    en: "Private balcony",
  },
  "feature.privatePool": {
    es: "Piscina privada",
    en: "Private pool",
  },
  "feature.exclusiveTerrace": {
    es: "Terraza exclusiva",
    en: "Exclusive terrace",
  },
  "feature.butlerService": {
    es: "Servicio de mayordomo",
    en: "Butler service",
  },
  "feature.romanticDinnerIncluded": {
    es: "Cena romántica incluida",
    en: "Romantic dinner included",
  },
  "feature.vipTransfer": {
    es: "Traslado VIP",
    en: "VIP transfer",
  },
  "feature.twoRooms": {
    es: "Dos habitaciones",
    en: "Two rooms",
  },
  "feature.playArea": {
    es: "Zona de juegos",
    en: "Play area",
  },
  "feature.familyFridge": {
    es: "Nevera familiar",
    en: "Family fridge",
  },
  "feature.tvInEachRoom": {
    es: "TV en cada habitación",
    en: "TV in each room",
  },
  "feature.twoBathrooms": {
    es: "Dos baños",
    en: "Two bathrooms",
  },
  "bedType.queen": {
    es: "Cama Queen",
    en: "Queen Bed",
  },
  "bedType.kingSofa": {
    es: "Cama King + Sofá cama",
    en: "King Bed + Sofa bed",
  },
  "bedType.kingAdditional": {
    es: "Cama King + Habitación adicional",
    en: "King Bed + Additional room",
  },
  "bedType.kingTwoSingles": {
    es: "Cama King + 2 Camas individuales",
    en: "King Bed + 2 Single beds",
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