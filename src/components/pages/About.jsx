// import React from 'react';

// const About = () => (
//   <div className="p-6 text-black max-w-4xl mx-auto">
//     <h1 className="text-3xl font-bold mb-4 border-b border-purple-500 pb-2">About Us</h1>
//     <p className="text-lg mb-2">
//       Welcome to <span className="font-semibold">Housing.com</span> – your go-to real estate platform.
//     </p>
//     <p className="text-base">
//       Whether you're buying, selling, or renting a home, we’re here to help you every step of the way. 
//       We aim to make the process easy, fast, and secure with cutting-edge tech and dedicated support.
//     </p>
//   </div>
// );

// export default About;


// import React from 'react';

// const AboutUs = () => {
//   return (
//     <div className="min-h-screen bg-gray-50 text-gray-800 px-4 py-10 md:px-16 lg:px-32">
//       <div className="max-w-7xl mx-auto">
//         <h1 className="text-4xl font-bold text-center text-indigo-700 mb-6">
//           About Our Real Estate Company
//         </h1>

//         <p className="text-center text-lg text-gray-600 mb-12">
//           Helping you find your dream home with trust, transparency, and technology.
//         </p>

//         {/* Company Overview */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
//           <div>
//             <h2 className="text-2xl font-semibold mb-4">Who We Are</h2>
//             <p className="text-gray-700 mb-4">
//               We are a full-service real estate platform committed to making property
//               buying, selling, and renting seamless and efficient. With a wide range of verified listings and a tech-driven approach, we bring clarity to every real estate transaction.
//             </p>
//             <p className="text-gray-700">
//               Whether you're looking for a cozy apartment, a luxurious villa, or a commercial space — our platform is built to serve all your property needs.
//             </p>
//           </div>
//           <div className="flex justify-center">
//             <img
//               src="https://img.freepik.com/free-vector/real-estate-agent-concept-illustration_114360-9029.jpg"
//               alt="Real Estate Team"
//               className="rounded-xl shadow-lg w-full max-w-md"
//             />
//           </div>
//         </div>

//         {/* Mission and Vision */}
//         <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-10">
//           <div className="bg-white p-6 rounded-lg shadow">
//             <h3 className="text-xl font-bold text-indigo-600 mb-2">Our Mission</h3>
//             <p className="text-gray-700">
//               To simplify real estate by using technology to empower buyers, sellers, and renters with data, tools, and personalized support.
//             </p>
//           </div>
//           <div className="bg-white p-6 rounded-lg shadow">
//             <h3 className="text-xl font-bold text-indigo-600 mb-2">Our Vision</h3>
//             <p className="text-gray-700">
//               To become the most trusted real estate platform in India, known for innovation, integrity, and customer satisfaction.
//             </p>
//           </div>
//         </div>

//         {/* Why Choose Us */}
//         <div className="mt-16">
//           <h2 className="text-2xl font-semibold text-center mb-8 text-indigo-700">Why Choose Us?</h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             <div className="bg-white p-6 rounded-lg shadow text-center">
//               <h4 className="font-bold text-lg mb-2">Verified Listings</h4>
//               <p className="text-gray-600">Only 100% verified properties to ensure transparency and trust.</p>
//             </div>
//             <div className="bg-white p-6 rounded-lg shadow text-center">
//               <h4 className="font-bold text-lg mb-2">Expert Assistance</h4>
//               <p className="text-gray-600">Our support team helps you at every step of the property journey.</p>
//             </div>
//             <div className="bg-white p-6 rounded-lg shadow text-center">
//               <h4 className="font-bold text-lg mb-2">Pan-India Coverage</h4>
//               <p className="text-gray-600">Serving across major cities and towns in Uttar Pradesh and beyond.</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AboutUs;



import React from 'react';
import { motion } from 'framer-motion';

const fadeIn = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay },
  viewport: { once: true },
});

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 px-4 py-10 md:px-16 lg:px-32">
      <div className="max-w-7xl mx-auto">
        <motion.h1
          className="text-4xl font-bold text-center text-indigo-700 mb-6"
          {...fadeIn(0)}
        >
          About Our Real Estate Company
        </motion.h1>

        <motion.p
          className="text-center text-lg text-gray-600 mb-12"
          {...fadeIn(0.2)}
        >
          Helping you find your dream home with trust, transparency, and technology.
        </motion.p>

        {/* Company Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div {...fadeIn(0.3)}>
            <h2 className="text-2xl font-semibold mb-4">Who We Are</h2>
            <p className="text-gray-700 mb-4">
              We are a full-service real estate platform committed to making property
              buying, selling, and renting seamless and efficient. With a wide range of verified listings and a tech-driven approach, we bring clarity to every real estate transaction.
            </p>
            <p className="text-gray-700">
              Whether you're looking for a cozy apartment, a luxurious villa, or a commercial space — our platform is built to serve all your property needs.
            </p>
          </motion.div>

          <motion.div className="flex justify-center" {...fadeIn(0.5)}>
            <img
              src="https://img.freepik.com/free-vector/real-estate-agent-concept-illustration_114360-9029.jpg"
              alt="Real Estate Team"
              className="rounded-xl shadow-lg w-full max-w-md"
            />
          </motion.div>
        </div>

        {/* Mission and Vision */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-10">
          <motion.div className="bg-white p-6 rounded-lg shadow" {...fadeIn(0.3)}>
            <h3 className="text-xl font-bold text-indigo-600 mb-2">Our Mission</h3>
            <p className="text-gray-700">
              To simplify real estate by using technology to empower buyers, sellers, and renters with data, tools, and personalized support.
            </p>
          </motion.div>

          <motion.div className="bg-white p-6 rounded-lg shadow" {...fadeIn(0.5)}>
            <h3 className="text-xl font-bold text-indigo-600 mb-2">Our Vision</h3>
            <p className="text-gray-700">
              To become the most trusted real estate platform in India, known for innovation, integrity, and customer satisfaction.
            </p>
          </motion.div>
        </div>

        {/* Why Choose Us */}
        <motion.div className="mt-16" {...fadeIn(0.3)}>
          <h2 className="text-2xl font-semibold text-center mb-8 text-indigo-700">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[ 
              {
                title: "Verified Listings",
                desc: "Only 100% verified properties to ensure transparency and trust.",
              },
              {
                title: "Expert Assistance",
                desc: "Our support team helps you at every step of the property journey.",
              },
              {
                title: "Pan-India Coverage",
                desc: "Serving across major cities and towns in Uttar Pradesh and beyond.",
              },
            ].map((card, idx) => (
              <motion.div
                key={idx}
                className="bg-white p-6 rounded-lg shadow text-center"
                {...fadeIn(0.2 + idx * 0.2)}
              >
                <h4 className="font-bold text-lg mb-2">{card.title}</h4>
                <p className="text-gray-600">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutUs;
