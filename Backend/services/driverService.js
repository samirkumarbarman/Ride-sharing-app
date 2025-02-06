import Driver from '../models/driver.js';

export const updateDriverLocation = async (driverId, location) => {
  try {
    const updatedDriver = await Driver.findOneAndUpdate({ user: driverId }, { location }, { new: true });
    return updatedDriver;
  } catch (error) {
    console.error("Error in updateDriverLocation service:", error);
    throw error;
  }
};

export const setAvailability = async (driverId, isAvailable) => {
    try {
        const driver = await Driver.findOneAndUpdate({ user: driverId }, {isAvailable}, {new: true});
        return driver;
    } catch (error) {
        console.error("Error in setAvailability service:", error);
        throw error;
    }
}

// ... other driver-related service functions