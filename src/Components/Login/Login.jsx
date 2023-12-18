// Login.js
import React, { useState } from "react";

const Login = ({ onLogin }) => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const loggedInUser = {
      id: 1,
      email: credentials.email,
      
    };
    onLogin(loggedInUser);
  };

  return (
    <div className="bg-[#ffffffeb] p-4 rounded-lg shadow-lg glassmorphic-container backdrop-blur-xl backdrop-filter bg-opacity-10 lg:w-[33vw] h-[fit-content]">
      <h1 className="text-3xl font-bold text-purple-700 mb-6">Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm text-gray-600 mb-2">Email:</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email..."
            className="glassmorphic-input px-2 py-1 w-full mb-2"
            value={credentials.email}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm text-gray-600 mb-2">Password:</label>
          <input
            type="password"
            name="password"
            placeholder="Enter your password..."
            className="glassmorphic-input px-2 py-1 w-full mb-2"
            value={credentials.password}
            onChange={handleChange}
          />
        </div>
        <button
          type="submit"
          className="glassmorphic-button bg-purple-700 hover:bg-purple-800 text-white py-2 px-4 rounded-md transition duration-300 ease-in-out"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
