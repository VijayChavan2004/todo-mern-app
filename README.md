# Todo MERN Application

A full-stack task management application built with MERN stack featuring user authentication and CRUD operations.

## 🚀 Live Demo
[View Live App]([https://vijay-todo-mern-app.vercel.app])

## ✨ Features
- User Registration & Login
- JWT Authentication
- Create, Read, Update, Delete Tasks
- Mark tasks as complete
- User-specific task management
- Responsive design

## 🛠️ Tech Stack
**Frontend:**
- React.js
- React Router
- Context API
- Axios

**Backend:**
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- Bcrypt.js

## 📸 Screenshots
<img width="1920" height="1080" alt="todo-app-1" src="https://github.com/user-attachments/assets/0aee8b90-d5e3-4c04-8fc4-812c376a7a31" />
<img width="1920" height="1080" alt="todo-app-2" src="https://github.com/user-attachments/assets/80a4003c-645d-44f6-b271-03366b5b5c7a" />
![todo-app-3](https://github.com/user-attachments/assets/51e7b493-bf79-41c8-b8a8-e0b1886e7e1e)

## 🔧 Installation

### Prerequisites
- Node.js
- MongoDB

### Backend Setup
```bash
cd backend
npm install
# Create .env file with:
# PORT=5000
# MONGO_URI=your_mongodb_uri
# JWT_SECRET=your_secret
npm run dev
```

### Frontend Setup
```bash
cd frontend
npm install
npm start
```

## 📝 API Endpoints

### Auth
- POST /api/auth/register - Register user
- POST /api/auth/login - Login user

### Tasks
- GET /api/tasks - Get all tasks
- POST /api/tasks - Create task
- PUT /api/tasks/:id - Update task
- DELETE /api/tasks/:id - Delete task

## 👨‍💻 Author
Vijay Chavan
- GitHub: [@VijayChavan2004](https://github.com/VijayChavan2004)
- LinkedIn: https://www.linkedin.com/in/vijay-chavan-a88425293?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app

## 📄 License
This project is open source.
