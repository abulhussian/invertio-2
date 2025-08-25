"use client"
import { motion } from "framer-motion"
import { ArrowRight, Zap, Cloud, Code, BarChart3, Shield, Users } from "lucide-react"
import { Link } from "react-router-dom"
import { useState } from "react"

const iconMap = {
  Zap,
  Cloud,
  Code,
  BarChart3,
  Shield,
  Users,
}

const ServiceCard = ({ service }) => {
  const [isHovered, setIsHovered] = useState(false)
  const [ripples, setRipples] = useState([])

  const IconComponent = iconMap[service.icon] || Zap

  const handleClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const newRipple = {
      id: Date.now(),
      x,
      y,
    }

    setRipples((prev) => [...prev, newRipple])

    // Remove ripple after animation
    setTimeout(() => {
      setRipples((prev) => prev.filter((ripple) => ripple.id !== newRipple.id))
    }, 600)
  }

  return (
    <motion.div
      className="relative group cursor-pointer overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <motion.div
        className="relative p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 h-full"
        whileHover={{
          rotateX: 5,
          rotateY: 5,
        }}
        transition={{ duration: 0.3 }}
        style={{ transformStyle: "preserve-3d" }}
        onClick={handleClick}
      >
        {/* Ripple Effects */}
        {ripples.map((ripple) => (
          <motion.div
            key={ripple.id}
            className="absolute bg-[#05164d]/20 rounded-full pointer-events-none"
            style={{
              left: ripple.x - 25,
              top: ripple.y - 25,
              width: 50,
              height: 50,
            }}
            initial={{ scale: 0, opacity: 1 }}
            animate={{ scale: 4, opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />
        ))}

        {/* Hover Gradient Overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-[#05164d]/5 to-[#ffad00]/5 rounded-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />

        <div className="relative z-10">
          {/* Icon */}
          <motion.div
            className="w-16 h-16 bg-gradient-to-br from-[#05164d] to-[#ffad00] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
            whileHover={{ rotate: 5 }}
          >
            <IconComponent className="w-8 h-8 text-white" />
          </motion.div>

          {/* Content */}
          <h3 className="text-xl font-semibold text-[#05164d] dark:text-[#05164d] mb-3 group-hover:text-[#05164d] dark:group-hover:text-[#05164d] transition-colors">
            {service.title}
          </h3>

          <p className="text-[#05164d] dark:text-[#05164d] mb-6 leading-relaxed">{service.description}</p>

          {/* Features */}
          <ul className="space-y-2 mb-6">
            {service.features.slice(0, 3).map((feature, index) => (
              <motion.li
                key={feature}
                className="flex items-center text-sm text-[#05164d] dark:text-[#05164d]"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="w-1.5 h-1.5 bg-[#05164d] rounded-full mr-3" />
                {feature}
              </motion.li>
            ))}
          </ul>

          {/* CTA */}
          <Link
            to={`/services#${service.id}`}
            className="inline-flex items-center text-[#05164d] dark:text-[#05164d] hover:text-[#05164d] dark:hover:text-[#05164d] font-medium group/link"
          >
            Learn More
            <motion.div className="ml-2" animate={{ x: isHovered ? 5 : 0 }} transition={{ duration: 0.2 }}>
              <ArrowRight className="w-4 h-4" />
            </motion.div>
          </Link>
        </div>

        {/* Shimmer Effect */}
        <motion.div
          className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12"
          animate={{ x: isHovered ? "200%" : "-100%" }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        />
      </motion.div>
    </motion.div>
  )
}

export default ServiceCard