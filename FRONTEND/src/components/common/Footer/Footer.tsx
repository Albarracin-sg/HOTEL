import { useTranslation } from 'react-i18next'; 
import { Phone, Mail, MapPin, Star, Award } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface FooterProps {
  className?: string;
}

const Footer = ({ className }: FooterProps) => {
  const navigate = useNavigate();
  const { t } = useTranslation(); // Initialize useTranslation hook

  const handleNavigation = (page: string) => {
    navigate(`/${page}`);
  };

  return (
    <div className={`relative ${className || ''}`}>
      {/* Transición gradual de transparente a negro */}
      <div className="h-24 bg-gradient-to-b from-transparent to-black"></div>

      {/* Footer negro */}
      <footer className="bg-black relative overflow-hidden">
        {/* Patrón de fondo sutil */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-12">
          {/* Sección principal */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-8">

            {/* Logo y descripción */}
            <div className="lg:col-span-2">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-amber-500 to-orange-600 rounded-lg flex items-center justify-center mr-3 shadow-lg">
                  <span className="text-white font-bold text-lg">A</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Hotel Aranya</h3>
                  <div className="flex items-center mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-amber-400 fill-current" />
                    ))}
                    <span className="text-gray-400 text-sm ml-2">{t("footer.experience_premium")}</span>
                  </div>
                </div>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed max-w-md">
                {t("footer.description")}
              </p>
              <div className="flex items-center mt-4 text-amber-400">
                <Award className="w-5 h-5 mr-2" />
                <span className="text-sm font-medium">{t("footer.excellence_certificate")}</span>
              </div>
            </div>

            {/* Navegación */}
            <div>
              <h4 className="text-white font-semibold text-lg mb-4 border-b border-gray-700 pb-2">
                {t("footer.navigation_title")}
              </h4>
              <nav className="space-y-3">
                {[
                  { nameKey: 'nav_rooms', page: 'rooms' },
                  { nameKey: 'nav_gallery', page: 'gallery' },
                  { nameKey: 'nav_contact', page: 'contact' },
                  { nameKey: 'nav_about_us', page: 'aboutus' }
                ].map((item, index) => (
                  <button
                    key={index}
                    onClick={() => handleNavigation(item.page)}
                    className="block text-gray-300 hover:text-amber-400 transition-all duration-300 hover:translate-x-1 text-sm font-medium"
                  >
                    {t(`footer.${item.nameKey}`)}
                  </button>
                ))}
              </nav>
            </div>

            {/* Información de contacto */}
            <div>
              <h4 className="text-white font-semibold text-lg mb-4 border-b border-gray-700 pb-2">
                {t("footer.contact_title")}
              </h4>
              <div className="space-y-4">
                <div className="flex items-start gap-3 group">
                  <div className="w-8 h-8 bg-gradient-to-r from-amber-500/20 to-orange-600/20 rounded-lg flex items-center justify-center group-hover:from-amber-500/30 group-hover:to-orange-600/30 transition-all">
                    <Phone className="w-4 h-4 text-amber-400" />
                  </div>
                  <div>
                    <p className="text-white text-sm font-medium">{t("footer.contact_reservations")}</p>
                    <p className="text-gray-300 text-sm">+57 (1) 234 567 89</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 group">
                  <div className="w-8 h-8 bg-gradient-to-r from-amber-500/20 to-orange-600/20 rounded-lg flex items-center justify-center group-hover:from-amber-500/30 group-hover:to-orange-600/30 transition-all">
                    <Mail className="w-4 h-4 text-amber-400" />
                  </div>
                  <div>
                    <p className="text-white text-sm font-medium">{t("footer.contact_email")}</p>
                    <p className="text-gray-300 text-sm">reservas@aranya.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 group">
                  <div className="w-8 h-8 bg-gradient-to-r from-amber-500/20 to-orange-600/20 rounded-lg flex items-center justify-center group-hover:from-amber-500/30 group-hover:to-orange-600/30 transition-all">
                    <MapPin className="w-4 h-4 text-amber-400" />
                  </div>
                  <div>
                    <p className="text-white text-sm font-medium">{t("footer.contact_location")}</p>
                    <p className="text-gray-300 text-sm">{t("footer.location_value")}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Separador con gradiente */}
          <div className="h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent mb-6"></div>

          {/* Copyright y enlaces legales */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">
              {t("footer.copyright")}
            </div>
            <div className="flex gap-6 text-sm">
              <button className="text-gray-400 hover:text-amber-400 transition-colors">
                {t("footer.privacy_policy")}
              </button>
              <button className="text-gray-400 hover:text-amber-400 transition-colors">
                {t("footer.terms_conditions")}
              </button>
              <button className="text-gray-400 hover:text-amber-400 transition-colors">
                {t("footer.cookies")}
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;