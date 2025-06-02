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
        console.log(`Email sent to ${mailOptions.to}`);
    }
    catch (error) {
        console.error(`Error sending email to ${mailOptions.to}:`, error);
        throw new Error(`Failed to send email: ${error.message}`);
    }
}
