import React from "react";
import { motion } from "framer-motion";

const jobs = [
  {
    title: "Frontend Developer",
    location: "Noida, India",
    type: "Full-time",
    description: "Work with React.js and Tailwind to create beautiful UIs for real estate users.",
  },
  {
    title: "Real Estate Sales Manager",
    location: "Lucknow, India",
    type: "Full-time",
    description: "Lead our sales team and connect customers with their dream properties.",
  },
  {
    title: "Content Writer - SEO",
    location: "Remote",
    type: "Part-time",
    description: "Write high-performing blog content and SEO-friendly listings for our platform.",
  },
];

const Career = () => {
  return (
    <div className="bg-white text-gray-800 py-10 px-5 md:px-20">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center mb-6 text-indigo-700"
      >
        Join Our Team
      </motion.h1>
      <p className="text-center text-gray-600 mb-10">
        We’re building the future of real estate. Explore careers that make a difference.
      </p>

      {/* Job Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {jobs.map((job, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.2, duration: 0.6 }}
            className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold text-indigo-800 mb-2">{job.title}</h3>
            <p className="text-sm text-gray-500 mb-1">{job.location}</p>
            <p className="text-sm text-gray-500 mb-3">{job.type}</p>
            <p className="text-gray-600 text-sm mb-4">{job.description}</p>
            <button className="bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700">
              Apply Now
            </button>
          </motion.div>
        ))}
      </div>

      {/* Upload Resume Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-16 bg-indigo-100 rounded-xl p-8 text-center"
      >
        <h2 className="text-2xl font-semibold mb-4 text-indigo-800">Didn’t find a matching role?</h2>
        <p className="text-gray-600 mb-6">Send us your resume and we’ll get in touch when something comes up.</p>
        <form className="flex flex-col sm:flex-row gap-4 items-center justify-center">
          <input
            type="file"
            className="bg-white border border-gray-300 px-4 py-2 rounded-md w-full sm:w-auto"
          />
          <button className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700">
            Submit Resume
          </button>
        </form>
      </motion.div>

      {/* Final CTA */}
      <div className="mt-20 text-center">
        <h3 className="text-lg font-semibold text-gray-700 mb-2">
          Let's build the future of real estate together!
        </h3>
        <button className="bg-purple-600 text-white px-6 py-2 rounded-md hover:bg-purple-700 transition">
          Explore Our Vision
        </button>
      </div>
    </div>
  );
};

export default Career;
