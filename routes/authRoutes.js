const express = require('express');
const { login, registerTeacher, registerStudent } = require('../controllers/authController');
const { authenticate } = require('../middleware/auth');
const { authorize } = require('../middleware/checkAuthority');

const router = express.Router();

// Login for all roles
router.post('/login', login);

// Register teacher (admin only)
router.post('/register-teacher', authenticate, authorize(['admin']), registerTeacher);

// Register student (admin or teacher)
router.post('/register-student', authenticate, authorize(['admin', 'teacher']), registerStudent);

module.exports = router;
