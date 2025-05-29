import React from "react";

import Header from "../../components/common/Header/Header";
import HeroSection from "../../components/specific/HeroSection/HeroSection";
import Footer from "../../components/common/Footer/Footer";


import heroBackground from "../../assets/images/background/v3.jpg";
import { useTranslation } from "react-i18next";

const Home: React.FC = () => {
  // Usar useTranslation de i18next
  const { t } = useTranslation();

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
    <>
      <div className="bg-gray-900 text-white min-h-screen flex flex-col">
        <Header logoText="Aranya" />
        <HeroSection {...heroSectionData} />
        <Footer className="w-full absolute bottom-0 p-6 z-20" />
      </div>
      
    </>
  );
};

export default Home;
