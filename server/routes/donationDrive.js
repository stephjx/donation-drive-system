import express from "express";
import DonationDrive from "../models/DonationDrive.js";

const router = express.Router();

// Create a new donation drive
router.post("/", async (req, res) => {
  try {
    const newDrive = new DonationDrive(req.body);
    const savedDrive = await newDrive.save();
    res.status(201).json(savedDrive);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to create donation drive" });
  }
});

// Get all donation drives
router.get("/", async (req, res) => {
  try {
    const drives = await DonationDrive.find().sort({ createdAt: -1 });
    res.status(200).json(drives);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to fetch donation drives" });
  }
});

export default router;
