import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js";
import userRoute from "./routes/users.js";
import hotelsRoute from "./routes/hotels.js";
import roomsRoute from "./routes/rooms.js";

dotenv.config();
const app = express();
app.use(express.json());

const connect = async () => {
  try {
    console.log("🔗 Connecting to MongoDB...");
    await mongoose.connect(process.env.MONGO);
    console.log("✅ Connected to MongoDB.");
  } catch (error) {
    console.error("❌ MongoDB connection error:", error);
    process.exit(1); 
  }
};

mongoose.connection.on("connected", () => {
  console.log("✅ mongoDb connected!");
});


app.get("/ping", async (req, res) => {
  try {
    const status = await mongoose.connection.db.admin().ping();
    res.send({ connected: true, result: status });
  } catch (err) {
    res.status(500).send({ connected: false });
  }
});


app.use("/auth", authRoute);
app.use("/users", userRoute);
app.use("/hotels", hotelsRoute);
app.use("/rooms", roomsRoute);

const startServer = async () => {
  await connect();
  app.listen(8800, () => {
    console.log("🚀 Server is running on port 8800");
  });
};

startServer();
