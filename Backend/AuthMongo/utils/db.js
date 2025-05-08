import mongoose from "mongoose";
import dotenv from "dotenv"

dotenv.config()

const db = () =>{
    mongoose.connect(process.env.MONGO_URL)
    .then( () =>{
        console.log("successfully connecting to database")
    })
    .catch( (error) =>{
        console.log("Error connecting to database")
    })
}


export default db;