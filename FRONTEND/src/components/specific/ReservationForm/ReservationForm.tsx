// src/components/specific/ReservationForm/ReservationForm.tsx

import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'; // Importa los estilos base del datepicker

// Puedes definir aquí las props si las necesitas, o mantener el estado interno
// interface ReservationFormProps {}

const ReservationForm: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null); // Podrías inicializar con new Date()
  const [numberOfPersons, setNumberOfPersons] = useState<string>('2');
  const [selectedTime, setSelectedTime] = useState<string>('');

  const personsOptions = Array.from({ length: 10 }, (_, i) => (i + 1).toString());

  const handlePersonsChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setNumberOfPersons(e.target.value);
  };

   const handleTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
       setSelectedTime(e.target.value);
   };

  const handleReserve = () => {
    if (!selectedDate) {
        alert('Por favor, selecciona una fecha.');
        return;
    }
    console.log('Intentar reservar:', { date: selectedDate.toDateString(), persons: numberOfPersons, time: selectedTime });
    // Lógica de reserva...
  };

  const handleWaitlist = () => {
     if (!selectedDate) {
        alert('Por favor, selecciona una fecha.');
        return;
     }
     console.log('Apuntarse a lista de espera:', { date: selectedDate.toDateString(), persons: numberOfPersons });
     // Lógica para lista de espera
  };

   const handlePolicies = () => {
      console.log('Ver políticas');
      // Lógica para mostrar políticas
   };


  return (
    // Contenedor principal - Fondo gris oscuro, padding, esquinas redondeadas, sombra, borde sutil.
    // Mantenemos este como bg-gray-900 o bg-gray-800 según prefieras el contraste con el fondo de la página.
    // bg-gray-900 es el más oscuro de tu paleta.
    <div className="bg-gray-900 p-6 md:p-8 rounded-lg shadow-xl w-full max-w-4xl mx-auto border border-gray-700">

      {/* Título "Reserva con nosotros" - Color ambar, fuente elegante, centrado */}
      {/* text-amber-500 es el ambar brillante. Si quieres el tono más apagado de la imagen, usa text-amber-300 */}
      {/* font-serif si tienes una fuente serif configurada en Tailwind que coincida con la imagen */}
      <h2 className="text-4xl font-serif text-amber-500 text-center mb-8">
        Reserva con nosotros
      </h2>

      {/* Contenido del formulario: Layout de 2 columnas en desktop, apilado en móvil */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">

        {/* Columna Izquierda: Calendario (DatePicker) */}
        <div className="flex justify-center md:justify-start">
          {/* El DatePicker real. El estilizado se hará con CSS adicional. */}
          {/* Puedes añadir una clase custom aquí si necesitas estilos CSS muy específicos solo para este datepicker */}
          <DatePicker
            selected={selectedDate}
            onChange={(date: Date | null) => setSelectedDate(date)}
            inline
            // calendarClassName="hotel-datepicker" // Ejemplo de clase custom
            // Props adicionales para controlar la apariencia y comportamiento
            // showPopperArrow={false}
            // minDate={new Date()}
          />
        </div>

        {/* Columna Derecha: Controles y Botones */}
        <div className="flex flex-col space-y-6 justify-center">

          {/* Selector de Personas */}
          <div>
            <label htmlFor="persons" className="block text-gray-300 text-sm font-semibold mb-2">Personas</label>
            <select
              id="persons"
              name="persons"
              value={numberOfPersons}
              onChange={handlePersonsChange}
              // Estilo del selector: Fondo gris oscuro (bg-gray-700), texto blanco, borde gris (border-gray-600), foco ambar.
              // Añadimos más padding vertical (py-3) para que se parezca más a la imagen.
              className="w-full px-4 py-3 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-amber-500 border border-gray-600 appearance-none"
            >
              {personsOptions.map(option => (
                <option key={option} value={option}>{option} personas</option>
              ))}
            </select>
             {/* Placeholder para la flecha del selector si usas appearance-none */}
             {/* Ajusta la posición para que coincida con el py-3 */}
             <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400 md:mt-8"> {/* Ajuste de mt */}
                 <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 6.757 7.586 5.343 9z"/></svg>
             </div>
          </div>

          {/* Selector de Hora */}
          <div>
              <label htmlFor="time" className="block text-gray-300 text-sm font-semibold mb-2">Hora</label>
               <input
                  type="time"
                  id="time"
                  name="time"
                  value={selectedTime}
                  onChange={handleTimeChange}
                   // Estilo del input: Fondo gris oscuro (bg-gray-700), texto blanco, borde gris (border-gray-600), foco ambar.
                   // Añadimos más padding vertical (py-3) para que se parezca más a la imagen.
                  className="w-full px-4 py-3 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-amber-500 border border-gray-600"
               />
             {/* Texto explicativo - Texto gris oscuro, tamaño pequeño */}
             <p className="text-gray-400 text-xs mt-2">Para este día y personas, disponibilidad limitada. Contactar por teléfono.</p>
          </div>

          {/* Botón "Reservar" - Fondo ambar brillante, texto oscuro, padding, esquinas redondeadas, hover */}
          {/* Ajustamos padding vertical (py-3) y tamaño de fuente (text-lg) para que coincida con la imagen */}
          <button
            type="button"
            onClick={handleReserve}
            className="w-full px-6 py-3 bg-amber-500 text-gray-900 font-semibold rounded hover:bg-amber-600 transition duration-300 text-lg"
          >
            Reservar
          </button>

          {/* Botón "Lista de espera" - Fondo gris oscuro, borde ambar, texto ambar, hover sutil */}
          {/* Usamos bg-gray-800 para el fondo del botón, borde y texto ambar. Ajustamos padding y tamaño de fuente. */}
          <button
            type="button"
            onClick={handleWaitlist}
            className="w-full px-6 py-3 bg-gray-800 border border-amber-500 text-amber-500 font-semibold rounded hover:bg-amber-700 transition duration-300 text-lg"
          >
            Apuntarse en la lista de espera
          </button>

          {/* Botón "Nuestras políticas" - Fondo marrón/ambar oscuro, texto oscuro, hover */}
          {/* Usamos bg-amber-700 que es un ambar más oscuro. Ajustamos padding y tamaño de fuente. */}
          <button
             type="button"
             onClick={handlePolicies}
             className="w-full px-6 py-3 bg-amber-700 text-gray-900 font-semibold rounded hover:bg-amber-800 transition duration-300 text-lg"
          >
            Nuestras políticas
          </button>

        </div> {/* Fin Columna Derecha */}

      </div> {/* Fin Grid Principal */}

    </div> // Fin Contenedor del Formulario
  );
};

export default ReservationForm;