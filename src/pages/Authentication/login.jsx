// Login.js
import React, { useState, useContext } from "react";
import AuthContext from "./authContext";
import { useNavigate } from "react-router-dom";
import "./auth.css";
import pic1 from "../../assets/ProPic1.jpg";
import google from "../../assets/google.png";

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
        <div className="loginTitle">
          {/* <h2>Login</h2> */}
          <p>Hi! Welcome back</p>
        </div>
        <form onSubmit={handleSubmit}>
          {error && <p className="error">{error}</p>}
          <div className="inputContainer">
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
            />
          </div>
          <div className="inputContainer">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
          </div>

          <button
            type="submit"
            className="buttonLogin"
            style={{ marginTop: "20px" }}
          >
            Login
          </button>

          <div className="broker">
            <div className="line"></div> OR <div className="line"></div>
          </div>

          <button
            type="submit"
            className="buttonLogin"
            style={{
              background: "#fff",
              color: "#000",
              border: "1px solid #333",
            }}
          >
            <img src={google} /> Sign up with Google
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
