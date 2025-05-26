import Header from "../../components/common/Header/Header";
import Footer from "../../components/common/Footer/Footer";
import { useTranslation } from "react-i18next";

export default function AboutUs() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-gray-200">
      <Header logoText={t("AboutUs.title")} />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')",
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

      {/* Mission & Vision Section */}
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

      {/* Story Section with enhanced gradient */}
      <section className="relative py-20 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-850">
        {/* Decorative gradient overlay */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-orange-400 to-transparent opacity-50"></div>

        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <span className="inline-block w-12 h-0.5 bg-orange-400 mb-6 animate-pulse"></span>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                {t("AboutUs.storyTitle")}
              </h3>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                {t("AboutUs.storyText1")}
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                {t("AboutUs.storyText2")}
              </p>
            </div>

            <div className="relative order-1 md:order-2 group">
              <div className="aspect-[4/5] rounded-lg overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Aranya Experience"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent group-hover:from-black/50 transition-all duration-500"></div>
              </div>
              {/* Floating decorative element */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-orange-400/20 rounded-full blur-xl animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section with enhanced styling */}
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
            <div className="text-center group transform hover:scale-105 transition-all duration-500">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-400/20 to-orange-600/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:from-orange-400/30 group-hover:to-orange-600/30 transition-all duration-300 shadow-lg">
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
              </div>
              <h4 className="text-xl font-semibold text-white mb-4">
                {t("AboutUs.value1Title")}
              </h4>
              <p className="text-gray-300 leading-relaxed">
                {t("AboutUs.value1Text")}
              </p>
            </div>

            <div className="text-center group transform hover:scale-105 transition-all duration-500">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-400/20 to-orange-600/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:from-orange-400/30 group-hover:to-orange-600/30 transition-all duration-300 shadow-lg">
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
              </div>
              <h4 className="text-xl font-semibold text-white mb-4">
                {t("AboutUs.value2Title")}
              </h4>
              <p className="text-gray-300 leading-relaxed">
                {t("AboutUs.value2Text")}
              </p>
            </div>

            <div className="text-center group transform hover:scale-105 transition-all duration-500">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-400/20 to-orange-600/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:from-orange-400/30 group-hover:to-orange-600/30 transition-all duration-300 shadow-lg">
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
              </div>
              <h4 className="text-xl font-semibold text-white mb-4">
                {t("AboutUs.value3Title")}
              </h4>
              <p className="text-gray-300 leading-relaxed">
                {t("AboutUs.value3Text")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section with enhanced design */}
      <section className="relative py-20 bg-gradient-to-b from-gray-850 via-gray-800 to-gray-900">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block w-12 h-0.5 bg-orange-400 mb-6 animate-pulse"></span>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              {t("AboutUs.teamTitle")}
            </h3>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {t("AboutUs.teamDescription")}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-11">
            {[1, 2, 3].map((member) => (
              <div
                key={member}
                className="text-center group transform hover:scale-105 transition-all duration-500"
              >
                <div className="relative mb-6 overflow-hidden rounded-xl shadow-2xl">
                  <img
                    src={`https://images.unsplash.com/photo-${
                      member === 1
                        ? "1507003211169-0a1dd7228f2d"
                        : member === 2
                        ? "1494790108755-2616c04238e1"
                        : "1517841905240-451395511950"
                    }?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80`}
                    alt={`Team Member ${member}`}
                    className="w-full aspect-square object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-0 left-4 right-4 transform translate-y-full group-hover:translate-y-[-1pc] transition-transform duration-500">
                    <div className="flex justify-center space-x-3">
                      <div className="w-8 h-8 bg-orange-400/80 rounded-full flex items-center justify-center hover:bg-orange-400 transition-colors cursor-pointer">
                        <svg
                          className="w-4 h-4 text-white"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                        </svg>
                      </div>
                      <div className="w-8 h-8 bg-orange-400/80 rounded-full flex items-center justify-center hover:bg-orange-400 transition-colors cursor-pointer">
                        <svg
                          className="w-4 h-4 text-white"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <h4 className="text-xl font-semibold text-white mb-2">
                  {t(`AboutUs.team${member}Name`)}
                </h4>
                <p className="text-orange-400 mb-4 font-medium">
                  {t(`AboutUs.team${member}Role`)}
                </p>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {t(`AboutUs.team${member}Bio`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section with enhanced gradient */}
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
          <button onClick={() => window.location.href = "/rooms"} className="relative bg-gradient-to-r from-orange-400 to-orange-500 hover:from-orange-500 hover:to-orange-600 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl group overflow-hidden">
            <span className="relative z-10">{t("AboutUs.ctaButton")}</span>
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
