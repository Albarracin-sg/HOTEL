import React, { useState } from 'react';
import { Send, User, Mail, MessageSquare, FileText } from 'lucide-react';
import { useTranslation } from 'react-i18next'; // Import useTranslation

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const { t } = useTranslation(); // Initialize the translation hook

  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    console.log('Form submitted:', formData);
    // Use the translated success message
    alert(t('contactForm.successMessage')); 
    
    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
  };

  return (
    <div className="bg-zinc-900/50 backdrop-blur-sm p-4 sm:p-6 rounded">
      {/* Header del formulario */}
      <div className="mb-6">
        <div className="h-1 w-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded mx-auto"></div>
      </div>
      
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
              placeholder={t('contactForm.namePlaceholder')} // Localized
              className="w-full pl-12 pr-4 py-3 bg-zinc-800 text-white border border-zinc-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-zinc-600 text-sm"
              required
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
              placeholder={t('contactForm.emailPlaceholder')} // Localized
              className="w-full pl-12 pr-4 py-3 bg-zinc-800 text-white border border-zinc-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-zinc-600 text-sm"
              required
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
            placeholder={t('contactForm.subjectPlaceholder')} // Localized
            className="w-full pl-12 pr-4 py-3 bg-zinc-800 text-white border border-zinc-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-zinc-600 text-sm"
            required
          />
        </div>
        
        {/* Campo Mensaje */}
        <div className="relative">
          <MessageSquare className="absolute left-3 top-4 text-gray-400" size={18} />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder={t('contactForm.messagePlaceholder')} // Localized
            rows={5}
            className="w-full pl-12 pr-4 py-3 bg-zinc-800 text-white border border-zinc-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-zinc-600 resize-none text-sm"
            required
          />
        </div>
        
        {/* Botón de envío */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-3 px-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:from-gray-600 disabled:to-gray-700 text-white font-semibold rounded-lg flex items-center justify-center transition-all duration-300 transform hover:scale-105 hover:shadow-lg disabled:transform-none disabled:cursor-not-allowed text-sm"
        >
          {isSubmitting ? (
            <>
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
              <span>{t('contactForm.submittingButton')}</span> {/* Localized */}
            </>
          ) : (
            <>
              <span>{t('contactForm.submitButton')}</span> {/* Localized */}
              <Send className="ml-2" size={18} />
            </>
          )}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;