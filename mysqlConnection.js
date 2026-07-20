// const mongoose=require('mongoose')
// async function connection(url){
//      mongoose.connect(url)
//      .then((success)=>{
//         console.log("databese connected successfull",success);
//      })
//      .catch((err)=>{
//         console.log("some error due connection",err);
//      });
// }
// module.exports=connection;

const mysql2 =require('mysql2')


const db=mysql2.createConnection({
      host:"localhost",
      user:'root',
      port:3306,
      password:"AsHuToSh@123",
      database:"school"
   });

module.exports=db