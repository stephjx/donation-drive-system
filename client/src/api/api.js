import axios from "axios";

const API_URL = "http://localhost:5000/api";

// Get all donation drives
export const getDrives = async () => {
  const response = await axios.get(`${API_URL}/drives`);
  return response.data;
};

// Create a new donation drive
export const createDrive = async (driveData) => {
  const response = await axios.post(`${API_URL}/drives`, driveData);
  return response.data;
};
