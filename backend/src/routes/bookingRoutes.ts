// src/routes/bookingRoutes.ts
import { Router } from 'express';
import { bookingController } from '../controllers/bookingController';

const router = Router();

// POST /api/bookings - Create a new booking
router.post('/', bookingController.createBooking);

// GET /api/bookings?start=YYYY-MM-DD&end=YYYY-MM-DD&roomId=ID - Check availability
router.get('/', bookingController.checkAvailability);

export default router;