// src/app.ts
import express, { Application, Request, Response, NextFunction } from "express";
import cors from "cors";
import dotenv from "dotenv";

import bookingRoutes from "./routes/bookingRoutes";
import contactRoutes from "./routes/contactRoutes";

// Load environment variables
dotenv.config();

const app: Application = express();

// Middlewares
app.use(cors()); // Enable CORS for all routes
app.use(express.json()); // Parse JSON request bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded request bodies

// Basic Route
app.get("/", (req: Request, res: Response) => {
  res.send("Backend del Hotel - API en funcionamiento");
});

// API Routes
app.use("/api/bookings", bookingRoutes);
app.use("/api/contact", contactRoutes);

// Global Error Handler (simple example)
// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

export default app;
