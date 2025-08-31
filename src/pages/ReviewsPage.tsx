
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Star, ThumbsUp, ThumbsDown, Eye, Calendar, Award } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useFavorites } from '../hooks/useFavorites'
import FavoriteButton from '../components/FavoriteButton'
import FavoritesFilter from '../components/FavoritesFilter'

const ReviewsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [showOnlyFavorites, setShowOnlyFavorites] = useState(false)
  
  const {
    favorites,
    toggleFavorite,
    isFavorite,
    clearAllFavorites,
    favoritesCount
  } = useFavorites('reviewsFavorites')

  const reviews = [
    {
      id: 1,
      title: "iPhone 15 Pro Max",
      category: "Smartphone",
      rating: 4.8,
      image: "https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=800",
      summary: "O smartphone mais avançado da Apple oferece performance excepcional e câmeras profissionais.",
      reviewer: "Carlos Tech",
      reviewDate: "18 Jan 2025",
      likes: 342,
      dislikes: 12,
      views: 15600,
      pros: [
        "Performance excepcional do chip A17 Pro",
        "Qualidade de câmera profissional",
        "Tela ProMotion de 120Hz fluida",
        "Construção premium em titânio"
      ],
      cons: [
        "Preço muito elevado",
        "Bateria poderia durar mais",
        "Aquecimento em jogos pesados"
      ],
      finalScore: {
        design: 9.5,
        performance: 9.8,
        camera: 9.7,
        battery: 8.2,
        value: 7.5
      },
      slug: "review-iphone-15-pro-max"
    },
    {
      id: 2,
      title: "RTX 4090",
      category: "Placa Gráfica",
      rating: 4.9,
      image: "https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=800",
      summary: "A placa gráfica mais poderosa do mercado domina jogos 4K e criação de conteúdo profissional.",
      reviewer: "Ana Hardware",
      reviewDate: "16 Jan 2025",
      likes: 756,
      dislikes: 23,
      views: 31200,
      pros: [
        "Performance 4K incomparável",
        "DLSS 3.0 revolucionário",
        "Ray tracing em tempo real",
        "Excelente para criação de conteúdo"
      ],
      cons: [
        "Consumo de energia muito alto",
        "Preço extremamente elevado",
        "Tamanho gigantesco",
        "Necessita PSU robusta"
      ],
      finalScore: {
        performance: 10.0,
        efficiency: 6.5,
        features: 9.8,
        build: 9.2,
        value: 7.0
      },
      slug: "review-rtx-4090"
    },
    {
      id: 3,
      title: "PlayStation 5 Pro",
      category: "Console",
      rating: 4.7,
      image: "https://images.pexels.com/photos/3945667/pexels-photo-3945667.jpeg?auto=compress&cs=tinysrgb&w=800",
      summary: "O console mais poderoso da Sony eleva os jogos para um novo patamar visual.",
      reviewer: "João Games",
      reviewDate: "15 Jan 2025",
      likes: 528,
      dislikes: 34,
      views: 23400,
      pros: [
        "Gráficos 4K nativos impressionantes",
        "Ray tracing avançado",
        "SSD ultrarrápido",
        "Retrocompatibilidade perfeita"
      ],
      cons: [
        "Poucos exclusivos que aproveitam o poder",
        "Preço elevado para upgrade",
        "Ventilador pode ser barulhento"
      ],
      finalScore: {
        graphics: 9.5,
        performance: 9.3,
        games: 8.8,
        features: 9.0,
        value: 8.2
      },
      slug: "review-playstation-5-pro"
    },
    {
      id: 4,
      title: "MacBook Pro M3 Max",
      category: "Laptop",
      rating: 4.6,
      image: "https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=800",
      summary: "O laptop mais poderoso da Apple combina performance excepcional com eficiência energética.",
      reviewer: "Maria Pro",
      reviewDate: "14 Jan 2025",
      likes: 423,
      dislikes: 18,
      views: 19800,
      pros: [
        "Performance do chip M3 Max",
        "Tela Liquid Retina XDR",
        "Bateria de longa duração",
        "Construção premium"
      ],
      cons: [
        "Preço muito alto",
        "Limitações de conectividade",
        "Não suporta alguns softwares x86"
      ],
      finalScore: {
        performance: 9.7,
        display: 9.8,
        battery: 9.5,
        build: 9.6,
        value: 7.8
      },
      slug: "review-macbook-pro-m3-max"
    },
    {
      id: 5,
      title: "Meta Quest 3",
      category: "VR Headset",
      rating: 4.5,
      image: "https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=800",
      summary: "O headset VR mais avançado da Meta oferece experiências imersivas de alta qualidade.",
      reviewer: "Pedro VR",
      reviewDate: "13 Jan 2025",
      likes: 312,
      dislikes: 28,
      views: 14500,
      pros: [
        "Resolução 4K+ por olho",
        "Tracking preciso sem sensores",
        "Realidade mista avançada",
        "Biblioteca de jogos extensa"
      ],
      cons: [
        "Bateria dura apenas 2-3 horas",
        "Pode causar desconforto prolongado",
        "Preço ainda elevado para mainstream"
      ],
      finalScore: {
        visuals: 9.2,
        comfort: 7.8,
        tracking: 9.5,
        content: 8.8,
        value: 8.0
      },
      slug: "review-meta-quest-3"
    },
    {
      id: 6,
      title: "Galaxy S24 Ultra",
      category: "Smartphone",
      rating: 4.7,
      image: "https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=800",
      summary: "O flagship Android da Samsung impressiona com câmeras versáteis e S Pen integrada.",
      reviewer: "Lucas Mobile",
      reviewDate: "12 Jan 2025",
      likes: 445,
      dislikes: 21,
      views: 18900,
      pros: [
        "Câmera zoom 100x impressionante",
        "S Pen integrada e responsiva",
        "Tela Dynamic AMOLED brilhante",
        "Bateria de longa duração"
      ],
      cons: [
        "Interface One UI pode ser pesada",
        "Preço competitivo com iPhone",
        "Câmera frontal poderia ser melhor"
      ],
      finalScore: {
        camera: 9.6,
        display: 9.4,
        performance: 9.1,
        battery: 8.9,
        value: 8.5
      },
      slug: "review-galaxy-s24-ultra"
    }
  ]

  const categories = ['all', 'Smartphone', 'Placa Gráfica', 'Console', 'Laptop', 'VR Headset']

  // Aplicar filtros
  let filteredReviews = reviews.filter(review => 
    selectedCategory === 'all' || review.category === selectedCategory
  )

  if (showOnlyFavorites) {
    filteredReviews = filteredReviews.filter(review => isFavorite(review.id))
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

  const getScoreColor = (score: number) => {
    if (score >= 9) return 'text-green-400'
    if (score >= 8) return 'text-yellow-400'
    if (score >= 7) return 'text-orange-400'
    return 'text-red-400'
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
            <span className="bg-gradient-to-r from-yellow-400 to-orange-600 bg-clip-text text-transparent">
              Reviews da Semana
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Análises detalhadas dos produtos mais importantes do momento
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
            totalItems={reviews.length}
          />
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <div className="flex flex-wrap gap-2">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-yellow-500 text-black'
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                }`}
              >
                {category === 'all' ? 'Todos' : category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* No Results Message */}
        {filteredReviews.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <div className="text-6xl mb-4">📝</div>
            <h3 className="text-2xl font-bold text-gray-400 mb-2">
              {showOnlyFavorites ? 'Nenhum review favorito' : 'Nenhum review encontrado'}
            </h3>
            <p className="text-gray-500">
              {showOnlyFavorites 
                ? 'Adicione alguns reviews aos seus favoritos!' 
                : 'Tente ajustar os filtros para ver mais resultados.'
              }
            </p>
          </motion.div>
        )}

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredReviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-gray-800 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1">
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={review.image}
                    alt={review.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 to-transparent" />
                  
                  {/* Rating Badge */}
                  <div className="absolute top-4 left-4">
                    <div className="bg-yellow-500 text-black px-3 py-1 rounded-full font-bold flex items-center space-x-1">
                      <Award className="w-4 h-4" />
                      <span>{review.rating}</span>
                    </div>
                  </div>

                  {/* Favorite Button */}
                  <div className="absolute top-4 right-4">
                    <FavoriteButton
                      id={review.id}
                      isFavorite={isFavorite(review.id)}
                      onToggle={toggleFavorite}
                    />
                  </div>

                  {/* Category */}
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-gray-900/80 backdrop-blur-sm px-3 py-1 rounded-full text-white text-sm">
                      {review.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Title & Rating */}
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold text-white group-hover:text-yellow-400 transition-colors">
                      {review.title}
                    </h3>
                    <div className="flex items-center space-x-1 ml-4">
                      {renderStars(review.rating)}
                    </div>
                  </div>

                  {/* Reviewer & Date */}
                  <div className="flex items-center space-x-4 text-sm text-gray-400 mb-3">
                    <span>Por {review.reviewer}</span>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{review.reviewDate}</span>
                    </div>
                  </div>

                  {/* Summary */}
                  <p className="text-gray-400 mb-4 leading-relaxed">
                    {review.summary}
                  </p>

                  {/* Pros & Cons */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <h4 className="text-green-400 font-medium mb-2 flex items-center">
                        <ThumbsUp className="w-4 h-4 mr-1" />
                        Prós
                      </h4>
                      <ul className="text-sm text-gray-400 space-y-1">
                        {review.pros.slice(0, 3).map((pro, i) => (
                          <li key={i} className="flex items-start">
                            <span className="w-1 h-1 bg-green-400 rounded-full mr-2 mt-2 flex-shrink-0" />
                            {pro}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-red-400 font-medium mb-2 flex items-center">
                        <ThumbsDown className="w-4 h-4 mr-1" />
                        Contras
                      </h4>
                      <ul className="text-sm text-gray-400 space-y-1">
                        {review.cons.slice(0, 3).map((con, i) => (
                          <li key={i} className="flex items-start">
                            <span className="w-1 h-1 bg-red-400 rounded-full mr-2 mt-2 flex-shrink-0" />
                            {con}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Scores */}
                  <div className="mb-4">
                    <h4 className="text-white font-medium mb-2">Pontuações:</h4>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      {Object.entries(review.finalScore).map(([key, score]) => (
                        <div key={key} className="flex justify-between">
                          <span className="text-gray-400 capitalize">{key}:</span>
                          <span className={`font-bold ${getScoreColor(score)}`}>
                            {score.toFixed(1)}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Stats & Action */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-700">
                    <div className="flex items-center space-x-4 text-sm text-gray-400">
                      <div className="flex items-center space-x-1">
                        <ThumbsUp className="w-4 h-4 text-green-400" />
                        <span>{review.likes}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <ThumbsDown className="w-4 h-4 text-red-400" />
                        <span>{review.dislikes}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Eye className="w-4 h-4" />
                        <span>{review.views.toLocaleString()}</span>
                      </div>
                    </div>
                    
                    <Link to={`/review/${review.slug}`}>
                      <motion.button
                        className="bg-yellow-500 hover:bg-yellow-600 text-black px-4 py-2 rounded-lg font-medium transition-colors"
                        whileHover={{ scale: 1.05 }}
                      >
                        Ler Review
                      </motion.button>
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

export default ReviewsPage
