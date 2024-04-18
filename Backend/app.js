const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const loginModel = require("./models/model");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://localhost:27017/registration");




app.post("/signup", async (req, res) => {
    try {
      const existingUser = await loginModel.findOne({ email: req.body.email });
  
      if (existingUser) {
        return res.status(400).json({ message: "Email already exists" });
      }
  
      const newUser = await loginModel.create(req.body);
      res.status(201).json(newUser);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: err.message });
    }
  });


app.post("/login",(req,res)=>{
    const { email, password } = req.body;
    loginModel.findOne({ email: email })
    .then(users=>{
        if(users){
            if(users.password === password){
                res.json({ success: true, message: "Login successful" });
            } else {
                res.json({ success: false, message: "The password is incorrect" });
            }
        } else {
            res.json({ success: false, message: "Account not registered" });
        }
    })
    .catch(error => res.status(500).json({ success: false, message: error.message }));
});



app.listen(9001, () => {
  console.log("Server is running on port 9001");
});
