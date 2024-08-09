import express from "express"
import 'dotenv/config'

const app = express()

app.get("/",(req, res) => {
    res.send("Hello server")
})

app.listen(process.env.PORT, ()=>{
    console.log(` Server is listening on ${process.env.PORT}`);
})