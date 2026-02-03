const mongoose = require('mongoose');
const User = require('./models/User');
const bcrypt = require('bcrypt');
require('dotenv').config();

const insertFirstAdmin = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        const adminExists = await User.findOne({ role: 'admin' });
        if (adminExists) {
            console.log('Admin already exists');
            return;
        }
        const hashedPassword = await bcrypt.hash('admin123', 10);
        const admin = new User({
            name: process.env.ADMIN_NAME,
            email: process.env.ADMIN_EMAIL,
            password: hashedPassword
        });
        await admin.save();
        console.log('First admin inserted successfully');
    } catch (error) {
        console.error('Error inserting first admin:', error);
    } finally {
        console.log("Admin created successfull.");
        mongoose.connection.close();
    }
};

insertFirstAdmin();
