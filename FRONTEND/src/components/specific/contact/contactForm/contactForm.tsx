import React, { useState } from 'react';
import { Send, User, Mail, MessageSquare, FileText } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import axios from 'axios';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface ApiResponse {
  mensaje: string;
}

const ContactForm: React.FC = () => {
  const { t } = useTranslation();

  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Reset status when user starts typing again
    if (submitStatus !== 'idle') {
      setSubmitStatus('idle');
      setErrorMessage('');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      const response = await axios.post<ApiResponse>('http://localhost:3000/api/contact', formData, {
        headers: {
          'Content-Type': 'application/json',
        },
        timeout: 10000, // 10 seconds timeout
      });

      // Debug: ver qué responde el backend
      console.log('Backend response:', response.data);
      console.log('Status code:', response.status);

      // Si la respuesta tiene status 200/201, consideramos que fue exitoso
      if (response.status >= 200 && response.status < 300) {
        setSubmitStatus('success');
        // Mostrar el mensaje del backend o mensaje por defecto
        alert(response.data.mensaje || t('contactForm.successMessage'));
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setSubmitStatus('error');
        setErrorMessage(response.data?.mensaje || 'Error desconocido');
      }
    } catch (error) {
      setSubmitStatus('error');
      
      if (axios.isAxiosError(error)) {
        if (error.response) {
          // Server responded with error status
          const errorMsg = error.response.data?.mensaje || `Error ${error.response.status}: ${error.response.statusText}`;
          setErrorMessage(errorMsg);
        } else if (error.request) {
          // Request was made but no response received
          setErrorMessage('No se pudo conectar con el servidor. Verifica tu conexión.');
        } else {
          // Something else happened
          setErrorMessage('Error al enviar el formulario. Inténtalo de nuevo.');
        }
      } else {
        setErrorMessage('Error inesperado. Inténtalo de nuevo.');
      }
      
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-zinc-900/50 backdrop-blur-sm p-4 sm:p-6 rounded">
      {/* Header del formulario */}
      <div className="mb-6">
        <div className="h-1 w-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded mx-auto"></div>
      </div>
      
      {/* Status Messages */}
      {submitStatus === 'error' && (
        <div className="mb-4 p-3 bg-red-900/50 border border-red-700 rounded-lg text-red-200 text-sm">
          <strong>Error:</strong> {errorMessage}
        </div>
      )}
      
      {submitStatus === 'success' && (
        <div className="mb-4 p-3 bg-green-900/50 border border-green-700 rounded-lg text-green-200 text-sm">
          <strong>¡Éxito!</strong> Tu mensaje ha sido enviado correctamente.
        </div>
      )}
      
      {/* Formulario */}
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Nombre y Email en fila en pantallas medianas y grandes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Campo Nombre */}
          <div className="relative">
            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder={t('contactForm.namePlaceholder')}
              className="w-full pl-12 pr-4 py-3 bg-zinc-800 text-white border border-zinc-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-zinc-600 text-sm"
              required
              disabled={isSubmitting}
            />
          </div>
          
          {/* Campo Email */}
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder={t('contactForm.emailPlaceholder')}
              className="w-full pl-12 pr-4 py-3 bg-zinc-800 text-white border border-zinc-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-zinc-600 text-sm"
              required
              disabled={isSubmitting}
            />
          </div>
        </div>
        
        {/* Campo Asunto */}
        <div className="relative">
          <FileText className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder={t('contactForm.subjectPlaceholder')}
            className="w-full pl-12 pr-4 py-3 bg-zinc-800 text-white border border-zinc-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-zinc-600 text-sm"
            required
            disabled={isSubmitting}
          />
        </div>
        
        {/* Campo Mensaje */}
        <div className="relative">
          <MessageSquare className="absolute left-3 top-4 text-gray-400" size={18} />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder={t('contactForm.messagePlaceholder')}
            rows={5}
            className="w-full pl-12 pr-4 py-3 bg-zinc-800 text-white border border-zinc-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-zinc-600 resize-none text-sm"
            required
            disabled={isSubmitting}
          />
        </div>
        
        {/* Botón de envío */}
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full py-3 px-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:from-gray-600 disabled:to-gray-700 text-white font-semibold rounded-lg flex items-center justify-center transition-all duration-300 transform hover:scale-105 hover:shadow-lg disabled:transform-none disabled:cursor-not-allowed text-sm ${
            submitStatus === 'success' ? 'from-green-600 to-green-700' : ''
          }`}
        >
          {isSubmitting ? (
            <>
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
              <span>{t('contactForm.submittingButton')}</span>
            </>
          ) : (
            <>
              <span>{t('contactForm.submitButton')}</span>
              <Send className="ml-2" size={18} />
            </>
          )}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;