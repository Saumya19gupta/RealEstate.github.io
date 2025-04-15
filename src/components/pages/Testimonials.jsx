import React from "react";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

const testimonials = [
    {
        name: "Rahul Sharma",
        position: "Home Buyer",
        feedback:
            "The process was seamless. The team helped me find the perfect property within my budget and preferences.",
        rating: 5,
        image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
        name: "Anjali Verma",
        position: "Investor",
        feedback:
            "Highly professional and transparent service. I got great ROI from my commercial property.",
        rating: 4,
        image: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
        name: "Vikram Singh",
        position: "Seller",
        feedback:
            "They sold my house in just 10 days! Super impressed by their marketing and dedication.",
        rating: 5,
        image: "https://randomuser.me/api/portraits/men/54.jpg",
    },
];

const Testimonials = () => {
    return (
        <div className="bg-gradient-to-br from-purple-50 to-indigo-50 py-16 px-4 md:px-20">
            <motion.h2
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl font-bold text-center text-indigo-700 mb-12"
            >
                What Our Clients Say
            </motion.h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                {testimonials.map((testimonial, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                        className="bg-white shadow-xl rounded-2xl p-6 flex flex-col items-center text-center hover:shadow-2xl transition duration-300"
                    >
                        <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="w-20 h-20 rounded-full object-cover border-4 border-indigo-200 mb-4"
                        />
                        <h3 className="text-lg font-bold text-indigo-800">{testimonial.name}</h3>
                        <p className="text-sm text-gray-500 mb-2">{testimonial.position}</p>
                        <div className="flex justify-center mb-3">
                            {[...Array(testimonial.rating)].map((_, i) => (
                                <FaStar key={i} className="text-yellow-400" />
                            ))}
                        </div>
                        <p className="text-gray-600 italic">“{testimonial.feedback}”</p>
                    </motion.div>
                ))}
            </div>

            {/* Call to Action */}
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="text-center mt-14"
            >
                <h3 className="text-xl font-semibold mb-2 text-indigo-800">
                    Ready to share your experience?
                </h3>
                <button className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition">
                    Submit Your Testimonial
                </button>
            </motion.div>
        </div>
    );
};

export default Testimonials;
