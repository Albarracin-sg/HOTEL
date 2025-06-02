"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
// rutas personalizadas
const bookingRoutes_1 = __importDefault(require("./routes/bookingRoutes"));
const contactRoutes_1 = __importDefault(require("./routes/contactRoutes"));
dotenv_1.default.config();
// Inicializa la aplicación de Express
const app = (0, express_1.default)();
// Habilita CORS 
app.use((0, cors_1.default)());
// parsear solicitudes con cuerpo en formato JSON
app.use(express_1.default.json());
// parsear solicitudes con datos codificados en URL (como formularios)
app.use(express_1.default.urlencoded({ extended: true }));
// ==== Ruta base de prueba ====
app.get("/", (req, res) => {
    res.send("Backend del Hotel - API en funcionamiento");
});
// ==== Rutas de la API ====
// Rutas para reservas
app.use("/api/bookings", bookingRoutes_1.default);
// Rutas para formularios de contacto
app.use("/api/contact", contactRoutes_1.default);
// ==== Manejador de errores global ====
// Captura cualquier error no manejado que ocurra en las rutas anteriores
// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((err, req, res, next) => {
    console.error(err.stack); // Muestra el error en consola
    res.status(500).send("¡Algo salió mal en el servidor!");
});
exports.default = app;
