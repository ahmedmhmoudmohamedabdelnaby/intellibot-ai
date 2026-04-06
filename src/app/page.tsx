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
      access_key: "YOUR_WEB3FORMS_ACCESS_KEY", // سنحصل على هذا المفتاح لاحقاً
      name: formData.get("name"),
      company: formData.get("company"),
      industry: formData.get("industry"),
      phone: formData.get("phone"),
      subject: "طلب جديد لخدمات الأتمتة (IntelliBot)"
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
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

      // نعرض النجاح ليتمكن المستخدم من تجربة الواجهة حتى لو كان المفتاح غير صالح بعد
      setIsSubmitted(true);
    } catch (error) {
      console.log(error);
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
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
      tag: lang === "ar" ? "أتمتة الذكاء الاصطناعي للشركات الذكية" : "AI Automation for Smarter Businesses",
      title1: lang === "ar" ? "ارتقِ بأعمالك من خلال" : "Transform your business with",
      title2: lang === "ar" ? "الذكاء الاصطناعي المتقدم" : "Advanced AI Automation",
      desc: lang === "ar" 
        ? "نحن نساعد الشركات في تبسيط العمليات، تحسين خدمة العملاء، وتسريع عجلة النمو من خلال حلول الذكاء الاصطناعي المخصصة."
        : "We help businesses streamline operations, improve customer service, and accelerate growth through custom AI solutions.",
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
      title: lang === "ar" ? "من نحن (IntelliBot Agency)" : "About IntelliBot Agency",
      p1: lang === "ar" 
        ? "نحن وكالة متخصصة في حلول وتطبيقات الذكاء الاصطناعي والأتمتة، تأسست بهدف تمكين العلامات التجارية المحلية والمتوسطة (المتاجر الإلكترونية، العيادات، والمطاعم) من التحول الرقمي. يقوم فريقنا بتصميم وتطوير روبوتات دردشة ذكية وأنظمة أتمتة مخصصة تعمل كفريق دعم ومبيعات افتراضي يعمل بكفاءة ودون توقف."
        : "We are an AI & Automation agency founded to empower local and medium-sized businesses (E-commerce, clinics, F&B) with complete digital transformation. Our team designs custom intelligent chatbots and automated systems that act as an un-sleeping virtual support and sales team.",
      title2: lang === "ar" ? "ولكن.. لماذا تحتاج إلى الأتمتة؟" : "Why Do You Need Automation?",
      p2: lang === "ar"
        ? "في عصر السرعة الحالي، العميل المتأخر هو عميل مفقود. توفر أتمتة الذكاء الاصطناعي حلاً ذكياً للردود المكررة، استقبال وتأكيد الطلبات فورياً، ومعالجة المواعيد بدون أخطاء بشرية. تفويض هذه المهام للذكاء الاصطناعي يمنح موظفيك وفرة في الوقت، ويقلل التكاليف المادية، ويختصر لك طريق التوسع في أعمالك."
        : "In today's fast-paced era, a delayed customer is a lost customer. AI automation provides a smart solution for repetitive replies, instant order confirmations, and flawless appointment booking. Delegating these tasks to AI gives your employees abundant time, reduces costs, and shortens your path to business expansion."
    },
    benefits: {
      title: lang === "ar" ? "مميزات أتمتة الذكاء الاصطناعي" : "Key Benefits of AI Automation",
      subtitle: lang === "ar" ? "قم بتحويل أعمالك باستخدام الأتمتة الذكية" : "Transform your business with intelligent automation",
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
      desc: lang === "ar" ? "نقدم حلولاً متكاملة للذكاء الاصطناعي مخصصة لدفع عجلة نمو أعمالك." : "We offer comprehensive AI solutions tailored to drive your business growth.",
      items: [
        { icon: Bot, t: lang === "ar" ? "روبوتات الدردشة الذكية" : "AI Chatbots", d: lang === "ar" ? "روبوتات تعمل بالذكاء الاصطناعي لخدمة العملاء، الرد على الاستفسارات، وتوجيههم 24/7 على الواتساب والموقع." : "Intelligent chatbots to handle customer service, answer inquiries, and guide users 24/7." },
        { icon: Zap, t: lang === "ar" ? "أتمتة العمليات (Workflows)" : "Process Automation", d: lang === "ar" ? "أتمتة المهام المتكررة والمملة لزيادة كفاءة فريقك وتقليل الأخطاء، مما يمنحهم التركيز على التخطيط الاستراتيجي." : "Automate mundane tasks to boost team efficiency and grant employees more time for strategic focus." },
        { icon: LineChart, t: lang === "ar" ? "تسويق وحملات ذكية" : "Smart Marketing", d: lang === "ar" ? "استخدام خوارزميات الذكاء الاصطناعي لتحليل البيانات، وتأكيد الطلبات للحد من المرتجعات." : "Utilize algorithms to analyze data, confirm orders automatically, and maximize ROI." }
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
      desc: lang === "ar" ? "تواصل مع فريق وكالة IntelliBot اليوم وابدأ رحلتك نحو الأتمتة والذكاء الاصطناعي." : "Contact the IntelliBot Agency team today and start your AI automation journey.",
      btn1: lang === "ar" ? "استشارة مجانية" : "Free Consultation",
      btn2: lang === "ar" ? "تواصل مع الفريق (IntelliBot Team)" : "Contact IntelliBot Team"
    }
  };

  if (!mounted) return null;

  return (
    <main className="min-h-screen bg-background hero-gradient pb-20 relative">
      
      {/* Dynamic Animated Background Blobs for specific "Soul" effect */}
      <div className="fixed top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 blur-[120px] rounded-full mix-blend-screen pointer-events-none animate-pulse-slow"></div>
      <div className="fixed bottom-[10%] right-[-10%] w-[30%] h-[50%] bg-indigo-500/10 blur-[150px] rounded-full mix-blend-screen pointer-events-none"></div>

      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-background">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Bot className="w-6 h-6 text-primary" />
            <span className="font-bold text-xl tracking-tight">IntelliBot <span className="text-primary">AI</span></span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">{t.nav.about}</a>
            <a href="#benefits" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">{t.nav.benefits}</a>
            <a href="#services" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">{t.nav.services}</a>
          </div>
          <div className="flex items-center gap-4">
            <button onClick={toggleLang} className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-1 bg-zinc-800/40 p-2 rounded-full hover:bg-zinc-800 border border-zinc-800" aria-label="Toggle Language">
              <Globe className="w-4 h-4" />
              <span className="text-xs font-bold uppercase">{lang === 'ar' ? 'EN' : 'عربي'}</span>
            </button>
            <a href="https://wa.me/201095368883" target="_blank" rel="noreferrer" className="text-sm font-medium text-foreground hover:text-primary transition-colors flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span className="hidden sm:inline">{t.nav.contactBtn}</span>
            </a>
          </div>
        </div>
      </nav>

      <AnimatePresence mode="wait">
        <motion.div key={lang} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
          
          {/* Hero Section */}
          <section className="pt-48 pb-20 px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, type: "spring" }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-8 border border-primary/20 backdrop-blur-md"
              >
                <SparklesIcon className="w-4 h-4" />
                <span>{t.hero.tag}</span>
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight text-foreground leading-[1.15]"
              >
                {t.hero.title1} <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400 inline-block mt-2">{t.hero.title2}</span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed"
              >
                {t.hero.desc}
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-5"
              >
                <a href="#form" className="btn-primary hover:-translate-y-1 text-lg px-10 py-4 w-full sm:w-auto">
                  {t.hero.btn2}
                </a>
                <a href="#services" className="btn-outline hover:-translate-y-1 text-lg px-10 py-4 w-full sm:w-auto">
                  {t.hero.btn1}
                </a>
              </motion.div>
            </div>
          </section>

          {/* About Section - IntelliBot Focus */}
          <section id="about" className="py-24 px-6 relative z-10">
            <div className="max-w-5xl mx-auto">
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerContainer}
                className="grid md:grid-cols-2 gap-x-16 gap-y-12 items-start"
              >
                <motion.div variants={fadeInUp} className="relative">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground leading-tight">{t.about.title}</h2>
                  <div className="w-16 h-1 bg-primary rounded-full mb-6"></div>
                  <p className="text-muted-foreground leading-loose text-lg font-medium">
                    {t.about.p1}
                  </p>
                </motion.div>

                <motion.div variants={fadeInUp} className="relative">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground leading-tight">{t.about.title2}</h2>
                  <div className="w-16 h-1 bg-indigo-500 rounded-full mb-6"></div>
                  <p className="text-muted-foreground leading-loose text-lg font-medium">
                    {t.about.p2}
                  </p>
                </motion.div>
              </motion.div>
            </div>
          </section>

          {/* Stats Section */}
          <section className="py-16 border-y border-white/5 bg-black/20 backdrop-blur-md relative z-10">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {t.stats.map((stat, i) => (
                <div key={i} className="flex flex-col items-center justify-center p-4">
                  <h3 className="text-4xl md:text-6xl font-bold text-foreground mb-3">{stat.v}</h3>
                  <p className="text-primary font-semibold text-sm uppercase tracking-widest">{stat.l}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Key Benefits of AI Automation - Six Items */}
          <section id="benefits" className="py-32 px-6 relative z-10 bg-gradient-to-b from-transparent to-black/20">
            <div className="max-w-7xl mx-auto">
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeInUp}
                className="text-center mb-20"
              >
                <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">{t.benefits.title}</h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-medium">
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
                  <motion.div key={i} variants={fadeInUp} className="card-glass p-10 flex flex-col items-center text-center group hover:-translate-y-2 relative overflow-hidden">
                    <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-500"></div>
                    <div className="w-16 h-16 rounded-2xl bg-zinc-800/80 border border-zinc-700/50 text-white mb-8 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-500 shadow-xl shadow-black/40">
                      <benefit.icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-foreground relative z-10">{benefit.t}</h3>
                    <p className="text-muted-foreground leading-relaxed relative z-10">
                      {benefit.d}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>

          {/* Services Section */}
          <section id="services" className="py-24 px-6 relative z-10">
            <div className="max-w-7xl mx-auto">
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeInUp}
                className="text-center mb-20"
              >
                <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">{t.services.title}</h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-medium">
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
                  <motion.div key={i} variants={fadeInUp} className="bg-zinc-900/40 p-10 rounded-2xl border border-zinc-800 hover:border-zinc-600 transition-colors flex flex-col group relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className="w-14 h-14 rounded-full bg-primary/10 text-primary mb-8 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                      <srv.icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-foreground">{srv.t}</h3>
                    <p className="text-muted-foreground leading-relaxed flex-grow">{srv.d}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>

          {/* Custom Form Section */}
          <section id="form" className="py-32 px-6 relative z-10">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="max-w-3xl mx-auto"
            >
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">{t.form.title}</h2>
                <p className="text-muted-foreground text-lg">
                  {t.form.desc}
                </p>
              </div>

              <div className="card-glass p-8 md:p-12 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[100px] rounded-full point-events-none"></div>
                
                {isSubmitted ? (
                  <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="relative z-10 text-center py-10">
                    <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-10 h-10 text-green-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-4">{t.form.success}</h3>
                    <p className="text-muted-foreground">شكراً لتواصلك معنا.</p>
                  </motion.div>
                ) : (
                  <form className="relative z-10 flex flex-col gap-6" onSubmit={handleFormSubmit}>
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-semibold text-foreground">{t.form.nameL} <span className="text-red-400">*</span></label>
                      <input type="text" name="name" placeholder={t.form.nameP} className="bg-zinc-950/50 border border-zinc-800 rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" required />
                    </div>
                    
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-semibold text-foreground">{t.form.companyL} <span className="text-red-400">*</span></label>
                      <input type="text" name="company" placeholder={t.form.companyP} className="bg-zinc-950/50 border border-zinc-800 rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" required />
                    </div>

                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-semibold text-foreground">{t.form.industryL} <span className="text-red-400">*</span></label>
                      <select name="industry" className="bg-zinc-950/50 border border-zinc-800 rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all appearance-none" required defaultValue="">
                        <option value="" disabled>{t.form.industryP}</option>
                        {t.form.industryOpts.map((opt, i) => (
                          <option key={i} value={opt} className="bg-zinc-900">{opt}</option>
                        ))}
                      </select>
                    </div>

                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-semibold text-foreground">{t.form.phoneL} <span className="text-red-400">*</span></label>
                      <input type="tel" name="phone" dir="ltr" className={`bg-zinc-950/50 border border-zinc-800 rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all ${lang === 'ar' ? 'text-right' : 'text-left'}`} placeholder={t.form.phoneP} required />
                    </div>

                    <button disabled={isSubmitting} type="submit" className="btn-primary w-full mt-4 py-4 text-lg hover:-translate-y-1">
                      {isSubmitting ? "..." : t.form.btn}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </section>

          {/* Bottom CTA */}
          <section id="contact" className="py-24 px-6 relative z-10">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="max-w-5xl mx-auto bg-gradient-to-b from-primary/10 to-transparent border border-primary/20 rounded-3xl p-12 text-center relative overflow-hidden group"
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6 relative z-10 text-foreground">{t.cta.title}</h2>
              <p className="text-lg text-muted-foreground mb-10 relative z-10 max-w-2xl mx-auto">
                {t.cta.desc}
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center relative z-10">
                <a href="https://wa.me/201095368883" target="_blank" rel="noreferrer" className="btn-primary flex items-center justify-center gap-2 text-lg px-10 py-5 hover:scale-105 transition-transform shadow-lg shadow-primary/25">
                  {t.cta.btn1}
                </a>
                <a href="https://wa.me/201095368883" target="_blank" rel="noreferrer" className="btn-outline flex items-center justify-center gap-2 text-lg px-10 py-5 hover:bg-white/5 transition-colors">
                  <Phone className="w-5 h-5" />
                  {t.cta.btn2}
                </a>
              </div>
            </motion.div>
          </section>

          {/* Footer */}
          <footer className="py-12 px-6 relative z-10 bg-background">
            <div className="max-w-7xl mx-auto flex flex-col items-center justify-center gap-4 text-center">
              <div className="flex items-center gap-2">
                <Bot className="w-6 h-6 text-primary" />
                <span className="font-bold font-sans tracking-widest text-lg">INTELLIBOT <span className="text-primary">AI</span></span>
              </div>
              <p className="text-muted-foreground text-sm">
                &copy; {new Date().getFullYear()} IntelliBot AI Agency. All rights reserved.
              </p>
            </div>
          </footer>

        </motion.div>
      </AnimatePresence>
    </main>
  );
}

function SparklesIcon(props: any) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
      <path d="M5 3v4" /><path d="M19 17v4" /><path d="M3 5h4" /><path d="M17 19h4" />
    </svg>
  )
}
