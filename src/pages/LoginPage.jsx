import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      navigate("/home");
    }
  }, []);

  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleGetCredentials = () => {
    setEmail("guest@example.com");
    setUsername("guest");
    setPassword("<PASSWORD>");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password && username) {
      const userDetails = { email, username };
      localStorage.setItem("user", JSON.stringify(userDetails));
      navigate("/home");
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card shadow p-4">
        <h2 className="text-center mb-4 login-heading">
          Unlock the humor vault! <br /> Log in and get ready to ROFL your way
          through.
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              value={email}
              onChange={handleEmailChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">
              Username
            </label>
            <input
              type="text"
              className="form-control"
              id="username"
              value={username}
              onChange={handleUsernameChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary mb-3 login-btn">
            Login
          </button>
          <button
            onClick={handleGetCredentials}
            type="button"
            className="btn btn-danger login-btn"
          >
            Get Guest Credentials
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
