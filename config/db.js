const mongoose=require('mongoose')
const conn=async()=>{
    try{
        const connect=await mongoose.connect(process.env.conn_url)
        console.log("Connection established to Database");
    }
    catch(e){
        console.log(e)
    }
}
module.exports=conn; 
