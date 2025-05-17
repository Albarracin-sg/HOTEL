import type { GalleryItem } from './AranyaGallery.types';

// Imágenes optimizadas para cada tarjeta
import galleryImage1 from '../../../assets/images/background/v.jpg';
import galleryImage2 from '../../../assets/images/galeria/arquitectura.jpg';
import galleryImage3 from '../../../assets/images/galeria/valores.webp';
import galleryImage4 from '../../../assets/images/galeria/hotel.jpg';

import blackBackground from '../../../assets/images/background/v6.jpg';

export const galleryItems: GalleryItem[] = [
  {
    id: 1,
    title: "Raíces de Aranya",
    description: "Un refugio donde la calma y el diseño se funden con la naturaleza.",
    year: "Desde 2022",
    imageUrl: galleryImage1,
    alt: "Historia del hotel Aranya",
  },
  {
    id: 2,
    title: "Espacios con Propósito",
    description: "Diseño que acompaña al entorno sin perturbarlo.",
    year: "Diseño & Entorno",
    imageUrl: galleryImage2,
    alt: "Arquitectura del hotel",
  },
  {
    id: 3,
    title: "Nuestros Valores",
    description: "Naturaleza, hospitalidad y equilibrio sostenible.",
    year: "Lo que nos guía",
    imageUrl: galleryImage3,
    alt: "Valores de Aranya",
  },
  {
    id: 4,
    title: "Únicos por Naturaleza",
    description: "Ubicación, diseño y tecnología pensados para el descanso.",
    year: "La experiencia Aranya",
    imageUrl: galleryImage4,
    alt: "Aspectos únicos del hotel",
  },
];

export { blackBackground };
