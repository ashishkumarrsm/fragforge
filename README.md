# 🎮 FragForge — Forge Your Gaming Identity

**A Gaming Graphics & Esports Poster Editor**

FragForge is a web-based gaming graphics editor designed for gamers, streamers, esports teams, and tournament organizers. It aims to make creating professional gaming graphics simple, fast, and accessible.

Choose a template, customize text and images, create your own design, save your project, and export your artwork.

---

## 🚀 Project Overview

Creating professional gaming posters and thumbnails often requires advanced graphic-design skills and expensive software.

FragForge aims to simplify this process by providing ready-made gaming templates and an easy-to-use visual editor.

With FragForge, users will be able to create:

- Esports tournament posters
- Gaming YouTube thumbnails
- Player introduction posters
- Team announcement graphics
- Match-day announcements
- Gaming banners and social media graphics

**Project Goal:** Build a complete MERN-stack design platform where users can create, customize, save, manage, and export gaming graphics.

---

## ✨ Planned Features

### 🎨 Design Editor
- Interactive canvas-based editor
- Add, edit, move, resize, and delete text
- Upload and customize images
- Change background colors and images
- Customize font styles, sizes, and colors
- Manage design elements through layers
- Undo and redo editing actions

### 🖼️ Templates
- Gaming and esports poster templates
- YouTube thumbnail templates
- Tournament announcement templates
- Player and team poster templates
- Template categories and search
- Favorite templates

### 👤 User Management
- User registration and login
- Secure authentication
- Personal dashboard
- User profile management

### 📁 Project Management
- Create new designs
- Save projects
- Reopen and edit saved projects
- Rename and delete projects
- Duplicate existing projects
- Automatic project saving (planned)

### 📥 Export Designs
- Export designs as PNG
- JPG export (planned)
- Custom design dimensions (planned)
- PDF export (planned)

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| React.js | Frontend development |
| Vite | Frontend build tool |
| Tailwind CSS | Styling and responsive UI |
| React Router | Client-side routing |
| Axios | API communication |
| Fabric.js | Canvas-based design editor |
| Node.js | Backend runtime |
| Express.js | REST API development |
| MongoDB | Database |
| Mongoose | Database modeling |
| JWT | Authentication |
| bcrypt | Password hashing |
| Cloudinary | Image and asset storage |

---

## 📂 Project Structure

Proposed project structure:

```text
FragForge/
│
├── client/
│   ├── public/
│   └── src/
│       ├── assets/
│       ├── components/
│       ├── pages/
│       ├── layouts/
│       ├── hooks/
│       ├── context/
│       ├── services/
│       ├── utils/
│       ├── App.jsx
│       └── main.jsx
│
├── server/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── services/
│   ├── utils/
│   └── server.js
│
├── .gitignore
└── README.md
```

---

## ⚙️ Getting Started

Follow these instructions to run the project locally once the frontend and backend applications are set up.

### 1. Clone the Repository

```bash
git clone https://github.com/ashishkumarrsm/FragForge.git
```

```bash
cd FragForge
```

### 2. Frontend Setup

```bash
cd client
npm install
```

Create a `.env` file inside the `client` directory:

```env
VITE_API_URL=http://localhost:5000/api
```

Start the frontend:

```bash
npm run dev
```

### 3. Backend Setup

Open another terminal:

```bash
cd server
npm install
```

Create a `.env` file inside the `server` directory:

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLIENT_URL=http://localhost:5173
```

Start the backend:

```bash
npm run dev
```

> Note: These are the intended setup steps and example environment variables. Update the commands and variable names to match the actual project configuration as development progresses.

---

## 🗺️ Development Roadmap

FragForge is being developed in multiple phases.

### Phase 1 — Foundation (MVP)
- [ ] Initialize React and Vite frontend
- [ ] Set up Express backend
- [ ] Connect MongoDB
- [ ] Create landing page
- [ ] Implement user registration and login
- [ ] Build user dashboard

### Phase 2 — Templates and Editor
- [ ] Create gaming template gallery
- [ ] Add template categories
- [ ] Integrate Fabric.js
- [ ] Implement text editing
- [ ] Implement image uploads
- [ ] Add background customization
- [ ] Implement canvas resizing and positioning

### Phase 3 — Project Management
- [ ] Create project database model
- [ ] Save design data
- [ ] Reopen saved projects
- [ ] Rename and delete projects
- [ ] Implement PNG export
- [ ] Integrate Cloudinary

### Phase 4 — Advanced Features
- [ ] Undo and redo
- [ ] Layer management
- [ ] Duplicate design elements
- [ ] Autosave
- [ ] JPG and PDF export
- [ ] Responsive editor improvements

### Phase 5 — Future Enhancements
- [ ] Premium templates
- [ ] AI-powered background generation
- [ ] Brand kits
- [ ] Team workspaces
- [ ] Collaboration features
- [ ] Template marketplace

---

## 🎯 Target Users

FragForge is being designed for:

- **Gamers:** Create personalized gaming graphics.
- **Streamers:** Design YouTube thumbnails and channel banners.
- **Esports Teams:** Create team posters and player introductions.
- **Tournament Organizers:** Design professional tournament announcements.
- **Gaming Designers:** Create and manage gaming-related graphics.

---

## 🔐 Security Considerations

Planned security practices include:

- Password hashing using bcrypt.
- JWT-based authentication.
- Input validation and sanitization.
- Environment variables for sensitive configuration.
- Project ownership verification.
- Secure image upload validation.

---

## 🌟 Vision

The vision behind FragForge is to create a simple yet powerful gaming design platform that helps everyone express their gaming identity.

From a small gaming tournament to a professional esports event, FragForge aims to make every design stand out.

**Create. Customize. Compete.**

### Forge Your Gaming Identity. 🎮

---

## 👨‍💻 Developer

**Ashish Kumar**

- GitHub: [@ashishkumarrsm](https://github.com/ashishkumarrsm)
- LinkedIn: [Ashish Kumar](https://www.linkedin.com/in/ashish-kumar-476178259/)

---

*FragForge is an independent project currently under development. Game names, logos, and related assets belong to their respective owners. Use original, licensed, or user-provided assets in your designs.*