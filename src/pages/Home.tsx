
import React from 'react'
import HeroSection from '../components/HeroSection'
import FeaturesSection from '../components/FeaturesSection'
import ReviewsSection from '../components/ReviewsSection'
import GallerySection from '../components/GallerySection'
import BlogSection from '../components/BlogSection'
import ContactSection from '../components/ContactSection'

const Home: React.FC = () => {
  return (
    <main>
      <HeroSection />
      <FeaturesSection />
      <ReviewsSection />
      <GallerySection />
      <BlogSection />
      <ContactSection />
    </main>
  )
}

export default Home
