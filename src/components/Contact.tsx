import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, MessageCircle, Facebook, Send, Clock, User } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const contactMethods = [
    {
      icon: MessageCircle,
      title: 'واتساب',
      description: 'للتواصل السريع والاستفسارات',
      value: '+201007578444',
      link: 'https://wa.me/201007578444',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Phone,
      title: 'الهاتف',
      description: 'متاح للتواصل في أوقات العمل',
      value: '+201007578444',
      link: 'tel:+201007578444',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Mail,
      title: 'البريد الإلكتروني',
      description: 'للاستفسارات والمراسلات',
      value: 'info@asemfayed.com',
      link: 'mailto:info@asemfayed.com',
      color: 'from-amber-500 to-amber-600'
    }
  ]

  const socialLinks = [
    {
      icon: Facebook,
      title: 'الحساب الشخصي',
      link: 'https://www.facebook.com/share/15Xh2H6kLx/',
      color: 'from-blue-600 to-blue-700'
    },
    {
      icon: Facebook,
      title: 'الصفحة الرسمية',
      link: 'https://www.facebook.com/share/15HBKTnqcN/',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Send,
      title: 'تيك توك',
      link: 'https://www.tiktok.com/@asemfayed?_t=ZS-8xB30KAP1LM&_r=1',
      color: 'from-gray-800 to-gray-900'
    }
  ]

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-50 via-white to-amber-50 relative overflow-hidden">
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
              تواصل معي
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-amber-600 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-cairo">
            أسعد بالتواصل معكم لأي استفسارات أو لحجز موعد للتعلم
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-3xl shadow-2xl p-8 border border-blue-100">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 font-amiri">أرسل رسالة</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-gray-700 font-cairo font-medium mb-2">الاسم الكامل</label>
                  <div className="relative">
                    <User className="absolute right-3 top-3 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full pr-10 pl-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 font-cairo"
                      placeholder="أدخل اسمك الكامل"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 font-cairo font-medium mb-2">البريد الإلكتروني</label>
                  <div className="relative">
                    <Mail className="absolute right-3 top-3 w-5 h-5 text-gray-400" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full pr-10 pl-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 font-cairo"
                      placeholder="أدخل بريدك الإلكتروني"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 font-cairo font-medium mb-2">رقم الهاتف</label>
                  <div className="relative">
                    <Phone className="absolute right-3 top-3 w-5 h-5 text-gray-400" />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full pr-10 pl-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 font-cairo"
                      placeholder="أدخل رقم هاتفك"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 font-cairo font-medium mb-2">الرسالة</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 font-cairo resize-none"
                    placeholder="اكتب رسالتك هنا..."
                    required
                  ></textarea>
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-blue-600 to-amber-600 text-white py-4 rounded-xl font-cairo font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  إرسال الرسالة
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Contact Methods */}
            <div className="space-y-4">
              {contactMethods.map((method, index) => (
                <motion.a
                  key={index}
                  href={method.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02, x: 10 }}
                  className="block bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100"
                >
                  <div className="flex items-center space-x-4 rtl:space-x-reverse">
                    <div className={`w-14 h-14 bg-gradient-to-br ${method.color} rounded-xl flex items-center justify-center shadow-lg`}>
                      <method.icon className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-gray-800 font-amiri">{method.title}</h4>
                      <p className="text-gray-600 font-cairo text-sm mb-1">{method.description}</p>
                      <p className="text-blue-600 font-cairo font-semibold">{method.value}</p>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Media Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 shadow-lg border border-blue-100"
            >
              <h4 className="text-xl font-bold text-gray-800 mb-4 font-amiri">تابعني على</h4>
              <div className="space-y-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02, x: 5 }}
                    className="flex items-center space-x-3 rtl:space-x-reverse p-3 rounded-xl hover:bg-gray-50 transition-all duration-300"
                  >
                    <div className={`w-10 h-10 bg-gradient-to-br ${social.color} rounded-lg flex items-center justify-center`}>
                      <social.icon className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-gray-700 font-cairo">{social.title}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Working Hours */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-600 to-amber-600 rounded-2xl p-6 text-white shadow-lg"
            >
              <div className="flex items-center space-x-3 rtl:space-x-reverse mb-4">
                <Clock className="w-6 h-6" />
                <h4 className="text-xl font-bold font-amiri">أوقات العمل</h4>
              </div>
              <div className="space-y-2 font-cairo">
                <div className="flex justify-between">
                  <span>السبت - الخميس</span>
                  <span>9:00 ص - 9:00 م</span>
                </div>
                <div className="flex justify-between">
                  <span>الجمعة</span>
                  <span>2:00 م - 9:00 م</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact