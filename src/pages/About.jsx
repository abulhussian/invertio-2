"use client"
import { motion } from "framer-motion"
import { ArrowRight, Users, Award, Globe, TrendingUp, Target, Eye, Heart } from "lucide-react"
import { Link } from "react-router-dom"
import Section from "../components/Section"
import Timeline from "../components/Timeline"
import TeamCard from "../components/TeamCard"
import StatCounter from "../components/StatCounter"
import { MotionFadeIn, MotionSlideUp, MotionStagger } from "../components/MotionWrapper"

const About = () => {
  const stats = [
    { number: 15, suffix: "+", label: "Years of Excellence", icon: Award },
    { number: 500, suffix: "+", label: "Projects Delivered", icon: TrendingUp },
    { number: 150, suffix: "+", label: "Enterprise Clients", icon: Users },
    { number: 25, suffix: "+", label: "Countries Served", icon: Globe },
  ]

  const values = [
    {
      icon: Target,
      title: "Innovation First",
      description:
        "We embrace cutting-edge technologies and methodologies to deliver solutions that drive real business value.",
    },
    {
      icon: Users,
      title: "Client Success",
      description:
        "Our success is measured by our clients' achievements. We're committed to delivering exceptional results.",
    },
    {
      icon: Heart,
      title: "Integrity",
      description: "We operate with transparency, honesty, and ethical practices in all our business relationships.",
    },
    {
      icon: Globe,
      title: "Global Excellence",
      description:
        "World-class expertise with local understanding, delivering solutions that work across cultures and markets.",
    },
  ]

  const leadership = [
    {
      name: "Sarah Chen",
      role: "Chief Executive Officer",
      bio: "Visionary leader with 20+ years in enterprise technology, driving digital transformation across Fortune 500 companies.",
      image: "/placeholder.svg?height=300&width=300",
      linkedin: "https://linkedin.com/in/sarahchen",
      twitter: "https://twitter.com/sarahchen",
    },
    {
      name: "Michael Rodriguez",
      role: "Chief Technology Officer",
      bio: "Technology innovator specializing in cloud architecture, AI/ML, and scalable enterprise solutions.",
      image: "/placeholder.svg?height=300&width=300",
      linkedin: "https://linkedin.com/in/michaelrodriguez",
      twitter: "https://twitter.com/michaelrodriguez",
    },
    {
      name: "Jennifer Park",
      role: "Chief Operating Officer",
      bio: "Operations expert focused on delivering excellence through process optimization and team development.",
      image: "/placeholder.svg?height=300&width=300",
      linkedin: "https://linkedin.com/in/jenniferpark",
      twitter: "https://twitter.com/jenniferpark",
    },
    {
      name: "David Kim",
      role: "Chief Strategy Officer",
      bio: "Strategic thinker driving business growth through market analysis, partnerships, and innovation initiatives.",
      image: "/placeholder.svg?height=300&width=300",
      linkedin: "https://linkedin.com/in/davidkim",
      twitter: "https://twitter.com/davidkim",
    },
  ]

  // ✅ Sister Companies
  const timelineEvents = [
    {
      image: "/aivaah-logo.png",
      title: "AVIAAH",
      description: "A leading provider of cloud and infrastructure solutions, empowering businesses worldwide.",
    },
    {
      image: "/invertio-taxiation.jpg",
      title: "Invertio Taxiation",
      description: "Focused on AI and machine learning products that drive automation and smart decision-making.",
    },
    {
      image: "/novanal-logo.png",
      title: "Novanal",
      description: "Revolutionizing financial services with blockchain-powered platforms and digital banking tools.",
    },
  ]

  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero Section */}
      <Section className="bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <MotionSlideUp>
            <div className="inline-flex items-center px-4 py-2 bg-[#05164d]/10 text-[#05164d] dark:text-[#05164d] rounded-full text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-[#05164d] rounded-full mr-2 animate-pulse" />
              About Invertio
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Pioneering the Future of
              <span className="block text-[#05164d]">Enterprise Technology</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              For over 15 years, we've been at the forefront of digital transformation, helping organizations harness
              the power of technology to drive innovation, efficiency, and growth.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-[#05164d] hover:bg-[#04113b] text-white font-semibold rounded-xl transition-colors shadow-lg hover:shadow-xl group"
            >
              Partner With Us
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </MotionSlideUp>

          <MotionFadeIn delay={0.3}>
            <div className="relative">
              <img
                src="/modern-office-collaboration.png"
                alt="Invertio Team"
                className="w-full h-auto rounded-2xl shadow-2xl"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl" />
            </div>
          </MotionFadeIn>
        </div>
      </Section>

      {/* Stats Section */}
      <Section className="bg-white dark:bg-gray-900">
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

      {/* Values */}
      <Section className="bg-white dark:bg-gray-900">
        <MotionSlideUp className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Our Core Values</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            The principles that guide our decisions, shape our culture, and define our commitment to excellence.
          </p>
        </MotionSlideUp>

        <MotionStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" staggerDelay={0.1}>
          {values.map((value) => (
            <motion.div
              key={value.title}
              className="text-center p-6 rounded-2xl bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 group"
              whileHover={{ y: -5 }}
            >
              <div className="w-16 h-16 bg-[#05164d] rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <value.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">{value.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </MotionStagger>
      </Section>

      {/* Sister Companies Timeline */}
      <Section className="bg-gray-50 dark:bg-gray-800/50">
        <MotionSlideUp className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Our Sister Companies</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Together with our sister companies, we are building a strong ecosystem of innovation and excellence.
          </p>
        </MotionSlideUp>

        <Timeline events={timelineEvents} />
      </Section>

      {/* CTA Section */}
      <Section className="bg-gradient-to-r from-[#05164d] to-[#04113b] text-white">
        <div className="text-center">
          <MotionSlideUp>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Our Journey</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Whether you're looking to transform your business or join our team, we'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-[#05164d] font-semibold rounded-xl hover:bg-gray-100 transition-colors shadow-lg"
              >
                Partner With Us
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/careers"
                className="inline-flex items-center px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 transition-colors"
              >
                Join Our Team
              </Link>
            </div>
          </MotionSlideUp>
        </div>
      </Section>
    </div>
  )
}

export default About
