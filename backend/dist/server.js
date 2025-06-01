"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/server.ts
const app_1 = __importDefault(require("./app"));
const PORT = process.env.PORT || 3001;
app_1.default.listen(PORT, () => {
    console.log(`🚀 El servidor está corriendo en el puerto ${PORT}`);
    console.log(`🔗 Accede a http://localhost:${PORT}`);
    if (process.env.NODE_ENV !== 'production') {
        console.log(`🛠️ Prisma Studio: ejecuta 'npx prisma studio' (en otra terminal)`);
    }
});
