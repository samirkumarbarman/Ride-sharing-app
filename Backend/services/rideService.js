import Ride from '../models/ride.js';
import Driver from '../models/driver.js';
// ... other imports (e.g., for location services)

export const createRide = async (passengerId, pickupLocation, dropoffLocation) => {
  try {
    const newRide = new Ride({
      passenger: passengerId,
      pickupLocation,
      dropoffLocation,
    });
    const savedRide = await newRide.save();
    return savedRide;
  } catch (error) {
    console.error("Error in createRide service:", error);
    throw error;
  }
};

export const findNearestDrivers = async (pickupLocation) => {
  try {
    // Use MongoDB's geospatial queries to find nearby drivers
    const nearestDrivers = await Driver.find({
      location: {
        $near: {
          $geometry: pickupLocation, // GeoJSON Point
          $maxDistance: 5000, // Example: 5km radius (adjust as needed)
        },
      },
      isAvailable: true, // Only find available drivers
    }).populate('user', 'firstName lastName'); // Populate user details

    return nearestDrivers;
  } catch (error) {
    console.error("Error in findNearestDrivers service:", error);
    throw error;
  }
};

export const acceptRide = async (rideId, driverId) => {
    try {
      const ride = await Ride.findById(rideId);
      if (!ride) {
        throw new Error("Ride not found");
      }
      if(ride.driver){
          throw new Error("Ride already accepted");
      }
      ride.driver = driverId; // Assuming the logged-in user is the driver
      ride.status = 'accepted';
      await ride.save();
      await Driver.findByIdAndUpdate(driverId, {isAvailable: false});
      return ride;
    } catch (error) {
      console.error("Error in acceptRide service:", error);
      throw error;
    }
  };


// ... other ride-related service functions (e.g., updateRideStatus, getRideHistory)