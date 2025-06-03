import axios from 'axios';

//  interfaz de los datos del formulario de contacto
interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// interfaz esperada como respuesta del backend
interface ApiResponse {
  mensaje: string;
}

// clase para encapsular la lógica del servicio de contacto
class ContactApiService {
  private baseURL = 'https://802b5w6g-3000.use2.devtunnels.ms/api';

  // Tiempo máximo de espera para una solicitud
  private timeout = 10000; 

    //Envía el formulario de contacto al backend
    //formData - Datos del formulario (nombre, email, asunto, mensaje)
    //una promesa con el mensaje de respuesta del backend

  async sendContactForm(formData: FormData): Promise<ApiResponse> {
    try {
      const response = await axios.post<ApiResponse>(
        `${this.baseURL}/contact`,
        formData,
        {
          headers: {
            'Content-Type': 'application/json', // Indicamos que enviamos JSON
          },
          timeout: this.timeout, // Tiempo máximo de espera
        }
      );

      // Mostrar consola la respuesta del backend 
      console.log('Backend response:', response.data);
      console.log('Status code:', response.status);

      // Devolvemos solo el contenido de la respuesta
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}

// Exportamos una instancia única del servicio (patrón singleton)
export const contactApiService = new ContactApiService();

// Exportamos también los tipos para que puedan ser reutilizados en otros archivos
export type { FormData, ApiResponse };
