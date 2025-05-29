import { useTranslation } from "react-i18next";

export default function AboutUsMissionVision() {
  const { t } = useTranslation();

  return (
    <section className="relative py-20 bg-gradient-to-b from-gray-800 via-gray-850 to-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16">
          {/* Mission */}
          <div className="text-center md:text-left transform hover:scale-105 transition-transform duration-500">
            <div className="inline-block p-4 bg-orange-400/10 rounded-full mb-6">
              <svg
                className="w-12 h-12 text-orange-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
              {t("AboutUs.titleVision")}
            </h3>
            <p className="text-lg text-gray-300 leading-relaxed">
              {t("AboutUs.mission")}
            </p>
          </div>

          {/* Vision */}
          <div className="text-center md:text-left transform hover:scale-105 transition-transform duration-500">
            <div className="inline-block p-4 bg-orange-400/10 rounded-full mb-6">
              <svg
                className="w-12 h-12 text-orange-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
              {t("AboutUs.titleMission")}
            </h3>
            <p className="text-lg text-gray-300 leading-relaxed">
              {t("AboutUs.vision")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}