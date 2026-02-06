# LMS_With_NodeJs

## Project Title
Learning Management System (LMS) using Node.js

---

## Project Description
This project is a **Learning Management System (LMS)** developed using **Node.js, Express.js, MongoDB, and EJS**.  
It allows **Admin**, **Teacher** and **Students** to log in with role-based access and manage learning-related data.

The main purpose of this project is to understand:
- Backend development with Node.js
- Authentication using jsonwebtoken
- Session handling
- MongoDB database integration

---

## Objectives
- To implement secure login and registration
- To understand role-based authentication
- To perform CRUD operations using MongoDB
- To follow MVC project structure

---

## Features

### Authentication
- Registration of teacher and students, manualy admin registartion 
- Teacher & Student login
- Session-based authentication using Passport.js
- Secure password handling

### Admin Module
- Admin login
- Manage teacher and students all routes

### Teacher Module
- Student Registration
- Show Students of only own class and mark attendances 

### Student Module
- Student login
- Access own Attendance in pesentage

---

## Technologies Used
- **Backend:** Node.js, Express.js  
- **Frontend:** --
- **Database:** MongoDB  
- **Authentication:** Token Based
- **Tools & Libraries:**
  - express
  - body-parser
  - bcrypt
  - mongoose  
  - jsonwebtoken 
  - dotenv  
    

---

## Configure Environment Variables
 - PORT=3000
 - MONGO_URI=your_mongodb_connection_string
 - ADMIN_NAME=your_name
 - ADMIN_EMAIL=your_email
 - ADMIN_PASSWORD=your_app_password
 - SESSION_SECRET=your_secret_key

---

📌 Future Enhancements
  - Fees Payment integration
  - Admin analytics dashboard
