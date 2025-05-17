import type { FC } from 'react';
import type { AranyaControlsProps } from './AranyaGallery.types'; // Importar tipos
import { ChevronLeft, ChevronRight, Leaf } from 'lucide-react'; // Importar íconos

// Importa el archivo CSS para los estilos glass-ui si lo usas
import './AranyaGallery.css';

// Componente de presentación para la barra de controles inferior
export const AranyaControls: FC<AranyaControlsProps> = ({ goToPrev, goToNext, activeItemTitle }) => {
  return (
    <div className="absolute bottom-16 w-4/5 max-w-md z-50">
      <div className="glass-ui text-white rounded-full py-3 px-6 flex items-center justify-between">
        <button
          className="p-2 hover:bg-white/10 rounded-full transition-colors"
          onClick={goToPrev} // Llama a la función para ir a la anterior
        >
          <ChevronLeft size={24} />
        </button>

        {/* Información central simplificada: Nombre de la marca y título del item activo */}
        <div className="flex items-center space-x-4 opacity-80">
          <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
            <Leaf size={20} /> {/* Icono representativo */}
          </div>
          <div className="text-left">
            <p className="text-sm font-light">Aranya</p>
            <p className="text-xs text-gray-400 font-light">{activeItemTitle || 'Experiencia'}</p> {/* Muestra el título activo */}
          </div>
        </div>

        <button
          className="p-2 hover:bg-white/10 rounded-full transition-colors"
          onClick={goToNext} // Llama a la función para ir a la siguiente
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};