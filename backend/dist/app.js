"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/app.ts
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const bookingRoutes_1 = __importDefault(require("./routes/bookingRoutes"));
const contactRoutes_1 = __importDefault(require("./routes/contactRoutes"));
// Load environment variables
dotenv_1.default.config();
const app = (0, express_1.default)();
// Middlewares
app.use((0, cors_1.default)()); // Enable CORS for all routes
app.use(express_1.default.json()); // Parse JSON request bodies
app.use(express_1.default.urlencoded({ extended: true })); // Parse URL-encoded request bodies
// Basic Route
app.get('/', (req, res) => {
    res.send('Hotel Booking API is running!');
});
// API Routes
app.use('/api/bookings', bookingRoutes_1.default);
app.use('/api/contact', contactRoutes_1.default);
// Global Error Handler (simple example)
// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});
exports.default = app;
