const express = require('express');
const { authenticate} = require('../middleware/auth');
const {authorize } = require('../middleware/checkAuthority');
const { getProfile } = require('../controllers/studentController');
const { getOwnAttendance } = require('../controllers/attendanceController');

const router = express.Router();

// Get own profile (student)
router.get('/profile', authenticate, authorize(['admin' ,'teacher', 'student']), getProfile);

// Get own attendance percentage (student)
router.get('/attendance', authenticate, authorize(['admin' ,'teacher', 'student']), getOwnAttendance);

module.exports = router;
