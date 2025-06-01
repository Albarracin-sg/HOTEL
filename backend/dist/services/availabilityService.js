"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.availabilityService = void 0;
// src/services/availabilityService.ts
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
exports.availabilityService = {
    /**
     * Checks if a room is available for the given date range.
     * @param roomId The ID of the room.
     * @param startDate The start date of the desired booking.
     * @param endDate The end date of the desired booking.
     * @returns True if the room is available, false otherwise.
     */
    isRoomAvailable: async (roomId, startDate, endDate) => {
        if (startDate >= endDate) {
            return false; // Invalid date range
        }
        try {
            const conflictingBookings = await prisma.booking.count({
                where: {
                    roomId: roomId,
                    // Check for any overlap
                    // A booking overlaps if its start is before our end AND its end is after our start
                    AND: [
                        { startDate: { lt: endDate } }, // Existing booking starts before new booking ends
                        { endDate: { gt: startDate } }, // Existing booking ends after new booking starts
                    ],
                },
            });
            return conflictingBookings === 0;
        }
        catch (error) {
            console.error("Error checking room availability:", error);
            // Decide how to handle DB errors, e.g., assume not available or re-throw
            throw new Error("Could not check room availability due to a database error.");
        }
    },
    /**
     * Retrieves a room by its ID.
     * @param roomId The ID of the room.
     * @returns The room object or null if not found.
     */
    getRoomById: async (roomId) => {
        try {
            return await prisma.room.findUnique({ where: { id: roomId } });
        }
        catch (error) {
            console.error("Error fetching room:", error);
            throw new Error("Could not fetch room details.");
        }
    }
};
