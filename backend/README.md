# Hotel Booking API Backend

Este es un backend para un sistema de reservas de hotel y formulario de contacto, construido con Node.js, TypeScript, Express, Prisma y Nodemailer.

## Requisitos Previos

-   Node.js (v18 o superior recomendado)
-   npm o yarn
-   MySQL Server
-   Una cuenta de correo (ej. Gmail) para enviar emails con Nodemailer.

## Configuración

1.  **Clonar el repositorio (si aplica) o crear los archivos como se indica.**

2.  **Instalar dependencias:**
    ```bash
    cd backend
    npm install
    # o
    # yarn install
    ```

3.  **Configurar variables de entorno:**
    Crea un archivo `.env` en la raíz del directorio `backend/` y copia el contenido de `.env.example` (o usa el proporcionado directamente). Actualiza los valores con tu configuración:
    ```env
    DATABASE_URL="mysql://USER:PASSWORD@HOST:PORT/DATABASE_NAME"
    EMAIL_USER="tu_correo@gmail.com"
    EMAIL_PASS="tu_contraseña_de_aplicacion_gmail"
    EMAIL_HOST="smtp.gmail.com"
    EMAIL_PORT="465"
    ADMIN_EMAIL="admin@tu_dominio.com"
    PORT=3001
    ```
    -   Reemplaza `USER`, `PASSWORD`, `HOST`, `PORT`, `DATABASE_NAME` con tus credenciales de MySQL.
    -   Asegúrate de que la base de datos especificada en `DATABASE_URL` exista en tu servidor MySQL.
    -   Para `EMAIL_USER` y `EMAIL_PASS`, si usas Gmail, necesitarás generar una "Contraseña de aplicación".

4.  **Configurar Prisma y la Base de Datos:**
    Ejecuta los siguientes comandos para generar el cliente de Prisma y aplicar las migraciones a tu base de datos (esto creará las tablas):
    ```bash
    npx prisma generate
    npx prisma migrate dev --name init
    ```
    Esto creará las tablas `Room`, `Booking`, y `Payment` en tu base de datos.

5.  **(Opcional) Cargar datos iniciales (Seed):**
    Para poblar la base de datos con datos de ejemplo (como habitaciones):
    ```bash
    npm run seed
    ```

## Ejecutar la Aplicación

### Modo Desarrollo (con auto-recarga)

```bash
npm run dev