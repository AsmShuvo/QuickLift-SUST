import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const Main = () => {
  return (
    <div className="flex bg-[#121212] text-white min-h-screen">
      {/* Sidebar */}
      <Navbar />

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        <div className="flex-1 p-6 overflow-y-auto">
          <Outlet />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Main;