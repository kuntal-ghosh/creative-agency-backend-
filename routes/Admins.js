const express = require('express');
const router=express.Router();
const {Admin ,validate}= require("../model/Admin");


router.get('/:email', async function(req,res){
    const email=req.params.email;
    console.log(email);
    try {
        const admins=await Admin.find({email:email});
        console.log("Success");
        // console.log(admins);
        if(admins.length>0)
        {
            console.log(admins.length>0);
          return  res.send(admins.length>0);

        }

    } catch (error) {
        console.log(error);
        return;
    }

    // res.send("No services have been added yet");

})

router.post("/", async (req, res) =>{

    console.log(req.body);
//     let file;
//     console.log("end point hitted");
//     console.log(req.files);
//     try {
//         file = req.files.file;
//     } catch (error) {
//         console.log(error);
//     }

//     const newImg = file.data;
//     const encImg = newImg.toString('base64');

//     const image = {
//         contentType: file.mimetype,
//         size: file.size,
//         img: Buffer.from(encImg, 'base64')
//     };
//     // console.log(name,email);
// console.log("data");
// console.log(req.body.name);
// console.log(req.files);
// const {error} =validate(req.body);
    // if(error) return res.status(400).send(error.details[0].message);
    let admin=new Admin({
        email: req.body.email,
       
    });

    try {
        admin= await admin.save(); 
        res.send(admin);
    } catch (error) {
        console.log(error);
    }
})

module.exports=router;
