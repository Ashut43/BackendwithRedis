const express=require('express')
const route=express();
const getuser=require("../Controller/getuser");
const Redis =require("ioredis");

const redis= new Redis({
   host:"localhost",
   port:6379
})

redis.on('connect',()=>{
   console.log("redis connected");
})

route.get('/student',async(req,res)=>{
   try{
      const key="users"
      const Isexist=await redis.exists(key)
      if(Isexist){
         const users= JSON.parse(await redis.get('users'));
         console.log("get from cache");
         const ttl=await redis.ttl('users');
         console.log(ttl);
         return res.status(200).json({
            "TTL":ttl,
            "users":users})
      }
      else{
         const users=await getuser()
         await redis.set("users",JSON.stringify(users));
         await redis.expire("users",20)
         const ttl=await redis.ttl('users');
         console.log(ttl);
         return res.json({
            "TTL":ttl,
            "users":users});
      }
   }
   catch(err){
     console.log(err);
     return res.status(500).json({ msg: "Internal Server Error" });
   }
})

module.exports=route;