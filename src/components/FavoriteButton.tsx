
import React from 'react'
import { motion } from 'framer-motion'
import { Heart } from 'lucide-react'

interface FavoriteButtonProps {
  id: number
  isFavorite: boolean
  onToggle: (id: number) => void
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

const FavoriteButton: React.FC<FavoriteButtonProps> = ({
  id,
  isFavorite,
  onToggle,
  size = 'md',
  className = ''
}) => {
  const sizeClasses = {
    sm: 'p-1.5',
    md: 'p-2',
    lg: 'p-3'
  }

  const iconSizes = {
    sm: 16,
    md: 20,
    lg: 24
  }

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    onToggle(id)
  }

  return (
    <motion.button
      onClick={handleClick}
      className={`
        ${sizeClasses[size]}
        bg-black/50 backdrop-blur-sm rounded-full 
        hover:bg-black/70 transition-all duration-300
        ${className}
      `}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      initial={false}
    >
      <motion.div
        animate={{
          scale: isFavorite ? [1, 1.3, 1] : 1,
          rotate: isFavorite ? [0, 15, -15, 0] : 0
        }}
        transition={{ duration: 0.3 }}
      >
        <Heart 
          size={iconSizes[size]}
          className={`transition-colors duration-300 ${
            isFavorite 
              ? 'text-red-500 fill-current' 
              : 'text-white hover:text-red-300'
          }`}
        />
      </motion.div>
    </motion.button>
  )
}

export default FavoriteButton
