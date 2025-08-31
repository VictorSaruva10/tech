
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import Header from './components/Header'
import Home from './pages/Home'
import Footer from './components/Footer'
import GamingPage from './pages/GamingPage'
import MobilePage from './pages/MobilePage'
import HardwarePage from './pages/HardwarePage'
import VRPage from './pages/VRPage'
import AIPage from './pages/AIPage'
import SustainabilityPage from './pages/SustainabilityPage'
import ArticlePage from './pages/ArticlePage'
import NewsPage from './pages/NewsPage'
import LaunchesPage from './pages/LaunchesPage'
import ReviewsPage from './pages/ReviewsPage'
import ContactPage from './pages/ContactPage'

function App() {
  return (
    <>
      <Toaster 
        position="top-right"
        toastOptions={{
          duration: 4000,
          style: { 
            background: '#1A3D5A', 
            color: '#fff',
            borderRadius: '12px',
            border: '1px solid #4FA3D1'
          },
          success: { style: { background: '#4FA3D1' } },
          error: { style: { background: '#ef4444' } }
        }}
      />
      
      <Router>
        <div className="min-h-screen bg-gray-900 text-white">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gaming" element={<GamingPage />} />
            <Route path="/mobile" element={<MobilePage />} />
            <Route path="/hardware" element={<HardwarePage />} />
            <Route path="/vr" element={<VRPage />} />
            <Route path="/ai" element={<AIPage />} />
            <Route path="/sustentabilidade" element={<SustainabilityPage />} />
            <Route path="/artigo/:slug" element={<ArticlePage />} />
            <Route path="/noticias" element={<NewsPage />} />
            <Route path="/noticia/:slug" element={<ArticlePage />} />
            <Route path="/lancamentos" element={<LaunchesPage />} />
            <Route path="/produto/:slug" element={<ArticlePage />} />
            <Route path="/reviews" element={<ReviewsPage />} />
            <Route path="/review/:slug" element={<ArticlePage />} />
            <Route path="/contato" element={<ContactPage />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </>
  )
}

export default App
