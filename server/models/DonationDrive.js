import mongoose from "mongoose";

const donationDriveSchema = new mongoose.Schema({
  title: { type: String, required: true },
  submittedBy: { type: String, required: true },
  deadline: { type: Date, required: true },
  category: { type: String, required: true },
  acceptanceType: { type: String, required: true },
  contactNumber: { type: String, required: true },
  address: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String },
  raised: { type: String, default: "$0" },
  progress: { type: Number, default: 0 },
  goal: { type: String, default: "$0" },
}, { timestamps: true });

export default mongoose.model("DonationDrive", donationDriveSchema);
