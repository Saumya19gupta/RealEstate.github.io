// import React from 'react';


// const TopValues = () => {
//     return (
//       <div className="min-h-screen flex items-center justify-center text-3xl font-bold text-yellow-600">
//         Top Villas Page
//       </div>
//     );
//   };
  
//   export default TopValues;


import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaPhoneAlt } from "react-icons/fa";
import SearchResults from "../SearchResults";

const villaListings = [
  {
    title: "4 BHK Luxury Villa in Sushant Golf City, Lucknow",
    type: "Villa",
    owner: "Nitin Sinha",
    phone: "8887741234",
    address: "Sushant Golf City, Lucknow, Uttar Pradesh",
    area: "3600 sqft",
    status: "Ready to Move",
    possession: "Immediate",
    price: "2.5 Cr",
    pricePerSqft: "6,944",
    img: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80",
    updated: "Updated today",
  },
  {
    title: "5 BHK Premium Villa in Gomti Nagar Extension",
    type: "Villa",
    owner: "Anjali Singh",
    phone: "9090845678",
    address: "Gomti Nagar Ext., Lucknow, Uttar Pradesh",
    area: "4200 sqft",
    status: "Under Construction",
    possession: "Dec '25",
    price: "3 Cr",
    pricePerSqft: "7,143",
    img: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80",
    updated: "Updated yesterday",
  },
  {
    title: "3 BHK Villa in Cantonment Area, Varanasi",
    type: "Villa",
    owner: "Deepak Mishra",
    phone: "7890654321",
    address: "Cantonment, Varanasi, Uttar Pradesh",
    area: "2800 sqft",
    status: "Ready to Move",
    possession: "Immediate",
    price: "1.75 Cr",
    pricePerSqft: "6,250",
    img: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80",
    updated: "Updated 2 days ago",
  },
];

export default function TopVillas() {
  const [visibleDetails, setVisibleDetails] = useState({});

  const handleShowDetails = (index) => {
    setVisibleDetails((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <div className="p-4 md:p-10 bg-gray-50 min-h-screen">

        <SearchResults />
        


      <motion.h1
        className="text-2xl md:text-4xl font-bold mb-6 text-gray-800"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Top Villas in Uttar Pradesh
      </motion.h1>

      <div className="grid grid-cols-1 gap-6">
        {villaListings.map((item, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-2xl shadow-md overflow-hidden grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className="md:col-span-1 relative">
              <img
                src={item.img}
                alt={item.title}
                className="rounded-lg object-cover w-full h-40 md:h-full"
              />
              <span className="absolute top-2 left-2 bg-black text-white text-xs px-2 py-0.5 rounded">
                {item.updated}
              </span>
            </div>

            <div className="md:col-span-2">
              <h2 className="text-lg font-semibold mt-1 text-gray-800">{item.title}</h2>
              <p className="text-sm text-gray-600 mb-2">
                Type: {item.type} | Area: {item.area}
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-sm text-gray-700">
                <div><strong>Status:</strong> {item.status}</div>
                <div><strong>Possession:</strong> {item.possession}</div>
              </div>

              {visibleDetails[index] && (
                <motion.div
                  className="mt-3 text-sm text-green-700 bg-green-50 p-3 rounded-lg"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <p><strong>Owner:</strong> {item.owner}</p>
                  <p><strong>Phone:</strong> {item.phone}</p>
                  <p><strong>Address:</strong> {item.address}</p>
                </motion.div>
              )}
            </div>

            <div className="flex flex-col justify-between items-center md:items-end">
              <div className="text-right">
                <p className="text-xl font-semibold text-gray-800">₹{item.price}</p>
                <p className="text-xs text-gray-500">
                  ₹{item.pricePerSqft} per sqft
                </p>
              </div>
              <div className="flex flex-col gap-2 mt-4 md:mt-0 w-full md:w-auto">
                <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition">
                  Contact Owner
                </button>
                <button
                  onClick={() => handleShowDetails(index)}
                  className="border border-blue-600 text-blue-600 px-4 py-2 rounded-md hover:bg-blue-50 transition flex items-center gap-2"
                >
                  <FaPhoneAlt /> Get Phone No.
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
