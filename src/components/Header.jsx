"use client"
import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ChevronDown, Sun, Moon } from "lucide-react"

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const [hoverTimeout, setHoverTimeout] = useState(null)
  const [darkMode, setDarkMode] = useState(false)
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

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    document.documentElement.classList.toggle('dark')
  }

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
          title: "Industries",
          items: [
            { name: "Aerospace", href: "/industries#aerospace" },
            { name: "Energy", href: "/industries#energy" },
            { name: "Rail", href: "/industries#rail" },
          ],
        },
        {
          title: "Platforms",
          items: [
            { name: "Appliances & Consumer Goods", href: "/industries#appliances" },
            { name: "Healthcare And Life Sciences", href: "/industries#healthcare" },
            { name: "Semiconductor", href: "/industries#semiconductor" },
          ],
        },
        {
          title: "Capabilities",
          items: [
            { name: "Automotive", href: "/industries#automotive" },
            { name: "Media And Entertainment", href: "/industries#media" },
            { name: "Off-Highway Vehicles", href: "/industries#off-highway" },
            { name: "Communications", href: "/industries#communications" },
          ],
        },
      ],
    },
    { name: "Work", href: "/work", hasDropdown: false },
    { name: "Insights", href: "/insights", hasDropdown: false },
    { name: "About", href: "/about", hasDropdown: false },
    { name: "Careers", href: "/careers", hasDropdown: false },
    { name: "Contact", href: "/contact", hasDropdown: false },
  ]

  const isActiveRoute = (href) => {
    if (href === "/" && location.pathname === "/") return true
    if (href !== "/" && location.pathname.startsWith(href)) return true
    return false
  }

  const handleDropdownEnter = (itemName) => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout)
      setHoverTimeout(null)
    }
    setActiveDropdown(itemName)
  }

  const handleDropdownLeave = () => {
    const timeout = setTimeout(() => {
      setActiveDropdown(null)
    }, 5000) // 5 seconds delay before closing
    setHoverTimeout(timeout)
  }

  const handleDropdownEnterWithDelay = (itemName) => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout)
      setHoverTimeout(null)
    }
    setActiveDropdown(itemName)
  }

  const handleItemClick = () => {
    setActiveDropdown(null)
    setIsMobileMenuOpen(false)
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg border-b border-gray-200/50 dark:border-gray-700/50"
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group z-50">
            <span className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              <img src="/light_invertio_logo_220_70.png" alt="logo" className="w-28 h-12"/>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1 relative">
            {navigationItems.map((item) => (
              <div 
                key={item.name} 
                className="relative h-full"
                onMouseEnter={() => item.hasDropdown && handleDropdownEnterWithDelay(item.name)}
                onMouseLeave={item.hasDropdown ? handleDropdownLeave : undefined}
              >
                {item.hasDropdown ? (
                  <div className="h-full flex justify-between">
                    <Link
                      to={item.href}
                      className="flex items-center space-x-1 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 relative group/nav-item text-gray-700 dark:text-gray-300 hover:text-[#05164d] dark:hover:text-[#ffad00] h-full"
                    >
                      <span>{item.name}</span>
                      <motion.div
                        animate={{ rotate: activeDropdown === item.name ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronDown className="w-4 h-4" />
                      </motion.div>
                      {/* Underlined gradient effect */}
                      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-white via-[#05164d] to-[#ffad00] transition-all duration-300 transform origin-left scale-x-0 group-hover/nav-item:scale-x-100" />
                    </Link>
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    className="block px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 relative text-gray-700 dark:text-gray-300 hover:text-[#05164d] dark:hover:text-[#ffad00] group/nav-item h-full flex items-center"
                  >
                    {item.name}
                    {/* Underlined gradient effect */}
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-white via-[#05164d] to-[#ffad00] transition-all duration-300 transform origin-left scale-x-0 group-hover/nav-item:scale-x-100" />
                  </Link>
                )}
              </div>
            ))}
            
            {/* Full-width dropdown container */}
            <div className="absolute top-full left-0 right-0">
              <AnimatePresence>
                {activeDropdown && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="absolute left-0 right-0 bg-white dark:bg-gray-800 shadow-xl border-b border-gray-200 dark:border-gray-700"
                    onMouseEnter={() => {
                      if (hoverTimeout) {
                        clearTimeout(hoverTimeout)
                        setHoverTimeout(null)
                      }
                    }}
                    onMouseLeave={handleDropdownLeave}
                  >
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                      <div className="flex justify-between items-center gap-8">
                        {navigationItems
                          .find(item => item.name === activeDropdown)
                          ?.columns.map((column, columnIndex) => (
                            <div key={columnIndex} className="flex-1">
                              <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-4 uppercase tracking-wide border-b border-gray-200 dark:border-gray-700 pb-2 text-center">
                                {column.title}
                              </h3>
                              <ul className="space-y-3">
                                {column.items.map((subItem, index) => (
                                  <motion.li 
                                    key={subItem.name}
                                    initial={{ y: 10, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: index * 0.07 }}
                                    whileHover={{ 
                                      y: -3,
                                      transition: { duration: 0.2 }
                                    }}
                                    className="relative flex justify-center"
                                  >
                                    <Link
                                      to={subItem.href}
                                      className="block px-3 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-[#05164d] dark:hover:text-[#ffad00] rounded-lg transition-colors group/subitem text-center"
                                      onClick={handleItemClick}
                                    >
                                      {subItem.name}
                                      {/* Underlined gradient effect for dropdown items */}
                                      <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-white via-[#05164d] to-[#ffad00] transition-all duration-300 group-hover/subitem:w-4/5" />
                                    </Link>
                                  </motion.li>
                                ))}
                              </ul>
                            </div>
                          ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Right side actions */}
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            <Link
              to="/contact"
              className="hidden lg:inline-flex items-center px-6 py-2.5 bg-gradient-to-r from-[#05164d] to-[#ffad00] hover:from-[#0a2a8c] hover:to-[#ffc34d] text-white text-sm font-medium rounded-lg transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
              onClick={handleItemClick}
            >
              Get Started
            </Link>

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
                          onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                          className="flex items-center justify-between w-full px-4 py-3 text-left text-base font-medium transition-colors text-gray-700 dark:text-gray-300 hover:text-[#05164d] dark:hover:text-[#ffad00] hover:bg-gray-50 dark:hover:bg-gray-800"
                        >
                          <span>{item.name}</span>
                          <motion.div
                            animate={{ rotate: activeDropdown === item.name ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
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
                              transition={{ duration: 0.3 }}
                              className="bg-gray-50 dark:bg-gray-800"
                            >
                              {item.columns.map((column, columnIndex) => (
                                <div key={columnIndex} className="px-4 py-2">
                                  <h4 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2 text-center">
                                    {column.title}
                                  </h4>
                                  {column.items.map((subItem) => (
                                    <Link
                                      key={subItem.name}
                                      to={subItem.href}
                                      className="block px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-[#05164d] dark:hover:text-[#ffad00] transition-colors relative group/mobile-subitem text-center"
                                      onClick={handleItemClick}
                                    >
                                      {subItem.name}
                                      {/* Underlined gradient effect for mobile dropdown items */}
                                      <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-white via-[#05164d] to-[#ffad00] transition-all duration-300 group-hover/mobile-subitem:w-3/4" />
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
                        className="block px-4 py-3 text-base font-medium transition-colors text-gray-700 dark:text-gray-300 hover:text-[#05164d] dark:hover:text-[#ffad00] hover:bg-gray-50 dark:hover:bg-gray-800 relative group/mobile-item"
                        onClick={handleItemClick}
                      >
                        {item.name}
                        {/* Underlined gradient effect for mobile items */}
                        <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-gradient-to-r from-white via-[#05164d] to-[#ffad00] transition-all duration-300 transform origin-left scale-x-0 group-hover/mobile-item:scale-x-100" />
                      </Link>
                    )}
                  </div>
                ))}

                <div className="px-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                  <Link
                    to="/contact"
                    className="block w-full text-center px-6 py-3 bg-gradient-to-r from-[#05164d] to-[#ffad00] hover:from-[#0a2a8c] hover:to-[#ffc34d] text-white font-medium rounded-lg transition-colors"
                    onClick={handleItemClick}
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