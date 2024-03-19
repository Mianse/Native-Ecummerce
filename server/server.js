import express from "express"
import colors from "colors"
import morgan from "morgan"
import cors from "cors"
import dotenv from "dotenv"
import testRoute from './routes/testRoute.js';
import userRoute from './routes/userRoute.js'
import cookieParser from "cookie-parser"
import connectDb from "./config/db.js"
import cloudinary from "cloudinary"
import productRoute from './routes/productRoute.js'
import categoryRoute from './routes/categoryRoute.js'

const app  = express();

//config

dotenv.config()

//middlewares
app.use(morgan("dev"))
app.use(express.json())
app.use(cors())
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser())
//database connection
connectDb()
//cloudinary config()
cloudinary.v2.config({
    cloud_name: process.env.CLOUDINARY_NAME,
        api_key: process.env.CLOUDINARY_API_KEY,
        api_secret: process.env.CLOUDINARY_SECRET

})
//route
app.use("/api/v1",testRoute)
app.use("/api/v1/user",userRoute)
app.use("/api/v1/product",productRoute)
app.use("/api/v1/category",categoryRoute)

app.get('/',(req,res)=>{
    res.status(200).send("<h1>starting node server</h1>")
})

//port
const PORT = 5000 || process.env.PORT

app.listen(PORT,()=>{
    console.log(`server is running on ${PORT} on  ${process.env.NOD_ENV}`.bgCyan.white)
})