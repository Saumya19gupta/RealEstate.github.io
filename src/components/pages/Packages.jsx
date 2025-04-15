// import React from 'react';

// const Packages = () => {
//   return (
//     <div className="text-white p-4">
//       <h1>Packages Page</h1>
//     </div>
//   );
// };

// export default Packages;


import { useState } from "react";
import { motion } from "framer-motion";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";

export default function Base() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-gray-900 rounded-b-2xl">
      {/* Hero Section (Smaller Height) */}
      <section className="py-6 px-6 md:px-20 min-h-[40vh] flex flex-col justify-center">
        <div className="container mx-auto">
          {/* Market Sentiment Text */}
          <motion.h1
            className="text-2xl md:text-4xl font-bold"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            The market is in <span className="text-yellow-400">Fear zone</span>
          </motion.h1>

          {/* Market Timeline with Animation */}
          <motion.div
            className="mt-4 flex space-x-4 md:space-x-8 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {["FRI", "MON", "TUE", "WED", "TODAY"].map((day, index) => (
              <motion.div
                key={index}
                className={`flex flex-col items-center p-2 rounded-full ${
                  day === "TODAY"
                    ? "bg-gray-800 p-3 rounded-full shadow-lg"
                    : ""
                }`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }} // Animation Delay
              >
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-yellow-400 text-gray-900 font-bold">
                  {day[0]}
                </div>
                <span className="text-sm mt-2">{day}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
