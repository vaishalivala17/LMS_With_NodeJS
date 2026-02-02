const mongoose = require('mongoose');

const standardSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    }
}, { timestamps: true });

module.exports = mongoose.model('Standard', standardSchema);
