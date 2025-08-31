
import React from 'react'
import { motion } from 'framer-motion'
import { Star, ThumbsUp, Eye } from 'lucide-react'
import { Link } from 'react-router-dom'

const ReviewsSection: React.FC = () => {
  const reviews = [
    {
      title: "PlayStation 5 Pro",
      category: "Console",
      rating: 4.8,
      image: "https://images.pexels.com/photos/3945667/pexels-photo-3945667.jpeg?auto=compress&cs=tinysrgb&w=600",
      summary: "O console mais poderoso da Sony oferece gráficos 4K nativos e ray tracing impressionante.",
      likes: 342,
      views: 15600,
      pros: ["Gráficos 4K nativos", "Ray tracing avançado", "SSD ultrarrápido"],
      cons: ["Preço elevado", "Poucos exclusivos"],
      slug: "review-playstation-5-pro"
    },
    {
      title: "iPhone 15 Pro Max",
      category: "Smartphone",
      rating: 4.7,
      image: "https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=600",
      summary: "O smartphone mais avançado da Apple com chip A17 Pro e câmeras revolucionárias.",
      likes: 528,
      views: 23400,
      pros: ["Chip A17 Pro", "Câmeras profissionais", "Tela ProMotion"],
      cons: ["Bateria média", "Preço premium"],
      slug: "review-iphone-15-pro-max"
    },
    {
      title: "RTX 4090",
      category: "Placa Gráfica",
      rating: 4.9,
      image: "https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=600",
      summary: "A placa gráfica mais poderosa do mercado para gaming 4K e criação de conteúdo.",
      likes: 756,
      views: 31200,
      pros: ["Performance 4K", "DLSS 3.0", "Ray tracing superior"],
      cons: ["Consumo alto", "Preço elevado"],
      slug: "review-rtx-4090"
    }
  ]

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
    <section id="reviews" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              Reviews & Avaliações
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Análises detalhadas dos produtos mais aguardados do mercado tecnológico
          </p>
        </motion.div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={review.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group"
            >
              <div className="bg-gray-900 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1">
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={review.image}
                    alt={review.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-500/80 backdrop-blur-sm px-3 py-1 rounded-full text-white text-sm font-medium">
                      {review.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Title & Rating */}
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                      {review.title}
                    </h3>
                    <div className="flex items-center space-x-1 ml-4">
                      {renderStars(review.rating)}
                      <span className="text-yellow-400 font-semibold ml-1">{review.rating}</span>
                    </div>
                  </div>

                  {/* Summary */}
                  <p className="text-gray-400 mb-4 leading-relaxed">
                    {review.summary}
                  </p>

                  {/* Pros & Cons */}
                  <div className="space-y-3 mb-4">
                    <div>
                      <h4 className="text-green-400 font-medium mb-1">Prós:</h4>
                      <ul className="text-sm text-gray-400 space-y-1">
                        {review.pros.map((pro, i) => (
                          <li key={i} className="flex items-center">
                            <span className="w-1 h-1 bg-green-400 rounded-full mr-2" />
                            {pro}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-red-400 font-medium mb-1">Contras:</h4>
                      <ul className="text-sm text-gray-400 space-y-1">
                        {review.cons.map((con, i) => (
                          <li key={i} className="flex items-center">
                            <span className="w-1 h-1 bg-red-400 rounded-full mr-2" />
                            {con}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-700">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1 text-gray-400">
                        <ThumbsUp className="w-4 h-4" />
                        <span className="text-sm">{review.likes}</span>
                      </div>
                      <div className="flex items-center space-x-1 text-gray-400">
                        <Eye className="w-4 h-4" />
                        <span className="text-sm">{review.views.toLocaleString()}</span>
                      </div>
                    </div>
                    
                    <Link to={`/review/${review.slug}`}>
                      <motion.button
                        className="text-blue-400 hover:text-blue-300 font-medium text-sm transition-colors"
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

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Link to="/reviews">
            <motion.button
              className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 px-8 py-4 rounded-full text-white font-semibold text-lg shadow-xl hover:shadow-blue-500/25 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Ver Todos os Reviews
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default ReviewsSection
