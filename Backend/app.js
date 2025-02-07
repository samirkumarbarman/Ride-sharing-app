import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import authRoutes from './routes/auth.js';
import userRoutes from './routes/users.js';
import rideRoutes from './routes/rides.js';
import driverRoutes from './routes/drivers.js';
import paymentRoutes from './routes/payments.js'; 
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import cors from 'cors'; 

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDB(); 

// Middleware
app.use(cors()); // Enable CORS for all routes (or configure as needed)
app.use(express.json()); // Enable parsing JSON request bodies

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/rides', rideRoutes);
app.use('/api/drivers', driverRoutes);
app.use('/api/payments', paymentRoutes);

// Error Middleware
app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});