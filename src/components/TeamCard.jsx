"use client"
import { motion } from "framer-motion"
import { Linkedin, Twitter, Mail } from "lucide-react"

const TeamCard = ({ member }) => {
  return (
    <motion.div className="group cursor-pointer" whileHover={{ y: -5 }} transition={{ duration: 0.3 }}>
      <div className="relative overflow-hidden rounded-2xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-2xl transition-all duration-300">
        {/* Image */}
        <div className="relative h-64 overflow-hidden">
          <img
            src={member.image || "/placeholder.svg"}
            alt={member.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

          {/* Social Links Overlay */}
          <motion.div
            className="absolute bottom-4 left-4 right-4 flex justify-center space-x-3"
            initial={{ opacity: 0, y: 20 }}
            whileHover={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {member.linkedin && (
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
              >
                <Linkedin className="w-5 h-5 text-white" />
              </a>
            )}
            {member.twitter && (
              <a
                href={member.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
              >
                <Twitter className="w-5 h-5 text-white" />
              </a>
            )}
            <a
              href={`mailto:${member.name.toLowerCase().replace(" ", ".")}@techcorp.com`}
              className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
            >
              <Mail className="w-5 h-5 text-white" />
            </a>
          </motion.div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
            {member.name}
          </h3>
          <p className="text-primary-600 dark:text-primary-400 font-medium mb-3">{member.role}</p>
          <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{member.bio}</p>
        </div>

        {/* Hover Effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-accent-violet/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          initial={false}
        />
      </div>
    </motion.div>
  )
}

export default TeamCard
