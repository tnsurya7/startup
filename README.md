# Creative Tech Studio - Agency Website

A modern, premium agency website built with React, TypeScript, Tailwind CSS, and Framer Motion. Features smooth animations, glassmorphism design, dark mode, and multi-language support.

## 🚀 Features

### Pages
- **Home**: Hero section, services preview, stats, testimonials, tech stack, CTA
- **Services**: Comprehensive service listings across 4 categories
- **Team**: Team member profiles with social links and skills
- **Portfolio**: Project showcase with filtering and detailed case studies
- **Contact**: Multi-step form with WhatsApp integration

### Key Features
- ✨ Smooth animations and transitions (Framer Motion)
- 🎨 Glassmorphism UI with gradient color palette (purple + blue + aqua)
- 🌓 Dark/Light mode toggle
- 🌍 Language toggle (English/Tamil)
- 📱 Fully responsive (mobile, tablet, desktop)
- 💬 Floating WhatsApp chat button
- 📊 Animated counters and scroll reveals
- 🎯 Sticky animated navbar
- 📧 Multi-step contact form
- 🔗 Social media integration

## 🛠️ Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **React Router** - Navigation
- **Lucide React** - Icons

## 📦 Installation

1. **Install dependencies**:
```bash
npm install
```

2. **Start development server**:
```bash
npm run dev
```

3. **Build for production**:
```bash
npm run build
```

4. **Preview production build**:
```bash
npm run preview
```

## ⚙️ Configuration

### Update Contact Information

Edit the following files to add your contact details:

1. **WhatsApp Number** - Update in:
   - `src/components/FloatingWhatsApp.tsx`
   - `src/pages/Contact.tsx`
   - `src/pages/Home.tsx`

2. **Team Members** - Update in:
   - `src/pages/Team.tsx`

3. **Projects** - Update in:
   - `src/pages/Portfolio.tsx`

4. **Services** - Update in:
   - `src/pages/Services.tsx`

### Color Customization

Edit `tailwind.config.js` to customize the gradient colors:

```js
colors: {
  primary: {
    purple: '#8B5CF6',
    blue: '#3B82F6',
    aqua: '#06B6D4',
  },
}
```

## 📱 Services Offered

### Development Services
- Full-Stack Web Development
- Micro-SaaS Product Development
- Database Design & Backend Engineering
- Custom Software Solutions

### AI & Automation
- AI Chatbot Development
- ML & AI Projects
- Automation Tools

### Content & Media
- Video Editing (Reels, Shorts, Promos)
- Content Writing & Creation
- Product & Personal Branding Photography
- Creative Content Design

### Digital Marketing
- Social Media Management
- Growth Marketing & SEO
- Brand Strategy

## 🎨 Design Features

- **Gradient Palette**: Purple (#8B5CF6) → Blue (#3B82F6) → Aqua (#06B6D4)
- **Glassmorphism**: Frosted glass effect with backdrop blur
- **Smooth Animations**: Page transitions, hover effects, scroll reveals
- **Typography**: Inter font family for modern, clean look
- **Rounded Corners**: Soft, friendly UI elements
- **Soft Shadows**: Depth and elevation

## 📄 Project Structure

```
src/
├── components/
│   ├── AnimatedCounter.tsx
│   ├── FloatingWhatsApp.tsx
│   ├── Navbar.tsx
│   └── ScrollReveal.tsx
├── context/
│   └── ThemeContext.tsx
├── pages/
│   ├── Home.tsx
│   ├── Services.tsx
│   ├── Team.tsx
│   ├── Portfolio.tsx
│   └── Contact.tsx
├── App.tsx
├── main.tsx
└── index.css
```

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Drag and drop the 'dist' folder to Netlify
```

### Other Platforms
Build the project and deploy the `dist` folder to any static hosting service.

## 📞 Contact

- **Email**: hello@creativetechstudio.com
- **Phone**: +91 98765 43210
- **WhatsApp**: +91 98765 43210
- **Location**: Bangalore, Karnataka, India

## 📝 License

This project is proprietary and confidential.

## 🙏 Credits

Built with ❤️ by Creative Tech Studio
