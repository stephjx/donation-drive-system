import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import { FileText, Users, HandCoins } from "lucide-react";

const CreateCampaign = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [uploading, setUploading] = useState(false);

  const [formData, setFormData] = useState({
    title: "",
    category: "",
    deadline: "",
    shortDescription: "",
    fullStory: "",
    image: "",
    donationType: "",
    goalAmount: "",
    gcashName: "",
    gcashNumber: "",
    gcashQr: "",
    acceptedGoods: "",
    goodsPhoto: "",
    beneficiaryName: "",
    organization: "",
    role: "",
    email: "",
    location: "",
    confirm: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // ✅ Cloudinary Upload Function
  const handleFileUpload = async (e, fieldName) => {
    const file = e.target.files[0];
    if (!file) return;
    setUploading(true);

    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "donateflow_uploads"); // your Cloudinary unsigned preset

    try {
      const res = await fetch(
        "https://api.cloudinary.com/v1_1/dlbggnbeu/image/upload",
        {
          method: "POST",
          body: data,
        }
      );

      const fileData = await res.json();
      setFormData((prev) => ({ ...prev, [fieldName]: fileData.secure_url }));
    } catch (err) {
      console.error("Upload failed:", err);
      alert("Image upload failed!");
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
    alert("Campaign submitted successfully!");
  };

  const handleCancelClick = () => setShowModal(true);
  const confirmCancel = () => {
    setShowModal(false);
    navigate("/donation-drives");
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-white py-10 px-6">
        <div className="max-w-5xl mx-auto bg-white p-8 rounded-lg shadow-md border border-gray-200">
          <h1 className="text-2xl font-bold text-blue-700 mb-6 border-b pb-2">
            CREATE YOUR CAMPAIGN
          </h1>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Campaign Information */}
            <section className="p-6 rounded-lg border border-gray-200 shadow-sm">
              <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <FileText className="w-5 h-5 text-blue-600" />
                Campaign Information
              </h2>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="md:col-span-2 space-y-4">
                  <div>
                    <label className="block text-gray-700 font-medium">
                      Campaign Title:
                    </label>
                    <input
                      type="text"
                      name="title"
                      value={formData.title}
                      onChange={handleChange}
                      className="w-full border rounded-md px-3 py-2"
                      placeholder="Enter the title of your campaign here..."
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium">
                      Short Description:
                    </label>
                    <textarea
                      name="shortDescription"
                      rows="2"
                      value={formData.shortDescription}
                      onChange={handleChange}
                      className="w-full border rounded-md px-3 py-2"
                      placeholder="Provide a brief description of your campaign..."
                      required
                    ></textarea>
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium">
                      Full Story:
                    </label>
                    <textarea
                      name="fullStory"
                      rows="4"
                      value={formData.fullStory}
                      onChange={handleChange}
                      className="w-full border rounded-md px-3 py-2"
                      placeholder="Enter the complete story of your campaign here..."
                      required
                    ></textarea>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-gray-700 font-medium">
                      Category:
                    </label>
                    <select
                      name="category"
                      value={formData.category}
                      onChange={handleChange}
                      className="w-full border rounded-md px-3 py-2"
                    >
                      <option value="">Select Category</option>
                      <option>Education</option>
                      <option>Health</option>
                      <option>Environment</option>
                      <option>Community</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium">
                      Deadline:
                    </label>
                    <input
                      type="date"
                      name="deadline"
                      value={formData.deadline}
                      onChange={handleChange}
                      className="w-full border rounded-md px-3 py-2"
                      required
                    />
                  </div>

                  {/* Campaign Image Upload */}
                  <div>
                    <label className="block text-gray-700 font-medium">
                      Campaign Image:
                    </label>
                    <label className="border-dashed border-2 border-gray-300 rounded-md h-24 flex flex-col items-center justify-center text-gray-500 cursor-pointer hover:bg-gray-50">
                      {formData.image ? (
                        <img
                          src={formData.image}
                          alt="Preview"
                          className="h-20 object-contain"
                        />
                      ) : uploading ? (
                        "Uploading..."
                      ) : (
                        <>Click to Upload</>
                      )}
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => handleFileUpload(e, "image")}
                        className="hidden"
                        required
                      />
                    </label>
                  </div>
                </div>
              </div>
            </section>

            {/* Donation Type Details */}
            <section className="p-6 rounded-lg border border-gray-200 shadow-sm">
              <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <HandCoins className="w-5 h-5 text-blue-600" />
                Donation Type Details
              </h2>

              <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2">
                  Select Donation Type:
                </label>
                <select
                  name="donationType"
                  value={formData.donationType}
                  onChange={handleChange}
                  className="w-full border rounded-md px-3 py-2"
                >
                  <option value="">Select Type</option>
                  <option value="Cash">Cash</option>
                  <option value="Goods">In-Kind / Goods</option>
                  <option value="Both">Both</option>
                </select>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Cash Section */}
                {(formData.donationType === "Cash" ||
                  formData.donationType === "Both") && (
                  <div className="space-y-3">
                    <label className="block text-gray-700 font-medium">
                      Goal Amount
                    </label>
                    <input
                      type="number"
                      name="goalAmount"
                      value={formData.goalAmount}
                      onChange={handleChange}
                      className="w-full border rounded-md px-3 py-2"
                      placeholder="Enter your fundraising goal amount..."
                      required
                    />

                    <label className="block text-gray-700 font-medium">
                      GCash Name:
                    </label>
                    <input
                      type="text"
                      name="gcashName"
                      value={formData.gcashName}
                      onChange={handleChange}
                      className="w-full border rounded-md px-3 py-2"
                      placeholder="Enter your GCash name here..."
                      required
                    />

                    <label className="block text-gray-700 font-medium">
                      GCash Number:
                    </label>
                    <input
                      type="text"
                      name="gcashNumber"
                      value={formData.gcashNumber}
                      onChange={handleChange}
                      className="w-full border rounded-md px-3 py-2"
                      placeholder="Enter your GCash number here..."
                      required
                    />

                    {/* ✅ GCash QR Upload */}
                    <div>
                      <label className="block text-gray-700 font-medium">
                        Upload GCash QR:
                      </label>
                      <label className="border-dashed border-2 border-gray-300 rounded-md h-24 flex flex-col items-center justify-center text-gray-500 cursor-pointer hover:bg-gray-50">
                        {formData.gcashQr ? (
                          <img
                            src={formData.gcashQr}
                            alt="GCash QR"
                            className="h-20 object-contain"
                          />
                        ) : uploading ? (
                          "Uploading..."
                        ) : (
                          <>Click to Upload</>
                        )}
                        <input
                          type="file"
                          accept="image/*"
                          onChange={(e) => handleFileUpload(e, "gcashQr")}
                          className="hidden"
                          required
                        />
                      </label>
                    </div>
                  </div>
                )}

                {/* Goods Section */}
                {(formData.donationType === "Goods" ||
                  formData.donationType === "Both") && (
                  <div className="space-y-3">
                    <label className="block text-gray-700 font-medium">
                      Accepted Good Lists:
                    </label>
                    <textarea
                      name="acceptedGoods"
                      rows="6"
                      value={formData.acceptedGoods}
                      onChange={handleChange}
                      className="w-full border rounded-md px-3 py-2"
                      placeholder="List the goods you are accepting for donation here..."
                      required
                    ></textarea>

                    {/* ✅ Goods Photo Upload */}
                    <div>
                      <label className="block text-gray-700 font-medium">
                        Upload Goods Photo:
                      </label>
                      <label className="border-dashed border-2 border-gray-300 rounded-md h-24 flex flex-col items-center justify-center text-gray-500 cursor-pointer hover:bg-gray-50">
                        {formData.goodsPhoto ? (
                          <img
                            src={formData.goodsPhoto}
                            alt="Goods"
                            className="h-20 object-contain"
                          />
                        ) : uploading ? (
                          "Uploading..."
                        ) : (
                          <>Click to Upload</>
                        )}
                        <input
                          type="file"
                          accept="image/*"
                          onChange={(e) => handleFileUpload(e, "goodsPhoto")}
                          className="hidden"
                          required
                        />
                      </label>
                    </div>
                  </div>
                )}
              </div>
            </section>

            {/* Beneficiary Details */}
            <section className="p-6 rounded-lg border border-gray-200 shadow-sm">
              <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Users className="w-5 h-5 text-indigo-600" />
                Beneficiary Details
              </h2>

              <div className="grid md:grid-cols-3 gap-6">
                {/* Full Name */}
                <div>
                  <label className="block text-gray-700 font-medium mb-1">
                    Full Name:
                  </label>
                  <input
                    type="text"
                    name="beneficiaryName"
                    value={formData.beneficiaryName}
                    onChange={handleChange}
                    className="w-full border rounded-md px-3 py-2"
                    placeholder="Enter full name..."
                    required
                  />
                </div>

                {/* Organization */}
                <div>
                  <label className="block text-gray-700 font-medium mb-1">
                    Organization:
                  </label>
                  <input
                    type="text"
                    name="organization"
                    value={formData.organization}
                    onChange={handleChange}
                    placeholder="Enter your Organization (Optional)"
                    className="w-full border rounded-md px-3 py-2"
                  />
                </div>

                {/* Role */}
                <div>
                  <label className="block text-gray-700 font-medium mb-1">
                    Role:
                  </label>
                  <input
                    type="text"
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    placeholder="Enter your Role..."
                    className="w-full border rounded-md px-3 py-2"
                    required
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-gray-700 font-medium mb-1">
                    Email:
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your Email..."
                    className="w-full border rounded-md px-3 py-2"
                    required
                  />
                </div>

                {/* Location */}
                <div>
                  <label className="block text-gray-700 font-medium mb-1">
                    Location:
                  </label>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    placeholder="Enter your Location..."
                    className="w-full border rounded-md px-3 py-2"
                    required
                  />
                </div>

                {/* Contact Number */}
                <div>
                  <label className="block text-gray-700 font-medium mb-1">
                    Contact Number:
                  </label>
                  <input
                    type="text"
                    name="contactNumber"
                    value={formData.contactNumber}
                    onChange={handleChange}
                    placeholder="Enter your Contact Number..."
                    className="w-full border rounded-md px-3 py-2"
                    required
                  />
                </div>
              </div>
            </section>

            {/* Confirmation */}
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                name="confirm"
                checked={formData.confirm}
                onChange={handleChange}
              />
              <label className="text-gray-700">
                I confirm that all information provided is accurate.
              </label>
            </div>

            {/* Buttons */}
            <div className="flex justify-between mt-4">
              <button
                type="button"
                onClick={handleCancelClick}
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

      {/* Cancel Confirmation Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-80 text-center">
            <h2 className="text-lg font-semibold mb-4">
              Are you sure you want to cancel?
            </h2>
            <div className="flex justify-center gap-4">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300"
              >
                No
              </button>
              <button
                onClick={confirmCancel}
                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
              >
                Yes, Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
};

export default CreateCampaign;
