const User = require('../models/User');

// Get own profile (student)
const getProfile = async (req, res) => {
    try {
        const user = await User.findById(req.user.id).populate('standard');
        res.json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getProfile
};
