const express = require('express');
require('dotenv').config();
const routes =  require('./routes/main_routes');
const port = process.env.PORT || 3001;

const server = express();

// Middleware

server.use('/api', routes);

server.listen(port, (err)=>{
    if(!err){
        console.log(`Server running on : http://localhost:${port}`);
    }else{
        console.log("Error", err);
    }
})