import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { 
  Code2, Brain, Video, TrendingUp, 
  Zap, Shield, Users, Award,
  ArrowRight, Star
} from 'lucide-react'
import ScrollReveal from '../components/ScrollReveal'
import AnimatedCounter from '../components/AnimatedCounter'
import { useLanguage } from '../context/LanguageContext'

const Home = () => {
  const { t } = useLanguage()

  const services = [
    { icon: Code2, title: 'Full-Stack Development', desc: 'Custom web apps built with cutting-edge tech' },
    { icon: Brain, title: 'AI & Automation', desc: 'Smart chatbots and ML solutions' },
    { icon: Video, title: 'Content Creation', desc: 'Professional videos and creative content' },
    { icon: TrendingUp, title: 'Digital Marketing', desc: 'Growth-focused marketing strategies' },
  ]

  const techStack = [
    'React', 'Node.js', 'Python', 'TypeScript', 'PostgreSQL', 'MongoDB',
    'TensorFlow', 'AWS', 'Docker', 'Next.js', 'FastAPI', 'Tailwind CSS'
  ]

  const testimonials = [
    {
      name: 'Dr. Ramalingam',
      role: 'Medical Director',
      text: 'The hospital management system transformed our operations. Exceptional work!',
      rating: 5
    },
    {
      name: 'Priya Sharma',
      role: 'Startup Founder',
      text: 'Their AI chatbot increased our customer engagement by 300%. Highly recommended!',
      rating: 5
    },
    {
      name: 'Rajesh Kumar',
      role: 'Business Owner',
      text: 'Professional, creative, and delivered beyond expectations. True experts!',
      rating: 5
    }
  ]

  const whyChooseUs = [
    { icon: Zap, title: 'Lightning Fast Delivery', desc: 'We deliver quality projects on time, every time' },
    { icon: Shield, title: 'Enterprise-Grade Security', desc: 'Your data and projects are always protected' },
    { icon: Users, title: 'Dedicated Support', desc: '24/7 support to ensure your success' },
    { icon: Award, title: 'Proven Track Record', desc: '100+ successful projects delivered' },
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-dark">
          <div className="absolute inset-0 opacity-20">
            {[...Array(50)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-white rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -30, 0],
                  opacity: [0.2, 1, 0.2],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                Transform Your Vision Into
                <span className="gradient-text"> Digital Reality</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Premium full-stack development, AI automation, and creative solutions 
                that drive real business results
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact" className="btn-primary text-lg px-8 py-4">
                  {t('getStarted')} <ArrowRight className="inline ml-2" size={20} />
                </Link>
                <Link to="/portfolio" className="btn-secondary text-lg px-8 py-4">
                  View Our Work
                </Link>
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20"
            >
              {[
                { end: 100, suffix: '+', label: 'Projects Completed' },
                { end: 50, suffix: '+', label: 'Happy Clients' },
                { end: 15, suffix: '+', label: 'Team Members' },
                { end: 99, suffix: '%', label: 'Client Satisfaction' },
              ].map((stat, i) => (
                <div key={i} className="glass-card">
                  <AnimatedCounter end={stat.end} suffix={stat.suffix} />
                  <p className="text-gray-400 mt-2">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2" />
          </div>
        </motion.div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Our <span className="gradient-text">Services</span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                End-to-end solutions for your digital transformation journey
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="glass-card group cursor-pointer"
                >
                  <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <service.icon size={32} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{service.desc}</p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/services" className="btn-primary">
              Explore All Services <ArrowRight className="inline ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Why <span className="gradient-text">Choose Us</span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                We deliver excellence in every project
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="glass-card text-center">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <item.icon size={32} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Our <span className="gradient-text">Tech Stack</span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                We work with cutting-edge technologies
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="flex flex-wrap justify-center gap-4">
              {techStack.map((tech, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="glass px-6 py-3 rounded-full font-semibold"
                >
                  {tech}
                </motion.div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Client <span className="gradient-text">Testimonials</span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                Don't just take our word for it
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="glass-card">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={20} className="text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 italic">
                    "{testimonial.text}"
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold mr-3">
                      {testimonial.name[0]}
                    </div>
                    <div>
                      <p className="font-bold">{testimonial.name}</p>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Let's discuss how we can help you achieve your goals with our premium services
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact" className="btn-primary text-lg px-8 py-4">
                  Get Started Now
                </Link>
                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary text-lg px-8 py-4"
                >
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Stay <span className="gradient-text">Updated</span>
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-8">
                Subscribe to our newsletter for the latest tech insights and updates
              </p>
              <form className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-4 rounded-full glass focus:outline-none focus:ring-2 focus:ring-primary-purple"
                />
                <button type="submit" className="btn-primary px-8 py-4">
                  Subscribe
                </button>
              </form>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}

export default Home
