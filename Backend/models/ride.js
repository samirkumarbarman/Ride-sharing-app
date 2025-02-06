import mongoose from 'mongoose';

const rideSchema = new mongoose.Schema({
  passenger: {
     type: mongoose.Schema.Types.ObjectId, 
     ref: 'User', 
     required: true
     },

  driver: {
     type: mongoose.Schema.Types.ObjectId, 
     ref: 'User'
     },

  pickupLocation: {
    type: { type: String, enum: ['Point'], required: true},
    coordinates: { type: [Number], required: true },
  },

  dropoffLocation: {
    type: { type: String, enum: ['Point'], required: true },
    coordinates: { type: [Number], required: true },
  },

  status: {
     type: String, enum: ['requested', 'accepted', 'in_progress', 'completed', 'cancelled'], default: 'requested' 
    },

  price: {
     type: Number 
    },

}, { timestamps: true });

const Ride = mongoose.model('Ride', rideSchema);

export default Ride;