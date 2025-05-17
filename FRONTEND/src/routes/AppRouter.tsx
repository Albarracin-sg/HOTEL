import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Rooms from '../pages/Rooms/Rooms';
import Amenities from '../pages/Amenities/Amenities';
import Gallery from '../pages/Gallery/Gallery';
import Contact from '../pages/Contact/Contact';
import Reservations from '../pages/Reservations/Reservations'; 
import NotFoundPage from '../pages/NotFound/NotFound'; 

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
