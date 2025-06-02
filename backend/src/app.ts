import express, { Application, Request, Response, NextFunction } from "express";
import cors from "cors";
import dotenv from "dotenv";

// rutas personalizadas
import bookingRoutes from "./routes/bookingRoutes";
import contactRoutes from "./routes/contactRoutes";

dotenv.config();

// Inicializa la aplicación de Express
const app: Application = express();

// Habilita CORS 
app.use(cors());

// parsear solicitudes con cuerpo en formato JSON
app.use(express.json());

// parsear solicitudes con datos codificados en URL (como formularios)
app.use(express.urlencoded({ extended: true }));

// ==== Ruta base de prueba ====
app.get("/", (req: Request, res: Response) => {
  res.send("Backend del Hotel - API en funcionamiento");
});

// ==== Rutas de la API ====
// Rutas para reservas
app.use("/api/bookings", bookingRoutes);

// Rutas para formularios de contacto
app.use("/api/contact", contactRoutes);

// ==== Manejador de errores global ====
// Captura cualquier error no manejado que ocurra en las rutas anteriores
// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack); // Muestra el error en consola
  res.status(500).send("¡Algo salió mal en el servidor!");
});

export default app;
