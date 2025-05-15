// src/components/ValueCard.tsx
import React from 'react';

interface ValueCardProps {
  icon: React.ReactNode; // Allows passing icons as elements or strings
  title: string;
  description: string;
  iconColor?: string;
  bgColor?: string; // Optional background color for the card
}

const ValueCard: React.FC<ValueCardProps> = ({
  icon,
  title,
  description,
  iconColor = '#YourBrandColor', // Default icon color
  bgColor = 'bg-gray-100' // Default card background
}) => {
  return (
    <div className={`flex flex-col items-center text-center p-6 ${bgColor} rounded-lg shadow-md`}>
      <div className="text-4xl mb-4" style={{ color: iconColor }}>
        {icon}
      </div>
      <h4 className="text-xl font-semibold mb-2">{title}</h4>
      <p>{description}</p>
    </div>
  );
};

export default ValueCard;