"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.emailService = void 0;
// src/services/emailService.ts
const nodemailer_1 = __importDefault(require("nodemailer"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const transporter = nodemailer_1.default.createTransport({
    host: process.env.EMAIL_HOST,
    port: Number(process.env.EMAIL_PORT) || 587,
    secure: (process.env.EMAIL_PORT === '465'), // true for 465, false for other ports
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});
transporter.verify((error, success) => {
    if (error) {
        console.error('Error configuring Nodemailer transporter:', error);
    }
    else {
        console.log('Nodemailer transporter configured successfully. Server is ready to take messages.');
    }
});
async function sendEmail(mailOptions) {
    try {
        const optionsWithDefaults = {
            from: `"Hotel Admin" <${process.env.EMAIL_USER}>`,
            ...mailOptions,
        };
        await transporter.sendMail(optionsWithDefaults);
        console.log(`Email sent to ${mailOptions.to}`);
    }
    catch (error) {
        console.error(`Error sending email to ${mailOptions.to}:`, error);
        throw new Error(`Failed to send email: ${error.message}`);
    }
}
exports.emailService = {
    sendBookingConfirmationEmail: async (customerEmail, bookingDetails) => {
        const subject = '✔ Habitación reservada con éxito';
        const html = `
      <h1>¡Gracias por tu reserva, ${bookingDetails.customerName}!</h1>
      <p>Tu reserva para la habitación <strong>${bookingDetails.roomName}</strong> ha sido confirmada.</p>
      <p><strong>Fecha de entrada:</strong> ${bookingDetails.startDate.toLocaleDateString()}</p>
      <p><strong>Fecha de salida:</strong> ${bookingDetails.endDate.toLocaleDateString()}</p>
      <p>¡Esperamos verte pronto!</p>
    `;
        await sendEmail({ to: customerEmail, subject, html });
    },
    sendContactAcknowledgementEmail: async (customerEmail) => {
        const subject = 'Gracias por contactarnos';
        const html = `
      <h1>Hemos recibido tu mensaje</h1>
      <p>Gracias por escribirnos. Uno de nuestros agentes revisará tu mensaje y se pondrá en contacto contigo lo antes posible.</p>
      <p>Atentamente,<br/>El equipo del Hotel</p>
    `;
        await sendEmail({ to: customerEmail, subject, html });
    },
    sendAdminContactNotification: async (contactData) => {
        if (!process.env.ADMIN_EMAIL) {
            console.error('ADMIN_EMAIL not configured in .env. Cannot send admin notification.');
            return;
        }
        const subject = `Nuevo Mensaje de Contacto: ${contactData.subject}`;
        const html = `
      <h1>Nuevo mensaje desde el formulario de contacto:</h1>
      <p><strong>Nombre:</strong> ${contactData.name}</p>
      <p><strong>Email:</strong> ${contactData.email}</p>
      <p><strong>Asunto:</strong> ${contactData.subject}</p>
      <p><strong>Mensaje:</strong></p>
      <p>${contactData.message.replace(/\n/g, '<br>')}</p>
    `;
        await sendEmail({ to: process.env.ADMIN_EMAIL, subject, html });
    },
};
