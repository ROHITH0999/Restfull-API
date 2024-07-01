const express = require('express');
const Student= require("../models/students");
const router= new express.Router();


router.get('/rohith',(req,res)=>{
    res.send("Hello World")
})

router.post('/students',async(req,res)=>{
    
    try {
        const user=new Student(req.body);
        const creatUser=await user.save();

        res.status(201).send(creatUser);
        console.log(req.body);

    } catch (error) {
        res.status(400).send(error);
    }

})

//read data of registered students

router.get('/students', async(req, res) => {
    try{
        const data=await Student.find();
        res.send(data);
    }catch(error)
    {
        console.log(error);
    }
});


//get individual student info
router.get('/students/:id',async(req,res)=>{
    try{
        const _id=req.params.id;
        const data=await Student.findById(_id);

        if(!data)
            {
               return res.status(404).send();
            }
            else
            {
                res.send(data);
            }
        console.log(data);
    }
    catch(err)
    {
        res.send(err);
    }
})


// update the students by it id
router.patch('/students/:name',async(req,res)=>{

    try {

        const name=req.params.name;
        const data=await Student.findOneAndUpdate({name:name},req.body,{
            new:true
        });
        res.send(data);
    } catch (error) {
        res.status(400).send(error);
        console.error();
    }
})


// delete student record

router.delete('/students/:id',async(req,res)=>{
    try{
        const _id=req.params.id;
        const data=await Student.findByIdAndDelete(_id);
        res.send(data);
    }
    catch(err)
    {
        res.status(500).send(err);
    }
})


module.exports=router;

