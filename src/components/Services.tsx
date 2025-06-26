import React from 'react'
import { motion } from 'framer-motion'
import { BookOpen, GraduationCap, Users, Clock, Heart, Star } from 'lucide-react'

const Services = () => {
  const services = [
    {
      icon: BookOpen,
      title: 'تحفيظ القرآن الكريم',
      description: 'تعليم وتحفيظ القرآن الكريم بالطرق الحديثة المتقنة مع التركيز على التجويد والتلاوة الصحيحة',
      features: ['جميع الأعمار', 'طرق حديثة', 'تجويد متقن'],
      color: 'from-blue-500 to-blue-600',
      bgColor: 'from-blue-50 to-blue-100'
    },
    {
      icon: GraduationCap,
      title: 'تدريس العلوم الشرعية',
      description: 'تعليم الفقه والعقيدة والحديث والتفسير بأسلوب مبسط وواضح مع ربط النصوص بالواقع المعاصر',
      features: ['فقه وعقيدة', 'حديث وتفسير', 'أسلوب مبسط'],
      color: 'from-amber-500 to-amber-600',
      bgColor: 'from-amber-50 to-amber-100'
    },
    {
      icon: Heart,
      title: 'الإمامة والخطابة',
      description: 'إمامة الصلوات وإلقاء الخطب والدروس الدينية في المساجد مع التركيز على المواضيع المعاصرة والهادفة',
      features: ['إمامة الصلوات', 'خطب الجمعة', 'دروس دينية'],
      color: 'from-blue-600 to-amber-500',
      bgColor: 'from-blue-50 to-amber-50'
    }
  ]

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-blue-600 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-amber-500 rounded-full blur-3xl"></div>
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
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 font-amiri">
            <span className="bg-gradient-to-r from-blue-600 to-amber-600 bg-clip-text text-transparent">
              الخدمات التي أقدمها
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-amber-600 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-cairo">
            أقدم خدمات تعليمية متميزة في مجال القرآن الكريم والعلوم الشرعية
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative"
            >
              <div className={`bg-gradient-to-br ${service.bgColor} p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/50 backdrop-blur-sm h-full`}>
                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300`}
                >
                  <service.icon className="w-8 h-8 text-white" />
                </motion.div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-gray-800 mb-4 font-amiri">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6 font-cairo">{service.description}</p>

                {/* Features */}
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <motion.div
                      key={featureIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + featureIndex * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center space-x-2 rtl:space-x-reverse"
                    >
                      <Star className="w-4 h-4 text-amber-500" />
                      <span className="text-sm text-gray-700 font-cairo">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-amber-600/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-600 to-amber-600 rounded-3xl p-8 text-white shadow-2xl">
            <h3 className="text-3xl font-bold mb-4 font-amiri">ابدأ رحلتك مع القرآن الكريم</h3>
            <p className="text-xl mb-6 font-cairo opacity-90">انضم إلى آلاف الطلاب الذين تعلموا معنا</p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white text-blue-600 rounded-full font-cairo font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => {
                const element = document.getElementById('contact')
                if (element) element.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              احجز موعدك الآن
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Services