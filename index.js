const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const routes = require('./routes/main_routes');
const port = process.env.PORT || 3001;

const server = express();

// Middleware
server.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
}).catch(err => {
    console.error('MongoDB connection error:', err);
});

server.use('/api', routes);

server.listen(port, (err) => {
    if (!err) {
        console.log(`Server running on : http://localhost:${port}`);
    } else {
        console.log("Error", err);
    }
});
