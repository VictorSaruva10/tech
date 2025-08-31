
import React from 'react'
import { motion } from 'framer-motion'
import { ZoomIn, Play } from 'lucide-react'

const GallerySection: React.FC = () => {
  const galleryItems = [
    {
      image: "https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Gaming Setup",
      category: "Gaming",
      type: "image"
    },
    {
      image: "https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Smartphone Pro",
      category: "Mobile",
      type: "image"
    },
    {
      image: "https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Hardware Premium",
      category: "Hardware",
      type: "video"
    },
    {
      image: "https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Tech Workspace",
      category: "Workspace",
      type: "image"
    },
    {
      image: "https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "VR Experience",
      category: "VR/AR",
      type: "video"
    },
    {
      image: "https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "AI Computing",
      category: "AI",
      type: "image"
    }
  ]

  return (
    <section className="py-20 bg-gray-900">
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
              Galeria Tecnológica
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Uma coleção visual dos produtos e inovações mais impressionantes do mundo tech
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl bg-gray-800 aspect-square"
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-between p-6 opacity-0 group-hover:opacity-100 transition-all duration-300">
                {/* Category Badge */}
                <div className="self-start">
                  <span className="bg-blue-500/80 backdrop-blur-sm px-3 py-1 rounded-full text-white text-sm font-medium">
                    {item.category}
                  </span>
                </div>

                {/* Bottom Content */}
                <div className="space-y-3">
                  <h3 className="text-white font-bold text-lg">{item.title}</h3>
                  
                  <div className="flex items-center justify-between">
                    <motion.button
                      className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm hover:bg-white/30 px-4 py-2 rounded-full text-white transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {item.type === 'video' ? (
                        <>
                          <Play className="w-4 h-4" />
                          <span className="text-sm">Play</span>
                        </>
                      ) : (
                        <>
                          <ZoomIn className="w-4 h-4" />
                          <span className="text-sm">Ver</span>
                        </>
                      )}
                    </motion.button>

                    {item.type === 'video' && (
                      <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                        <Play className="w-4 h-4 text-white fill-current" />
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Hover Border Effect */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-400/50 rounded-2xl transition-colors duration-300" />
            </motion.div>
          ))}
        </div>

        {/* Load More Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.button
            className="border-2 border-blue-400 hover:border-blue-300 hover:bg-blue-500/10 px-8 py-4 rounded-full text-blue-300 hover:text-white font-semibold text-lg transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Carregar Mais
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default GallerySection
