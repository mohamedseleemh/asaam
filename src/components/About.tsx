import React from 'react'
import { motion } from 'framer-motion'
import { GraduationCap, Award, Heart, BookOpen } from 'lucide-react'

const About = () => {
  const achievements = [
    {
      icon: BookOpen,
      title: 'حفظ القرآن الكريم',
      description: 'حفظت القرآن الكريم في سن صغيرة بفضل الله تعالى',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: GraduationCap,
      title: 'التعليم الأزهري',
      description: 'درست بالأزهر الشريف وحصلت على ليسانس اللغة العربية',
      color: 'from-amber-500 to-amber-600'
    },
    {
      icon: Award,
      title: 'العلوم الشرعية',
      description: 'حصلت على دبلوم العلوم الشرعية من أكاديمية زاد',
      color: 'from-blue-600 to-amber-500'
    },
    {
      icon: Heart,
      title: 'الدعوة والإمامة',
      description: 'شرفني الله بإمامة المساجد وتعليم القرآن الكريم',
      color: 'from-amber-600 to-blue-500'
    }
  ]

  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-blue-600 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-amber-500 rounded-full blur-3xl"></div>
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
              نبذة عني
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-amber-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-blue-100 via-white to-amber-100 rounded-3xl shadow-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-amber-600/20"></div>
                <div className="relative h-full flex items-center justify-center">
                  <div className="text-center">
                    <motion.div
                      animate={{ rotate: [0, 5, -5, 0] }}
                      transition={{ duration: 4, repeat: Infinity }}
                      className="w-32 h-32 bg-white rounded-full shadow-xl flex items-center justify-center mb-6 mx-auto"
                    >
                      <BookOpen className="w-16 h-16 text-blue-600" />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-gray-800 font-amiri mb-2">حافظ القرآن الكريم</h3>
                    <p className="text-gray-600 font-cairo">منذ الصغر بفضل الله</p>
                  </div>
                </div>
              </div>
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -bottom-6 -right-6 w-20 h-20 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full shadow-xl flex items-center justify-center"
              >
                <Award className="w-10 h-10 text-white" />
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, x: 10 }}
                className="bg-gradient-to-r from-white to-blue-50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100"
              >
                <div className="flex items-start space-x-4 rtl:space-x-reverse">
                  <div className={`w-14 h-14 bg-gradient-to-br ${achievement.color} rounded-full flex items-center justify-center flex-shrink-0 shadow-lg`}>
                    <achievement.icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-800 mb-2 font-amiri">{achievement.title}</h3>
                    <p className="text-gray-600 leading-relaxed font-cairo">{achievement.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-blue-50 to-amber-50 rounded-3xl p-8 shadow-lg border border-blue-100">
            <p className="text-lg text-gray-700 leading-relaxed font-cairo max-w-4xl mx-auto">
              بفضل الله تعالى، أسعى لخدمة كتاب الله ونشر تعاليم الإسلام السمحة من خلال تعليم القرآن الكريم والعلوم الشرعية. 
              هدفي هو إعداد جيل قرآني متميز يحمل رسالة الإسلام بعلم وحكمة.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About