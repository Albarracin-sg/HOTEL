// src/components/ValuesSection.tsx
import React from 'react';
import SectionTitle from '../SectionTitle';
import ValueCard from './ValueCard';

interface Value {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface ValuesSectionProps {
  titleColor: string; // Color for the section title
  values: Value[];
  iconColor?: string; // Optional color for icons
  cardBgColor?: string; // Optional background color for cards
}

const ValuesSection: React.FC<ValuesSectionProps> = ({
  titleColor,
  values,
  iconColor,
  cardBgColor
}) => {
  return (
    <div className="mb-16">
      <SectionTitle title="Nuestros Valores" color={titleColor} />
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {values.map((value, index) => (
          <ValueCard
            key={index} // Use a proper unique key if values are dynamic
            icon={value.icon}
            title={value.title}
            description={value.description}
            iconColor={iconColor}
            bgColor={cardBgColor}
          />
        ))}
      </div>
    </div>
  );
};

export default ValuesSection;