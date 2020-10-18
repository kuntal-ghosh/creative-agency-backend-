const Joi = require('joi');
const mongoose = require('mongoose');


const Order=mongoose.model('Order',new mongoose.Schema({
    name:{ 
        type:String,
        required:true,
        minlength:5,
        maxlength:50
    },
    email:{
        type:String,
        required:true,
        minlength: 5,
        maxlength: 50
    },
    orderName:{
        type:String,
        required:true,

    },
    details:{
        type:String,
    },
    price:{
        type:Number,
        required:true,
    },
    projectFile:{
        
    },
    status:{
      type:String
    },
    service_image:{

    },
    service_details:{
      
    }

}));

function validateOrder(order) {
  const schema =Joi.object({
    name: Joi.string().min(5).max(50).required(),
    email: Joi.string().min(5).max(50).required(),
    orderName: Joi.string().required(),
    details:Joi.string(),
    price:Joi.number().required(),
    
  })
  
  

//   return Joi.validate(order, schema);
  return schema.validate(order);
}

// const Customer = mongoose.model('Customer', new mongoose.Schema({
//   name: {
//     type: String,
//     required: true,
//     minlength: 5,
//     maxlength: 50
//   },
//   isGold: {
//     type: Boolean,
//     default: false
//   },
//   phone: {
//     type: String,
//     required: true,
//     minlength: 5,
//     maxlength: 50
//   }
// }));

// function validateCustomer(customer) {
//   const schema = {
//     name: Joi.string().min(5).max(50).required(),
//     phone: Joi.string().min(5).max(50).required(),
//     isGold: Joi.boolean()
//   };

//   return Joi.validate(customer, schema);
// }

exports.Order = Order; 
exports.validate = validateOrder;