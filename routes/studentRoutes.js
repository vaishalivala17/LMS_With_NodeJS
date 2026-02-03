const express = require('express');
const { authenticate} = require('../middleware/auth');
const {authorize } = require('../middleware/checkAuthority');
const { getProfile } = require('../controllers/studentController');

const router = express.Router();

// Get own profile (student)
router.get('/profile', authenticate, authorize(['student']), getProfile);

module.exports = router;
