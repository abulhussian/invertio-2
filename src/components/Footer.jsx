"use client"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Linkedin, Twitter, Github, Youtube, ArrowRight, Send } from "lucide-react"
import { useState } from "react"

const Footer = () => {
  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleNewsletterSubmit = (e) => {
    e.preventDefault()
    // Simulate newsletter signup
    setIsSubscribed(true)
    setEmail("")
    setTimeout(() => setIsSubscribed(false), 3000)
  }

  const footerLinks = {
    company: [
      { name: "About Us", href: "/about" },
      { name: "Careers", href: "/careers" },
      { name: "Leadership", href: "/about#leadership" },
      { name: "News & Press", href: "/insights" },
      { name: "Contact", href: "/contact" },
    ],
    services: [
      { name: "Digital Transformation", href: "/services#digital-transformation" },
      { name: "Cloud Services", href: "/services#cloud-services" },
      { name: "Software Development", href: "/services#software-development" },
      { name: "Data & Analytics", href: "/services#data-analytics" },
      { name: "Cybersecurity", href: "/services#cybersecurity" },
    ],
    industries: [
      { name: "Banking & Financial", href: "/industries#banking-financial" },
      { name: "Healthcare", href: "/industries#healthcare" },
      { name: "Retail & E-commerce", href: "/industries#retail-ecommerce" },
      { name: "Telecommunications", href: "/industries#telecommunications" },
      { name: "Automotive", href: "/industries#automotive" },
    ],
    resources: [
      { name: "Case Studies", href: "/work" },
      { name: "Insights", href: "/insights" },
      { name: "White Papers", href: "/insights?category=whitepapers" },
      { name: "Documentation", href: "/resources/docs" },
      { name: "Support", href: "/support" },
    ],
  }

  const socialLinks = [
    { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com/company/Invertio" },
    { name: "Twitter", icon: Twitter, href: "https://twitter.com/Invertio" },
    { name: "GitHub", icon: Github, href: "https://github.com/Invertio" },
    { name: "YouTube", icon: Youtube, href: "https://youtube.com/Invertio" },
  ]

  const contactInfo = [
    { icon: Phone, text: "+1 (555) 123-4567", href: "tel:+15551234567" },
    { icon: Mail, text: "hello@Invertio.com", href: "mailto:hello@Invertio.com" },
    { icon: MapPin, text: "123 Tech Street, San Francisco, CA 94105", href: "#" },
  ]

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Company Info & Newsletter */}
          <div className="lg:col-span-4">
            <Link to="/" className="flex items-center space-x-2 mb-6">
              {/* <div className="w-10 h-10 bg-gradient-to-br from-primary-600 to-accent-violet rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">I</span>
              </div> */}
              <span className="text-xl font-bold">
                <img src="/light_invertio_logo_220_70.png" alt="logo" className="w-30 h-10"/>
              </span>
            </Link>

            <p className="text-gray-400 mb-6 leading-relaxed">
              Leading enterprise technology solutions provider specializing in digital transformation, cloud services,
              and innovative software development.
            </p>

            {/* Newsletter Signup */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
              <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2.5 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  required
                />
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2.5 bg-primary-600 hover:bg-primary-700 rounded-lg transition-colors flex items-center"
                  disabled={isSubscribed}
                >
                  {isSubscribed ? <span className="text-sm">✓</span> : <Send className="w-4 h-4" />}
                </motion.button>
              </form>
              {isSubscribed && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-green-400 text-sm mt-2"
                >
                  Thank you for subscribing!
                </motion.p>
              )}
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              {contactInfo.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors group"
                  whileHover={{ x: 5 }}
                >
                  <item.icon className="w-5 h-5 text-primary-400 group-hover:text-primary-300" />
                  <span className="text-sm">{item.text}</span>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">Company</h3>
                <ul className="space-y-3">
                  {footerLinks.company.map((link) => (
                    <li key={link.name}>
                      <Link
                        to={link.href}
                        className="text-gray-400 hover:text-white transition-colors text-sm flex items-center group"
                      >
                        <span>{link.name}</span>
                        <ArrowRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4">Services</h3>
                <ul className="space-y-3">
                  {footerLinks.services.map((link) => (
                    <li key={link.name}>
                      <Link
                        to={link.href}
                        className="text-gray-400 hover:text-white transition-colors text-sm flex items-center group"
                      >
                        <span>{link.name}</span>
                        <ArrowRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4">Industries</h3>
                <ul className="space-y-3">
                  {footerLinks.industries.map((link) => (
                    <li key={link.name}>
                      <Link
                        to={link.href}
                        className="text-gray-400 hover:text-white transition-colors text-sm flex items-center group"
                      >
                        <span>{link.name}</span>
                        <ArrowRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4">Resources</h3>
                <ul className="space-y-3">
                  {footerLinks.resources.map((link) => (
                    <li key={link.name}>
                      <Link
                        to={link.href}
                        className="text-gray-400 hover:text-white transition-colors text-sm flex items-center group"
                      >
                        <span>{link.name}</span>
                        <ArrowRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <p className="text-gray-400 text-sm">© 2024 Invertio. All rights reserved.</p>
              <div className="flex space-x-6">
                <Link to="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Privacy Policy
                </Link>
                <Link to="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Terms of Service
                </Link>
                <Link to="/cookies" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Cookie Policy
                </Link>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-colors group"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5 text-gray-400 group-hover:text-white" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
