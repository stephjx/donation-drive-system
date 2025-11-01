import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import DonationDrives from "./pages/DonationDrives";
import CreateDrive from "./pages/CreateDrive";
// other imports...

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />   
        <Route path="/donation-drives" element={<DonationDrives />} />
        <Route path="/create-drive" element={<CreateDrive />} />
      </Routes>
    </Router>
  );
}

export default App;
