"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendBookingConfirmationEmail = sendBookingConfirmationEmail;
const sendEmail_1 = require("./sendEmail");
async function sendBookingConfirmationEmail(customerEmail, bookingDetails) {
    const subject = '✔ Habitación reservada con éxito';
    const html = `
    <h1>¡Gracias por tu reserva, ${bookingDetails.customerName}!</h1>
    <p>Tu reserva para la habitación <strong>${bookingDetails.roomName}</strong> ha sido confirmada.</p>
    <p><strong>Fecha de entrada:</strong> ${bookingDetails.startDate.toLocaleDateString()}</p>
    <p><strong>Fecha de salida:</strong> ${bookingDetails.endDate.toLocaleDateString()}</p>
    <p>¡Esperamos verte pronto!</p>
  `;
    await (0, sendEmail_1.sendEmail)({ to: customerEmail, subject, html });
}
