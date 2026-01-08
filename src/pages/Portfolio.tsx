import { motion } from 'framer-motion'
import { Zap } from 'lucide-react'
import { useState } from 'react'
import ScrollReveal from '../components/ScrollReveal'

const Portfolio = () => {
  const projects = [
    {
      title: 'Dream Travels',
      description: 'Tour and travel booking website showcasing packages, destinations, and enquiry flow for customers.',
      image: '/Dream Travel project.png',
      techStack: ['Next.js 14', 'React 18', 'TypeScript', 'Tailwind CSS', 'Nodemailer', 'Zod', 'Vercel'],
      features: [
        'Tour package listings',
        'Enquiry & contact forms',
        'Responsive UI',
        'SEO-friendly pages'
      ],
      liveLink: 'https://dreamtravelz.vercel.app/',
      githubLink: null,
      status: 'Live',
      category: 'Web Development'
    },
    {
      title: 'MedFoxRCM',
      description: 'Healthcare RCM platform with service presentation and course registration system.',
      image: '/Medfoxrcm project.png',
      techStack: ['Next.js 14', 'React 18', 'TypeScript', 'Tailwind CSS', 'Nodemailer', 'Zod', 'Vercel'],
      features: [
        'Medical billing & coding services',
        'Course registration flow',
        'Email automation',
        'Secure SMTP integration',
        'Responsive healthcare UI'
      ],
      liveLink: 'https://www.medfoxrcm.com/',
      githubLink: '#',
      status: 'Live',
      category: 'Healthcare'
    },
    {
      title: 'API Trichy Chapter – Official Website',
      description: 'Official full-stack website for API Tiruchirappalli Chapter with admin management.',
      image: '/api project.png',
      techStack: ['Next.js 14', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'Prisma', 'JWT', 'Vercel'],
      features: [
        'Events & CME programs',
        'Leadership profiles',
        'Publications & media',
        'Admin panel with role-based access'
      ],
      liveLink: 'https://www.apitrichy.com/',
      githubLink: '#',
      status: 'Live',
      category: 'Professional'
    },
    {
      title: 'ISC Textile Report App',
      client: 'Indian Soft Colours',
      description: 'Digital textile printing & production management system replacing manual registers.',
      image: '/isc texttiles project.png',
      techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Supabase', 'PostgreSQL', 'jsPDF', 'SheetJS', 'Next-PWA'],
      features: [
        'Smart record management',
        'Analytics dashboard',
        'PDF & Excel export',
        'PWA with offline support',
        'Mobile & tablet optimized'
      ],
      liveLink: '#',
      githubLink: '#',
      status: 'Live',
      category: 'Enterprise'
    },
    {
      title: 'Dreamy Delight',
      description: 'Creative brand website with modern UI and responsive design.',
      image: '/Dreamy delight project .png',
      techStack: ['HTML', 'CSS', 'JavaScript', 'Netlify'],
      features: [
        'Product showcase',
        'Smooth animations',
        'Responsive layout',
        'Branding-focused UI'
      ],
      liveLink: 'https://dreamy-delight.netlify.app/',
      githubLink: null,
      status: 'Live',
      category: 'Creative'
    },
    {
      title: 'Online Petition Management System',
      description: 'Comprehensive petition management system deployed on Vercel & Render.',
      image: '/online petition project.png',
      techStack: ['React.js', 'Node.js', 'Express.js', 'MySQL', 'JWT', 'Vercel', 'Render'],
      features: [
        'Secure JWT authentication',
        'File uploads',
        'Multilingual UI',
        'Real-time analytics dashboard',
        'Petition creation & management',
        'Admin moderation panel'
      ],
      liveLink: 'https://online-petition-portal.vercel.app/',
      githubLink: '#',
      status: 'Live',
      category: 'Civic Tech'
    },
    {
      title: 'Hospital Management System',
      description: 'Hospital platform for managing patients, doctors, appointments, and records.',
      image: '/hospital managemnt project .png',
      techStack: ['React.js', 'TypeScript', 'Node.js', 'Express.js', 'MongoDB', 'Vercel', 'Render'],
      features: [
        'Patient & doctor management',
        'Appointment scheduling',
        'Medical records',
        'Admin dashboard',
        'Secure authentication'
      ],
      liveLink: 'https://ramalingam-clinic.vercel.app/',
      githubLink: '#',
      status: 'Live',
      category: 'Healthcare'
    },
    {
      title: 'AI Auto WhatsApp Reminder',
      description: 'AI-powered WhatsApp reminder system with smart scheduling and automation.',
      image: '/ai auto reminder project.png',
      techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'WhatsApp API', 'AI/ML', 'FastAPI', 'JWT'],
      features: [
        'AI-generated login',
        'Automated WhatsApp messaging',
        'NLP-based scheduling',
        'Recurring reminders',
        'Analytics dashboard'
      ],
      liveLink: '#',
      githubLink: '#',
      status: 'Live',
      category: 'AI/SaaS'
    },
    {
      title: 'CRM Automation System',
      description: 'Custom CRM system with automation and segmented communication.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
      techStack: ['Supabase', 'n8n', 'Node.js'],
      features: [
        'Lead management',
        'Automated email workflows',
        'Contact segmentation',
        'Analytics dashboard'
      ],
      liveLink: null,
      githubLink: '#',
      status: 'Live',
      category: 'Automation'
    },
    {
      title: 'Weather Forecasting Automation',
      description: 'Weather-based automation system sending alerts via email.',
      image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&h=600&fit=crop',
      techStack: ['Weather API', 'n8n', 'Node.js'],
      features: [
        'Weather API integration',
        'Automated email alerts',
        'Condition-based triggers',
        'Scheduled workflows'
      ],
      liveLink: null,
      githubLink: '#',
      status: 'Live',
      category: 'Automation'
    },
    {
      title: 'Smart Agriculture System (ARIMAX)',
      description: 'AI-powered irrigation & soil prediction system using ARIMAX.',
      image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&h=600&fit=crop',
      techStack: ['Python', 'FastAPI', 'ARIMAX', 'IoT', 'React.js', 'MongoDB'],
      features: [
        'ARIMAX forecasting',
        'Soil moisture prediction',
        'Weather integration',
        'Automated irrigation',
        'Analytics dashboard'
      ],
      liveLink: '#',
      githubLink: '#',
      status: 'Live',
      category: 'AI/IoT'
    },
    {
      title: 'User Management System',
      description: 'Secure user registration and profile management system.',
      image: '/user managemnet project.png',
      techStack: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Express.js', 'MySQL'],
      features: [
        'User registration & login',
        'Profile CRUD',
        'Password encryption',
        'Session management'
      ],
      liveLink: '#',
      githubLink: '#',
      status: 'Live',
      category: 'Web Development'
    },
    {
      title: 'AI Farmer Assistant (n8n)',
      description: 'AI-powered farmer assistant using automation workflows.',
      image: '/AI farmer project.png',
      techStack: ['n8n', 'AI APIs', 'Weather API'],
      features: [
        'Crop advisory automation',
        'Weather-based alerts',
        'AI chatbot responses',
        'Workflow orchestration'
      ],
      liveLink: null,
      githubLink: '#',
      status: 'Live',
      category: 'AI/Agriculture'
    }
  ]

  const categories = ['All', 'Web Development', 'Healthcare', 'Professional', 'Enterprise', 'Creative', 'Civic Tech', 'AI/SaaS', 'Automation', 'AI/IoT', 'AI/Agriculture']
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
                className="glass-card group overflow-hidden h-full flex flex-col"
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
                      {project.liveLink && project.liveLink !== '#' && (
                        <a
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2 bg-white text-gray-900 rounded-full font-semibold hover:scale-110 transition-transform text-sm"
                        >
                          Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                {/* Project Info */}
                <div className="flex-grow flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-2xl font-bold">{project.title}</h3>
                      <span className="text-sm px-3 py-1 bg-gradient-primary text-white rounded-full">
                        {project.category}
                      </span>
                    </div>
                    {project.client && (
                      <p className="text-sm text-primary-purple font-semibold mb-3">
                        Client: {project.client}
                      </p>
                    )}
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

export default Portfolio
