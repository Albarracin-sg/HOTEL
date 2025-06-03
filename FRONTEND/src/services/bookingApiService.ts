import axios from 'axios';

// Interfaz para la información de reserva que enviaremos
interface BookingInfo {
  roomId: number;
  customerName: string;
  customerEmail: string;
  startDate: string;
  endDate: string;
}

// Interfaz para la información de pago que enviaremos
interface PaymentInfo {
  paymentMethod: string;
  transactionId: string;
}

// Interfaz para los datos que enviaremos al backend
interface BookingRequest {
  bookingInfo: BookingInfo;
  paymentInfo: PaymentInfo;
}

// Interfaz para la respuesta del backend
interface BookingResponse {
  message: string;
  booking: {
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
}

// Clase para encapsular la lógica del servicio de reservas
class BookingApiService {
  private baseURL = 'https://802b5w6g-3000.use2.devtunnels.ms/api';
  // Tiempo máximo de espera para una solicitud
  private timeout = 10000;

  // Envía la reserva con información de pago al backend
  // bookingData - Datos de la reserva y pago
  // Retorna una promesa con la respuesta de la reserva del backend
  async createBooking(bookingData: BookingRequest): Promise<BookingResponse> {
    try {
      const response = await axios.post<BookingResponse>(
        `${this.baseURL}/bookings`, // Ajusta esta ruta según tu backend
        bookingData,
        {
          headers: {
            'Content-Type': 'application/json', // Indicamos que enviamos JSON
          },
          timeout: this.timeout, // Tiempo máximo de espera
        }
      );
      
      // Mostrar en consola la respuesta del backend
      console.log('Booking backend response:', response.data);
      console.log('Status code:', response.status);
      
      // Devolvemos solo el contenido de la respuesta
      return response.data;
    } catch (error) {
      console.error('Error creating booking:', error);
      throw error;
    }
  }
}

// Exportamos una instancia única del servicio (patrón singleton)
export const bookingApiService = new BookingApiService();

// Exportamos también los tipos para que puedan ser reutilizados en otros archivos
export type { BookingInfo, PaymentInfo, BookingRequest, BookingResponse };