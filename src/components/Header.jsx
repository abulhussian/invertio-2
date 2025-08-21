"use client"
import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ChevronDown } from "lucide-react"
import ThemeToggle from "./ThemeToggle"
import { cn } from "../utils/cn"

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const location = useLocation()

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false)
    setActiveDropdown(null)
  }, [location])

  const navigationItems = [
    {
      name: "Services",
      href: "/services",
      hasDropdown: true,
      columns: [
        {
          title: "Core Services",
          items: [
            { name: "Digital Transformation", href: "/services#digital-transformation" },
            { name: "Cloud Services", href: "/services#cloud-services" },
            { name: "Software Development", href: "/services#software-development" },
          ],
        },
        {
          title: "Specialized Solutions",
          items: [
            { name: "Data & Analytics", href: "/services#data-analytics" },
            { name: "Cybersecurity", href: "/services#cybersecurity" },
            { name: "IT Consulting", href: "/services#consulting" },
          ],
        },
      ],
    },
    {
      name: "Industries",
      href: "/industries",
      hasDropdown: true,
      columns: [
        {
          title: "Financial Services",
          items: [
            { name: "Banking & Financial", href: "/industries#banking-financial" },
            { name: "Fintech Solutions", href: "/industries#fintech" },
          ],
        },
        {
          title: "Technology & Innovation",
          items: [
            { name: "Healthcare", href: "/industries#healthcare" },
            { name: "Retail & E-commerce", href: "/industries#retail-ecommerce" },
            { name: "Telecommunications", href: "/industries#telecommunications" },
            { name: "Automotive", href: "/industries#automotive" },
          ],
        },
      ],
    },
    { name: "Work", href: "/work" },
    { name: "Insights", href: "/insights" },
    { name: "About", href: "/about" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact" },
  ]

  const isActiveRoute = (href) => {
    if (href === "/" && location.pathname === "/") return true
    if (href !== "/" && location.pathname.startsWith(href)) return true
    return false
  }

  const handleDropdownToggle = (itemName) => {
    setActiveDropdown(activeDropdown === itemName ? null : itemName)
  }

  const handleKeyDown = (event, itemName) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault()
      handleDropdownToggle(itemName)
    }
    if (event.key === "Escape") {
      setActiveDropdown(null)
    }
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg border-b border-gray-200/50 dark:border-gray-700/50"
          : "bg-transparent",
      )}
    >
      <nav className="container-custom">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-10 h-10 bg-gradient-to-br from-primary-600 to-accent-violet rounded-lg flex items-center justify-center"
            >
              <span className="text-white font-bold text-xl">I</span>
            </motion.div>
            <span className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
              Invertio
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-5 py-10">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative group">
                {item.hasDropdown ? (
                  <div>
                    <button
                      onClick={() => handleDropdownToggle(item.name)}
                      onKeyDown={(e) => handleKeyDown(e, item.name)}
                      className={cn(
                        "flex items-center space-x-1 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 relative",
                        isActiveRoute(item.href)
                          ? "text-primary-600 dark:text-primary-400"
                          : "text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400",
                      )}
                      aria-expanded={activeDropdown === item.name}
                      aria-haspopup="true"
                    >
                      <span>{item.name}</span>
                      <motion.div
                        animate={{ rotate: activeDropdown === item.name ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ChevronDown className="w-4 h-4" />
                      </motion.div>
                      {/* Animated underline */}
                      {isActiveRoute(item.href) && (
                        <motion.div
                          layoutId="activeTab"
                          className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-600 dark:bg-primary-400"
                          initial={false}
                          transition={{ type: "spring", stiffness: 500, damping: 30 }}
                        />
                      )}
                    </button>

                    {/* Mega Dropdown */}
                    <AnimatePresence>
                      {activeDropdown === item.name && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.95 }}
                          transition={{ duration: 0.2, ease: "easeOut" }}
                          className="absolute top-full left-0 mt-2 w-96 bg-white dark:bg-gray-800 rounded-xl shadow-xl border border-gray-200 dark:border-gray-700 p-6"
                          onMouseLeave={() => setActiveDropdown(null)}
                        >
                          <div className="grid grid-cols-1 gap-6">
                            {item.columns.map((column, columnIndex) => (
                              <div key={columnIndex}>
                                <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">
                                  {column.title}
                                </h3>
                                <ul className="space-y-2">
                                  {column.items.map((subItem) => (
                                    <li key={subItem.name}>
                                      <Link
                                        to={subItem.href}
                                        className="block px-3 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-colors"
                                        onClick={() => setActiveDropdown(null)}
                                      >
                                        {subItem.name}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    className={cn(
                      "block px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 relative",
                      isActiveRoute(item.href)
                        ? "text-primary-600 dark:text-primary-400"
                        : "text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400",
                    )}
                  >
                    {item.name}
                    {/* Animated underline */}
                    {isActiveRoute(item.href) && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-600 dark:bg-primary-400"
                        initial={false}
                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                      />
                    )}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Right side actions */}
          <div className="flex items-center space-x-4">
            <ThemeToggle />

            {/* CTA Button - Desktop */}
            <Link
              to="/contact"
              className="hidden lg:inline-flex items-center px-6 py-2.5 bg-primary-600 hover:bg-primary-700 text-white text-sm font-medium rounded-lg transition-colors"
            >
              Get Started
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle mobile menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="lg:hidden border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900"
            >
              <div className="py-4 space-y-2">
                {navigationItems.map((item) => (
                  <div key={item.name}>
                    {item.hasDropdown ? (
                      <div>
                        <button
                          onClick={() => handleDropdownToggle(item.name)}
                          className={cn(
                            "flex items-center justify-between w-full px-4 py-3 text-left text-base font-medium transition-colors",
                            isActiveRoute(item.href)
                              ? "text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/20"
                              : "text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gray-50 dark:hover:bg-gray-800",
                          )}
                        >
                          <span>{item.name}</span>
                          <motion.div
                            animate={{ rotate: activeDropdown === item.name ? 180 : 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            <ChevronDown className="w-5 h-5" />
                          </motion.div>
                        </button>

                        <AnimatePresence>
                          {activeDropdown === item.name && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.2 }}
                              className="bg-gray-50 dark:bg-gray-800"
                            >
                              {item.columns.map((column, columnIndex) => (
                                <div key={columnIndex} className="px-4 py-2">
                                  <h4 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">
                                    {column.title}
                                  </h4>
                                  {column.items.map((subItem) => (
                                    <Link
                                      key={subItem.name}
                                      to={subItem.href}
                                      className="block px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                                      onClick={() => {
                                        setIsMobileMenuOpen(false)
                                        setActiveDropdown(null)
                                      }}
                                    >
                                      {subItem.name}
                                    </Link>
                                  ))}
                                </div>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        to={item.href}
                        className={cn(
                          "block px-4 py-3 text-base font-medium transition-colors",
                          isActiveRoute(item.href)
                            ? "text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/20"
                            : "text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gray-50 dark:hover:bg-gray-800",
                        )}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}

                {/* Mobile CTA */}
                <div className="px-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                  <Link
                    to="/contact"
                    className="block w-full text-center px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  )
}

export default Header
