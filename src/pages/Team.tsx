import { motion } from 'framer-motion'
import { Globe, Instagram, Linkedin, Phone, MessageCircle } from 'lucide-react'
import ScrollReveal from '../components/ScrollReveal'

const Team = () => {
  const teamMembers = [
    {
      name: 'Satheesh RV',
      role: 'Advisor & Mentor',
      description: 'Provides strategic guidance, business direction, and technical mentorship.',
      photo: '/satheesh rv.png',
      link: null
    },
    {
      name: 'Surya Kumar',
      role: 'Lead Full-Stack Developer & AI Automation Engineer',
      description: 'Responsible for architecture, backend systems, frontend development, and AI automation.',
      photo: '/surya kumar team.png',
      link: 'https://suryakumar-portfolio-777.vercel.app/'
    },
    {
      name: 'Mukesh Kumar',
      role: 'Lead Analyst & Digital Marketing Specialist',
      description: 'Handles data analytics, growth strategy, SEO, and performance marketing.',
      photo: '/mukesh kumar.png',
      link: null
    },
    {
      name: 'Ujakar Gupta',
      role: 'Video Editor & Content Creator',
      description: 'Manages video editing, reels, promotional creatives, and visual storytelling.',
      photo: '/ujakar gupta.png',
      link: null
    }
  ]

  return (
    <div className="pt-32 pb-20">
      {/* Hero Section */}
      <section className="container mx-auto px-4 mb-20">
        <ScrollReveal>
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Meet Our <span className="gradient-text">Team</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              A focused team driving technology, automation, and creativity at Web Deo
            </p>
          </div>
        </ScrollReveal>
      </section>

      {/* Team Grid */}
      <section className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <ScrollReveal key={index} delay={index * 0.05}>
              <motion.div
                whileHover={{ y: -10 }}
                className="glass-card group relative overflow-hidden h-full flex flex-col"
              >
                {/* Photo */}
                <div className="relative mb-4 overflow-hidden rounded-xl">
                  <motion.img
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                    src={member.photo}
                    alt={member.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                {/* Info */}
                <div className="flex-grow flex flex-col justify-between p-2">
                  {member.link ? (
                    <a
                      href={member.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xl font-bold mb-1 hover:text-primary-purple transition-colors cursor-pointer block"
                    >
                      {member.name}
                    </a>
                  ) : (
                    <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  )}
                  <p className="text-primary-purple font-semibold mb-3">{member.role}</p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm flex-grow">{member.description}</p>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        {/* Collaboration Note */}
        <ScrollReveal>
          <div className="text-center mt-16">
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              We collaborate with trusted partners and specialists based on project needs.
            </p>
          </div>
        </ScrollReveal>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 mt-20">
        <ScrollReveal>
          <div className="glass-card text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Want to <span className="gradient-text">Join Our Team?</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              We're always looking for talented individuals who are passionate about technology and creativity.
            </p>
            <a
              href="mailto:webdeo7@gmail.com?subject=Career Inquiry - Web Deo&body=Hi, I'm interested in joining the Web Deo team. Please let me know about available positions."
              className="btn-primary inline-block"
            >
              View Open Positions
            </a>
          </div>
        </ScrollReveal>
      </section>
    </div>
  )
}

export default Team
