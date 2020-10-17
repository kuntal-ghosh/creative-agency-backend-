const Joi = require('joi');
const mongoose = require('mongoose');


const Admin=mongoose.model('Admin',new mongoose.Schema({
    email:{ 
        type:String,
        required:true,
        // minlength:5,
        // maxlength:50
    },
    // companyName:{
    //     type:String
    // },
    
    // details:{
    //     type:String,
    // },
    
    // image:{
        
    // }

}));

function validateAdmin(admin) {
  const schema =Joi.object({
    email: Joi.string().required(),
    // details:Joi.string().required(),
    // image: Joi.required(),
    
    
  })
  
  

//   return Joi.validate(order, schema);
  return schema.validate(admin);
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

exports.Admin = Admin; 
exports.validate = validateAdmin;