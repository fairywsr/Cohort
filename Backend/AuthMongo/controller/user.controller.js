import User from "../model/User.model.js"
import crypto from "crypto"
import nodemailer from "nodemailer"
import jwt from "jsonwebtoken"
import bcrypt from "bcryptjs"


const registerUser = async(req, res) =>{

     // get data 
     // validate
     // check if user already exist 
     // create a user in database
     // create a varification token 
     // save toke in database 
     // send token as email to user
     // send success status to user

     const {name, email, password} = req.body

     if(!name || !email || !password){
          return res.status(400).json({
               message: "All fields are required"
          })
     }

     try {
         const existingUser = await User.findOne({email})
         if(existingUser){
          return res.status(400).json({
               message : "User already exist"
          })
         }

         const user = await User.create({
          name,
          email,
          password
     })
      
     console.log(user)

     if(!user){
          return res.status(400).json({
               message: "User not registered",
          });
     }

     const token = crypto.randomBytes(32).toString("hex");
     console.log(token)

      user.verificationToken = token
      await user.save()
      
     //   send email


var transporter = nodemailer.createTransport({
     host: process.env.MAILTRAP_HOST,
     port: process.env.MAILTRAP_PORT,
     auth: {
       user: process.env.MAILTRAP_USER,
       pass: process.env.MAILTRAP_PASSWORD,
     }
   });

   const mailOption = {
     from: process.env.MAILTRAP_SENDEReMAIL,
     to: user.email,
     subject: "Verify your email",
     text: `Please click on the following link ${process.env.BASE_URL}/api/v1/users/verify${token}`,
   }

    await transporter.sendMail(mailOption)

    res.status(200).json({
     message : "User registered successfully",
     success : true
    })

     } catch (error) {
          res.status(200).json({
               message : "User not registered",
               error,
               success : false
              })
     }
}

const verifyUser = async(req, res) => {
     // get token from URL
     // validate Token
     // find user based on token
     //  if not conditions 
     //  set isVerified field to true 
     // remove verificaton token from db
     // save
     // return response

     const {token} = req.params;
     console.log(token);

     if(!token){
         return res.status(400).json({
               message: "invalid token"
          })
     }

     const user = await User.findOne({verificationToken: token})


     if(!user){
          return res.status(400).json({
                message: "invalid token"
           })
      } 

      user.isVerified = true
      user.verificationToken = undefined
      await user.save()

      
}

const login = async(req, res) => {
     const {email, password} = req.body
     if(!email || !password){
          return res.status(400).json({
               message : "All fields are required"
          })
     }

     try {
          const user = await User.findOne({email})
          if(!user){
               return res.status(400).json({
                    message : "invalid email or password",
               }) 
          }

      const isMatch = await bcrypt.compare(password, user.password)

         console.log(isMatch);

         if(!isMatch){
          return res.status(400).json({
               message : "invalid email or password",
          }) 
         }
         
         if(!user.isVerified){
            return res.status(400).jaon({
               message: "Please Verify Your email"
            })
         }

       const jwtToken =  jwt.sign({id: user._id, role: user.role},

          process.env.JWT_SECRET, 
          {
               expiresIn: '24h'
          }
         )


     const cookieOptions = {
          httpOnly: true,
          secure: true,
          maxAge: 24*60*60*1000
     }
         res.cookie("test", jwtToken, cookieOptions)

         res.status(200).json({
          success: true,
          message: "login successful",
          jwtToken, 
          user:{
           id: user._id,
           name: user.name,
           role: user.role,
          },
         });

     } catch (error) {
          console.log(error)
          return res.status(400).json({
               message: "login failed"
          })
     }
}

const profile = async(req, res) =>{
   try {
  const user = await User.findById(req.user.id).select('-password')
  if(!user){
     return res.status(400).json({
          success: false,
          message: "User not find"
     })
  }

res.status(200).json({
     success: true,
     user,
})

   } catch (error) {
     
   }
}

const logOut = async(req, res) =>{
   try {
     res.cookie('test', '', {})
     res.status(200).json({
          success: true,
          message: "LogOut successfully",
     })
   } catch (error) {
     
   }
}

const forgetPassword = async(req, res) =>{
     // get email
     // find user based on email 
     // reset token + reset expiry => new Date.now + 10*60*1000
     // user.save()
     //  send email -- token => design url

   try {
     
   } catch (error) {
     
   }
}

const resetPassword = async(req, res) =>{
     // collect tokens froms pramas 
     // password from req.body

   try {
     
   } catch (error) {
     
   }
}

export {registerUser, verifyUser, login, profile, logOut, resetPassword, forgetPassword};