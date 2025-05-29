import { useTranslation } from "react-i18next";
import { team1, team2, team3 } from "../../../../assets/images/aboutUs/index";

export default function AboutUsTeam() {
  const { t } = useTranslation();

  const teamMembers = [
    {
      id: 1,
      image: team2,
      nameKey: "AboutUs.team1Name",
      roleKey: "AboutUs.team1Role",
      bioKey: "AboutUs.team1Bio",
      email: "john.doe@example.com",
      linkedin: "https://www.linkedin.com/in/johndoe",
    },
    {
      id: 2,
      image: team1,
      nameKey: "AboutUs.team2Name",
      roleKey: "AboutUs.team2Role",
      bioKey: "AboutUs.team2Bio",
      email: "jane.smith@example.com",
      linkedin: "https://www.linkedin.com/in/janesmith",
    },
    {
      id: 3,
      image: team3,
      nameKey: "AboutUs.team3Name",
      roleKey: "AboutUs.team3Role",
      bioKey: "AboutUs.team3Bio",
      email: "peter.jones@example.com",
      linkedin: "https://www.linkedin.com/in/peterjones",
    },
  ];

  return (
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
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="text-center group transform hover:scale-105 transition-all duration-500"
            >
              <div className="relative mb-6 overflow-hidden rounded-xl shadow-2xl">
                <img
                  src={member.image}
                  alt={`Team Member ${member.id}`}
                  className="w-full aspect-square object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-0 left-4 right-4 transform translate-y-full group-hover:translate-y-[-1pc] transition-transform duration-500">
                  <div className="flex justify-center space-x-3">
                    {member.email && (
                      <a
                        href={`mailto:${member.email}`}
                        className="w-8 h-8 bg-orange-400/80 rounded-full flex items-center justify-center hover:bg-orange-400 transition-colors cursor-pointer"
                        aria-label={`Send email to ${t(member.nameKey)}`}
                      >
                        <svg
                          className="w-4 h-4 text-white"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
                        </svg>
                      </a>
                    )}
                    {member.linkedin && ( // Solo renderiza si hay un perfil de LinkedIn
                      <a
                        href={member.linkedin} // Usa el enlace de LinkedIn dinámicamente
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 bg-orange-400/80 rounded-full flex items-center justify-center hover:bg-orange-400 transition-colors cursor-pointer"
                        aria-label={`LinkedIn profile of ${t(member.nameKey)}`}
                      >
                        <svg
                          className="w-4 h-4 text-white"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              </div>
              <h4 className="text-xl font-semibold text-white mb-2">
                {t(member.nameKey)}
              </h4>
              <p className="text-orange-400 mb-4 font-medium">
                {t(member.roleKey)}
              </p>
              <p className="text-gray-300 text-sm leading-relaxed">
                {t(member.bioKey)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
