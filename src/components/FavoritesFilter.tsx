
import React from 'react'
import { motion } from 'framer-motion'
import { Heart, X, Filter } from 'lucide-react'

interface FavoritesFilterProps {
  showOnlyFavorites: boolean
  onToggleFilter: () => void
  favoritesCount: number
  onClearFavorites: () => void
  totalItems: number
}

const FavoritesFilter: React.FC<FavoritesFilterProps> = ({
  showOnlyFavorites,
  onToggleFilter,
  favoritesCount,
  onClearFavorites,
  totalItems
}) => {
  return (
    <div className="flex items-center justify-between mb-6 p-4 bg-gray-800 rounded-xl">
      <div className="flex items-center space-x-4">
        {/* Filter Toggle */}
        <motion.button
          onClick={onToggleFilter}
          className={`
            flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all
            ${showOnlyFavorites 
              ? 'bg-red-500 text-white' 
              : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
            }
          `}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Heart 
            size={18} 
            className={showOnlyFavorites ? 'fill-current' : ''} 
          />
          <span>
            {showOnlyFavorites ? 'Mostrando Favoritos' : 'Mostrar Favoritos'}
          </span>
          {favoritesCount > 0 && (
            <span className="bg-white/20 px-2 py-1 rounded-full text-xs">
              {favoritesCount}
            </span>
          )}
        </motion.button>

        {/* Items Count */}
        <div className="flex items-center space-x-1 text-gray-400">
          <Filter size={16} />
          <span className="text-sm">
            {showOnlyFavorites 
              ? `${favoritesCount} favoritos` 
              : `${totalItems} itens`
            }
          </span>
        </div>
      </div>

      {/* Clear Favorites */}
      {favoritesCount > 0 && (
        <motion.button
          onClick={onClearFavorites}
          className="flex items-center space-x-1 px-3 py-2 bg-gray-700 hover:bg-red-600 text-gray-300 hover:text-white rounded-lg transition-all text-sm"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <X size={16} />
          <span>Limpar Favoritos</span>
        </motion.button>
      )}
    </div>
  )
}

export default FavoritesFilter
