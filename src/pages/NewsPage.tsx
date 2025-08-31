
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Calendar, Clock, Eye, Tag, Search } from 'lucide-react'
import { Link } from 'react-router-dom'

const NewsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')

  const news = [
    {
      id: 1,
      title: "Apple anuncia iPhone 16 com IA revolucionária",
      excerpt: "Novo iPhone promete recursos de inteligência artificial que vão transformar a experiência mobile.",
      image: "https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Mobile",
      date: "20 Jan 2025",
      readTime: "5 min",
      views: 15420,
      slug: "iphone-16-ia-revolucionaria"
    },
    {
      id: 2,
      title: "NVIDIA RTX 5090 quebra recordes de performance",
      excerpt: "Nova geração de placas gráficas promete 40% mais performance em ray tracing e DLSS 4.0.",
      image: "https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Hardware",
      date: "19 Jan 2025",
      readTime: "7 min",
      views: 22350,
      slug: "nvidia-rtx-5090-recordes"
    },
    {
      id: 3,
      title: "PlayStation 6 confirmado para 2027",
      excerpt: "Sony revela primeiros detalhes do próximo console que promete gráficos 8K nativos.",
      image: "https://images.pexels.com/photos/3945667/pexels-photo-3945667.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Gaming",
      date: "18 Jan 2025",
      readTime: "6 min",
      views: 31200,
      slug: "playstation-6-confirmado-2027"
    },
    {
      id: 4,
      title: "Meta Quest 4 com resolução 8K por olho",
      excerpt: "Novo headset VR da Meta promete experiência visual sem precedentes e tracking aprimorado.",
      image: "https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "VR/AR",
      date: "17 Jan 2025",
      readTime: "4 min",
      views: 18750,
      slug: "meta-quest-4-8k"
    },
    {
      id: 5,
      title: "ChatGPT 5 será lançado em março",
      excerpt: "OpenAI confirma nova versão com capacidades multimodais avançadas e raciocínio aprimorado.",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "IA",
      date: "16 Jan 2025",
      readTime: "8 min",
      views: 45600,
      slug: "chatgpt-5-marco-2025"
    },
    {
      id: 6,
      title: "Samsung Galaxy S25 Ultra com câmera de 200MP",
      excerpt: "Novo flagship da Samsung promete revolução na fotografia móvel com sensor inédito.",
      image: "https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Mobile",
      date: "15 Jan 2025",
      readTime: "5 min",
      views: 28900,
      slug: "galaxy-s25-ultra-200mp"
    }
  ]

  const categories = ['all', 'Mobile', 'Hardware', 'Gaming', 'VR/AR', 'IA']

  const filteredNews = news.filter(item => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

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
            <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              Últimas Notícias
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Fique por dentro das principais novidades do mundo da tecnologia
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Category Filter */}
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
                  {category === 'all' ? 'Todas' : category}
                </button>
              ))}
            </div>

            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Buscar notícias..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 w-64"
              />
            </div>
          </div>
        </motion.div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredNews.map((item, index) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <Link to={`/noticia/${item.slug}`}>
                <div className="bg-gray-800 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="bg-blue-500/80 backdrop-blur-sm px-3 py-1 rounded-full text-white text-sm font-medium flex items-center">
                        <Tag className="w-3 h-3 mr-1" />
                        {item.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Meta Info */}
                    <div className="flex items-center space-x-4 text-sm text-gray-400 mb-3">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{item.date}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{item.readTime}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Eye className="w-4 h-4" />
                        <span>{item.views.toLocaleString()}</span>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors leading-tight">
                      {item.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-gray-400 leading-relaxed">
                      {item.excerpt}
                    </p>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>

        {/* No Results */}
        {filteredNews.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <p className="text-gray-400 text-lg">
              Nenhuma notícia encontrada para os filtros selecionados.
            </p>
          </motion.div>
        )}
      </div>
    </div>
  )
}

export default NewsPage
