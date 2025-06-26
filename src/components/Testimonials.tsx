import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, Quote, ChevronLeft, ChevronRight, User } from 'lucide-react'

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      name: 'أحمد محمد',
      role: 'طالب - حافظ للقرآن',
      content: 'الأستاذ عاصم معلم متميز، ساعدني في حفظ القرآن الكريم بطريقة سهلة ومبسطة. أسلوبه في التعليم رائع ومشجع.',
      rating: 5,
      image: '👨‍🎓'
    },
    {
      name: 'فاطمة أحمد',
      role: 'طالبة - متخصصة في التجويد',
      content: 'تعلمت التجويد والتلاوة الصحيحة مع الأستاذ عاصم. صبره وطريقته في الشرح جعلت التعلم ممتعاً وسهلاً.',
      rating: 5,
      image: '👩‍🎓'
    },
    {
      name: 'محمد عبدالله',
      role: 'ولي أمر',
      content: 'ابني تحسن كثيراً في تلاوة القرآن بعد التحاقه بدروس الأستاذ عاصم. أنصح كل الآباء بهذا المعلم المتميز.',
      rating: 5,
      image: '👨‍💼'
    },
    {
      name: 'عائشة محمود',
      role: 'طالبة - دراسات إسلامية',
      content: 'الأستاذ عاصم لا يعلم القرآن فقط، بل يربي الأخلاق ويزرع حب الدين في القلوب. جزاه الله خيراً.',
      rating: 5,
      image: '👩‍🏫'
    },
    {
      name: 'يوسف إبراهيم',
      role: 'طالب جامعي',
      content: 'بفضل الله ثم بفضل الأستاذ عاصم، أصبحت أتلو القرآن بطريقة صحيحة وأفهم معانيه بشكل أعمق.',
      rating: 5,
      image: '👨‍🎓'
    }
  ]

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-400 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-amiri">
            آراء الطلاب
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto font-cairo">
            شهادات من طلابنا الأعزاء الذين تشرفنا بتعليمهم
          </p>
        </motion.div>

        {/* Testimonials Slider */}
        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-2xl border border-white/20"
            >
              {/* Quote Icon */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="text-center mb-6"
              >
                <Quote className="w-12 h-12 text-amber-400 mx-auto" />
              </motion.div>

              {/* Testimonial Content */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-xl md:text-2xl text-white text-center leading-relaxed mb-8 font-cairo"
              >
                "{testimonials[currentIndex].content}"
              </motion.p>

              {/* Rating */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="flex justify-center mb-6"
              >
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-amber-400 fill-current" />
                ))}
              </motion.div>

              {/* Author Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="text-center"
              >
                <div className="flex items-center justify-center space-x-4 rtl:space-x-reverse">
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center text-2xl shadow-lg">
                    {testimonials[currentIndex].image}
                  </div>
                  <div className="text-right">
                    <h4 className="text-xl font-bold text-white font-amiri">{testimonials[currentIndex].name}</h4>
                    <p className="text-blue-200 font-cairo">{testimonials[currentIndex].role}</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex justify-center space-x-4 rtl:space-x-reverse mt-8">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevTestimonial}
              className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
            >
              <ChevronRight className="w-6 h-6" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextTestimonial}
              className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
            >
              <ChevronLeft className="w-6 h-6" />
            </motion.button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 rtl:space-x-reverse mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-amber-400 scale-125' : 'bg-white/30'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Additional Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
        >
          {[
            { number: '4.9/5', label: 'تقييم الطلاب' },
            { number: '98%', label: 'نسبة النجاح' },
            { number: '500+', label: 'طالب راضٍ' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1 + index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-amber-400 mb-2 font-cairo">{stat.number}</div>
              <div className="text-blue-200 font-cairo">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials