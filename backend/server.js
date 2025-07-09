import express from "express";
// const express=require("express");
import dotenv from "dotenv";
import cors from "cors";
import {connectDB } from "./src/config/db.js";
import notesRoutes from "./src/routes/notesRoutes.js";

import rateLimiter from "./src/middleware/rateLimiter.js";



dotenv.config();
// console.log(process.env.MONGO_URI);
const app=express();
const PORT=process.env.PORT || 5001


//middleware
app.use(express.json());
app.use(cors(
    {
        origin:"http://localhost:5173"
    }
));
app.use(rateLimiter);


app.use("/api/notes",notesRoutes);


// app.get("/api/notes",(req,res)=>{
//     res.send("you got 5 notes");
// })

connectDB().then(()=>{
    app.listen(PORT,()=>{
    console.log("Server has started",PORT);
});
})



// mongodb+srv://demo1:demo1@cluster0.vyhyh39.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0