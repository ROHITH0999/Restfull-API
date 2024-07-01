const express = require('express');
require("./DB/conn");
// const Student=require('./models/students');
const  studentRouter=require('./routers/student')
const PORT=process.env.PORT || 3000;

const app=express();

//consider incoming req as json
app.use(express.json());
//routing
app.use(studentRouter);

app.listen(PORT, (error) => {
   
        console.log(`Connected Port: ${PORT}.....`);
    
});

