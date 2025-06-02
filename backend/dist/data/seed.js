"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
async function main() {
    console.log(`Start seeding ...`);
    // Create Rooms
    const room1 = await prisma.room.upsert({
        where: { name: 'Habitación Estándar' },
        update: {},
        create: {
            name: 'Habitación Estándar',
            description: 'Confortable y acogedora, ideal para viajeros solitarios o parejas.',
            capacity: 2,
            pricePerNight: 150.00,
        },
    });
    const room2 = await prisma.room.upsert({
        where: { name: 'Suite Deluxe' },
        update: {},
        create: {
            name: 'Suite Deluxe',
            description: 'Espaciosa y lujosa, con sala de estar separada y vistas panorámicas.',
            capacity: 3,
            pricePerNight: 300.00,
        },
    });
    const room3 = await prisma.room.upsert({
        where: { name: 'Villa con Piscina Privada' },
        update: {},
        create: {
            name: 'Villa con Piscina Privada',
            description: 'Máxima privacidad y exclusividad con piscina privada y terraza.',
            capacity: 4,
            pricePerNight: 600.00,
        },
    });
    const room4 = await prisma.room.upsert({
        where: { name: 'Suite Familiar' },
        update: {},
        create: {
            name: 'Suite Familiar',
            description: 'Amplia y confortable, diseñada para familias que desean compartir momentos especiales.',
            capacity: 6,
            pricePerNight: 400.00,
        },
    });
    console.log(`Seeding finished.`);
    console.log({ room1, room2, room3, room4 });
}
main()
    .catch((e) => {
    console.error(e);
    process.exit(1);
})
    .finally(async () => {
    await prisma.$disconnect();
});
//npm run seed
