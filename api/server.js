import express from 'express'
import morgan from 'morgan';
import cors from 'cors';
import router from './src/routers/userRouter.js';
import { connectDb } from './src/dbConfig/dbConfig.js';

const app = express()

const PORT = 8000;

app.use(express.json())
app.use(morgan("dev"))
app.use(cors())


// database config
connectDb()

app.use("/api/v1/user", (router))

app.use("*" , (req, res, next)=> {
    const error = {
        status:404,
        message:"page not found"
    }
    next(error)
})

app.use((error, req, res, next) => {
    const statusCode = errorCode || 500
    res.status(statusCode).json({
        status:"error",
        message:error.message
    })
})

app.listen(PORT, (error) => {
    error ? console.log(error) :console.log(`server running at http://localhost:${PORT}`)
})