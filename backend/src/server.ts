// src/server.ts
import app from './app';

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
  console.log(`🔗 Access it at http://localhost:${PORT}`);
  if (process.env.NODE_ENV !== 'production') {
    console.log(`Prisma Studio: npx prisma studio (requires separate terminal)`);
  }
});