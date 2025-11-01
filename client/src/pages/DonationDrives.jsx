import React, { useEffect, useState } from "react";
import { getDrives, createDrive } from "../api/api";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
const DonationDrives = () => {
  const [drives, setDrives] = useState([]);
  const [filteredDrives, setFilteredDrives] = useState([]);
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [typeFilter, setTypeFilter] = useState("All");
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

  // fetch drives from the backend
  useEffect(() => {
    const fetchDrives = async () => {
      try {
        const { data } = await getDrives();
        setDrives(data);
        setFilteredDrives(data);
      } catch (err) {
        console.error("Error fetching drives:", err);
      }
    };
    fetchDrives();
  }, []);

  // filtering logic
  useEffect(() => {
    let filtered = drives;
    if (categoryFilter !== "All") {
      filtered = filtered.filter((d) => d.category === categoryFilter);
    }
    if (typeFilter !== "All") {
      filtered = filtered.filter((d) => d.type === typeFilter);
    }
    setFilteredDrives(filtered);
  }, [categoryFilter, typeFilter, drives]);

  // handle form input
  const handleChange = (e) => {
    setNewDrive({ ...newDrive, [e.target.name]: e.target.value });
  };

  // handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await createDrive(newDrive);
      setDrives([...drives, data]);
      setNewDrive({
        name: "",
        description: "",
        category: "",
        type: "Both",
        image: "",
        deadline: "",
        organization: "",
      });
      alert("Donation drive submitted successfully!");
    } catch (err) {
      console.error("Error creating drive:", err);
    }
  };

  return (
    <>
      <Navbar />

      <div className="p-8 bg-gray-50 min-h-screen">
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-gray-700 text-center">
          Explore <span className="text-blue-700">Donation Drives</span>
        </h1>

        {/* Filters + Create Drive Button */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          {/* Filters Section */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 mb-8">
            {/* Filters container */}
            <div className="flex flex-wrap items-center gap-4 w-full">
              {/* Search Input */}
              <input
                type="text"
                placeholder="Search drives..."
                className="flex-1 min-w-[200px] border border-gray-300 bg-white text-gray-800 rounded-md px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                onChange={(e) => {
                  const searchTerm = e.target.value.toLowerCase();
                  setFilteredDrives(
                    drives.filter((d) =>
                      d.name.toLowerCase().includes(searchTerm)
                    )
                  );
                }}
              />

              {/* Category Filter */}
              <select
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
                className="flex-1 min-w-[180px] border border-gray-300 bg-white text-gray-800 rounded-md px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              >
                <option value="All">All Categories</option>
                <option value="Education">Education</option>
                <option value="Health">Health</option>
                <option value="Environment">Environment</option>
                <option value="Community">Community</option>
              </select>

              {/* Type Filter */}
              <select
                value={typeFilter}
                onChange={(e) => setTypeFilter(e.target.value)}
                className="flex-1 min-w-[180px] border border-gray-300 bg-white text-gray-800 rounded-md px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              >
                <option value="All">All Types</option>
                <option value="Cash">Cash</option>
                <option value="In-kind">In-kind</option>
                <option value="Both">Both</option>
              </select>
            </div>

            
          </div>

          {/* Right side: Create Drive Button */}
          <button
            onClick={() => navigate("/create-drive")}
            className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            + Create Drive
          </button>
        </div>

        {/* Donation Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {filteredDrives.map((drive) => (
            <div
              key={drive._id}
              className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition"
            >
              {drive.image && (
                <img
                  src={drive.image}
                  alt={drive.name}
                  className="rounded-lg w-full h-48 object-cover mb-4"
                />
              )}
              <h3 className="text-lg font-semibold">{drive.name}</h3>
              <p className="text-gray-600 mb-2">{drive.description}</p>
              <p className="text-sm text-gray-500">
                <strong>Category:</strong> {drive.category}
              </p>
              <p className="text-sm text-gray-500">
                <strong>Type:</strong> {drive.type}
              </p>
              <p className="text-sm text-gray-500">
                <strong>Deadline:</strong>{" "}
                {new Date(drive.deadline).toLocaleDateString()}
              </p>
              <div className="flex justify-between mt-4">
                <button
                  className="text-blue-600 font-medium hover:underline"
                  onClick={() => alert("Show full story or details")}
                >
                  View More
                </button>
                <button
                  className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700"
                  onClick={() => navigate("/register")}
                >
                  Donate
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default DonationDrives;
