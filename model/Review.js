const Joi = require('joi');
const mongoose = require('mongoose');


const Review=mongoose.model('Review',new mongoose.Schema({
    name:{ 
        type:String,
        required:true,
        // minlength:5,
        // maxlength:50
    },
    companyName:{
        type:String
    },
    
    details:{
        type:String,
    },
    
    image:{
        
    }

}));

function validateReviews(reviews) {
  const schema =Joi.object({
    name: Joi.string().required(),
    details:Joi.string().required(),
    image: Joi.required(),
    
    
  })
  
  

//   return Joi.validate(order, schema);
  return schema.validate(reviews);
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

exports.Review = Review; 
exports.validate = validateReviews;