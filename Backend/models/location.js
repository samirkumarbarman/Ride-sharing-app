import mongoose from 'mongoose';

const locationSchema = new mongoose.Schema({
  name: {
     type: String, 
     required: true 
    },

  address: {
     type: String 
    },
    
  coordinates: {
    type: { type: String, enum: ['Point'] },
    coordinates: { type: [Number] },
 },
});

const Location = mongoose.model('Location', locationSchema);

export default Location;