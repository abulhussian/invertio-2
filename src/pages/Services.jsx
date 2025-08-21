"use client"
import { motion } from "framer-motion"
import { CheckCircle, ArrowRight, Zap, Cloud, Code, BarChart3, Shield, Users } from "lucide-react"
import { Link } from "react-router-dom"
import Section from "../components/Section"
import ServiceCard from "../components/ServiceCard"
import { MotionFadeIn, MotionSlideUp, MotionStagger } from "../components/MotionWrapper"
import services from "../data/services.json"

const iconMap = {
  Zap,
  Cloud,
  Code,
  BarChart3,
  Shield,
  Users,
}

const Services = () => {
  const benefits = [
    "Proven methodologies and best practices",
    "Experienced team of certified professionals",
    "End-to-end project management",
    "24/7 support and maintenance",
    "Scalable and future-ready solutions",
    "Compliance with industry standards",
  ]

  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero Section */}
      <Section className="bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="text-center max-w-4xl mx-auto">
          <MotionSlideUp>
            <div className="inline-flex items-center px-4 py-2 bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 rounded-full text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-primary-500 rounded-full mr-2 animate-pulse" />
              Comprehensive Technology Solutions
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Services That Drive
              <span className="gradient-text block">Digital Excellence</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              From strategy to implementation, we provide end-to-end technology solutions that transform your business
              operations and accelerate growth.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-xl transition-colors shadow-lg hover:shadow-xl group"
            >
              Get Started Today
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </MotionSlideUp>
        </div>
      </Section>

      {/* Services Grid */}
      <Section className="bg-white dark:bg-gray-900">
        <MotionSlideUp className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Our Core Services</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Comprehensive solutions designed to meet your unique business challenges and drive sustainable growth.
          </p>
        </MotionSlideUp>

        <MotionStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" staggerDelay={0.1}>
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </MotionStagger>
      </Section>

      {/* Detailed Service Sections */}
      {services.map((service, index) => {
        const IconComponent = iconMap[service.icon] || Zap
        const isEven = index % 2 === 0

        return (
          <Section
            key={service.id}
            id={service.id}
            className={isEven ? "bg-gray-50 dark:bg-gray-800/50" : "bg-white dark:bg-gray-900"}
          >
            <div
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${isEven ? "" : "lg:grid-flow-col-dense"}`}
            >
              <MotionSlideUp className={isEven ? "" : "lg:col-start-2"}>
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-accent-violet rounded-xl flex items-center justify-center mb-6">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">{service.title}</h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">{service.description}</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <motion.div
                      key={feature}
                      className="flex items-center space-x-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: featureIndex * 0.1 }}
                    >
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                <Link
                  to="/contact"
                  className="inline-flex items-center px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg transition-colors group"
                >
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </MotionSlideUp>

              <MotionFadeIn delay={0.3} className={isEven ? "" : "lg:col-start-1"}>
                <div className="relative">
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    className="w-full h-auto rounded-2xl shadow-2xl"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl" />
                </div>
              </MotionFadeIn>
            </div>
          </Section>
        )
      })}

      {/* Why Choose Us */}
      <Section className="bg-gradient-to-r from-primary-600 via-accent-violet to-accent-rose text-white">
        <div className="text-center mb-16">
          <MotionSlideUp>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Our Services</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              We combine deep technical expertise with proven methodologies to deliver exceptional results.
            </p>
          </MotionSlideUp>
        </div>

        <MotionStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.1}>
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit}
              className="flex items-center space-x-3 p-4 bg-white/10 backdrop-blur-sm rounded-lg"
              whileHover={{ scale: 1.02 }}
            >
              <CheckCircle className="w-6 h-6 text-green-300 flex-shrink-0" />
              <span className="font-medium">{benefit}</span>
            </motion.div>
          ))}
        </MotionStagger>

        <MotionFadeIn delay={0.6} className="text-center mt-12">
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-white text-primary-600 font-semibold rounded-xl hover:bg-gray-100 transition-colors shadow-lg"
          >
            Start Your Project
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </MotionFadeIn>
      </Section>
    </div>
  )
}

export default Services
