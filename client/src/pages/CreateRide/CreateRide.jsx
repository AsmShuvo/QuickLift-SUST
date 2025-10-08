import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateRide = () => {
  const [formData, setFormData] = useState({
    from: "",
    to: "",
    date: "",
    time: "",
    availableSeats: "",
    whatsappNumber: "",
    notes: "",
  });

  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  // predefined places
  const PLACES = [
    "SUST",
    "Modina Market",
    "SOMC",
    "Pathantula",
    "Subidhbazar",
    "Amborkhana",
    "Zindabajar",
    "Bondor Bazar",
    "Kodomtoli",
    "Mazar Gate",
    "Humayun Chottor",
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (formData.from === formData.to) {
      alert("Starting point and destination cannot be the same!");
      setLoading(false);
      return;
    }

    try {
      await axios.post("http://localhost:5000/api/rides", formData, {
        withCredentials: true,
      });
      navigate("/current-rides");
    } catch (error) {
      console.error(error);
      alert("Failed to create ride.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-[#0a0a0a] via-[#141414] to-[#1b1b1b] text-white px-6">
      <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-5xl backdrop-blur-2xl bg-white/10 border border-white/10 rounded-3xl shadow-xl overflow-hidden">
        {/* ---------- Left side: Form ---------- */}
        <div className="flex-1 w-full p-10 md:p-14">
          <h1 className="text-3xl font-semibold mb-8 text-white">
            Create Ride
          </h1>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="flex flex-col space-y-4">
              {/* From */}
              <select
                name="from"
                value={formData.from}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-white/10 text-gray-400 border border-white/10 focus:outline-none focus:border-orange-400 appearance-none"
              >
                <option value="">Select Starting Point</option>
                {PLACES.map((place) => (
                  <option key={place} value={place}>
                    {place}
                  </option>
                ))}
              </select>

              {/* To */}
              <select
                name="to"
                value={formData.to}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-white/10 text-gray-400 border border-white/10 focus:outline-none focus:border-orange-400 appearance-none"
              >
                <option value="">Select Destination</option>
                {PLACES.map((place) => (
                  <option key={place} value={place}>
                    {place}
                  </option>
                ))}
              </select>

              {/* Date & Time */}
              <div className="flex gap-4">
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="flex-1 px-4 py-3 rounded-lg bg-white/10 text-white border border-white/10 focus:outline-none focus:border-orange-400"
                />
                <input
                  type="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  className="flex-1 px-4 py-3 rounded-lg bg-white/10 text-white border border-white/10 focus:outline-none focus:border-orange-400"
                />
              </div>

              {/* Seats available */}
              <input
                type="number"
                name="availableSeats"
                placeholder="Seats available"
                value={formData.availableSeats}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-white/10 text-white placeholder-gray-400 border border-white/10 focus:outline-none focus:border-orange-400"
              />

              {/* whatsapp */}
              {/* WhatsApp number */}
              <input
                type="tel"
                name="whatsappNumber"
                placeholder="WhatsApp Number"
                value={formData.whatsappNumber}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-white/10 text-white placeholder-gray-400 border border-white/10 focus:outline-none focus:border-orange-400 transition"
              />

              {/* Notes */}
              <textarea
                name="notes"
                placeholder="Notes (optional)"
                value={formData.notes}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-white/10 text-white placeholder-gray-400 border border-white/10 focus:outline-none focus:border-orange-400"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 mt-2 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full text-white font-semibold hover:opacity-90 transition"
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
          </form>
        </div>

        {/* ---------- Right side: Branding ---------- */}
        <div className="w-full md:w-1/2 bg-transparent flex flex-col items-center justify-center py-12 md:py-0">
          <img
            src="/images/logo.png"
            alt="QuickLift Logo"
            className="w-32 h-32 drop-shadow-[0_0_30px_rgba(255,102,0,0.5)]"
          />
          <h2 className="text-3xl font-bold mt-4">QuickLift</h2>
        </div>
      </div>
    </div>
  );
};

export default CreateRide;
