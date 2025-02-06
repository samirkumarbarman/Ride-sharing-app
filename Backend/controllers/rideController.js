import Ride from '../models/ride.js';
import Driver from '../models/driver.js';
// ... other imports (e.g., for location services)

export const requestRide = async (req, res) => {
  try {
    const { pickupLocation, dropoffLocation } = req.body;
    const newRide = new Ride({
      passenger: req.user.id,
      pickupLocation,
      dropoffLocation,
    });

    await newRide.save();
    res.status(201).json(newRide);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

export const acceptRide = async (req, res) => {
  try {
    const ride = await Ride.findById(req.params.rideId);
    if (!ride) {
      return res.status(404).json({ message: 'Ride not found' });
    }
    if(ride.driver){
        return res.status(400).json({message: "Ride already accepted"})
    }
    ride.driver = req.user.id; // Assuming the logged-in user is the driver
    ride.status = 'accepted';
    await ride.save();
    await Driver.findByIdAndUpdate(req.user.id, {isAvailable: false});
    res.json(ride);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// ... other ride controller functions