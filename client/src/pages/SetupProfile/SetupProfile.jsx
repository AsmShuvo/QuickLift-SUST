import axios from "axios";
import { useNavigate } from "react-router-dom";

const SetupProfile = () => {
  const navigate = useNavigate();

  const chooseRole = async (role) => {
    try {
      await axios.post(
        "http://localhost:5000/user/role",
        { role },
        { withCredentials: true }
      );
      navigate("/");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen w-screen bg-gradient-to-br from-[#0a0a0a] via-[#131313] to-[#1b1b1b] overflow-hidden text-white">
      {/* subtle background glow */}
      <div className="absolute bottom-0 right-20 w-[400px] h-[400px] bg-orange-500/20 blur-[180px] rounded-full"></div>

      {/* Header section */}
      <div className="z-10 flex flex-col items-center space-y-4 mb-12">
        <div className="flex items-center space-x-2">
          <img
            src="/images/logo.png"
            alt="QuickLift Logo"
            className="w-12 h-12 drop-shadow-[0_0_20px_rgba(255,102,0,0.6)]"
          />
          <h1 className="text-4xl font-bold tracking-wide">QuickLift</h1>
        </div>
        <h2 className="text-2xl font-semibold text-gray-200">
          Choose Your Role
        </h2>
      </div>

      {/* Role selection cards */}
      <div className="z-10 flex flex-col md:flex-row items-center justify-center gap-8 w-full px-6 md:px-0">
        {/* Biker card */}
        <button
          onClick={() => chooseRole("biker")}
          className="group flex flex-col items-center justify-center w-72 h-48 rounded-3xl backdrop-blur-2xl bg-white/10 border border-white/20 shadow-lg hover:shadow-[0_0_25px_rgba(255,102,0,0.3)] transition-all duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="white"
            className="w-14 h-14 mb-4 opacity-90 group-hover:opacity-100 transition"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 19.5l1.5-1.5m17.25 0l-1.5-1.5m-6 1.5l3.75-7.5H6.75L10.5 19.5zm0 0l-1.5-3M10.5 19.5h3"
            />
          </svg>
          <span className="text-lg font-semibold">I am a Biker</span>
        </button>

        {/* Passenger card */}
        <button
          onClick={() => chooseRole("passenger")}
          className="group flex flex-col items-center justify-center w-72 h-48 rounded-3xl backdrop-blur-2xl bg-white/10 border border-white/20 shadow-lg hover:shadow-[0_0_25px_rgba(255,102,0,0.3)] transition-all duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="white"
            className="w-14 h-14 mb-4 opacity-90 group-hover:opacity-100 transition"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 9A3.75 3.75 0 119 9a3.75 3.75 0 016.75 0zM4.5 20.25a8.25 8.25 0 0115 0v.375A.375.375 0 0119.125 21H4.875a.375.375 0 01-.375-.375V20.25z"
            />
          </svg>
          <span className="text-lg font-semibold">I am a Passenger</span>
        </button>
      </div>
    </div>
  );
};

export default SetupProfile;