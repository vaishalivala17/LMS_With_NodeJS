const Attendance = require('../models/Attendance');
const User = require('../models/User');

// Get own attendance percentage (student)
const getOwnAttendance = async (req, res) => {
    try {
        const studentId = req.user.id;
        const attendances = await Attendance.find({ student: studentId });
        const totalDays = attendances.length;
        const presentDays = attendances.filter(a => a.status === 'present').length;
        const percentage = totalDays > 0 ? (presentDays / totalDays) * 100 : 0;
        res.json({ percentage: percentage.toFixed(2) });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Mark attendance for students (teacher)
const markAttendance = async (req, res) => {
    try {
        const { studentId, date, status } = req.body;
        const teacher = await User.findById(req.user.id).populate('teaching.standard');
        const student = await User.findById(studentId).populate('standard');
        if (!student || student.role !== 'student' || student.isDeleted) {
            return res.status(404).json({ message: 'Student not found' });
        }
        const isTeaching = teacher.teaching.some(t => t.standard.some(s => s._id.equals(student.standard)));
        if (!isTeaching) {
            return res.status(403).json({ message: 'Not authorized to mark attendance for this student' });
        }
        const attendance = new Attendance({ student: studentId, date, status, markedBy: req.user.id });
        await attendance.save();
        res.status(201).json(attendance);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get attendance for students in teacher's classes (teacher)
const getAttendance = async (req, res) => {
    try {
        const teacher = await User.findById(req.user.id).populate('teaching.standard');
        const teachingStandards = teacher.teaching.flatMap(t => t.standard.map(s => s._id));
        const students = await User.find({ role: 'student', isDeleted: false, standard: { $in: teachingStandards } });
        const studentIds = students.map(s => s._id);
        const attendances = await Attendance.find({ student: { $in: studentIds } }).populate('student');
        const attendanceData = students.map(student => {
            const studentAttendances = attendances.filter(a => a.student._id.equals(student._id));
            const totalDays = studentAttendances.length;
            const presentDays = studentAttendances.filter(a => a.status === 'present').length;
            const percentage = totalDays > 0 ? (presentDays / totalDays) * 100 : 0;
            return {
                student: student.name,
                percentage: percentage.toFixed(2)
            };
        });
        res.json(attendanceData);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getOwnAttendance,
    markAttendance,
    getAttendance
};
