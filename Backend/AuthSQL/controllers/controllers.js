import { PrismaClient } from "@prisma/client/scripts/default-deno-edge.js"
import bcrypt from "bcryptjs"
import crypto from "crypto"
import jwt from "jsonwebtoken"


const prisma = new PrismaClient()

export const register = async(req, res) => {
     const {name, email, password, phone} = req.body

     if(!name || !password || !email, !phone){
          console.log("Data is missing");
          return res.status(400).json({
               success: false,
               message: "All fields are required"
          })
     }


     try {
        const exitingUser = await  prisma.user.findUnique({
               where: {email}
          })

          if(exitingUser){
               return res.status(400).json({
                    success: false,
                    message: "User already exist",
               })
          }

        const hashedPassword = await bcrypt.hash(password, 10)
      const verificationToken =  crypto.randomBytes(32).toString("hex")

     const user = await prisma.user.create({
          data:{
               name,
               email,
               phone,
               password: hashedPassword, verificationToken
          }
      })
  
     //  send Email 

     } catch (error) {
              return res.status(400).json({
               success: false,
               error,
               message: "Registration Failed" 
          })
     }
}

export const loginUser = async(req, res) => {
     const {email, password} = req.body

     if(!email, !password){
          return res.status(400).json({
               message: "All fieds are required",
          })
     }

     try {
       const user =  await prisma.user.findUnique({
               where: {email}
          })

          if(!user){
                return res.status(400).json({
               message: "User not found",
          })
          }
         
        const isMatch =  bcrypt.compare(password, user.password)
        if(!isMatch){
           return res.status(400).json({
               message: "invalid email or password",
          })
        }
       
        const token = jwt.sign(
          
              {id: user.id, rolw: user.role},
               process.env.JWT_TOKEN,
               {expiresIN: '24h'}
          
        )
       
        const cookieOptions ={
          httpOnly: true
        }

        res.cookie('token', token, cookieOptions)


         return res.status(201).json({
          success: true,
               user:{
                    id: user.id,
                    name: user.name,
                    email: user.email,
                    phone: user.phone
               },
                message: "All fieds are required",
          })


     } catch (error) {
           return res.status(400).json({
               message: "Login Failed",
          })
     }
}