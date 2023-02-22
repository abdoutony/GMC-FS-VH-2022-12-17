const User = require("../models/user")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
exports.register = async (req,res)=>{
    try{
        // get user info from req.body
        const {firstname,lastname,email,password} = req.body
        // validations
        if(!(email&& password && firstname && lastname)){
          return   res.status(400).send("All fields are required")
        }
        //verify if it is an old user
        const oldUser = await User.findOne({email})
        if(oldUser){
            return res.status(409).send("User already exist pls login ")
        }

        // Encrypt user password
        const encryptedPassword = await bcrypt.hash(password,10)
        // generate token
        const token = jwt.sign({email},process.env.TOKEN_KEY,{expiresIn:"2h"})
        // save our user
        const savedUser = await User.create({
            email,
            password:encryptedPassword,
            firstname,
            lastname,
            token
        })

        // send response
        res.status(201).json({
            msg:"Created with success",
            user:{
                email:savedUser.email,
                firstname:savedUser.firstname,
                lastname:savedUser.lastname,
                role:savedUser.role,
                createdAt:savedUser.createdAt,
                updatedAt:savedUser.updatedAt,
                token:savedUser.token
            }
        })


    }catch(err){
        res.status(500).send(err.message)
    }
}

exports.login = async (req,res)=>{
    try{
        const {email,password} = req.body
        // validation
        if(!(email && password)){
            return res.status(400).send("All fields are required")
        }
        // VALIDATE if user exits in database
        const user = await User.findOne({email})
        if(user && await bcrypt.compare(password,user.password)){
             // generate token
             const token = jwt.sign({email:user.email},process.env.TOKEN_KEY,{expiresIn:"2h"})
             user.token = token
             res.status(200).json({
                msg:"Logged in ",
                token:user.token
             })
        }else{
            return res.status(401).send('Incorrect email or password')
        }
    }catch(err){
        res.status(500).send(err.message)
    }
}