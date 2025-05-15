// src/routes/AppRouter.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Rooms from '../pages/Rooms/Rooms';
import Amenities from '../pages/Amenities/Amenities';
import Gallery from '../pages/Gallery/Gallery';
import Contact from '../pages/Contact/Contact';
import Reservations from '../pages/Reservations/Reservations'; // Importa la página de Reservaciones

// Componente simple para páginas no encontradas
const NotFoundPage: React.FC = () => (
  <div style={{ textAlign: 'center', marginTop: '2rem' }}>
    <h2>404 - Página no encontrada</h2>
    <p>La página que buscas no existe.</p>
  </div>
);

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/amenities" element={<Amenities />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/reservations" element={<Reservations />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
