"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// src/routes/bookingRoutes.ts
const express_1 = require("express");
const bookingController_1 = require("../controllers/bookingController");
const router = (0, express_1.Router)();
// POST /api/bookings - Create a new booking
router.post('/', bookingController_1.bookingController.createBooking);
// GET /api/bookings?start=YYYY-MM-DD&end=YYYY-MM-DD&roomId=ID - Check availability
router.get('/', bookingController_1.bookingController.checkAvailability);
exports.default = router;
