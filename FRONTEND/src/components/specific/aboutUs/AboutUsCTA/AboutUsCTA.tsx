import { useTranslation } from "react-i18next";

export default function AboutUsCTA() {
  const { t } = useTranslation();

  return (
    <section className="relative py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-orange-900/20 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-orange-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-orange-600/10 rounded-full blur-2xl animate-pulse animation-delay-1000"></div>
      </div>

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <span className="inline-block w-12 h-0.5 bg-orange-400 mb-6 animate-pulse"></span>
        <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
          {t("AboutUs.ctaTitle")}
        </h3>
        <p className="text-xl text-gray-300 mb-8 leading-relaxed">
          {t("AboutUs.ctaText")}
        </p>
        <button
          onClick={() => (window.location.href = "/rooms")}
          className="relative bg-gradient-to-r from-orange-400 to-orange-500 hover:from-orange-500 hover:to-orange-600 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl group overflow-hidden"
        >
          <span className="relative z-10">{t("AboutUs.ctaButton")}</span>
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
        </button>
      </div>
    </section>
  );
}