import mongoose from "mongoose";

const connect = async () => {
  try {
    await mongoose.connect(
     "mongodb://localhost:27017/hotel",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("✅ Connected to MongoDB");
  } catch (err) {
    console.error("❌ Failed to connect to MongoDB:", err.message);
    process.exit(1); // Stop the app if DB fails
  }

  // Optional: Log connection issues after startup
  mongoose.connection.on("error", (err) => {
    console.error("❌ MongoDB runtime error:", err.message);
  });
};

export default connect;
