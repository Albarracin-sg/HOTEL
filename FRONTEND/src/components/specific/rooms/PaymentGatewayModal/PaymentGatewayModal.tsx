import React, { useState, useEffect } from 'react';
import { CreditCard, Lock, X, Shield, Star, CheckCircle } from 'lucide-react';

interface PaymentGatewayModalProps {
  onSuccess: () => void;
  onCancel: () => void;
  roomPrice: number;
}

const PaymentGatewayModal: React.FC<PaymentGatewayModalProps> = ({ onSuccess, onCancel, roomPrice }) => {
  const [cardNumber, setCardNumber] = useState('');
  const [cardHolder, setCardHolder] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [processing, setProcessing] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Animación de entrada
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => {
      onCancel();
    }, 300);
  };

  const handlePaymentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setProcessing(true);

    // Simula una llamada a API de pago
    setTimeout(() => {
      setProcessing(false);
      // Aquí se validaría la tarjeta y se procesaría el pago real
      if (cardNumber && cardHolder && expiryDate && cvv) {
        alert('Pago procesado con éxito. Redirigiendo...');
        onSuccess(); // Llama a la función para cerrar los modales y mostrar confirmación
      } else {
        alert('Error en el pago. Por favor, revisa los datos de la tarjeta.');
      }
    }, 2000);
  };

  const formatCardNumber = (value: string) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    const matches = v.match(/\d{4,16}/g);
    const match = matches && matches[0] || '';
    const parts = [];
    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }
    if (parts.length) {
      return parts.join(' ');
    } else {
      return v;
    }
  };

  const getCardType = (number: string) => {
    const cleaned = number.replace(/\s/g, '');
    if (cleaned.startsWith('4')) return 'Visa';
    if (cleaned.startsWith('5')) return 'Mastercard';
    if (cleaned.startsWith('3')) return 'American Express';
    return 'Tarjeta';
  };

  return (
    <div 
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      onClick={handleBackdropClick}
      style={{
        background: 'rgba(0, 0, 0, 0.8)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)'
      }}
    >
      <div 
        className={`relative w-full max-w-4xl transform transition-all duration-300 ${
          isVisible ? 'scale-100 translate-y-0' : 'scale-95 translate-y-8'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Efectos de fondo */}
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-orange-500/20 rounded-2xl blur-xl"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/95 to-black/95 rounded-2xl"></div>
        
        {/* Contenido del modal */}
        <div className="relative bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-xl rounded-2xl border border-gray-700/50 shadow-2xl overflow-hidden">
          {/* Header con gradiente */}
          <div className="relative bg-gradient-to-r from-yellow-400/10 to-orange-500/10 p-4 md:p-6">
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/5 to-orange-500/5"></div>
            <div className="relative flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center">
                  <CreditCard className="w-5 h-5 text-black" />
                </div>
                <div>
                  <h2 className="text-xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                    Pago Seguro
                  </h2>
                  <p className="text-xs text-gray-400">Experiencias Únicas</p>
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

          {/* Layout responsivo: horizontal en desktop, vertical en mobile */}
          <div className="flex flex-col lg:flex-row">
            {/* Precio destacado - En desktop a la izquierda, en mobile arriba */}
            <div className="lg:w-1/3 p-4 md:p-6 bg-gradient-to-br from-gray-800/50 to-gray-900/50 flex flex-col justify-center items-center text-center lg:border-r lg:border-gray-700/50">
              <div className="space-y-4">
                <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-yellow-400/10 to-orange-500/10 px-4 py-2 rounded-xl border border-yellow-400/20">
                  <Star className="w-4 h-4 text-yellow-400" />
                  <span className="text-sm text-gray-300">Total a pagar:</span>
                </div>
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                  ${roomPrice}
                </div>
                <div className="text-sm text-gray-400 max-w-xs">
                  Pago seguro y protegido con encriptación de nivel bancario
                </div>
              </div>
            </div>

            {/* Formulario - En desktop a la derecha, en mobile abajo */}
            <div className="lg:w-2/3 p-4 md:p-6">
              <div className="space-y-4 md:space-y-5">
                {/* Número de tarjeta */}
                <div className="space-y-2">
                  <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-300">
                    Número de Tarjeta
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="cardNumber"
                      value={cardNumber}
                      onChange={(e) => setCardNumber(formatCardNumber(e.target.value))}
                      placeholder="1234 5678 9012 3456"
                      maxLength={19}
                      className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400/50 focus:border-yellow-400/50 transition-all duration-200"
                      required
                    />
                    <div className="absolute right-3 top-3 text-xs text-gray-400 font-medium">
                      {cardNumber && getCardType(cardNumber)}
                    </div>
                  </div>
                </div>

                {/* Nombre del titular */}
                <div className="space-y-2">
                  <label htmlFor="cardHolder" className="block text-sm font-medium text-gray-300">
                    Nombre del Titular
                  </label>
                  <input
                    type="text"
                    id="cardHolder"
                    value={cardHolder}
                    onChange={(e) => setCardHolder(e.target.value.toUpperCase())}
                    placeholder="NOMBRE COMPLETO"
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400/50 focus:border-yellow-400/50 transition-all duration-200"
                    required
                  />
                </div>

                {/* Fecha y CVV */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="expiryDate" className="block text-sm font-medium text-gray-300">
                      Vencimiento
                    </label>
                    <input
                      type="text"
                      id="expiryDate"
                      value={expiryDate}
                      onChange={(e) => {
                        let value = e.target.value.replace(/\D/g, '');
                        if (value.length > 2) {
                          value = value.substring(0, 2) + '/' + value.substring(2, 4);
                        }
                        setExpiryDate(value);
                      }}
                      placeholder="MM/AA"
                      maxLength={5}
                      className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400/50 focus:border-yellow-400/50 transition-all duration-200"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="cvv" className="block text-sm font-medium text-gray-300">
                      CVV
                    </label>
                    <input
                      type="text"
                      id="cvv"
                      value={cvv}
                      onChange={(e) => setCvv(e.target.value.replace(/\D/g, ''))}
                      placeholder="123"
                      maxLength={4}
                      className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400/50 focus:border-yellow-400/50 transition-all duration-200"
                      required
                    />
                  </div>
                </div>

                {/* Botón de pago */}
                <button
                  onClick={handlePaymentSubmit}
                  disabled={processing}
                  className="w-full mt-6 md:mt-8 px-6 py-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold rounded-xl hover:from-yellow-500 hover:to-orange-600 transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none shadow-lg shadow-yellow-400/25"
                >
                  {processing ? (
                    <div className="flex items-center justify-center space-x-2">
                      <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                      <span>Procesando...</span>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center space-x-2">
                      <Lock className="w-5 h-5" />
                      <span>Pagar ${roomPrice}</span>
                    </div>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Footer de seguridad */}
          <div className="px-4 md:px-6 pb-4 md:pb-6 bg-gradient-to-r from-gray-900/30 to-gray-800/30">
            <div className="flex flex-wrap items-center justify-center space-x-4 text-xs text-gray-400">
              <div className="flex items-center space-x-1">
                <Shield className="w-4 h-4 text-green-400" />
                <span>SSL Seguro</span>
              </div>
              <div className="w-1 h-1 bg-gray-600 rounded-full hidden sm:block"></div>
              <div className="flex items-center space-x-1">
                <CheckCircle className="w-4 h-4 text-blue-400" />
                <span>Verificado</span>
              </div>
              <div className="w-1 h-1 bg-gray-600 rounded-full hidden sm:block"></div>
              <span>256-bit Encryption</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentGatewayModal;