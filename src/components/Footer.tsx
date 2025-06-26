import React from 'react'
import { motion } from 'framer-motion'
import { BookOpen, Heart, Facebook, MessageCircle, Send } from 'lucide-react'

const Footer = () => {
  const socialLinks = [
    {
      icon: MessageCircle,
      label: 'واتساب',
      href: 'https://wa.me/201007578444',
      color: 'hover:text-green-500'
    },
    {
      icon: Facebook,
      label: 'فيسبوك الشخصي',
      href: 'https://www.facebook.com/share/15Xh2H6kLx/',
      color: 'hover:text-blue-600'
    },
    {
      icon: Facebook,
      label: 'الصفحة الرسمية',
      href: 'https://www.facebook.com/share/15HBKTnqcN/',
      color: 'hover:text-blue-500'
    },
    {
      icon: Send,
      label: 'تيك توك',
      href: 'https://www.tiktok.com/@asemfayed?_t=ZS-8xB30KAP1LM&_r=1',
      color: 'hover:text-gray-800'
    }
  ]

  const quickLinks = [
    { label: 'الرئيسية', href: '#hero' },
    { label: 'نبذة عني', href: '#about' },
    { label: 'الخدمات', href: '#services' },
    { label: 'الإنجازات', href: '#achievements' },
    { label: 'آراء الطلاب', href: '#testimonials' },
    { label: 'التواصل', href: '#contact' }
  ]

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''))
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-amber-500 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <div className="flex items-center space-x-3 rtl:space-x-reverse mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-amber-600 rounded-full flex items-center justify-center shadow-lg">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold font-amiri">الأستاذ عاصم فايد</h3>
                  <p className="text-blue-200 font-cairo">معلم ومحفظ القرآن الكريم</p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed mb-6 font-cairo max-w-md">
                معلم ومحفظ القرآن الكريم، إمام وخطيب، خريج الأزهر الشريف. 
                أسعى لخدمة كتاب الله ونشر تعاليم الإسلام السمحة من خلال التعليم والتربية.
              </p>
              <div className="flex items-center space-x-2 rtl:space-x-reverse text-amber-400">
                <Heart className="w-5 h-5" />
                <span className="font-cairo">نحو جيل قرآني متميز</span>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-xl font-bold mb-6 font-amiri">روابط سريعة</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-gray-300 hover:text-amber-400 transition-colors duration-300 font-cairo"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Social Media */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h4 className="text-xl font-bold mb-6 font-amiri">تابعني على</h4>
              <div className="space-y-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, x: 5 }}
                    className={`flex items-center space-x-3 rtl:space-x-reverse text-gray-300 ${social.color} transition-all duration-300`}
                  >
                    <social.icon className="w-5 h-5" />
                    <span className="font-cairo">{social.label}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-gray-400 font-cairo text-center md:text-right mb-4 md:mb-0"
              >
                © 2024 الأستاذ عاصم فايد. جميع الحقوق محفوظة.
              </motion.p>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex items-center space-x-2 rtl:space-x-reverse text-gray-400 font-cairo"
              >
                <span>صُنع بـ</span>
                <Heart className="w-4 h-4 text-red-500" />
                <span>لخدمة القرآن الكريم</span>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer