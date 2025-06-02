import { sendEmail } from "./sendEmail";

export async function sendContactAcknowledgementEmail(
  customerEmail: string
): Promise<void> {
  const subject = "Gracias por contactarnos - Aranya";


  const html = `
    <!DOCTYPE html>
      <html lang="es">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Gracias por contactarnos - Aranya</title>
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
            background: #f0f9ff;
            color: #1e40af;
            padding: 8px 16px;
            border-radius: 20px;
            font-size: 14px;
            font-weight: 500;
            border: 1px solid #dbeafe;
          }
          
          .status-icon {
            margin-right: 6px;
            font-size: 16px;
          }
          
          .content {
            padding: 30px;
          }
          
          .title {
            font-size: 18px;
            color: #2d3748;
            margin-bottom: 20px;
            font-weight: 400;
          }
          
          .message {
            color: #4a5568;
            font-size: 15px;
            margin-bottom: 25px;
            font-weight: 400;
            line-height: 1.5;
          }
          
          .info-section {
            background: #fafafa;
            border-radius: 6px;
            padding: 25px;
            margin: 25px 0;
            border-left: 3px solid #2d3748;
          }
          
          .info-row {
            margin-bottom: 15px;
            padding-bottom: 15px;
            border-bottom: 1px solid #e2e8f0;
          }
          
          .info-row:last-child {
            border-bottom: none;
            margin-bottom: 0;
            padding-bottom: 0;
          }
          
          .info-label {
            color: #718096;
            font-size: 14px;
            font-weight: 500;
            display: block;
            margin-bottom: 4px;
            line-height: 1.4;
          }
          
          .info-value {
            color: #2d3748;
            font-weight: 600;
            font-size: 14px;
            display: block;
            line-height: 1.4;
          }
          
          .response-time {
            background: #f0f9ff;
            color: #1e40af;
            padding: 15px;
            border-radius: 6px;
            text-align: center;
            margin: 25px 0;
            border: 1px solid #dbeafe;
          }
          
          .response-time-main {
            font-weight: 600;
            font-size: 15px;
            margin-bottom: 4px;
          }
          
          .response-time-note {
            font-size: 13px;
            opacity: 0.8;
          }
          
          .closing-message {
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
          
          .address {
            color: #718096;
            font-size: 12px;
            margin-top: 8px;
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
            
            .title { 
              font-size: 16px; 
            }
            
            .info-section {
              padding: 20px;
              margin: 20px 0;
            }
            
            .info-row {
              margin-bottom: 12px;
              padding-bottom: 12px;
            }
            
            .info-label {
              font-size: 13px;
            }
            
            .info-value {
              font-size: 13px;
            }
            
            .message, .closing-message {
              font-size: 14px;
            }
            
            .response-time {
              padding: 12px;
              margin: 20px 0;
            }
            
            .response-time-main {
              font-size: 14px;
            }
            
            .response-time-note {
              font-size: 12px;
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
            
            .info-section {
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
              <span class="status-icon">📩</span>
              Mensaje recibido
            </div>
          </div>
          
          <!-- Content -->
          <div class="content">
            <div class="title">
              ¡Gracias por contactarnos!
            </div>
            
            <div class="message">
              Hemos recibido tu mensaje y uno de nuestros agentes se pondrá en contacto contigo pronto.
            </div>
            
            <!-- Response Time -->
            <div class="response-time">
              <div class="response-time-main">⏱️ Tiempo de respuesta: 24 horas</div>
              <div class="response-time-note">Para consultas urgentes, contáctanos por WhatsApp</div>
            </div>
            
            <!-- Contact Info -->
            <div class="info-section">
              <div class="info-row">
                <span class="info-label">Horarios de atención</span>
                <span class="info-value">Lunes - Viernes: 9:00 AM - 6:00 PM</span>
              </div>
              <div class="info-row">
                <span class="info-label">Sábados</span>
                <span class="info-value">10:00 AM - 2:00 PM</span>
              </div>
              <div class="info-row">
                <span class="info-label">Domingos</span>
                <span class="info-value">Cerrado</span>
              </div>
            </div>
            
            <div class="closing-message">
              Te contactaremos pronto
            </div>
          </div>
          
          <!-- Footer -->
          <div class="footer">
            <div class="footer-text">El equipo de Aranya</div>
            <div class="contact">reservas@aranya.com</div>
            <div class="address">
              Aranya Resort & Spa<br>
              2560 San Ridge Drive, CA 94043
            </div>
          </div>
        </div>
      </body>
      </html>
  `;

  await sendEmail({
    to: customerEmail,
    subject,
    html,
    text: "Gracias por contactarnos. Hemos recibido tu mensaje y uno de nuestros agentes se pondrá en contacto contigo dentro de las próximas 24 horas.",
  });
}
