import mongoose from "mongoose";

export 
const connectDB=async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Mongo db connectedd successfully");
    } catch(error){
        console.error("Error connecting to Mongo",error);
        process.exit(1);
    }
}