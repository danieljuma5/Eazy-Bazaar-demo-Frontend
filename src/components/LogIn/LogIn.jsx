import React, { useState } from 'react';
import './LogIn.css';
import { NavLink, useNavigate } from 'react-router-dom';

function LogIn() {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    userName: '',
    password: '',
  });

  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/');
  };

  return (
    <div className="wrapper">
      <div className="logo">
        <img src="" alt="" />
      </div>
      <div className="text-center mt-4 name">
      Hi, Welcome Back! 👋
      </div>
      <form className="p-3 mt-3" onChange={handleChange} onSubmit={handleSubmit}>
        <div className="form-field d-flex align-items-center">
          <span className="far fa-user"></span>
          <input type="text" name="userName" id="userName" placeholder="Username" />
        </div>
        <div className="form-field d-flex align-items-center">
          <span className="fas fa-key"></span>
          <input type="password" name="password" id="pwd" placeholder="Password" />
        </div>
        <button className="btn mt-3">Login</button>
      </form>

      {/* Remaining code from the lower part of your component */}
      <div className="container">
        <p id='l-account'>
          Don't have an account? <NavLink to="/signup">Sign Up</NavLink>
        </p>
      </div>
    </div>
  );
}

export default LogIn;
