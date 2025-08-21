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

  const timelineEvents = [
    {
      year: "2009",
      title: "Company Founded",
      description: "Started as a small consulting firm with a vision to transform enterprise technology.",
    },
    {
      year: "2012",
      title: "First Major Client",
      description: "Secured our first Fortune 500 client, establishing credibility in the enterprise market.",
    },
    {
      year: "2015",
      title: "Global Expansion",
      description: "Opened offices in Europe and Asia, becoming a truly global technology partner.",
    },
    {
      year: "2018",
      title: "Cloud Specialization",
      description: "Became certified partners with major cloud providers, leading digital transformation initiatives.",
    },
    {
      year: "2021",
      title: "AI Innovation Lab",
      description: "Launched dedicated AI research division, pioneering machine learning solutions for enterprises.",
    },
    {
      year: "2024",
      title: "Industry Leadership",
      description: "Recognized as a leader in digital transformation, serving 150+ enterprise clients globally.",
    },
  ]

  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero Section */}
      <Section className="bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <MotionSlideUp>
            <div className="inline-flex items-center px-4 py-2 bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 rounded-full text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-primary-500 rounded-full mr-2 animate-pulse" />
              About TechCorp
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Pioneering the Future of
              <span className="gradient-text block">Enterprise Technology</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              For over 15 years, we've been at the forefront of digital transformation, helping organizations harness
              the power of technology to drive innovation, efficiency, and growth.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-xl transition-colors shadow-lg hover:shadow-xl group"
            >
              Partner With Us
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </MotionSlideUp>

          <MotionFadeIn delay={0.3}>
            <div className="relative">
              <img
                src="/modern-office-collaboration.png"
                alt="TechCorp Team"
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
              <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-accent-violet rounded-xl flex items-center justify-center mx-auto mb-4">
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

      {/* Mission & Vision */}
      <Section className="bg-gray-50 dark:bg-gray-800/50">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <MotionSlideUp>
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-accent-violet rounded-xl flex items-center justify-center mr-4">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Our Mission</h2>
            </div>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              To empower organizations worldwide with innovative technology solutions that drive digital transformation,
              enhance operational efficiency, and create sustainable competitive advantages in an ever-evolving digital
              landscape.
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              We believe that technology should be an enabler of human potential, not a barrier. Our mission is to
              bridge the gap between complex technology and business objectives, making digital transformation
              accessible and impactful for organizations of all sizes.
            </p>
          </MotionSlideUp>

          <MotionSlideUp delay={0.2}>
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-accent-violet to-accent-rose rounded-xl flex items-center justify-center mr-4">
                <Eye className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Our Vision</h2>
            </div>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              To be the world's most trusted partner in enterprise digital transformation, recognized for our
              innovation, expertise, and unwavering commitment to client success across all industries and geographies.
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              We envision a future where every organization can harness the full potential of technology to create
              meaningful impact, drive sustainable growth, and contribute to a better world through innovation and
              responsible business practices.
            </p>
          </MotionSlideUp>
        </div>
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
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              className="text-center p-6 rounded-2xl bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 group"
              whileHover={{ y: -5 }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-accent-violet rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <value.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">{value.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </MotionStagger>
      </Section>

      {/* Timeline */}
      <Section className="bg-gray-50 dark:bg-gray-800/50">
        <MotionSlideUp className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Our Journey</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            From a small consulting firm to a global technology leader, discover the milestones that shaped our story.
          </p>
        </MotionSlideUp>

        <Timeline events={timelineEvents} />
      </Section>

      {/* Leadership Team */}
      <Section id="leadership" className="bg-white dark:bg-gray-900">
        <MotionSlideUp className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Leadership Team</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Meet the visionary leaders driving our mission and shaping the future of enterprise technology.
          </p>
        </MotionSlideUp>

        <MotionStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" staggerDelay={0.1}>
          {leadership.map((member) => (
            <TeamCard key={member.name} member={member} />
          ))}
        </MotionStagger>
      </Section>

      {/* CTA Section */}
      <Section className="bg-gradient-to-r from-primary-600 via-accent-violet to-accent-rose text-white">
        <div className="text-center">
          <MotionSlideUp>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Our Journey</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Whether you're looking to transform your business or join our team, we'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-primary-600 font-semibold rounded-xl hover:bg-gray-100 transition-colors shadow-lg"
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
