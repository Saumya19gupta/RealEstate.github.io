import React, { useState } from "react";
import { motion } from "framer-motion";

const policies = [
  {
    title: "1. Information We Collect",
    content:
      "We collect personal information such as your name, contact details, and browsing activity when you interact with our site.",
  },
  {
    title: "2. How We Use Your Information",
    content:
      "Your data helps us improve our services, personalize user experiences, and communicate with you more effectively.",
  },
  {
    title: "3. Sharing Your Information",
    content:
      "We do not sell your data. We may share it with service providers or legal authorities as required.",
  },
  {
    title: "4. Data Security",
    content:
      "We use strong encryption and security practices to protect your information from unauthorized access.",
  },
  {
    title: "5. Your Rights",
    content:
      "You have the right to access, modify, or delete your personal information. Contact us for any such request.",
  },
];

const PrivacyPolicy = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="bg-gray-50 min-h-screen py-10 px-5 md:px-24">
      <motion.h1
        className="text-4xl font-bold text-center text-blue-700 mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Privacy Policy
      </motion.h1>

      <motion.p
        className="text-center text-gray-600 max-w-2xl mx-auto mb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        Your privacy is important to us. Learn how we collect, use, and safeguard your information when you use our website.
      </motion.p>

      <div className="max-w-4xl mx-auto space-y-6">
        {policies.map((item, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-lg shadow-md"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <button
              onClick={() => toggleAccordion(index)}
              className="w-full text-left px-6 py-4 text-lg font-semibold text-blue-700 hover:bg-blue-50 transition"
            >
              {item.title}
            </button>
            {activeIndex === index && (
              <div className="px-6 pb-4 text-gray-700 text-sm">{item.content}</div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Call to Action Section */}
      <motion.div
        className="mt-16 bg-blue-100 text-center p-8 rounded-xl"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <h2 className="text-2xl font-semibold text-blue-800 mb-2">Still Have Questions?</h2>
        <p className="text-gray-700 mb-4">
          If you're unsure about any part of our privacy policy, reach out to our team for clarification.
        </p>
        <a
          href="/contact"
          className="inline-block bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
        >
          Contact Us
        </a>
      </motion.div>
    </div>
  );
};

export default PrivacyPolicy;
