import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const Home = () => {
  const { user, logout } = useContext(AuthContext);

  console.log("user: ", user);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">
        Welcome, {user?.displayName || "Guest"}
      </h1>
      <p className="text-gray-600">Your email: {user?.email || "N/A"}</p>
      <p className="text-gray-600">Your role: {user?.role || "Not set yet"}</p>
      {user?.photo && (
        <img 
          src={user.photo} 
          alt="profile" 
          className="w-16 h-16 rounded-full mt-4" 
        />
      )}
      <button 
        onClick={logout} 
        className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
      >
        Logout
      </button>
    </div>
  );
};

export default Home;