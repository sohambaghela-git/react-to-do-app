import React, { useState } from 'react';

const FormDetails = (props) => {
  const {setTableData} = props;

  const generateUniqueId = () => {
    // You can implement a more sophisticated ID generation logic here
    return Math.floor(Math.random() * 1000).toString();
  };
  const initialValue = {
    id: generateUniqueId(),
    name: '',
    description: '',
    date: '',
  }
  // State to hold form data
  const [formData, setFormData] = useState(initialValue);
  const [errors, setErrors] = useState({});
  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = {};
    const currentDate = new Date().toISOString().split('T')[0];
    if (!formData.name.trim()) {
      validationErrors.name = 'Name is required';
    }
    if (!formData.description.trim()) {
      validationErrors.description = 'Description is required';
    }
    if (!formData.date.trim()) {
      validationErrors.date = 'Date is required';
    }else if (formData.date < currentDate) {
      validationErrors.date = 'Date can not be past';
    }

    if (Object.keys(validationErrors).length > 0) {
      // To update the error state and return funtion from here
      setErrors(validationErrors);
      return;
    }
    // setTableData(formData);
    setTableData((prevTableData) => [...prevTableData, formData]);
    setFormData(initialValue);
    setErrors({});
    // console.log('Form submitted with data:', formData);
  };

  return (
    <div className="container mt-4">
      <h2>To Do Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="id" className="form-label">ID:</label>
          <input
            type="text"
            className="form-control"
            id="id"
            name="id"
            value={formData.id}
            onChange={handleInputChange}
            readOnly  // Make the input read-only to prevent user input
          />
        </div>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name:</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
           {errors.name && <div style={{ color: 'red' }}>{errors.name}</div>}
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">Description:</label>
          <textarea
            className="form-control"
            id="description"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
          ></textarea>
           {errors.description && <div style={{ color: 'red' }}>{errors.description}</div>}
        </div>
        <div className="mb-3">
          <label htmlFor="date" className="form-label">Date:</label>
          <input
            type="date"
            className="form-control"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleInputChange}
          />
           {errors.date && <div style={{ color: 'red' }}>{errors.date}</div>}
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default FormDetails;
