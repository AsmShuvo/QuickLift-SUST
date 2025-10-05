import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCarSide,
  faLink,
  faUserCircle,
  faPlusCircle,
  faClockRotateLeft,
  faRoad,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { user } = useContext(AuthContext);
  const role = user?.role; // "passenger" | "biker" | undefined

  return (
    <div className="h-screen w-64 bg-gradient-to-b from-[#141414] via-[#1a1a1a] to-[#0f0f0f] flex flex-col text-white border-r border-white/10 py-6 px-4">
      {/* ---------- TOP: Logo + App name ---------- */}
      <div className="flex items-center space-x-3 mb-8 px-3">
        <img
          src="/images/logo.png"
          alt="QuickLift Logo"
          className="w-10 h-10 rounded-2xl drop-shadow-[0_0_15px_rgba(255,102,0,0.6)]"
        />
        <div>
          <h1 className="text-lg font-bold tracking-wide">QuickLift</h1>
        </div>
      </div>

      {/* ---------- MAIN NAVIGATION ---------- */}
      <div className="flex flex-col space-y-3 flex-grow">
        {/* When user is a passenger */}
        {role === "passenger" && (
          <>
            <Link
              to="/browse-rides"
              className="group flex items-center space-x-3 px-4 py-3 rounded-xl hover:bg-white/10 transition-all"
            >
              <FontAwesomeIcon
                icon={faCarSide}
                className="text-lg text-gray-400 group-hover:text-orange-400 transition-colors"
              />
              <span className="text-sm font-medium text-gray-300 group-hover:text-orange-400 transition-colors">
                Browse Rides
              </span>
            </Link>

            <Link
              to="/connected-rides"
              className="group flex items-center space-x-3 px-4 py-3 rounded-xl hover:bg-white/10 transition-all"
            >
              <FontAwesomeIcon
                icon={faLink}
                className="text-lg text-gray-400 group-hover:text-orange-400 transition-colors"
              />
              <span className="text-sm font-medium text-gray-300 group-hover:text-orange-400 transition-colors">
                Connected Rides
              </span>
            </Link>
          </>
        )}

        {/* When user is a biker */}
        {role === "biker" && (
          <>
            <Link
              to="/create-ride"
              className="group flex items-center space-x-3 px-4 py-3 rounded-xl hover:bg-white/10 transition-all"
            >
              <FontAwesomeIcon
                icon={faPlusCircle}
                className="text-lg text-gray-400 group-hover:text-orange-400 transition-colors"
              />
              <span className="text-sm font-medium text-gray-300 group-hover:text-orange-400 transition-colors">
                Create Ride
              </span>
            </Link>

            <Link
              to="/current-rides"
              className="group flex items-center space-x-3 px-4 py-3 rounded-xl hover:bg-white/10 transition-all"
            >
              <FontAwesomeIcon
                icon={faRoad}
                className="text-lg text-gray-400 group-hover:text-orange-400 transition-colors"
              />
              <span className="text-sm font-medium text-gray-300 group-hover:text-orange-400 transition-colors">
                Current Rides
              </span>
            </Link>

            <Link
              to="/ride-history"
              className="group flex items-center space-x-3 px-4 py-3 rounded-xl hover:bg-white/10 transition-all"
            >
              <FontAwesomeIcon
                icon={faClockRotateLeft}
                className="text-lg text-gray-400 group-hover:text-orange-400 transition-colors"
              />
              <span className="text-sm font-medium text-gray-300 group-hover:text-orange-400 transition-colors">
                Ride History
              </span>
            </Link>
          </>
        )}
      </div>

      {/* ---------- BOTTOM: Profile Link ---------- */}
      <div className="mt-6 border-t border-white/10 pt-4">
        <Link
          to="/profile"
          title="Profile"
          className="group flex items-center space-x-3 w-full px-4 py-3 rounded-xl hover:bg-white/10 transition-all z-10"
        >
          <FontAwesomeIcon
            icon={faUserCircle}
            className="text-2xl text-gray-400 group-hover:text-orange-400 transition-colors"
          />
          <span className="text-sm font-medium text-gray-300 group-hover:text-orange-400 transition-colors">
            Profile
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;