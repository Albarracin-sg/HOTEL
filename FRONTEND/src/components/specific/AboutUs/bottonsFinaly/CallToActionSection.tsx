// src/components/CallToActionSection.tsx
import React from 'react';

interface CallToActionProps {
  buttonColor: string; // Background color for the primary button
  buttonTextColor: string; // Text color for the primary button
  secondaryButtonColor?: string; // Border/Text color for secondary buttons
  title?: string;
  reserveButtonText: string;
  reserveButtonUrl: string;
  roomsButtonText: string;
  roomsButtonUrl: string;
  amenitiesButtonText: string;
  amenitiesButtonUrl: string;
}

const CallToActionSection: React.FC<CallToActionProps> = ({
  buttonColor,
  buttonTextColor,
  secondaryButtonColor = '#YourBrandColor', // Default secondary color
  title = "¿Listo para la Experiencia Aranya?",
  reserveButtonText,
  reserveButtonUrl,
  roomsButtonText,
  roomsButtonUrl,
  amenitiesButtonText,
  amenitiesButtonUrl
}) => {
  return (
    <div className="text-center mt-16">
      <h3 className="text-3xl font-semibold mb-6">{title}</h3>
      <div className="flex flex-col sm:flex-row justify-center gap-6">
        <a
          href={reserveButtonUrl}
          className="px-8 py-4 text-xl font-semibold rounded-full shadow-lg transition duration-300 hover:opacity-90"
          style={{ backgroundColor: buttonColor, color: buttonTextColor }}
        >
          {reserveButtonText}
        </a>
        <a
          href={roomsButtonUrl}
          className="px-8 py-4 text-xl font-semibold rounded-full shadow-lg transition duration-300 border hover:bg-gray-100"
          style={{ borderColor: secondaryButtonColor, color: secondaryButtonColor }}
        >
          {roomsButtonText}
        </a>
        <a
          href={amenitiesButtonUrl}
          className="px-8 py-4 text-xl font-semibold rounded-full shadow-lg transition duration-300 border hover:bg-gray-100"
          style={{ borderColor: secondaryButtonColor, color: secondaryButtonColor }}
        >
          {amenitiesButtonText}
        </a>
      </div>
    </div>
  );
};

export default CallToActionSection;