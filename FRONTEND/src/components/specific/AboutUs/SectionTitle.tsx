// src/components/SectionTitle.tsx
import React from 'react';

interface SectionTitleProps {
  title: string;
  color?: string; // Optional prop for title color
  center?: boolean; // Optional prop to center the title
  className?: string; // Optional additional classes
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, color, center = true, className }) => {
  const alignmentClass = center ? 'text-center' : '';
  const titleColor = color || '#YourBrandColor'; // Default or provided color

  return (
    <h3
      className={`text-3xl font-semibold mb-8 ${alignmentClass} ${className || ''}`}
      style={{ color: titleColor }}
    >
      {title}
    </h3>
  );
};

export default SectionTitle;