"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendContactAcknowledgementEmail = sendContactAcknowledgementEmail;
const sendEmail_1 = require("./sendEmail");
async function sendContactAcknowledgementEmail(customerEmail) {
    const subject = 'Gracias por contactarnos';
    const html = `
    <h1>Hemos recibido tu mensaje</h1>
    <p>Gracias por escribirnos. Uno de nuestros agentes revisará tu mensaje y se pondrá en contacto contigo lo antes posible.</p>
    <p>Atentamente,<br/>El equipo del Hotel</p>
  `;
    await (0, sendEmail_1.sendEmail)({ to: customerEmail, subject, html });
}
