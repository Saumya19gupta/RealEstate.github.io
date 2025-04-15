// import React from 'react';


// const TopRent = () => {
//     return (
//       <div className="min-h-screen flex items-center justify-center text-3xl font-bold text-green-700">
//         Top Rent Listings Page
//       </div>
//     );
//   };
  
//   export default TopRent;
  

// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { FaPhoneAlt } from "react-icons/fa";

// const rentListings = [
//   {
//     title: "2 BHK Apartment for Rent in Indiranagar, Bangalore",
//     owner: "Shivani Patel",
//     phone: "9876543210",
//     address: "Indiranagar, Bangalore, Karnataka",
//     area: "1200 sqft",
//     rent: "₹ 30,000/mo",
//     pricePerSqft: "2,500",
//     img: "/apartment1.jpg",
//     updated: "Updated yesterday",
//   },
//   {
//     title: "1 BHK Apartment for Rent in Koramangala, Bangalore",
//     owner: "Rajesh Kumar",
//     phone: "9123456789",
//     address: "Koramangala, Bangalore, Karnataka",
//     area: "800 sqft",
//     rent: "₹ 18,000/mo",
//     pricePerSqft: "2,250",
//     img: "/apartment2.jpg",
//     updated: "Updated today",
//   },
// ];

// export default function TopRentListings() {
//   const [visibleDetails, setVisibleDetails] = useState({});

//   const handleShowDetails = (index) => {
//     setVisibleDetails((prev) => ({ ...prev, [index]: !prev[index] }));
//   };

//   return (
//     <div className="p-4 md:p-10 bg-gray-50 min-h-screen">
//       <motion.h1
//         className="text-2xl md:text-4xl font-bold mb-6 text-gray-800"
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//       >
//         Top Rent Listings in Bangalore
//       </motion.h1>

//       <div className="grid grid-cols-1 gap-6">
//         {rentListings.map((item, index) => (
//           <motion.div
//             key={index}
//             className="bg-white rounded-2xl shadow-md overflow-hidden grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: index * 0.2 }}
//           >
//             <div className="md:col-span-1 relative">
//               <img
//                 src={item.img}
//                 alt={item.title}
//                 className="rounded-lg object-cover w-full h-40 md:h-full"
//               />
//               <span className="absolute top-2 left-2 bg-black text-white text-xs px-2 py-0.5 rounded">
//                 {item.updated}
//               </span>
//             </div>

//             <div className="md:col-span-2">
//               <h2 className="text-lg font-semibold mt-1 text-gray-800">
//                 {item.title}
//               </h2>
//               <p className="text-sm text-gray-600 mb-2">
//                 Owner: {item.owner} | Area: {item.area}
//               </p>
//               <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-sm text-gray-700">
//                 <div>
//                   <strong>Rent:</strong> {item.rent}
//                 </div>
//                 <div>
//                   <strong>Price/Sqft:</strong> ₹{item.pricePerSqft}
//                 </div>
//               </div>

//               {visibleDetails[index] && (
//                 <motion.div
//                   className="mt-3 text-sm text-green-700 bg-green-50 p-3 rounded-lg"
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                 >
//                   <p><strong>Owner:</strong> {item.owner}</p>
//                   <p><strong>Phone:</strong> {item.phone}</p>
//                   <p><strong>Address:</strong> {item.address}</p>
//                 </motion.div>
//               )}
//             </div>

//             <div className="flex flex-col justify-between items-center md:items-end">
//               <div className="text-right">
//                 <p className="text-xl font-semibold text-gray-800">
//                   ₹{item.rent}
//                 </p>
//               </div>
//               <div className="flex flex-col gap-2 mt-4 md:mt-0 w-full md:w-auto">
//                 <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition">
//                   Contact Owner
//                 </button>
//                 <button
//                   onClick={() => handleShowDetails(index)}
//                   className="border border-blue-600 text-blue-600 px-4 py-2 rounded-md hover:bg-blue-50 transition flex items-center gap-2"
//                 >
//                   <FaPhoneAlt /> Get Phone No.
//                 </button>
//               </div>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// }


// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { FaPhoneAlt } from "react-icons/fa";

// const rentListings = [
//   {
//     title: "2 BHK Apartment for Rent in Indiranagar, Lucknow",
//     owner: "Shivani Patel",
//     phone: "9876543210",
//     address: "Indiranagar, Lucknow, Uttar Pradesh",
//     area: "1200 sqft",
//     rent: "₹ 30,000/mo",
//     pricePerSqft: "2,500",
//     img: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80",
//     updated: "Updated yesterday",
//   },
//   {
//     title: "1 BHK Apartment for Rent in Hazratganj, Lucknow",
//     owner: "Rajesh Kumar",
//     phone: "9123456789",
//     address: "Hazratganj, Lucknow, Uttar Pradesh",
//     area: "800 sqft",
//     rent: "₹ 18,000/mo",
//     pricePerSqft: "2,250",
//     img: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80",
//     updated: "Updated today",
//   },
//   {
//     title: "3 BHK House for Rent in Varanasi, Uttar Pradesh",
//     owner: "Amit Verma",
//     phone: "9988776655",
//     address: "Assi Ghat, Varanasi, Uttar Pradesh",
//     area: "1500 sqft",
//     rent: "₹ 40,000/mo",
//     pricePerSqft: "2,666",
//     img: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80",
//     updated: "Updated 2 days ago",
//   },
//   {
//     title: "2 BHK Apartment for Rent in Noida Sector 18",
//     owner: "Sunita Mehta",
//     phone: "9012345678",
//     address: "Sector 18, Noida, Uttar Pradesh",
//     area: "1100 sqft",
//     rent: "₹ 22,000/mo",
//     pricePerSqft: "2,000",
//     img: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80",
//     updated: "Updated 3 days ago",
//   },
//   {
//     title: "2 BHK Flat for Rent in Ghaziabad, Uttar Pradesh",
//     owner: "Karan Singh",
//     phone: "9977554433",
//     address: "Indirapuram, Ghaziabad, Uttar Pradesh",
//     area: "1050 sqft",
//     rent: "₹ 25,000/mo",
//     pricePerSqft: "2,380",
//     img: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80",
//     updated: "Updated 1 week ago",
//   },
// ];

// export default function TopRentListings() {
//   const [visibleDetails, setVisibleDetails] = useState({});

//   const handleShowDetails = (index) => {
//     setVisibleDetails((prev) => ({ ...prev, [index]: !prev[index] }));
//   };

//   return (
//     <div className="p-4 md:p-10 bg-gray-50 min-h-screen">
//       <motion.h1
//         className="text-2xl md:text-4xl font-bold mb-6 text-gray-800"
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//       >
//         Top Rent Listings in Uttar Pradesh
//       </motion.h1>

//       <div className="grid grid-cols-1 gap-6">
//         {rentListings.map((item, index) => (
//           <motion.div
//             key={index}
//             className="bg-white rounded-2xl shadow-md overflow-hidden grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: index * 0.2 }}
//           >
//             <div className="md:col-span-1 relative">
//               <img
//                 src={item.img}
//                 alt={item.title}
//                 className="rounded-lg object-cover w-full h-40 md:h-full"
//               />
//               <span className="absolute top-2 left-2 bg-black text-white text-xs px-2 py-0.5 rounded">
//                 {item.updated}
//               </span>
//             </div>

//             <div className="md:col-span-2">
//               <h2 className="text-lg font-semibold mt-1 text-gray-800">
//                 {item.title}
//               </h2>
//               <p className="text-sm text-gray-600 mb-2">
//                 Owner: {item.owner} | Area: {item.area}
//               </p>
//               <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-sm text-gray-700">
//                 <div>
//                   <strong>Rent:</strong> {item.rent}
//                 </div>
//                 <div>
//                   <strong>Price/Sqft:</strong> ₹{item.pricePerSqft}
//                 </div>
//               </div>

//               {visibleDetails[index] && (
//                 <motion.div
//                   className="mt-3 text-sm text-green-700 bg-green-50 p-3 rounded-lg"
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                 >
//                   <p><strong>Owner:</strong> {item.owner}</p>
//                   <p><strong>Phone:</strong> {item.phone}</p>
//                   <p><strong>Address:</strong> {item.address}</p>
//                 </motion.div>
//               )}
//             </div>

//             <div className="flex flex-col justify-between items-center md:items-end">
//               <div className="text-right">
//                 <p className="text-xl font-semibold text-gray-800">
//                   ₹{item.rent}
//                 </p>
//               </div>
//               <div className="flex flex-col gap-2 mt-4 md:mt-0 w-full md:w-auto">
//                 <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition">
//                   Contact Owner
//                 </button>
//                 <button
//                   onClick={() => handleShowDetails(index)}
//                   className="border border-blue-600 text-blue-600 px-4 py-2 rounded-md hover:bg-blue-50 transition flex items-center gap-2"
//                 >
//                   <FaPhoneAlt /> Get Phone No.
//                 </button>
//               </div>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// }


import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaPhoneAlt } from "react-icons/fa";
import SearchResults from "../SearchResults";



const rentListings = [
  {
    title: "2 BHK Apartment for Rent in Indiranagar, Lucknow",
    owner: "Shivani Patel",
    phone: "9876543210",
    address: "Indiranagar, Lucknow, Uttar Pradesh",
    area: "1200 sqft",
    rent: "₹30,000/mo",
    pricePerSqft: "2500",
    updated: "Updated yesterday",
    type: "Apartment",
    possession: "Immediate",
    floor: "2nd out of 4",
    status: "Available",
    img: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80"
  },
  // Add other entries similarly...
];

export default function TopRentListings() {
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
        Top Rent Listings in Uttar Pradesh
      </motion.h1>

      <div className="grid grid-cols-1 gap-6">
        {rentListings.map((item, index) => (
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
              <h2 className="text-lg font-semibold mt-1 text-gray-800">
                {item.title}
              </h2>
              <p className="text-sm text-gray-600 mb-2">
                Type: {item.type} | Area: {item.area}
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-sm text-gray-700">
                <div><strong>Status:</strong> {item.status}</div>
                <div><strong>Possession:</strong> {item.possession}</div>
                {item.floor && <div><strong>Floor:</strong> {item.floor}</div>}
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
                <p className="text-xl font-semibold text-gray-800">{item.rent}</p>
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

      {/* <SearchResults/> */}

    </div>
  );
}
