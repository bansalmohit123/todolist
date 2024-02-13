const mongoose = require('mongoose');

const connection = mongoose.createConnection('mongodb://127.0.0.1:27017/newdo').on('open',()=>{
    console.log("mongodb connnected");
}).on('error',()=>{
    console.log("mongodb not connnected");
})

module.exports = connection;