import mongoose from 'mongoose';

const driverSchema = new mongoose.Schema({
  user: {
     type: mongoose.Schema.Types.ObjectId, 
     ref: 'User', 
     required: true
     },

  vehicle: {
     type: String
     },

  licenseNumber: {
     type: String 
    },

  isAvailable: {
     type: Boolean, 
     default: false
    },

  location: {
    type: { type: String, enum: ['Point'] },
    coordinates: { type: [Number] },
  },

 }, { timestamps: true });

const Driver = mongoose.model('Driver', driverSchema);

export default Driver;