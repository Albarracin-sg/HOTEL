"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendBookingConfirmationEmail = sendBookingConfirmationEmail;
const sendEmail_1 = require("./sendEmail");
async function sendBookingConfirmationEmail(customerEmail, bookingDetails) {
    const subject = "✅ Reserva confirmada - Aranya";
    const formatDate = (date) => {
        return date.toLocaleDateString("es-ES", {
            weekday: "long",
            day: "numeric",
            month: "long",
            year: "numeric",
        });
    };
    const text = `
ARANYA - CONFIRMACIÓN DE RESERVA

Hola ${bookingDetails.customerName},

Tu reserva ha sido confirmada ✅

Detalles:
• Habitación: ${bookingDetails.roomName}
• Fecha de entrada: ${formatDate(bookingDetails.startDate)}
• Fecha de salida: ${formatDate(bookingDetails.endDate)}

¡Te esperamos!

El equipo de Aranya
reservas@aranya.com
  `;
    const html = `
    <!DOCTYPE html>
      <html lang="es">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Reserva confirmada - Aranya</title>
        <style>
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          
          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            line-height: 1.6;
            color: #2d3748;
            background-color: #f7fafc;
            padding: 40px 20px;
          }
          
          .container {
            max-width: 500px;
            margin: 0 auto;
            background: #ffffff;
            border: 1px solid #e2e8f0;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
          }
          
          .header {
            background: #ffffff;
            padding: 40px 30px 30px 30px;
            text-align: center;
            border-bottom: 1px solid #f7fafc;
          }
          
          .logo {
            color: #2d3748;
            font-size: 24px;
            font-weight: 300;
            letter-spacing: 8px;
            margin-bottom: 30px;
          }
          
          .status {
            display: inline-flex;
            align-items: center;
            background: #f0fff4;
            color: #22543d;
            padding: 8px 16px;
            border-radius: 20px;
            font-size: 14px;
            font-weight: 500;
            border: 1px solid #c6f6d5;
          }
          
          .check-icon {
            margin-right: 6px;
            font-size: 16px;
          }
          
          .content {
            padding: 30px;
          }
          
          .greeting {
            font-size: 18px;
            color: #2d3748;
            margin-bottom: 20px;
            font-weight: 400;
          }
          
          .details {
            background: #fafafa;
            border-radius: 6px;
            padding: 25px;
            margin: 25px 0;
            border-left: 3px solid #2d3748;
          }
          
          .detail-row {
            margin-bottom: 15px;
            padding-bottom: 15px;
            border-bottom: 1px solid #e2e8f0;
          }
          
          .detail-row:last-child {
            border-bottom: none;
            margin-bottom: 0;
            padding-bottom: 0;
          }
          
          .detail-label {
            color: #718096;
            font-size: 14px;
            font-weight: 500;
            display: block;
            margin-bottom: 4px;
            line-height: 1.4;
          }
          
          .detail-value {
            color: #2d3748;
            font-weight: 600;
            font-size: 14px;
            display: block;
            line-height: 1.4;
            word-wrap: break-word;
            overflow-wrap: break-word;
          }
          
          .room-name {
            font-size: 16px !important;
          }
          
          .message {
            color: #4a5568;
            font-size: 15px;
            text-align: center;
            margin: 30px 0;
            font-weight: 400;
            line-height: 1.5;
          }
          
          .footer {
            background: #fafafa;
            padding: 25px 20px;
            text-align: center;
            border-top: 1px solid #e2e8f0;
          }
          
          .footer-text {
            color: #718096;
            font-size: 13px;
            margin-bottom: 8px;
            line-height: 1.4;
          }
          
          .contact {
            color: #4a5568;
            font-size: 13px;
            font-weight: 500;
            line-height: 1.4;
          }
          
          /* Responsive design mejorado */
          @media (max-width: 600px) {
            body { 
              padding: 20px 10px; 
            }
            
            .container { 
              border-radius: 6px; 
              margin: 0 auto;
            }
            
            .header, .content { 
              padding: 25px 20px; 
            }
            
            .logo { 
              font-size: 20px; 
              letter-spacing: 6px; 
            }
            
            .greeting { 
              font-size: 16px; 
            }
            
            .details {
              padding: 20px;
              margin: 20px 0;
            }
            
            .detail-row {
              margin-bottom: 12px;
              padding-bottom: 12px;
            }
            
            .detail-label {
              font-size: 13px;
            }
            
            .detail-value {
              font-size: 13px;
            }
            
            .room-name {
              font-size: 15px !important;
            }
            
            .message {
              font-size: 14px;
              margin: 25px 0;
            }
          }
          
          /* Soporte para clientes de email */
          @media screen and (max-width: 480px) {
            .container {
              width: 100% !important;
              max-width: 100% !important;
            }
            
            .header, .content, .footer {
              padding-left: 15px !important;
              padding-right: 15px !important;
            }
            
            .details {
              padding: 15px !important;
            }
          }
        </style>
      </head>
      <body>
        <div class="container">
          <!-- Header -->
          <div class="header">
            <div class="logo">ARANYA</div>
            <div class="status">
              <span class="check-icon">✅</span>
              Reserva confirmada
            </div>
          </div>
          
          <!-- Content -->
          <div class="content">
            <div class="greeting">
              Hola  ${bookingDetails.customerName}
            </div>
            
            <!-- Booking Details -->
            <div class="details">
              <div class="detail-row">
                <span class="detail-label">Habitación  </span>
                <span class="detail-value room-name">${bookingDetails.roomName}</span>
              </div>
              <div class="detail-row">
                <span class="detail-label">Fecha de entrada</span>
                <span class="detail-value">${formatDate(bookingDetails.startDate)}</span>
              </div>
              <div class="detail-row">
                <span class="detail-label">Fecha de salida</span>
                <span class="detail-value">${formatDate(bookingDetails.endDate)}</span>
              </div>
            </div>
            
            <div class="message">
              Te esperamos pronto
            </div>
          </div>
          
          <!-- Footer -->
          <div class="footer">
            <div class="footer-text">El equipo de Aranya</div>
            <div class="contact">reservas@aranya.com</div>
          </div>
        </div>
      </body>
      </html>
  `;
    await (0, sendEmail_1.sendEmail)({
        to: customerEmail,
        subject,
        html,
        text,
    });
}
