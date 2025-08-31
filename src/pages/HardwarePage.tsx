
import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowLeft, Calendar, User, Clock, Cpu, HardDrive, Zap } from 'lucide-react'

const HardwarePage: React.FC = () => {
  const hardwareArticles = [
    {
      title: "Processadores do Futuro: Arquitetura 3nm",
      excerpt: "Análise completa da nova geração de chips e como eles estão redefinindo a performance",
      image: "https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=800",
      author: "João Hardware",
      date: "15 Jan 2024",
      readTime: "6 min",
      slug: "processadores-futuro-3nm"
    },
    {
      title: "RTX 5090: A Placa Gráfica Mais Poderosa",
      excerpt: "Review completo da nova GPU flagship da NVIDIA para gamers e criadores",
      image: "https://images.pexels.com/photos/2399840/pexels-photo-2399840.jpeg?auto=compress&cs=tinysrgb&w=800",
      author: "GPU Master",
      date: "12 Jan 2024",
      readTime: "8 min",
      slug: "rtx-5090-review"
    },
    {
      title: "SSD vs HDD: Qual Escolher em 2024?",
      excerpt: "Comparativo completo entre tecnologias de armazenamento",
      image: "https://images.pexels.com/photos/2582928/pexels-photo-2582928.jpeg?auto=compress&cs=tinysrgb&w=800",
      author: "Storage Pro",
      date: "10 Jan 2024",
      readTime: "5 min",
      slug: "ssd-vs-hdd-2024"
    }
  ]

  const hardwareStats = [
    { icon: <Cpu className="w-6 h-6" />, label: "Transistores/Chip", value: "100B+" },
    { icon: <Zap className="w-6 h-6" />, label: "Frequência Max", value: "6.0GHz" },
    { icon: <HardDrive className="w-6 h-6" />, label: "Velocidade SSD", value: "12GB/s" }
  ]

  return (
    <div className="min-h-screen bg-gray-900 pt-20">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <Link 
          to="/" 
          className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Voltar ao Início</span>
        </Link>
      </div>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Hardware"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-green-900/80 to-gray-900/90"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-green-600 bg-clip-text text-transparent">
                Hardware & IA
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Explore o mundo dos processadores, placas gráficas e como a inteligência artificial está revolucionando o hardware.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {hardwareStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-green-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <div className="text-green-400">
                    {stat.icon}
                  </div>
                </div>
                <h3 className="text-3xl font-bold text-white mb-2">{stat.value}</h3>
                <p className="text-gray-400">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                Tecnologia Hardware
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Reviews, análises e novidades sobre os componentes que movem a tecnologia
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hardwareArticles.map((article, index) => (
              <motion.article
                key={article.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="group"
              >
                <div className="bg-gray-800 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
                  </div>

                  <div className="p-6">
                    <div className="flex items-center space-x-4 text-sm text-gray-400 mb-3">
                      <div className="flex items-center space-x-1">
                        <User className="w-4 h-4" />
                        <span>{article.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{article.date}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{article.readTime}</span>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-green-400 transition-colors">
                      {article.title}
                    </h3>

                    <p className="text-gray-400 mb-4 leading-relaxed">
                      {article.excerpt}
                    </p>

                    <Link to={`/artigo/${article.slug}`}>
                      <motion.button
                        className="inline-flex items-center space-x-2 text-green-400 hover:text-green-300 font-medium transition-colors"
                        whileHover={{ x: 5 }}
                      >
                        <span>Ler Artigo</span>
                        <ArrowLeft className="w-4 h-4 rotate-180 group-hover:translate-x-1 transition-transform" />
                      </motion.button>
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default HardwarePage
