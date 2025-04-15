// import { Link } from "react-router-dom";
// import img1 from "/src/img/img1.jpeg"
// import img2 from "/src/img/img2.jpeg"

// export default function SellPropertySection() {
//   return (
//     <div className="bg-white py-8 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-6xl mx-auto text-center">
//         <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">
//           Have a property to sell?
//         </h2>

//         <div className="bg-purple-50 border border-gray-200 rounded-xl flex flex-col sm:flex-row items-center justify-between p-4 sm:p-6 gap-4">
//           {/* Left illustration */}
//           <img
//             src={img1}
//             alt="Hand with keys"
//             className="w-24 h-24 sm:w-32 sm:h-32 object-contain"
//           />

//           {/* Center text & button */}
//           <div className="flex-1 text-center">
//             <p className="text-gray-700 mb-2 text-sm sm:text-base">
//               List your property & connect with clients faster!
//             </p>
//             <Link
//               to="/sell"
//               className="inline-block border border-purple-600 text-purple-600 hover:bg-purple-100 font-medium py-2 px-4 rounded transition"
//             >
//               Sell your property
//             </Link>
//           </div>

//           {/* Right illustration */}
//           <img
//             src={img2}
//             alt="Couple looking"
//             className="w-24 h-24 sm:w-32 sm:h-32 object-contain"
//           />
//         </div>
//       </div>
//     </div>
//   );
// }


// import React from 'react';
// import { motion } from 'framer-motion';
// // import { Button } from "@/components/ui/button";
// import { FaHome } from "react-icons/fa";

// // import { Button } from "@/components/ui/button";




// const SellPropertyLanding = () => {
//   return (
//     <div className="bg-gradient-to-br from-blue-950 to-blue-800 text-white min-h-screen flex flex-col justify-center items-center px-4 py-10">
//       {/* Header Text */}
//       <motion.h1
//         className="text-3xl md:text-5xl font-bold text-center mb-6"
//         initial={{ opacity: 0, y: -40 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//       >
//         Have a Property to Sell?
//       </motion.h1>

//       {/* Subtext */}
//       <motion.p
//         className="text-lg md:text-xl text-center max-w-2xl text-gray-200 mb-8"
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 0.3, duration: 0.5 }}
//       >
//         List your property with us and reach thousands of potential buyers instantly. It's quick, easy, and free to start!
//       </motion.p>

//       {/* CTA Button */}
//       <motion.div
//         initial={{ opacity: 0, scale: 0.9 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ delay: 0.6, duration: 0.4 }}
//       >
//         <Button className="bg-white text-blue-900 font-bold px-6 py-3 rounded-full hover:scale-105 transition-transform duration-300">
//           <FaHome className="inline mr-2" />
//           List Your Property
//         </Button>
//       </motion.div>

//       {/* Features Grid */}
//       <div className="mt-16 w-full max-w-6xl px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//         {[
//           { title: "Free Listing", desc: "No hidden charges. List your property for free.", icon: "📋" },
//           { title: "Wider Reach", desc: "Reach verified buyers across cities.", icon: "🌍" },
//           { title: "Quick Response", desc: "Get inquiries faster through our portal.", icon: "⚡" },
//         ].map((feature, index) => (
//           <motion.div
//             key={index}
//             className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 text-center"
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ delay: index * 0.2, duration: 0.5 }}
//             viewport={{ once: true }}
//           >
//             <div className="text-4xl mb-2">{feature.icon}</div>
//             <h3 className="text-lg font-semibold mb-1">{feature.title}</h3>
//             <p className="text-gray-300">{feature.desc}</p>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default SellPropertyLanding;


// import React from 'react';
// import { motion } from 'framer-motion';
// import { FaHome } from "react-icons/fa";

// const SellPropertyLanding = () => {
//   return (
//     <div className="bg-gradient-to-br from-blue-950 to-blue-800 text-white min-h-screen flex flex-col justify-center items-center px-4 py-10">
      
//       {/* Header */}
//       <motion.h1
//         className="text-3xl md:text-5xl font-bold text-center mb-6"
//         initial={{ opacity: 0, y: -40 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//       >
//         Have a Property to Sell?
//       </motion.h1>

//       {/* Subtext */}
//       <motion.p
//         className="text-lg md:text-xl text-center max-w-2xl text-gray-200 mb-8"
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 0.3, duration: 0.5 }}
//       >
//         List your property with us and reach thousands of potential buyers instantly. It's quick, easy, and free to start!
//       </motion.p>

//       {/* CTA Button */}
//       <motion.div
//         initial={{ opacity: 0, scale: 0.9 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ delay: 0.6, duration: 0.4 }}
//       >
//         <button className="bg-white text-blue-900 font-bold px-6 py-3 rounded-full hover:scale-105 transition-transform duration-300">
//           <FaHome className="inline mr-2" />
//           List Your Property
//         </button>
//       </motion.div>

//       {/* Features Grid */}
//       <div className="mt-16 w-full max-w-6xl px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//         {[
//           {
//             title: "Free Listing",
//             desc: "No hidden charges. List your property for free.",
//             icon: "📋"
//           },
//           {
//             title: "Wider Reach",
//             desc: "Reach verified buyers across cities.",
//             icon: "🌍"
//           },
//           {
//             title: "Quick Response",
//             desc: "Get inquiries faster through our portal.",
//             icon: "⚡"
//           }
//         ].map((feature, index) => (
//           <motion.div
//             key={index}
//             className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 text-center"
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ delay: index * 0.2, duration: 0.5 }}
//             viewport={{ once: true }}
//           >
//             <div className="text-4xl mb-2">{feature.icon}</div>
//             <h3 className="text-lg font-semibold mb-1">{feature.title}</h3>
//             <p className="text-gray-300">{feature.desc}</p>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default SellPropertyLanding;

// import React from 'react'; 
// import { motion } from 'framer-motion';
// import { FaHome } from "react-icons/fa";

// const SellPropertyLanding = () => {
//   return (
//     <motion.div
//       className="bg-white text-blue-900 min-h-screen flex flex-col justify-center items-center px-4 py-10"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 0.8 }}
//     >
//       {/* Header */}
//       <motion.h1
//         className="text-3xl md:text-5xl font-bold text-center mb-6"
//         initial={{ opacity: 0, y: -40 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//       >
//         Have a Property to Sell?
//       </motion.h1>

//       {/* Subtext */}
//       <motion.p
//         className="text-lg md:text-xl text-center max-w-2xl text-gray-600 mb-8"
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 0.3, duration: 0.5 }}
//       >
//         List your property with us and reach thousands of potential buyers instantly. It's quick, easy, and free to start!
//       </motion.p>

//       {/* CTA Button */}
//       <motion.div
//         initial={{ opacity: 0, scale: 0.9 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ delay: 0.6, duration: 0.4 }}
//       >
//         <button className="bg-blue-900 text-white font-bold px-6 py-3 rounded-full hover:scale-105 transition-transform duration-300 shadow-lg">
//           <FaHome className="inline mr-2" />
//           List Your Property
//         </button>
//       </motion.div>

//       {/* Features Grid */}
//       <div className="mt-16 w-full max-w-6xl px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//         {[
//           {
//             title: "Free Listing",
//             desc: "No hidden charges. List your property for free.",
//             icon: "📋"
//           },
//           {
//             title: "Wider Reach",
//             desc: "Reach verified buyers across cities.",
//             icon: "🌍"
//           },
//           {
//             title: "Quick Response",
//             desc: "Get inquiries faster through our portal.",
//             icon: "⚡"
//           }
//         ].map((feature, index) => (
//           <motion.div
//             key={index}
//             className="bg-blue-50 p-6 rounded-2xl border border-blue-200 text-center shadow-md"
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ delay: index * 0.2, duration: 0.5 }}
//             viewport={{ once: true }}
//           >
//             <div className="text-4xl mb-2">{feature.icon}</div>
//             <h3 className="text-lg font-semibold mb-1">{feature.title}</h3>
//             <p className="text-gray-600">{feature.desc}</p>
//           </motion.div>
//         ))}
//       </div>
//     </motion.div>
//   );
// };

// export default SellPropertyLanding;


// import React from 'react';
// import { motion } from 'framer-motion';
// import { FaHome } from "react-icons/fa";

// const SellPropertyLanding = () => {
//   return (
//     <motion.div
//       className="bg-white text-blue-900 min-h-screen flex flex-col justify-center items-center px-4 py-10"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 0.8 }}
//     >
//       {/* Header */}
//       <motion.h1
//         className="text-3xl md:text-5xl font-bold text-center mb-6"
//         initial={{ opacity: 0, y: -40 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//       >
//         Have a Property to Sell?
//       </motion.h1>

//       {/* Subtext */}
//       <motion.p
//         className="text-lg md:text-xl text-center max-w-2xl text-gray-600 mb-8"
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 0.3, duration: 0.5 }}
//       >
//         List your property with us and reach thousands of potential buyers instantly. It's quick, easy, and free to start!
//       </motion.p>

//       {/* CTA Button */}
//       <motion.div
//         initial={{ opacity: 0, scale: 0.9 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ delay: 0.6, duration: 0.4 }}
//       >
//         <button className="bg-blue-900 text-white font-bold px-6 py-3 rounded-full hover:scale-105 transition-transform duration-300 shadow-lg">
//           <FaHome className="inline mr-2" />
//           List Your Property
//         </button>
//       </motion.div>

//       {/* Features Grid */}
//       <div className="mt-16 w-full max-w-6xl px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//         {[
//           {
//             title: "Free Listing",
//             desc: "No hidden charges. List your property for free.",
//             icon: "📋"
//           },
//           {
//             title: "Wider Reach",
//             desc: "Reach verified buyers across cities.",
//             icon: "🌍"
//           },
//           {
//             title: "Quick Response",
//             desc: "Get inquiries faster through our portal.",
//             icon: "⚡"
//           }
//         ].map((feature, index) => (
//           <motion.div
//             key={index}
//             className="bg-blue-50 p-6 rounded-2xl border border-blue-200 text-center shadow-md"
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ delay: index * 0.2, duration: 0.5 }}
//             viewport={{ once: true }}
//           >
//             <div className="text-4xl mb-3">{feature.icon}</div>
//             <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
//             <p className="text-gray-600">{feature.desc}</p>
//           </motion.div>
//         ))}
//       </div>
//     </motion.div>
//   );
// };

// export default SellPropertyLanding;


// import React from 'react';
// import { motion } from 'framer-motion';
// import { FaHome } from "react-icons/fa";

// const SellPropertyLanding = () => {
//   return (
//     <motion.div
//       className="bg-white text-blue-900 min-h-screen flex flex-col justify-center items-center px-4 py-10"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 0.8 }}
//     >
//       {/* Header */}
//       <motion.h1
//         className="text-3xl md:text-5xl font-bold text-center mb-6"
//         initial={{ opacity: 0, y: -40 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//       >
//         Have a Property to Sell?
//       </motion.h1>

//       {/* Subtext */}
//       <motion.p
//         className="text-lg md:text-xl text-center max-w-2xl text-gray-600 mb-8"
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 0.3, duration: 0.5 }}
//       >
//         List your property with us and reach thousands of potential buyers instantly. It's quick, easy, and free to start!
//       </motion.p>

//       {/* CTA Button */}
//       <motion.div
//         initial={{ opacity: 0, scale: 0.9 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ delay: 0.6, duration: 0.4 }}
//       >
//         <button className="bg-blue-900 text-white font-bold px-6 py-3 rounded-full hover:scale-105 transition-transform duration-300 shadow-lg">
//           <FaHome className="inline mr-2" />
//           List Your Property
//         </button>
//       </motion.div>

//       {/* Features Grid */}
//       <div className="mt-16 w-full max-w-6xl px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//         {[
//           {
//             title: "Free Listing",
//             desc: "No hidden charges. List your property for free.",
//             icon: "📋"
//           },
//           {
//             title: "Wider Reach",
//             desc: "Reach verified buyers across cities.",
//             icon: "🌍"
//           },
//           {
//             title: "Quick Response",
//             desc: "Get inquiries faster through our portal.",
//             icon: "⚡"
//           }
//         ].map((feature, index) => (
//           <motion.div
//             key={index}
//             className="bg-blue-50 p-6 rounded-2xl border border-blue-200 text-center shadow-md"
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ delay: index * 0.2, duration: 0.5 }}
//             viewport={{ once: true }}
//           >
//             <div className="text-4xl mb-3">{feature.icon}</div>
//             <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
//             <p className="text-gray-600">{feature.desc}</p>
//           </motion.div>
//         ))}
//       </div>
//     </motion.div>
//   );
// };

// export default SellPropertyLanding;


import React from 'react';
import { motion } from 'framer-motion';
import { FaHome } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const features = [
  {
    title: 'Free Listing',
    desc: 'No hidden charges. List your property for free.',
    icon: '📋',
  },
  {
    title: 'Wider Reach',
    desc: 'Reach verified buyers across cities.',
    icon: '🌍',
  },
  {
    title: 'Quick Response',
    desc: 'Get inquiries faster through our portal.',
    icon: '⚡',
  },
];

const SellPropertyLanding = () => {
  // Initialize navigate hook
  const navigate = useNavigate();

  // Handler function to navigate to the new landing page
  const handleListProperty = () => {
    navigate("/list-your-property");
  };

  return (
    <motion.div
      className="bg-white min-h-screen flex flex-col justify-center items-center px-4 py-12 text-blue-900"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Heading */}
      <motion.h1
        className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-6"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Have a Property to Sell?
      </motion.h1>

      {/* Subtext */}
      <motion.p
        className="text-lg sm:text-xl text-center max-w-2xl text-gray-600 mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        List your property with us and reach thousands of potential buyers instantly. It's quick, easy, and free to start!
      </motion.p>

      {/* CTA Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.4 }}
      >
        <button
          onClick={handleListProperty}
          className="bg-blue-900 text-white font-bold px-6 py-3 rounded-full hover:scale-105 transition-transform duration-300 shadow-lg flex items-center gap-2"
        >
          <FaHome className="inline mr-2" />
          List Your Property
        </button>
      </motion.div>

      {/* Features Grid */}
      <div className="mt-16 w-full max-w-6xl px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="bg-blue-50 p-6 rounded-2xl border border-blue-200 text-center shadow-md hover:shadow-xl transition duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="text-4xl mb-3">{feature.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.desc}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default SellPropertyLanding;
