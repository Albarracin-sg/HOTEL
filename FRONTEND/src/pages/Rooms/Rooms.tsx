// src/pages/Rooms/Rooms.tsx

import React, { useState } from 'react';
import Header from '../../components/common/Header/Header'; // Importa el Header
import Footer from '../../components/common/Footer/Footer'; // Importa el Footer
import { Search } from 'lucide-react'; // Asumiendo que lucide-react está instalado para iconos

// Define la interfaz para los datos de una habitación (para mejor tipado)
interface Room {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string; // Usaremos rutas de imágenes locales o placeholders
  category: string;
  features: string[];
}

const Rooms: React.FC = () => { // Usamos React.FC para tipar el componente funcional
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState(''); // Estado para el término de búsqueda

  // Datos de ejemplo para el Header (deben ser consistentes en toda la app)
  // Estos links y el logo usarán los colores definidos en el componente Header
  const headerNavLinks = [
    { label: 'Home', href: '/' },
    { label: 'Rooms', href: '/rooms' },
    { label: 'Amenities', href: '/amenities' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'Contact', href: '/contact' },
  ];

  // Categorías para filtrar
  const categories = [
    { id: 'all', name: 'Todas' },
    { id: 'standard', name: 'Estándar' },
    { id: 'deluxe', name: 'Deluxe' },
    { id: 'villa', name: 'Villa' }
  ];

  // Datos de las habitaciones con detalles mejorados y rutas de imagen relativas
  const roomTypes: Room[] = [ // Tipamos el array con la interfaz Room
    {
      id: 1,
      name: 'Habitación Estándar',
      description: 'Confortable y acogedora, ideal para viajeros solitarios o parejas. Disfruta de vistas parciales al mar y todas las comodidades esenciales.',
      price: 150,
      imageUrl: '/assets/images/rooms/standard.jpg', // Asegúrate de que estas imágenes existan en tu carpeta public/assets/images/rooms/
      category: 'standard',
      features: ['Wi-Fi gratis', 'Desayuno incluido', 'Aire acondicionado', 'TV de pantalla plana']
    },
    {
      id: 2,
      name: 'Suite Deluxe',
      description: 'Espaciosa y lujosa, con sala de estar separada y vistas panorámicas al paisaje natural. Perfecta para parejas que buscan un espacio especial.',
      price: 300,
      imageUrl: '/assets/images/rooms/deluxe.jpg',
      category: 'deluxe',
      features: ['Wi-Fi gratis', 'Desayuno gourmet', 'Sala de estar', 'Minibar premium', 'Balcón privado']
    },
    {
      id: 3,
      name: 'Villa con Piscina Privada',
      description: 'Máxima privacidad y exclusividad con piscina privada y terraza. Disfruta de unas vistas impresionantes mientras te relajas en tu propio paraíso personal.',
      price: 600,
      imageUrl: '/assets/images/rooms/villa.jpg',
      category: 'villa',
      features: ['Piscina privada', 'Terraza exclusiva', 'Servicio de mayordomo', 'Cena romántica incluida', 'Traslado VIP']
    },
    {
      id: 4,
      name: 'Suite Familiar',
      description: 'Amplia y confortable, diseñada para familias que desean compartir momentos especiales. Dos habitaciones conectadas con todas las comodidades necesarias.',
      price: 400,
      imageUrl: '/assets/images/rooms/family.jpg',
      category: 'deluxe', // Puede ser una categoría diferente si quieres
      features: ['Dos habitaciones', 'Zona de juegos', 'Desayuno incluido', 'Nevera familiar', 'TV en cada habitación']
    },
    {
      id: 5,
      name: 'Villa Panorámica',
      description: 'Ubicada en lo más alto con vistas de 360° al paraíso natural que nos rodea. La opción perfecta para celebrar ocasiones especiales o simplemente disfrutar del lujo.',
      price: 800,
      imageUrl: '/assets/images/rooms/panoramic.jpg',
      category: 'villa',
      features: ['Vistas panorámicas', 'Jacuzzi exterior', 'Cocina equipada', 'Cine en casa', 'Terraza privada']
    },
    {
      id: 6,
      name: 'Habitación Doble',
      description: 'Práctica y acogedora, con dos camas individuales. Ideal para amigos o compañeros de viaje que buscan comodidad a un precio accesible.',
      price: 180,
      imageUrl: '/assets/images/rooms/double.jpg',
      category: 'standard',
      features: ['Dos camas individuales', 'Escritorio de trabajo', 'Wi-Fi gratis', 'Baño privado']
    }
  ];

  // Filtrar habitaciones por categoría y término de búsqueda
  const filteredRooms = roomTypes
    .filter(room => selectedCategory === 'all' || room.category === selectedCategory)
    .filter(room =>
      room.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      room.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      room.features.some(feature => feature.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  
  return (
    // Contenedor principal con fondo oscuro (bg-gray-900) y layout de columna
    <div className="bg-gray-900 text-white min-h-screen flex flex-col">
      {/* Header Component - Usa los colores definidos internamente o pasados por props */}
      <Header logoText="Tu Hotel" navLinks={headerNavLinks} />

      {/* Sección de Encabezado de Página - Fondo ligeramente diferente (bg-gray-800) */}
      <section className="pt-32 pb-16 bg-gray-800 text-center">
        <div className="container mx-auto px-4">
          {/* Título de la página - Parte "Descubre" en color ambar (text-amber-500) */}
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="text-amber-500">Descubre</span> Nuestras Habitaciones
          </h1>
          {/* Descripción corta - Texto en gris claro (text-gray-300) */}
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explora nuestras exclusivas opciones de alojamiento diseñadas para tu máximo confort y disfrute.
          </p>
        </div>
      </section>

      {/* Sección de Filtro y Búsqueda - Fondo oscuro principal (bg-gray-900) */}
      <div className="bg-gray-900 py-8">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
           {/* Filtros de Categoría */}
          <div className="flex flex-wrap justify-center md:justify-start gap-3">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                // Clases de color para los botones de filtro
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    // Botón activo: Fondo ambar (bg-amber-500), texto oscuro (text-gray-900)
                    ? 'bg-amber-500 text-gray-900 font-semibold shadow-md'
                    // Botón inactivo: Fondo gris oscuro (bg-gray-700), texto blanco (text-white)
                    : 'bg-gray-700 text-white hover:bg-gray-600' // Hover en gris un poco más claro
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

           {/* Barra de Búsqueda */}
           <div className="relative w-full md:w-auto md:flex-grow max-w-sm">
             <input
               type="text"
               placeholder="Buscar habitación..."
               value={searchTerm}
               onChange={(e) => setSearchTerm(e.target.value)}
               // Estilo del input: Fondo gris oscuro (bg-gray-700), borde gris (border-gray-600), texto blanco (text-white)
               // Foco con anillo ambar (focus:ring-amber-500)
               className="w-full px-4 py-2 rounded-full bg-gray-700 bg-opacity-80 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-amber-500 pl-10 text-sm text-white"
             />
             {/* Icono de Búsqueda - Color gris (text-gray-400) */}
             <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
           </div>
        </div>
      </div>


      {/* Área Principal del Contenido - Grid de Habitaciones */}
      <main className="flex-grow py-12 px-4 md:px-8 container mx-auto">

        {/* Grid de Habitaciones */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredRooms.map(room => (
            // Tarjeta de Habitación - Fondo gris oscuro (bg-gray-800), sombra con tinte ambar en hover (shadow-amber-500/30)
            <div
              key={room.id}
              className="bg-gray-800 rounded-lg shadow-xl overflow-hidden flex flex-col transform transition duration-300 hover:-translate-y-1 hover:shadow-amber-500/30"
            >
              {/* Imagen de la habitación */}
              <div className="relative h-56 overflow-hidden">
                {/* La imagen en sí misma no define la paleta base, sino el contenido sobre el que se colocan los elementos */}
                <img
                  src={room.imageUrl}
                  alt={room.name}
                  className="w-full h-full object-cover transition duration-700 hover:scale-110"
                />
                 {/* Precio - Fondo ambar (bg-amber-500), texto oscuro (text-gray-900) */}
                <div className="absolute top-3 right-3 bg-amber-500 text-gray-900 font-bold py-1 px-3 text-sm rounded-full shadow-md">
                  ${room.price}/noche
                </div>
              </div>

              {/* Contenido de la Tarjeta - Padding interno */}
              <div className="p-6 flex flex-col flex-grow">
                {/* Nombre de la Habitación - Texto ambar (text-amber-400) */}
                <h2 className="text-2xl font-semibold mb-2 text-amber-400">{room.name}</h2>
                {/* Descripción - Texto gris claro (text-gray-300) */}
                <p className="text-gray-300 text-sm mb-6 flex-grow">{room.description}</p>

                {/* Lista de Características */}
                <div className="mt-auto">
                  {/* Título de características - Texto gris oscuro (text-gray-400) */}
                  <h3 className="text-xs uppercase tracking-wider text-gray-400 mb-2">Características</h3>
                  {/* Items de característica - Texto gris claro (text-gray-300) */}
                  <ul className="grid grid-cols-2 gap-x-4 gap-y-1 mb-6 text-sm">
                    {room.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-300">
                        {/* Punto de lista - Color ambar (text-amber-500) */}
                        <span className="text-amber-500 mr-2">•</span> {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Botones de Acción */}
                  <div className="flex gap-3">
                    {/* Botón principal - Fondo ambar (bg-amber-500), texto oscuro (text-gray-900) */}
                    <button className="flex-1 px-4 py-2 bg-amber-500 text-gray-900 font-semibold rounded hover:bg-amber-600 transition duration-300 text-sm">
                      Reservar Ahora
                    </button>
                    {/* Botón secundario - Borde ambar (border-amber-500), texto ambar (text-amber-500), fondo transparente con hover ambar (hover:bg-amber-500/10) */}
                    <button className="px-4 py-2 border border-amber-500 text-amber-500 rounded hover:bg-amber-500 hover:text-gray-900 transition duration-300 text-sm">
                      Detalles
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Estado Vacío */}
        {filteredRooms.length === 0 && (
          <div className="text-center py-16">
            {/* Texto gris oscuro (text-gray-400) */}
            <h3 className="text-2xl text-gray-400">No se encontraron habitaciones en esta categoría</h3>
            {/* Botón para ver todas - Fondo ambar (bg-amber-500), texto oscuro (text-gray-900) */}
            <button
              onClick={() => { setSelectedCategory('all'); setSearchTerm(''); }}
              className="mt-4 px-6 py-2 bg-amber-500 text-gray-900 font-semibold rounded-full hover:bg-amber-600 transition duration-300"
            >
              Ver todas las habitaciones
            </button>
          </div>
        )}

      </main>

      {/* Sección CTA (Call to Action) - Fondo gris oscuro (bg-gray-800) */}
       <section className="bg-gray-800 py-16 text-center">
         <div className="container mx-auto px-4">
           {/* Título CTA - Texto ambar (text-amber-500) */}
           <h2 className="text-3xl md:text-4xl font-bold mb-6 text-amber-500">Planifica tu Estancia Perfecta</h2>
           {/* Descripción CTA - Texto gris claro (text-gray-300) */}
           <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
             Nuestro equipo está listo para ayudarte a elegir la habitación ideal y asegurar que tu visita sea inolvidable.
           </p>
           {/* Botones CTA */}
           <div className="flex flex-wrap justify-center gap-6">
             {/* Botón principal CTA - Fondo ambar (bg-amber-500), texto oscuro (text-gray-900) */}
             <a href="/contact" className="px-8 py-3 bg-amber-500 text-gray-900 font-semibold rounded-full hover:bg-amber-600 transition duration-300 text-lg shadow-md">
               Contacta un Experto
             </a>
             {/* Botón secundario CTA - Borde blanco (border-white), texto blanco (text-white), hover con fondo blanco semi-transparente (hover:bg-white/10) */}
             <a href="/reservations" className="px-8 py-3 border border-white text-white rounded-full hover:bg-white/10 transition duration-300 text-lg shadow-md">
               Inicia tu Reserva
             </a>
           </div>
         </div>
       </section>


      {/* Footer Component - Usa los colores definidos internamente o pasados por props */}
      <Footer />
    </div>
  );
};

export default Rooms;