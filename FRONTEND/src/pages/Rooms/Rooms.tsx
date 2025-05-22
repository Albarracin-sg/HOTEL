// src/pages/Rooms/Rooms.tsx

import React, { useState } from 'react';
import Header from '../../components/common/Header/Header';
import Footer from '../../components/common/Footer/Footer';
import { Search, X, ChevronLeft, ChevronRight, Users, Bed, Wifi, Coffee, Car, Bath, Tv, Wind } from 'lucide-react';

// Define la interfaz para los datos de una habitación
interface Room {
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
interface BookingState {
  checkIn: string;
  checkOut: string;
  guests: number;
  roomId: number | null;
}

const Rooms: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [bookingData, setBookingData] = useState<BookingState>({
    checkIn: '',
    checkOut: '',
    guests: 1,
    roomId: null
  });

  // Categorías para filtrar
  const categories = [
    { id: 'all', name: 'Todas' },
    { id: 'standard', name: 'Estándar' },
    { id: 'deluxe', name: 'Deluxe' },
    { id: 'villa', name: 'Villa' }
  ];

  // Datos de las habitaciones con múltiples imágenes y más detalles
  const roomTypes: Room[] = [
    {
      id: 1,
      name: 'Habitación Estándar',
      description: 'Confortable y acogedora, ideal para viajeros solitarios o parejas.',
      fullDescription: 'Nuestra habitación estándar ofrece el equilibrio perfecto entre comodidad y precio. Con vistas parciales al mar, esta habitación cuenta con todas las comodidades esenciales para una estancia relajante. El diseño moderno y funcional garantiza que tengas todo lo que necesitas para un descanso reparador.',
      price: 150,
      images: [
        '/assets/images/rooms/standard1.jpg',
        '/assets/images/rooms/standard2.jpg',
        '/assets/images/rooms/standard3.jpg',
        '/assets/images/rooms/standard4.jpg'
      ],
      category: 'standard',
      features: ['Wi-Fi gratis', 'Desayuno incluido', 'Aire acondicionado', 'TV de pantalla plana'],
      capacity: 2,
      bedType: 'Cama Queen',
      size: '25 m²',
      amenities: [
        { icon: Wifi, name: 'Wi-Fi gratis' },
        { icon: Coffee, name: 'Desayuno incluido' },
        { icon: Wind, name: 'Aire acondicionado' },
        { icon: Tv, name: 'TV pantalla plana' },
        { icon: Bath, name: 'Baño privado' }
      ]
    },
    {
      id: 2,
      name: 'Suite Deluxe',
      description: 'Espaciosa y lujosa, con sala de estar separada y vistas panorámicas.',
      fullDescription: 'La Suite Deluxe redefine el concepto de lujo y comodidad. Con una sala de estar separada, esta suite ofrece el espacio perfecto para relajarse y disfrutar de las vistas panorámicas al paisaje natural. Cada detalle ha sido cuidadosamente seleccionado para proporcionar una experiencia única e inolvidable.',
      price: 300,
      images: [
        '/assets/images/rooms/deluxe1.jpg',
        '/assets/images/rooms/deluxe2.jpg',
        '/assets/images/rooms/deluxe3.jpg',
        '/assets/images/rooms/deluxe4.jpg',
        '/assets/images/rooms/deluxe5.jpg'
      ],
      category: 'deluxe',
      features: ['Wi-Fi gratis', 'Desayuno gourmet', 'Sala de estar', 'Minibar premium', 'Balcón privado'],
      capacity: 3,
      bedType: 'Cama King + Sofá cama',
      size: '45 m²',
      amenities: [
        { icon: Wifi, name: 'Wi-Fi gratis' },
        { icon: Coffee, name: 'Desayuno gourmet' },
        { icon: Wind, name: 'Aire acondicionado' },
        { icon: Tv, name: 'TV pantalla plana' },
        { icon: Bath, name: 'Baño de lujo' },
        { icon: Car, name: 'Minibar premium' }
      ]
    },
    {
      id: 3,
      name: 'Villa con Piscina Privada',
      description: 'Máxima privacidad y exclusividad con piscina privada y terraza.',
      fullDescription: 'Experimenta el lujo absoluto en nuestra Villa con Piscina Privada. Este santuario de tranquilidad ofrece privacidad total con su propia piscina y terraza exclusiva. Disfruta de servicios de primera clase incluidos como el servicio de mayordomo y cenas románticas, todo mientras contemplas vistas impresionantes desde tu propio paraíso personal.',
      price: 600,
      images: [
        '/assets/images/rooms/villa1.jpg',
        '/assets/images/rooms/villa2.jpg',
        '/assets/images/rooms/villa3.jpg',
        '/assets/images/rooms/villa4.jpg',
        '/assets/images/rooms/villa5.jpg',
        '/assets/images/rooms/villa6.jpg'
      ],
      category: 'villa',
      features: ['Piscina privada', 'Terraza exclusiva', 'Servicio de mayordomo', 'Cena romántica incluida', 'Traslado VIP'],
      capacity: 4,
      bedType: 'Cama King + Habitación adicional',
      size: '120 m²',
      amenities: [
        { icon: Wifi, name: 'Wi-Fi gratis' },
        { icon: Coffee, name: 'Servicio de mayordomo' },
        { icon: Wind, name: 'Aire acondicionado' },
        { icon: Tv, name: 'TV pantalla plana' },
        { icon: Bath, name: 'Baño de lujo' },
        { icon: Car, name: 'Traslado VIP' }
      ]
    },
    {
      id: 4,
      name: 'Suite Familiar',
      description: 'Amplia y confortable, diseñada para familias que desean compartir momentos especiales.',
      fullDescription: 'Nuestra Suite Familiar ha sido especialmente diseñada pensando en las necesidades de las familias. Con dos habitaciones conectadas y una zona de juegos dedicada, esta suite ofrece el espacio perfecto para que todos puedan disfrutar de unas vacaciones memorables. Las comodidades incluyen televisores en cada habitación y una nevera familiar para mayor conveniencia.',
      price: 400,
      images: [
        '/assets/images/rooms/family1.jpg',
        '/assets/images/rooms/family2.jpg',
        '/assets/images/rooms/family3.jpg',
        '/assets/images/rooms/family4.jpg'
      ],
      category: 'deluxe',
      features: ['Dos habitaciones', 'Zona de juegos', 'Desayuno incluido', 'Nevera familiar', 'TV en cada habitación'],
      capacity: 6,
      bedType: 'Cama King + 2 Camas individuales',
      size: '65 m²',
      amenities: [
        { icon: Wifi, name: 'Wi-Fi gratis' },
        { icon: Coffee, name: 'Desayuno incluido' },
        { icon: Wind, name: 'Aire acondicionado' },
        { icon: Tv, name: 'TV en cada habitación' },
        { icon: Bath, name: 'Dos baños' },
        { icon: Users, name: 'Zona de juegos' }
      ]
    }
  ];

  // Filtrar habitaciones
  const filteredRooms = roomTypes
    .filter(room => selectedCategory === 'all' || room.category === selectedCategory)
    .filter(room =>
      room.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      room.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      room.features.some(feature => feature.toLowerCase().includes(searchTerm.toLowerCase()))
    );

  // Funciones para el modal y carrusel
  const openRoomModal = (room: Room) => {
    setSelectedRoom(room);
    setCurrentImageIndex(0);
    setBookingData(prev => ({ ...prev, roomId: room.id }));
  };

  const closeRoomModal = () => {
    setSelectedRoom(null);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (selectedRoom) {
      setCurrentImageIndex((prev) => 
        prev === selectedRoom.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedRoom) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedRoom.images.length - 1 : prev - 1
      );
    }
  };

  const handleBooking = () => {
    if (bookingData.checkIn && bookingData.checkOut && bookingData.guests) {
      alert(`Reserva procesada para ${selectedRoom?.name}\nCheck-in: ${bookingData.checkIn}\nCheck-out: ${bookingData.checkOut}\nHuéspedes: ${bookingData.guests}`);
      closeRoomModal();
    } else {
      alert('Por favor, completa todos los campos de reserva');
    }
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col">
      <Header logoText="Tu Hotel" />

      {/* Sección de Encabezado */}
      <section className="pt-32 pb-16 bg-gray-800 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="text-amber-500">Descubre</span> Nuestras Habitaciones
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explora nuestras exclusivas opciones de alojamiento diseñadas para tu máximo confort y disfrute.
          </p>
        </div>
      </section>

      {/* Filtros y Búsqueda */}
      <div className="bg-gray-900 py-8">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap justify-center md:justify-start gap-3">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-amber-500 text-gray-900 font-semibold shadow-md'
                    : 'bg-gray-700 text-white hover:bg-gray-600'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-auto md:flex-grow max-w-sm">
            <input
              type="text"
              placeholder="Buscar habitación..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 rounded-full bg-gray-700 bg-opacity-80 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-amber-500 pl-10 text-sm text-white"
            />
            <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
          </div>
        </div>
      </div>

      {/* Grid de Habitaciones */}
      <main className="flex-grow py-12 px-4 md:px-8 container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredRooms.map(room => (
            <div
              key={room.id}
              className="bg-gray-800 rounded-lg shadow-xl overflow-hidden flex flex-col transform transition duration-300 hover:-translate-y-1 hover:shadow-amber-500/30"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={room.images[0]}
                  alt={room.name}
                  className="w-full h-full object-cover transition duration-700 hover:scale-110"
                />
                <div className="absolute top-3 right-3 bg-amber-500 text-gray-900 font-bold py-1 px-3 text-sm rounded-full shadow-md">
                  ${room.price}/noche
                </div>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <h2 className="text-2xl font-semibold mb-2 text-amber-400">{room.name}</h2>
                <p className="text-gray-300 text-sm mb-4 flex-grow">{room.description}</p>
                
                <div className="mb-4">
                  <div className="flex items-center gap-4 text-sm text-gray-400 mb-2">
                    <div className="flex items-center gap-1">
                      <Users size={16} />
                      <span>{room.capacity} huéspedes</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Bed size={16} />
                      <span>{room.bedType}</span>
                    </div>
                  </div>
                  <p className="text-xs text-gray-500">{room.size}</p>
                </div>

                <div className="flex gap-3 mt-auto">
                  <button 
                    onClick={() => openRoomModal(room)}
                    className="flex-1 px-4 py-2 bg-amber-500 text-gray-900 font-semibold rounded hover:bg-amber-600 transition duration-300 text-sm"
                  >
                    Ver Detalles
                  </button>
                  <button 
                    onClick={() => openRoomModal(room)}
                    className="px-4 py-2 border border-amber-500 text-amber-500 rounded hover:bg-amber-500 hover:text-gray-900 transition duration-300 text-sm"
                  >
                    Reservar
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Estado Vacío */}
        {filteredRooms.length === 0 && (
          <div className="text-center py-16">
            <h3 className="text-2xl text-gray-400">No se encontraron habitaciones en esta categoría</h3>
            <button
              onClick={() => { setSelectedCategory('all'); setSearchTerm(''); }}
              className="mt-4 px-6 py-2 bg-amber-500 text-gray-900 font-semibold rounded-full hover:bg-amber-600 transition duration-300"
            >
              Ver todas las habitaciones
            </button>
          </div>
        )}
      </main>

      {/* Modal de Detalles de Habitación */}
      {selectedRoom && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-gray-800 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            {/* Header del Modal */}
            <div className="flex justify-between items-center p-6 border-b border-gray-700">
              <h2 className="text-2xl font-bold text-amber-400">{selectedRoom.name}</h2>
              <button
                onClick={closeRoomModal}
                className="text-gray-400 hover:text-white transition duration-200"
              >
                <X size={24} />
              </button>
            </div>

            <div className="grid md:grid-cols-2 gap-6 p-6">
              {/* Carrusel de Imágenes */}
              <div className="space-y-4">
                <div className="relative h-64 md:h-80 overflow-hidden rounded-lg">
                  <img
                    src={selectedRoom.images[currentImageIndex]}
                    alt={`${selectedRoom.name} - Imagen ${currentImageIndex + 1}`}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Controles del Carrusel */}
                  <button
                    onClick={prevImage}
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition duration-200"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition duration-200"
                  >
                    <ChevronRight size={20} />
                  </button>

                  {/* Indicadores */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {selectedRoom.images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-2 h-2 rounded-full transition duration-200 ${
                          index === currentImageIndex ? 'bg-amber-500' : 'bg-white bg-opacity-50'
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* Miniaturas */}
                <div className="grid grid-cols-4 gap-2">
                  {selectedRoom.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`h-16 rounded overflow-hidden border-2 transition duration-200 ${
                        index === currentImageIndex ? 'border-amber-500' : 'border-transparent'
                      }`}
                    >
                      <img
                        src={image}
                        alt={`Miniatura ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* Información y Reserva */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-amber-400 mb-2">Descripción</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{selectedRoom.fullDescription}</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-amber-400 mb-3">Comodidades</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {selectedRoom.amenities.map((amenity, index) => (
                      <div key={index} className="flex items-center space-x-2 text-sm text-gray-300">
                        <amenity.icon size={16} className="text-amber-500" />
                        <span>{amenity.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-gray-700 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-amber-400 mb-4">Reservar Habitación</h3>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm text-gray-300 mb-1">Check-in</label>
                        <input
                          type="date"
                          value={bookingData.checkIn}
                          onChange={(e) => setBookingData(prev => ({ ...prev, checkIn: e.target.value }))}
                          className="w-full px-3 py-2 bg-gray-600 border border-gray-500 rounded text-white text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm text-gray-300 mb-1">Check-out</label>
                        <input
                          type="date"
                          value={bookingData.checkOut}
                          onChange={(e) => setBookingData(prev => ({ ...prev, checkOut: e.target.value }))}
                          className="w-full px-3 py-2 bg-gray-600 border border-gray-500 rounded text-white text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm text-gray-300 mb-1">Número de huéspedes</label>
                      <select
                        value={bookingData.guests}
                        onChange={(e) => setBookingData(prev => ({ ...prev, guests: parseInt(e.target.value) }))}
                        className="w-full px-3 py-2 bg-gray-600 border border-gray-500 rounded text-white text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                      >
                        {Array.from({ length: selectedRoom.capacity }, (_, i) => (
                          <option key={i + 1} value={i + 1}>{i + 1} huésped{i > 0 ? 'es' : ''}</option>
                        ))}
                      </select>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-gray-600">
                      <div>
                        <p className="text-2xl font-bold text-amber-500">${selectedRoom.price}</p>
                        <p className="text-sm text-gray-400">por noche</p>
                      </div>
                      <button
                        onClick={handleBooking}
                        className="px-6 py-3 bg-amber-500 text-gray-900 font-semibold rounded-lg hover:bg-amber-600 transition duration-300"
                      >
                        Confirmar Reserva
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Sección CTA */}
      <section className="bg-gray-800 py-16 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-amber-500">Planifica tu Estancia Perfecta</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Nuestro equipo está listo para ayudarte a elegir la habitación ideal y asegurar que tu visita sea inolvidable.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <a href="/contact" className="px-8 py-3 bg-amber-500 text-gray-900 font-semibold rounded-full hover:bg-amber-600 transition duration-300 text-lg shadow-md">
              Contacta un Experto
            </a>
            <a href="/reservations" className="px-8 py-3 border border-white text-white rounded-full hover:bg-white/10 transition duration-300 text-lg shadow-md">
              Inicia tu Reserva
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Rooms;