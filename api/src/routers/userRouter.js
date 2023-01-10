import express from 'express'

const router = express.Router()

app.post("/", (req, res, next)=> {
    res.json({
        status:"success",
        message:"success"
    })
})