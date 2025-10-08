const { createRideService } = require("\../services/rideService");

exports.createRide = async (req, res) => {
  try {
    if (!req.user) {
      return res.status(401).json({ message: "Not authenticated" });
    }

    const ride = await createRideService(req.body, req.user._id);

    res.status(201).json(ride);
  } catch (error) {
    console.error("Create ride error:", error.message);
    res
      .status(error.statusCode || 500)
      .json({ message: error.message || "Server error" });
  }
};