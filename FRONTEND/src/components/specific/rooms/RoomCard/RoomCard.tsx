// src/components/rooms/RoomCard/RoomCard.tsx

import React from 'react';
import { Users, Bed } from 'lucide-react';
import type { Room } from '../RoomInterfaces';

interface RoomCardProps {
  room: Room;
  onViewDetails: (room: Room) => void; // Aún se usa para abrir el modal, que ahora es la única acción
}

const RoomCard: React.FC<RoomCardProps> = ({ room, onViewDetails }) => {
  return (
    <div className="bg-gray-800 rounded-lg shadow-xl overflow-hidden flex flex-col transform transition duration-300 hover:-translate-y-1 hover:shadow-amber-500/30">
      <div className="relative h-56 overflow-hidden">
        <img
          src={room.images[0]}
          alt={room.name}
          className="w-full h-full object-cover transition duration-700 hover:scale-110"
        />
        <div className="absolute top-3 right-3 bg-amber-500 text-gray-900 font-bold py-1 px-3 text-sm rounded-full shadow-md">
          ${room.price}/noche
        </div>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h2 className="text-2xl font-semibold mb-2 text-amber-400">{room.name}</h2>
        <p className="text-gray-300 text-sm mb-4 flex-grow">{room.description}</p>

        <div className="mb-4">
          <div className="flex items-center gap-4 text-sm text-gray-400 mb-2">
            <div className="flex items-center gap-1">
              <Users size={16} />
              <span>{room.capacity} huéspedes</span>
            </div>
            <div className="flex items-center gap-1">
              <Bed size={16} />
              <span>{room.bedType}</span>
            </div>
          </div>
          <p className="text-xs text-gray-500">{room.size}</p>
        </div>

        <div className="mt-auto"> {/* Eliminar flex gap-3 */}
          <button
            onClick={() => onViewDetails(room)} // Ahora este botón es para reservar, que también abre el modal de detalles
            className="w-full px-4 py-2 bg-amber-500 text-gray-900 font-semibold rounded hover:bg-amber-600 transition duration-300 text-sm"
          >
            Reservar Ahora
          </button>
        </div>
      </div>
    </div>
  );
};

export default RoomCard;