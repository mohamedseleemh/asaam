import React from 'react'
import { motion } from 'framer-motion'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Achievements from './components/Achievements'
import Testimonials from './components/Testimonials'
import QuranVerse from './components/QuranVerse'
import Contact from './components/Contact'
import Footer from './components/Footer'
import FloatingElements from './components/FloatingElements'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-amber-50 relative overflow-x-hidden">
      <FloatingElements />
      <Header />
      <main>
        <Hero />
        <QuranVerse />
        <About />
        <Services />
        <Achievements />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App