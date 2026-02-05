const express = require('express');
const { authenticate} = require('../middleware/auth');
const { authorize } = require('../middleware/checkAuthority');
const { registerStudent, getStudents, updateStudent, deleteStudent } = require('../controllers/teacherController');
const { getProfile } = require('../controllers/studentController');
const { getAttendance, markAttendance } = require('../controllers/attendanceController');

const router = express.Router();

// Register student (teacher)
router.post('/register-student', authenticate, authorize(['admin' ,'teacher']), registerStudent);

// Get all students (teacher)
router.get('/students', authenticate, authorize(['admin' ,'teacher']), getStudents);

// Update student (teacher)
router.put('/students/:id', authenticate, authorize(['admin' ,'teacher']), updateStudent);

// Delete student (teacher)
router.delete('/students/:id', authenticate, authorize(['admin' ,'teacher']), deleteStudent);

// Get own profile (teacher)
router.get('/profile', authenticate, authorize(['admin' ,'teacher']), getProfile);

// Mark attendance for students (teacher)
router.post('/attendance', authenticate, authorize(['admin' ,'teacher']), markAttendance);

// Get attendance for students (teacher)
router.get('/attendance', authenticate, authorize(['admin' ,'teacher']), getAttendance);

module.exports = router;
