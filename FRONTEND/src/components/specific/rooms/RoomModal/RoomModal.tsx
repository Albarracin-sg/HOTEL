// src/components/rooms/RoomModal/RoomModal.tsx

import React, { useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import type { Room, BookingState } from "../RoomInterfaces";

import { useTranslation } from "react-i18next"; 

interface RoomModalProps {
  selectedRoom: Room;
  currentImageIndex: number;
  bookingData: BookingState;
  onClose: () => void;
  onNextImage: () => void;
  onPrevImage: () => void;
  onSetCurrentImage: (index: number) => void;
  onBookingDataChange: (data: Partial<BookingState>) => void;
  onHandleBooking: () => void;
}

const RoomModal: React.FC<RoomModalProps> = ({
  selectedRoom,
  currentImageIndex,
  bookingData,
  onClose,
  onNextImage,
  onPrevImage,
  onSetCurrentImage,
  onBookingDataChange,
  onHandleBooking,
}) => {

  const { t } = useTranslation(); // Usar el hook de traducción

  // Obtener la fecha de hoy en formato YYYY-MM-DD
  const today = new Date().toISOString().split("T")[0];

  // Prevenir scroll del fondo cuando el modal esté abierto
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  // Cerrar modal al hacer clic en el fondo
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  // Validar que check-out sea posterior a check-in
  const getMinCheckOutDate = () => {
    if (bookingData.checkIn) {
      const checkInDate = new Date(bookingData.checkIn);
      checkInDate.setDate(checkInDate.getDate() + 1);
      return checkInDate.toISOString().split("T")[0];
    }
    return today;
  };

  // total de noches entre check-in y check-out
  const calculateNights = () => {
    if (bookingData.checkIn && bookingData.checkOut) {
      const checkInDate = new Date(bookingData.checkIn);
      const checkOutDate = new Date(bookingData.checkOut);
      const timeDiff = checkOutDate.getTime() - checkInDate.getTime();
      const nights = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
      return nights > 0 ? nights : 0;
    }
    return 0;
  };

  const nights = calculateNights();
  const totalPrice = nights * selectedRoom.price;

  return (
    <div
      className="fixed inset-0 bg-opacity-75 backdrop-blur-sm flex items-center justify-center p-4 z-50"
      onClick={handleBackdropClick}
    >
      <div className="bg-gray-800 rounded-lg w-full max-w-6xl max-h-[95vh] overflow-hidden relative">
        {/* Header del Modal */}
        <div className="flex justify-between items-center p-6 border-b border-gray-700">
          <h2 className="text-2xl font-bold text-amber-400">
            {selectedRoom.name}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition duration-200 p-1"
          >
            <X size={24} />
          </button>
        </div>

        <div className="overflow-y-auto max-h-[calc(95vh-120px)]">
          {/* Contenido Principal */}
          <div className="grid lg:grid-cols-2 gap-8 p-6">
            {/* Carrusel de Imágenes */}
            <div className="space-y-4">
              <div className="relative h-80 lg:h-96 overflow-hidden rounded-lg">
                <img
                  src={selectedRoom.images[currentImageIndex]}
                  alt={`${selectedRoom.name} - Imagen ${currentImageIndex + 1}`}
                  className="w-full h-full object-cover"
                />

                {/* Controles del Carrusel */}
                {selectedRoom.images.length > 1 && (
                  <>
                    <button
                      onClick={onPrevImage}
                      className="absolute left-3 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-60 text-white p-2 rounded-full hover:bg-opacity-80 transition duration-200"
                    >
                      <ChevronLeft size={20} />
                    </button>
                    <button
                      onClick={onNextImage}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-60 text-white p-2 rounded-full hover:bg-opacity-80 transition duration-200"
                    >
                      <ChevronRight size={20} />
                    </button>

                    {/* Indicadores */}
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                      {selectedRoom.images.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => onSetCurrentImage(index)}
                          className={`w-2.5 h-2.5 rounded-full transition duration-200 ${
                            index === currentImageIndex
                              ? "bg-amber-500"
                              : "bg-white bg-opacity-50"
                          }`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>

              {/* Miniaturas */}
              {selectedRoom.images.length > 1 && (
                <div className="grid grid-cols-5 gap-2">
                  {selectedRoom.images.slice(0, 5).map((image, index) => (
                    <button
                      key={index}
                      onClick={() => onSetCurrentImage(index)}
                      className={`h-16 rounded overflow-hidden border-2 transition duration-200 ${
                        index === currentImageIndex
                          ? "border-amber-500"
                          : "border-gray-600 hover:border-gray-500"
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
              )}
            </div>

            {/* Información de la Habitación */}
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-amber-400 mb-3">
                  {t("roomModal.descriptionTitle")}
                </h3>
                <p className="text-gray-300 text-base leading-relaxed">
                  {selectedRoom.fullDescription}
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-amber-400 mb-4">
                  {t("roomModal.amenitiesTitle")}
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {selectedRoom.amenities.map((amenity, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-3 text-gray-300"
                    >
                      <amenity.icon
                        size={18}
                        className="text-amber-500 flex-shrink-0"
                      />
                      <span className="text-base">{amenity.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between pt-4">
                <div>
                  <p className="text-3xl font-bold text-amber-500">
                    ${selectedRoom.price}
                  </p>
                  <p className="text-gray-400">{t("roomModal.pricePerNight")}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Sección de Reserva - Abajo */}
          <div className="bg-gray-700 mx-6 mb-6 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-amber-400 mb-6">
              {t("roomModal.bookRoomTitle")}
            </h3>
            <div className="space-y-6">
              {/* Fechas */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    {t("roomModal.checkIn")}
                  </label>
                  <input
                    type="date"
                    value={bookingData.checkIn}
                    min={today}
                    onChange={(e) =>
                      onBookingDataChange({ checkIn: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-gray-600 border border-gray-500 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    {t("roomModal.checkOut")}
                  </label>
                  <input
                    type="date"
                    value={bookingData.checkOut}
                    min={getMinCheckOutDate()}
                    onChange={(e) =>
                      onBookingDataChange({ checkOut: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-gray-600 border border-gray-500 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Huéspedes y Correo */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    {t("roomModal.guestsLabel")}
                  </label>
                  <select
                    value={bookingData.guests}
                    onChange={(e) =>
                      onBookingDataChange({ guests: parseInt(e.target.value) })
                    }
                    className="w-full px-4 py-3 bg-gray-600 border border-gray-500 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  >
                    {Array.from({ length: selectedRoom.capacity }, (_, i) => (
                      <option key={i + 1} value={i + 1}>
                        {i + 1} huésped{i > 0 ? "es" : ""}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    {t("roomModal.emailLabel")}	
                  </label>
                  <input
                    type="email"
                    value={bookingData.email || ""}
                    onChange={(e) =>
                      onBookingDataChange({ email: e.target.value })
                    }
                    placeholder="you@gmail.com"
                    className="w-full px-4 py-3 bg-gray-600 border border-gray-500 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Botón de Reserva */}
              <div className="flex items-center justify-between pt-6 border-t border-gray-600">
                <div>
                  <p className="text-sm text-gray-400 mb-1">
                    {nights}, {t("roomModal.nightsSingular")} {nights !== 1 ? "s" : ""} × $
                    {selectedRoom.price}
                  </p>
                  <p className="text-3xl font-bold text-amber-500">
                    ${totalPrice}
                  </p>
                </div>
                <button
                  onClick={onHandleBooking}
                  className="px-8 py-4 bg-amber-500 text-gray-900 font-semibold text-lg rounded-lg hover:bg-amber-600 transform hover:scale-105 transition duration-300 shadow-lg"
                >
                  {t("roomModal.confirmBooking")}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomModal;
