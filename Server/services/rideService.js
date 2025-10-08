const Ride = require("../model/Ride");

exports.createRideService = async (rideData, userId) => {
  const { from, to, date, time, availableSeats, whatsappNumber, notes } = rideData;

  if (!from || !to || !date || !time || !availableSeats || !whatsappNumber) {
    const error = new Error("All required fields must be filled");
    error.statusCode = 400;
    throw error;
  }

  const ride = await Ride.create({
    createdBy: userId,
    from,
    to,
    date,
    time,
    availableSeats,
    whatsappNumber,
    notes,
  });

  return ride;
};