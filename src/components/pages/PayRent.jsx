// src/pages/PayRent.jsx

// import React from 'react';
// import { useState, useEffect } from 'react';

// const PayRent = () => {
//     return (
//       <div className="p-4">
//         <h1 className="text-xl font-bold">Pay Rent</h1>
//         <p>Welcome to the rent payment portal!</p>
//       </div>
//     );
//   };
  
//   export default PayRent;
  

// import React, { useState } from 'react';
// // import imgapp from './src/img/download.jpg'
// import imgapp from "/src/img/downloadimg.jpg"; // Adjust the path as necessary

// const PayRent = () => {
//   const [mobile, setMobile] = useState('');
//   const [submitted, setSubmitted] = useState(false);

//   const handleSendLink = () => {
//     if (mobile.length === 10) {
//       setSubmitted(true);
//       // Here you can integrate SMS API or just simulate success
//     } else {
//       alert('Please enter a valid 10-digit mobile number.');
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-tr from-fuchsia-500 to-violet-600 flex items-center justify-center px-4">
//       <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 flex flex-col md:flex-row gap-10 items-center max-w-5xl w-full">
        
//         {/* Left Text Section */}
//         <div className="flex-1">
//           <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
//             Pay Rent with Ease and Convenience 
//           </h1>
//           <p className="text-gray-600 text-lg mb-2">
//             Download our top-rated app, made just for you!
//           </p>
//           <p className="text-gray-500 mb-6">
//             It’s free, easy and smart.
//           </p>

//           {!submitted ? (
//             <div className="flex flex-col sm:flex-row gap-4">
//               <input
//                 type="tel"
//                 placeholder="Enter your Mobile Number"
//                 className="border rounded-lg p-3 w-full sm:w-64 text-gray-800"
//                 value={mobile}
//                 onChange={(e) => setMobile(e.target.value)}
//               />
//               <button
//                 onClick={handleSendLink}
//                 className="bg-violet-600 text-white px-6 py-3 rounded-lg hover:bg-violet-700 transition"
//               >
//                 Send App Link
//               </button>
//             </div>
//           ) : (
//             <p className="text-green-600 text-lg font-semibold">
//               App link sent to +91-{mobile}
//             </p>
//           )}
//         </div>

//         {/* Right Image Section */}
//         <div className="flex-1">
//           <img
//             src={imgapp}
//             alt="App Promotion"
//             className="w-full max-w-md mx-auto rounded-xl"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PayRent;


import React, { useState } from 'react';
import { motion } from 'framer-motion';
import imgapp from "/src/img/downloadimg.jpg"; // Ensure correct path

const fadeIn = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay },
  viewport: { once: true },
});

const PayRent = () => {
  const [mobile, setMobile] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSendLink = () => {
    if (mobile.length === 10) {
      setSubmitted(true);
      // You can integrate SMS API here
    } else {
      alert('Please enter a valid 10-digit mobile number.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-tr from-fuchsia-500 to-violet-600 flex items-center justify-center px-4">
      <motion.div
        className="bg-white rounded-3xl shadow-xl p-8 md:p-12 flex flex-col md:flex-row gap-10 items-center max-w-5xl w-full"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        {/* Left Text Section */}
        <div className="flex-1">
          <motion.h1
            className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
            {...fadeIn(0)}
          >
            Pay Rent with Ease and Convenience
          </motion.h1>
          <motion.p className="text-gray-600 text-lg mb-2" {...fadeIn(0.2)}>
            Download our top-rated app, made just for you!
          </motion.p>
          <motion.p className="text-gray-500 mb-6" {...fadeIn(0.3)}>
            It’s free, easy and smart.
          </motion.p>

          {!submitted ? (
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              {...fadeIn(0.4)}
            >
              <input
                type="tel"
                placeholder="Enter your Mobile Number"
                className="border rounded-lg p-3 w-full sm:w-64 text-gray-800"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
              />
              <button
                onClick={handleSendLink}
                className="bg-violet-600 text-white px-6 py-3 rounded-lg hover:bg-violet-700 transition"
              >
                Send App Link
              </button>
            </motion.div>
          ) : (
            <motion.p
              className="text-green-600 text-lg font-semibold"
              {...fadeIn(0.4)}
            >
              App link sent to +91-{mobile}
            </motion.p>
          )}
        </div>

        {/* Right Image Section */}
        <motion.div className="flex-1" {...fadeIn(0.5)}>
          <img
            src={imgapp}
            alt="App Promotion"
            className="w-full max-w-md mx-auto rounded-xl shadow-md"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default PayRent;
