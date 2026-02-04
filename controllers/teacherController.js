const User = require('../models/User');
const bcrypt = require('bcrypt');

// Register student (teacher)
const registerStudent = async (req, res) => {
    try {
        const { name, email, password, standard } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const student = new User({ name, email, password: hashedPassword, role: 'student', standard });
        await student.save();
        res.status(201).json({ message: 'Student registered successfully', student });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get all students (teacher)
const getStudents = async (req, res) => {
    try {
        const teacher = await User.findById(req.user.id).populate('teaching.standard');
        const teachingStandards = teacher.teaching.flatMap(t => t.standard.map(s => s._id));
        const students = await User.find({ role: 'student', isDeleted: false, standard: { $in: teachingStandards } }).populate('standard');
        res.json(students);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update student (teacher)
const updateStudent = async (req, res) => {
    try {
        const { name, email, standard } = req.body;
        const student = await User.findByIdAndUpdate(req.params.id, { name, email, standard }, { new: true });
        res.json(student);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Delete student (teacher)
const deleteStudent = async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id);
        res.json({ message: 'Student deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    registerStudent,
    getStudents,
    updateStudent,
    deleteStudent
};
