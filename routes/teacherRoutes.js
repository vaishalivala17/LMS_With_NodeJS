const express = require('express');
const { authenticate, authorize } = require('../middleware/auth');
const { registerStudent, getStudents, updateStudent, deleteStudent } = require('../controllers/teacherController');

const router = express.Router();

// Register student (teacher)
router.post('/register-student', authenticate, authorize(['teacher']), registerStudent);

// Get all students (teacher)
router.get('/students', authenticate, authorize(['teacher']), getStudents);

// Update student (teacher)
router.put('/students/:id', authenticate, authorize(['teacher']), updateStudent);

// Delete student (teacher)
router.delete('/students/:id', authenticate, authorize(['teacher']), deleteStudent);

module.exports = router;
