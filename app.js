const express=require("express")
const mongoose=require("mongoose")
const bcrypt=require("bcrypt")
const cors=require("cors")
const jwt=require("jsonwebtoken")
const {usermodel}=require("./models/users")



const app=express()


app.use(cors())
app.use(express.json())

mongoose.connect("mongodb+srv://nithya:nithya913@cluster0.r7eo1il.mongodb.net/DemooDb?retryWrites=true&w=majority&appName=Cluster0")

const generateHashedPassword = async(password)=>{
 
    const salt=await bcrypt.genSalt(10) 

    return bcrypt.hash(password,salt)

}



app.use("/signup",async (req,res)=>{
    let input=req.body
    let hasedpassword=await generateHashedPassword(input.password)
    console.log(hasedpassword)
    input.password=hasedpassword
    console.log(input)

    let users = new usermodel(input)
    users.save()
        res.json({status:"Success"})
    })

  app.listen(8080,()=>{
        console.log("server started")
    })