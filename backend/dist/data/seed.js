"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
async function main() {
    console.log(`Start seeding ...`);
    // Create Rooms
    const room1 = await prisma.room.upsert({
        where: { name: 'Standard Double Room' },
        update: {},
        create: {
            name: 'Standard Double Room',
            description: 'A comfortable room with a double bed.',
            capacity: 2,
            pricePerNight: 75.00,
        },
    });
    const room2 = await prisma.room.upsert({
        where: { name: 'Deluxe Suite' },
        update: {},
        create: {
            name: 'Deluxe Suite',
            description: 'A luxurious suite with a king-size bed and a city view.',
            capacity: 2,
            pricePerNight: 150.00,
        },
    });
    const room3 = await prisma.room.upsert({
        where: { name: 'Family Room' },
        update: {},
        create: {
            name: 'Family Room',
            description: 'Spacious room with one double bed and two single beds.',
            capacity: 4,
            pricePerNight: 120.00,
        },
    });
    console.log(`Seeding finished.`);
    console.log({ room1, room2, room3 });
}
main()
    .catch((e) => {
    console.error(e);
    process.exit(1);
})
    .finally(async () => {
    await prisma.$disconnect();
});
