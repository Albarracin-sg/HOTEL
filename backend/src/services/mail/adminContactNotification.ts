import { sendEmail } from './sendEmail';

export async function sendAdminContactNotification(contactData: {
  name: string;
  email: string;
  subject: string;
  message: string;
}): Promise<void> {
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
}
