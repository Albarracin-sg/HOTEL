// src/pages/Rooms/Rooms.tsx

import React, { useEffect, useState } from "react";
import Header from "../../components/common/Header/Header";
import Footer from "../../components/common/Footer/Footer";
import RoomCard from "../../components/specific/rooms/RoomCard/RoomCard";
import RoomFilter from "../../components/specific/rooms/RoomFilter/RoomFilter";
import RoomModal from "../../components/specific/rooms/RoomModal/RoomModal";
import PaymentGatewayModal from "../../components/specific/rooms/PaymentGatewayModal/PaymentGatewayModal";
import type {
  Room,
  BookingState,
  RoomCategory,
} from "../../components/specific/rooms/RoomInterfaces";
import {
  Users,
  Wifi,
  Coffee,
  Car,
  Bath,
  Tv,
  Wind,
  Sparkles,
  Star,
  MapPin,
} from "lucide-react";

// Importa la imagen de fondo
import backgroundImage from "../../assets/images/background/v6.jpg";

const Rooms: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [bookingData, setBookingData] = useState<BookingState>({
    checkIn: "",
    checkOut: "",
    guests: 1,
    roomId: null,
    email: "",
  });
  const [showPaymentGateway, setShowPaymentGateway] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isLoaded, setIsLoaded] = useState(false);

  // Efecto para detectar si es móvil y actualizar el estado
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Efecto para animación de carga
  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const categories: RoomCategory[] = [
    { id: "all", name: "Todas" },
    { id: "standard", name: "Estándar" },
    { id: "deluxe", name: "Deluxe" },
    { id: "villa", name: "Villa" },
  ];

  const roomTypes: Room[] = [
    {
      id: 1,
      name: "Habitación Estándar",
      description:
        "Confortable y acogedora, ideal para viajeros solitarios o parejas.",
      fullDescription:
        "Nuestra habitación estándar ofrece el equilibrio perfecto entre comodidad y precio. Con vistas parciales al mar, esta habitación cuenta con todas las comodidades esenciales para una estancia relajante. El diseño moderno y funcional garantiza que tengas todo lo que necesitas para un descanso reparador.",
      price: 150,
      images: [
        "/assets/images/rooms/standard1.jpg",
        "/assets/images/rooms/standard2.jpg",
        "/assets/images/rooms/standard3.jpg",
        "/assets/images/rooms/standard4.jpg",
      ],
      category: "standard",
      features: [
        "Wi-Fi gratis",
        "Desayuno incluido",
        "Aire acondicionado",
        "TV de pantalla plana",
      ],
      capacity: 2,
      bedType: "Cama Queen",
      size: "25 m²",
      amenities: [
        { icon: Wifi, name: "Wi-Fi gratis" },
        { icon: Coffee, name: "Desayuno incluido" },
        { icon: Wind, name: "Aire acondicionado" },
        { icon: Tv, name: "TV pantalla plana" },
        { icon: Bath, name: "Baño privado" },
      ],
    },
    {
      id: 2,
      name: "Suite Deluxe",
      description:
        "Espaciosa y lujosa, con sala de estar separada y vistas panorámicas.",
      fullDescription:
        "La Suite Deluxe redefine el concepto de lujo y comodidad. Con una sala de estar separada, esta suite ofrece el espacio perfecto para relajarse y disfrutar de las vistas panorámicas al paisaje natural. Cada detalle ha sido cuidadosamente seleccionado para proporcionar una experiencia única e inolvidable.",
      price: 300,
      images: [
        "/assets/images/rooms/deluxe1.jpg",
        "/assets/images/rooms/deluxe2.jpg",
        "/assets/images/rooms/deluxe3.jpg",
        "/assets/images/rooms/deluxe4.jpg",
        "/assets/images/rooms/deluxe5.jpg",
      ],
      category: "deluxe",
      features: [
        "Wi-Fi gratis",
        "Desayuno gourmet",
        "Sala de estar",
        "Minibar premium",
        "Balcón privado",
      ],
      capacity: 3,
      bedType: "Cama King + Sofá cama",
      size: "45 m²",
      amenities: [
        { icon: Wifi, name: "Wi-Fi gratis" },
        { icon: Coffee, name: "Desayuno gourmet" },
        { icon: Wind, name: "Aire acondicionado" },
        { icon: Tv, name: "TV pantalla plana" },
        { icon: Bath, name: "Baño de lujo" },
        { icon: Car, name: "Minibar premium" },
      ],
    },
    {
      id: 3,
      name: "Villa con Piscina Privada",
      description:
        "Máxima privacidad y exclusividad con piscina privada y terraza.",
      fullDescription:
        "Experimenta el lujo absoluto en nuestra Villa con Piscina Privada. Este santuario de tranquilidad ofrece privacidad total con su propia piscina y terraza exclusiva. Disfruta de servicios de primera clase incluidos como el servicio de mayordomo y cenas románticas, todo mientras contemplas vistas impresionantes desde tu propio paraíso personal.",
      price: 600,
      images: [
        "/assets/images/rooms/villa1.jpg",
        "/assets/images/rooms/villa2.jpg",
        "/assets/images/rooms/villa3.jpg",
        "/assets/images/rooms/villa4.jpg",
        "/assets/images/rooms/villa5.jpg",
        "/assets/images/rooms/villa6.jpg",
      ],
      category: "villa",
      features: [
        "Piscina privada",
        "Terraza exclusiva",
        "Servicio de mayordomo",
        "Cena romántica incluida",
        "Traslado VIP",
      ],
      capacity: 4,
      bedType: "Cama King + Habitación adicional",
      size: "120 m²",
      amenities: [
        { icon: Wifi, name: "Wi-Fi gratis" },
        { icon: Coffee, name: "Servicio de mayordomo" },
        { icon: Wind, name: "Aire acondicionado" },
        { icon: Tv, name: "TV pantalla plana" },
        { icon: Bath, name: "Baño de lujo" },
        { icon: Car, name: "Traslado VIP" },
      ],
    },
    {
      id: 4,
      name: "Suite Familiar",
      description:
        "Amplia y confortable, diseñada para familias que desean compartir momentos especiales.",
      fullDescription:
        "Nuestra Suite Familiar ha sido especialmente diseñada pensando en las necesidades de las familias. Con dos habitaciones conectadas y una zona de juegos dedicada, esta suite ofrece el espacio perfecto para que todos puedan disfrutar de unas vacaciones memorables. Las comodidades incluyen televisores en cada habitación y una nevera familiar para mayor conveniencia.",
      price: 400,
      images: [
        "/assets/images/rooms/family1.jpg",
        "/assets/images/rooms/family2.jpg",
        "/assets/images/rooms/family3.jpg",
        "/assets/images/rooms/family4.jpg",
      ],
      category: "deluxe",
      features: [
        "Dos habitaciones",
        "Zona de juegos",
        "Desayuno incluido",
        "Nevera familiar",
        "TV en cada habitación",
      ],
      capacity: 6,
      bedType: "Cama King + 2 Camas individuales",
      size: "65 m²",
      amenities: [
        { icon: Wifi, name: "Wi-Fi gratis" },
        { icon: Coffee, name: "Desayuno incluido" },
        { icon: Wind, name: "Aire acondicionado" },
        { icon: Tv, name: "TV en cada habitación" },
        { icon: Bath, name: "Dos baños" },
        { icon: Users, name: "Zona de juegos" },
      ],
    },
  ];

  // Función de filtrado
  const filteredRooms = roomTypes
    .filter((room) => {
      // Filtro por categoría
      if (selectedCategory === "all") return true;
      return room.category === selectedCategory;
    })
    .filter((room) => {
      // Filtro por término de búsqueda
      if (!searchTerm.trim()) return true;

      const searchLower = searchTerm.toLowerCase();
      return (
        room.name.toLowerCase().includes(searchLower) ||
        room.description.toLowerCase().includes(searchLower) ||
        room.fullDescription.toLowerCase().includes(searchLower) ||
        room.features.some((feature) =>
          feature.toLowerCase().includes(searchLower)
        ) ||
        room.amenities.some((amenity) =>
          amenity.name.toLowerCase().includes(searchLower)
        )
      );
    });

  const openRoomModal = (room: Room) => {
    setSelectedRoom(room);
    setCurrentImageIndex(0);
    setBookingData((prev) => ({ ...prev, roomId: room.id }));
  };

  const closeRoomModal = () => {
    setSelectedRoom(null);
    setCurrentImageIndex(0);
    setBookingData({
      checkIn: "",
      checkOut: "",
      guests: 1,
      roomId: null,
      email: "",
    });
    setShowPaymentGateway(false);
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

  const handleBookingDataChange = (data: Partial<BookingState>) => {
    setBookingData((prev) => ({ ...prev, ...data }));
  };

  const handleConfirmBooking = () => {
    if (
      bookingData.checkIn &&
      bookingData.checkOut &&
      bookingData.guests &&
      selectedRoom
    ) {
      const bookingPayload = {
        ...bookingData,
        roomId: selectedRoom.id,
        roomName: selectedRoom.name,
        pricePerNight: selectedRoom.price,
      };
      console.log(
        "Datos de reserva listos para enviar:",
        JSON.stringify(bookingPayload, null, 2)
      );

      setShowPaymentGateway(true);
    } else {
      alert("Por favor, completa todos los campos de reserva");
    }
  };

  const handlePaymentSuccess = () => {
    alert("¡Reserva confirmada y pago exitoso!");
    closeRoomModal();
  };

  const handlePaymentCancel = () => {
    setShowPaymentGateway(false);
    alert("Proceso de pago cancelado.");
  };

  // Función para manejar el cambio de categoría con debug
  const handleSelectCategory = (categoryId: string) => {
    console.log("Cambiando categoría a:", categoryId);
    setSelectedCategory(categoryId);
  };

  // Función para manejar el cambio de término de búsqueda
  const handleSearchTermChange = (term: string) => {
    console.log("Término de búsqueda:", term);
    setSearchTerm(term);
  };

  return (
    <div
      className={`bg-gray-900 text-white min-h-screen flex flex-col relative bg-cover bg-center transition-all duration-1000 ${
        isLoaded ? "opacity-100" : "opacity-0"
      }`}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Overlay dinámico con gradiente animado */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-gray-900/70 to-black/60 z-0">
        {/* Efectos de partículas flotantes - reducidos en móvil */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(isMobile ? 6 : 12)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-amber-400/20 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
      </div>

      <Header logoText="Reserva" />

      {/* Sección del hero mejorada y optimizada para móvil */}
      <section
        className={`${isMobile ? "pt-24 pb-8" : "pt-32 pb-12"} relative z-10`}
      >
        <div className="container mx-auto px-4">
          {/* Hero con efectos glassmorphism */}
          <div
            className={`text-center mb-8 transform transition-all duration-1000 ${
              isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            {/* Badge de bienvenida - simplificado en móvil */}
            <div
              className={`inline-flex items-center gap-2 bg-gradient-to-r from-amber-500/20 to-orange-500/20 backdrop-blur-sm rounded-full ${
                isMobile ? "px-4 py-1.5" : "px-6 py-2"
              } border border-amber-500/30 mb-4 group hover:scale-105 transition-transform duration-300`}
            >
              <Sparkles className="w-4 h-4 text-amber-400 animate-pulse" />
              <span
                className={`text-amber-300 font-medium ${
                  isMobile ? "text-xs" : "text-sm"
                }`}
              >
                Experiencias Únicas
              </span>
              {!isMobile && (
                <Star className="w-4 h-4 text-amber-400 animate-pulse" />
              )}
            </div>

            <h1
              className={`${
                isMobile ? "text-3xl" : "text-5xl md:text-7xl"
              } font-bold mb-4 bg-gradient-to-r from-white via-amber-100 to-amber-300 bg-clip-text text-transparent leading-tight`}
            >
              <span
                className={`block text-amber-400 ${
                  isMobile ? "text-xl" : "text-3xl md:text-4xl"
                } font-light mb-2`}
              >
                Descubre
              </span>
              Nuestras Habitaciones
            </h1>

            <p
              className={`${
                isMobile ? "text-base" : "text-xl"
              } text-gray-300 max-w-3xl mx-auto mb-6 leading-relaxed ${
                isMobile ? "px-2" : ""
              }`}
            >
              {isMobile
                ? "Lujo y comodidad en cada detalle para momentos inolvidables"
                : "Sumérgete en el lujo y la comodidad con nuestras exclusivas opciones de alojamiento, diseñadas especialmente para crear momentos inolvidables."}
            </p>

            {/* Estadísticas rápidas - layout adaptativo para móvil */}
            <div
              className={`flex ${
                isMobile ? "flex-col gap-3" : "flex-wrap justify-center gap-6"
              } mb-6`}
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl px-6 py-3 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="text-2xl font-bold text-amber-400">
                  {roomTypes.length}+
                </div>
                <div className="text-sm text-gray-300">Habitaciones</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl px-6 py-3 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="text-2xl font-bold text-amber-400">5★</div>
                <div className="text-sm text-gray-300">Calificación</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl px-6 py-3 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="text-2xl font-bold text-amber-400">24/7</div>
                <div className="text-sm text-gray-300">Servicio</div>
              </div>
            </div>

            {/* CTA mejorado - adaptativo para móvil */}
            <div
              className={`${
                isMobile
                  ? "flex flex-col gap-3"
                  : "inline-flex items-center gap-4"
              } bg-white/10 backdrop-blur-md rounded-full ${
                isMobile ? "px-6 py-4" : "px-8 py-4"
              } border border-white/20 hover:bg-white/15 transition-all duration-300 group`}
            >
              {!isMobile && (
                <MapPin className="w-5 h-5 text-amber-400 group-hover:animate-bounce" />
              )}
              <span
                className={`text-amber-300 font-medium ${
                  isMobile ? "text-sm text-center" : ""
                }`}
              >
                {isMobile
                  ? "¿Necesitas ayuda?"
                  : "¿Necesitas asesoría personalizada?"}
              </span>
              <a
                href="/contact"
                className={`${
                  isMobile ? "px-6 py-3" : "px-8 py-3"
                } bg-gradient-to-r from-amber-500 to-orange-600 text-gray-900 font-bold rounded-full hover:from-amber-600 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95 ${
                  isMobile ? "text-sm" : ""
                }`}
              >
                {isMobile ? "Contactar" : "Contactar Experto"}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de filtros con mejor diseño - optimizada para móvil */}
      <div
        className={`relative z-10 transform transition-all duration-700 delay-300 ${
          isLoaded ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
        }`}
      >
        <div className="container mx-auto px-4 mb-6">
          <div className="bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 p-4 shadow-2xl">
            <RoomFilter
              categories={categories}
              selectedCategory={selectedCategory}
              onSelectCategory={handleSelectCategory}
              searchTerm={searchTerm}
              onSearchTermChange={handleSearchTermChange}
            />
          </div>
        </div>
      </div>

      {/* Contenido principal */}
      <main
        className={`flex-grow ${
          isMobile ? "py-6 px-4" : "py-12 px-4 md:px-8"
        } container mx-auto relative z-10`}
      >
        {/* Contador de resultados mejorado - simplificado en móvil */}
        <div
          className={`mb-8 text-center transform transition-all duration-700 delay-500 ${
            isLoaded ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          <div className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 p-4 inline-block">
            <p
              className={`text-gray-200 ${
                isMobile ? "text-base" : "text-xl"
              } font-medium mb-3`}
            >
              {filteredRooms.length > 0
                ? `${isMobile ? "✨" : "✨"} ${
                    filteredRooms.length
                  } habitación${filteredRooms.length !== 1 ? "es" : ""} ${
                    isMobile ? "" : "disponible"
                  }${filteredRooms.length !== 1 ? "s" : ""} ${
                    isMobile ? "" : "para ti"
                  }`
                : "🔍 Sin resultados"}
            </p>

            <div
              className={`flex ${
                isMobile ? "flex-col gap-2" : "flex-wrap justify-center gap-3"
              }`}
            >
              {selectedCategory !== "all" && (
                <span
                  className={`px-3 py-1 bg-gradient-to-r from-amber-500/20 to-orange-500/20 text-amber-300 rounded-full ${
                    isMobile ? "text-xs" : "text-sm"
                  } border border-amber-500/30 font-medium`}
                >
                  📍{" "}
                  {categories.find((cat) => cat.id === selectedCategory)?.name}
                </span>
              )}
              {searchTerm && (
                <span
                  className={`px-3 py-1 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-blue-300 rounded-full ${
                    isMobile ? "text-xs" : "text-sm"
                  } border border-blue-500/30 font-medium`}
                >
                  🔎 "
                  {searchTerm.length > 15 && isMobile
                    ? searchTerm.substring(0, 15) + "..."
                    : searchTerm}
                  "
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Grid de habitaciones - una columna en móvil */}
        <div
          className={`grid ${
            isMobile
              ? "grid-cols-1 gap-6"
              : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          }`}
        >
          {filteredRooms.map((room, index) => (
            <div
              key={room.id}
              className={`transform transition-all duration-700 ${
                isLoaded
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
              style={{
                transitionDelay: `${700 + index * 150}ms`,
              }}
            >
              <RoomCard room={room} onViewDetails={openRoomModal} />
            </div>
          ))}
        </div>

        {/* Mensaje cuando no hay resultados - compacto en móvil */}
        {filteredRooms.length === 0 && (
          <div
            className={`text-center ${
              isMobile ? "py-12" : "py-20"
            } transform transition-all duration-700 delay-700 ${
              isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <div
              className={`max-w-lg mx-auto bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl border border-white/20 ${
                isMobile ? "p-8" : "p-12"
              } shadow-2xl`}
            >
              {/* Icono animado */}
              <div
                className={`${isMobile ? "w-16 h-16" : "w-24 h-24"} mx-auto ${
                  isMobile ? "mb-4" : "mb-8"
                } bg-gradient-to-br from-amber-500/20 to-orange-500/20 rounded-full flex items-center justify-center border border-amber-500/30`}
              >
                <div
                  className={`${
                    isMobile ? "text-2xl" : "text-4xl"
                  } animate-bounce`}
                >
                  🏨
                </div>
              </div>

              <h3
                className={`${
                  isMobile ? "text-xl" : "text-3xl"
                } font-bold text-white mb-4`}
              >
                {isMobile ? "Sin resultados" : "Oops! No encontramos nada"}
              </h3>
              <p
                className={`text-gray-300 mb-6 ${
                  isMobile ? "text-sm" : "text-lg"
                } leading-relaxed`}
              >
                {searchTerm
                  ? `No hay habitaciones que coincidan con "${searchTerm}".${
                      isMobile ? "" : " Intenta con otros términos de búsqueda."
                    }`
                  : `No hay habitaciones en "${
                      categories.find((cat) => cat.id === selectedCategory)
                        ?.name
                    }".${isMobile ? "" : " Explora otras opciones."}`}
              </p>

              <div
                className={`flex ${
                  isMobile ? "flex-col gap-3" : "flex-col sm:flex-row gap-4"
                } justify-center`}
              >
                {searchTerm && (
                  <button
                    onClick={() => setSearchTerm("")}
                    className={`${
                      isMobile ? "px-6 py-3 text-sm" : "px-8 py-4"
                    } bg-gradient-to-r from-blue-500 to-cyan-600 text-white font-bold rounded-full hover:from-blue-600 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95`}
                  >
                    {isMobile ? "🗑️ Limpiar" : "🗑️ Limpiar búsqueda"}
                  </button>
                )}
                <button
                  onClick={() => {
                    setSelectedCategory("all");
                    setSearchTerm("");
                  }}
                  className={`${
                    isMobile ? "px-6 py-3 text-sm" : "px-8 py-4"
                  } bg-gradient-to-r from-amber-500 to-orange-600 text-gray-900 font-bold rounded-full hover:from-amber-600 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95`}
                >
                  {isMobile ? "🏠 Ver todas" : "🏠 Ver todas las habitaciones"}
                </button>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Modales con mejor backdrop */}
      {selectedRoom && (
        <div className="fixed inset-0 flex items-center justify-center z-50 p-4 transition-all duration-500 ease-out">
          {/* Fondo del modal mejorado */}
          <div className="absolute inset-0 transition-all duration-300 ease-out bg-gradient-to-br from-black/40 via-gray-900/40 to-black/40 backdrop-blur-xl"></div>

          {/* RoomModal */}
          <div
            className={`absolute max-h-[90vh] transition-all duration-500 ease-out
            ${
              showPaymentGateway
                ? isMobile
                  ? "translate-x-full opacity-0"
                  : "w-1/2 md:translate-x-[-100%] opacity-100"
                : "w-full md:w-3/4 opacity-100"
            }
            ${isMobile && showPaymentGateway ? "hidden" : "block"}
            `}
            style={
              showPaymentGateway && !isMobile
                ? { left: "50%", transform: "translateX(-100%)" }
                : {}
            }
          >
            <RoomModal
              selectedRoom={selectedRoom}
              currentImageIndex={currentImageIndex}
              bookingData={bookingData}
              onClose={closeRoomModal}
              onNextImage={nextImage}
              onPrevImage={prevImage}
              onSetCurrentImage={setCurrentImageIndex}
              onBookingDataChange={handleBookingDataChange}
              onHandleBooking={handleConfirmBooking}
            />
          </div>

          {/* PaymentGatewayModal */}
          {showPaymentGateway && (
            <PaymentGatewayModal
              onSuccess={handlePaymentSuccess}
              onCancel={handlePaymentCancel}
              roomPrice={selectedRoom.price}
            />
          )}
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Rooms;
