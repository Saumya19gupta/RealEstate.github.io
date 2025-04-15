import React, { useState } from "react";
import { motion } from "framer-motion";

export default function CustomerSignIn() {
  const [loginMethod, setLoginMethod] = useState("phone"); // phone | email
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-4xl"
      >
        {/* Left Side - Info / Visual */}
        <div className="w-full md:w-1/2 bg-blue-50 p-8 flex flex-col items-center justify-center text-center">
          <h2 className="text-2xl font-bold text-blue-600">
            Welcome Back!
          </h2>
          <p className="text-gray-500 mt-2">
            Login to continue your Real Estate journey.
          </p>
        </div>

        {/* Right Side - Login Form */}
        <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
          <h2 className="text-2xl font-bold text-gray-700 mb-4">Customer Login</h2>

          {/* Login Method Switch */}
          <div className="flex gap-4 mb-6">
            <button
              onClick={() => setLoginMethod("phone")}
              className={`px-4 py-2 rounded-full text-sm font-medium border ${
                loginMethod === "phone"
                  ? "bg-blue-500 text-white border-blue-500"
                  : "text-gray-600 border-gray-300"
              }`}
            >
              Phone
            </button>
            <button
              onClick={() => setLoginMethod("email")}
              className={`px-4 py-2 rounded-full text-sm font-medium border ${
                loginMethod === "email"
                  ? "bg-blue-500 text-white border-blue-500"
                  : "text-gray-600 border-gray-300"
              }`}
            >
              Email
            </button>
          </div>

          {/* Phone Login */}
          {loginMethod === "phone" && (
            <div>
              <label className="block text-black text-sm font-medium">
                Enter your phone number
              </label>
              <div className="flex mt-2 border rounded-lg overflow-hidden shadow-sm">
                <select className="p-3 bg-gray-200 border-r focus:outline-none text-black">
                  <option>+91</option>
                  <option>+1</option>
                  <option>+44</option>
                </select>
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="p-3 w-full focus:outline-none text-black"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full mt-6 bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition"
              >
                {phone ? `Get OTP for ${phone}` : "Get OTP"}
              </motion.button>
            </div>
          )}

          {/* Email Login */}
          {loginMethod === "email" && (
            <div>
              <label className="block text-black text-sm font-medium">
                Enter your email address
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                className="p-3 w-full mt-2 border rounded-lg shadow-sm focus:outline-none text-black"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full mt-6 bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition"
              >
                {email ? `Send OTP to ${email}` : "Send OTP"}
              </motion.button>
            </div>
          )}

          {/* Terms & Conditions */}
          <p className="text-gray-400 text-xs text-center mt-4">
            By logging in, you agree to our{" "}
            <a href="#" className="text-blue-500 underline">
              Terms & Conditions
            </a>
          </p>
        </div>
      </motion.div>
    </div>
  );
}


// import React, { useState } from "react";
// import { motion } from "framer-motion";
// // import Login from "/src/img/loginDweb.svg";
// // import Logopage from "/src/img/logoupdate.png";

// export default function Login() {
//   const [phone, setPhone] = useState(""); // Phone number state

//   // Input box me number allow karne ke liye handler
//   const handlePhoneChange = (e) => {
//     setPhone(e.target.value); // State update karega bina kisi restriction ke
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100">
//       <motion.div
//         initial={{ opacity: 0, y: 30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-4xl"
//       >
//         {/* Left Side - App Promo */}
//         <div className="w-full md:w-1/2 bg-gray-50 p-8 flex flex-col items-center justify-center text-center">
//           {/* <img src={Login} alt="Phone UI" className="w-full drop-shadow-lg" /> */}
//           <h2 className="text-2xl font-bold text-gray-700">
//             Redefine your <span className="text-blue-500">investing experience</span>
//           </h2>
//           <p className="text-gray-500 mt-2">
//             Install the Real Esate app and enjoy analysis on the go.
//           </p>
//         </div>

//         {/* Right Side - Login Form */}
//         <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
//           <h2 className="text-2xl font-bold text-gray-700 flex items-center mb-2">
//             {/* <img src={Logopage} alt="Tickertape Logo" className="w-32 mr-4" /> */}
//           </h2>
//           <p className="text-gray-500 text-sm mb-4">from smallcase</p>

//           {/* Phone Input */}
//           <div>
//             <label className="block text-black text-sm font-medium">
//               Enter your phone number
//             </label>
//             <div className="flex mt-2 border rounded-lg overflow-hidden shadow-sm">
//               <select className="p-3 bg-gray-200 border-r focus:outline-none text-black">
//                 <option>+91</option>
//                 <option>+1</option>
//                 <option>+44</option>
//               </select>

//               {/* Input box me value aur handler bind kiya */}
//               <input
//                 type="tel"
//                 placeholder="Phone Number"
//                 className="p-3 w-full focus:outline-none text-black"
//                 value={phone}
//                 onChange={handlePhoneChange}
//               />
//             </div>
//           </div>

//           {/* OTP Button (Dynamic Text ke saath) */}
//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             className="w-full mt-6 bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition"
//           >
//             {phone ? `Get OTP for ${phone}` : "Get OTP"}
//           </motion.button>

//           {/* Terms & Conditions */}
//           <p className="text-gray-400 text-xs text-center mt-3">
//             By logging in, you agree to our{" "}
//             <a href="#" className="text-blue-500 underline">
//               Terms & Conditions
//             </a>
//           </p>
//         </div>
//       </motion.div>
//     </div>
//   );
// }




