const mongoose = require('mongoose');
const User = require('./models/User');
require('dotenv').config();

const insertFirstAdmin = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        const adminExists = await User.findOne({ role: 'admin' });
        if (adminExists) {
            adminExists.password = 'admin9764';
            await adminExists.save();
            console.log('Admin password updated');
            return;
        }
        const admin = new User({
            name: process.env.ADMIN_NAME,
            email: process.env.ADMIN_EMAIL,
            password: 'admin9764'
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
