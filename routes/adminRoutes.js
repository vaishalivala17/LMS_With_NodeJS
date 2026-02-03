const express = require('express');
const { authenticate } = require('../middleware/auth');
const { authorize } = require('../middleware/checkAuthority');
const {registerAdmin} = require('../controllers/authController')
const { registerTeacher, getStudents, updateStudent, deleteStudent, getTeachers, updateTeacher, deleteTeacher, addSubject, getSubjects, addStandard, getStandards } = require('../controllers/adminController');

const router = express.Router();

//Admin  register
router.post('/register-admin', registerAdmin);

// Admin registers teacher
router.post('/register-teacher', authenticate, authorize(['admin']), registerTeacher);

// Get all students (admin)
router.get('/students', authenticate, authorize(['admin']), getStudents);

// Update student (admin)
router.put('/students/:id', authenticate, authorize(['admin']), updateStudent);

// Delete student (admin)
router.delete('/students/:id', authenticate, authorize(['admin']), deleteStudent);

// Get all teachers (admin)
router.get('/teachers', authenticate, authorize(['admin']), getTeachers);

// Update teacher (admin)
router.put('/teachers/:id', authenticate, authorize(['admin']), updateTeacher);

// Delete teacher (admin)
router.delete('/teachers/:id', authenticate, authorize(['admin']), deleteTeacher);

// Add subject (admin)
router.post('/subjects', authenticate, authorize(['admin']), addSubject);

// Get all subjects (admin)
router.get('/subjects', authenticate, authorize(['admin']), getSubjects);

// Add standard (admin)
router.post('/standards', authenticate, authorize(['admin']), addStandard);

// Get all standards (admin)
router.get('/standards', authenticate, authorize(['admin']), getStandards);

module.exports = router;