// Modal.jsx
import React from 'react';
import './Modal.css';

const Modal = ({ isOpen, title, message, onClose, onYes }) => {
  const handleYes = () => {
    onYes(); // Call the callback function provided by the parent component
    onClose(); // Close the modal after handling "Yes"
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h3>{title}</h3>
        <p>{message}</p>
        <button onClick={handleYes}>Yes</button>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Modal;
