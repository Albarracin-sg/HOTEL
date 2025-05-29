import { useTranslation } from "react-i18next";
import { backgraund } from "../../../../assets/images/aboutUs";

export default function AboutUsHero() {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url(${backgraund})`,
        }}
      />

      {/* Gradient Overlay for smooth transition */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-800 to-transparent z-5"></div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <div className="mb-8 animate-fade-in-up">
          <span className="inline-block w-16 h-0.5 bg-orange-400 mb-6 animate-pulse"></span>
          <h2 className="text-orange-400 text-lg font-medium tracking-wider uppercase mb-4">
            {t("AboutUs.subtitle")}
          </h2>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight animate-fade-in-up animation-delay-200">
          ARANYA
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12 animate-fade-in-up animation-delay-400">
          {t("AboutUs.description")}
        </p>
      </div>
    </section>
  );
}
