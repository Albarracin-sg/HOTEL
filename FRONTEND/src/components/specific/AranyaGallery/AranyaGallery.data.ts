// src/components/specific/AranyaGallery/AranyaGallery.data.ts
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
    title: "gallery.title1", 
    description: "gallery.description1", 
    year: "gallery.year1", 
    imageUrl: galleryImage1,
    alt: "gallery.alt1", 
  },
  {
    id: 2,
    title: "gallery.title2",
    description: "gallery.description2",
    year: "gallery.year2",
    imageUrl: galleryImage2,
    alt: "gallery.alt2",
  },
  {
    id: 3,
    title: "gallery.title3",
    description: "gallery.description3",
    year: "gallery.year3",
    imageUrl: galleryImage3,
    alt: "gallery.alt3",
  },
  {
    id: 4,
    title: "gallery.title4",
    description: "gallery.description4",
    year: "gallery.year4",
    imageUrl: galleryImage4,
    alt: "gallery.alt4",
  },
];

export { blackBackground };