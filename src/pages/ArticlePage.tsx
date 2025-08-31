
import React from 'react'
import { motion } from 'framer-motion'
import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, Calendar, User, Clock, Share2, Heart, Bookmark } from 'lucide-react'

const ArticlePage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>()

  // Simulated article data based on slug
  const getArticleData = (slug: string) => {
    const articles: Record<string, any> = {
      'realidade-virtual-nova-fronteira': {
        title: "Realidade Virtual: A Nova Fronteira do Entretenimento",
        author: "Maria VR",
        date: "08 Jan 2024",
        readTime: "8 min",
        category: "VR/AR",
        image: "https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=1200",
        content: `
          <h2>O Futuro Imersivo Chegou</h2>
          <p>A realidade virtual não é mais ficção científica. Com headsets cada vez mais acessíveis e experiências incrivelmente realistas, estamos testemunhando uma revolução na forma como consumimos entretenimento, trabalhamos e nos conectamos com outros.</p>
          
          <h3>Tecnologias Emergentes</h3>
          <p>Os novos dispositivos VR incorporam tecnologias como rastreamento ocular, feedback háptico avançado e resolução 8K por olho, criando experiências que borram as linhas entre o real e o virtual.</p>
          
          <h3>Aplicações Além dos Games</h3>
          <p>Enquanto os jogos continuam sendo o principal motor da VR, vemos crescimento em áreas como educação, medicina, arquitetura e reuniões corporativas. A pandemia acelerou a adoção de espaços virtuais para trabalho colaborativo.</p>
          
          <h3>Desafios e Oportunidades</h3>
          <p>Apesar do progresso impressionante, ainda enfrentamos desafios como motion sickness, peso dos dispositivos e custo. No entanto, as oportunidades são enormes, com o mercado de VR projetado para atingir $87 bilhões até 2030.</p>
        `
      },
      'futuro-jogos-ray-tracing': {
        title: "O Futuro dos Jogos com Ray Tracing",
        author: "Carlos Tech",
        date: "15 Jan 2024",
        readTime: "5 min",
        category: "Gaming",
        image: "https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=1200",
        content: `
          <h2>Ray Tracing: Revolução Gráfica</h2>
          <p>O ray tracing representa o maior avanço em gráficos de jogos da última década. Esta tecnologia simula o comportamento real da luz, criando reflexos, sombras e iluminação global com realismo fotográfico.</p>
          
          <h3>Como Funciona</h3>
          <p>Diferente da rasterização tradicional, o ray tracing traça o caminho de cada raio de luz pixel por pixel, calculando como a luz interage com superfícies, criando efeitos visuais impossíveis com técnicas anteriores.</p>
          
          <h3>Hardware Necessário</h3>
          <p>As GPUs modernas da NVIDIA (RTX) e AMD (RDNA) incluem cores dedicados para ray tracing, tornando esta tecnologia acessível para gamers mainstream pela primeira vez.</p>
        `
      },
      'inteligencia-artificial-smartphones': {
        title: "Inteligência Artificial nos Smartphones",
        author: "Ana Silva",
        date: "12 Jan 2024",
        readTime: "7 min",
        category: "Mobile",
        image: "https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=1200",
        content: `
          <h2>IA no Bolso</h2>
          <p>Os smartphones modernos são verdadeiras centrais de inteligência artificial, processando milhões de operações de IA localmente para melhorar fotos, traduzir idiomas e personalizar a experiência do usuário.</p>
          
          <h3>Fotografia Computacional</h3>
          <p>A IA revolucionou a fotografia mobile com recursos como modo noturno, remoção de fundo em tempo real, e aprimoramento automático de imagens que rivalizam com câmeras profissionais.</p>
        `
      }
    }

    return articles[slug || ''] || {
      title: "Artigo não encontrado",
      author: "TechFuture",
      date: "16 Jan 2024",
      readTime: "1 min",
      category: "Erro",
      image: "https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg?auto=compress&cs=tinysrgb&w=1200",
      content: "<p>Este artigo não foi encontrado. <a href='/'>Volte ao início</a> para explorar outros conteúdos.</p>"
    }
  }

  const article = getArticleData(slug || '')

  return (
    <div className="min-h-screen bg-gray-900 pt-20">
      {/* Breadcrumb */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <Link 
          to="/" 
          className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Voltar ao Início</span>
        </Link>
      </div>

      {/* Article Header */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Category Badge */}
          <div className="mb-6">
            <span className="bg-blue-500/20 text-blue-400 px-4 py-2 rounded-full text-sm font-medium">
              {article.category}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            {article.title}
          </h1>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center space-x-6 text-gray-400 mb-8">
            <div className="flex items-center space-x-2">
              <User className="w-5 h-5" />
              <span>{article.author}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Calendar className="w-5 h-5" />
              <span>{article.date}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-5 h-5" />
              <span>{article.readTime}</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-4 mb-8">
            <button className="flex items-center space-x-2 bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-lg transition-colors">
              <Heart className="w-5 h-5 text-red-400" />
              <span className="text-white">Curtir</span>
            </button>
            <button className="flex items-center space-x-2 bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-lg transition-colors">
              <Bookmark className="w-5 h-5 text-blue-400" />
              <span className="text-white">Salvar</span>
            </button>
            <button className="flex items-center space-x-2 bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-lg transition-colors">
              <Share2 className="w-5 h-5 text-green-400" />
              <span className="text-white">Compartilhar</span>
            </button>
          </div>

          {/* Featured Image */}
          <div className="relative mb-12 rounded-2xl overflow-hidden">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/30 to-transparent" />
          </div>

          {/* Article Content */}
          <div 
            className="prose prose-lg prose-invert max-w-none mb-12"
            dangerouslySetInnerHTML={{ __html: article.content }}
            style={{
              color: '#e5e7eb',
              lineHeight: '1.8'
            }}
          />

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            <span className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm">
              #{article.category.toLowerCase()}
            </span>
            <span className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm">
              #tecnologia
            </span>
            <span className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm">
              #inovacao
            </span>
          </div>

          {/* Author Bio */}
          <div className="bg-gray-800 rounded-2xl p-6 mb-12">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                {article.author.charAt(0)}
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">{article.author}</h3>
                <p className="text-gray-400">
                  Especialista em tecnologia com mais de 10 anos de experiência cobrindo as últimas tendências e inovações do setor.
                </p>
              </div>
            </div>
          </div>

          {/* Related Articles */}
          <div className="border-t border-gray-800 pt-12">
            <h3 className="text-2xl font-bold text-white mb-8">Artigos Relacionados</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link to="/artigo/futuro-jogos-ray-tracing" className="group">
                <div className="bg-gray-800 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300">
                  <img
                    src="https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=400"
                    alt="Ray Tracing"
                    className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="p-4">
                    <h4 className="text-white font-semibold group-hover:text-blue-400 transition-colors">
                      O Futuro dos Jogos com Ray Tracing
                    </h4>
                  </div>
                </div>
              </Link>
              
              <Link to="/artigo/inteligencia-artificial-smartphones" className="group">
                <div className="bg-gray-800 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300">
                  <img
                    src="https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=400"
                    alt="IA Smartphones"
                    className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="p-4">
                    <h4 className="text-white font-semibold group-hover:text-blue-400 transition-colors">
                      Inteligência Artificial nos Smartphones
                    </h4>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </motion.div>
      </article>
    </div>
  )
}

export default ArticlePage
