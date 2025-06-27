
import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js"

const app = express();

dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("✅ Connected to MongoDB.");
  } catch (error) {
    console.error("❌ MongoDB connection error:", error);
  }
};
mongoose.connection.on("disconnected",()=>{
    console.log("mongoDb disconnected!")
})
mongoose.connection.on("connected",()=>{
    console.log("mongoDb connected!")
})
app.get("/",(req,res)=>{
    res.send("hello fi")
})
//midd
app.listen(8800, () => {
  connect(); 
  console.log("✅ Backend server is running on port 8800");
});
