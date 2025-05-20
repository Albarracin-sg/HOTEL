import React from "react";

import Header from "../../components/common/Header/Header";
import HeroSection from "../../components/specific/HeroSection/HeroSection";
import Footer from "../../components/common/Footer/Footer";
import AboutUsVisual from "../aboitme";


import heroBackground from "../../assets/images/background/v3.jpg";
import { useLanguage } from "../../components/common/context/LanguageContext";

const Home: React.FC = () => {
  // Usa el hook de idioma para acceder al idioma actual y funciones de traducción
  const { language, setLanguage, t } = useLanguage();

  // Datos para pasar al Header (links de navegación)
  const headerNavLinks = [
    { label: t("nav.home"), href: "/" },
    { label: t("nav.rooms"), href: "/rooms" },
    { label: t("nav.amenities"), href: "/amenities" },
    { label: t("nav.gallery"), href: "/gallery" },
    { label: t("nav.contact"), href: "/contact" },
    { label: t("nav.reservations"), href: "/reservations" },
  ];

  // Datos para pasar al HeroSection
  const heroSectionData = {
    backgroundImageUrl: heroBackground,
    subtitle: t("hero.discover"),
    mainTitle: "ARANYA",
    description: t("hero.description"),
    button1Text: t("hero.viewRooms"),
    button1Link: "/rooms",
  };

  return (
    // Contenedor principal que define el layout general de la página
    <>
      <div className="bg-gray-900 text-white min-h-screen flex flex-col">
        {/* Renderiza el componente Header, pasándole las props */}
        <Header
          logoText="Aranya"
          navLinks={headerNavLinks}
          languages={[
            { code: "es", name: "Español" },
            { code: "en", name: "English" },
          ]}
          currentLanguage={language}
          onLanguageChange={(lang) => setLanguage(lang as 'es' | 'en')}
        />
        {/* Renderiza el componente HeroSection, pasándole los datos */}
        <HeroSection {...heroSectionData} />
        {/* Renderiza el componente Footer */}
        <Footer className="w-full absolute bottom-0 p-6 z-20" />
      </div>
      <div className="bg-gray-900 text-white min-h-screen flex flex-col">
        <AboutUsVisual />
      </div>
    </>
  );
};

export default Home;