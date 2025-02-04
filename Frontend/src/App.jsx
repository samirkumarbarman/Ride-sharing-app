import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import RideBooking from "./pages/RideBooking";
import Profile from "./pages/Profile";
import AppRoutes from "./routes/Approutes";

function App() {
  return (
    <Router>
      <Navbar />
      <AppRoutes />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book-ride" element={<RideBooking />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;