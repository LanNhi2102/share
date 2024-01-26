// CreateTimesharePage.js
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './CreateTimesharePage.css';
const CreateTimesharePage =  ({ addTimeshare, updateWallet, addTransaction }) => {
  const [timeshare, setTimeshare] = useState({
    name: '',
    address: '',
    city: '',
    state: '',
    price: '',
    timeshare: '',
    description: '',
    image: null,
  });

  const handleChange = (e) => {
    if (e.target.name === 'image') {
      setTimeshare({ ...timeshare, [e.target.name]: e.target.files[0] });
    } else {
      setTimeshare({ ...timeshare, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = () => {
   
    // Hiển thị cửa sổ xác nhận
    if (window.confirm(`Are you sure you want to create a new timeshare for a fee of 50,000VND?`)) {
      // Thực hiện thêm timeshare
      addTimeshare(timeshare);
      
  
      // Hiển thị thông báo thành công
      toast.success('Timeshare created successfully!', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });

      // Hiển thị cửa sổ thông báo nhỏ
      window.alert('Timeshare created successfully!');
      
      // Reset trạng thái của timeshare
      setTimeshare({
        name: '',
        address: '',
        city: '',
        state: '',
        price: '',
        timeshare: '',
        description: '',
        image: null,
      });
    }
  };

  const handleCancel = () => {
    // Reset trạng thái của timeshare
    setTimeshare({
      name: '',
      address: '',
      city: '',
      state: '',
      price: '',
      timeshare: '',
      description: '',
      image: null,
    });
  };

  return (
    <div className="page-container">
      <h2>Create Timeshare</h2>
      
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" value={timeshare.name} onChange={handleChange} required />
      </div>

      <div className="form-group">
        <label htmlFor="address">Address:</label>
        <input type="text" id="address" name="address" value={timeshare.address} onChange={handleChange} required />
      </div>

      <div className="form-group">
        <label htmlFor="city">City:</label>
        <input type="text" id="city" name="city" value={timeshare.city} onChange={handleChange} required />
      </div>

      <div className="form-group">
        <label htmlFor="state">State:</label>
        <input type="text" id="state" name="state" value={timeshare.state} onChange={handleChange} required />
      </div>

      <div className="form-group">
        <label htmlFor="price">Price:</label>
        <input type="text" id="price" name="price" value={timeshare.price} onChange={handleChange} required />
      </div>

      <div className="form-group">
        <label htmlFor="timeshare">Timeshare:</label>
        <input type="text" id="timeshare" name="timeshare" value={timeshare.timeshare} onChange={handleChange} required />
      </div>

      <div className="form-group">
        <label htmlFor="description">Description:</label>
        <textarea id="description" name="description" value={timeshare.description} onChange={handleChange} required />
      </div>

      <div className="form-group">
        <label htmlFor="image">Image:</label>
        <input type="file" id="image" name="image" onChange={handleChange} />
      </div>

      <div className="form-group">
        <button onClick={handleSubmit}>Create Timeshare</button>
        <button onClick={handleCancel}>Cancel</button>
      </div>
    </div>
  );
};

export default CreateTimesharePage;