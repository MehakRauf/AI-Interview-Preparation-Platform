import React from 'react'
import { useState } from 'react';
import toast from 'react-hot-toast';
import { BiHide, BiShow } from 'react-icons/bi';
import { useNavigate, Link } from 'react-router-dom';

import './Login.css';

const Login = () => {
  const navigate = useNavigate();

  const [data, setData] = useState({
    email: "",
    password: ""
  });

  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState();

  const handleShowPassword = () => {
    setShowPassword((prev) => !prev);
  }

  const handleData = (e) => {
    const { name, value } = e.target;
    setData((prev) => {
      return {
        ...prev,
        [name]: value
      }
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = data;
    if (!email || !password) {
      setError("Email or password is missing!");
    }
    if (password && email) {
      const fetchData = await fetch("", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });
      const Data = await fetchData.json();
      toast(Data.message);
      if (Data.alert) {
        navigate('/dashboard');
      }
    } else {
      setError("All fields are required!");
    }
  }

  return (
    <div className="login-container">
      <div className="login-card">
        <h3 className="login-title">Login</h3>

        <form className="login-form" onSubmit={handleSubmit}>

          <label className="login-label">Enter your email</label>
          <input
            className="email-input"
            type="text"
            name="email"
            id="email"
            value={data.email}
            onChange={handleData}
          />

          <label className="login-label">Enter your password</label>

          <div className="password-wrapper login-input">
            <input
              className="login-input"
              type={showPassword ? "text" : "password"}
              name="password"
              id="password"
              value={data.password}
              onChange={handleData}
            />

            <span className="toggle-password" onClick={handleShowPassword}>
              {showPassword ? <BiShow /> : <BiHide />}
            </span>
          </div>

          <div className="error-box">
            {error && <p className="error-text">{error}</p>}
          </div>

          <button className="login-button">Login</button>
        </form>
          <p className='auth-text'>Don't have an account? <Link to="/signup">Signup</Link></p>
      </div>
    </div>
  );

}

export default Login