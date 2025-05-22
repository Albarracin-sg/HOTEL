import React from "react";

import Header from "../../components/common/Header/Header";
import HeroSection from "../../components/specific/HeroSection/HeroSection";
import Footer from "../../components/common/Footer/Footer";
import AboutUsVisual from "../aboitme";


import heroBackground from "../../assets/images/background/v3.jpg";
import { useLanguage } from "../../components/common/context/LanguageContext";

const Home: React.FC = () => {
  // Usa el hook de idioma para acceder al idioma actual y funciones de traducción
  const { t } = useLanguage();

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