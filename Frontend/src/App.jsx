import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import RideBooking from "./pages/RideBooking.jsx";
import Profile from "./pages/Profile.jsx";
import AppRoutes from "./routes/Approutes.jsx";

function App() {
  return (
    <div>
      <Navbar />
      <AppRoutes />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book-ride" element={<RideBooking />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
};

export default App;