import express, { urlencoded } from "express";
import dotenv from "dotenv";
import cors from "cors";
import db from "./utils/db.js";
import cookieParser from "cookie-parser";


// import all routes
import userRoutes from "./routes/user.routes.js"

dotenv.config()

const app = express()


app.use(cors({
  origin: process.env.BASE_URL,
  credentials: true,
  methods: ['GET', 'POST', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['content-Type', 'Authorization'],
}))
 
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cookieParser())

const port = process.env.PORT || 3002;


app.get('/', (req, res) => {
  res.send('Hello i am faria!')
})

app.get('/faria', (req, res) =>{
  res.send("Hi this is /faria route")
})
app.get('/adil', (req, res) => {
  res.send("this is adil route")
})

// connect to db
db() 


// user routes
app.use("/api/v1/users/", userRoutes);


app.listen(port, () => {
  console.log(`Example app listening on port this is new  ${port}`)
})
