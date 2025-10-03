import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const Main = () => {
  return (
    <>
      <Navbar/>
      <div className="min-h-screen">
        <Outlet />
      </div>
      <Footer/>
    </>
  );
};

export default Main;