import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import AuthLayout from "../Layout/AuthLayout";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Main from "../Layout/Main";
import ProtectedRoute from "../routes/ProtectedRoute";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        index: true, // shorthand for "/" Home
        element: (
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        ),
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "login", 
        element: <Login />,
      },
      {
        path: "signup",
        element: <SignUp />,
      },
    ],
  },
]);
