import express from 'express'
import cors from 'cors'
const app=express()
app.listen(8080,()=>{
    console.log("Server Started");
});
app.use(cors())
app.get("/",(req,res)=>{
    return res.send("Good Morning");
});
app.get("/greet",(req,res)=>(res.send("greetings")))
app.get("/name",(req,res)=>(res.send("Sravanthi")))
app.get("/weather",(req,res)=>(res.send("30 degrees")))