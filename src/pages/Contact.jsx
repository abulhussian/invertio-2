"use client"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Mail, Phone, MapPin, Clock, ChevronDown, Send, CheckCircle } from "lucide-react"
import Section from "../components/Section"
import { MotionSlideUp, MotionStagger } from "../components/MotionWrapper"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  })
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [activeOffice, setActiveOffice] = useState(null)

  const offices = [
    {
      city: "San Francisco",
      address: "123 Tech Street, San Francisco, CA 94105",
      phone: "+1 (555) 123-4567",
      email: "sf@Invertio.com",
      hours: "Mon-Fri: 9:00 AM - 6:00 PM PST",
      image: "/san-francisco-office.png",
    },
    {
      city: "New York",
      address: "456 Innovation Ave, New York, NY 10001",
      phone: "+1 (555) 234-5678",
      email: "ny@Invertio.com",
      hours: "Mon-Fri: 9:00 AM - 6:00 PM EST",
      image: "/new-york-office.png",
    },
    {
      city: "London",
      address: "789 Digital Lane, London, UK EC1A 1BB",
      phone: "+44 20 1234 5678",
      email: "london@Invertio.com",
      hours: "Mon-Fri: 9:00 AM - 5:00 PM GMT",
      image: "/placeholder-7d1lu.png",
    },
    {
      city: "Singapore",
      address: "321 Future Blvd, Singapore 018956",
      phone: "+65 6123 4567",
      email: "singapore@Invertio.com",
      hours: "Mon-Fri: 9:00 AM - 6:00 PM SGT",
      image: "/singapore-office.png",
    },
  ]

  const validateForm = () => {
    const newErrors = {}
    if (!formData.name.trim()) newErrors.name = "Name is required"
    if (!formData.email.trim()) newErrors.email = "Email is required"
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email is invalid"
    if (!formData.phone.trim()) newErrors.phone = "Phone is required"
    if (!formData.company.trim()) newErrors.company = "Company is required"
    if (!formData.message.trim()) newErrors.message = "Message is required"
    else if (formData.message.trim().length < 10) newErrors.message = "Message must be at least 10 characters"
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validateForm()) return
    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormData({ name: "", email: "", phone: "", company: "", message: "" })
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }))
  }

  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero Section with Motion Background */}
      <Section className="relative overflow-hidden min-h-[60vh] flex items-center justify-center">
        {/* Background Motion Image */}
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/contact-hero.jpg')" }} // change path
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 3, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/contactus-1.png')" }}
          initial={{ scale: 1 }}
          animate={{ scale: 1.1 }}
          transition={{ duration: 12, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Hero Content */}
        <div className="relative text-center max-w-4xl mx-auto text-white z-10">
          <MotionSlideUp>
            <div className="inline-flex items-center px-4 py-2 bg-[#05164d]/10 text-[#05164d] rounded-full text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-[#05164d] rounded-full mr-2 animate-pulse" />
              Get In Touch
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Let's Start Your <span className="gradient-text block">Digital Journey</span>
            </h1>
            <p className="text-xl mb-8 leading-relaxed max-w-2xl mx-auto">
              Ready to transform your business? Our experts are here to discuss your challenges and create tailored
              solutions that drive results.
            </p>
          </MotionSlideUp>
        </div>
      </Section>

      {/* Contact Form & Info */}
      <Section className="bg-white dark:bg-gray-900">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <MotionSlideUp>
            <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Send us a message</h2>
              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="text-center py-12"
                  >
                    <div className="w-16 h-16 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-green-600 dark:text-green-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      Message Sent Successfully!
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Thank you for reaching out. We'll get back to you within 24 hours.
                    </p>
                  </motion.div>
                ) : (
                  <motion.form key="form" onSubmit={handleSubmit} className="space-y-6">
                    {/* Inputs */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Full Name *</label>
                        <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange}
                          className={`w-full px-4 py-3 border rounded-lg bg-white dark:bg-gray-700 ${
                            errors.name ? "border-red-500" : "border-gray-300 dark:border-gray-600"
                          }`} placeholder="John Doe" />
                        {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email *</label>
                        <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange}
                          className={`w-full px-4 py-3 border rounded-lg bg-white dark:bg-gray-700 ${
                            errors.email ? "border-red-500" : "border-gray-300 dark:border-gray-600"
                          }`} placeholder="info@invertiosolutions.com" />
                        {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Phone *</label>
                        <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleInputChange}
                          className={`w-full px-4 py-3 border rounded-lg bg-white dark:bg-gray-700 ${
                            errors.phone ? "border-red-500" : "border-gray-300 dark:border-gray-600"
                          }`} placeholder="+91 78930 67967" />
                        {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
                      </div>
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Company *</label>
                        <input type="text" id="company" name="company" value={formData.company} onChange={handleInputChange}
                          className={`w-full px-4 py-3 border rounded-lg bg-white dark:bg-gray-700 ${
                            errors.company ? "border-red-500" : "border-gray-300 dark:border-gray-600"
                          }`} placeholder="Your Company" />
                        {errors.company && <p className="mt-1 text-sm text-red-600">{errors.company}</p>}
                      </div>
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Message *</label>
                      <textarea id="message" name="message" rows={6} value={formData.message} onChange={handleInputChange}
                        className={`w-full px-4 py-3 border rounded-lg bg-white dark:bg-gray-700 ${
                          errors.message ? "border-red-500" : "border-gray-300 dark:border-gray-600"
                        }`} placeholder="Tell us about your project..." />
                      {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message}</p>}
                    </div>
                    <motion.button type="submit" disabled={isSubmitting}
                      className="w-full px-8 py-4 bg-[#05164d] text-white rounded-lg flex items-center justify-center"
                      whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                      whileTap={{ scale: isSubmitting ? 1 : 0.98 }}>
                      {isSubmitting ? (
                        <div className="flex items-center">
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                          Sending...
                        </div>
                      ) : (
                        <>Send Message <Send className="ml-2 w-5 h-5" /></>
                      )}
                    </motion.button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </MotionSlideUp>

          {/* Contact Info */}
          <MotionSlideUp delay={0.2}>
            <div className="space-y-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Get in touch</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-8">
                Have questions about our services or want to discuss your project? We're here to help.
              </p>
              {/* Info cards */}
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-[#05164d]" />
                  <div><h3>Email Us</h3><a href="mailto:info@invertiosolutions.com" className="text-[#05164d]">info@invertiosolutions.com</a></div>
                </div>
                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-[#05164d]" />
                  <div><h3>Call Us</h3><a href="tel:+917893067967" className="text-[#05164d]">+91 78930 67967</a></div>
                </div>
                <div className="flex items-start space-x-4">
                  <Clock className="w-6 h-6 text-[#05164d]" />
                  <div><h3>Business Hours</h3><p>Mon-Fri: 9:00 AM - 6:00 PM</p></div>
                </div>
              </div>
              <div className="mt-8">
                <img src="/world-map-office-locations.png" alt="Map" className="w-full h-64 object-cover rounded-lg" />
              </div>
            </div>
          </MotionSlideUp>
        </div>
      </Section>

      {/* Offices */}
      <Section className="bg-gray-50 dark:bg-gray-800/50">
        <MotionSlideUp className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Our Global Offices</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">With offices around the world, we’re always close to our clients.</p>
        </MotionSlideUp>
        <MotionStagger className="space-y-4" staggerDelay={0.1}>
          {offices.map((office, index) => (
            <motion.div key={office.city} className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden">
              <button onClick={() => setActiveOffice(activeOffice === index ? null : index)}
                className="w-full p-6 flex justify-between items-center">
                <div className="flex items-center space-x-4">
                  <MapPin className="w-6 h-6 text-[#05164d]" />
                  <div>
                    <h3 className="text-xl font-semibold">{office.city}</h3>
                    <p>{office.address}</p>
                  </div>
                </div>
                <motion.div animate={{ rotate: activeOffice === index ? 180 : 0 }}>
                  <ChevronDown className="w-5 h-5 text-gray-400" />
                </motion.div>
              </button>
              <AnimatePresence>
                {activeOffice === index && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}
                    className="border-t border-gray-200">
                    <div className="p-6 grid md:grid-cols-2 gap-6">
                      <div className="space-y-2 text-sm">
                        <p><Phone className="inline w-4 h-4 mr-2" />{office.phone}</p>
                        <p><Mail className="inline w-4 h-4 mr-2" />{office.email}</p>
                        <p><Clock className="inline w-4 h-4 mr-2" />{office.hours}</p>
                      </div>
                      <img src={office.image} alt={office.city} className="w-full h-32 object-cover rounded-lg" />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </MotionStagger>
      </Section>
    </div>
  )
}

export default Contact
