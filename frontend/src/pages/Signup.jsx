import React from 'react'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { BiHide, BiShow } from 'react-icons/bi';

import './Signup.css';

const Signup = () => {
  const navigate = useNavigate();

  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(prev => !prev);
  }

  const handleShowConfirmPassword = () => {
    setShowConfirmPassword(prev => !prev);
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => {
      return {
        ...prev,
        [name]: value
      }
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { firstName, lastName, email, password, confirmPassword } = data;
    if (firstName && lastName && email && password && confirmPassword) {
      if (password != confirmPassword) {
        setError("Passwords are not same!");
      } else {
        const fetchData = await fetch("", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(data)
        })
        const data = await fetchData.json();
        toast(data.message);
        if (data.alert) {
          navigate("/login");
        }
      }
    } else {
      setError("All fields are required!");
    }
  }

  return (
    <div className='signup-container'>
      <div className='signup-card'>
        <h3 className='signup-title'>SignUp</h3>
        <form action="" onSubmit={handleSubmit} className='signup-form'>
          <label htmlFor="firstName" className="signup-label">Enter your first name </label>
          <input
            className="email-input"
            type="text"
            value={data.firstName}
            id='firstName'
            name='firstName'
            onChange={handleChange} />

          <label htmlFor="lastName" className="signup-label">Enter your last name </label>
          <input
            className="email-input"
            type="text"
            value={data.lastName}
            id='lastName'
            name='lastName'
            onChange={handleChange} />

          <label htmlFor="email" className="signup-label">Enter your email </label>
          <input
            className="email-input"
            type="text"
            value={data.email}
            id='email'
            name='email'
            onChange={handleChange} />

          <label htmlFor="password" className="signup-label">Enter your password </label>

          <div className="password-wrapper signup-input">
            <input
              className='signup-input'
              type={showPassword ? "text" : "password"}
              value={data.password}
              id='password'
              name='password'
              onChange={handleChange} />
            <span className="toggle-password" onClick={handleShowPassword}>{showPassword ? <BiShow /> : <BiHide />}</span>
          </div>

          <label htmlFor="confirmPassword" className="signup-label">Enter your password again </label>
          <div className="password-wrapper signup-input">
            <input
              className='signup-input'
              type={showPassword ? "text" : "password"}
              value={data.confirmPassword}
              id='confirmPassword'
              name='confirmPassword'
              onChange={handleChange} />
            <span className="toggle-password" onClick={handleShowConfirmPassword}>{showConfirmPassword ? <BiShow /> : <BiHide />}</span>
          </div>

          <div className="error-box">
            {error ? (<p className='error-text'>{error}</p>) : ""}
          </div>
          <button className="signup-button">Sign Up</button>
        </form>
        <p className="auth-text">
          Do you already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div >
  )
}

export default Signup