// Signup.js
import React, { useState } from "react";
import { useSignUpUserMutation, useGetUserQuery } from "../Slices/ApiSlice";

const Signup = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const { data } = useGetUserQuery();
  const [signUpUser] = useSignUpUserMutation();
  console.log(data, "data Sign up");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevUserData) => ({
      ...prevUserData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const newUser = {
        id: Date.now(),
        name: userData.name,
        email: userData.email,
        password: userData.password,
      };

      await signUpUser(newUser);
     
    } catch (error) {
      console.error("Error signing up:", error);
    }
  };

  return (
    <div className="bg-[#ffffffeb] p-4 rounded-lg shadow-lg glassmorphic-container backdrop-blur-xl backdrop-filter bg-opacity-10 lg:w-[33vw] h-[fit-content]">
      <h1 className="text-3xl font-bold text-purple-700 mb-6">Signup</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm text-gray-600 mb-2">Name:</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name..."
            className="glassmorphic-input px-2 py-1 w-full mb-2"
            value={userData.name}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm text-gray-600 mb-2">Email:</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email..."
            className="glassmorphic-input px-2 py-1 w-full mb-2"
            value={userData.email}
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
            value={userData.password}
            onChange={handleChange}
          />
        </div>
        <button
          type="submit"
          className="glassmorphic-button bg-purple-700 hover:bg-purple-800 text-white py-2 px-4 rounded-md transition duration-300 ease-in-out"
        >
          Signup
        </button>
      </form>
    </div>
  );
};

export default Signup;
