import axios from "axios";
import { useNavigate } from "react-router-dom";

const SetupProfile = () => {
  const navigate = useNavigate();

  const chooseRole = async (role) => {
    try {
      await axios.post("http://localhost:5000/user/role", { role }, { withCredentials: true });
      navigate("/"); // after setting role go home
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Setup your profile</h1>
      <div className="space-x-4">
        <button
          onClick={() => chooseRole("biker")}
          className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          Continue as Biker
        </button>
        <button
          onClick={() => chooseRole("passenger")}
          className="px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-700"
        >
          Continue as Passenger
        </button>
      </div>
    </div>
  );
};

export default SetupProfile;