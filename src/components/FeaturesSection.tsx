
import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Gamepad2, Smartphone, Cpu, ArrowRight } from 'lucide-react'

const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: <Gamepad2 className="w-8 h-8" />,
      title: "Gaming Revolution",
      description: "Últimas novidades do mercado gamer, consoles next-gen e jogos que estão revolucionando a indústria.",
      image: "https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=800",
      color: "from-purple-500 to-pink-500",
      link: "/gaming"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Smartphones do Futuro",
      description: "Novos lançamentos, tecnologias inovadoras e análises detalhadas dos melhores dispositivos móveis.",
      image: "https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=800",
      color: "from-blue-500 to-cyan-500",
      link: "/mobile"
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "Hardware & IA",
      description: "Tendências em processadores, placas gráficas e como a inteligência artificial está mudando tudo.",
      image: "https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=800",
      color: "from-green-500 to-emerald-500",
      link: "/hardware"
    }
  ]

  return (
    <section id="news" className="py-20 bg-gray-900">
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
              Destaques Tecnológicos
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Fique por dentro das últimas novidades e tendências que estão moldando o futuro da tecnologia
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group"
            >
              <div className="relative bg-gray-800 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${feature.color} opacity-60`} />
                  
                  {/* Icon */}
                  <div className="absolute top-4 left-4">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center text-white">
                      {feature.icon}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 mb-4 leading-relaxed">
                    {feature.description}
                  </p>
                  
                  <Link to={feature.link}>
                    <motion.button
                      className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 font-medium transition-colors group"
                      whileHover={{ x: 5 }}
                    >
                      <span>Ler Mais</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </motion.button>
                  </Link>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 to-blue-600/0 group-hover:from-blue-500/10 group-hover:to-blue-600/10 transition-all duration-500 pointer-events-none" />
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
          <Link to="/gaming">
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

export default FeaturesSection
