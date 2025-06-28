import express from "express";
import connect from "./database/db.js"; // no .env needed
import authRoute from "./routes/auth.js";
import userRoute from "./routes/users.js";
import hotelsRoute from "./routes/hotels.js";
import roomsRoute from "./routes/rooms.js";

const app = express();
app.use(express.json());

app.use("/auth", authRoute);
app.use("/users", userRoute);
app.use("/hotels", hotelsRoute);
app.use("/rooms", roomsRoute);

const startServer = async () => {
  await connect(); // Connect to DB before starting server
  app.listen(8800, () => {
    console.log("🚀 Server running on port 8800");
  });
};
startServer();
