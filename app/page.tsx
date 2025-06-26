'use client';

import { useEffect, useRef, useState } from 'react';
import { BookOpen, GraduationCap, Heart, Mail, MapPin, Phone, Star, Award, Users, Clock, ChevronDown, Fuel as Mosque } from 'lucide-react';

export default function Home() {
  const [isVisible, setIsVisible] = useState({});
  const observerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({
              ...prev,
              [entry.target.id]: true
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('[data-animate]');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-amber-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-full flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-800">الأستاذ عاصم فايد</span>
            </div>
            <div className="hidden md:flex space-x-8 rtl:space-x-reverse">
              <button onClick={() => scrollToSection('hero')} className="text-gray-700 hover:text-emerald-600 transition-colors duration-300">الرئيسية</button>
              <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-emerald-600 transition-colors duration-300">نبذة عني</button>
              <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-emerald-600 transition-colors duration-300">الخدمات</button>
              <button onClick={() => scrollToSection('achievements')} className="text-gray-700 hover:text-emerald-600 transition-colors duration-300">الإنجازات</button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-emerald-600 transition-colors duration-300">التواصل</button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative pt-20 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/10 to-amber-600/10"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-emerald-200/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-amber-200/30 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="mb-8 animate-fade-in">
              <div className="w-32 h-32 mx-auto mb-6 relative">
                <div className="w-full h-full bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-full shadow-2xl flex items-center justify-center animate-bounce-slow">
                  <Mosque className="w-16 h-16 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-amber-500 rounded-full animate-ping"></div>
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-6 animate-slide-up">
              <span className="bg-gradient-to-r from-emerald-600 to-amber-600 bg-clip-text text-transparent">
                الأستاذ عاصم فايد
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed animate-slide-up" style={{animationDelay: '0.2s'}}>
              معلم ومحفظ القرآن الكريم • إمام وخطيب • خريج الأزهر الشريف
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-slide-up" style={{animationDelay: '0.4s'}}>
              <button 
                onClick={() => scrollToSection('about')}
                className="px-8 py-4 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white rounded-full font-medium hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                تعرف علي أكثر
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="px-8 py-4 border-2 border-emerald-600 text-emerald-600 rounded-full font-medium hover:bg-emerald-600 hover:text-white hover:scale-105 transition-all duration-300"
              >
                تواصل معي
              </button>
            </div>
            
            <div className="animate-bounce mt-12">
              <ChevronDown className="w-8 h-8 text-emerald-600 mx-auto cursor-pointer" onClick={() => scrollToSection('about')} />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white" data-animate>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible.about ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              <span className="bg-gradient-to-r from-emerald-600 to-amber-600 bg-clip-text text-transparent">
                نبذة عني
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-600 to-amber-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className={`transition-all duration-1000 delay-300 ${isVisible.about ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <div className="relative">
                <div className="w-full h-96 bg-gradient-to-br from-emerald-100 to-amber-100 rounded-3xl shadow-2xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/20 to-amber-600/20"></div>
                  <div className="relative h-full flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-24 h-24 bg-white rounded-full shadow-xl flex items-center justify-center mb-4 mx-auto">
                        <BookOpen className="w-12 h-12 text-emerald-600" />
                      </div>
                      <p className="text-lg font-medium text-gray-700">حافظ القرآن الكريم</p>
                      <p className="text-sm text-gray-600 mt-2">منذ الصغر</p>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-amber-500 rounded-full shadow-xl flex items-center justify-center">
                  <Star className="w-8 h-8 text-white" />
                </div>
              </div>
            </div>

            <div className={`transition-all duration-1000 delay-500 ${isVisible.about ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-emerald-50 to-amber-50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-start space-x-4 rtl:space-x-reverse">
                    <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <GraduationCap className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-800 mb-2">التعليم الأزهري</h3>
                      <p className="text-gray-600 leading-relaxed">
                        درست بالأزهر الشريف منذ نعومة أظافري وحفظت القرآن الكريم في سن صغيرة، 
                        والتحقت بكلية اللغة العربية بجامعة الأزهر فرع المنصورة وحصلت على درجة الليسانس.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-amber-50 to-emerald-50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-start space-x-4 rtl:space-x-reverse">
                    <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-800 mb-2">العلوم الشرعية</h3>
                      <p className="text-gray-600 leading-relaxed">
                        حصلت على دبلوم العلوم الشرعية بأكاديمية زاد بالمملكة العربية السعودية، 
                        مما أثرى معرفتي الشرعية وأهلني لتدريس العلوم الإسلامية.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-emerald-50 to-amber-50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-start space-x-4 rtl:space-x-reverse">
                    <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <Heart className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-800 mb-2">الدعوة والإمامة</h3>
                      <p className="text-gray-600 leading-relaxed">
                        شرفني الله بإمامة العديد من المساجد وأعمل كمعلم ومحفظ للقرآن الكريم، 
                        أسعى لخدمة كتاب الله ونشر تعاليم الإسلام السمحة.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gradient-to-br from-gray-50 to-emerald-50" data-animate>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible.services ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              <span className="bg-gradient-to-r from-emerald-600 to-amber-600 bg-clip-text text-transparent">
                الخدمات التي أقدمها
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-600 to-amber-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className={`group transition-all duration-1000 delay-200 ${isVisible.services ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-emerald-100">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">تحفيظ القرآن الكريم</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  تعليم وتحفيظ القرآن الكريم للأطفال والكبار بالطرق الحديثة المتقنة، 
                  مع التركيز على التجويد والتلاوة الصحيحة.
                </p>
                <div className="flex items-center text-emerald-600 font-medium">
                  <Users className="w-5 h-5 ml-2" />
                  <span>جميع الأعمار</span>
                </div>
              </div>
            </div>

            <div className={`group transition-all duration-1000 delay-400 ${isVisible.services ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-amber-100">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-600 to-amber-700 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <GraduationCap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">تدريس العلوم الشرعية</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  تعليم الفقه والعقيدة والحديث والتفسير بأسلوب مبسط وواضح، 
                  مع ربط النصوص بالواقع المعاصر.
                </p>
                <div className="flex items-center text-amber-600 font-medium">
                  <Clock className="w-5 h-5 ml-2" />
                  <span>دروس مرنة</span>
                </div>
              </div>
            </div>

            <div className={`group transition-all duration-1000 delay-600 ${isVisible.services ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-emerald-100">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-600 to-amber-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Mosque className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">الإمامة والخطابة</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  إمامة الصلوات وإلقاء الخطب والدروس الدينية في المساجد، 
                  مع التركيز على المواضيع المعاصرة والهادفة.
                </p>
                <div className="flex items-center text-emerald-600 font-medium">
                  <Heart className="w-5 h-5 ml-2" />
                  <span>خدمة المجتمع</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-20 bg-white" data-animate>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible.achievements ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              <span className="bg-gradient-to-r from-emerald-600 to-amber-600 bg-clip-text text-transparent">
                الإنجازات والشهادات
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-600 to-amber-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className={`transition-all duration-1000 delay-200 ${isVisible.achievements ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <div className="bg-gradient-to-br from-emerald-50 to-white p-8 rounded-3xl shadow-xl border border-emerald-100">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mr-4">الشهادات الأكاديمية</h3>
                </div>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-xl shadow-sm border-r-4 border-emerald-500">
                    <h4 className="font-bold text-gray-800">ليسانس اللغة العربية</h4>
                    <p className="text-gray-600">جامعة الأزهر - فرع المنصورة</p>
                  </div>
                  <div className="bg-white p-4 rounded-xl shadow-sm border-r-4 border-amber-500">
                    <h4 className="font-bold text-gray-800">دبلوم العلوم الشرعية</h4>
                    <p className="text-gray-600">أكاديمية زاد - المملكة العربية السعودية</p>
                  </div>
                </div>
              </div>
            </div>

            <div className={`transition-all duration-1000 delay-400 ${isVisible.achievements ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <div className="bg-gradient-to-br from-amber-50 to-white p-8 rounded-3xl shadow-xl border border-amber-100">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center">
                    <Star className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mr-4">الخبرة العملية</h3>
                </div>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-xl shadow-sm border-r-4 border-emerald-500">
                    <h4 className="font-bold text-gray-800">معلم ومحفظ القرآن</h4>
                    <p className="text-gray-600">سنوات عديدة من الخبرة</p>
                  </div>
                  <div className="bg-white p-4 rounded-xl shadow-sm border-r-4 border-amber-500">
                    <h4 className="font-bold text-gray-800">إمام وخطيب</h4>
                    <p className="text-gray-600">العديد من المساجد</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-emerald-600 to-amber-600" data-animate>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible.contact ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              تواصل معي
            </h2>
            <div className="w-24 h-1 bg-white mx-auto rounded-full"></div>
            <p className="text-xl text-white/90 mt-6 max-w-2xl mx-auto">
              أسعد بالتواصل معكم لأي استفسارات أو لحجز موعد للتعلم
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className={`transition-all duration-1000 delay-200 ${isVisible.contact ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-3xl border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">الهاتف</h3>
                <p className="text-white/80 text-lg">متاح للتواصل في أوقات العمل</p>
                <button className="mt-4 px-6 py-3 bg-white text-emerald-600 rounded-full font-medium hover:shadow-lg transition-all duration-300">
                  اتصل الآن
                </button>
              </div>
            </div>

            <div className={`transition-all duration-1000 delay-400 ${isVisible.contact ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-3xl border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">البريد الإلكتروني</h3>
                <p className="text-white/80 text-lg">للاستفسارات والمراسلات</p>
                <button className="mt-4 px-6 py-3 bg-white text-emerald-600 rounded-full font-medium hover:shadow-lg transition-all duration-300">
                  أرسل رسالة
                </button>
              </div>
            </div>

            <div className={`transition-all duration-1000 delay-600 ${isVisible.contact ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-3xl border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">الموقع</h3>
                <p className="text-white/80 text-lg">متاح للزيارة والمقابلات الشخصية</p>
                <button className="mt-4 px-6 py-3 bg-white text-emerald-600 rounded-full font-medium hover:shadow-lg transition-all duration-300">
                  حدد موعد
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-full flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-bold">الأستاذ عاصم فايد</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              معلم ومحفظ القرآن الكريم، إمام وخطيب، خريج الأزهر الشريف
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-600 to-amber-600 mx-auto rounded-full mb-6"></div>
            <p className="text-gray-500">
              © 2024 الأستاذ عاصم فايد. جميع الحقوق محفوظة.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}