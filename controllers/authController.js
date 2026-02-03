const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// General login for all roles
const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user || !(await user.comparePassword(password))) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }
        const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.json({ token, m, user: { id: user._id, name: user.name, email: user.email, role: user.role } });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


// Register Admin 
const registerAdmin = async (req, res) => {
    try {
        const { name, email, password, subjects } = req.body;
        const admin = new User({ name, email, password, role: 'Admin' });
        await admin.save();
        res.status(201).json({ message: 'Admin registered successfully', admin });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
// Register teacher (admin only)
const registerTeacher = async (req, res) => {
    try {
        const { name, email, password, subjects } = req.body;
        const teacher = new User({ name, email, password, role: 'teacher', subjects });
        await teacher.save();
        res.status(201).json({ message: 'Teacher registered successfully', teacher });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Register student (admin or teacher)
const registerStudent = async (req, res) => {
    try {
        const { name, email, password, standard } = req.body;
        const student = new User({ name, email, password, role: 'student', standard });
        await student.save();
        res.status(201).json({ message: 'Student registered successfully', student });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    login,
    registerAdmin,
    registerTeacher,
    registerStudent
};
