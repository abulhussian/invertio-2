import React from 'react' // Add this

import { motion } from "framer-motion"
import { ArrowRight, Play, CheckCircle, Users, Award, Globe, TrendingUp } from "lucide-react"
import { Link } from "react-router-dom"
import Section from "../components/Section"
import LogoMarquee from "../components/LogoMarquee"
import StatCounter from "../components/StatCounter"
import ServiceCard from "../components/ServiceCard"
import IndustryCarousel from "../components/IndustryCarousel"
// import CaseStudyCard from "../components/CaseStudyCard"
import { MotionFadeIn } from "../components/MotionWrapper"
import services from "../data/services.json"
import industries from "../data/industries.json"
import caseStudies from "../data/casestudies.json"

const Home = () => {
  const CaseStudyCard = React.lazy(() => import("../components/CaseStudyCard"))

  const featuredCaseStudies = caseStudies.filter(study => study.featured).slice(0, 3)

  const MotionSlideUp = ({ children, className }) => (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.div>
  )

  const MotionStagger = ({ children, className, staggerDelay = 0.1 }) => (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        visible: { transition: { staggerChildren: staggerDelay } }
      }}
    >
      {children}
    </motion.div>
  )

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
      <Section className="relative min-h-screen flex items-center overflow-hidden bg-[#05164d]">
        {/* Background Blur Shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute -top-40 -right-40 w-80 h-80 bg-[#05164d]/40 rounded-full blur-3xl"
            animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
            transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          />
          <motion.div
            className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#05164d]/40 rounded-full blur-3xl"
            animate={{ scale: [1.2, 1, 1.2], rotate: [360, 180, 0] }}
            transition={{ duration: 25, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          />
        </div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <MotionSlideUp className="space-y-8">
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center px-4 py-2 bg-white/10 text-white rounded-full text-sm font-medium"
              >
                <span className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse" />
                Transforming Enterprise Technology
              </motion.div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                <span className="block">Accelerate Your</span>
                <span className="block">Digital Future</span>
              </h1>

              <p className="text-xl text-gray-200 leading-relaxed max-w-2xl">
                Partner with industry leaders to transform your business through innovative technology solutions, 
                cloud services, and digital transformation strategies that drive measurable results.
              </p>
            </div>

            {/* Buttons */}
            <MotionStagger className="flex flex-col sm:flex-row gap-4" staggerDelay={0.1}>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-white text-[#05164d] font-semibold rounded-xl shadow-lg hover:bg-gray-100"
                >
                  Get Started Today
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <button className="inline-flex items-center px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/10">
                  <Play className="mr-2 w-5 h-5" />
                  Watch Demo
                </button>
              </motion.div>
            </MotionStagger>

            {/* Trust Indicators */}
            <MotionFadeIn delay={0.8} className="flex items-center space-x-6 pt-4">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span className="text-sm text-gray-200">ISO 27001 Certified</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span className="text-sm text-gray-200">SOC 2 Type II</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span className="text-sm text-gray-200">GDPR Compliant</span>
              </div>
            </MotionFadeIn>
          </MotionSlideUp>

          {/* Hero Image */}
          <MotionFadeIn delay={0.4} className="relative">
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
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              className="text-center p-6 rounded-2xl bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-12 h-12 bg-[#05164d] rounded-xl flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-[#05164d] mb-2">
                <StatCounter end={stat.number} suffix={stat.suffix} />
              </div>
              <p className="text-gray-600 dark:text-gray-400 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </MotionStagger>
      </Section>

      {/* About Section */}
      <section className="bg-gray-50 dark:bg-gray-900 py-16 px-4 flex flex-col">
        <MotionSlideUp className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Invertio
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Our mission is to make customer communication more intelligent, scalable, and personalized with AI-driven solutions that put people first.
          </p>
        </MotionSlideUp>
        
        <div className="w-full flex flex-col md:flex-row gap-8 items-stretch">
          {/* Left Value Props */}
          <div className="w-full md:w-1/2 flex flex-col justify-between gap-4">
            <MotionStagger className="flex flex-col gap-4 h-full justify-between" staggerDelay={0.1}>
              {valueProps.map((prop, index) => (
                <motion.div
                  key={index}
                  className="p-4 bg-white dark:bg-gray-800 rounded-2xl shadow-lg group flex-1 flex flex-col relative overflow-hidden transition-all duration-300"
                  variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
                  whileHover={{ y: -5 }}
                >
                  <div className="text-3xl mb-2">{prop.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {prop.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed flex-grow">
                    {prop.description}
                  </p>
                </motion.div>
              ))}
            </MotionStagger>
          </div>
          
          {/* Right Image */}
          <div className="w-full md:w-1/2 flex items-stretch">
            <motion.div 
              className="w-full h-full min-h-[400px] bg-white dark:bg-[#05164d] rounded-2xl shadow-lg flex items-center justify-center overflow-hidden"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="text-gray-800 dark:text-white text-center p-6">
                <img src="/aboutus-image.jpg" alt="About Us" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services */}
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
            className="inline-flex items-center text-[#05164d] dark:text-white font-semibold group"
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

      {/* Industries */}
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

      {/* Case Studies */}
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
            className="inline-flex items-center text-[#05164d] dark:text-white font-semibold group"
          >
            View All Case Studies
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </MotionSlideUp>

        <div className="w-full h-screen">
          <CaseStudyCard studies={featuredCaseStudies} />
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-[#05164d] text-white relative overflow-hidden">
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
                  className="inline-flex items-center px-8 py-4 bg-white text-[#05164d] font-semibold rounded-xl hover:bg-gray-100 shadow-lg"
                >
                  Start Your Journey
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/work"
                  className="inline-flex items-center px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/10"
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
