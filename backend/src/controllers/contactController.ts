import { Request, Response } from 'express';
import { emailService } from '../services/emailService';
import { prisma } from '../prismaclient';



interface DatosFormularioContacto {
  nombre: string;
  email: string;
  asunto: string;
  mensaje: string;
}

export const contactController  = {
  handleContactForm: async (req: Request, res: Response) => {
    const { nombre, email, asunto, mensaje }: DatosFormularioContacto = req.body;

    if (!nombre || !email || !asunto || !mensaje) {
      return res.status(400).json({ mensaje: 'Todos los campos son obligatorios: nombre, email, asunto, mensaje.' });
    }

    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regexEmail.test(email)) {
      return res.status(400).json({ mensaje: 'Formato de email inválido.' });
    }

    try {
      await prisma.contactMessage.create({
        data: {
          nombre,
          email,
          asunto,
          mensaje,
        },
      });

      const cantidadMensajes = await prisma.contactMessage.count();

      if (cantidadMensajes >= 50) {
        await prisma.contactMessage.deleteMany({});
      }

      await emailService.sendContactAcknowledgementEmail(email);

      await emailService.sendAdminContactNotification({
        name: nombre,
        email: email,
        subject: asunto,
        message: mensaje,
      });

      return res.status(200).json({
        mensaje: 'Mensaje enviado con éxito. Gracias por escribirnos, estamos leyendo tu mensaje.',
      });
    } catch (error) {
      console.error('Error procesando el formulario de contacto:', error);
      if (error instanceof Error && error.message.includes('ADMIN_EMAIL not configured')) {
        return res.status(200).json({
          mensaje: 'Mensaje recibido. Gracias por escribirnos. (Nota: Hubo un problema notificando al administrador).',
          advertencia: 'La notificación al administrador pudo fallar por problemas de configuración.',
        });
      }
      return res.status(500).json({ mensaje: 'Error interno del servidor al procesar el formulario de contacto.' });
    }
  },
};
