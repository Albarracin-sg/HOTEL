// src/components/UniquenessSection.tsx
import React from 'react';
import SectionTitle from '../SectionTitle';

interface UniquePoint {
  strongText: string;
  normalText: string;
}

interface UniquenessSectionProps {
  titleColor: string; // Color for the section title and list strong text
  points: UniquePoint[];
  imageUrl?: string; // Optional image
  imageAlt?: string;
  // Optional: Add a prop to switch image/text column order
  imageFirstOnMobile?: boolean;
}

const UniquenessSection: React.FC<UniquenessSectionProps> = ({
  titleColor,
  points,
  imageUrl,
  imageAlt,
  imageFirstOnMobile = false // Default to text first on mobile
}) => {
  const gridClasses = `grid md:grid-cols-2 gap-12 items-center ${
    !imageFirstOnMobile ? 'md:grid-flow-col' : '' // Ensures text then image on desktop unless imageFirstOnMobile is true
  }`;
   const imageClasses = `${
     imageFirstOnMobile ? 'order-first md:order-last' : 'order-last md:order-first' // Control column order
   }`;

  return (
    <div className="mb-16">
      <SectionTitle title="¿Qué nos Hace Únicos?" color={titleColor} />
      <div className={gridClasses}>
        {imageUrl && (
          <div className={`flex justify-center ${imageClasses}`}>
            <img
              src={imageUrl}
              alt={imageAlt || 'Unique Aspect'}
              className="rounded-lg shadow-lg max-h-96 object-cover w-full md:w-auto" // Added w-full
            />
          </div>
        )}
        <div>
          <ul className="list-disc list-inside text-lg space-y-3">
            {points.map((point, index) => (
              <li key={index}> {/* Use a proper unique key if points are dynamic */}
                <strong style={{ color: titleColor }}>{point.strongText}:</strong> {point.normalText}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UniquenessSection;