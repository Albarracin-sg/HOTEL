import Header from "../../components/common/Header/Header";
import Footer from "../../components/common/Footer/Footer";
import { useTranslation } from "react-i18next";

// Importa directamente el componente del index
import {AboutUsCTA, AboutUsHero, AboutUsMissionVision, AboutUsStory, AboutUsValues, AboutUsTeam} from "../../components/specific/aboutUs";

export default function AboutUs() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-gray-200">
      <Header logoText={t("AboutUs.title")} />
      <main>
        <AboutUsHero />
        <AboutUsMissionVision />
        <AboutUsStory />
        <AboutUsValues />
        <AboutUsTeam />
        <AboutUsCTA /> 
      </main>
      <Footer />
    </div>
  );
}
