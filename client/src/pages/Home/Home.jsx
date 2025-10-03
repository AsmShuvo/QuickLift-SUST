import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const Home = () => {
  const { user, logout } = useContext(AuthContext);
  console.log("user: ", user);

  return (
    <div>
      <h1 className="text-2xl font-bold">Welcome, {user?.displayName}</h1>
      <h1 className="text-2xl font-bold">Email, {user?.emails[0]?.value}</h1>
      <div>
        <img src={user?.photos[0]?.value} alt="User Avatar" className="w-16 h-16 rounded-full mt-4" />
      </div>
      <p className="text-gray-600">You are on the Home Page.</p>
      <button onClick={logout} className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
        Logout
      </button>
    </div>
  );
};

export default Home;