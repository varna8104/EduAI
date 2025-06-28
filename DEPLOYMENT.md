# KidAI Project Deployment Guide

This guide explains how to deploy the KidAI project to Vercel (frontend) and a separate backend service.

## Project Structure

```
kidai/
├── frontend/          # Next.js frontend (deploy to Vercel)
└── backend/           # Django backend (deploy separately)
```

## Frontend Deployment (Vercel)

### Prerequisites
- Vercel account
- GitHub repository with your code

### Steps

1. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Set the root directory to `frontend`

2. **Configure Build Settings**
   - Framework Preset: Next.js
   - Build Command: `npm run build`
   - Output Directory: `.next`
   - Install Command: `npm install`

3. **Environment Variables**
   Add these environment variables in Vercel:
   ```
   NEXT_PUBLIC_GROQ_API_KEY=your_groq_api_key_here
   NEXT_PUBLIC_BACKEND_URL=https://your-backend-domain.com
   ```

4. **Deploy**
   - Click "Deploy"
   - Vercel will automatically build and deploy your frontend

## Backend Deployment

### Option 1: Railway (Recommended)

1. **Create Railway Account**
   - Go to [railway.app](https://railway.app)
   - Sign up with GitHub

2. **Deploy Backend**
   - Click "New Project"
   - Select "Deploy from GitHub repo"
   - Choose your repository
   - Set the source directory to `backend`

3. **Environment Variables**
   Add these in Railway:
   ```
   SECRET_KEY=your-secure-django-secret-key
   DEBUG=False
   ALLOWED_HOSTS=your-railway-domain.railway.app
   CORS_ALLOWED_ORIGINS=https://your-vercel-app.vercel.app
   ```

4. **Database (Optional)**
   - Add PostgreSQL plugin if needed
   - Update `settings.py` to use PostgreSQL

### Option 2: Heroku

1. **Create Heroku App**
   ```bash
   heroku create your-app-name
   ```

2. **Add PostgreSQL**
   ```bash
   heroku addons:create heroku-postgresql:mini
   ```

3. **Set Environment Variables**
   ```bash
   heroku config:set SECRET_KEY=your-secret-key
   heroku config:set DEBUG=False
   heroku config:set ALLOWED_HOSTS=your-app.herokuapp.com
   heroku config:set CORS_ALLOWED_ORIGINS=https://your-vercel-app.vercel.app
   ```

4. **Deploy**
   ```bash
   git subtree push --prefix backend heroku main
   ```

### Option 3: DigitalOcean App Platform

1. **Create App**
   - Go to DigitalOcean App Platform
   - Connect your GitHub repository
   - Select `backend` as source directory

2. **Configure Environment**
   - Add environment variables
   - Set build command: `pip install -r requirements.txt`
   - Set run command: `gunicorn kidai_backend.wsgi:application`

## Environment Variables Reference

### Frontend (Vercel)
| Variable | Description | Example |
|----------|-------------|---------|
| `NEXT_PUBLIC_GROQ_API_KEY` | Groq API key for AI features | `gsk_...` |
| `NEXT_PUBLIC_BACKEND_URL` | Backend API URL | `https://your-backend.railway.app` |

### Backend
| Variable | Description | Example |
|----------|-------------|---------|
| `SECRET_KEY` | Django secret key | `django-insecure-...` |
| `DEBUG` | Debug mode | `False` |
| `ALLOWED_HOSTS` | Allowed host domains | `your-domain.com` |
| `CORS_ALLOWED_ORIGINS` | Frontend domains | `https://your-app.vercel.app` |

## Testing the Deployment

### 1. Test Backend
```bash
# Test registration endpoint
curl -X POST https://your-backend.railway.app/api/register/ \
  -H "Content-Type: application/json" \
  -d '{"child_name":"Test","child_dob":"2020-01-01","parent_name":"Parent","parent_dob":"1990-01-01","parent_mobile":"1234567890","password":"test123"}'

# Test login endpoint
curl -X POST https://your-backend.railway.app/api/login/ \
  -H "Content-Type: application/json" \
  -d '{"parent_mobile":"1234567890","password":"test123"}'
```

### 2. Test Frontend
- Visit your Vercel app URL
- Try registering a new account
- Try logging in
- Test the AI chat features

## Troubleshooting

### Common Issues

1. **CORS Errors**
   - Check `CORS_ALLOWED_ORIGINS` in backend
   - Ensure frontend URL is included

2. **API Connection Errors**
   - Verify `NEXT_PUBLIC_BACKEND_URL` is correct
   - Check backend is running and accessible

3. **Database Errors**
   - Run migrations: `python manage.py migrate`
   - Check database connection settings

4. **Build Errors**
   - Check Node.js version compatibility
   - Verify all dependencies are installed

### Debug Mode
For debugging, temporarily set `DEBUG=True` in backend and check logs.

## Security Considerations

1. **Environment Variables**
   - Never commit sensitive data to Git
   - Use strong, unique secret keys
   - Rotate API keys regularly

2. **HTTPS**
   - Always use HTTPS in production
   - Configure SSL certificates

3. **CORS**
   - Only allow necessary origins
   - Disable `CORS_ALLOW_ALL_ORIGINS` in production

4. **Database**
   - Use strong database passwords
   - Enable database backups
   - Consider using managed databases

## Monitoring and Maintenance

1. **Logs**
   - Monitor application logs
   - Set up error tracking (Sentry, etc.)

2. **Performance**
   - Monitor response times
   - Set up performance monitoring

3. **Updates**
   - Keep dependencies updated
   - Monitor security advisories

## Support

For issues specific to:
- **Vercel**: Check Vercel documentation
- **Railway**: Check Railway documentation
- **Heroku**: Check Heroku documentation
- **Django**: Check Django documentation
- **Next.js**: Check Next.js documentation
