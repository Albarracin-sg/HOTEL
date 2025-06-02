"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendEmail = sendEmail;
const transporter_1 = require("./transporter");
async function sendEmail(mailOptions) {
    try {
        const optionsWithDefaults = {
            from: `"Hotel Admin" <${process.env.EMAIL_USER}>`,
            ...mailOptions,
        };
        await transporter_1.transporter.sendMail(optionsWithDefaults);
        console.log(`Correo enviado a: ${mailOptions.to}`);
    }
    catch (error) {
        console.error(`ERROR: no se pudo enviar el correo a ${mailOptions.to}:`, error);
        throw new Error(`No se pudo enviar el correo: ${error.message}`);
    }
}
