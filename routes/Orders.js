// const { Customer, validate } = require("../models/customer");
// const auth = require("../middleware/auth");
const {Order ,validate}= require("../model/Order");
const {Service }= require("../model/Service");

const express = require("express");
const router = express.Router();

// router.get("/", auth, async (req, res) => {
//   const customers = await Customer.find()
//     .select("-__v")
//     .sort("name");
//   res.send(customers);
// });

router.get('/', async (req, res) => {

    try {
        const orders=await Order.find();
        res.send(orders);


    } catch (error) {
        console.log(error);
    }
    
})

router.get('/:email', async (req, res) => {
    const email=req.params.email;

    try {
        const orders=await Order.find({email:email});
        res.send(orders);


    } catch (error) {
        console.log(error);
    }
    
})
// app.use(fileUpload());

router.post("/",async (req, res)=>{

    
    console.log(req.body.service_id);
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
        let service;
        try {
            
         service = await Service.find({_id:req.body.service_id});
     console.log(service[0].name);
        } catch (error) {
            console.log(error);
        }

    let order=new Order({
        name: req.body.name,
        email: req.body.email,
        orderName: req.body.orderName,
        details: req.body.details,
        price: req.body.price,
        projectFile: image,
        service_image:service[0].image,
        service_details: service[0].details,
        status:"pending"
    });

    try {
        order= await order.save(); 
        // res.send(order);
    } catch (error) {
        console.log(error);
    }
   
})


// router.post("/", auth, async (req, res) => {
//   const { error } = validate(req.body);
//   if (error) return res.status(400).send(error.details[0].message);

//   let customer = new Customer({
//     name: req.body.name,
//     isGold: req.body.isGold,
//     phone: req.body.phone
//   });
//   customer = await customer.save();

//   res.send(customer);
// });

// router.put("/:id", auth, async (req, res) => {
//   const { error } = validate(req.body);
//   if (error) return res.status(400).send(error.details[0].message);

//   const customer = await Customer.findByIdAndUpdate(
//     req.params.id,
//     {
//       name: req.body.name,
//       isGold: req.body.isGold,
//       phone: req.body.phone
//     },
//     { new: true }
//   );

//   if (!customer)
//     return res
//       .status(404)
//       .send("The customer with the given ID was not found.");

//   res.send(customer);
// });

// router.delete("/:id", auth, async (req, res) => {
//   const customer = await Customer.findByIdAndRemove(req.params.id);

//   if (!customer)
//     return res
//       .status(404)
//       .send("The customer with the given ID was not found.");

//   res.send(customer);
// });

// router.get("/:id", auth, async (req, res) => {
//   const customer = await Customer.findById(req.params.id).select("-__v");

//   if (!customer)
//     return res
//       .status(404)
//       .send("The customer with the given ID was not found.");

//   res.send(customer);
// });

module.exports = router;


