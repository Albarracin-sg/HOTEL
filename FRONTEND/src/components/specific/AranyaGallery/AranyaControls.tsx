import type { FC } from 'react';
import type { AranyaControlsProps } from './AranyaGallery.types';
import { ChevronLeft, ChevronRight, Leaf } from 'lucide-react';
import { useLanguage } from '../../common/context/LanguageContext';
import './AranyaGallery.css';

export const AranyaControls: FC<AranyaControlsProps> = ({ goToPrev, goToNext, activeItemTitle }) => {
  const { t } = useLanguage();
  
  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 w-11/12 max-w-sm z-40 
                    sm:bottom-6 sm:w-4/5 sm:max-w-md 
                    md:bottom-8 md:max-w-lg
                    lg:bottom-12 lg:max-w-xl">
      <div className="glass-ui text-white rounded-full py-2 px-3 flex items-center justify-between
                      sm:py-3 sm:px-4
                      md:py-3 md:px-6
                      lg:py-4 lg:px-8">
        
        {/* Botón Anterior */}
        <button
          className="p-1.5 hover:bg-white/10 rounded-full transition-colors duration-200 flex-shrink-0
                     sm:p-2
                     md:p-2.5
                     lg:p-3"
          onClick={goToPrev}
          aria-label="Imagen anterior"
        >
          <ChevronLeft 
            size={18} 
            className="sm:w-5 sm:h-5 
                       md:w-6 md:h-6 
                       lg:w-7 lg:h-7" 
          />
        </button>
        
        {/* Contenido Central */}
        <div className="flex items-center space-x-2 opacity-90 flex-1 justify-center min-w-0
                        sm:space-x-3
                        md:space-x-4">
          <div className="w-7 h-7 rounded-full bg-white/15 flex items-center justify-center flex-shrink-0
                          sm:w-8 sm:h-8
                          md:w-9 md:h-9
                          lg:w-10 lg:h-10">
            <Leaf 
              size={14} 
              className="sm:w-4 sm:h-4 
                         md:w-5 md:h-5 
                         lg:w-6 lg:h-6" 
            />
          </div>
          <div className="text-left min-w-0 flex-1">
            <p className="text-xs font-medium truncate
                          sm:text-sm
                          md:text-base
                          lg:text-lg">
              Aranya
            </p>
            <p className="text-xs text-gray-300 font-light truncate leading-tight
                          sm:text-xs
                          md:text-sm
                          lg:text-base">
              {activeItemTitle || t('gallery.experience')}
            </p>
          </div>
        </div>
        
        {/* Botón Siguiente */}
        <button
          className="p-1.5 hover:bg-white/10 rounded-full transition-colors duration-200 flex-shrink-0
                     sm:p-2
                     md:p-2.5
                     lg:p-3"
          onClick={goToNext}
          aria-label="Imagen siguiente"
        >
          <ChevronRight 
            size={18} 
            className="sm:w-5 sm:h-5 
                       md:w-6 md:h-6 
                       lg:w-7 lg:h-7" 
          />
        </button>
      </div>
    </div>
  );
};