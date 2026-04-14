import React from 'react'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { BiHide, BiShow } from 'react-icons/bi';

const Signup = () => {
  const navigate = useNavigate();

  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

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
        alert("Passwords are not same!");
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
      alert("All fields are required!");
    }
  }

  return (
    <div>
      <div>
        <h3>SignUp</h3>
        <form action="" onSubmit={handleSubmit}>
          <label htmlFor="firstName">Enter your first name: </label>
          <input
            type="text"
            value={data.firstName}
            id='firstName'
            name='firstName'
            onChange={handleChange} />

          <label htmlFor="lastName">Enter your first name: </label>
          <input
            type="text"
            value={data.lastName}
            id='lastName'
            name='lastName'
            onChange={handleChange} />

          <label htmlFor="email">Enter your email: </label>
          <input
            type="text"
            value={data.email}
            id='email'
            name='email' 
            onChange={handleChange}/>

          <label htmlFor="password">Enter your password: </label>
          <input
            type={showPassword ? "text" : "password"}
            value={data.password}
            id='password'
            name='password' 
            onChange={handleChange}/>
          <span onClick={handleShowPassword}>{showPassword ? <BiShow /> : <BiHide />}</span>

          <label htmlFor="confirmPassword">Enter your password again: </label>
          <input type={showPassword ? "text" : "password"}
            value={data.confirmPassword}
            id='confirmPassword'
            name='confirmPassword' 
            onChange={handleChange}/>
          <span onClick={handleShowConfirmPassword}>{showConfirmPassword ? <BiShow /> : <BiHide />}</span>

          <button>Sign Up</button>
        </form>
        <p>Do you already have an account? <Link to="/login">Login</Link></p>
      </div>
    </div >
  )
}

export default Signup