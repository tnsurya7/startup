# Quick Setup Guide

## 🚀 Get Started in 3 Steps

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Customize Your Content

#### Update Contact Information
Replace placeholder phone numbers and emails with your actual details:

**Files to update:**
- `src/components/FloatingWhatsApp.tsx` - Line 5: WhatsApp number
- `src/pages/Contact.tsx` - Line 95, 234: WhatsApp number
- `src/pages/Home.tsx` - Line 267: WhatsApp number

#### Update Team Members
Edit `src/pages/Team.tsx` starting at line 7:
- Replace photos with your team's images
- Update names, roles, and skills
- Add real social media links

#### Update Portfolio Projects
Edit `src/pages/Portfolio.tsx` starting at line 7:
- Add your actual projects
- Replace placeholder images
- Update project descriptions and tech stacks

### Step 3: Run Development Server
```bash
npm run dev
```

Visit `http://localhost:5173` to see your website!

## 🎨 Customization Tips

### Change Colors
Edit `tailwind.config.js`:
```js
colors: {
  primary: {
    purple: '#YOUR_COLOR',
    blue: '#YOUR_COLOR',
    aqua: '#YOUR_COLOR',
  },
}
```

### Add More Services
Edit `src/pages/Services.tsx` - Add to the `serviceCategories` array

### Modify Testimonials
Edit `src/pages/Home.tsx` - Update the `testimonials` array

### Change Language Translations
Edit `src/context/LanguageContext.tsx` - Add more translations

## 📱 WhatsApp Integration

The website includes:
1. **Floating WhatsApp button** (bottom-right on all pages)
2. **Contact form** that opens WhatsApp with pre-filled message
3. **Team member WhatsApp links**

Make sure to replace `+919876543210` with your actual WhatsApp number in all files.

## 🌐 Deployment

### Deploy to Vercel (Easiest)
1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Click Deploy!

### Deploy to Netlify
1. Run `npm run build`
2. Drag the `dist` folder to [netlify.com/drop](https://app.netlify.com/drop)

## 🔧 Common Issues

### Port Already in Use
If port 5173 is busy:
```bash
npm run dev -- --port 3000
```

### Build Errors
Clear cache and reinstall:
```bash
rm -rf node_modules package-lock.json
npm install
```

## 📞 Need Help?

Contact us:
- Email: hello@creativetechstudio.com
- WhatsApp: +91 98765 43210

---

**Happy Building! 🎉**
