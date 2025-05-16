import express, { urlencoded } from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";

// custom router
import userRouter from "./routes/router.js";

dotenv.config()

const port = process.env.PORT || 4000
const app = express();
app.use(cookieParser());
app.use(cors({
     origin: "process.env.BASE_URL"
}))

app.use(express.json())
app.express(urlencoded({extended: true}))

app.get("/", req, res => {
     res.status(200).json({
        success: true,
        message: "Hi I am express"
     })
})

app.use("api/v1/users", userRouter)

app.listen(port, () => {
    console.log("app is listening on port: ", port)
})