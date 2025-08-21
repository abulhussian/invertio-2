"use client"
import { motion } from "framer-motion"
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion"

// Fade in animation wrapper
export const MotionFadeIn = ({ children, delay = 0, duration = 0.6, className = "", ...props }) => {
  const prefersReducedMotion = usePrefersReducedMotion()

  const variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: prefersReducedMotion ? 0.01 : duration,
        delay: prefersReducedMotion ? 0 : delay,
      },
    },
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={variants}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
}

// Slide up animation wrapper
export const MotionSlideUp = ({ children, delay = 0, duration = 0.6, distance = 30, className = "", ...props }) => {
  const prefersReducedMotion = usePrefersReducedMotion()

  const variants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : distance },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: prefersReducedMotion ? 0.01 : duration,
        delay: prefersReducedMotion ? 0 : delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={variants}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
}

// Stagger children animation wrapper
export const MotionStagger = ({ children, staggerDelay = 0.1, className = "", ...props }) => {
  const prefersReducedMotion = usePrefersReducedMotion()

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : staggerDelay,
      },
    },
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={containerVariants}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
}

// Default export MotionWrapper component
const MotionWrapper = ({ children, delay = 0, duration = 0.6, distance = 30, className = "", ...props }) => {
  const prefersReducedMotion = usePrefersReducedMotion()

  const variants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : distance },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: prefersReducedMotion ? 0.01 : duration,
        delay: prefersReducedMotion ? 0 : delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={variants}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
}

// Default export
export default MotionWrapper
