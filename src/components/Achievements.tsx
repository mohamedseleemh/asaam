import React from 'react'
import { motion } from 'framer-motion'
import { Award, GraduationCap, BookOpen, Users, Star, Trophy } from 'lucide-react'

const Achievements = () => {
  const academicAchievements = [
    {
      title: 'ليسانس اللغة العربية',
      institution: 'جامعة الأزهر - فرع المنصورة',
      year: 'بتقدير ممتاز',
      icon: GraduationCap
    },
    {
      title: 'دبلوم العلوم الشرعية',
      institution: 'أكاديمية زاد - المملكة العربية السعودية',
      year: 'بامتياز',
      icon: Award
    }
  ]

  const practicalAchievements = [
    {
      title: 'معلم ومحفظ القرآن',
      description: 'أكثر من 15 سنة من الخبرة',
      icon: BookOpen
    },
    {
      title: 'إمام وخطيب',
      description: 'العديد من المساجد',
      icon: Users
    }
  ]

  const stats = [
    { number: '500+', label: 'طالب تخرج', icon: Users },
    { number: '15+', label: 'سنة خبرة', icon: Star },
    { number: '100+', label: 'حافظ للقرآن', icon: BookOpen },
    { number: '10+', label: 'مسجد', icon: Trophy }
  ]

  return (
    <section id="achievements" className="py-20 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-amber-500 rounded-full blur-3xl"></div>
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
              الإنجازات والشهادات
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-amber-600 mx-auto rounded-full"></div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-gradient-to-br from-blue-50 to-amber-50 rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100"
            >
              <stat.icon className="w-8 h-8 text-blue-600 mx-auto mb-3" />
              <div className="text-3xl font-bold text-gray-800 mb-2 font-cairo">{stat.number}</div>
              <div className="text-sm text-gray-600 font-cairo">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Academic Achievements */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-3xl shadow-xl border border-blue-100">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mr-4 font-amiri">الشهادات الأكاديمية</h3>
              </div>
              <div className="space-y-4">
                {academicAchievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02, x: 5 }}
                    className="bg-white p-4 rounded-xl shadow-sm border-r-4 border-blue-500 hover:shadow-md transition-all duration-300"
                  >
                    <div className="flex items-start space-x-3 rtl:space-x-reverse">
                      <achievement.icon className="w-5 h-5 text-blue-600 mt-1" />
                      <div>
                        <h4 className="font-bold text-gray-800 font-amiri">{achievement.title}</h4>
                        <p className="text-gray-600 text-sm font-cairo">{achievement.institution}</p>
                        <p className="text-blue-600 text-sm font-cairo font-semibold">{achievement.year}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Practical Experience */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-br from-amber-50 to-white p-8 rounded-3xl shadow-xl border border-amber-100">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-600 to-amber-700 rounded-full flex items-center justify-center">
                  <Star className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mr-4 font-amiri">الخبرة العملية</h3>
              </div>
              <div className="space-y-4">
                {practicalAchievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02, x: 5 }}
                    className="bg-white p-4 rounded-xl shadow-sm border-r-4 border-amber-500 hover:shadow-md transition-all duration-300"
                  >
                    <div className="flex items-start space-x-3 rtl:space-x-reverse">
                      <achievement.icon className="w-5 h-5 text-amber-600 mt-1" />
                      <div>
                        <h4 className="font-bold text-gray-800 font-amiri">{achievement.title}</h4>
                        <p className="text-gray-600 text-sm font-cairo">{achievement.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Certification Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center space-x-4 rtl:space-x-reverse bg-gradient-to-r from-blue-600 to-amber-600 text-white px-8 py-4 rounded-full shadow-2xl">
            <Trophy className="w-8 h-8" />
            <span className="text-xl font-bold font-amiri">معتمد من الأزهر الشريف</span>
            <Trophy className="w-8 h-8" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Achievements