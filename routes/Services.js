const express = require('express');
const router=express.Router();
const {Service ,validate}= require("../model/Service");


router.get('/', async function(req,res){
    try {
        const services=await Service.find();
        console.log("Success");
        console.log(services);
        if(services.length>0)
        {
          return  res.send(services);

        }

    } catch (error) {
        console.log(error);
        return;
    }

    res.send("No services have been added yet");

})

router.get('/:id', async function(req,res){
    const id=req.params.id;
    try {
        const service=await Service.find({_id:id});
        console.log("Success");
        console.log(service);
        if(service.length>0)
        {
            console.log(service[0]);
          return  res.send(service[0]);

        }

    } catch (error) {
        console.log(error);
        return;
    }

    res.send("No services have been added yet");

})

router.post("/", async (req, res) =>{

    let file;
    console.log("end point hitted");
    console.log(req.files);
    try {
        file = req.files.file;
    } catch (error) {
        console.log(error);
    }

    const newImg = file.data;
    const encImg = newImg.toString('base64');

    const image = {
        contentType: file.mimetype,
        size: file.size,
        img: Buffer.from(encImg, 'base64')
    };
    // console.log(name,email);
console.log("data");
console.log(req.body.name);
console.log(req.files);
// const {error} =validate(req.body);
    // if(error) return res.status(400).send(error.details[0].message);
    let service=new Service({
        name: req.body.name,
        details: req.body.description,
        image:image
    });

    try {
        service= await service.save(); 
        res.send(service);
    } catch (error) {
        console.log(error);
    }
})

module.exports=router;
