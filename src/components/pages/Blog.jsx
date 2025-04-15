import React, { useState } from "react";
import { motion } from "framer-motion";

const blogPosts = [
  {
    title: "Top 5 Tips for Buying Your First Home",
    date: "April 7, 2025",
    author: "Saumya Gupta",
    tag: "Buying",
    excerpt: "Looking to buy your dream home? Start with these 5 practical steps to make a confident decision.",
    image: "https://source.unsplash.com/600x400/?house",
  },
  {
    title: "How to Invest in Real Estate: A Beginner’s Guide",
    date: "March 22, 2025",
    author: "Team RealEstate",
    tag: "Investment",
    excerpt: "Real estate investing is one of the most reliable ways to build wealth. Here's how to start.",
    image: "https://source.unsplash.com/600x400/?realestate,investment",
  },
  {
    title: "Top Rental Cities in UP You Should Know About",
    date: "March 12, 2025",
    author: "Muskan Kesarwani",
    tag: "Rental",
    excerpt: "From Lucknow to Varanasi, discover cities in Uttar Pradesh offering great rental returns.",
    image: "https://source.unsplash.com/600x400/?city,india",
  },
];

const Blog = () => {
  const [search, setSearch] = useState("");

  const filteredPosts = blogPosts.filter((post) =>
    post.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-gray-50 min-h-screen py-10 px-5 md:px-20">
      <motion.h1
        className="text-4xl font-bold text-center text-indigo-700 mb-4"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Real Estate Insights & Guides
      </motion.h1>
      <p className="text-center text-gray-600 mb-10">
        Stay updated with the latest tips, trends, and investment opportunities.
      </p>

      {/* Search Bar */}
      <div className="max-w-3xl mx-auto mb-10">
        <input
          type="text"
          placeholder="Search blog posts..."
          className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Blog Cards */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {filteredPosts.map((post, index) => (
          <motion.div
            key={index}
            className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-xl transition"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
            <div className="p-5">
              <div className="text-sm text-indigo-600 font-medium mb-1">{post.tag}</div>
              <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{post.excerpt}</p>
              <div className="text-xs text-gray-500">
                By {post.author} | {post.date}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Newsletter CTA */}
      <motion.div
        className="mt-20 bg-indigo-100 text-center p-8 rounded-xl"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <h2 className="text-2xl font-semibold text-indigo-800 mb-3">Get Our Weekly Updates</h2>
        <p className="text-gray-700 mb-5">Stay ahead in property trends, tips & offers. No spam.</p>
        <form className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 rounded-md border border-gray-300 w-full sm:w-1/2"
          />
          <button className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 transition">
            Subscribe
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default Blog;
