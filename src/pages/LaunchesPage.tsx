
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Calendar, Star, ExternalLink, Filter } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useFavorites } from '../hooks/useFavorites'
import FavoriteButton from '../components/FavoriteButton'
import FavoritesFilter from '../components/FavoritesFilter'

const LaunchesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [showOnlyFavorites, setShowOnlyFavorites] = useState(false)
  
  const {
    favorites,
    toggleFavorite,
    isFavorite,
    clearAllFavorites,
    favoritesCount
  } = useFavorites('launchesFavorites')

  const launches = [
    {
      id: 1,
      name: "iPhone 16 Pro Max",
      brand: "Apple",
      category: "Mobile",
      launchDate: "15 Março 2025",
      price: "R$ 8.999",
      image: "https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "O smartphone mais avançado da Apple com chip A18 Pro e câmeras revolucionárias.",
      features: ["Chip A18 Pro", "Câmera 48MP", "Tela ProMotion 120Hz", "5G mmWave"],
      rating: 4.9,
      status: "Pré-venda",
      slug: "iphone-16-pro-max"
    },
    {
      id: 2,
      name: "RTX 5090",
      brand: "NVIDIA",
      category: "Hardware",
      launchDate: "22 Março 2025",
      price: "R$ 12.999",
      image: "https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "A placa gráfica mais poderosa já criada, com arquitetura Ada Lovelace aprimorada.",
      features: ["DLSS 4.0", "Ray Tracing 3ª Gen", "24GB GDDR7", "PCIe 5.0"],
      rating: 4.8,
      status: "Em breve",
      slug: "rtx-5090"
    },
    {
      id: 3,
      name: "PlayStation 5 Pro",
      brand: "Sony",
      category: "Gaming",
      launchDate: "10 Abril 2025",
      price: "R$ 4.999",
      image: "https://images.pexels.com/photos/3945667/pexels-photo-3945667.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Console de nova geração com gráficos 4K nativos e ray tracing avançado.",
      features: ["4K 120fps", "Ray Tracing", "SSD 2TB", "Retrocompatibilidade"],
      rating: 4.7,
      status: "Lançado",
      slug: "playstation-5-pro"
    },
    {
      id: 4,
      name: "Meta Quest 4",
      brand: "Meta",
      category: "VR/AR",
      launchDate: "05 Maio 2025",
      price: "R$ 3.499",
      image: "https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Headset VR de próxima geração com resolução 8K e tracking de mãos aprimorado.",
      features: ["Resolução 8K", "Tracking de mãos", "120Hz", "Wireless"],
      rating: 4.6,
      status: "Pré-venda",
      slug: "meta-quest-4"
    },
    {
      id: 5,
      name: "MacBook Pro M4",
      brand: "Apple",
      category: "Hardware",
      launchDate: "20 Maio 2025",
      price: "R$ 15.999",
      image: "https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=800",
      description: "Laptop profissional com chip M4 e performance revolucionária para criadores.",
      features: ["Chip M4", "Tela Liquid Retina", "32GB RAM", "2TB SSD"],
      rating: 4.9,
      status: "Em breve",
      slug: "macbook-pro-m4"
    },
    {
      id: 6,
      name: "Galaxy S25 Ultra",
      brand: "Samsung",
      category: "Mobile",
      launchDate: "01 Junho 2025",
      price: "R$ 7.999",
      image: "https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Flagship Android com câmera de 200MP e S Pen integrada.",
      features: ["Câmera 200MP", "S Pen", "Tela Dynamic AMOLED", "5000mAh"],
      rating: 4.8,
      status: "Pré-venda",
      slug: "galaxy-s25-ultra"
    }
  ]

  const categories = ['all', 'Mobile', 'Hardware', 'Gaming', 'VR/AR']

  // Aplicar filtros
  let filteredLaunches = launches.filter(item => 
    selectedCategory === 'all' || item.category === selectedCategory
  )

  if (showOnlyFavorites) {
    filteredLaunches = filteredLaunches.filter(item => isFavorite(item.id))
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Lançado': return 'bg-green-500'
      case 'Pré-venda': return 'bg-blue-500'
      case 'Em breve': return 'bg-yellow-500'
      default: return 'bg-gray-500'
    }
  }

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < Math.floor(rating) ? 'text-yellow-400 fill-current' : 'text-gray-600'
        }`}
      />
    ))
  }

  return (
    <div className="min-h-screen bg-gray-900 pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-green-400 to-blue-600 bg-clip-text text-transparent">
              Lançamentos do Mês
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Os produtos mais aguardados que chegam ao mercado este mês
          </p>
        </motion.div>

        {/* Favorites Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <FavoritesFilter
            showOnlyFavorites={showOnlyFavorites}
            onToggleFilter={() => setShowOnlyFavorites(!showOnlyFavorites)}
            favoritesCount={favoritesCount}
            onClearFavorites={clearAllFavorites}
            totalItems={launches.length}
          />
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <div className="flex items-center gap-2 mb-4">
            <Filter className="w-5 h-5 text-gray-400" />
            <span className="text-gray-400">Filtrar por categoria:</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                }`}
              >
                {category === 'all' ? 'Todos' : category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* No Results Message */}
        {filteredLaunches.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <div className="text-6xl mb-4">😕</div>
            <h3 className="text-2xl font-bold text-gray-400 mb-2">
              {showOnlyFavorites ? 'Nenhum favorito encontrado' : 'Nenhum lançamento encontrado'}
            </h3>
            <p className="text-gray-500">
              {showOnlyFavorites 
                ? 'Adicione alguns lançamentos aos seus favoritos!' 
                : 'Tente ajustar os filtros para ver mais resultados.'
              }
            </p>
          </motion.div>
        )}

        {/* Launches Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredLaunches.map((launch, index) => (
            <motion.div
              key={launch.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-gray-800 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={launch.image}
                    alt={launch.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
                  
                  {/* Status Badge */}
                  <div className="absolute top-4 left-4">
                    <span className={`${getStatusColor(launch.status)} px-3 py-1 rounded-full text-white text-sm font-medium`}>
                      {launch.status}
                    </span>
                  </div>

                  {/* Favorite Button */}
                  <div className="absolute top-4 right-4">
                    <FavoriteButton
                      id={launch.id}
                      isFavorite={isFavorite(launch.id)}
                      onToggle={toggleFavorite}
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Brand & Category */}
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-blue-400 font-medium">{launch.brand}</span>
                    <span className="text-gray-400 text-sm">{launch.category}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                    {launch.name}
                  </h3>

                  {/* Rating */}
                  <div className="flex items-center space-x-1 mb-3">
                    {renderStars(launch.rating)}
                    <span className="text-yellow-400 font-semibold ml-1">{launch.rating}</span>
                  </div>

                  {/* Description */}
                  <p className="text-gray-400 mb-4 leading-relaxed">
                    {launch.description}
                  </p>

                  {/* Features */}
                  <div className="mb-4">
                    <h4 className="text-white font-medium mb-2">Principais recursos:</h4>
                    <div className="flex flex-wrap gap-1">
                      {launch.features.map((feature, i) => (
                        <span 
                          key={i}
                          className="bg-gray-700 text-gray-300 px-2 py-1 rounded text-xs"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Launch Date & Price */}
                  <div className="flex items-center justify-between mb-4 pt-4 border-t border-gray-700">
                    <div className="flex items-center space-x-1 text-gray-400">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">{launch.launchDate}</span>
                    </div>
                    <span className="text-green-400 font-bold text-lg">{launch.price}</span>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2">
                    <Link 
                      to={`/produto/${launch.slug}`}
                      className="flex-1 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center justify-center space-x-1"
                    >
                      <span>Ver Detalhes</span>
                      <ExternalLink className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default LaunchesPage
