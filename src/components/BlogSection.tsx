
import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Calendar, User, ArrowRight, Clock } from 'lucide-react'

const BlogSection: React.FC = () => {
  const articles = [
    {
      title: "O Futuro dos Jogos com Ray Tracing",
      excerpt: "Como a tecnologia de ray tracing está revolucionando os gráficos dos games e criando experiências visuais nunca vistas antes.",
      image: "https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=600",
      author: "Carlos Tech",
      date: "15 Jan 2024",
      readTime: "5 min",
      category: "Gaming",
      slug: "futuro-jogos-ray-tracing"
    },
    {
      title: "Inteligência Artificial nos Smartphones",
      excerpt: "Descubra como a IA está transformando a fotografia móvel e criando recursos inteligentes que facilitam nosso dia a dia.",
      image: "https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=600",
      author: "Ana Silva",
      date: "12 Jan 2024", 
      readTime: "7 min",
      category: "Mobile",
      slug: "inteligencia-artificial-smartphones"
    },
    {
      title: "Processadores do Futuro: Arquitetura 3nm",
      excerpt: "Análise completa da nova geração de chips com arquitetura 3nm e como eles estão redefinindo a performance computacional.",
      image: "https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=600",
      author: "João Hardware",
      date: "10 Jan 2024",
      readTime: "6 min",
      category: "Hardware",
      slug: "processadores-futuro-3nm"
    },
    {
      title: "Realidade Virtual: A Nova Fronteira",
      excerpt: "Explorando os avanços em VR e como essa tecnologia está criando novas possibilidades para entretenimento e trabalho.",
      image: "https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=600",
      author: "Maria VR",
      date: "08 Jan 2024",
      readTime: "8 min",
      category: "VR/AR",
      slug: "realidade-virtual-nova-fronteira"
    },
    {
      title: "Computação Quântica: Revolução Silenciosa",
      excerpt: "Como os computadores quânticos estão se preparando para resolver problemas impossíveis para máquinas tradicionais.",
      image: "https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=600",
      author: "Dr. Quantum",
      date: "05 Jan 2024",
      readTime: "10 min",
      category: "Ciência",
      slug: "computacao-quantica-revolucao"
    },
    {
      title: "Sustentabilidade na Tecnologia",
      excerpt: "Iniciativas verdes das big techs e como a indústria está se adaptando para um futuro mais sustentável.",
      image: "https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg?auto=compress&cs=tinysrgb&w=600",
      author: "Green Tech",
      date: "03 Jan 2024",
      readTime: "4 min",
      category: "Sustentabilidade",
      slug: "sustentabilidade-tecnologia"
    }
  ]

  return (
    <section className="py-20 bg-gray-800">
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
              Blog & Artigos
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Insights profundos sobre as tendências tecnológicas que estão moldando o futuro
          </p>
        </motion.div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <motion.article
              key={article.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-gray-900 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1">
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-500/80 backdrop-blur-sm px-3 py-1 rounded-full text-white text-sm font-medium">
                      {article.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Meta Info */}
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

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors leading-tight">
                    {article.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-gray-400 mb-4 leading-relaxed">
                    {article.excerpt}
                  </p>

                  {/* Read More */}
                  <Link to={`/artigo/${article.slug}`}>
                    <motion.button
                      className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 font-medium transition-colors group"
                      whileHover={{ x: 5 }}
                    >
                      <span>Ler Artigo</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </motion.button>
                  </Link>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 to-blue-600/0 group-hover:from-blue-500/5 group-hover:to-blue-600/5 transition-all duration-500 pointer-events-none rounded-2xl" />
              </div>
            </motion.article>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Link to="/noticias">
            <motion.button
              className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 px-8 py-4 rounded-full text-white font-semibold text-lg shadow-xl hover:shadow-blue-500/25 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Ver Todas as Notícias
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default BlogSection
