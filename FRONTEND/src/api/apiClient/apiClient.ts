// src/apiClient/apiClient.ts
import axios from 'axios';
import 'dotenv/config';

// Define la URL base de tu API. En una app real, esto vendría de una variable de entorno.
const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001/api';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Puedes añadir interceptores para manejar errores globalmente o tokens de autenticación aquí si es necesario.
// apiClient.interceptors.response.use(
//   response => response,
//   error => {
//     // Manejo global de errores
//     return Promise.reject(error);
//   }
// );

export default apiClient;