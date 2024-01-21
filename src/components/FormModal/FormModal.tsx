import React, { useState } from 'react';
import './FormModal.css';

interface SendModalProps {
  onClose: () => void;
}

const SendModal: React.FC<SendModalProps> = ({ onClose }) => {
  const [formData, setFormData] = useState({
    status: 'endorsed',
    date: '0000000000',
    name: 'Alice Human',
    payee: 'Bob Hyuman',
    postDate: '00000000',
    amount: '512.00',
    endorsed: true,
    checkNumber: '12',
    memo: 'Developing my LFGHO project!',
    address: '',
    payeeAddress: '',
  });

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    // Close the modal when the overlay is clicked
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="send-modal-container" onClick={handleOverlayClick}>
    <div className="send-modal">
    <form className="send-modal" onSubmit={handleSubmit}>
      <div>
        <label>Status:</label>
        <input
          type="text"
          name="status"
          value={formData.status}
          onChange={handleInputChange}
          autoComplete="on"
          placeholder="Enter status"
        />
      </div>
      <div>
        <label>Date:</label>
        <input
          type="text"
          name="date"
          value={formData.date}
          onChange={handleInputChange}
          autoComplete="on"
          placeholder="Enter date"
        />
      </div>
      {/* Repeat for other fields */}
      <button type="submit">Submit</button>
    </form>
    </div></div>
  );
};

export default SendModal;
