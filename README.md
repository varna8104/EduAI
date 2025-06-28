# KidAI - Educational Platform for Children

KidAI is a comprehensive educational platform designed to provide interactive learning experiences for children. The platform combines a Django REST API backend with a modern Next.js frontend to deliver engaging educational content.

## 🌟 Features

- **Interactive Learning**: Engaging educational content for children
- **Subject Areas**: Mathematics, Science, Reading, History, and Languages
- **Hobby Zone**: Creative activities and hobby exploration
- **Story Mode**: Interactive storytelling experiences
- **Chat Integration**: AI-powered educational conversations
- **User Profiles**: Personalized learning experiences
- **Course Management**: Structured learning paths

## 🛠️ Technology Stack

### Backend
- **Django 5.2.3**: Python web framework
- **Django REST Framework**: API development
- **SQLite**: Database (development)
- **Django CORS Headers**: Cross-origin resource sharing

### Frontend
- **Next.js 15.3.4**: React framework
- **React 19**: UI library
- **TypeScript**: Type safety
- **Tailwind CSS**: Styling
- **React Icons**: Icon library

## 📁 Project Structure

```
kidai/
├── backend/                 # Django REST API
│   ├── api/                # API application
│   ├── kidai_backend/      # Django project settings
│   ├── manage.py           # Django management script
│   ├── requirements.txt    # Python dependencies
│   └── db.sqlite3         # SQLite database
│
└── frontend/               # Next.js application
    ├── src/
    │   └── app/           # App router pages
    │       ├── components/ # Reusable components
    │       ├── courses/   # Course pages
    │       ├── hobbies/   # Hobby-related pages
    │       ├── login/     # Authentication
    │       ├── profiles/  # User profiles
    │       └── register/  # User registration
    ├── public/            # Static assets
    └── package.json       # Node.js dependencies
```

## � Security Notes

**Important**: Before deploying to production or pushing to a public repository:

1. **Environment Variables**: Never commit your `.env` file. It contains sensitive information like your Django SECRET_KEY.
2. **Secret Key**: Generate a new SECRET_KEY for production using Django's built-in tools.
3. **Debug Mode**: Set `DEBUG=False` in production.
4. **Database**: Use a production database (PostgreSQL/MySQL) instead of SQLite.
5. **CORS**: Configure CORS_ALLOWED_ORIGINS properly for your production domain.

## �🚀 Getting Started

### Prerequisites

- Python 3.8+
- Node.js 18+
- npm or yarn

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. **Important: Create environment file**
   Copy the example environment file and add your settings:
   ```bash
   copy .env.example .env
   ```
   Edit the `.env` file and set your own SECRET_KEY and other configurations.

3. Create a virtual environment:
   ```bash
   python -m venv venv
   ```

4. Activate the virtual environment:
   - Windows: `venv\Scripts\activate`
   - macOS/Linux: `source venv/bin/activate`

5. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

6. Run database migrations:
   ```bash
   python manage.py migrate
   ```

7. Create a superuser (optional):
   ```bash
   python manage.py createsuperuser
   ```

8. Start the development server:
   ```bash
   python manage.py runserver
   ```

**Quick Setup (Windows)**: You can also run `setup.bat` for automated setup.

The backend API will be available at `http://localhost:8000`

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

The frontend application will be available at `http://localhost:3000`

## 🔧 Available Scripts

### Backend
- `python manage.py runserver` - Start development server
- `python manage.py migrate` - Run database migrations
- `python manage.py makemigrations` - Create new migrations
- `python manage.py createsuperuser` - Create admin user
- `python manage.py test` - Run tests

### Frontend
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📚 API Endpoints

The Django backend provides REST API endpoints for:
- User authentication and profiles
- Course management
- Educational content
- Progress tracking
- Chat functionality

API documentation is available at `http://localhost:8000/api/` when the server is running.

## 🎨 Frontend Pages

- **Home** (`/`) - Landing page
- **Login** (`/login`) - User authentication
- **Register** (`/register`) - User registration
- **Profiles** (`/profiles`) - User profile management
- **Courses** (`/courses`) - Course catalog
- **Hobbies** (`/hobbies/[childId]`) - Child-specific hobby activities
  - **Academics** - Educational subjects (Math, Science, Reading, History, Languages)
  - **Hobby Zone** - Creative activities
  - **Story Mode** - Interactive stories

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🐛 Issues

If you encounter any issues or have suggestions, please file an issue on the [GitHub repository](https://github.com/your-username/kidai/issues).

## 📞 Support

For support and questions, please contact:
- Email: support@kidai.com
- GitHub Issues: [Create an issue](https://github.com/your-username/kidai/issues)

## 🔮 Future Features

- Mobile application
- Real-time multiplayer learning games
- Advanced AI tutoring
- Parent dashboard
- Progress analytics
- Multi-language support
- Offline mode

---

Made with ❤️ for children's education
