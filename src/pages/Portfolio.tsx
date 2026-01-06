import { motion } from 'framer-motion'
import { ExternalLink, Github, Zap } from 'lucide-react'
import ScrollReveal from '../components/ScrollReveal'

const Portfolio = () => {
  const projects = [
    {
      title: 'Hospital Management System',
      client: 'Dr. Ramalingam MBBS MD',
      description: 'Comprehensive hospital management platform with patient records, appointment scheduling, billing, inventory management, and staff coordination. Streamlined operations for a 50-bed hospital.',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop',
      techStack: ['React', 'Node.js', 'PostgreSQL', 'Redis', 'AWS'],
      features: [
        'Patient Management System',
        'Appointment Scheduling',
        'Billing & Insurance',
        'Inventory Tracking',
        'Staff Management',
        'Reports & Analytics'
      ],
      liveLink: 'https://hospital-demo.example.com',
      githubLink: 'https://github.com/yourusername/hospital-management',
      status: 'Live',
      category: 'Healthcare'
    },
    {
      title: 'Online Petition Portal',
      client: 'Public Service Initiative',
      description: 'Democratic petition platform enabling citizens to create, sign, and track petitions. Deployed on Vercel with Render backend and robust database architecture.',
      image: 'https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=800&h=600&fit=crop',
      techStack: ['Next.js', 'FastAPI', 'MongoDB', 'Vercel', 'Render'],
      features: [
        'User Authentication',
        'Petition Creation & Signing',
        'Real-time Updates',
        'Email Notifications',
        'Admin Dashboard',
        'Analytics & Reporting'
      ],
      liveLink: 'https://petition-portal.example.com',
      githubLink: 'https://github.com/yourusername/petition-portal',
      status: 'Live',
      category: 'Civic Tech'
    },
    {
      title: 'Smart Agriculture ARIMAX System',
      client: 'Agricultural Research Institute',
      description: 'AI-powered soil prediction system using ARIMAX model for precision agriculture. Predicts soil moisture, nutrient levels, and optimal planting times.',
      image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&h=600&fit=crop',
      techStack: ['Python', 'TensorFlow', 'Pandas', 'Flask', 'PostgreSQL'],
      features: [
        'ARIMAX Prediction Model',
        'Soil Analysis Dashboard',
        'Weather Integration',
        'Crop Recommendations',
        'Historical Data Analysis',
        'Mobile-Responsive Interface'
      ],
      liveLink: 'https://agri-predict.example.com',
      githubLink: 'https://github.com/yourusername/smart-agriculture',
      status: 'Live',
      category: 'AI/ML'
    },
    {
      title: 'Cooker Whistle Detection System',
      client: 'Smart Home Innovation',
      description: 'IoT-based audio detection system using machine learning to identify pressure cooker whistles and send notifications. Prevents overcooking and kitchen accidents.',
      image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800&h=600&fit=crop',
      techStack: ['Python', 'TensorFlow', 'Raspberry Pi', 'MQTT', 'React Native'],
      features: [
        'Audio Pattern Recognition',
        'Real-time Notifications',
        'Mobile App Integration',
        'Multiple Device Support',
        'Custom Alert Settings',
        'Usage Analytics'
      ],
      liveLink: null,
      githubLink: 'https://github.com/yourusername/whistle-detection',
      status: 'In Development',
      category: 'IoT/AI'
    },
    {
      title: 'E-Commerce Platform',
      client: 'Fashion Retail Brand',
      description: 'Full-featured e-commerce platform with inventory management, payment gateway integration, and advanced analytics.',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop',
      techStack: ['React', 'Node.js', 'Stripe', 'MongoDB', 'AWS S3'],
      features: [
        'Product Catalog',
        'Shopping Cart',
        'Payment Integration',
        'Order Tracking',
        'Admin Dashboard',
        'Customer Reviews'
      ],
      liveLink: 'https://fashion-store.example.com',
      githubLink: null,
      status: 'Live',
      category: 'E-Commerce'
    },
    {
      title: 'AI Content Generator',
      client: 'Marketing Agency',
      description: 'GPT-powered content generation tool for social media posts, blog articles, and marketing copy. Saves 10+ hours per week.',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop',
      techStack: ['React', 'OpenAI API', 'Node.js', 'PostgreSQL'],
      features: [
        'Multiple Content Types',
        'Tone Customization',
        'SEO Optimization',
        'Content Calendar',
        'Team Collaboration',
        'Export Options'
      ],
      liveLink: 'https://ai-content-gen.example.com',
      githubLink: null,
      status: 'Live',
      category: 'AI/SaaS'
    }
  ]

  const categories = ['All', 'Healthcare', 'Civic Tech', 'AI/ML', 'IoT/AI', 'E-Commerce', 'AI/SaaS']
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === selectedCategory)

  return (
    <div className="pt-32 pb-20">
      {/* Hero Section */}
      <section className="container mx-auto px-4 mb-20">
        <ScrollReveal>
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our <span className="gradient-text">Portfolio</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Explore our successful projects across healthcare, AI, e-commerce, and more. 
              Real solutions delivering real results.
            </p>
          </div>
        </ScrollReveal>
      </section>

      {/* Category Filter */}
      <section className="container mx-auto px-4 mb-12">
        <ScrollReveal>
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-semibold transition-all ${
                  selectedCategory === category
                    ? 'bg-gradient-primary text-white scale-105'
                    : 'glass hover:scale-105'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </ScrollReveal>
      </section>

      {/* Projects Grid */}
      <section className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -10 }}
                className="glass-card group overflow-hidden"
              >
                {/* Project Image */}
                <div className="relative overflow-hidden rounded-xl mb-6">
                  <motion.img
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <span className={`px-4 py-2 rounded-full text-sm font-semibold ${
                      project.status === 'Live' 
                        ? 'bg-green-500 text-white' 
                        : 'bg-yellow-500 text-white'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                    <div className="flex gap-4">
                      {project.liveLink && (
                        <a
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                          aria-label="View Live"
                        >
                          <ExternalLink size={20} className="text-gray-900" />
                        </a>
                      )}
                      {project.githubLink && (
                        <a
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                          aria-label="View GitHub"
                        >
                          <Github size={20} className="text-gray-900" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                {/* Project Info */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-2xl font-bold">{project.title}</h3>
                    <span className="text-sm px-3 py-1 bg-gradient-primary text-white rounded-full">
                      {project.category}
                    </span>
                  </div>
                  <p className="text-sm text-primary-purple font-semibold mb-3">
                    Client: {project.client}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="mb-4">
                    <p className="text-sm font-semibold mb-2">Tech Stack:</p>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech, i) => (
                        <span
                          key={i}
                          className="text-xs px-3 py-1 glass rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <div>
                    <p className="text-sm font-semibold mb-2">Key Features:</p>
                    <ul className="grid grid-cols-2 gap-2 text-sm">
                      {project.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <Zap size={14} className="text-primary-aqua mr-1 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600 dark:text-gray-400">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 mt-20">
        <ScrollReveal>
          <div className="glass-card text-center max-w-3xl mx-auto bg-gradient-dark">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Ready to Start Your Project?
            </h2>
            <p className="text-gray-300 mb-6">
              Let's create something amazing together. Get in touch to discuss your ideas.
            </p>
            <a href="/contact" className="btn-primary inline-block">
              Start Your Project
            </a>
          </div>
        </ScrollReveal>
      </section>
    </div>
  )
}

// Add useState import
import { useState } from 'react'

export default Portfolio
