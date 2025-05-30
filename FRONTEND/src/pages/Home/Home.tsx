import React from "react";
import Header from "../../components/common/Header/Header";
import Footer from "../../components/common/footer/footer";
import HeroSection from "../../components/specific/HeroSection/HeroSection";
import SocialMedia from "../../components/common/socialMedia/SocialMedia";
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
        <div className="relative bg-gradient-to-b from-gray-900  to-gray-850 text-white min-h-screen flex flex-col">
          {/* Decorative gradient overlay */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-orange-400 to-transparent opacity-50"></div>

          {/* Floating decorative elements */}
          <div className="absolute top-20 right-10 w-32 h-32 bg-orange-400/10 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-40 left-10 w-24 h-24 bg-orange-400/15 rounded-full blur-lg animate-pulse delay-1000"></div>

          <Header logoText="Aranya" />
          <HeroSection {...heroSectionData} />
          <SocialMedia className="w-full absolute bottom-0 p-6 z-20" />
          <div className="h-px bg-gradient-to-r from-transparent via-orange-600 to-transparent "></div>
        </div>
   
        <div className="h-px bg-gradient-to-r from-transparent via-orange-600 to-transparent "></div>

        {/* Footer */}
        <Footer className="bg-gray-800 text-white mt-auto" />
      </div>
    </>
  );
};

export default Home;
