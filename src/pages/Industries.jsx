"use client"
import { motion } from "framer-motion"
import { ArrowRight, Building2, Heart, ShoppingCart, Radio, Car, Factory } from "lucide-react"
import { Link } from "react-router-dom"
import Section from "../components/Section"
import { MotionFadeIn, MotionSlideUp, MotionStagger } from "../components/MotionWrapper"
import industries from "../data/industries.json"

const iconMap = {
  Building2,
  Heart,
  ShoppingCart,
  Radio,
  Car,
  Factory,
}

const Industries = () => {
  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero Section */}
      <Section className="bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="text-center max-w-4xl mx-auto">
          <MotionSlideUp>
            <div className="inline-flex items-center px-4 py-2 bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 rounded-full text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-primary-500 rounded-full mr-2 animate-pulse" />
              Industry Expertise
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Transforming Industries
              <span className="gradient-text block">Across the Globe</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Deep domain expertise and tailored solutions for the world's most dynamic industries, driving innovation
              and growth at scale.
            </p>
          </MotionSlideUp>
        </div>
      </Section>

      {/* Industries Grid */}
      <Section className="bg-white dark:bg-gray-900">
        <MotionStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" staggerDelay={0.1}>
          {industries.map((industry) => {
            const IconComponent = iconMap[industry.icon] || Building2

            return (
              <motion.div
                key={industry.id}
                className="group cursor-pointer"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative overflow-hidden rounded-2xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-2xl transition-all duration-300 h-full">
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={industry.image || "/placeholder.svg"}
                      alt={industry.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                    {/* Icon Overlay */}
                    <div className="absolute top-6 left-6 w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                      {industry.title}
                    </h3>

                    <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">{industry.description}</p>

                    {/* Stats */}
                    <div className="flex justify-between items-center mb-6 p-4 bg-gray-50 dark:bg-gray-700 rounded-xl">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">
                          {industry.stats.projects}
                        </div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">Projects Delivered</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">
                          {industry.stats.clients}
                        </div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">Happy Clients</div>
                      </div>
                    </div>

                    {/* CTA */}
                    <Link
                      to={`/work?industry=${industry.id}`}
                      className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-semibold group/link"
                    >
                      View Case Studies
                      <ArrowRight className="ml-2 w-5 h-5 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </MotionStagger>
      </Section>

      {/* Detailed Industry Sections */}
      {industries.map((industry, index) => {
        const IconComponent = iconMap[industry.icon] || Building2
        const isEven = index % 2 === 0

        return (
          <Section
            key={industry.id}
            id={industry.id}
            className={isEven ? "bg-gray-50 dark:bg-gray-800/50" : "bg-white dark:bg-gray-900"}
          >
            <div
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${isEven ? "" : "lg:grid-flow-col-dense"}`}
            >
              <MotionSlideUp className={isEven ? "" : "lg:col-start-2"}>
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-accent-violet rounded-xl flex items-center justify-center mb-6">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">{industry.title}</h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">{industry.description}</p>

                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm">
                    <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                      {industry.stats.projects}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Projects Completed</div>
                  </div>
                  <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm">
                    <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                      {industry.stats.clients}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Satisfied Clients</div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    to={`/work?industry=${industry.id}`}
                    className="inline-flex items-center px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg transition-colors group"
                  >
                    View Case Studies
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    to="/contact"
                    className="inline-flex items-center px-6 py-3 border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 font-medium rounded-lg transition-colors"
                  >
                    Get Consultation
                  </Link>
                </div>
              </MotionSlideUp>

              <MotionFadeIn delay={0.3} className={isEven ? "" : "lg:col-start-1"}>
                <div className="relative">
                  <img
                    src={industry.image || "/placeholder.svg"}
                    alt={industry.title}
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

      {/* CTA Section */}
      <Section className="bg-gradient-to-r from-primary-600 via-accent-violet to-accent-rose text-white">
        <div className="text-center">
          <MotionSlideUp>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Industry?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Let's discuss how our industry expertise can help you overcome challenges and achieve your business
              objectives.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-primary-600 font-semibold rounded-xl hover:bg-gray-100 transition-colors shadow-lg"
            >
              Start Your Transformation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </MotionSlideUp>
        </div>
      </Section>
    </div>
  )
}

export default Industries
