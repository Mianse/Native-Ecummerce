import express from "express"
import colors from "colors"
import morgan from "morgan"
import cors from "cors"
import dotenv from "dotenv"

const app  = express();

//config

dotenv.config()

//route

app.get('/',(req,res)=>{
    res.status(200).send("<h1>starting node server</h1>")
})
//middlewares
app.use(morgan("dev"))
app.use(express.json())
app.use(cors())

//port
const PORT = 5000 || process.env.PORT

app.listen(PORT,()=>{
    console.log(`server is running on ${PORT}`.bgCyan.white)
})