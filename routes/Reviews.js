const express = require('express');
const router=express.Router();
const {Review ,validate}= require("../model/Review");


router.get('/', async function(req,res){
    try {
        const reviews=await Review.find();
        console.log("Success");
        console.log(reviews);
        if(reviews.length>0)
        {
          return  res.send(reviews);

        }

    } catch (error) {
        console.log(error);
        return;
    }

    res.send("No services have been added yet");

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
    let service=new Review({
        name: req.body.name,
        details: req.body.description,
        companyName: req.body.companyName,
    });

    try {
        service= await service.save(); 
        res.send(service);
    } catch (error) {
        console.log(error);
    }
})

module.exports=router;
