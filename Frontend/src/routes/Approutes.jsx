import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import RideBooking from "../pages/RideBooking";
import Profile from "../pages/Profile";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/book-ride" element={<RideBooking />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
}

export default AppRoutes;