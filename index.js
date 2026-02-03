const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const authRoutes = require('./routes/authRoutes');
const adminRoutes = require('./routes/adminRoutes');
const teacherRoutes = require('./routes/teacherRoutes');
const studentRoutes = require('./routes/studentRoutes');
const port = process.env.PORT || 3001 ;

const server = express();

// Middleware
server.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error("MongoDB connection error:", err));

server.use('/api/auth', authRoutes);
server.use('/api/admin', adminRoutes);
server.use('/api/teacher', teacherRoutes);
server.use('/api/student', studentRoutes);

server.listen(port, (err) => {
    if (!err) {
        console.log(`Server running on: http://localhost:${port}`);
    } else {
        console.log("Error.... ", err);
    }
});
