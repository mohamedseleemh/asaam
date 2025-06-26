import React from 'react'
import { motion } from 'framer-motion'

const QuranVerse = () => {
  return (
    <section id="quran-verse" className="py-20 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 relative overflow-hidden">
      {/* Islamic Pattern Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Cpath d="M30 30c0-16.569 13.431-30 30-30v60c-16.569 0-30-13.431-30-30z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          {/* Quran Icon */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8, type: "spring" }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <div className="w-20 h-20 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center mx-auto shadow-2xl">
              <span className="text-2xl text-white font-amiri">﴿</span>
            </div>
          </motion.div>

          {/* Verse */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <p className="text-3xl md:text-4xl text-white font-amiri leading-relaxed mb-6">
              وَلَقَدْ يَسَّرْنَا الْقُرْآنَ لِلذِّكْرِ فَهَلْ مِن مُّدَّكِرٍ
            </p>
            <div className="flex items-center justify-center space-x-4 rtl:space-x-reverse">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-amber-400"></div>
              <p className="text-amber-400 font-cairo text-lg">سورة القمر - آية 17</p>
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-amber-400"></div>
            </div>
          </motion.div>

          {/* Translation */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-xl text-blue-100 font-cairo max-w-3xl mx-auto leading-relaxed"
          >
            "ولقد يسرنا القرآن للحفظ والفهم والتدبر، فهل من متذكر ومتعظ؟"
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
  )
}

export default QuranVerse