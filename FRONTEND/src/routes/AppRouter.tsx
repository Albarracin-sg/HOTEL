// src/routes/AppRouter.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home/Home'; // Tu página Home
import Rooms from '../pages/Rooms/Rooms'; // Importa la página Rooms
import Amenities from '../pages/Amenities/Amenities'; // Importa la página Amenities
import Gallery from '../pages/Gallery/Gallery'; // Importa la página Gallery
import Contact from '../pages/Contact/Contact'; // Importa la página Contact

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* Ruta para la página de inicio */}
        <Route path="/" element={<Home />} />
        {/* Rutas para las nuevas páginas */}
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/amenities" element={<Amenities />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        {/* Puedes añadir una ruta 404 aquí si es necesario */}
        {/* <Route path="*" element={<NotFoundPage />} /> */}
      </Routes>
    </Router>
  );
};

export default AppRouter;