"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendAdminContactNotification = sendAdminContactNotification;
const sendEmail_1 = require("./sendEmail");
async function sendAdminContactNotification(contactData) {
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
    await (0, sendEmail_1.sendEmail)({ to: process.env.ADMIN_EMAIL, subject, html });
}
