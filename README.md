
# StudyNotion

## Overview

*StudyNotion* is an online learning platform designed to connect instructors with students, enabling the creation, management, and sale of educational courses. The platform allows instructors to create and upload course content, including videos and documents, while students can browse, enroll in courses, and track their learning progress.

## Features

- *User Authentication*: Secure login, signup, and password reset using JWT, with role-based access control.
- *Course Management*: Instructors can create, update, and delete courses, including adding multimedia content.
- *Course Enrollment*: Students can browse available courses, enroll, and track their progress.
- *Payment Integration*: Secure payment processing for course purchases via Razorpay.
- *Rating and Reviews*: Students can rate and review courses, providing feedback for instructors and helping other students choose courses.

## Tech Stack

- *Frontend*: React, HTML, CSS, Tailwind CSS
- *Backend*: Node.js, Express.js
- *Database*: MongoDB
- *Payment Gateway*: Razorpay
- *Authentication*: JWT (JSON Web Tokens)
- *Hosting*: frontend-> Netlify , Backend->Render

## Getting Started

### Prerequisites

- *Node.js* (v14.x or higher)
- *MongoDB* (local instance or a cloud service like MongoDB Atlas)
- *Razorpay* account for payment integration

### Installation

1. *Clone the repository:*
   bash
   git clone https://github.com/OmDwivedi2003/studynotion.git
   cd studynotion
   

2. *Install dependencies for the backend and frontend:*
   bash
   cd backend
   npm install
   cd ../frontend
   npm install
   

3. *Set up environment variables:*
   - Create a .env file in the backend directory with the following variables:
     env
     MONGODB_URI=your_mongodb_uri
     JWT_SECRET=your_jwt_secret
     RAZORPAY_KEY_ID=your_razorpay_key_id
     RAZORPAY_KEY_SECRET=your_razorpay_key_secret
     

4. *Run the development server:*
   - For backend:
     bash
     cd backend
     npm run dev
     
   - For frontend:
     bash
     cd frontend
     npm start
     

5. *Access the application:*
   - Open your browser and navigate to http://localhost:3000 for the frontend.
   - The backend server runs on http://localhost:4000.

## Usage

- *Instructors*: Sign up as an instructor to create and manage courses.
- *Students*: Sign up as a student to browse and enroll in courses.
- *Payments*: Purchase courses securely through the integrated Razorpay payment gateway.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License.

## Contact

For questions or collaboration, please contact omdwivedi50126@gmail.com.

