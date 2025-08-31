
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Send, 
  Mail, 
  MessageSquare, 
  User, 
  Phone, 
  MapPin, 
  Clock,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Linkedin
} from 'lucide-react'
import toast from 'react-hot-toast'

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    type: 'general'
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Por favor, preencha todos os campos obrigatórios')
      return
    }

    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    toast.success('Mensagem enviada com sucesso! Retornaremos em breve.')
    setFormData({ name: '', email: '', subject: '', message: '', type: 'general' })
    setIsSubmitting(false)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'contato@techfuture.com',
      description: 'Resposta em até 24 horas'
    },
    {
      icon: Phone,
      title: 'Telefone',
      value: '+55 (11) 99999-9999',
      description: 'Seg-Sex: 9h às 18h'
    },
    {
      icon: MapPin,
      title: 'Endereço',
      value: 'São Paulo, SP - Brasil',
      description: 'Avenida Paulista, 1000'
    },
    {
      icon: Clock,
      title: 'Horário',
      value: 'Segunda a Sexta',
      description: '9:00 - 18:00 (GMT-3)'
    }
  ]

  const socialLinks = [
    { icon: Facebook, name: 'Facebook', url: '#', color: 'hover:text-blue-500' },
    { icon: Twitter, name: 'Twitter', url: '#', color: 'hover:text-blue-400' },
    { icon: Instagram, name: 'Instagram', url: '#', color: 'hover:text-pink-500' },
    { icon: Youtube, name: 'YouTube', url: '#', color: 'hover:text-red-500' },
    { icon: Linkedin, name: 'LinkedIn', url: '#', color: 'hover:text-blue-600' }
  ]

  const faqItems = [
    {
      question: 'Como posso sugerir um produto para review?',
      answer: 'Envie um email para reviews@techfuture.com com detalhes do produto e justificativa.'
    },
    {
      question: 'Vocês fazem parcerias com marcas?',
      answer: 'Sim! Entre em contato através do formulário selecionando "Parceria" como tipo.'
    },
    {
      question: 'Quanto tempo demora para responder?',
      answer: 'Respondemos 95% dos emails em menos de 24 horas úteis.'
    },
    {
      question: 'Posso colaborar como escritor?',
      answer: 'Adoraríamos conhecer seu trabalho! Envie amostras para colaboracao@techfuture.com.'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-900 pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Entre em Contato
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Tem alguma dúvida, sugestão ou quer colaborar conosco? 
            Estamos aqui para ajudar e adoraríamos ouvir de você!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-2"
          >
            <div className="bg-gray-800 rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-white mb-6">Envie sua Mensagem</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Type Selection */}
                <div>
                  <label htmlFor="type" className="block text-sm font-medium text-gray-300 mb-2">
                    Tipo de Contato
                  </label>
                  <select
                    id="type"
                    name="type"
                    value={formData.type}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  >
                    <option value="general">Geral</option>
                    <option value="review">Sugestão de Review</option>
                    <option value="partnership">Parceria</option>
                    <option value="collaboration">Colaboração</option>
                    <option value="technical">Suporte Técnico</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name Field */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Nome Completo *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full pl-12 pr-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                        placeholder="Seu nome completo"
                      />
                    </div>
                  </div>

                  {/* Email Field */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full pl-12 pr-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                        placeholder="seu@email.com"
                      />
                    </div>
                  </div>
                </div>

                {/* Subject Field */}
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                    Assunto
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="Resumo da sua mensagem"
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Mensagem *
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full pl-12 pr-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                      placeholder="Escreva sua mensagem detalhada aqui..."
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 disabled:from-gray-600 disabled:to-gray-700 px-6 py-4 rounded-lg text-white font-semibold flex items-center justify-center space-x-2 shadow-xl hover:shadow-blue-500/25 transition-all duration-300 disabled:cursor-not-allowed"
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      <span>Enviando...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Enviar Mensagem</span>
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Contact Info Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            {/* Contact Information */}
            <div className="bg-gray-800 rounded-2xl p-6">
              <h3 className="text-2xl font-bold text-white mb-6">Informações de Contato</h3>
              
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <h4 className="text-white font-medium">{info.title}</h4>
                      <p className="text-blue-400 font-medium">{info.value}</p>
                      <p className="text-gray-400 text-sm">{info.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-gray-800 rounded-2xl p-6">
              <h3 className="text-2xl font-bold text-white mb-6">Redes Sociais</h3>
              
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    className={`w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center text-gray-400 transition-colors ${social.color}`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Newsletter */}
            <div className="bg-gradient-to-br from-blue-500/10 to-purple-600/10 border border-blue-500/20 rounded-2xl p-6">
              <h3 className="text-2xl font-bold text-white mb-4">Newsletter</h3>
              <p className="text-gray-300 mb-4">
                Receba as últimas novidades do mundo tech diretamente no seu email
              </p>
              
              <div className="flex flex-col gap-3">
                <input
                  type="email"
                  placeholder="Seu melhor email"
                  className="px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <motion.button
                  className="bg-blue-500 hover:bg-blue-600 px-4 py-3 rounded-lg text-white font-medium transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Assinar Newsletter
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-16"
        >
          <div className="bg-gray-800 rounded-2xl p-8">
            <h3 className="text-3xl font-bold text-white mb-8 text-center">Perguntas Frequentes</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {faqItems.map((faq, index) => (
                <div key={index} className="bg-gray-700 rounded-lg p-6">
                  <h4 className="text-white font-semibold mb-3">{faq.question}</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { number: '< 24h', label: 'Tempo de Resposta' },
              { number: '95%', label: 'Taxa de Satisfação' },
              { number: '10k+', label: 'Mensagens Respondidas' },
              { number: '24/7', label: 'Suporte Online' }
            ].map((stat, index) => (
              <div key={index} className="bg-gray-800 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">{stat.number}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default ContactPage
