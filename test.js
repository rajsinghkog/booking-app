import mongoose from "mongoose";

// Replace with your actual connection string
const MONGO_URI = "mongodb+srv://testman:Vp7RGUutjF6RvcEt@crudoperation.f2bdr.mongodb.net/bookingapp?retryWrites=true&w=majority";

// Define the hotel schema (same as in your main app)
const hotelSchema = new mongoose.Schema({
  name: { type: String, required: true },
  type: { type: String, required: true },
  city: { type: String, required: true },
  address: { type: String, required: true },
  distance: { type: String, required: true },
  photos: [String],
  title: { type: String, required: true },
  desc: { type: String, required: true },
  rating: { type: Number, min: 0, max: 5 },
  rooms: [String],
  cheapestPrice: { type: Number, required: true },
  featured: { type: Boolean, default: false },
});

// Create the model
const Hotel = mongoose.model("Hotel", hotelSchema);

// Sample hotel data to insert
const sampleHotel = {
  name: "Hoerwbhiuiiuohwebwkhbruherest",
  type: "hotel",
  city: "Manali",
  address: "Mall Road",
  distance: "1.5km",
  photos: ["everest1.jpg", "everest2.jpg"],
  title: "Mountain View Retreat",
  desc: "A cozy hotel in the heart of Manali with a scenic view.",
  rating: 4.7,
  rooms: ["H101", "H102", "H103"],
  cheapestPrice: 2200,
  featured: true,
};

const run = async () => {
  try {
    console.log("🔗 Connecting to MongoDB...");
    await mongoose.connect(MONGO_URI);
    console.log("✅ Connected to MongoDB");

    const result = await Hotel.create(sampleHotel);
    console.log("🏨 Hotel inserted successfully:", result);

    await mongoose.disconnect();
    console.log("🔌 Disconnected from MongoDB");
  } catch (error) {
    console.error("❌ Error during DB operation:", error.message);
  }
};

run();
