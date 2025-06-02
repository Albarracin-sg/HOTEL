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

  const subject = `🔔 Nuevo Contacto: ${contactData.subject}`;
  
  const text = `
ARANYA - NOTIFICACIÓN ADMIN

NUEVO MENSAJE DE CONTACTO

Detalles del contacto:
• Nombre: ${contactData.name}
• Email: ${contactData.email}
• Asunto: ${contactData.subject}
• Fecha: ${new Date().toLocaleString('es-ES')}

Mensaje:
${contactData.message}

---
Para responder, envía un email directamente a: ${contactData.email}
  `;

  const html = `
    <!DOCTYPE html>
      <html lang="es">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Nuevo Mensaje de Contacto - Aranya</title>
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
            background: #fef3e2;
            color: #c05621;
            padding: 8px 16px;
            border-radius: 20px;
            font-size: 14px;
            font-weight: 500;
            border: 1px solid #fed7aa;
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
          
          .timestamp {
            color: #718096;
            font-size: 13px;
            margin-bottom: 25px;
            font-weight: 400;
          }
          
          .contact-info {
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
            word-wrap: break-word;
            overflow-wrap: break-word;
          }
          
          .message-section {
            background: #fafafa;
            border-radius: 6px;
            padding: 25px;
            margin: 25px 0;
            border-left: 3px solid #c05621;
          }
          
          .message-label {
            color: #718096;
            font-size: 14px;
            font-weight: 500;
            margin-bottom: 10px;
            line-height: 1.4;
          }
          
          .message-content {
            color: #2d3748;
            font-size: 14px;
            line-height: 1.5;
            white-space: pre-wrap;
            word-wrap: break-word;
            background: #ffffff;
            padding: 15px;
            border-radius: 4px;
            border: 1px solid #e2e8f0;
          }
          
          .action-section {
            background: #f0f9ff;
            color: #1e40af;
            padding: 15px;
            border-radius: 6px;
            text-align: center;
            margin: 25px 0;
            border: 1px solid #dbeafe;
          }
          
          .action-title {
            font-weight: 600;
            font-size: 14px;
            margin-bottom: 8px;
          }
          
          .reply-button {
            display: inline-block;
            background: #2d3748;
            color: white;
            padding: 8px 16px;
            border-radius: 4px;
            text-decoration: none;
            font-weight: 500;
            font-size: 13px;
            margin-top: 5px;
          }
          
          .reply-button:hover {
            background: #4a5568;
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
          
          .footer-note {
            color: #718096;
            font-size: 12px;
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
            
            .contact-info, .message-section {
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
            
            .message-content {
              font-size: 13px;
              padding: 12px;
            }
            
            .action-section {
              padding: 12px;
              margin: 20px 0;
            }
            
            .action-title {
              font-size: 13px;
            }
            
            .reply-button {
              font-size: 12px;
              padding: 6px 12px;
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
            
            .contact-info, .message-section {
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
              <span class="status-icon">🔔</span>
              Nuevo mensaje
            </div>
          </div>
          
          <!-- Content -->
          <div class="content">
            <div class="title">
              Mensaje de contacto recibido
            </div>
            
            <div class="timestamp">
               📅 ${new Date().toLocaleString('es-ES', {
              weekday: 'long',
              year: 'numeric',
              month: 'long',
              day: 'numeric',
              hour: '2-digit',
              minute: '2-digit'
            })}
            </div>
            
            <!-- Contact Information -->
            <div class="contact-info">
              <div class="info-row">
                <span class="info-label">Nombre del cliente </span>
                <span class="info-value">${contactData.name}</span>
              </div>
              <div class="info-row">
                <span class="info-label">Email de contacto </span>
                <span class="info-value">${contactData.email}</span>
              </div>
              <div class="info-row">
                <span class="info-label">Asunto</span>
                <span class="info-value">${contactData.subject}</span>
              </div>
              <div class="info-row">
                <span class="info-label">Estado</span>
                <span class="info-value">Pendiente de respuesta</span>
              </div>
            </div>
            
            <!-- Message Content -->
            <div class="message-section">
              <div class="message-label">Mensaje del cliente:</div>
              <div class="message-content">${contactData.message.replace(/\n/g, '\n')}</div>
            </div>
            
            <!-- Action Section -->
            <div class="action-section">
              <div class="action-title">⚡ Acción requerida</div>
              <a href="mailto:${contactData.email}?subject=Re: ${encodeURIComponent(contactData.subject)}" class="reply-button">
              📧 Responder por Email
            </a>
            </div>
          </div>
          
          <!-- Footer -->
          <div class="footer">
            <div class="footer-text">Panel de Administración - Aranya</div>
            <div class="footer-note">
              Este es un mensaje automático del sistema de contacto
            </div>
          </div>
        </div>
      </body>
      </html>
  `;

  await sendEmail({ 
    to: process.env.ADMIN_EMAIL, 
    subject, 
    html,
    text
  });
}