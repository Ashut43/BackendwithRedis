const db =require("../Connection/mongo_connection");
async function getuser(){
    return new Promise((resolve,reject)=>{
         setTimeout(() => {
            query="select * from student";
            db.query(query,(err,result)=>{
                if(err){
                    console.log("Error:-",err);
                    reject(err);                
                }
                else{
                    resolve(result);
                }

            })
         }, 3000);
    
    })

}
        
module.exports=getuser;