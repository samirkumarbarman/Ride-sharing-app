import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  firstName: {
     type: String, 
     required: true 
    },

  lastName: {
     type: String,
     required: true 
    },

  email: {
     type: String,
     required: true, 
     unique: true
     },

  password: {
     type: String,
     required: true
     }, // In a real app, hash this!
     
  phone: {
     type: String
     },

  address: {
     type: String 
     },
     
    }, { timestamps: true });

const User = mongoose.model('User', userSchema);  // Store the model in a variable

export default User; // Export the model