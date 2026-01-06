import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  Code2, Database, Smartphone, Globe, 
  Brain, Bot, Cpu, Sparkles,
  Video, FileText, Camera, Palette,
  TrendingUp, Share2, Mail, BarChart3,
  ArrowRight, CheckCircle2
} from 'lucide-react'
import ScrollReveal from '../components/ScrollReveal'

const Services = () => {
  const serviceCategories = [
    {
      category: 'Development Services',
      icon: Code2,
      color: 'from-purple-500 to-blue-500',
      services: [
        {
          icon: Globe,
          title: 'Full-Stack Web Development',
          description: 'Custom web applications built with React, Node.js, and modern frameworks. Scalable, secure, and optimized for performance.',
          features: ['Responsive Design', 'API Integration', 'Cloud Deployment', 'Performance Optimization']
        },
        {
          icon: Smartphone,
          title: 'Micro-SaaS Development',
          description: 'Launch your SaaS product fast. We build subscription-based platforms with payment integration and user management.',
          features: ['Stripe Integration', 'User Authentication', 'Admin Dashboard', 'Analytics']
        },
        {
          icon: Database,
          title: 'Database Design & Backend',
          description: 'Robust database architecture and backend systems. PostgreSQL, MongoDB, Redis, and more.',
          features: ['Schema Design', 'API Development', 'Data Migration', 'Performance Tuning']
        },
        {
          icon: Code2,
          title: 'Custom Software Solutions',
          description: 'Tailored software applications for your unique business needs. From CRM to inventory management.',
          features: ['Custom Features', 'Third-party Integration', 'Maintenance', 'Support']
        }
      ]
    },
    {
      category: 'AI & Automation',
      icon: Brain,
      color: 'from-blue-500 to-cyan-500',
      services: [
        {
          icon: Bot,
          title: 'AI Chatbot Development',
          description: 'Intelligent chatbots powered by GPT and custom ML models. 24/7 customer support automation.',
          features: ['Natural Language Processing', 'Multi-platform Support', 'Custom Training', 'Analytics Dashboard']
        },
        {
          icon: Cpu,
          title: 'ML & AI Projects',
          description: 'Machine learning solutions for prediction, classification, and automation. TensorFlow, PyTorch, scikit-learn.',
          features: ['Predictive Analytics', 'Computer Vision', 'NLP Solutions', 'Model Deployment']
        },
        {
          icon: Sparkles,
          title: 'Automation Tools',
          description: 'Streamline your workflows with custom automation. Save time and reduce manual errors.',
          features: ['Process Automation', 'Data Processing', 'Report Generation', 'Integration APIs']
        }
      ]
    },
    {
      category: 'Content & Media',
      icon: Video,
      color: 'from-cyan-500 to-purple-500',
      services: [
        {
          icon: Video,
          title: 'Video Editing',
          description: 'Professional video editing for reels, shorts, promos, and long-form content. Engaging and high-quality.',
          features: ['Reels & Shorts', 'Promo Videos', 'Color Grading', 'Motion Graphics']
        },
        {
          icon: FileText,
          title: 'Content Writing',
          description: 'SEO-optimized content that converts. Blog posts, website copy, product descriptions, and more.',
          features: ['SEO Optimization', 'Blog Writing', 'Copywriting', 'Technical Writing']
        },
        {
          icon: Camera,
          title: 'Product Photography',
          description: 'Professional product and personal branding photoshoots. High-quality images that sell.',
          features: ['Product Photography', 'Personal Branding', 'Studio Setup', 'Post-processing']
        },
        {
          icon: Palette,
          title: 'Creative Content',
          description: 'Eye-catching graphics, social media content, and brand materials that stand out.',
          features: ['Social Media Graphics', 'Brand Identity', 'Infographics', 'Presentations']
        }
      ]
    },
    {
      category: 'Digital Marketing',
      icon: TrendingUp,
      color: 'from-purple-500 to-pink-500',
      services: [
        {
          icon: Share2,
          title: 'Social Media Management',
          description: 'Complete social media strategy and management. Grow your audience and engagement.',
          features: ['Content Strategy', 'Community Management', 'Paid Advertising', 'Analytics']
        },
        {
          icon: BarChart3,
          title: 'Growth Marketing',
          description: 'Data-driven marketing strategies that deliver results. SEO, PPC, email marketing, and more.',
          features: ['SEO Strategy', 'PPC Campaigns', 'Email Marketing', 'Conversion Optimization']
        },
        {
          icon: Mail,
          title: 'Brand Strategy',
          description: 'Build a powerful brand identity. From positioning to messaging and visual identity.',
          features: ['Brand Positioning', 'Messaging Strategy', 'Visual Identity', 'Brand Guidelines']
        }
      ]
    }
  ]

  return (
    <div className="pt-32 pb-20">
      {/* Hero Section */}
      <section className="container mx-auto px-4 mb-20">
        <ScrollReveal>
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our <span className="gradient-text">Services</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Comprehensive solutions to transform your business. From development to marketing, 
              we've got you covered with premium services.
            </p>
          </div>
        </ScrollReveal>
      </section>

      {/* Service Categories */}
      {serviceCategories.map((category, categoryIndex) => (
        <section key={categoryIndex} className={`py-20 ${categoryIndex % 2 === 0 ? 'bg-white dark:bg-gray-900' : 'bg-gray-50 dark:bg-gray-800'}`}>
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <div className="flex items-center justify-center mb-12">
                <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-2xl flex items-center justify-center mr-4`}>
                  <category.icon size={32} className="text-white" />
                </div>
                <h2 className="text-4xl md:text-5xl font-bold">{category.category}</h2>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 gap-8">
              {category.services.map((service, serviceIndex) => (
                <ScrollReveal key={serviceIndex} delay={serviceIndex * 0.1}>
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="glass-card h-full"
                  >
                    <div className={`w-14 h-14 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center mb-4`}>
                      <service.icon size={28} className="text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      {service.description}
                    </p>
                    <div className="space-y-2">
                      {service.features.map((feature, i) => (
                        <div key={i} className="flex items-center text-sm">
                          <CheckCircle2 size={16} className="text-green-500 mr-2 flex-shrink-0" />
                          <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <Link 
                      to="/contact" 
                      className="inline-flex items-center mt-6 text-primary-purple hover:text-primary-blue font-semibold transition-colors"
                    >
                      Get Started <ArrowRight size={18} className="ml-2" />
                    </Link>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-dark">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Let's discuss your project and create something amazing together
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact" className="btn-primary text-lg px-8 py-4">
                  Start Your Project
                </Link>
                <Link to="/portfolio" className="btn-secondary text-lg px-8 py-4">
                  View Our Work
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}

export default Services
