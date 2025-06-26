import React from 'react'
import { motion } from 'framer-motion'
import { BookOpen, Star, Users, Award, ChevronDown } from 'lucide-react'

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const stats = [
    { icon: Users, number: '500+', label: 'طالب وطالبة' },
    { icon: BookOpen, number: '15+', label: 'سنة خبرة' },
    { icon: Award, number: '100+', label: 'حافظ للقرآن' },
    { icon: Star, number: '4.9', label: 'تقييم الطلاب' }
  ]

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-amber-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Profile Image */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 1, type: "spring", bounce: 0.5 }}
            className="mb-8"
          >
            <div className="relative w-40 h-40 mx-auto">
              <div className="w-full h-full bg-gradient-to-br from-blue-600 via-blue-700 to-amber-600 rounded-full shadow-2xl flex items-center justify-center relative overflow-hidden">
                <BookOpen className="w-20 h-20 text-white" />
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/10 to-transparent"></div>
              </div>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-4 border-2 border-dashed border-amber-400 rounded-full"
              ></motion.div>
            </div>
          </motion.div>

          {/* Main Title */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mb-8"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-4 font-amiri">
              <span className="bg-gradient-to-r from-blue-600 via-blue-700 to-amber-600 bg-clip-text text-transparent">
                الأستاذ عاصم فايد
              </span>
            </h1>
            <div className="flex items-center justify-center space-x-2 rtl:space-x-reverse mb-6">
              <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-amber-500 rounded-full"></div>
              <Star className="w-6 h-6 text-amber-500" />
              <div className="h-1 w-20 bg-gradient-to-r from-amber-500 to-blue-600 rounded-full"></div>
            </div>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-cairo">
              معلم ومحفظ القرآن الكريم • إمام وخطيب • خريج الأزهر الشريف
            </p>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <motion.button
              onClick={() => scrollToSection('about')}
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full font-cairo font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              تعرف علي أكثر
            </motion.button>
            <motion.button
              onClick={() => scrollToSection('contact')}
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(245, 158, 11, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-amber-500 text-amber-600 rounded-full font-cairo font-semibold hover:bg-amber-500 hover:text-white transition-all duration-300"
            >
              تواصل معي
            </motion.button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2 + index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-blue-100"
              >
                <stat.icon className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                <div className="text-2xl font-bold text-gray-800 font-cairo">{stat.number}</div>
                <div className="text-sm text-gray-600 font-cairo">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="cursor-pointer"
            onClick={() => scrollToSection('quran-verse')}
          >
            <ChevronDown className="w-8 h-8 text-blue-600 mx-auto" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero