import React, { useState } from "react";
import { createDrive } from "../api/api";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const CreateDrive = () => {
  const [newDrive, setNewDrive] = useState({
    name: "",
    description: "",
    category: "",
    type: "Both",
    image: "",
    deadline: "",
    organization: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setNewDrive({ ...newDrive, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createDrive(newDrive);
      alert("Donation drive created successfully!");
      navigate("/donation-drives"); // go back to the main list
    } catch (err) {
      console.error("Error creating drive:", err);
      alert("Something went wrong while creating the drive.");
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 flex justify-center items-start py-12">
        <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-2xl">
          <h1 className="text-2xl font-bold mb-6 text-gray-700">
            Create a New <span className="text-blue-600">Donation Drive</span>
          </h1>

          <form onSubmit={handleSubmit} className="grid gap-4">
            <input
              type="text"
              name="name"
              placeholder="Name of the Drive"
              value={newDrive.name}
              onChange={handleChange}
              required
              className="border rounded-lg px-4 py-2"
            />
            <textarea
              name="description"
              placeholder="Short Description"
              value={newDrive.description}
              onChange={handleChange}
              required
              className="border rounded-lg px-4 py-2"
            />
            <input
              type="text"
              name="category"
              placeholder="Category (e.g., Education)"
              value={newDrive.category}
              onChange={handleChange}
              required
              className="border rounded-lg px-4 py-2"
            />
            <select
              name="type"
              value={newDrive.type}
              onChange={handleChange}
              className="border rounded-lg px-4 py-2"
            >
              <option>Both</option>
              <option>Cash</option>
              <option>In-kind</option>
            </select>
            <input
              type="text"
              name="image"
              placeholder="Image URL"
              value={newDrive.image}
              onChange={handleChange}
              className="border rounded-lg px-4 py-2"
            />
            <input
              type="date"
              name="deadline"
              value={newDrive.deadline}
              onChange={handleChange}
              required
              className="border rounded-lg px-4 py-2"
            />
            <input
              type="text"
              name="organization"
              placeholder="Organization (optional)"
              value={newDrive.organization}
              onChange={handleChange}
              className="border rounded-lg px-4 py-2"
            />

            <div className="flex justify-between mt-4">
              <button
                type="button"
                onClick={() => navigate("/donation-drives")}
                className="border border-gray-400 text-gray-700 px-5 py-2 rounded-lg hover:bg-gray-100"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700"
              >
                Create Drive
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CreateDrive;
