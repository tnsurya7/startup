import { motion } from 'framer-motion'
import { Globe, Instagram, Linkedin, Phone, MessageCircle } from 'lucide-react'
import ScrollReveal from '../components/ScrollReveal'

const Team = () => {
  const teamMembers = [
    {
      name: 'Arjun Krishnan',
      role: 'Founder & Full-Stack Developer',
      photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
      skills: ['React', 'Node.js', 'Python', 'AWS', 'PostgreSQL', 'System Architecture'],
      social: {
        website: 'https://arjunkrishnan.dev',
        instagram: 'https://instagram.com/arjun.dev',
        whatsapp: '+919876543210',
        linkedin: 'https://linkedin.com/in/arjunkrishnan',
        phone: '+919876543210'
      }
    },
    {
      name: 'Priya Sharma',
      role: 'AI/ML Engineer',
      photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
      skills: ['TensorFlow', 'PyTorch', 'NLP', 'Computer Vision', 'Python', 'Data Science'],
      social: {
        website: 'https://priyasharma.ai',
        instagram: 'https://instagram.com/priya.ai',
        whatsapp: '+919876543211',
        linkedin: 'https://linkedin.com/in/priyasharma',
        phone: '+919876543211'
      }
    },
    {
      name: 'Rahul Verma',
      role: 'Backend Engineer',
      photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
      skills: ['Node.js', 'FastAPI', 'MongoDB', 'Redis', 'Docker', 'Microservices'],
      social: {
        website: 'https://rahulverma.dev',
        instagram: 'https://instagram.com/rahul.backend',
        whatsapp: '+919876543212',
        linkedin: 'https://linkedin.com/in/rahulverma',
        phone: '+919876543212'
      }
    },
    {
      name: 'Sneha Patel',
      role: 'UI/UX Designer',
      photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
      skills: ['Figma', 'Adobe XD', 'User Research', 'Prototyping', 'Design Systems', 'Branding'],
      social: {
        website: 'https://snehapatel.design',
        instagram: 'https://instagram.com/sneha.designs',
        whatsapp: '+919876543213',
        linkedin: 'https://linkedin.com/in/snehapatel',
        phone: '+919876543213'
      }
    },
    {
      name: 'Vikram Singh',
      role: 'Video Editor & Content Creator',
      photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop',
      skills: ['Premiere Pro', 'After Effects', 'DaVinci Resolve', 'Motion Graphics', 'Color Grading'],
      social: {
        website: 'https://vikramsingh.media',
        instagram: 'https://instagram.com/vikram.creates',
        whatsapp: '+919876543214',
        linkedin: 'https://linkedin.com/in/vikramsingh',
        phone: '+919876543214'
      }
    },
    {
      name: 'Ananya Reddy',
      role: 'Digital Marketing Specialist',
      photo: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop',
      skills: ['SEO', 'Social Media', 'Google Ads', 'Content Strategy', 'Analytics', 'Email Marketing'],
      social: {
        website: 'https://ananyareddy.marketing',
        instagram: 'https://instagram.com/ananya.marketing',
        whatsapp: '+919876543215',
        linkedin: 'https://linkedin.com/in/ananyareddy',
        phone: '+919876543215'
      }
    },
    {
      name: 'Karthik Menon',
      role: 'DevOps Engineer',
      photo: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop',
      skills: ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Terraform', 'Monitoring'],
      social: {
        website: 'https://karthikmenon.cloud',
        instagram: 'https://instagram.com/karthik.devops',
        whatsapp: '+919876543216',
        linkedin: 'https://linkedin.com/in/karthikmenon',
        phone: '+919876543216'
      }
    },
    {
      name: 'Divya Iyer',
      role: 'Content Writer',
      photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop',
      skills: ['SEO Writing', 'Copywriting', 'Technical Writing', 'Blog Content', 'Social Media Copy'],
      social: {
        website: 'https://divyaiyer.writes',
        instagram: 'https://instagram.com/divya.writes',
        whatsapp: '+919876543217',
        linkedin: 'https://linkedin.com/in/divyaiyer',
        phone: '+919876543217'
      }
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
              A diverse team of experts passionate about creating exceptional digital experiences. 
              Each member brings unique skills and creativity to every project.
            </p>
          </div>
        </ScrollReveal>
      </section>

      {/* Team Grid */}
      <section className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <ScrollReveal key={index} delay={index * 0.05}>
              <motion.div
                whileHover={{ y: -10 }}
                className="glass-card group relative overflow-hidden"
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
                <div className="mb-4">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-primary-purple font-semibold mb-3">{member.role}</p>
                  
                  {/* Skills */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {member.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="text-xs px-3 py-1 bg-gradient-primary text-white rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Social Links */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  className="flex gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300"
                >
                  <a
                    href={member.social.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                    aria-label="Website"
                  >
                    <Globe size={18} className="text-white" />
                  </a>
                  <a
                    href={member.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                    aria-label="Instagram"
                  >
                    <Instagram size={18} className="text-white" />
                  </a>
                  <a
                    href={`https://wa.me/${member.social.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                    aria-label="WhatsApp"
                  >
                    <MessageCircle size={18} className="text-white" />
                  </a>
                  <a
                    href={member.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={18} className="text-white" />
                  </a>
                  <a
                    href={`tel:${member.social.phone}`}
                    className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                    aria-label="Phone"
                  >
                    <Phone size={18} className="text-white" />
                  </a>
                </motion.div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
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
              href="mailto:careers@creativetechstudio.com"
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
