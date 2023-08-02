import React, { useState } from 'react';
import Modal from './Modal';
import CustomAlert from './CustomAlert';

const ParentComponent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCustomAlertOpen, setIsCustomAlertOpen] = useState(false);
  const [isDelivered, setIsDelivered] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleYesClick = () => {
    setIsDelivered(true);
    setIsCustomAlertOpen(true);
  };

  const handleCustomAlertClose = () => {
    setIsCustomAlertOpen(false);
  };

  return (
    <div>
      {/* Deliver button */}
      <button onClick={handleModalOpen}>Deliver</button>

      {/* Modal */}
      <Modal
        isOpen={isModalOpen}
        title="Confirmation"
        message="Are you sure you want to deliver the selected goods?"
        onClose={handleModalClose}
        onYes={handleYesClick}
      />

      {/* CustomAlert */}
      <CustomAlert
        message={isDelivered ? "Your goods will start delivery shortly." : ""}
        onClose={handleCustomAlertClose}
        isOpen={isCustomAlertOpen}
      />
    </div>
  );
};

export default ParentComponent;
