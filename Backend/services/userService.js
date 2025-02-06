import User from '../models/user.js';

export const getUserById = async (userId) => {
  try {
    const user = await User.findById(userId).select('-password'); // Exclude password
    return user;
  } catch (error) {
    console.error("Error in getUserById service:", error); // Log the error for debugging
    throw error; // Re-throw the error to be handled by the controller
  }
};

// Add other user-related service functions as needed (e.g., updateUser, deleteUser)