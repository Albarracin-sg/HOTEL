"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.contactController = void 0;
const index_1 = require("../services/mail/index");
const prismaclient_1 = require("../prismaclient");
exports.contactController = {
    handleContactForm: async (req, res) => {
        const { name, email, subject, message } = req.body;
        if (!name || !email || !subject || !message) {
            return res.status(400).json({
                mensaje: "Todos los campos son obligatorios: nombre, email, asunto, mensaje.",
            });
        }
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!regexEmail.test(email)) {
            return res.status(400).json({ mensaje: "Formato de email inválido." });
        }
        try {
            await prismaclient_1.prisma.contactMessage.create({
                data: {
                    name,
                    email,
                    subject,
                    message,
                },
            });
            const cantidadMensajes = await prismaclient_1.prisma.contactMessage.count();
            if (cantidadMensajes >= 50) {
                await prismaclient_1.prisma.contactMessage.deleteMany({});
            }
            await (0, index_1.sendContactAcknowledgementEmail)(email);
            await (0, index_1.sendAdminContactNotification)({
                name: name,
                email: email,
                subject: subject,
                message: message,
            });
            return res.status(200).json({
                mensaje: "Mensaje enviado con éxito. Gracias por escribirnos, estamos leyendo tu mensaje.",
            });
        }
        catch (error) {
            console.error("Error procesando el formulario de contacto:", error);
            if (error instanceof Error &&
                error.message.includes("ADMIN_EMAIL not configured")) {
                return res.status(200).json({
                    mensaje: "Mensaje recibido. Gracias por escribirnos. (Nota: Hubo un problema notificando al administrador).",
                    advertencia: "La notificación al administrador pudo fallar por problemas de configuración.",
                });
            }
            return res.status(500).json({
                mensaje: "Error interno del servidor al procesar el formulario de contacto.",
            });
        }
    },
};
