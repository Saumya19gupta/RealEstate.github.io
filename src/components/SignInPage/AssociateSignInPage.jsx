import React, { useState } from "react";
import { motion } from "framer-motion";

export default function AssociateSignIn() {
  const [associateID, setAssociateID] = useState("");
  const [paymentStatus, setPaymentStatus] = useState("paid");

  const handleIDChange = (e) => setAssociateID(e.target.value);
  const handlePaymentChange = (e) => setPaymentStatus(e.target.value);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-4xl"
      >
        {/* Left Side - Promo or Visual */}
        <div className="w-full md:w-1/2 bg-blue-50 p-8 flex flex-col items-center justify-center text-center">
          <h2 className="text-2xl font-bold text-blue-600">
            Associate <span className="text-gray-700">Sign In</span>
          </h2>
          <p className="text-gray-500 mt-2">
            Choose your payment status and enter your ID to continue.
          </p>
        </div>

        {/* Right Side - Form */}
        <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
          {/* Associate ID Input */}
          <div className="mb-4">
            <label className="block text-black text-sm font-medium mb-1">
              Associate ID or Email
            </label>
            <input
              type="text"
              placeholder="Enter your ID"
              className="p-3 w-full border rounded-lg shadow-sm focus:outline-none text-black"
              value={associateID}
              onChange={handleIDChange}
            />
          </div>

          {/* Radio Button Selection */}
          <div className="mb-4">
            <label className="block text-black text-sm font-medium mb-2">
              Payment Status
            </label>
            <div className="flex gap-4">
              <label className="flex items-center gap-2 text-black">
                <input
                  type="radio"
                  value="paid"
                  checked={paymentStatus === "paid"}
                  onChange={handlePaymentChange}
                />
                Paid
              </label>
              <label className="flex items-center gap-2 text-black">
                <input
                  type="radio"
                  value="unpaid"
                  checked={paymentStatus === "unpaid"}
                  onChange={handlePaymentChange}
                />
                Unpaid
              </label>
            </div>
          </div>

          {/* Submit Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full mt-4 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
          >
            {paymentStatus === "paid"
              ? `Proceed as Paid Associate`
              : `Proceed as Unpaid Associate`}
          </motion.button>

          {/* Terms */}
          <p className="text-gray-400 text-xs text-center mt-3">
            By continuing, you agree to our{" "}
            <a href="#" className="text-blue-500 underline">
              Terms & Conditions
            </a>
          </p>
        </div>
      </motion.div>
    </div>
  );
}



// import React, { useState } from 'react';

// const AssociateSignInPage = () => {
//     const [formData, setFormData] = useState({
//         email: '',
//         password: '',
//     });

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({
//             ...formData,
//             [name]: value,
//         });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         // Handle sign-in logic here
//         console.log('Form submitted:', formData);
//     };

//     return (
//         <div className="associate-sign-in-page">
//             <h2>Associate Sign In</h2>
//             <form onSubmit={handleSubmit}>
//                 <div>
//                     <label htmlFor="email">Email:</label>
//                     <input
//                         type="email"
//                         id="email"
//                         name="email"
//                         value={formData.email}
//                         onChange={handleChange}
//                         required
//                     />
//                 </div>
//                 <div>
//                     <label htmlFor="password">Password:</label>
//                     <input
//                         type="password"
//                         id="password"
//                         name="password"
//                         value={formData.password}
//                         onChange={handleChange}
//                         required
//                     />
//                 </div>
//                 <button type="submit">Sign In</button>
//             </form>
//         </div>
//     );
// };

// export default AssociateSignInPage;