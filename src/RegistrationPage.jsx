import React, { useState } from "react";

const RegistrationPage = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [loggedIn, setLoggedIn] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRegister = () => {
    localStorage.setItem("user", JSON.stringify(formData));
    setLoggedIn(true);
  };

  return loggedIn ? (
    <div className="min-h-screen flex items-center justify-center bg-green-100">
      <h2 className="text-2xl">Welcome, {formData.username}!</h2>
    </div>
  ) : (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="p-6 bg-white rounded shadow-md">
        <h2 className="text-2xl font-bold mb-4">Register</h2>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleInputChange}
          className="block w-full px-3 py-2 mb-4 border rounded"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleInputChange}
          className="block w-full px-3 py-2 mb-4 border rounded"
        />
        <button
          onClick={handleRegister}
          className="w-full bg-blue-500 text-white py-2 rounded"
        >
          Register
        </button>
      </div>
    </div>
  );
};

export default RegistrationPage;
