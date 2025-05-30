import { useTranslation } from "react-i18next";
import {backgraundImage} from "../../../../assets/images/aboutUs/index";

export default function AboutUsStory() {
  const { t } = useTranslation();

  return (
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
                src={backgraundImage}
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
  );  
}