const express=require("express");
const app=express();
const http=require("http");
const path=require("path");
const port=process.env.port|| 3001;

app.use(express.static("views"));

app.get("*",(req,res)=>{
    res.status(404).send("404 Page Not Found"+req.url);
    
})
app.listen(port,()=>{
    console.log("Server Started "+port);
    console.log(`http://localhost:${port}/`);
})
