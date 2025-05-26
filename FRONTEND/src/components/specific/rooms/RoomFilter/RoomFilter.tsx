// src/components/rooms/RoomFilter/RoomFilter.tsx
import React from 'react';
import { Search } from 'lucide-react';
import type { RoomCategory } from '../RoomInterfaces';

interface RoomFilterProps {
  categories: RoomCategory[];
  selectedCategory: string;
  onSelectCategory: (categoryId: string) => void;
  searchTerm: string;
  onSearchTermChange: (searchTerm: string) => void;
}

const RoomFilter: React.FC<RoomFilterProps> = ({
  categories,
  selectedCategory,
  onSelectCategory,
  searchTerm,
  onSearchTermChange,
}) => {
  return (
    <div className="bg-black/80 backdrop-blur-md py-8 border-y border-gray-700/50">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex flex-wrap justify-center md:justify-start gap-3">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => onSelectCategory(category.id)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
                selectedCategory === category.id
                  ? 'bg-amber-500 text-gray-900 font-semibold shadow-lg shadow-amber-500/25 ring-2 ring-amber-400/50'
                  : 'bg-gray-700/80 text-white hover:bg-gray-600/90 border border-gray-600/50 hover:border-gray-500'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
        <div className="relative w-full md:w-auto md:flex-grow max-w-sm">
          <input
            type="text"
            placeholder="Buscar habitación..."
            value={searchTerm}
            onChange={(e) => onSearchTermChange(e.target.value)}
            className="w-full px-4 py-2 rounded-full bg-gray-800/90 backdrop-blur-sm border border-gray-600/70 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 pl-10 text-sm text-white placeholder-gray-400 transition-all duration-300 hover:bg-gray-700/90 hover:border-gray-500"
          />
          <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
        </div>
      </div>
    </div>
  );
};

export default RoomFilter;