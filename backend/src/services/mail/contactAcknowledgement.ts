import { sendEmail } from './sendEmail';

export async function sendContactAcknowledgementEmail(customerEmail: string): Promise<void> {
  const subject = 'Gracias por contactarnos - Aranya';
  
  // Versión de texto plano como respaldo
  const text = `
ARANYA - Hotel de Lujo

Hemos recibido tu mensaje

Gracias por contactarnos y por tu interés en Aranya. Tu mensaje es muy importante para nosotros y queremos asegurarnos de brindarte la mejor atención posible.

Uno de nuestros especialistas en hospitalidad revisará tu consulta y se pondrá en contacto contigo dentro de las próximas 24 horas.

Mientras tanto, te invitamos a explorar nuestra galería y descubrir todo lo que nuestro paraíso natural tiene preparado para ti.

Con cariño y expectativa de recibirte pronto,
El equipo de Aranya
"Donde los sueños encuentran su hogar"

---
Aranya Resort
Sumérgete en una experiencia de lujo y tranquilidad
info@aranya.com | +1 (555) 123-4567
Bahía Esmeralda, Paraíso Natural
  `;

  const html = `
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Confirmación - Aranya</title>
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        body {
          font-family: Arial, sans-serif;
          line-height: 1.6;
          color: #333;
          background-color: #4a90a4;
          margin: 0;
          padding: 20px;
        }
        
        .email-container {
          max-width: 600px;
          margin: 0 auto;
          background: rgba(255, 255, 255, 0.95);
          border-radius: 15px;
          overflow: hidden;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
        }
        
        .header {
          background-color: #2d6b7a;
          padding: 40px 30px;
          text-align: center;
        }
        
        .header::before {
          display: none;
        }
        
        .logo {
          color: #ff6b35;
          font-size: 36px;
          font-weight: bold;
          margin-bottom: 10px;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
          position: relative;
          z-index: 1;
        }
        
        .logo::before {
          content: '📍';
          margin-right: 10px;
        }
        
        .tagline {
          color: #f0f8ff;
          font-size: 16px;
          font-style: italic;
          position: relative;
          z-index: 1;
        }
        
        .content {
          padding: 40px 30px;
          background: white;
        }
        
        .greeting {
          font-size: 28px;
          color: #2d6b7a;
          margin-bottom: 20px;
          text-align: center;
          font-weight: 300;
        }
        
        .message {
          font-size: 16px;
          color: #555;
          margin-bottom: 25px;
          line-height: 1.8;
        }
        
        .highlight-box {
          background: linear-gradient(135deg, #f0f8ff, #e6f3ff);
          border-left: 4px solid #ff6b35;
          padding: 20px;
          margin: 25px 0;
          border-radius: 8px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
        }
        
        .highlight-box p {
          margin: 0;
          color: #2d6b7a;
          font-weight: 500;
        }
        
        .signature {
          margin-top: 30px;
          padding-top: 20px;
          border-top: 2px solid #e0e0e0;
          color: #666;
        }
        
        .signature-name {
          font-weight: bold;
          color: #2d6b7a;
        }
        
        .footer {
          background-color: #2d6b7a;
          padding: 30px;
          text-align: center;
          color: white;
        }
        
        .footer-content {
          margin-bottom: 20px;
        }
        
        .footer h3 {
          color: #ff6b35;
          margin-bottom: 15px;
          font-size: 20px;
        }
        
        .footer p {
          margin: 5px 0;
          opacity: 0.9;
        }
        
        .social-links {
          margin-top: 20px;
        }
        
        .social-links a {
          display: inline-block;
          margin: 0 10px;
          color: #ff6b35;
          text-decoration: none;
          font-size: 18px;
          transition: opacity 0.3s ease;
        }
        
        .social-links a:hover {
          opacity: 0.7;
        }
        
        .decorative-wave {
          height: 4px;
          background: linear-gradient(90deg, #ff6b35, #ff8c42, #ff6b35);
          margin: 20px 0;
        }
        
        @media (max-width: 600px) {
          .email-container {
            margin: 10px;
            border-radius: 10px;
          }
          
          .header {
            padding: 30px 20px;
          }
          
          .content {
            padding: 30px 20px;
          }
          
          .logo {
            font-size: 28px;
          }
          
          .greeting {
            font-size: 24px;
          }
        }
      </style>
    </head>
    <body>
      <div class="email-container">
        <div class="header">
          <div class="logo">Aranya</div>
          <div class="tagline">Lujo y tranquilidad inigualable</div>
        </div>
        
        <div class="content">
          <h1 class="greeting">¡Hemos recibido tu mensaje!</h1>
          
          <p class="message">
            Gracias por contactarnos y por tu interés en <strong>Aranya</strong>. 
            Tu mensaje es muy importante para nosotros y queremos asegurarnos de brindarte 
            la mejor atención posible.
          </p>
          
          <div class="highlight-box">
            <p>
              🌟 Uno de nuestros especialistas en hospitalidad revisará tu consulta 
              y se pondrá en contacto contigo dentro de las próximas 24 horas.
            </p>
          </div>
          
          <p class="message">
            Mientras tanto, te invitamos a explorar nuestra galería y descubrir todo lo que 
            nuestro paraíso natural tiene preparado para ti. En Aranya, cada detalle está 
            pensado para crear experiencias inolvidables.
          </p>
          
          <div class="decorative-wave"></div>
          
          <div class="signature">
            <p>Con cariño y expectativa de recibirte pronto,</p>
            <p class="signature-name">El equipo de Aranya</p>
            <p><em>Donde los sueños encuentran su hogar</em></p>
          </div>
        </div>
        
        <div class="footer">
          <div class="footer-content">
            <h3>🏝️ Aranya Resort</h3>
            <p>Sumérgete en una experiencia de lujo y tranquilidad</p>
            <p>📧 info@aranya.com | 📞 +1 (555) 123-4567</p>
            <p>🌍 Bahía Esmeralda, Paraíso Natural</p>
          </div>
          
          <div class="social-links">
            <a href="#" title="Facebook">📘</a>
            <a href="#" title="Instagram">📸</a>
            <a href="#" title="Twitter">🐦</a>
          </div>
          
          <p style="margin-top: 20px; font-size: 12px; opacity: 0.7;">
            Este correo fue enviado porque te pusiste en contacto con nosotros. 
            Si tienes alguna pregunta, no dudes en responder a este email.
          </p>
        </div>
      </div>
    </body>
    </html>
  `;

  await sendEmail({ 
    to: customerEmail, 
    subject, 
    html,
    text // Añadimos la versión de texto como respaldo
  });
}