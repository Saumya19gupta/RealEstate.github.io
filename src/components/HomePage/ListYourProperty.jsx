// import React from 'react';

// const ListYourProperty = () => {
//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100 text-blue-900">
//       <h1 className="text-3xl font-bold">List Your Property Page</h1>
//     </div>
//   );
// };

// export default ListYourProperty;

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';


const ListYourProperty = () => {
  // Manage form data with local state
  const [property, setProperty] = useState({
    name: "",
    type: "",
    price: "",
    location: "",
    description: ""
  });

  // Handle form field changes
  const handleChange = (e) => {
    setProperty({ ...property, [e.target.name]: e.target.value });
  };

  // Handle form submission (dummy handler for now)
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted property:", property);
    alert("Property submitted successfully!");
    setProperty({
      name: "",
      type: "",
      price: "",
      location: "",
      description: ""
    });
  };

  return (
    <motion.div
      className="bg-gray-50 text-blue-900 min-h-screen py-12 px-4 sm:px-6 lg:px-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Page Header */}
      <motion.h1
        className="text-4xl font-bold text-center mb-6"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        List Your Property
      </motion.h1>
      <motion.p
        className="text-lg text-center max-w-2xl mx-auto mb-10 text-gray-700"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        Fill out the form below to list your property with us and reach thousands of potential buyers.
      </motion.p>

      {/* Two-column layout: Form and Info */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Column: Form */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white shadow-md rounded-lg p-6"
        >
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Property Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={property.name}
                onChange={handleChange}
                placeholder="e.g. Luxurious Villa"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 px-3 py-2"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="type" className="block text-sm font-medium text-gray-700">
                Property Type
              </label>
              <select
                name="type"
                id="type"
                value={property.type}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 px-3 py-2"
                required
              >
                <option value="">Select Type</option>
                <option value="Apartment">Apartment</option>
                <option value="Villa">Villa</option>
                <option value="Plot">Plot</option>
                <option value="Office">Office</option>
                <option value="Commercial">Commercial</option>
              </select>
            </div>


            <div className="mb-4">
              <label htmlFor="type" className="block text-sm font-medium text-gray-700">
                You are:
              </label>
              <select
                name="type"
                id="type"
                value={property.type}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 px-3 py-2"
                required
              >
                <option value="">Select Type</option>
                <option value="Apartment">Owner</option>
                <option value="Villa">Agent</option>
                <option value="Plot">Builder</option>
              </select>
            </div>


            <div className="mb-4">
              <label htmlFor="type" className="block text-sm font-medium text-gray-700">
              You are here to:
              </label>
              <select
                name="type"
                id="type"
                value={property.type}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 px-3 py-2"
                required
              >
                <option value="">Select Type</option>
                <option value="Apartment">Sell</option>
                <option value="Villa">Rent/lease</option>
                <option value="Plot">List as PG</option>
              </select>
            </div>














            <div className="mb-4">
              <label htmlFor="price" className="block text-sm font-medium text-gray-700">
                Price
              </label>
              <input
                type="text"
                name="price"
                id="price"
                value={property.price}
                onChange={handleChange}
                placeholder="e.g. 50 Lakhs"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 px-3 py-2"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="location" className="block text-sm font-medium text-gray-700">
                Location
              </label>
              <input
                type="text"
                name="location"
                id="location"
                value={property.location}
                onChange={handleChange}
                placeholder="e.g. Agra, Noida"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 px-3 py-2"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                Description
              </label>
              <textarea
                name="description"
                id="description"
                rows="4"
                value={property.description}
                onChange={handleChange}
                placeholder="Provide a short description of your property and also mention your Name, Contact Number and Email ID"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 px-3 py-2"
                required
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="w-full bg-blue-900 text-white py-2 px-4 rounded-full font-bold hover:bg-blue-800 transition duration-300"
              >
                Submit Property
              </button>
            </div>
          </form>
        </motion.div>

        {/* Right Column: Benefits / Info */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col justify-center"
        >
          <div className="bg-blue-50 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Why List With Us?</h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>Free Listing with zero hidden charges.</li>
              <li>Reach thousands of qualified buyers.</li>
              <li>Expert support at every step.</li>
              <li>Fast and transparent process.</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ListYourProperty;

