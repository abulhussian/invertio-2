"use client"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "../context/ThemeContext"
import { motion } from "framer-motion"

const ThemeToggle = ({ className = "" }) => {
  const { theme, toggleTheme } = useTheme()

  return (
    <motion.button
      onClick={toggleTheme}
      className={`relative p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
    >
      <motion.div
        initial={false}
        animate={{ rotate: theme === "dark" ? 180 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        {theme === "light" ? <Sun className="w-5 h-5 text-gray-700" /> : <Moon className="w-5 h-5 text-gray-300" />}
      </motion.div>
    </motion.button>
  )
}

export default ThemeToggle
