import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv"
import userRoutes from "./routes/users.js"
import authRoutes from "./routes/auth.js"

const app = express()
dotenv.config()

const connect = () => {

    mongoose.connect(process.env.MONGO).then(()=>{
        console.log(`Mongo Atlas Connected...`)
    }).catch((error)=>{
        console.log(error)
    })
}

app.use(express.json())

app.use("/api/auth",authRoutes)

app.use("/api/users",userRoutes)

app.use((err,req,res,next)=>{

    const status = err.status || 500
    const message = err.message || "Something went wrong..."

    return res.status(status).json({

        success:false,
        status,
        message
    })

})

app.listen(process.env.PORT,()=>{
    connect()
    console.log(`Backend is served on ${process.env.PORT}`)
})