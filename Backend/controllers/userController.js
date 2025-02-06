import User from '../models/user.js';

export const getUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password'); // Exclude password
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

export const updateUserProfile = async (req, res) => {
    try {
      const updatedUser = await User.findByIdAndUpdate(req.user.id, req.body, {
        new: true, // Return the updated user
        runValidators: true, // Validate the update
      }).select('-password');
      res.json(updatedUser);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
  };


// ... other user controller functions