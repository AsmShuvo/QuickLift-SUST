import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

// Google Icon SVG component for the button
// const GoogleIcon = () => (
//   <svg className="w-6 h-6 mr-3" viewBox="0 0 48 48">
//     <path fill="#FFC107" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039L38.802 9.92C34.553 6.184 29.658 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"></path>
//     <path fill="#FF3D00" d="M6.306 14.691c-1.346 2.533-2.166 5.445-2.166 8.514s.82 5.981 2.166 8.514l-4.959 3.872C.645 32.033 0 28.138 0 24s.645-8.033 1.347-11.181l4.959 1.872z"></path>
//     <path fill="#4CAF50" d="M24 48c5.658 0 10.553-1.886 14.09-5.09l-4.959-3.872c-1.963 1.32-4.481 2.112-7.131 2.112-5.223 0-9.658-3.317-11.283-7.818l-4.96 3.872C9.717 43.964 16.335 48 24 48z"></path>
//     <path fill="#1976D2" d="M43.611 20.083L43.595 20H24v8h11.303c-.792 2.237-2.231 4.166-4.087 5.571l4.959 3.872C41.91 34.223 44 28.832 44 24c0-1.341-.138-2.65-.389-3.917z"></path>
//   </svg>
// );

const Login = () => {
  const { login } = useContext(AuthContext);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-lg">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900">
            Welcome to QuickLift
          </h1>
          <p className="mt-2 text-lg text-gray-600">
            Sign in to continue
          </p>
        </div>
        <div className="mt-8">
          <button
            onClick={login}
            className="flex items-center justify-center w-full px-4 py-3 text-lg font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
          >
            {/* <GoogleIcon /> */}
            Sign in with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;