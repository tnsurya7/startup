import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Mail, Phone, MapPin, Send, CheckCircle2, 
  MessageCircle, Calendar, ArrowRight
} from 'lucide-react'
import ScrollReveal from '../components/ScrollReveal'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the data to your backend
    console.log('Form submitted:', formData)
    setSubmitted(true)
    
    // Send WhatsApp message
    const message = `New Enquiry:\n\nName: ${formData.name}\nEmail: ${formData.email}\nWhatsApp: ${formData.whatsapp}\nMessage: ${formData.message}`
    const whatsappUrl = `https://wa.me/918825606988?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="text-center max-w-2xl mx-auto px-4"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2 }}
            className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6"
          >
            <CheckCircle2 size={48} className="text-white" />
          </motion.div>
          <h2 className="text-4xl font-bold mb-4">Thank You!</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
            We've received your enquiry and will get back to you within 24 hours. 
            A WhatsApp chat has been opened for immediate assistance.
          </p>
          <button
            onClick={() => {
              setSubmitted(false)
              setFormData({
                name: '',
                email: '',
                whatsapp: '',
                message: ''
              })
            }}
            className="btn-primary"
          >
            Submit Another Enquiry
          </button>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="pt-32 pb-20">
      {/* Hero Section */}
      <section className="container mx-auto px-4 mb-20">
        <ScrollReveal>
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Let's <span className="gradient-text">Connect</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Ready to transform your ideas into reality? Fill out the form below and 
              we'll get back to you within 24 hours.
            </p>
          </div>
        </ScrollReveal>
      </section>

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <ScrollReveal>
            <div className="glass-card">
              <h3 className="text-2xl font-bold mb-6">Send us an Enquiry</h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl glass focus:outline-none focus:ring-2 focus:ring-primary-purple"
                    placeholder="Surya Kumar"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl glass focus:outline-none focus:ring-2 focus:ring-primary-purple"
                    placeholder="webdeo7@gmail.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">
                    WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    name="whatsapp"
                    value={formData.whatsapp}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl glass focus:outline-none focus:ring-2 focus:ring-primary-purple"
                    placeholder="+91 88256 06988"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-3 rounded-xl glass focus:outline-none focus:ring-2 focus:ring-primary-purple resize-none"
                    placeholder="Tell us about your project, requirements, or any questions you have..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full btn-primary"
                >
                  Send Enquiry
                  <Send className="inline ml-2" size={20} />
                </button>
              </form>
            </div>
          </ScrollReveal>

          {/* Contact Info & Quick Actions */}
          <div className="space-y-8">
            {/* Contact Info */}
            <ScrollReveal delay={0.2}>
              <div className="glass-card">
                <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
                
                <div className="space-y-4">
                  <a
                    href="mailto:webdeo7@gmail.com"
                    className="flex items-center p-4 glass rounded-xl hover:scale-105 transition-transform"
                  >
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mr-4">
                      <Mail size={24} className="text-white" />
                    </div>
                    <div>
                      <p className="font-semibold">Email</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        info@webdeo
                      </p>
                    </div>
                  </a>

                  <a
                    href="tel:+918825606988"
                    className="flex items-center p-4 glass rounded-xl hover:scale-105 transition-transform"
                  >
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mr-4">
                      <Phone size={24} className="text-white" />
                    </div>
                    <div>
                      <p className="font-semibold">Phone</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        +91 88256 06988, +91 98946 73781
                      </p>
                    </div>
                  </a>

                  <div className="flex items-center p-4 glass rounded-xl">
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mr-4">
                      <MapPin size={24} className="text-white" />
                    </div>
                    <div>
                      <p className="font-semibold">Location</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        153/2, Anna Nagar East, Chennai - 600102
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Quick Actions */}
            <ScrollReveal delay={0.3}>
              <div className="glass-card">
                <h3 className="text-2xl font-bold mb-6">Quick Actions</h3>
                
                <div className="space-y-4">
                  <a
                    href="https://wa.me/918825606988"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-4 bg-green-500 hover:bg-green-600 text-white rounded-xl transition-colors"
                  >
                    <div className="flex items-center">
                      <MessageCircle size={24} className="mr-3" />
                      <span className="font-semibold">Chat on WhatsApp</span>
                    </div>
                    <ArrowRight size={20} />
                  </a>

                  <a
                    href="https://calendly.com/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-4 bg-gradient-primary text-white rounded-xl hover:scale-105 transition-transform"
                  >
                    <div className="flex items-center">
                      <Calendar size={24} className="mr-3" />
                      <span className="font-semibold">Book a Meeting</span>
                    </div>
                    <ArrowRight size={20} />
                  </a>
                </div>
              </div>
            </ScrollReveal>

            {/* Business Hours */}
            <ScrollReveal delay={0.4}>
              <div className="glass-card">
                <h3 className="text-xl font-bold mb-4">Business Hours</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Monday - Friday</span>
                    <span className="font-semibold">9:00 AM - 7:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Saturday</span>
                    <span className="font-semibold">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Sunday</span>
                    <span className="font-semibold">Closed</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
