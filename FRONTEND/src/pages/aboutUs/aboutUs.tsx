import Header from "../../components/common/Header/Header";
import SocialMedia from "../../components/common/socialMedia/SocialMedia";
import Footer from "../../components/common/footer/footer";
import { useTranslation } from "react-i18next";
// Importa directamente el componente del index
import {
  AboutUsCTA,
  AboutUsHero,
  AboutUsMissionVision,
  AboutUsStory,
  AboutUsValues,
  AboutUsTeam,
} from "../../components/specific/aboutUs";

export default function AboutUs() {
  const { t } = useTranslation();
  
  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-gray-200">
      {/* Header */}
      <Header logoText={t("AboutUs.title")} />
      
      {/* Main Content */}
      <main>
        <AboutUsHero />
        <AboutUsMissionVision />
        <AboutUsStory />
        <AboutUsValues />
        <AboutUsTeam />
        <AboutUsCTA />
      </main>
      
      {/* Social Media */}
      <SocialMedia />
      
      {/* Línea decorativa de separación */}
      <div className="h-px bg-gradient-to-r from-transparent via-orange-500/60 to-transparent mx-8 my-4"></div>
      
      {/* Footer integrado */}
      <Footer />
    </div>
  );
}