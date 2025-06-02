import { transporter } from "./transporter";

interface MailOptions {
  from?: string;
  to: string | string[];
  subject: string;
  text?: string;
  html: string;
}

export async function sendEmail(mailOptions: MailOptions): Promise<void> {
  try {
    const optionsWithDefaults = {
      from: `"Hotel Admin" <${process.env.EMAIL_USER}>`,
      ...mailOptions,
    };
    await transporter.sendMail(optionsWithDefaults);
    console.log(`Correo enviado a: ${mailOptions.to}`);
  } catch (error) {
    console.error(
      `ERROR: no se pudo enviar el correo a ${mailOptions.to}:`,
      error
    );
    throw new Error(`No se pudo enviar el correo: ${(error as Error).message}`);
  }
}
