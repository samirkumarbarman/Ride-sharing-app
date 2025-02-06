import express from 'express';
import { getUserProfile, updateUserProfile } from '../controllers/userController.js';
import authMiddleware from '../middleware/authMiddleware.js'; // Import authentication middleware

const router = express.Router();

router.get('/profile', authMiddleware, getUserProfile);    // Get user profile (protected route)
router.put('/profile', authMiddleware, updateUserProfile);  // Update user profile (protected route)

// Add other user routes as needed (e.g., get user by ID, list users - if required)

export default router;