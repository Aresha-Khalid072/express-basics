import express from 'express';

const app=express();

app.get ("/", (req,res)=>{
 res.send("AK started Backend");
})

app.get("/profile", (req,res)=>{
    res.send("AK G Welcome!");
})


app.listen(3000);