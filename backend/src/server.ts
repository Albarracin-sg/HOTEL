// src/server.ts
import app from './app';

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`🚀 El servidor está corriendo en el puerto ${PORT}`);
  console.log(`🔗 Accede a http://localhost:${PORT}`);
  if (process.env.NODE_ENV !== 'production') {
    console.log(`🛠️ Prisma Studio: ejecuta 'npx prisma studio' (en otra terminal)`);
  }
});
