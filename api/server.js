import express from 'express'

const app = express()

const PORT = 8000;

app.use("/api/v1/user", (req, res, next)=> {
    res.json({
        status:"success",
        message:"success"
    })
})

app.listen(PORT, (error) => {
    error ? console.log(error) :console.log(`server running at http://localhost:${PORT}`)
})