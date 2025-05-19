// src/pages/Home/Home.tsx
import React from "react";
// Importa los componentes comunes y específicos
import Header from "../../components/common/Header/Header";
import HeroSection from "../../components/specific/HeroSection/HeroSection";
import Footer from "../../components/common/Footer/Footer";
import AboutUsVisual from "../aboitme";
// Importa la imagen de fondo del hero
import heroBackground from "../../assets/images/background/v3.jpg";

const Home: React.FC = () => {
  // Datos para pasar al Header (links de navegación)
  const headerNavLinks = [
    { label: "Home", href: "/" },
    { label: "Rooms", href: "/rooms" },
    { label: "Amenities", href: "/amenities" },
    { label: "Gallery", href: "/gallery" },
    { label: "Contact", href: "/contact" },
    { label: "Reservations", href: "/reservations" },
  ];

  // Datos para pasar al HeroSection
  const heroSectionData = {
    backgroundImageUrl: heroBackground,
    subtitle: "Descubre",
    mainTitle: "ARANYA",
    description:
      "Sumérgete en una experiencia de lujo y tranquilidad inigualable. Explora la belleza natural y relájate en un entorno sereno.",
    button1Text: "Reservar Ahora",
    button1Link: "/reservations",
    button2Text: "Ver Habitaciones",
    button2Link: "/rooms",
  };

  return (
    // Contenedor principal que define el layout general de la página

    <>
      <div className="bg-gray-900 text-white min-h-screen flex flex-col">
        {/* Renderiza el componente Header, pasándole las props */}

        <Header logoText="Aranya" navLinks={headerNavLinks} />

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
