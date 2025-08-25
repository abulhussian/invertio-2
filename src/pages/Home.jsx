import { motion } from "framer-motion"
import { ArrowRight, Play, CheckCircle, Users, Award, Globe, TrendingUp } from "lucide-react"
import { Link } from "react-router-dom"
import Section from "../components/Section"
import LogoMarquee from "../components/LogoMarquee"
import StatCounter from "../components/StatCounter"
import ServiceCard from "../components/ServiceCard"
import IndustryCarousel from "../components/IndustryCarousel"
import CaseStudyCard from "../components/CaseStudyCard"
import { MotionFadeIn, MotionSlideUp, MotionStagger } from "../components/MotionWrapper"
import services from "../data/services.json"
import industries from "../data/industries.json"
import caseStudies from "../data/casestudies.json"

const Home = () => {
  const featuredCaseStudies = caseStudies.filter(study => study.featured).slice(0, 3)
  
  const stats = [
    { number: 500, suffix: "+", label: "Projects Delivered", icon: Award },
    { number: 150, suffix: "+", label: "Enterprise Clients", icon: Users },
    { number: 25, suffix: "+", label: "Countries Served", icon: Globe },
    { number: 98, suffix: "%", label: "Client Satisfaction", icon: TrendingUp },
  ]

  const valueProps = [
    {
      title: "Innovation-First Approach",
      description: "Leveraging cutting-edge technologies to solve complex business challenges",
      icon: "⚡",
    },
    {
      title: "Proven Track Record",
      description: "500+ successful projects across diverse industries and geographies",
      icon: "🏆",
    },
    {
      title: "End-to-End Solutions",
      description: "From strategy to implementation, we handle every aspect of your digital journey",
      icon: "🔄",
    },
    {
      title: "Global Expertise",
      description: "World-class talent and 24/7 support across multiple time zones",
      icon: "🌍",
    },
  ]

  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero Section */}
      <Section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-[#05164d]/20 to-[#ffad00]/20 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 20,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />
          <motion.div
            className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-[#ffad00]/20 to-[#05164d]/20 rounded-full blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              rotate: [360, 180, 0],
            }}
            transition={{
              duration: 25,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />
        </div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <MotionSlideUp className="space-y-8">
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center px-4 py-2 bg-[#05164d]/10 dark:bg-[#05164d]/20 text-[#05164d] dark:text-[#05164d]/80 rounded-full text-sm font-medium"
              >
                <span className="w-2 h-2 bg-[#05164d] rounded-full mr-2 animate-pulse" />
                Transforming Enterprise Technology
              </motion.div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                <span className="block">Accelerate Your</span>
                <span className="gradient-text">Digital Future</span>
              </h1>

              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl">
                Partner with industry leaders to transform your business through innovative technology solutions, 
                cloud services, and digital transformation strategies that drive measurable results.
              </p>
            </div>

            <MotionStagger className="flex flex-col sm:flex-row gap-4" staggerDelay={0.1}>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-[#05164d] hover:bg-[#0a2a8c] text-white font-semibold rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl group"
                >
                  Get Started Today
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <button className="inline-flex items-center px-8 py-4 border-2 border-gray-300 dark:border-gray-600 hover:border-[#05164d] dark:hover:border-[#05164d] text-gray-700 dark:text-gray-300 hover:text-[#05164d] dark:hover:text-[#05164d] font-semibold rounded-xl transition-all duration-200 group">
                  <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                  Watch Demo
                </button>
              </motion.div>
            </MotionStagger>

            {/* Trust Indicators */}
            <MotionFadeIn delay={0.8} className="flex items-center space-x-6 pt-4">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-sm text-gray-600 dark:text-gray-400">ISO 27001 Certified</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-sm text-gray-600 dark:text-gray-400">SOC 2 Type II</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-sm text-gray-600 dark:text-gray-400">GDPR Compliant</span>
              </div>
            </MotionFadeIn>
          </MotionSlideUp>

          {/* Hero Image/Animation */}
          <MotionFadeIn delay={0.4} className="relative">
            <div className="relative">
              <motion.div
                className="relative z-10"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              >
                <img
                  src="/modern-tech-dashboard.png"
                  alt="Enterprise Technology Dashboard"
                  className="w-full h-auto rounded-2xl shadow-2xl"
                  loading="eager"
                />
              </motion.div>
              
              {/* Floating Elements */}
              <motion.div
                className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-[#05164d] to-[#ffad00] rounded-2xl shadow-lg flex items-center justify-center"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              >
                <span className="text-white font-bold text-lg">AI</span>
              </motion.div>
              
              <motion.div
                className="absolute -bottom-6 -left-6 w-20 h-20 bg-gradient-to-br from-[#ffad00] to-[#05164d] rounded-xl shadow-lg flex items-center justify-center"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1 }}
              >
                <span className="text-white font-bold">⚡</span>
              </motion.div>
            </div>
          </MotionFadeIn>
        </div>
      </Section>

      {/* Logo Marquee */}
      <LogoMarquee />

      {/* Stats Section */}
      <Section className="bg-white dark:bg-gray-900">
        <MotionSlideUp className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Delivering Excellence at Scale
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Our track record speaks for itself. We've helped hundreds of enterprises transform their operations 
            and achieve unprecedented growth through technology.
          </p>
        </MotionSlideUp>

        <MotionStagger className="grid grid-cols-2 lg:grid-cols-4 gap-8" staggerDelay={0.1}>
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center p-6 rounded-2xl bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-[#05164d] to-[#ffad00] rounded-xl flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                <StatCounter end={stat.number} suffix={stat.suffix} />
              </div>
              <p className="text-gray-600 dark:text-gray-400 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </MotionStagger>
      </Section>

      {/* Value Propositions */}
      <Section className="bg-gray-50 dark:bg-gray-800/50">
        <MotionSlideUp className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Why Choose Invertio
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We combine deep technical expertise with business acumen to deliver solutions that drive real impact.
          </p>
        </MotionSlideUp>

        <MotionStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" staggerDelay={0.1}>
          {valueProps.map((prop, index) => (
            <motion.div
              key={prop.title}
              className="p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group"
              whileHover={{ y: -5 }}
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{prop.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{prop.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{prop.description}</p>
            </motion.div>
          ))}
        </MotionStagger>
      </Section>

      {/* Services Section */}
      <Section className="bg-white dark:bg-gray-900">
        <MotionSlideUp className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Our Core Services
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            Comprehensive technology solutions designed to accelerate your digital transformation journey.
          </p>
          <Link
            to="/services"
            className="inline-flex items-center text-[#05164d] dark:text-[#05164d]/80 hover:text-[#0a2a8c] dark:hover:text-[#05164d] font-semibold group"
          >
            View All Services
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </MotionSlideUp>

        <MotionStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" staggerDelay={0.1}>
          {services.slice(0, 6).map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </MotionStagger>
      </Section>

      {/* Industries Carousel */}
      <Section className="bg-gray-50 dark:bg-gray-800/50">
        <MotionSlideUp className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Industries We Serve
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Deep domain expertise across key industries, delivering tailored solutions that address specific challenges.
          </p>
        </MotionSlideUp>

        <IndustryCarousel industries={industries} />
      </Section>

      {/* Featured Case Studies */}
      <Section className="bg-white dark:bg-gray-900">
        <MotionSlideUp className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Success Stories
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
            Real results from real clients. See how we've helped organizations transform their operations and achieve their goals.
          </p>
          <Link
            to="/work"
            className="inline-flex items-center text-[#05164d] dark:text-[#05164d]/80 hover:text-[#0a2a8c] dark:hover:text-[#05164d] font-semibold group"
          >
            View All Case Studies
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </MotionSlideUp>

        <MotionStagger className="grid grid-cols-1 lg:grid-cols-3 gap-8" staggerDelay={0.2}>
          {featuredCaseStudies.map((study) => (
            <CaseStudyCard key={study.id} study={study} />
          ))}
        </MotionStagger>
      </Section>

      {/* CTA Section */}
      <Section className="bg-gradient-to-r from-[#05164d] via-[#0a2a8c] to-[#ffad00] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative z-10 text-center">
          <MotionSlideUp>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Let's discuss how our expertise can help you achieve your digital transformation goals and drive sustainable growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-white text-[#05164d] font-semibold rounded-xl hover:bg-gray-100 transition-colors shadow-lg"
                >
                  Start Your Journey
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/work"
                  className="inline-flex items-center px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 transition-colors"
                >
                  View Our Work
                </Link>
              </motion.div>
            </div>
          </MotionSlideUp>
        </div>
      </Section>
    </div>
  )
}

export default Home