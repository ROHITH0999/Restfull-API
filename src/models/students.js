const mongoose = require('mongoose');
const validator = require('validator');

const studentSchema=new mongoose.Schema({
    name:{
        type: String,
        required:true,
        minlength:3
    },
    email:{
        type:String,
        required:true,
        unique:[true,"Email Id already present"],
        validate(val){
            if(!validator.isEmail(val)){
                throw new Error("Invalid Email")
            }
        }
    },
    phone:{
        type:Number,
        min:10,
        required:true,
        unique:true
    },
    address:{
        type:String,
        required:true
    }
})

//we will create new model or collection creation
const Student=mongoose.model("Student",studentSchema);
module.exports=Student;
