import React, { useState, useEffect } from "react";

const UserForm = ({ user, onSave, onCancel }) => {
  const [formData, setFormData] = useState({
    id: user.id || "",
    name: user.name || "",
    email: user.email || "",
    company: user.company || "",
  });

  // Update form state when user data changes (editing existing user)
  useEffect(() => {
    setFormData({
      id: user.id || "",
      name: user.name || "",
      email: user.email || "",
      company: user.company || "",
    });
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload on submit
    console.log("Form Data on Submit:", formData);

    // Call the onSave function passed down from App.js
    onSave(formData);

    // Optionally reset form fields after saving
    setFormData({
      id: "",
      name: "",
      email: "",
      company: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>ID</label>
        <input
          type="text"
          name="id"
          value={formData.id}
          onChange={handleChange}
          disabled
        />
      </div>
      <div>
        <label>Full Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Department</label>
        <input
          type="text"
          name="company"
          value={formData.company}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Save</button>
      <button type="button" onClick={onCancel}>
        Cancel
      </button>
    </form>
  );
};

export default UserForm;
