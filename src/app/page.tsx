"use client";

import { useState, useEffect } from "react";
import { Bot, Zap, Clock, ShieldCheck, LineChart, Phone, Globe, DollarSign, Target, TrendingUp, Maximize, MessageSquare, CheckCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const [lang, setLang] = useState<"ar" | "en">("ar");
  const [mounted, setMounted] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    setMounted(true);
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = lang;
  }, [lang]);

  const toggleLang = () => setLang(l => (l === "ar" ? "en" : "ar"));

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      company: formData.get("company"),
      industry: formData.get("industry"),
      phone: formData.get("phone"),
      subject: "طلب جديد لخدمات الأتمتة (IntelliBot)"
    };

    try {
      const response = await fetch("https://formspree.io/f/xpqobqpk", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      }).catch(err => {
        console.log("Fetch caught:", err);
        return { ok: false };
      });

      if (response && response.ok) {
        setIsSubmitted(true);
      } else {
        alert("عذراً، حدث خطأ في الإرسال. يرجى التأكد من عدم وجود إضافة تمنع الإعلانات (AdBlocker) تعيق الإرسال.");
      }
    } catch (error) {
      console.log(error);
      alert("عذراً، حدث خطأ في الاتصال بالخادم.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 }
    }
  };

  const t = {
    nav: {
      about: lang === "ar" ? "من نحن" : "About Us",
      benefits: lang === "ar" ? "المميزات" : "Benefits",
      services: lang === "ar" ? "الخدمات" : "Services",
      contactBtn: lang === "ar" ? "تواصل مع الفريق" : "Contact Team",
    },
    hero: {
      title1: lang === "ar" ? "حلول وتطبيقات رقمية" : "Custom Technology Solutions",
      title2: lang === "ar" ? "تُبنى خصيصاً وفق احتياجات عملك" : "Engineered Around Your Specific Business",
      desc: lang === "ar" 
        ? "نبتكر ونطور ما يحتاجه عملك بالفعل — سواء كان روبوتات دردشة ذكية، أتمتة شاملة للعمليات، أو حلولاً برمجية مخصصة بالكامل ترفع الكفاءة وتسرّع النمو."
        : "We design and build exactly what your business requires — whether it's intelligent chatbots, end-to-end process automation, or fully custom digital solutions tailored to your unique workflow.",
      btn1: lang === "ar" ? "استكشف خدماتنا" : "Explore Services",
      btn2: lang === "ar" ? "استشارة مجانية" : "Free Consultation",
    },
    stats: [
      { v: lang === "ar" ? "٤٠٪" : "40%", l: lang === "ar" ? "خفض التكاليف التشغيلية" : "Lower Operating Costs" },
      { v: lang === "ar" ? "٢٤/٧" : "24/7", l: lang === "ar" ? "دعم مستمر للعملاء" : "Customer Support" },
      { v: lang === "ar" ? "٦٠٪" : "60%", l: lang === "ar" ? "أسرع في الاستجابة" : "Faster Responses" },
      { v: lang === "ar" ? "١٠٠٪" : "100%", l: lang === "ar" ? "حلول مخصصة" : "Custom Solutions" },
    ],
    about: {
      title: lang === "ar" ? "من نحن (وكالة IntelliBot التكنولوجية)" : "About IntelliBot Agency",
      p1: lang === "ar" 
        ? "نحن وكالة تكنولوجية متكاملة نهدف إلى تمكين الشركات والمؤسسات من تطوير بنيتها الرقمية. لسنا مجرد مزود لروبوتات الدردشة، بل نبني كل حل برمجي وتقني من الصفر ليطابق نموذج عملك واحتياجاتك الخاصة، مما يساعدك على أتمتة عملياتك وزيادة مبيعاتك بكفاءة عالية."
        : "We are a full-service technology agency dedicated to driving digital transformation for growing businesses. We aren't just a chatbot vendor — we engineer every software and digital solution from scratch to align precisely with your specific business model and workflows.",
      title2: lang === "ar" ? "لماذا تحتاج إلى حلولنا التقنية؟" : "Why Choose Our Digital Solutions?",
      p2: lang === "ar"
        ? "تتطلب كل مؤسسة حلولاً تكنولوجية تناسب مسار عملها الفريد. نحن ندرس تحديات عملك ونبني لك أنظمة مخصصة بالكامل لتبسيط المهام اليومية، تسريع خدمة العملاء، وتقليل التكاليف التشغيلية، لتتمكن من التوسع بسلاسة وبأعلى كفاءة ممكنة."
        : "Every organization requires technology built around its unique operational needs. We analyze your business challenges and build fully bespoke systems to automate daily tasks, accelerate response times, and reduce costs so you can scale efficiently."
    },
    benefits: {
      title: lang === "ar" ? "مميزات حلولنا الذكية" : "Key Benefits of Our Digital Solutions",
      subtitle: lang === "ar" ? "قم بتحويل أعمالك وتطوير بنيتك الرقمية" : "Transform your business with custom digital automation",
      items: [
        { icon: Clock, t: lang === "ar" ? "توفير الوقت" : "Save Time", d: lang === "ar" ? "أتمتة المهام المتكررة واليدوية" : "Automate repetitive and manual workflows" },
        { icon: DollarSign, t: lang === "ar" ? "تقليل التكاليف" : "Reduce Costs", d: lang === "ar" ? "تقليل المصروفات التشغيلية والعمالة" : "Lower operational and labor expenses" },
        { icon: Target, t: lang === "ar" ? "زيادة الدقة" : "Improve Accuracy", d: lang === "ar" ? "تقليل الأخطاء البشرية للصفر" : "Minimize manual and human errors" },
        { icon: TrendingUp, t: lang === "ar" ? "مضاعفة الإنتاجية" : "Increase Productivity", d: lang === "ar" ? "تمكين فريقك من إنجاز مهام أكثر في وقت أقل" : "Enable teams to do more in less time" },
        { icon: Maximize, t: lang === "ar" ? "نمو غير محدود" : "Scale Easily", d: lang === "ar" ? "توسيع البيزنس بدون زيادة الأعباء التشغيلية" : "Support business growth without increasing overhead" },
        { icon: MessageSquare, t: lang === "ar" ? "تجربة عملاء استثنائية" : "Better Experience", d: lang === "ar" ? "تقديم ردود دقيقة وفورية على مدار الساعة لعملائك" : "Provide instant and accurate responses 24/7 to customers" }
      ]
    },
    services: {
      title: lang === "ar" ? "خدمات الوكالة" : "Our Services",
      desc: lang === "ar" ? "نقدم مجالات عمل وتطبيقات تكنولوجية مخصصة لدفع عجلة نمو أعمالك." : "We offer specialized technology domains tailored to drive your business growth.",
      items: [
        { 
          icon: Bot, 
          t: lang === "ar" ? "روبوتات الدردشة الذكية" : "AI Chatbots", 
          d: lang === "ar" ? "روبوتات تعمل بالذكاء الاصطناعي لخدمة العملاء، الرد على الاستفسارات، وتوجيههم 24/7 على الواتساب والموقع." : "Intelligent chatbots to handle customer service, answer inquiries, and guide users 24/7.",
          tag: lang === "ar" ? "مخصصة بالكامل" : "Fully bespoke"
        },
        { 
          icon: Zap, 
          t: lang === "ar" ? "أتمتة العمليات (Workflows)" : "Process Automation", 
          d: lang === "ar" ? "أتمتة المهام المتكررة والمملة لزيادة كفاءة فريقك وتقليل الأخطاء، مما يمنحهم التركيز على التخطيط الاستراتيجي." : "Automate mundane tasks to boost team efficiency and grant employees more time for strategic focus.",
          tag: lang === "ar" ? "مصممة لدورة عملك" : "Built for your workflow"
        },
        { 
          icon: LineChart, 
          t: lang === "ar" ? "تسويق وحملات ذكية" : "Smart Marketing", 
          d: lang === "ar" ? "استخدام خوارزميات الذكاء الاصطناعي لتحليل البيانات، وتأكيد الطلبات للحد من المرتجعات." : "Utilize algorithms to analyze data, confirm orders automatically, and maximize ROI.",
          tag: lang === "ar" ? "قابل للتعديل والتكيّف" : "Customizable"
        }
      ]
    },
    form: {
      title: lang === "ar" ? "اطلب خدمات الأتمتة بالذكاء الاصطناعي" : "Request AI Automation Services",
      desc: lang === "ar" ? "قم بملء النموذج أدناه وسيتواصل معك فريقنا لمناقشة احتياجات أتمتة أعمالك." : "Fill out the form below and our team will contact you to discuss your automation needs.",
      nameL: lang === "ar" ? "الاسم بالكامل" : "Full Name",
      nameP: lang === "ar" ? "أدخل اسمك بالكامل" : "Enter your full name",
      companyL: lang === "ar" ? "اسم الشركة" : "Company Name",
      companyP: lang === "ar" ? "أدخل اسم شركتك" : "Enter your company name",
      industryL: lang === "ar" ? "قطاع العمل (المجال)" : "Industry",
      industryP: lang === "ar" ? "اختر مجال عملك" : "Select your industry",
      phoneL: lang === "ar" ? "رقم الهاتف" : "Phone Number",
      phoneP: lang === "ar" ? "+20 xxx xxx xxxx" : "+20 xxx xxx xxxx",
      industryOpts: [
        lang === "ar" ? "متاجر إلكترونية (E-commerce)" : "E-commerce",
        lang === "ar" ? "عيادات وصيدليات" : "Healthcare & Clinics",
        lang === "ar" ? "مطاعم وكافيهات (F&B)" : "Food & Beverage",
        lang === "ar" ? "أخرى" : "Other"
      ],
      btn: lang === "ar" ? "إرسال الطلب" : "Send Request",
      success: lang === "ar" ? "تم ارسال طلبك بنجاح! سيتم الرد عليك قريباً." : "Your request has been sent! We will contact you soon."
    },
    cta: {
      title: lang === "ar" ? "جاهز لتغيير مسار أعمالك؟" : "Ready to Transform Your Business?",
      desc: lang === "ar" ? "تواصل مع فريق وكالة IntelliBot اليوم وابدأ رحلتك نحو الأتمتة والتطوير التكنولوجي." : "Contact the IntelliBot Agency team today and start your digital transformation journey.",
      btn1: lang === "ar" ? "استشارة مجانية" : "Free Consultation",
      btn2: lang === "ar" ? "تواصل مع الفريق (IntelliBot Team)" : "Contact IntelliBot Team"
    }
  };

  if (!mounted) return null;

  return (
    <main className="min-h-screen bg-[#FFFFFF] text-[#1C1B18] pb-20 relative">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-[#E4E1D8]">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Bot className="w-6 h-6 text-[#1F6F54]" />
            <span className="font-bold text-xl tracking-tight text-[#1C1B18]">
              IntelliBot <span className="text-[#1F6F54]">Agency</span>
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-sm font-medium text-[#6B6558] hover:text-[#1F6F54] transition-colors">{t.nav.about}</a>
            <a href="#benefits" className="text-sm font-medium text-[#6B6558] hover:text-[#1F6F54] transition-colors">{t.nav.benefits}</a>
            <a href="#services" className="text-sm font-medium text-[#6B6558] hover:text-[#1F6F54] transition-colors">{t.nav.services}</a>
          </div>
          <div className="flex items-center gap-4">
            <button onClick={toggleLang} className="text-[#6B6558] hover:text-[#1F6F54] transition-colors flex items-center gap-1.5 bg-[#F6F5F0] px-3.5 py-1.5 rounded-full border border-[#E4E1D8]" aria-label="Toggle Language">
              <Globe className="w-4 h-4 text-[#1F6F54]" />
              <span className="text-xs font-semibold uppercase flex items-center gap-1">
                <span className={lang === 'ar' ? 'text-[#1F6F54] font-bold' : 'text-[#6B6558]'}>Ar</span>
                <span className="text-[#E4E1D8]">|</span>
                <span className={lang === 'en' ? 'text-[#1F6F54] font-bold' : 'text-[#6B6558]'}>En</span>
              </span>
            </button>
            <a href="https://wa.me/201095368883" target="_blank" rel="noreferrer" className="text-sm font-medium text-[#1C1B18] hover:text-[#1F6F54] transition-colors flex items-center gap-2">
              <Phone className="w-4 h-4 text-[#1F6F54]" />
              <span className="hidden sm:inline">{t.nav.contactBtn}</span>
            </a>
          </div>
        </div>
      </nav>

      <AnimatePresence mode="wait">
        <motion.div key={lang} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
          
          {/* Hero Section */}
          <section className="pt-44 pb-24 px-6 relative z-10 bg-[#FFFFFF]">
            <div className="max-w-4xl mx-auto text-center">
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 tracking-tight text-[#1C1B18] leading-[1.25]"
              >
                {t.hero.title1} <br />
                <span className="text-[#1F6F54] inline-block mt-2">{t.hero.title2}</span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-lg md:text-xl text-[#6B6558] mb-12 max-w-2xl mx-auto leading-relaxed"
              >
                {t.hero.desc}
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-4"
              >
                <a href="#form" className="btn-primary text-lg px-10 py-4 w-full sm:w-auto">
                  {t.hero.btn2}
                </a>
                <a href="#services" className="btn-outline text-lg px-10 py-4 w-full sm:w-auto">
                  {t.hero.btn1}
                </a>
              </motion.div>
            </div>
          </section>

          {/* About Section - Technology Agency Focus */}
          <section id="about" className="py-24 px-6 relative z-10 bg-[#F6F5F0] border-y border-[#E4E1D8]">
            <div className="max-w-5xl mx-auto">
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerContainer}
                className="grid md:grid-cols-2 gap-x-16 gap-y-12 items-start"
              >
                <motion.div variants={fadeInUp} className="relative">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#1C1B18] leading-tight">{t.about.title}</h2>
                  <div className="w-16 h-1 bg-[#1F6F54] rounded-full mb-6"></div>
                  <p className="text-[#6B6558] leading-loose text-lg font-normal">
                    {t.about.p1}
                  </p>
                </motion.div>

                <motion.div variants={fadeInUp} className="relative">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#1C1B18] leading-tight">{t.about.title2}</h2>
                  <div className="w-16 h-1 bg-[#1F6F54] rounded-full mb-6"></div>
                  <p className="text-[#6B6558] leading-loose text-lg font-normal">
                    {t.about.p2}
                  </p>
                </motion.div>
              </motion.div>
            </div>
          </section>

          {/* Stats Section */}
          <section className="py-16 bg-[#FFFFFF] border-b border-[#E4E1D8] relative z-10">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {t.stats.map((stat, i) => (
                <div key={i} className="flex flex-col items-center justify-center p-4">
                  <h3 className="text-4xl md:text-6xl font-bold text-[#1F6F54] mb-3">{stat.v}</h3>
                  <p className="text-[#6B6558] font-semibold text-sm uppercase tracking-widest">{stat.l}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Key Benefits Section */}
          <section id="benefits" className="py-28 px-6 relative z-10 bg-[#F6F5F0]">
            <div className="max-w-7xl mx-auto">
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeInUp}
                className="text-center mb-16"
              >
                <h2 className="text-3xl md:text-5xl font-bold text-[#1C1B18] mb-6">{t.benefits.title}</h2>
                <p className="text-[#6B6558] text-lg max-w-2xl mx-auto font-medium">
                  {t.benefits.subtitle}
                </p>
              </motion.div>

              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerContainer}
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {t.benefits.items.map((benefit, i) => (
                  <motion.div key={i} variants={fadeInUp} className="bg-white border border-[#E4E1D8] p-8 md:p-10 rounded-2xl flex flex-col items-center text-center group hover:-translate-y-1 hover:border-[#1F6F54]/40 transition-all duration-300 shadow-xs hover:shadow-md relative overflow-hidden">
                    <div className="w-16 h-16 rounded-2xl bg-[#F6F5F0] border border-[#E4E1D8] text-[#1F6F54] mb-6 flex items-center justify-center group-hover:bg-[#1F6F54] group-hover:text-white group-hover:border-[#1F6F54] transition-all duration-300">
                      <benefit.icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-[#1C1B18] relative z-10">{benefit.t}</h3>
                    <p className="text-[#6B6558] leading-relaxed relative z-10">
                      {benefit.d}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>

          {/* Services Section */}
          <section id="services" className="py-28 px-6 relative z-10 bg-[#FFFFFF] border-t border-[#E4E1D8]">
            <div className="max-w-7xl mx-auto">
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeInUp}
                className="text-center mb-16"
              >
                <h2 className="text-3xl md:text-5xl font-bold mb-6 text-[#1C1B18]">{t.services.title}</h2>
                <p className="text-[#6B6558] text-lg max-w-2xl mx-auto font-medium">
                  {t.services.desc}
                </p>
              </motion.div>

              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerContainer}
                className="grid md:grid-cols-3 gap-8"
              >
                {t.services.items.map((srv, i) => (
                  <motion.div key={i} variants={fadeInUp} className="bg-[#F6F5F0]/70 p-8 md:p-10 rounded-2xl border border-[#E4E1D8] hover:border-[#1F6F54]/50 transition-all flex flex-col justify-between group relative overflow-hidden shadow-xs hover:shadow-md">
                    <div className="absolute top-0 left-0 w-full h-1 bg-[#1F6F54] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div>
                      <div className="w-14 h-14 rounded-xl bg-white border border-[#E4E1D8] text-[#1F6F54] mb-6 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                        <srv.icon className="w-6 h-6" />
                      </div>
                      <h3 className="text-xl font-bold mb-3 text-[#1C1B18]">{srv.t}</h3>
                      <p className="text-[#6B6558] leading-relaxed">{srv.d}</p>
                    </div>
                    <div className="pt-6">
                      <span className="inline-block text-xs font-semibold px-3 py-1 rounded-md bg-[#FBF4E4] text-[#B8862E] border border-[#B8862E]/20">
                        {srv.tag}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>

          {/* Request Form Section */}
          <section id="form" className="py-28 px-6 relative z-10 bg-[#F6F5F0] border-t border-[#E4E1D8]">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="max-w-3xl mx-auto"
            >
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#1C1B18]">{t.form.title}</h2>
                <p className="text-[#6B6558] text-lg">
                  {t.form.desc}
                </p>
              </div>

              <div className="bg-white border border-[#E4E1D8] rounded-2xl p-8 md:p-12 shadow-sm relative overflow-hidden">
                {isSubmitted ? (
                  <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="relative z-10 text-center py-10">
                    <div className="w-20 h-20 bg-[#1F6F54]/10 rounded-full flex items-center justify-center mx-auto mb-6 border border-[#1F6F54]/20">
                      <CheckCircle className="w-10 h-10 text-[#1F6F54]" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#1C1B18] mb-3">{t.form.success}</h3>
                    <p className="text-[#6B6558]">شكراً لتواصلك معنا.</p>
                  </motion.div>
                ) : (
                  <form className="relative z-10 flex flex-col gap-6" onSubmit={handleFormSubmit}>
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-semibold text-[#1C1B18]">{t.form.nameL} <span className="text-red-500">*</span></label>
                      <input type="text" name="name" placeholder={t.form.nameP} className="bg-[#F6F5F0]/50 border border-[#E4E1D8] rounded-lg px-4 py-3 text-[#1C1B18] placeholder:text-[#6B6558]/60 focus:outline-none focus:border-[#1F6F54] focus:ring-1 focus:ring-[#1F6F54] transition-all" required />
                    </div>
                    
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-semibold text-[#1C1B18]">{t.form.companyL} <span className="text-red-500">*</span></label>
                      <input type="text" name="company" placeholder={t.form.companyP} className="bg-[#F6F5F0]/50 border border-[#E4E1D8] rounded-lg px-4 py-3 text-[#1C1B18] placeholder:text-[#6B6558]/60 focus:outline-none focus:border-[#1F6F54] focus:ring-1 focus:ring-[#1F6F54] transition-all" required />
                    </div>

                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-semibold text-[#1C1B18]">{t.form.industryL} <span className="text-red-500">*</span></label>
                      <select name="industry" className="bg-[#F6F5F0]/50 border border-[#E4E1D8] rounded-lg px-4 py-3 text-[#1C1B18] focus:outline-none focus:border-[#1F6F54] focus:ring-1 focus:ring-[#1F6F54] transition-all appearance-none" required defaultValue="">
                        <option value="" disabled>{t.form.industryP}</option>
                        {t.form.industryOpts.map((opt, i) => (
                          <option key={i} value={opt} className="bg-white text-[#1C1B18]">{opt}</option>
                        ))}
                      </select>
                    </div>

                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-semibold text-[#1C1B18]">{t.form.phoneL} <span className="text-red-500">*</span></label>
                      <input type="tel" name="phone" dir="ltr" className={`bg-[#F6F5F0]/50 border border-[#E4E1D8] rounded-lg px-4 py-3 text-[#1C1B18] placeholder:text-[#6B6558]/60 focus:outline-none focus:border-[#1F6F54] focus:ring-1 focus:ring-[#1F6F54] transition-all ${lang === 'ar' ? 'text-right' : 'text-left'}`} placeholder={t.form.phoneP} required />
                    </div>

                    <button disabled={isSubmitting} type="submit" className="btn-primary w-full mt-4 py-4 text-lg">
                      {isSubmitting ? "..." : t.form.btn}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </section>

          {/* Bottom CTA Section - Full Deep Green Background */}
          <section id="contact" className="py-24 px-6 relative z-10 bg-[#FFFFFF]">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="max-w-5xl mx-auto bg-[#1F6F54] text-white rounded-3xl p-10 md:p-16 text-center shadow-lg relative overflow-hidden"
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white relative z-10">{t.cta.title}</h2>
              <p className="text-lg text-white/90 mb-10 relative z-10 max-w-2xl mx-auto leading-relaxed">
                {t.cta.desc}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
                <a href="https://wa.me/201095368883" target="_blank" rel="noreferrer" className="bg-white text-[#1F6F54] hover:bg-white/90 font-semibold text-lg px-10 py-4 rounded-lg transition-all shadow-sm flex items-center justify-center">
                  {t.cta.btn1}
                </a>
                <a href="https://wa.me/201095368883" target="_blank" rel="noreferrer" className="border border-white text-white hover:bg-white/10 font-semibold text-lg px-10 py-4 rounded-lg transition-all flex items-center justify-center gap-2">
                  <Phone className="w-5 h-5 text-white" />
                  {t.cta.btn2}
                </a>
              </div>
            </motion.div>
          </section>

          {/* Footer */}
          <footer className="py-12 px-6 relative z-10 bg-[#FFFFFF] border-t border-[#E4E1D8]">
            <div className="max-w-7xl mx-auto flex flex-col items-center justify-center gap-4 text-center">
              <div className="flex items-center gap-2">
                <Bot className="w-6 h-6 text-[#1F6F54]" />
                <span className="font-bold tracking-widest text-lg text-[#1C1B18]">
                  INTELLIBOT <span className="text-[#1F6F54]">AGENCY</span>
                </span>
              </div>
              <p className="text-[#6B6558] text-sm">
                &copy; {new Date().getFullYear()} IntelliBot Agency. All rights reserved.
              </p>
            </div>
          </footer>

        </motion.div>
      </AnimatePresence>
    </main>
  );
}

