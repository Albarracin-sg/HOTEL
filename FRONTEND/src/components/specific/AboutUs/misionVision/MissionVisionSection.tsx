// src/components/MissionVisionSection.tsx
import React from "react";
import SectionTitle from "../SectionTitle";

interface MissionVisionSectionProps {
  titleColor: string; // Color for the section title and card titles
  missionTitle: string;
  missionText: string;
  visionTitle: string;
  visionText: string;
  cardBgColor?: string; // Optional background color for cards
}

const MissionVisionSection: React.FC<MissionVisionSectionProps> = ({
  titleColor,
  missionTitle,
  missionText,
  visionTitle,
  visionText,
  cardBgColor = "bg-gray-100", // Default card background
}) => {
  return (
    <div className="mb-16">
      <SectionTitle title="Misión & Visión" color={titleColor} />
      <div className="grid md:grid-cols-2 gap-8">
        <div className={`${cardBgColor} p-8 rounded-lg shadow-md`}>
          <h4
            className="text-2xl font-semibold mb-4"
            style={{ color: titleColor }}
          >
            {missionTitle}
          </h4>
          <p className="text-lg">{missionText}</p>
        </div>
        <div className={`${cardBgColor} p-8 rounded-lg shadow-md`}>
          <h4
            className="text-2xl font-semibold mb-4"
            style={{ color: titleColor }}
          >
            {visionTitle}
          </h4>
          <p className="text-lg">{visionText}</p>
        </div>
      </div>
    </div>
  );
};

export default MissionVisionSection;
