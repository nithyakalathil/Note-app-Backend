const express=require("express")
const mongoose=require("mongoose")
const bcrypt=require("bcrypt")
const cors=require("cors")
const jwt=require("jsonwebtoken")



const app=express()


app.use(cors())
app.use(express.json())



  app.listen(8080,()=>{
        console.log("server started")
    })