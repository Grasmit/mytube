import mongoose from "mongoose";
import User from "../models/user.js"
import bcrypt from "bcrypt"

export const signup = async (req,res,next) => {

    try{

        console.log(req.body)

        const salt = bcrypt.genSaltSync(10)

        const hashedPassword = bcrypt.hashSync(req.body.password,salt)

        const newUser = new User({...req.body,password:hashedPassword})

        await newUser.save()

        res.status(200).send("User has been created!")
    }
    catch(err)
    {
        next(err)
    }
}