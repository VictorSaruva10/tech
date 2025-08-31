
import React from 'react'
import { motion } from 'framer-motion'
import { Cpu, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react'

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  const footerSections = [
    {
      title: 'Categorias',
      links: [
        { name: 'Gaming', href: '/gaming' },
        { name: 'Mobile', href: '/mobile' },
        { name: 'Hardware', href: '/hardware' },
        { name: 'VR/AR', href: '/vr' }
      ]
    },
    {
      title: 'Conteúdo',
      links: [
        { name: 'Notícias', href: '/noticias' },
        { name: 'Lançamentos', href: '/lancamentos' },
        { name: 'Reviews', href: '/reviews' },
        { name: 'IA', href: '/ai' }
      ]
    },
    {
      title: 'Empresa',
      links: [
        { name: 'Sobre Nós', href: '/sobre' },
        { name: 'Contato', href: '/contato' },
        { name: 'Política de Privacidade', href: '/privacidade' },
        { name: 'Termos de Uso', href: '/termos' }
      ]
    }
  ]

  const socialLinks = [
    { icon: Facebook, href: '#', name: 'Facebook' },
    { icon: Twitter, href: '#', name: 'Twitter' },
    { icon: Instagram, href: '#', name: 'Instagram' },
    { icon: Youtube, href: '#', name: 'YouTube' }
  ]

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center"
              >
                <Cpu className="w-6 h-6 text-white" />
              </motion.div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                Tech Blog
              </span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Seu portal de tecnologia com as últimas novidades em games, celulares, 
              computadores e inovações digitais. O futuro da tecnologia está aqui.
            </p>
            
            {/* Redes Sociais */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon
                return (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-600 transition-all duration-200"
                    aria-label={social.name}
                  >
                    <IconComponent className="w-5 h-5" />
                  </motion.a>
                )
              })}
            </div>
          </div>

          {/* Links de Navegação */}
          {footerSections.map((section, index) => (
            <div key={section.title}>
              <h3 className="text-white font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Informações de Contato */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="flex items-center space-x-3 text-gray-400">
              <Mail className="w-5 h-5 text-blue-400" />
              <span>contato@techblog.com</span>
            </div>
            <div className="flex items-center space-x-3 text-gray-400">
              <Phone className="w-5 h-5 text-blue-400" />
              <span>+55 (11) 9999-9999</span>
            </div>
            <div className="flex items-center space-x-3 text-gray-400">
              <MapPin className="w-5 h-5 text-blue-400" />
              <span>São Paulo, Brasil</span>
            </div>
          </div>

          {/* Copyright */}
          <div className="flex flex-col md:flex-row justify-between items-center pt-6 border-t border-gray-800">
            <p className="text-gray-400 text-sm">
              © {currentYear} Tech Blog. Todos os direitos reservados.
            </p>
            <p className="text-gray-400 text-sm mt-2 md:mt-0">
              Feito com ❤️ para os amantes da tecnologia
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
