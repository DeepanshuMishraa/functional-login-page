const bcrypt = require('bcrypt');
const express = require('express');
const router = express.Router();
const User = require("../models/User");
const jwt = require("jsonwebtoken");

//Register
router.post("/register",async(req,res)=>{
    try{
        const {email,username,password} = req.body;
        const salt = await bcrypt.genSaltSync(10);
        const hashedPassword = await bcrypt.hashSync(password, salt);
        const newuser = new User({email,username,password:hashedPassword});
        const savedUser = await newuser.save();
        res.status(200).json(savedUser);
    }catch(err){
        res.status(500).json(err);
    }
})

router.post("/login",async(req,res)=>{
    try{
        const user = await User.findOne({username:req.body.username});
        if(!user){
           return res.status(404).json("User Not Found")
        }
        const match = await bcrypt.compare(req.body.password,user.password);
        if(!match){
            return res.status(401).json("You are not authorised");
        }
        res.status(200).json("you are now logged in");

    }catch(err){
        res.status(500).json(err)
    }
})

module.exports = router;