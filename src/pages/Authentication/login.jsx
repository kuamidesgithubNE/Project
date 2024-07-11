// Login.js
import React, { useState, useContext } from "react";
import AuthContext from "./authContext";
import { useNavigate } from "react-router-dom";
import "./auth.css";
import pic1 from "../../assets/ProPic1.jpg";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const success = await login(username, password);
    if (success) {
      navigate("/");
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div class="loginContainer">
      <div className="loginImageContainer">
        <img src={pic1} alt="Pic1" />
      </div>
      <div className="loginFormContainer">
      <form onSubmit={handleSubmit}>
        <h2>Login</h2>
        <div className="inputContainer">
          <label className="label">Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="inputContainer">
          <label className="label">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {error && <p>{error}</p>}
        <button type="submit" className="button">
          Login
        </button>
        <button type="submit" className="button">
          Sign up with Google
        </button>
      </form>
      </div>
    </div>
  );
};

export default Login;
