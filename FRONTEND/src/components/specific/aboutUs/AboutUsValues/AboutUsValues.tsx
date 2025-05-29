import { useTranslation } from "react-i18next";

export default function AboutUsValues() {
  const { t } = useTranslation();

  const values = [
    {
      titleKey: "AboutUs.value1Title",
      textKey: "AboutUs.value1Text",
      icon: (
        <svg
          className="w-10 h-10 text-orange-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
      ),
    },
    {
      titleKey: "AboutUs.value2Title",
      textKey: "AboutUs.value2Text",
      icon: (
        <svg
          className="w-10 h-10 text-orange-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.031 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
    },
    {
      titleKey: "AboutUs.value3Title",
      textKey: "AboutUs.value3Text",
      icon: (
        <svg
          className="w-10 h-10 text-orange-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9"
          />
        </svg>
      ),
    },
  ];

  return (
    <section className="relative py-20 bg-gradient-to-b from-gray-850 via-gray-900 to-gray-850">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, rgba(251, 146, 60, 0.1) 0%, transparent 50%),
                               radial-gradient(circle at 75% 75%, rgba(251, 146, 60, 0.1) 0%, transparent 50%)`,
          }}
        ></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block w-12 h-0.5 bg-orange-400 mb-6 animate-pulse"></span>
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
            {t("AboutUs.valuesTitle")}
          </h3>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {values.map((value, index) => (
            <div
              key={index}
              className="text-center group transform hover:scale-105 transition-all duration-500"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-orange-400/20 to-orange-600/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:from-orange-400/30 group-hover:to-orange-600/30 transition-all duration-300 shadow-lg">
                {value.icon}
              </div>
              <h4 className="text-xl font-semibold text-white mb-4">
                {t(value.titleKey)}
              </h4>
              <p className="text-gray-300 leading-relaxed">
                {t(value.textKey)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}