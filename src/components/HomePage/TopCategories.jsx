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

// {/* <button
//   onClick={() => {
//     const routes = ["/top-selling", "/top-rent", "/top-values", "/top-locations"];
//     navigate(routes[index]);
//   }}
//   className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
// >
//   Explore Now
// </button> */}






//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Categories;


import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaHome, FaBuilding, FaDollarSign, FaMapMarkerAlt } from "react-icons/fa";

const categories = [
  {
    icon: <FaHome size={40} className="text-blue-600" />,
    title: "Top Selling Properties",
    description: "Explore the hottest properties with maximum demand and fast-selling potential.",
    route: "/top-selling",
  },
  {
    icon: <FaBuilding size={40} className="text-green-600" />,
    title: "Top Rent Listings",
    description: "Find the most viewed and budget-friendly rental homes in your city.",
    route: "/top-rent",
  },
  {
    icon: <FaDollarSign size={40} className="text-yellow-500" />,
    title: "Top Villas",
    description: "Properties that offer the best price-to-feature ratio and investment returns.",
    route: "/top-values",
  },
  {
    icon: <FaMapMarkerAlt size={40} className="text-red-500" />,
    title: "Top Locations",
    description: "Live where everyone wants to be – discover top neighborhoods and areas.",
    route: "/top-locations",
  },
];

const Categories = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-tr from-slate-100 to-white py-16 px-6 md:px-20">
      <motion.h1
        className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-6"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Explore by Category
      </motion.h1>

      <motion.p
        className="text-center max-w-xl mx-auto text-gray-600 mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        Discover top-rated property listings curated for home buyers, investors, and renters alike.
      </motion.p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {categories.map((item, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-2xl hover:scale-[1.02] transition-all duration-300"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
          >
            <div className="mb-4 flex justify-center">{item.icon}</div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h2>
            <p className="text-gray-600 text-sm mb-4">{item.description}</p>
            <button
              onClick={() => navigate(item.route)}
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
            >
              Explore Now
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
