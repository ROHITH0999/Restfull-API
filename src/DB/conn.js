const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/studentsAPI").then(()=>{
    console.log("Database Connected")
}).catch((error)=>{
    console.log("No Connection");
})



