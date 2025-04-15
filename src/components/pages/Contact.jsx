// import React from 'react';

// const Contact = () => {
//     return (
//         <div className="p-5">
//             <h1 className="text-2xl font-bold text-center mb-6">Contact Us</h1>
//             <form className="max-w-lg mx-auto bg-white shadow-md rounded-lg p-6">
//                 <div className="mb-4">
//                     <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Name:</label>
//                     <input
//                         type="text"
//                         id="name"
//                         name="name"
//                         className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     />
//                 </div>
//                 <div className="mb-4">
//                     <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email:</label>
//                     <input
//                         type="email"
//                         id="email"
//                         name="email"
//                         className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     />
//                 </div>
//                 <div className="mb-4">
//                     <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message:</label>
//                     <textarea
//                         id="message"
//                         name="message"
//                         rows="5"
//                         className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     ></textarea>
//                 </div>
//                 <button
//                     type="submit"
//                     className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 >
//                     Submit
//                 </button>
//             </form>
//         </div>
//     );
// };

// export default Contact;


import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
    return (
        <div className="min-h-screen bg-gradient-to-r from-indigo-50 to-purple-50 py-10 px-5 sm:px-8 md:px-16 lg:px-32">
            <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl font-bold text-center text-indigo-700 mb-10"
            >
                Contact Us
            </motion.h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {/* Contact Form */}
                <motion.form
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="bg-white shadow-xl rounded-xl p-6"
                >
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Name:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message:</label>
                        <textarea
                            id="message"
                            name="message"
                            rows="5"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            required
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 transition"
                    >
                        Submit
                    </button>
                </motion.form>

                {/* Contact Info + Map */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col justify-between"
                >
                    <div className="bg-white rounded-xl shadow-xl p-6 mb-6 space-y-4 text-gray-800">
                        <h2 className="text-xl font-bold text-indigo-700">Get in Touch</h2>
                        <p><strong>Address:</strong> 123 Real Estate Avenue, Prayagraj, UP - 211001</p>
                        <p><strong>Phone:</strong> +91 98765 43210</p>
                        <p><strong>Email:</strong> info@realestateco.in</p>
                    </div>

                    <div className="w-full h-64 rounded-xl overflow-hidden shadow-lg">
                        <iframe
                            title="Location Map"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.8455534233575!2d81.8463116153852!3d25.435801023503756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399adfd84a11cc55%3A0x44c8c98e0937cd2c!2sAllahabad%20(Prayagraj)%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1648453798711!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Contact;
