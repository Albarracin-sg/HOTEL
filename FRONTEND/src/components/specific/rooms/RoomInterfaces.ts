import React from 'react';

// Define la interfaz para los datos de una habitación
export interface Room {
  id: number;
  name: string;
  description: string;
  price: number;
  images: string[]; // Array de imágenes para el carrusel
  category: string;
  features: string[];
  capacity: number;
  bedType: string;
  size: string;
  fullDescription: string;
  amenities: {
    icon: React.ComponentType<any>;
    name: string;
  }[];
}

// Interface para el estado de reserva
export interface BookingState {
  checkIn: string;
  checkOut: string;
  guests: number;
  roomId: number | null;
  email: string;
}

// Interface para las categorías de habitaciones
export interface RoomCategory {
  id: string;
  name: string;
}