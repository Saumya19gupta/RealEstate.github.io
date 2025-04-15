import React, { useState } from "react";
import { motion } from "framer-motion";

const terms = [
  {
    title: "1. Acceptance of Terms",
    content:
      "By accessing or using our website, you agree to be bound by these Terms and Conditions and our Privacy Policy.",
  },
  {
    title: "2. Use of the Website",
    content:
      "You may use the website for lawful purposes only. You must not use it in any way that breaches any applicable law or regulation.",
  },
  {
    title: "3. Intellectual Property Rights",
    content:
      "All content, trademarks, and data on this website, including but not limited to software, databases, text, graphics, icons, are the property of the company.",
  },
  {
    title: "4. User-Generated Content",
    content:
      "Any content submitted by users (e.g., comments or reviews) must be accurate, lawful, and not infringe on the rights of others.",
  },
  {
    title: "5. Limitation of Liability",
    content:
      "We are not liable for any damages resulting from your use of the website or from any content posted on it.",
  },
];

const TermsConditions = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-50 px-5 md:px-20 py-12">
      <motion.h1
        className="text-4xl font-bold text-center text-indigo-700 mb-6"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Terms & Conditions
      </motion.h1>
      <motion.p
        className="text-center text-gray-600 max-w-3xl mx-auto mb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        Please read these terms carefully before using our website. By accessing or using the site, you agree to be bound by these terms.
      </motion.p>

      <div className="max-w-4xl mx-auto space-y-6">
        {terms.map((term, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <button
              onClick={() => toggleAccordion(index)}
              className="w-full text-left px-6 py-4 text-lg font-semibold text-indigo-700 hover:bg-indigo-50 transition"
            >
              {term.title}
            </button>
            {openIndex === index && (
              <div className="px-6 pb-4 text-gray-700 text-sm">
                {term.content}
              </div>
            )}
          </motion.div>
        ))}
      </div>

      {/* CTA Section */}
      <motion.div
        className="mt-16 bg-indigo-100 text-center p-8 rounded-xl"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <h2 className="text-2xl font-semibold text-indigo-800 mb-2">Need Assistance?</h2>
        <p className="text-gray-700 mb-4">
          If you have questions about our terms or need legal support, don’t hesitate to contact us.
        </p>
        <a
          href="/contact"
          className="inline-block bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 transition"
        >
          Contact Support
        </a>
      </motion.div>
    </div>
  );
};

export default TermsConditions;
