// /Users/rajsingh/BOOKINGAPP/routes/hotels.js
import express from "express";
import Hotel from "../api/model/hotel.js";

const router = express.Router();

// POST: Create a hotel
router.post("/", async (req, res) => {
  console.log("📩 Incoming data to /api/hotels:", req.body); 
  const newHotel = new Hotel(req.body);
  try {
    const savedHotel = await newHotel.save();
    res.status(200).json(savedHotel);
  } catch (err) {
    console.log(err)
    //console.error("❌ Error saving hotel:", err); 
    res.status(500).json({
      message: "Internal Server Error",
      error: err.message,
    });
  }
});

export default router;
