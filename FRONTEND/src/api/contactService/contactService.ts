// src/api/contactService.ts
import axios from 'axios';
import apiClient from '../apiClient/apiClient'; // Usamos nuestra instancia configurada de Axios

// Interfaz para los datos del formulario (puedes moverla a un archivo types.ts si se usa en más sitios)
interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// Interfaz para la respuesta esperada del backend en caso de éxito
interface ContactSuccessResponse {
  message: string;
  // Podrías añadir más campos si tu backend los devuelve
}

// Interfaz para la respuesta de error esperada del backend
interface ApiErrorResponse {
  message: string;
  // Otros campos de error que tu backend pueda enviar
}

export const submitContactForm = async (formData: ContactFormData): Promise<ContactSuccessResponse> => {
  try {
    const response = await apiClient.post<ContactSuccessResponse>('/contact', formData);
    return response.data; // Axios envuelve la respuesta del backend en la propiedad 'data'
  } catch (error: any) {
    if (axios.isAxiosError(error) && error.response) {
      // El backend respondió con un código de error (4xx, 5xx)
      // Accedemos al mensaje de error que envía el backend (ej: { message: "..." })
      const apiError = error.response.data as ApiErrorResponse;
      throw new Error(apiError.message || 'Error al enviar el formulario. Inténtalo de nuevo.');
    } else {
      // Error de red o un error inesperado al configurar la petición
      console.error("Error in submitContactForm: ", error);
      throw new Error('Error de conexión o problema inesperado. Por favor, revisa tu conexión.');
    }
  }
};