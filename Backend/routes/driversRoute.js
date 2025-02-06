import express from 'express';
import { updateDriverLocation, setAvailability } from '../controllers/driverController.js';
import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();

router.put('/location', authMiddleware, updateDriverLocation); // Update driver's location
router.put('/availability', authMiddleware, setAvailability); // Set driver availability

// Add other driver routes as needed (e.g., get nearby drivers)

export default router;