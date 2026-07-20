const express = require('express');
const db = require('./Connection/mongo_connection');
const route=require("./Router/route1");
const app=express()
const port =3000
db.connect((err)=>{
    if(err){
        console.log("some error here",err);
    }
    else{
        console.log("database connected Successfully");
    }
})
app.get('/',(req,res)=>{
    res.json({msg:"this is home page"})
})
app.use('/data',route);
app.listen(port,()=>{
    console.log(`srver is running on http://localhost:${port}`);
})