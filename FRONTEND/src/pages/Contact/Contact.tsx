import React from "react";
import Header from "../../components/common/Header/Header";
import Footer from "../../components/common/Footer/Footer";
import { ContactForm, ContactInfo } from "../../components/specific/contact";
import heroBackground from "../../assets/images/background/v9.jpg";
import { useTranslation } from "react-i18next";

const Contact: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div
      className="bg-black/40 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url('${heroBackground}')` }}
    >
      {/* Efectos visuales de fondo */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-10 left-10 w-2 h-2 bg-blue-400 rounded-full opacity-60 animate-pulse"></div>
        <div className="absolute top-32 right-20 w-3 h-3 bg-purple-400 rounded-full opacity-40 animate-bounce"></div>
        <div className="absolute bottom-40 left-1/4 w-1 h-1 bg-cyan-400 rounded-full opacity-70 animate-ping"></div>
        <div className="absolute bottom-20 right-1/3 w-2 h-2 bg-indigo-400 rounded-full opacity-50 animate-pulse"></div>
        <div className="absolute top-1/4 right-10 w-20 h-20 border border-white opacity-10 rotate-45 transform animate-spin-slow"></div>
        <div className="absolute bottom-1/4 left-10 w-16 h-16 border-2 border-blue-300 opacity-5 rounded-full animate-pulse"></div>
      </div>

      {/* Overlay con gradiente sutil */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/50 via-transparent to-slate-800/30 z-1"></div>

      {/* Contenido principal */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Header compacto */}
        <div className="backdrop-blur-sm bg-white/5 border-b border-white/10 relative z-20 flex-shrink-0">
          <Header logoText={t("contact.headerLogoText")} />
        </div>

        {/* Main Content - Ajustado para header */}
        <main className="flex-grow py-19">
          <div className="container mx-auto px-4 max-w-screen-xl">
            {/* Grid principal con 2 columnas */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
              <div className="lg:col-span-1 lg:mt-16">
                <div className="backdrop-blur-lg bg-white/10 rounded-xl border border-white/20 shadow-2xl transition-all duration-500 hover:scale-[1.02] hover:bg-white/15 hover:shadow-blue-500/25">
                  <div className="p-6 border-b border-white/10">
                    <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center">
                      <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 animate-pulse"></span>
                      {t("contact.sendMessageTitle")}
                    </h2>
                  </div>
                  <div className="p-4">
                    <ContactForm />
                  </div>
                </div>
              </div>

              {/* Información de contacto - AHORA A LA DERECHA */}
              <div className="lg:col-span-1 lg:mt-7">
                <div className="backdrop-blur-lg bg-white/10 rounded-xl border border-white/20 shadow-2xl transition-all duration-500 hover:scale-[1.02] hover:bg-white/15 hover:shadow-purple-500/25">
                  <div className="p-6 border-b border-white/10">
                    <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center">
                      <span className="w-2 h-2 bg-purple-400 rounded-full mr-3 animate-pulse"></span>
                      {t("contact.contactInfoTitle")}
                    </h2>
                  </div>
                  <div className="p-6">
                    <ContactInfo />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* Footer compacto */}
        <div className="backdrop-blur-sm bg-white/5 border-t border-white/10 flex-shrink-0 mt-auto">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Contact;