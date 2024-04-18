const mongoose=require('mongoose')

//creating schema 

const loginSchema=new mongoose.Schema({
    name:String,
    email: { 
        type: 'String', 
        unique: true 
    },
    password:String
})


//create model for mongodb
const loginModel=mongoose.model("users",loginSchema)
module.exports=loginModel
