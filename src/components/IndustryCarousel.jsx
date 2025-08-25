"use client"
import { motion, useMotionValue, useTransform } from "framer-motion"
import { useState, useRef, useEffect } from "react"
import { ChevronLeft, ChevronRight, Building2, Heart, ShoppingCart, Radio, Car, Factory } from "lucide-react"
import { Link } from "react-router-dom"

const iconMap = {
  Building2,
  Heart,
  ShoppingCart,
  Radio,
  Car,
  Factory,
}

const IndustryCarousel = ({ industries }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const constraintsRef = useRef(null)
  const x = useMotionValue(0)
  const opacity = useTransform(x, [-200, 0, 200], [0.5, 1, 0.5])

  const itemsPerView = {
    mobile: 1,
    tablet: 2,
    desktop: 3,
  }

  const [itemsToShow, setItemsToShow] = useState(itemsPerView.desktop)

  useEffect(() => {
    const updateItemsToShow = () => {
      if (window.innerWidth < 768) {
        setItemsToShow(itemsPerView.mobile)
      } else if (window.innerWidth < 1024) {
        setItemsToShow(itemsPerView.tablet)
      } else {
        setItemsToShow(itemsPerView.desktop)
      }
    }

    updateItemsToShow()
    window.addEventListener("resize", updateItemsToShow)
    return () => window.removeEventListener("resize", updateItemsToShow)
  }, [])

  const maxIndex = Math.max(0, industries.length - itemsToShow)

  const nextSlide = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex))
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0))
  }

  const goToSlide = (index) => {
    setCurrentIndex(Math.min(index, maxIndex))
  }

  return (
    <div className="relative">
      {/* Navigation Buttons */}
      <div className="flex justify-between items-center mb-8">
        <div className="flex space-x-2">
          <motion.button
            onClick={prevSlide}
            disabled={currentIndex === 0}
            className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronLeft className="w-5 h-5 text-gray-600 dark:text-gray-400" />
          </motion.button>
          <motion.button
            onClick={nextSlide}
            disabled={currentIndex === maxIndex}
            className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronRight className="w-5 h-5 text-gray-600 dark:text-gray-400" />
          </motion.button>
        </div>

        {/* Dots Indicator */}
        <div className="flex space-x-2">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-200 ${
                index === currentIndex
                  ? "bg-[#05164d] w-8"
                  : "bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Carousel Container */}
      <div className="overflow-hidden" ref={constraintsRef}>
        <motion.div
          className="flex gap-6"
          animate={{
            x: `-${currentIndex * (100 / itemsToShow)}%`,
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 30,
          }}
          drag="x"
          dragConstraints={constraintsRef}
          dragElastic={0.1}
          onDragStart={() => setIsDragging(true)}
          onDragEnd={(_, info) => {
            setIsDragging(false)
            const threshold = 50
            if (info.offset.x > threshold && currentIndex > 0) {
              prevSlide()
            } else if (info.offset.x < -threshold && currentIndex < maxIndex) {
              nextSlide()
            }
          }}
          style={{ x, opacity }}
        >
          {industries.map((industry, index) => {
            const IconComponent = iconMap[industry.icon] || Building2

            return (
              <motion.div
                key={industry.id}
                className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div className="relative group cursor-pointer h-full">
                  <div className="relative overflow-hidden rounded-2xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-2xl transition-all duration-300 h-full">
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={industry.image || "/placeholder.svg"}
                        alt={industry.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                      {/* Icon Overlay */}
                      <div className="absolute top-4 right-4 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-[#05164d] dark:group-hover:text-[#ffad00] transition-colors">
                        {industry.title}
                      </h3>

                      <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">{industry.description}</p>

                      {/* Stats */}
                      <div className="flex justify-between items-center mb-4 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                        <div className="text-center">
                          <div className="text-lg font-bold text-[#05164d] dark:text-[#ffad00]">
                            {industry.stats.projects}
                          </div>
                          <div className="text-xs text-gray-500 dark:text-gray-400">Projects</div>
                        </div>
                        <div className="text-center">
                          <div className="text-lg font-bold text-[#05164d] dark:text-[#ffad00]">
                            {industry.stats.clients}
                          </div>
                          <div className="text-xs text-gray-500 dark:text-gray-400">Clients</div>
                        </div>
                      </div>

                      {/* CTA */}
                      <Link
                        to={`/industries#${industry.id}`}
                        className="inline-flex items-center text-[#05164d] dark:text-[#ffad00] hover:text-[#05164d]/80 dark:hover:text-[#ffad00]/80 font-medium group/link"
                        onClick={(e) => isDragging && e.preventDefault()}
                      >
                        Explore Solutions
                        <motion.div className="ml-2" whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                          <ChevronRight className="w-4 h-4" />
                        </motion.div>
                      </Link>
                    </div>

                    {/* Hover Effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-[#05164d]/5 to-[#ffad00]/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={false}
                    />
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>

      {/* Snap Scroll Indicators */}
      <div className="flex justify-center mt-6 space-x-1">
        {industries.map((_, index) => (
          <div
            key={index}
            className={`h-1 rounded-full transition-all duration-200 ${
              Math.floor(index / itemsToShow) === currentIndex
                ? "bg-[#05164d] w-8"
                : "bg-gray-300 dark:bg-gray-600 w-2"
            }`}
          />
        ))}
      </div>
    </div>
  )
}

export default IndustryCarousel