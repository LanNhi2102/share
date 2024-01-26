// CreateTimesharePage.js
import React, { useState } from 'react';
import './CreateTimesharePage.css';

const CreateTimesharePage = ({ addTimeshare, deductAmountFromWallet }) => {
  const [timeshare, setTimeshare] = useState({
    name: '',
    address: '',
    city: '',
    state: '',
    price: 0,
    timeshare: '',
    description: '',
    image: '',
  });

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleChange = (e) => {
    setTimeshare({ ...timeshare, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    const deductionResult = deductAmountFromWallet(50000);

    if (deductionResult) {
      addTimeshare(timeshare);
      setShowSuccessMessage(true);
    } else {
      alert('Số dư trong ví không đủ, vui lòng nạp thêm tiền vào ví!');
    }
  };

  return (
    <div className="create-timeshare-container">
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" name="name" value={timeshare.name} onChange={handleChange} />

      <label htmlFor="address">Address:</label>
      <input type="text" id="address" name="address" value={timeshare.address} onChange={handleChange} />

      <label htmlFor="city">City:</label>
      <input type="text" id="city" name="city" value={timeshare.city} onChange={handleChange} />

      <label htmlFor="state">State:</label>
      <input type="text" id="state" name="state" value={timeshare.state} onChange={handleChange} />

      <label htmlFor="price">Price:</label>
      <input type="number" id="price" name="price" value={timeshare.price} onChange={handleChange} />

      <label htmlFor="timeshare">Timeshare:</label>
      <input type="text" id="timeshare" name="timeshare" value={timeshare.timeshare} onChange={handleChange} />

      <label htmlFor="description">Description:</label>
      <textarea id="description" name="description" value={timeshare.description} onChange={handleChange} />

      <label htmlFor="image">Image:</label>
      <input type="file" id="image" name="image" accept="image/*" onChange={handleChange} />

      <button onClick={handleSubmit}>Create Timeshare</button>

      {showSuccessMessage && (
        <div className="success-message">
          <p>Bạn đã tạo timeshare mới thành công!</p>
        </div>
      )}
    </div>
  );
};

export default CreateTimesharePage;
