import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { 
  Code2, Brain, Video, TrendingUp, 
  Zap, Shield, Users, Award,
  ArrowRight
} from 'lucide-react'
import ScrollReveal from '../components/ScrollReveal'
import AnimatedCounter from '../components/AnimatedCounter'

const Home = () => {

  const services = [
    { icon: Code2, title: 'Full-Stack Development', desc: 'Custom web apps built with cutting-edge tech' },
    { icon: Brain, title: 'AI & Automation', desc: 'Smart chatbots and ML solutions' },
    { icon: Video, title: 'Content Creation', desc: 'Professional videos and creative content' },
    { icon: TrendingUp, title: 'Digital Marketing', desc: 'Growth-focused marketing strategies' },
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
              <h1 className="font-bold mb-6 leading-tight">
                <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl block mb-2">
                  Transform Your Vision Into
                </span>
                <span className="gradient-text text-3xl sm:text-4xl md:text-5xl lg:text-6xl block">
                  Digital Reality
                </span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Premium full-stack development, AI automation, and creative solutions that drive real business results
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact" className="btn-primary text-lg px-8 py-4">
                  Get Started <ArrowRight className="inline ml-2" size={20} />
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
                { end: 50, suffix: '+', label: 'Team Members' },
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="glass-card text-center h-full flex flex-col justify-between p-6">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <item.icon size={32} className="text-white" />
                  </div>
                  <div className="flex-grow flex flex-col justify-center">
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400">{item.desc}</p>
                  </div>
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
                Our <span className="gradient-text">Technology Stack</span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-2">
                Core technologies we rely on to build scalable, secure, and modern solutions
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-500">
                Tools may vary by project requirements
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="space-y-8">
              {/* Row 1 - Core Development Stack */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Frontend & UI */}
                <div className="h-full rounded-xl border border-white/10 bg-white/5 p-6 flex flex-col">
                  <h3 className="text-xl font-bold mb-4 gradient-text text-center">Frontend & UI</h3>
                  <div className="space-y-2 text-center">
                    {['React', 'Next.js', 'Tailwind CSS', 'TypeScript'].map((tech, i) => (
                      <div key={i} className="text-gray-700 dark:text-gray-300 font-medium">
                        {tech}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Backend & APIs */}
                <div className="h-full rounded-xl border border-white/10 bg-white/5 p-6 flex flex-col">
                  <h3 className="text-xl font-bold mb-4 gradient-text text-center">Backend & APIs</h3>
                  <div className="space-y-2 text-center">
                    {['Node.js', 'Express.js', 'Python', 'FastAPI'].map((tech, i) => (
                      <div key={i} className="text-gray-700 dark:text-gray-300 font-medium">
                        {tech}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Databases */}
                <div className="h-full rounded-xl border border-white/10 bg-white/5 p-6 flex flex-col">
                  <h3 className="text-xl font-bold mb-4 gradient-text text-center">Databases</h3>
                  <div className="space-y-2 text-center">
                    {['PostgreSQL', 'MySQL', 'MongoDB', 'SQL'].map((tech, i) => (
                      <div key={i} className="text-gray-700 dark:text-gray-300 font-medium">
                        {tech}
                      </div>
                    ))}
                  </div>
                </div>

                {/* AI & Machine Learning */}
                <div className="h-full rounded-xl border border-white/10 bg-white/5 p-6 flex flex-col">
                  <h3 className="text-xl font-bold mb-4 gradient-text text-center">AI & Machine Learning</h3>
                  <div className="space-y-2 text-center">
                    {['TensorFlow', 'Pandas', 'NumPy', 'Matplotlib'].map((tech, i) => (
                      <div key={i} className="text-gray-700 dark:text-gray-300 font-medium">
                        {tech}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Row 2 - Automation & Infrastructure */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Automation & AI Systems */}
                <div className="h-full rounded-xl border border-white/10 bg-white/5 p-6 flex flex-col">
                  <h3 className="text-xl font-bold mb-4 gradient-text text-center">Automation & AI Systems</h3>
                  <div className="space-y-2 text-center">
                    {['n8n', 'AI Agents', 'CRM & Sales Automations'].map((tech, i) => (
                      <div key={i} className="text-gray-700 dark:text-gray-300 font-medium">
                        {tech}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Cloud & DevOps */}
                <div className="h-full rounded-xl border border-white/10 bg-white/5 p-6 flex flex-col">
                  <h3 className="text-xl font-bold mb-4 gradient-text text-center">Cloud & DevOps</h3>
                  <div className="space-y-2 text-center">
                    {['AWS', 'Azure', 'Docker'].map((tech, i) => (
                      <div key={i} className="text-gray-700 dark:text-gray-300 font-medium">
                        {tech}
                      </div>
                    ))}
                  </div>
                </div>

                {/* AI Tools */}
                <div className="h-full rounded-xl border border-white/10 bg-white/5 p-6 flex flex-col">
                  <h3 className="text-xl font-bold mb-4 gradient-text text-center">AI Tools</h3>
                  <div className="space-y-2 text-center">
                    {['ChatGPT', 'Claude AI', 'GitHub Copilot'].map((tech, i) => (
                      <div key={i} className="text-gray-700 dark:text-gray-300 font-medium">
                        {tech}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Trusted Clients */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Trusted by <span className="gradient-text">Leading Brands</span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                Proud to work with amazing clients
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
              {[
                { name: 'Kaviya Groups', logo: '/kaaviya-group-logo.png' },
                { name: 'MedFoxRCM', logo: '/medfoxrcm. logo.png' },
                { name: 'Dream Travels', logo: '/dream-travels-logo.png' },
                { name: 'API Trichy', logo: '/api-logo.png' },
                { name: 'RV Strategies', logo: '/rv strategies logo.png' },
                { name: 'Dreamy Delight', logo: '/dreamy delight logo.png' }
              ].map((client, i) => (
                <div
                  key={i}
                  className="bg-white dark:bg-white p-6 rounded-xl shadow-lg hover:scale-105 transition-transform flex items-center justify-center h-32"
                >
                  <img 
                    src={client.logo} 
                    alt={client.name}
                    className="w-full h-full object-contain scale-110"
                    onError={(e) => {
                      // Fallback to initials if image fails to load
                      e.currentTarget.style.display = 'none';
                      const fallbackElement = e.currentTarget.nextElementSibling as HTMLElement;
                      if (fallbackElement) {
                        fallbackElement.style.display = 'flex';
                      }
                    }}
                  />
                  <div 
                    className="w-16 h-16 bg-gradient-primary rounded-full items-center justify-center text-white font-bold text-xl hidden"
                  >
                    {client.name.split(' ').map(word => word[0]).join('')}
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
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
                  href="https://wa.me/918825606988"
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
              <form 
                className="flex flex-col sm:flex-row gap-4"
                onSubmit={(e) => {
                  e.preventDefault();
                  const email = e.currentTarget.email.value;
                  if (email) {
                    const subject = 'Newsletter Subscription Request';
                    const body = `New newsletter subscription request from: ${email}`;
                    window.location.href = `mailto:webdeo7@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
                  }
                }}
              >
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-4 rounded-full glass focus:outline-none focus:ring-2 focus:ring-primary-purple"
                  required
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
