import { sendEmail } from './sendEmail';

export async function sendBookingConfirmationEmail(
  customerEmail: string,
  bookingDetails: { roomName: string; startDate: Date; endDate: Date; customerName: string }
): Promise<void> {
  const subject = '✔ Habitación reservada con éxito';
  const html = `
    <h1>¡Gracias por tu reserva, ${bookingDetails.customerName}!</h1>
    <p>Tu reserva para la habitación <strong>${bookingDetails.roomName}</strong> ha sido confirmada.</p>
    <p><strong>Fecha de entrada:</strong> ${bookingDetails.startDate.toLocaleDateString()}</p>
    <p><strong>Fecha de salida:</strong> ${bookingDetails.endDate.toLocaleDateString()}</p>
    <p>¡Esperamos verte pronto!</p>
  `;
  await sendEmail({ to: customerEmail, subject, html });
}
