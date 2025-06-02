import { sendEmail } from './sendEmail';

export async function sendContactAcknowledgementEmail(customerEmail: string): Promise<void> {
  const subject = 'Gracias por contactarnos';
  const html = `
    <h1>Hemos recibido tu mensaje</h1>
    <p>Gracias por escribirnos. Uno de nuestros agentes revisará tu mensaje y se pondrá en contacto contigo lo antes posible.</p>
    <p>Atentamente,<br/>El equipo del Hotel</p>
  `;
  await sendEmail({ to: customerEmail, subject, html });
}
