import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const GoogleIcon = () => (
  <svg className="w-5 h-5 mr-2" viewBox="0 0 48 48">
    <path
      fill="#FFC107"
      d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039L38.802 9.92C34.553 6.184 29.658 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"
    />
    <path
      fill="#FF3D00"
      d="M6.306 14.691c-1.346 2.533-2.166 5.445-2.166 8.514s.82 5.981 2.166 8.514l-4.959 3.872C.645 32.033 0 28.138 0 24s.645-8.033 1.347-11.181l4.959 1.872z"
    />
    <path
      fill="#4CAF50"
      d="M24 48c5.658 0 10.553-1.886 14.09-5.09l-4.959-3.872c-1.963 1.32-4.481 2.112-7.131 2.112-5.223 0-9.658-3.317-11.283-7.818l-4.96 3.872C9.717 43.964 16.335 48 24 48z"
    />
    <path
      fill="#1976D2"
      d="M43.611 20.083L43.595 20H24v8h11.303c-.792 2.237-2.231 4.166-4.087 5.571l4.959 3.872C41.91 34.223 44 28.832 44 24c0-1.341-.138-2.65-.389-3.917z"
    />
  </svg>
);

const Login = () => {
  const { login } = useContext(AuthContext);

  return (
    <div className="relative w-screen h-screen flex items-center justify-center bg-gradient-to-br from-[#0c0c0c] via-[#111] to-[#1b1b1b] overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-orange-500/25 blur-[180px] rounded-full"></div>

      {/* Layout container */}
      <div className="z-10 w-full h-full flex flex-col md:flex-row items-center justify-center md:justify-evenly px-6 md:px-16">
        {/* Left side: Logo */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <img
            src="/images/logo.PNG"
            alt="QuickLift Logo"
            className="w-32 h-32 rounded-4xl md:w-40 md:h-40 drop-shadow-[0_0_25px_rgba(255,102,0,0.45)] mb-4"
          />
          <h1 className="text-4xl font-semibold text-white tracking-wide">
            QuickLift
          </h1>
        </div>

        {/* Right side: Glass Card */}
        <div className="backdrop-blur-2xl bg-white/10 border border-white/20 rounded-[25px] p-10 w-full max-w-sm md:max-w-md shadow-[0_0_30px_rgba(255,255,255,0.05)]">
          <h2 className="text-3xl font-bold text-white text-center mb-8">
            Welcome
          </h2>
          <p className="text-gray-300 text-center mb-6 text-sm">
            Sign in to continue to your ride
          </p>

          <button
            onClick={login}
            className="flex items-center justify-center w-full py-3 text-sm md:text-base font-medium text-gray-900 bg-white rounded-full shadow-lg hover:bg-gray-100 transition duration-200"
          >
            <GoogleIcon />
            Sign in with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;