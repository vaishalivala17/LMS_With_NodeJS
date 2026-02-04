const User = require('../models/User');
const Subject = require('../models/Subject');
const Standard = require('../models/Standard');
// const bcrypt = require('bcrypt');

// Register teacher (admin)
const registerTeacher = async (req, res) => {
    try {
        const { name, email, password, teaching } = req.body;
        const teacher = new User({ name, email, password, role: 'teacher', teaching });
        await teacher.save();
        res.status(201).json({ message: 'Teacher registered successfully', teacher });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};



// Get all students (admin)
const getStudents = async (req, res) => {
    try {
        const students = await User.find({ role: 'student' }).populate('standard');
        res.json(students);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update student (admin)
const updateStudent = async (req, res) => {
    try {
        const { name, email, standard } = req.body;
        const student = await User.findByIdAndUpdate(req.params.id, { name, email, standard }, { new: true });
        res.json(student);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Delete student (admin)
const deleteStudent = async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id);
        res.json({ message: 'Student deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get all teachers (admin)
const getTeachers = async (req, res) => {
    try {
        const teachers = await User.find({ role: 'teacher' }).populate('teaching.subject').populate('teaching.standard');
        res.json(teachers);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update teacher (admin)
const updateTeacher = async (req, res) => {
    try {
        const { name, email, teaching } = req.body;
        const teacher = await User.findByIdAndUpdate(req.params.id, { name, email, teaching }, { new: true });
        res.json(teacher);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Delete teacher (admin)
const deleteTeacher = async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id);
        res.json({ message: 'Teacher deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Add subject (admin)
const addSubject = async (req, res) => {
    try {
        const { name, standard } = req.body;
        const subject = new Subject({ name, standard });
        await subject.save();
        res.status(201).json(subject);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get all subjects (admin)
const getSubjects = async (req, res) => {
    try {
        const subjects = await Subject.find().populate('standard');
        res.json(subjects);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Add standard (admin)
const addStandard = async (req, res) => {
    try {
        const { name } = req.body;
        const standard = new Standard({ name });
        await standard.save();
        res.status(201).json(standard);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get all standards (admin)
const getStandards = async (req, res) => {
    try {
        const standards = await Standard.find();
        res.json(standards);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    registerTeacher,
    getStudents,
    updateStudent,
    deleteStudent,
    getTeachers,
    updateTeacher,
    deleteTeacher,
    addSubject,
    getSubjects,
    addStandard,
    getStandards
};
