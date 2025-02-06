import express from 'express';

 // Import controller functions
import { registerUser, loginUser } from '../controllers/authController.js';

const router = express.Router();

router.post('/register', registerUser); // Route for user registration
router.post('/login', loginUser);   // Route for user login

export default router;