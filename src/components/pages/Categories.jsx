// import React from "react";
// import { motion } from "framer-motion";
// import { FaHome, FaBuilding, FaDollarSign, FaMapMarkerAlt } from "react-icons/fa";

// const categories = [
//   {
//     icon: <FaHome size={40} className="text-blue-600" />,
//     title: "Top Selling Properties",
//     description: "Explore the hottest properties with maximum demand and fast-selling potential.",
//   },
//   {
//     icon: <FaBuilding size={40} className="text-green-600" />,
//     title: "Top Rent Listings",
//     description: "Find the most viewed and budget-friendly rental homes in your city.",
//   },
//   {
//     icon: <FaDollarSign size={40} className="text-yellow-500" />,
//     title: "Top Values",
//     description: "Properties that offer the best price-to-feature ratio and investment returns.",
//   },
//   {
//     icon: <FaMapMarkerAlt size={40} className="text-red-500" />,
//     title: "Top Locations",
//     description: "Live where everyone wants to be – discover top neighborhoods and areas.",
//   },
// ];

// const Categories = () => {
//   return (
//     <div className="min-h-screen bg-gradient-to-tr from-slate-100 to-white py-16 px-6 md:px-20">
//       <motion.h1
//         className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-6"
//         initial={{ opacity: 0, y: -30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//       >
//         Explore by Category
//       </motion.h1>

//       <motion.p
//         className="text-center max-w-xl mx-auto text-gray-600 mb-12"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 0.8, delay: 0.3 }}
//       >
//         Discover top-rated property listings curated for home buyers, investors, and renters alike.
//       </motion.p>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//         {categories.map((item, index) => (
//           <motion.div
//             key={index}
//             className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-2xl hover:scale-[1.02] transition-all duration-300"
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: index * 0.2, duration: 0.6 }}
//           >
//             <div className="mb-4 flex justify-center">{item.icon}</div>
//             <h2 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h2>
//             <p className="text-gray-600 text-sm mb-4">{item.description}</p>
//             <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
//               Explore Now
//             </button>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Categories;


import { motion } from 'framer-motion';
import { useState } from 'react';

const categoriesData = [
  { title: 'Plots', image: 'https://source.unsplash.com/400x300/?land,plot' },
  { title: 'Apartments', image: 'https://source.unsplash.com/400x300/?apartment,building' },
  { title: 'Villas', image: 'https://source.unsplash.com/400x300/?villa,luxury' },
  { title: 'Commercial', image: 'https://source.unsplash.com/400x300/?commercial,property' },
  { title: 'Rental', image: 'https://source.unsplash.com/400x300/?rent,home' },
  { title: 'Farmhouses', image: 'https://source.unsplash.com/400x300/?farmhouse,nature' },
  { title: 'Studio Rooms', image: 'https://source.unsplash.com/400x300/?studio,interior' },
  { title: 'Offices', image: 'https://source.unsplash.com/400x300/?office,workspace' },
];

const Categories = () => {
  const [search, setSearch] = useState('');

  const filteredCategories = categoriesData.filter((category) =>
    category.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-20">
      <motion.h2
        className="text-3xl font-bold text-center text-purple-800 mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Explore Property Categories
      </motion.h2>

      {/* Search Filter Feature */}
      <div className="mb-8 flex justify-center">
        <input
          type="text"
          placeholder="Search categories..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full max-w-md px-4 py-2 border border-purple-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
      </div>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filteredCategories.map((cat, index) => (
          <motion.div
            key={index}
            className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            whileHover={{ scale: 1.03 }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <img src={cat.image} alt={cat.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-purple-700">{cat.title}</h3>
              <p className="text-gray-600 text-sm mt-1">Explore the best {cat.title.toLowerCase()} deals available now!</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Categories;


