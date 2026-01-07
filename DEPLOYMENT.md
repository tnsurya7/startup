# Deployment Guide - Vercel

## Quick Deploy to Vercel

### Option 1: Deploy via Vercel CLI (Fastest)

1. **Install Vercel CLI** (if not already installed):
```bash
npm install -g vercel
```

2. **Login to Vercel**:
```bash
vercel login
```

3. **Deploy**:
```bash
vercel
```

Follow the prompts:
- Set up and deploy? **Y**
- Which scope? Select your account
- Link to existing project? **N**
- Project name? **creative-tech-studio** (or your preferred name)
- Directory? **./** (press Enter)
- Override settings? **N**

4. **Deploy to Production**:
```bash
vercel --prod
```

Your site will be live at: `https://your-project-name.vercel.app`

---

### Option 2: Deploy via Vercel Dashboard

1. **Push to GitHub**:
```bash
git init
git add .
git commit -m "Initial commit - Web Deo"
git branch -M main
git remote add origin YOUR_GITHUB_REPO_URL
git push -u origin main
```

2. **Go to Vercel**:
   - Visit [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your GitHub repository
   - Click "Deploy"

That's it! Vercel will automatically detect Vite and deploy your site.

---

## After Deployment

Your website will be live at a URL like:
- `https://creative-tech-studio.vercel.app`
- Or your custom domain if configured

### Custom Domain (Optional)
1. Go to your project settings in Vercel
2. Click "Domains"
3. Add your custom domain
4. Follow DNS configuration instructions

---

## Environment Variables (If Needed)

If you add any API keys or secrets later:
1. Go to Project Settings → Environment Variables
2. Add your variables
3. Redeploy

---

## Automatic Deployments

Once connected to GitHub:
- Every push to `main` branch = Production deployment
- Every push to other branches = Preview deployment

---

## Troubleshooting

### Build fails?
```bash
# Test build locally first
npm run build
npm run preview
```

### Need to redeploy?
```bash
vercel --prod
```

### Check logs
Visit your Vercel dashboard → Project → Deployments → View logs

---

## Next Steps After Deployment

1. ✅ Test all pages work
2. ✅ Update contact information with your real details
3. ✅ Replace team member photos
4. ✅ Add your actual projects to portfolio
5. ✅ Update WhatsApp numbers
6. ✅ Configure custom domain (optional)
7. ✅ Set up analytics (optional)

---

**Your site is ready to go live! 🚀**
