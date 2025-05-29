import React from "react";
import { Phone, Mail, MessageCircle, MapPin, Clock } from "lucide-react";
import { useTranslation } from "react-i18next"; // Import useTranslation

const ContactInfo: React.FC = () => {
  const { t } = useTranslation(); // Initialize the translation hook

  const contactItems = [
    {
      icon: Phone,
      title: t("contactInfo.phone.title"), // Localized
      value: "(765) 265-2357",
      description: t("contactInfo.phone.description"), // Localized
    },
    {
      icon: Mail,
      title: t("contactInfo.email.title"), // Localized
      value: "ejemplo@gmail.com",
      description: t("contactInfo.email.description"), // Localized
    },
    {
      icon: MessageCircle,
      title: t("contactInfo.whatsapp.title"), // Localized
      value: "589-235-7865",
      description: t("contactInfo.whatsapp.description"), // Localized
    },
    {
      icon: MapPin,
      title: t("contactInfo.office.title"), // Localized
      value: "2560 San Ridge Drive, CA 94043",
      description: t("contactInfo.office.description"), // Localized
    },
  ];

  return (
    <div className="bg-zinc-900/50 backdrop-blur-sm p-4 sm:p-6 rounded">
      {/* Header de información */}
      <div className="mb-6">
        <div className="h-1 w-16 bg-gradient-to-r from-green-500 to-blue-500 rounded mb-3 mx-auto"></div>
      </div>

      {/* Contenido */}
      <div className="space-y-6">
        {/* Items de contacto en grid 2x2 en desktop, 1 columna en móvil */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {contactItems.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className="flex items-start space-x-3 p-3 rounded-lg bg-zinc-800/50 hover:bg-zinc-800 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-2 rounded-lg shadow-lg flex-shrink-0">
                  <IconComponent className="text-white" size={16} />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-gray-400 text-xs font-medium leading-tight">
                    {item.title}
                  </h4>
                  <p
                    className="text-white font-semibold text-sm leading-tight break-words"
                    title={item.value}
                  >
                    {item.value}
                  </p>
                  <p className="text-gray-500 text-xs mt-0.5 leading-tight">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Horarios de atención */}
        <div className="bg-zinc-800/50 rounded-lg p-4">
          <div className="flex items-center space-x-3 mb-3">
            <div className="bg-gradient-to-br from-green-500 to-blue-500 p-2 rounded-lg flex-shrink-0">
              <Clock className="text-white" size={16} />
            </div>
            <h4 className="text-white font-semibold text-base">
              {t("contactInfo.hoursTitle")} {/* Localized */}
            </h4>
          </div>
          <div className="space-y-1 text-sm">
            <div className="flex justify-between items-center">
              <span className="text-gray-400">
                {t("contactInfo.mondayFriday")}
              </span>{" "}
              {/* Localized */}
              <span className="text-white text-right">
                {t("contactInfo.openHours")}
              </span>{" "}
              {/* Localized */}
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-400">
                {t("contactInfo.saturday")}
              </span>{" "}
              {/* Localized */}
              <span className="text-white text-right">
                {t("contactInfo.saturdayHours")}
              </span>{" "}
              {/* Localized */}
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-400">
                {t("contactInfo.sunday")}
              </span>{" "}
              {/* Localized */}
              <span className="text-red-400 text-right">
                {t("contactInfo.closed")}
              </span>{" "}
              {/* Localized */}
            </div>
          </div>
        </div>

        {/* Mapa */}
        <div className="w-full rounded-lg overflow-hidden shadow-lg bg-zinc-800/30">
          <div className="h-48 sm:h-48">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d101269.00232672398!2d-122.08675422606124!3d37.42209975184672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb7495bec0189%3A0x7c17d44a466baf9b!2sMountain%20View%2C%20CA%2C%20USA!5e0!3m2!1sen!2sus!4v1699907620105!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={t("contactInfo.mapTitle")} 
              className="filter grayscale hover:grayscale-0 transition-all duration-300"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;