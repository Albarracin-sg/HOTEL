import React, { useState, useEffect } from 'react';
import { CheckCircle, XCircle, Calendar, User, Mail, CreditCard, X } from 'lucide-react';

interface BookingConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
  bookingResponse?: {
    message: string;
    booking?: {
      id: number;
      roomId: number;
      customerName: string;
      customerEmail: string;
      startDate: string;
      endDate: string;
      totalPrice: number;
      createdAt: string;
      updatedAt: string;
    };
  };
  error?: string;
}

const BookingConfirmationModal: React.FC<BookingConfirmationModalProps> = ({
  isOpen,
  onClose,
  bookingResponse,
  error
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
    }
  }, [isOpen]);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => {
      onClose();
    }, 300);
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (!isOpen) return null;

  const isSuccess = !error && bookingResponse?.booking;

  return (
    <div
      className={`fixed inset-0 z-60 flex items-center justify-center p-4 transition-all duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      onClick={handleBackdropClick}
      style={{
        background: 'rgba(0, 0, 0, 0.9)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)'
      }}
    >
      <div
        className={`relative w-full max-w-md transform transition-all duration-300 ${
          isVisible ? 'scale-100 translate-y-0' : 'scale-95 translate-y-8'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Background effects */}
        <div className={`absolute inset-0 rounded-2xl blur-xl ${
          isSuccess ? 'bg-gradient-to-br from-green-400/20 to-emerald-500/20' : 
          'bg-gradient-to-br from-red-400/20 to-red-500/20'
        }`}></div>
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/95 to-black/95 rounded-2xl"></div>
        
        {/* Modal content */}
        <div className="relative bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-xl rounded-2xl border border-gray-700/50 shadow-2xl overflow-hidden">
          
          {/* Header */}
          <div className={`relative p-6 ${
            isSuccess ? 'bg-gradient-to-r from-green-400/10 to-emerald-500/10' : 
            'bg-gradient-to-r from-red-400/10 to-red-500/10'
          }`}>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                  isSuccess ? 'bg-gradient-to-r from-green-400 to-emerald-500' : 
                  'bg-gradient-to-r from-red-400 to-red-500'
                }`}>
                  {isSuccess ? (
                    <CheckCircle className="w-6 h-6 text-white" />
                  ) : (
                    <XCircle className="w-6 h-6 text-white" />
                  )}
                </div>
                <div>
                  <h2 className={`text-xl font-bold bg-gradient-to-r bg-clip-text text-transparent ${
                    isSuccess ? 'from-green-400 to-emerald-500' : 'from-red-400 to-red-500'
                  }`}>
                    {isSuccess ? '¡Reserva Confirmada!' : 'Error en la Reserva'}
                  </h2>
                  <p className="text-xs text-gray-400">
                    {isSuccess ? 'Tu habitación ha sido reservada' : 'No se pudo completar la reserva'}
                  </p>
                </div>
              </div>
              <button
                onClick={handleClose}
                className="p-2 rounded-xl bg-gray-700/50 hover:bg-gray-600/50 transition-colors duration-200 group"
              >
                <X className="w-5 h-5 text-gray-400 group-hover:text-white" />
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            {isSuccess && bookingResponse?.booking ? (
              // Success content
              <div className="space-y-6">   
                {/* Success message */}
                <div className="text-center">
                  <p className="text-gray-300 mb-4">
                    ¡Gracias por tu pago! Te esperamos del{' '}
                    <span className="font-semibold text-green-400">
                      {formatDate(bookingResponse.booking.startDate)}
                    </span>{' '}
                    al{' '}
                    <span className="font-semibold text-green-400">
                      {formatDate(bookingResponse.booking.endDate)}
                    </span>
                  </p>
                </div>

                {/* Booking details */}
                <div className="bg-gray-800/50 rounded-xl p-4 space-y-3">
                  <h3 className="font-semibold text-white mb-3">Detalles de la Reserva</h3>
                  
                  <div className="flex items-center space-x-3 text-sm">
                    <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center">
                      <Calendar className="w-4 h-4 text-blue-400" />
                    </div>
                    <div>
                      <p className="text-gray-400">ID de Reserva</p>
                      <p className="text-white font-medium">#{bookingResponse.booking.id}</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 text-sm">
                    <div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center">
                      <User className="w-4 h-4 text-purple-400" />
                    </div>
                    <div>
                      <p className="text-gray-400">Huésped</p>
                      <p className="text-white font-medium">{bookingResponse.booking.customerName}</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 text-sm">
                    <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center">
                      <Mail className="w-4 h-4 text-green-400" />
                    </div>
                    <div>
                      <p className="text-gray-400">Email</p>
                      <p className="text-white font-medium">{bookingResponse.booking.customerEmail}</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 text-sm">
                    <div className="w-8 h-8 bg-yellow-500/20 rounded-lg flex items-center justify-center">
                      <CreditCard className="w-4 h-4 text-yellow-400" />
                    </div>
                    <div>
                      <p className="text-gray-400">Total Pagado</p>
                      <p className="text-white font-medium">${bookingResponse.booking.totalPrice}</p>
                    </div>
                  </div>
                </div>

                {/* Additional info */}
                <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-4">
                  <p className="text-green-400 text-sm">
                    📧 Te hemos enviado un email de confirmación con todos los detalles de tu reserva.
                  </p>
                </div>
              </div>
            ) : (
              // Error content
              <div className="space-y-4">
                <div className="text-center">
                  <p className="text-gray-300 mb-4">
                    {error || 'Ha ocurrido un error inesperado'}
                  </p>
                </div>

                {/* Common error messages */}
                <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-4">
                  <div className="text-red-400 text-sm space-y-2">
                    {error?.includes('ocupada') || error?.includes('disponible') ? (
                      <>
                        <p className="font-semibold">❌ Fechas no disponibles</p>
                        <p>Las fechas seleccionadas ya están ocupadas. Por favor, elige otras fechas para tu reserva.</p>
                      </>
                    ) : error?.includes('conexión') || error?.includes('network') ? (
                      <>
                        <p className="font-semibold">🌐 Error de conexión</p>
                        <p>Verifica tu conexión a internet e inténtalo nuevamente.</p>
                      </>
                    ) : (
                      <>
                        <p className="font-semibold">⚠️ Error en el procesamiento</p>
                        <p>No se pudo completar tu reserva. Por favor, inténtalo nuevamente o contacta a nuestro equipo de soporte.</p>
                      </>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* Action button */}
            <button
              onClick={handleClose}
              className={`w-full mt-6 px-6 py-3 font-semibold rounded-xl transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] ${
                isSuccess 
                  ? 'bg-gradient-to-r from-green-400 to-emerald-500 text-white hover:from-green-500 hover:to-emerald-600' 
                  : 'bg-gradient-to-r from-red-400 to-red-500 text-white hover:from-red-500 hover:to-red-600'
              }`}
            >
              {isSuccess ? 'Perfecto, ¡Gracias!' : 'Entendido'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingConfirmationModal;