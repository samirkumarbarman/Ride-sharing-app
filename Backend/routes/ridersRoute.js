import express from 'express';
import { requestRide, acceptRide, completeRide, getRideStatus } from '../controllers/rideController.js';
import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/request', authMiddleware, requestRide);      // Request a ride
router.put('/accept/:rideId', authMiddleware, acceptRide);  // Accept a ride (driver only)
router.put('/complete/:rideId', authMiddleware, completeRide); // Complete a ride
router.get('/:rideId/status', authMiddleware, getRideStatus); // Get ride status

// Add other ride routes as needed (e.g., cancel ride, get ride history)

export default router;