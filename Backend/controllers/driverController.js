import Driver from '../models/driver.js';

export const updateDriverLocation = async (req, res) => {
  try {
    const { location } = req.body;
    const driver = await Driver.findOneAndUpdate({ user: req.user.id }, { location }, { new: true });
    if (!driver) {
        return res.status(404).json({ message: 'Driver not found' });
      }
    res.json(driver);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

export const setAvailability = async (req, res) => {
    try {
        const {isAvailable} = req.body;
        const driver = await Driver.findOneAndUpdate({ user: req.user.id }, {isAvailable}, {new: true});
        if (!driver) {
            return res.status(404).json({ message: 'Driver not found' });
          }
        res.json(driver);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
}

// ... other driver controller functions