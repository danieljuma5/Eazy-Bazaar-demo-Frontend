import React from 'react';
import './Riders.css';

const DummyRiders = ({ riders, onRiderSelect }) => {
  return (
    <div className="dummy-riders-container">
      <h2>Select a Rider</h2>
      <ul className="dummy-riders-list">
        {riders.map((rider) => (
          <li key={rider.id} onClick={() => onRiderSelect(rider)}>
            <div className="rider-info">
              <div className="logo">
                <img src={rider.logoUrl} alt={rider.name} />
              </div>
              <div className="rider-details">
                <p>{rider.name}</p>
                <p>Contact: {rider.contact}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DummyRiders;
