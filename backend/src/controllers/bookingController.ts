// src/controllers/bookingController.ts
import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { availabilityService } from '../services/availabilityService';
import { emailService } from '../services/emailService';

const prisma = new PrismaClient();

interface BookingInfo {
  roomId: number;
  customerName: string;
  customerEmail: string;
  startDate: string; // Expected as YYYY-MM-DD
  endDate: string;   // Expected as YYYY-MM-DD
}

interface PaymentInfo {
  paymentMethod: string;
  // amount: number; // This will be calculated based on room price and duration
  transactionId?: string; // Optional, might come from a payment gateway later
}

export const bookingController = {
  createBooking: async (req: Request, res: Response) => {
    const { bookingInfo, paymentInfo }: { bookingInfo: BookingInfo; paymentInfo: PaymentInfo } = req.body;

    if (!bookingInfo || !paymentInfo) {
      return res.status(400).json({ message: 'bookingInfo and paymentInfo are required.' });
    }

    const { roomId, customerName, customerEmail, startDate: startDateStr, endDate: endDateStr } = bookingInfo;
    const { paymentMethod, transactionId } = paymentInfo;

    if (!roomId || !customerName || !customerEmail || !startDateStr || !endDateStr || !paymentMethod) {
      return res.status(400).json({ message: 'Missing required fields in bookingInfo or paymentInfo.' });
    }

    const startDate = new Date(startDateStr);
    const endDate = new Date(endDateStr);

    if (isNaN(startDate.getTime()) || isNaN(endDate.getTime()) || startDate >= endDate) {
        return res.status(400).json({ message: 'Invalid date format or range. Dates should be YYYY-MM-DD and start date must be before end date.' });
    }
    
    try {
      const room = await availabilityService.getRoomById(roomId);
      if (!room) {
        return res.status(404).json({ message: `Room with ID ${roomId} not found.` });
      }

      const isAvailable = await availabilityService.isRoomAvailable(roomId, startDate, endDate);
      if (!isAvailable) {
        return res.status(400).json({ message: `Room ${room.name} is not available for the selected dates.` });
      }

      // Calculate total price
      const nights = Math.ceil((endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24));
      if (nights <= 0) {
        return res.status(400).json({ message: 'End date must be after start date.' });
      }
      const totalPrice = nights * room.pricePerNight;

      // Use Prisma transaction to ensure atomicity
      const newBooking = await prisma.$transaction(async (tx: PrismaClient) => {
        const createdBooking = await tx.booking.create({
          data: {
            roomId,
            customerName,
            customerEmail,
            startDate,
            endDate,
            totalPrice,
          },
        });

        await tx.payment.create({
          data: {
            bookingId: createdBooking.id,
            paymentMethod,
            amount: totalPrice,
            transactionId: transactionId || `LOCAL-${Date.now()}`, // Placeholder if no external ID
            status: 'COMPLETED', // Assuming payment is completed upon booking
          },
        });
        return createdBooking;
      });

      // Send confirmation email (outside transaction, as it's an external service)
      await emailService.sendBookingConfirmationEmail(customerEmail, {
        roomName: room.name,
        startDate,
        endDate,
        customerName
      });

      return res.status(201).json({
        message: 'Habitación reservada con éxito',
        booking: newBooking,
      });

    } catch (error) {
      console.error('Error creating booking:', error);
      if (error instanceof Error && error.message.includes("not available")) {
         return res.status(400).json({ message: error.message });
      }
      return res.status(500).json({ message: 'Error interno del servidor al procesar la reserva.' });
    }
  },

  checkAvailability: async (req: Request, res: Response) => {
    const { start, end, roomId } = req.query;

    if (!start || !end || !roomId) {
      return res.status(400).json({ message: 'Parameters start (YYYY-MM-DD), end (YYYY-MM-DD), and roomId are required.' });
    }

    const startDate = new Date(start as string);
    const endDate = new Date(end as string);
    const numRoomId = parseInt(roomId as string, 10);

    if (isNaN(startDate.getTime()) || isNaN(endDate.getTime()) || isNaN(numRoomId)) {
      return res.status(400).json({ message: 'Invalid date format or roomId. Dates should be YYYY-MM-DD and roomId should be a number.' });
    }

    if (startDate >= endDate) {
      return res.status(400).json({ message: 'Start date must be before end date.' });
    }

    try {
      const room = await availabilityService.getRoomById(numRoomId);
      if (!room) {
        return res.status(404).json({ message: `Room with ID ${numRoomId} not found.` });
      }

      const isAvailable = await availabilityService.isRoomAvailable(numRoomId, startDate, endDate);
      
      return res.status(200).json({
        roomId: numRoomId,
        roomName: room.name,
        startDate: startDate.toISOString().split('T')[0],
        endDate: endDate.toISOString().split('T')[0],
        available: isAvailable,
        message: isAvailable ? 'La habitación está disponible.' : 'La habitación no está disponible para estas fechas.',
      });
    } catch (error) {
      console.error('Error checking availability:', error);
      return res.status(500).json({ message: 'Error interno del servidor al verificar la disponibilidad.' });
    }
  },
};