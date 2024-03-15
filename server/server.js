import express from "express"
import colors from "colors"
import morgan from "morgan"
import cors from "cors"
import dotenv from "dotenv"
import testRoute from './routes/testRoute.js';
import userRoute from './routes/userRoute.js'
import cookieParser from "cookie-parser"
import connectDb from "./config/db.js"

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

//route
app.use("/api/v1",testRoute)
app.use("/api/v1/user",userRoute)


app.get('/',(req,res)=>{
    res.status(200).send("<h1>starting node server</h1>")
})

//port
const PORT = 5000 || process.env.PORT

app.listen(PORT,()=>{
    console.log(`server is running on ${PORT} on  ${process.env.NOD_ENV}`.bgCyan.white)
})