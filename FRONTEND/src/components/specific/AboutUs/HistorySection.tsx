// src/components/HistorySection.tsx
import React from 'react';
import SectionTitle from './SectionTitle';

interface HistorySectionProps {
  titleColor: string; // Color for the section title
  originText: string;
  trajectoryText: string;
  imageUrl?: string; // Optional image
  imageAlt?: string;
}

const HistorySection: React.FC<HistorySectionProps> = ({
  titleColor,
  originText,
  trajectoryText,
  imageUrl,
  imageAlt
}) => {
  return (
    <div className="mb-16">
      <SectionTitle title="Nuestra Historia" color={titleColor} center={false} />
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="mb-4 text-lg">
            {originText}
          </p>
          <p className="text-lg">
            {trajectoryText}
          </p>
        </div>
        {imageUrl && (
          <div className="flex justify-center">
            <img
              src={imageUrl}
              alt={imageAlt || 'Our History'}
              className="rounded-lg shadow-lg max-h-96 object-cover w-full md:w-auto" // Added w-full for better mobile image size
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default HistorySection;