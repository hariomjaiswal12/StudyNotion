![React](https://img.shields.io/badge/Frontend-React-blue)
![Node](https://img.shields.io/badge/Backend-Node.js-green)
![MongoDB](https://img.shields.io/badge/Database-MongoDB-darkgreen)
![License](https://img.shields.io/badge/License-MIT-yellow)

# StudyNotion🎓

A full-stack **MERN EdTech Platform** that connects instructors and students in one place.
Users can sign up, explore courses, purchase courses, and track learning progress.

---

## 🌐 Live Demo

🔗 Frontend: [Live Site](https://study-notion-one-olive.vercel.app)
🔗 Backend API: [API Server](https://studynotion-backend-hariom.onrender.com)

---

## 📸 Project Screenshots

### Home Page

![Home Page](./screenshots/home.png)

### Add Course Page

![Add Course Page](./screenshots/add-course-page.png)

### Cart Page

![Cart Page](./screenshots/cart-page.png)

### Course Details Page

![Course Details Page](./screenshots/course-details.png)

### User Dashboard

![User Dashboard](./screenshots/user-dashboard.png)

### Instructor Dashboard

![Instructor Dashboard](./screenshots/instructor-dashboard.png)

---

## 🚀 Features

### 👨‍🎓 Student Features

* User Signup / Login with OTP verification
* Browse all available courses
* Purchase premium courses
* View enrolled courses
* Track progress while learning
* Manage profile and settings

### 👨‍🏫 Instructor Features

* Create and upload courses
* Add sections, lectures, videos
* Manage published courses
* Dashboard analytics

### 🔐 Authentication

* JWT based login system
* OTP email verification
* Reset password via email

### 💳 Payments

* Razorpay payment gateway integration

### ☁️ Media Upload

* Cloudinary image/video upload support

---

## 🛠️ Tech Stack

### Frontend

* React.js
* Redux Toolkit
* Tailwind CSS

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose

### Other Tools

* JWT Authentication
* Nodemailer
* Razorpay
* Cloudinary

---

## 📂 Folder Structure

```bash
StudyNotion/
│── src/              # Frontend React App
│── server/           # Backend API
│── screenshots/      # README Images
│── package.json
```

---

## ⚙️ Installation & Setup

### Clone Repository

```bash
git clone https://github.com/hariomjaiswal12/StudyNotion.git
cd StudyNotion
```

### Install Dependencies

```bash
npm install
cd server
npm install
```

### Run Frontend

```bash
npm start
```

### Run Backend

```bash
cd server
npm run dev
```

---

## 🔑 Environment Variables

Create `.env` file in server folder:

```env
PORT=5000
MONGODB_URL=your_mongodb_url
JWT_SECRET=your_secret
MAIL_USER=your_email
MAIL_PASS=your_password
CLOUD_NAME=your_cloudinary_name
API_KEY=your_cloudinary_key
API_SECRET=your_cloudinary_secret
RAZORPAY_KEY=your_key
RAZORPAY_SECRET=your_secret
```

---

## 📈 Future Improvements

* Certificate Generation
* Course Reviews & Ratings
* AI Learning Assistant
* Admin Panel
* Notifications

---

## 👨‍💻 Author

**Hariom Jaiswal**
📧 [omjaiswal942@gmail.com](mailto:omjaiswal942@gmail.com)
🔗 🔗 GitHub: [hariomjaiswal12](https://github.com/hariomjaiswal12)

---

## ⭐ Support

If you like this project, give it a ⭐ on GitHub.
