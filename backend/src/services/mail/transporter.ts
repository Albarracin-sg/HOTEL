import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

export const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: Number(process.env.EMAIL_PORT) || 587,
  secure: process.env.EMAIL_PORT === "465",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

transporter.verify((error, success) => {
  if (error) {
    console.error(
      "\nError al configurar el transportador de Nodemailer:",
      error
    );
  } else {
    console.log(
      "\nTransportador de Nodemailer configurado correctamente. El servidor está listo para enviar mensajes."
    );
  }
});
