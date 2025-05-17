import type { ReactNode } from 'react';

// Define la estructura de un ítem en la galería
export interface GalleryItem {
  id: number;
  title: string;
  description: string | ReactNode;
  year?: string;
  imageUrl: string;
  alt: string;
}

// Define la estructura de estilos dinámicos para cada tarjeta
export interface CardStyle {
  zIndex: number;
  opacity: number;
  scale: string;
  translateX: string;
  rotateY: string;
  blur?: string;
}

// Define las props que recibe el componente AranyaCard
export interface AranyaCardProps {
  item: GalleryItem; // Los datos del ítem a mostrar
  index: number; // El índice del ítem en el array
  activeIndex: number; // El índice del ítem activo actualmente
  style: CardStyle; // Los estilos calculados dinámicamente para esta tarjeta
  onClick: (index: number) => void; // Función a llamar cuando se hace clic en la tarjeta (pasa su propio índice)
}

// Define las props que recibe el componente AranyaControls
export interface AranyaControlsProps {
  goToPrev: () => void; // Función para navegar a la tarjeta anterior
  goToNext: () => void; // Función para navegar a la tarjeta siguiente
  activeItemTitle: string; // Título del ítem activo para mostrar en los controles
}

// Define el resultado que devuelve el hook useAranyaGallery
export interface UseAranyaGalleryResult {
  activeIndex: number;
  goToNext: () => void;
  goToPrev: () => void;
  getCardStyle: (index: number) => CardStyle;
  handleUserInteraction: () => void; // Función para pausar el autoplay (ej: al interactuar manualmente)
  handleCardClick: (index: number) => void; // Función para manejar el clic en una tarjeta específica
  galleryItems: GalleryItem[]; // Los datos de la galería (exportados desde el hook)
}