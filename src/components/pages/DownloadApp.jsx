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
//           Buy, Rent and Sell Home from app
//           Anytime! Anywhere!
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
import imgapp from "/src/img/downloadimg.jpg";

const PayRent = () => {
  const [mobile, setMobile] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSendLink = () => {
    if (mobile.length === 10) {
      setSubmitted(true);
    } else {
      alert('Please enter a valid 10-digit mobile number.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-tr from-fuchsia-500 to-violet-600 flex items-center justify-center px-4">
      <motion.div
        className="bg-white rounded-3xl shadow-xl p-8 md:p-12 flex flex-col md:flex-row gap-10 items-center max-w-5xl w-full"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        {/* Left Section */}
        <motion.div
          className="flex-1"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Buy, Rent and Sell Home from app<br />
            Anytime! Anywhere!
          </motion.h1>

          <motion.p
            className="text-gray-600 text-lg mb-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Download our top-rated app, made just for you!
          </motion.p>

          <motion.p
            className="text-gray-500 mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            It’s free, easy and smart.
          </motion.p>

          {!submitted ? (
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
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
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              App link sent to +91-{mobile}
            </motion.p>
          )}
        </motion.div>

        {/* Right Image Section */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.7 }}
        >
          <img
            src={imgapp}
            alt="App Promotion"
            className="w-full max-w-md mx-auto rounded-xl"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default PayRent;
