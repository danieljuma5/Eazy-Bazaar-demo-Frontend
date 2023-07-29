import React, { useState } from 'react';
import './SignUp.css';
import { NavLink, useNavigate } from 'react-router-dom';

function SignUp() {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    name: '',
    email: '',
    contact: '',
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
        This shop
      </div>
      <form className="p-3 mt-3" onChange={handleChange} onSubmit={handleSubmit}>
        <div className="form-field d-flex align-items-center">
          <span className="far fa-user"></span>
          <input type="text" name="name" id="name" placeholder="Username" required />
        </div>
        <div className="form-field d-flex align-items-center">
          <span className="fas fa-envelope"></span>
          <input type="email" name="email" id="email" placeholder="Email" required />
        </div>
        <div className="form-field d-flex align-items-center">
          <span className="fas fa-phone"></span>
          <input type="tel" name="contact" id="contact" placeholder="Phone Number" required />
        </div>
        <div className="form-field d-flex align-items-center">
          <span className="fas fa-key"></span>
          <input type="password" name="password" id="pwd" placeholder="Password" required />
        </div>
        <button className="btn mt-3">Sign Up</button>
      </form>
      <div className="text-center fs-6">
        Already have an account? <NavLink to="/login">Login</NavLink>
      </div>
    </div>
  );
}

export default SignUp;
