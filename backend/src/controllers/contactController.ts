// src/controllers/contactController.ts
import { Request, Response } from 'express';
import { emailService } from '../services/emailService';

interface ContactFormInput {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const contactController = {
  handleContactForm: async (req: Request, res: Response) => {
    const { name, email, subject, message }: ContactFormInput = req.body;

    if (!name || !email || !subject || !message) {
      return res.status(400).json({ message: 'All fields are required: name, email, subject, message.' });
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return res.status(400).json({ message: 'Invalid email format.' });
    }

    try {
      // Send acknowledgement email to customer
      await emailService.sendContactAcknowledgementEmail(email);

      // Send notification email to admin
      await emailService.sendAdminContactNotification({ name, email, subject, message });

      return res.status(200).json({
        message: 'Mensaje enviado con éxito. Gracias por escribirnos, estamos leyendo tu mensaje.',
      });
    } catch (error) {
      console.error('Error handling contact form:', error);
      // Check if error is related to ADMIN_EMAIL not being set
      if (error instanceof Error && error.message.includes("ADMIN_EMAIL not configured")) {
          // Still send 200 to user if acknowledgment email was potentially sent or if admin email is the issue
          return res.status(200).json({ 
            message: 'Mensaje recibido. Gracias por escribirnos. (Nota: Hubo un problema notificando al administrador).',
            warning: 'Admin notification may have failed due to configuration issues.'
          });
      }
      return res.status(500).json({ message: 'Error interno del servidor al procesar el formulario de contacto.' });
    }
  },
};