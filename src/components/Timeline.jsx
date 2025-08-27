"use client"
import { motion } from "framer-motion"
import { CheckCircle } from "lucide-react"

const Timeline = ({ events }) => {
  return (
    <div className="relative">
      {/* Timeline Line */}
      <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 to-accent-violet transform md:-translate-x-0.5" />

      <div className="space-y-12">
        {events.map((event, index) => (
          <motion.div
            key={event.year}
            className={`relative flex items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            {/* Timeline Node */}
            <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-primary-600 rounded-full border-4 border-white dark:border-gray-900 transform md:-translate-x-1/2 z-10">
              <motion.div
                className="absolute inset-0 bg-primary-600 rounded-full"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              />
            </div>

            {/* Content */}
            <div className={`flex-1 ml-12 md:ml-0 ${index % 2 === 0 ? "md:pr-8" : "md:pl-8"}`}>
              <motion.div
                className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center mb-3">
                  <img src={event.image} alt={event.title} className=" mr-3" />
                  <CheckCircle className="w-5 h-5 text-green-500" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{event.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{event.description}</p>
              </motion.div>
            </div>

            {/* Spacer for alternating layout */}
            <div className="hidden md:block flex-1" />
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Timeline
