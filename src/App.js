import './App.css';
import React, { useState } from "react";

function App() {
  // lowercase 'formData' and 'setFormData'
  const [formData, setFormData] = useState({
    email: "",
    fullName: "",
    address: "",
    city: "",
    province: "",
    postalCode: ""
  });

  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((previous) => ({
      ...previous,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // correct method
    setSubmittedData({ ...formData }); // corrected capitalization
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>Lab Week 10 - React Form</h2>

      <form onSubmit={handleSubmit}>
        <label>Email:</label><br />
        <input name="email" value={formData.email} onChange={handleChange} /><br /><br />

        <label>Full Name:</label><br />
        <input name="fullName" value={formData.fullName} onChange={handleChange} /><br /><br />

        <label>Address:</label><br />
        <input name="address" value={formData.address} onChange={handleChange} /><br /><br />

        <label>City:</label><br />
        <input name="city" value={formData.city} onChange={handleChange} /><br /><br />

        <label>Province:</label><br />
        <input name="province" value={formData.province} onChange={handleChange} /><br /><br />

        <label>Postal Code:</label><br />
        <input name="postalCode" value={formData.postalCode} onChange={handleChange} /><br /><br />

        <button type="submit">Submit</button>
      </form>

      {submittedData && (
        <div style={{ marginTop: "20px" }}>
          <p><strong>Email:</strong> {submittedData.email}</p>
          <p><strong>Full Name:</strong> {submittedData.fullName}</p>
          <p><strong>Address:</strong> {submittedData.address}</p>
          <p><strong>City:</strong> {submittedData.city}</p>
          <p><strong>Province:</strong> {submittedData.province}</p>
          <p><strong>Postal Code:</strong> {submittedData.postalCode}</p>
        </div>
      )}
    </div>
  );
}

export default App;
