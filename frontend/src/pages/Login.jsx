import React from 'react'
import { useState } from 'react';
import toast from 'react-hot-toast';
import { BiHide, BiShow } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const [data, setData] = useState({
    email: "",
    password: ""
  });

  const [showPassword, setShowPassword] = useState(false);

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
      alert("Email or password is missing!");
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
      alert("All fields are required!");
    }
  }

  return (
    <div>
      <div>
        <h3>Login</h3>
        <form action="" onSubmit={handleSubmit}>
          <label htmlFor="">Enter your email</label>
          <input
            type="text"
            name='email'
            id='email'
            value={data.email}
            onChange={handleData} />
          <label htmlFor="">Enter your password</label>
          <input
            type={showPassword ? "text" : "password"}
            name='password'
            id='password'
            value={data.password}
            onChange={handleData}
          />
          <span onClick={handleShowPassword}> {showPassword ? <BiShow /> : <BiHide />} </span>
          <button>Login</button>
        </form>
      </div>
    </div>
  )
}

export default Login