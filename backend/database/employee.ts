import mongoose from "mongoose";

const dB = ()=>{
     mongoose.connect("mongodb://127.0.0.1:27017/employeeTs")
     .then((con)=>{console.log('DB running')})
     .catch((err)=>console.log(err)); 
    }

export default dB;