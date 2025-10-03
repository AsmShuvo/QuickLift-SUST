import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const SignUp = () => {
  const { login } = useContext(AuthContext);

  return (
    <div>
      <h1>Sign Up Page</h1>
      <button onClick={login}>Sign Up with Google</button>
    </div>
  );
};

export default SignUp;