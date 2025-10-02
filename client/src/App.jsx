import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

const App = () => {
  const { user, login, logout } = useContext(AuthContext);

  return (
    <div>
      {user ? (
        <>
          <h2>Welcome, {user.displayName}</h2>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <button onClick={login}>Login with Google</button>
      )}
    </div>
  );
};

export default App;