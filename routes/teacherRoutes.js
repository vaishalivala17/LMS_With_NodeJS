const express = require('express');
const { authenticate} = require('../middleware/auth');
const { authorize } = require('../middleware/checkAuthority');
const { registerStudent, getStudents, updateStudent, deleteStudent } = require('../controllers/teacherController');
const { getProfile } = require('../controllers/studentController');

const router = express.Router();

// Register student (teacher)
router.post('/register-student', authenticate, authorize(['teacher']), registerStudent);

// Get all students (teacher)
router.get('/students', authenticate, authorize(['teacher']), getStudents);

// Update student (teacher)
router.put('/students/:id', authenticate, authorize(['teacher']), updateStudent);

// Delete student (teacher)
router.delete('/students/:id', authenticate, authorize(['teacher']), deleteStudent);

// Get own profile (teacher)
router.get('/profile', authenticate, authorize(['teacher']), getProfile);

module.exports = router;
