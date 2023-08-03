import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './User.css';
import { useNavigate } from 'react-router-dom';

function User({setUser}) {
  const [userData, setUserData] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("jwt");

    const url = "https://eazy-bazaar-ecommerce-app.onrender.com/api/v1/profile"
    const config =  {
      headers: {
    Authorization: `Bearer ${token}`,
  }
}
    // Fetch user data with image from the backend when the component mounts
    axios.get(url,config)
      .then(response => {
        // The data is in the response.data.results array
        setUserData(response.data.user);
      })
      .catch(error => {
        console.error('Error fetching user data:', error);
      });
  }, []);

  const handleLogout = () => {
      // Clear the JWT token from localStorage
    localStorage.removeItem('jwt');
    // Reset the user state
    setUser(null)
    setUserData({})
    // navigate to homepage
    navigate('/');
  };

  return (
    <div className="wrapper" id="user-page">
      <div className="logo">
        <img src={userData.avatar} alt="Profile" />
      </div>
      <div className="text-center mt-4 name">
        Your Account
      </div>
      <div className="user-details-container p-3 mt-3">
        <div className="user-detail">
          <span className="user-label">Name:</span>
          <span>{userData.username}</span>
        </div>
        <div className="user-detail">
          <span className="user-label">Email:</span>
          <span>{userData.email}</span>
        </div>
        <div className="user-detail">
          <span className="user-label">Phone:</span>
          <span>{userData.contact_info}</span>
        </div>
        {/* Add more user details as needed */}
      </div>
      <button className="logout-btn" onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default User;
