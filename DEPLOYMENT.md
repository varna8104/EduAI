# Quick Deployment Guide

## 🚀 Deploy to Vercel (Frontend)

1. **Push your code to GitHub** (✅ Already done!)

2. **Go to Vercel.com and connect your repo:**
   - Visit: https://vercel.com/new
   - Import your GitHub repository: `varna8104/EduAI`
   - Select the `frontend` folder as the root directory

3. **Set Environment Variables in Vercel:**
   ```
   NEXT_PUBLIC_GROQ_API_KEY=your_actual_groq_api_key_here
   NEXT_PUBLIC_API_BASE_URL=http://localhost:8000
   NODE_ENV=production
   ```

4. **Deploy!** 
   - Click "Deploy" and wait for build to complete
   - Your app will be live at: `https://your-app-name.vercel.app`

## 🔧 Environment Setup for Production

### For your .env.local file (create from .env.example):
```
NEXT_PUBLIC_GROQ_API_KEY=your_actual_groq_api_key_here
NEXT_PUBLIC_API_BASE_URL=http://localhost:8000
NODE_ENV=development
```

## 🐛 Fix 404 Errors

The recent updates include:
- ✅ Custom 404 and error pages
- ✅ Better API error handling
- ✅ Environment variable validation
- ✅ Vercel configuration for proper routing
- ✅ Production-ready Next.js config

## 📝 Next Steps

1. **Deploy Frontend**: Follow steps above
2. **Deploy Backend**: Use Railway, Heroku, or DigitalOcean
3. **Update API URL**: Change NEXT_PUBLIC_API_BASE_URL to your backend URL
4. **Test**: Verify all features work in production

Your app should now work without 404 errors! 🎉
