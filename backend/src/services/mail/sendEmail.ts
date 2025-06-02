import { transporter } from './transporter';

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
    console.log(`Email sent to ${mailOptions.to}`);
  } catch (error) {
    console.error(`Error sending email to ${mailOptions.to}:`, error);
    throw new Error(`Failed to send email: ${(error as Error).message}`);
  }
}
