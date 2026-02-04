const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['admin', 'teacher', 'student'],
        default: 'admin'
    },
    // subjects: [{
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'Subject'
    // }],
    teaching: [
  {
    subject: [{ type: mongoose.Schema.Types.ObjectId, ref: "Subject" }],
    standard: [{ type: mongoose.Schema.Types.ObjectId, ref: "Standard" }]
  }
],
    standard: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Standard',
        required: function () {
            return this.role === "student";
        }
    }
}, { timestamps: true });

// Hash password before saving
userSchema.pre('save', async function(next) {
    if (this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 10);
    }
});

// Compare password
userSchema.methods.comparePassword = async function(candidatePassword) {
    return await bcrypt.compare(candidatePassword, this.password);
};

module.exports = mongoose.model('User', userSchema);
