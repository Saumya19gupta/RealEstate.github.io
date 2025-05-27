


// import React from "react";
// import { motion } from "framer-motion";
// import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

// export default function Footer() {
//   return (
//     <motion.footer
//       initial={{ opacity: 0, y: 40 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.8 }}
//       className="bg-gray-900 text-gray-200 py-10 px-4"
//     >
//       <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
//         {/* About */}
//         <div>
//           <h3 className="text-lg font-semibold mb-4 text-white">About Real Estate</h3>
//           <p className="text-sm leading-relaxed">
//             We help you find your dream home, buy, sell, or rent properties with ease. 
//             Trusted by thousands of customers.
//           </p>
//         </div>

//         {/* Quick Links */}
//         <div>
//           <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
//           <ul className="space-y-2 text-sm">
//             <li><a href="#" className="hover:text-blue-400">Home</a></li>
//             <li><a href="#" className="hover:text-blue-400">Properties</a></li>
//             <li><a href="#" className="hover:text-blue-400">Contact</a></li>
//             <li><a href="#" className="hover:text-blue-400">Privacy Policy</a></li>
//           </ul>
//         </div>

//         {/* Contact & Social */}
//         <div>
//           <h3 className="text-lg font-semibold mb-4 text-white">Get in Touch</h3>
//           <p className="text-sm">Email: support@realestate.com</p>
//           <p className="text-sm mb-4">Phone: +91 98765 43210</p>
//           <div className="flex space-x-4 mt-2">
//             <a href="#"><FaFacebookF className="hover:text-blue-500" /></a>
//             <a href="#"><FaTwitter className="hover:text-blue-400" /></a>
//             <a href="#"><FaInstagram className="hover:text-pink-500" /></a>
//             <a href="#"><FaLinkedin className="hover:text-blue-600" /></a>
//           </div>
//         </div>
//       </div>

//       <div className="mt-8 text-center text-xs text-gray-400">
//         © {new Date().getFullYear()} Real Estate. All rights reserved.
//       </div>
//     </motion.footer>
//   );
// }



// 

// import React from "react";
// import { motion } from "framer-motion";
// import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

// export default function Footer() {
//   return (
//     <motion.footer
//       initial={{ opacity: 0, y: 40 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.8 }}
//       className="bg-gray-900 text-gray-200 py-10 px-4"
//     >
//       <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
//         {/* About */}
//         <div>
//           <h3 className="text-lg font-semibold mb-4 text-white">About Us</h3>
//           <p className="text-sm leading-relaxed">
//             Your trusted partner for buying, selling, and renting real estate with ease.
//           </p>
//         </div>

//         {/* Quick Links */}
//         <div>
//           <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
//           <div className="flex flex-col gap-2">
//             {[
//               { name: "Home", href: "/home" },
//               { name: "About Us", href: "/about" },
//               { name: "Services", href: "/services" },
//               { name: "Contact", href: "/contact" },
//               { name: "Properties", href: "/properties" },
//               { name: "Agents", href: "/agents" },
//               { name: "FAQs", href: "/faqs" },
//               { name: "Privacy Policy", href: "/privacy-policy" },
//             ].map((link, index) => (
//               <a
//                 key={index}
//                 href={link.href}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="bg-gray-800 hover:bg-blue-600 text-white text-sm py-2 px-4 rounded-lg transition text-left"
//               >
//                 {link.name}
//               </a>
//             ))}
//           </div>
//         </div>

//         {/* Contact Info */}
//         <div>
//           <h3 className="text-lg font-semibold mb-4 text-white">Contact Us</h3>
//           <div className="text-sm flex items-center gap-2 mb-2">
//             <FaPhoneAlt className="text-blue-400" />
//             <span>+91 98765 43210</span>
//           </div>
//           <div className="text-sm flex items-center gap-2 mb-2">
//             <FaEnvelope className="text-blue-400" />
//             <span>support@realestate.com</span>
//           </div>
//           <div className="text-sm flex items-center gap-2">
//             <FaMapMarkerAlt className="text-blue-400" />
//             <span>123 Estate Lane, New Delhi, India</span>
//           </div>

//           {/* Social Icons */}
//           <div className="flex gap-4 mt-4">
//             <a href="#"><FaFacebookF className="hover:text-blue-500" /></a>
//             <a href="#"><FaTwitter className="hover:text-blue-400" /></a>
//             <a href="#"><FaInstagram className="hover:text-pink-500" /></a>
//             <a href="#"><FaLinkedin className="hover:text-blue-600" /></a>
//           </div>
//         </div>
//       </div>

//       {/* Footer Bottom */}
//       <div className="mt-8 text-center text-xs text-gray-400">
//         © {new Date().getFullYear()} Real Estate. All rights reserved.
//       </div>
//     </motion.footer>
//   );
// }



// import React from "react";
// import { motion } from "framer-motion";
// import {
//   FaPhoneAlt,
//   FaEnvelope,
//   FaMapMarkerAlt,
//   FaFacebookF,
//   FaInstagram,
//   FaLinkedin,
//   FaTwitter,
// } from "react-icons/fa";

// export default function Footer() {
//   const linksLeft = [
//     { name: "Home", href: "/home" },
//     { name: "About Us", href: "/about" },
//     { name: "Services", href: "/services" },
//     { name: "Contact", href: "/contact" },
//   ];

//   const linksCenter = [
//     { name: "Properties", href: "/properties" },
//     { name: "Agents", href: "/agents" },
//     { name: "FAQs", href: "/faqs" },
//     { name: "Privacy Policy", href: "/privacy-policy" },
//   ];




//   const linksRight = [
//     { name: "Properties", href: "/properties" },
//     { name: "Agents", href: "/agents" },
//     { name: "FAQs", href: "/faqs" },
//     { name: "Privacy Policy", href: "/privacy-policy" },
//   ];

//   return (
//     <motion.footer
//       initial={{ opacity: 0, y: 40 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.8 }}
//       className="bg-gray-900 text-gray-200 py-10 px-4"
//     >
//       <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
//         {/* About */}
//         <div>
//           <h3 className="text-lg font-semibold mb-4 text-white">About Us</h3>
//           <p className="text-sm leading-relaxed">
//             Your trusted partner for buying, selling, and renting real estate
//             with ease.
//           </p>
//         </div>

//         {/* Quick Links: 4 Left + 4 Right */}
//         <div>
//           <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
//           <div className="grid grid-cols-2 gap-2">
//             <div className="flex flex-col gap-2">
//               {linksLeft.map((link, index) => (
//                 <a
//                   key={index}
//                   href={link.href}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="bg-gray-800 hover:bg-blue-600 text-white text-xs py-1.5 px-3 rounded-md transition text-left"
//                 >
//                   {link.name}
//                 </a>
//               ))}
//             </div>


//             <div className="flex flex-col gap-2">
//               {linksCenter.map((link, index) => (
//                 <a
//                   key={index}
//                   href={link.href}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="bg-gray-800 hover:bg-blue-600 text-white text-xs py-1.5 px-3 rounded-md transition text-left"
//                 >
//                   {link.name}
//                 </a>
//               ))}
//             </div>







//             <div className="flex flex-col gap-2">
//               {linksRight.map((link, index) => (
//                 <a
//                   key={index}
//                   href={link.href}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="bg-gray-800 hover:bg-blue-600 text-white text-xs py-1.5 px-3 rounded-md transition text-left"
//                 >
//                   {link.name}
//                 </a>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Contact Info */}
//         <div>
//           <h3 className="text-lg font-semibold mb-4 text-white">Contact Us</h3>
//           <div className="text-sm flex items-center gap-2 mb-2">
//             <FaPhoneAlt className="text-blue-400" />
//             <span>+91 98765 43210</span>
//           </div>
//           <div className="text-sm flex items-center gap-2 mb-2">
//             <FaEnvelope className="text-blue-400" />
//             <span>support@realestate.com</span>
//           </div>
//           <div className="text-sm flex items-center gap-2">
//             <FaMapMarkerAlt className="text-blue-400" />
//             <span>123 Estate Lane, New Delhi, India</span>
//           </div>

//           {/* Social Icons */}
//           <div className="flex gap-4 mt-4">
//             <a href="#"><FaFacebookF className="hover:text-blue-500" /></a>
//             <a href="#"><FaTwitter className="hover:text-blue-400" /></a>
//             <a href="#"><FaInstagram className="hover:text-pink-500" /></a>
//             <a href="#"><FaLinkedin className="hover:text-blue-600" /></a>
//           </div>
//         </div>
//       </div>

//       {/* Footer Bottom */}
//       <div className="mt-8 text-center text-xs text-gray-400">
//         © {new Date().getFullYear()} Real Estate. All rights reserved.
//       </div>
//     </motion.footer>
//   );
// }



// import React from "react";
// import { motion } from "framer-motion";
// import {
//   FaPhoneAlt,
//   FaEnvelope,
//   FaMapMarkerAlt,
//   FaFacebookF,
//   FaInstagram,
//   FaLinkedin,
//   FaTwitter,
// } from "react-icons/fa";

// export default function Footer() {
//   const linksLeft = [
//     { name: "Home", href: "/home" },
//     { name: "About Us", href: "/about" },
//     { name: "Services", href: "/services" },
//     { name: "Contact", href: "/contact" },
//   ];

//   const linksRight = [
//     { name: "Properties", href: "/properties" },
//     { name: "Agents", href: "/agents" },
//     { name: "FAQs", href: "/faqs" },
//     { name: "Privacy Policy", href: "/privacy-policy" },
//   ];

//   return (
//     <motion.footer
//       initial={{ opacity: 0, y: 40 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.8 }}
//       className="bg-gray-900 text-gray-200 py-10 px-4"
//     >
//       <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
//         {/* About */}
//         <div>
//           <h3 className="text-lg font-semibold mb-4 text-white">About Us</h3>
//           <p className="text-sm leading-relaxed">
//             Your trusted partner for buying, selling, and renting real estate
//             with ease.
//           </p>
//         </div>

//         {/* Quick Links: 4 Left + 4 Right */}
//         <div>
//           <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
//           <div className="grid grid-cols-2 gap-2">
//             {/* Left Links */}
//             <div className="flex flex-col gap-2">
//               {linksLeft.map((link, index) => (
//                 <a
//                   key={index}
//                   href={link.href}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="bg-gray-800 hover:bg-blue-600 text-white text-xs py-1 px-2 rounded transition text-left"
//                 >
//                   {link.name}
//                 </a>
//               ))}
//             </div>
//             {/* Right Links */}
//             <div className="flex flex-col gap-2">
//               {linksRight.map((link, index) => (
//                 <a
//                   key={index}
//                   href={link.href}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="bg-gray-800 hover:bg-blue-600 text-white text-xs py-1 px-2 rounded transition text-left"
//                 >
//                   {link.name}
//                 </a>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Contact Info */}
//         <div>
//           <h3 className="text-lg font-semibold mb-4 text-white">Contact Us</h3>
//           <div className="text-sm flex items-center gap-2 mb-2">
//             <FaPhoneAlt className="text-blue-400" />
//             <span>+91 98765 43210</span>
//           </div>
//           <div className="text-sm flex items-center gap-2 mb-2">
//             <FaEnvelope className="text-blue-400" />
//             <span>support@realestate.com</span>
//           </div>
//           <div className="text-sm flex items-center gap-2">
//             <FaMapMarkerAlt className="text-blue-400" />
//             <span>123 Estate Lane, New Delhi, India</span>
//           </div>

//           {/* Social Icons */}
//           <div className="flex gap-4 mt-4">
//             <a href="#"><FaFacebookF className="hover:text-blue-500" /></a>
//             <a href="#"><FaTwitter className="hover:text-blue-400" /></a>
//             <a href="#"><FaInstagram className="hover:text-pink-500" /></a>
//             <a href="#"><FaLinkedin className="hover:text-blue-600" /></a>
//           </div>
//         </div>
//       </div>

//       {/* Footer Bottom */}
//       <div className="mt-8 text-center text-xs text-gray-400">
//         © {new Date().getFullYear()} Real Estate. All rights reserved.
//       </div>
//     </motion.footer>
//   );
// }

import React from "react";
import { motion } from "framer-motion";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

export default function Footer() {
  const linksLeft = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Blog", href: "/Blog" },
    { name: "Projects", href: "/projects" },
  ];

  const linksCenter = [
    { name: "Download App", href: "/DownloadApp" },
    { name: "Contact Us", href: "/contact" },
    { name: "Team", href: "/team" },
    { name: "Careers", href: "/Career" },
  ];

  const linksRight = [
    { name: "Properties", href: "/top-selling" },
    { name: "FAQs", href: "/faqs" },
    { name: "Privacy Policy", href: "/policy" },
    { name: "Support", href: "/support" },
  ];

  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-gray-900 text-gray-200 px-4 md:px-12 lg:px-20 py-12 "
    >
      <div className="max-w-9xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-30">
        {/* About */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">About Real Estate</h3>
          <p className="text-sm leading-relaxed">
            Your trusted partner for buying, selling, and renting real estate
            with ease.

            We help you find your dream home, buy, sell, or rent properties with ease. 
            Trusted by thousands of customers.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
          <div className="grid grid-cols-3 gap-2">
            {/* Left Links */}
            <div className="flex flex-col gap-2">
              {linksLeft.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 hover:bg-blue-600 text-white text-xs py-1 px-2 rounded transition text-left"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Center Links */}
            <div className="flex flex-col gap-2">
              {linksCenter.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 hover:bg-blue-600 text-white text-xs py-1 px-2 rounded transition text-left"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Right Links */}
            <div className="flex flex-col gap-2">
              {linksRight.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 hover:bg-blue-600 text-white text-xs py-1 px-2 rounded transition text-left"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Contact Us</h3>
          <div className="text-sm flex items-center gap-2 mb-2">
            <FaPhoneAlt className="text-blue-400" />
            <span>+91 98765 43210</span>
          </div>
          <div className="text-sm flex items-center gap-2 mb-2">
            <FaEnvelope className="text-blue-400" />
            <span>support@realestate.com</span>
          </div>
          <div className="text-sm flex items-center gap-2">
            <FaMapMarkerAlt className="text-blue-400" />
            <span>123 CP, New Delhi, India</span>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 mt-4">
            <a href="#"><FaFacebookF className="hover:text-blue-500" /></a>
            <a href="#"><FaTwitter className="hover:text-blue-400" /></a>
            <a href="#"><FaInstagram className="hover:text-pink-500" /></a>
            <a href="#"><FaLinkedin className="hover:text-blue-600" /></a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-8 text-center text-xs text-gray-400">
        © {new Date().getFullYear()} Real Estate. All rights reserved.
      </div>
    </motion.footer>
  );
}


// import React from "react";
// import { motion } from "framer-motion";
// import {
//   FaPhoneAlt,
//   FaEnvelope,
//   FaMapMarkerAlt,
//   FaFacebookF,
//   FaInstagram,
//   FaLinkedin,
//   FaTwitter,
// } from "react-icons/fa";

// export default function Footer() {
//   const linksLeft = [
//     { name: "Home", href: "/" },
//     { name: "About Us", href: "/about" },
//     { name: "Blog", href: "/Blog" },
//     { name: "Projects", href: "/projects" },
//   ];

//   const linksCenter = [
//     { name: "Download App", href: "/DownloadApp" },
//     { name: "Contact Us", href: "/contact" },
//     { name: "Team", href: "/team" },
//     { name: "Careers", href: "/Career" },
//   ];

//   const linksRight = [
//     { name: "Properties", href: "/top-selling" },
//     { name: "FAQs", href: "/faqs" },
//     { name: "Privacy Policy", href: "/policy" },
//     { name: "Support", href: "/support" },
//   ];

//   return (
//     <motion.footer
//       initial={{ opacity: 0, y: 40 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.8 }}
//       className="bg-gray-900 text-gray-200 py-10 px-4"
//     >
//       <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
//         {/* About */}
//         <div>
//           <h3 className="text-lg font-semibold mb-4 text-white">About Real Estate</h3>
//           <p className="text-sm leading-relaxed">
//             Your trusted partner for buying, selling, and renting real estate with ease. We help you find your dream home, buy, sell, or rent properties with ease. Trusted by thousands of customers.
//           </p>
//         </div>

//         {/* Quick Links */}
//         <div>
//           <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
//           <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
//             {/* Left Links */}
//             <div className="flex flex-col gap-2">
//               {linksLeft.map((link, index) => (
//                 <a
//                   key={index}
//                   href={link.href}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="bg-gray-800 hover:bg-blue-600 text-white text-xs py-1 px-2 rounded transition text-left"
//                 >
//                   {link.name}
//                 </a>
//               ))}
//             </div>

//             {/* Center Links */}
//             <div className="flex flex-col gap-2">
//               {linksCenter.map((link, index) => (
//                 <a
//                   key={index}
//                   href={link.href}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="bg-gray-800 hover:bg-blue-600 text-white text-xs py-1 px-2 rounded transition text-left"
//                 >
//                   {link.name}
//                 </a>
//               ))}
//             </div>

//             {/* Right Links */}
//             <div className="flex flex-col gap-2">
//               {linksRight.map((link, index) => (
//                 <a
//                   key={index}
//                   href={link.href}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="bg-gray-800 hover:bg-blue-600 text-white text-xs py-1 px-2 rounded transition text-left"
//                 >
//                   {link.name}
//                 </a>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Contact Info */}
//         <div>
//           <h3 className="text-lg font-semibold mb-4 text-white">Contact Us</h3>
//           <div className="text-sm flex items-center gap-2 mb-2">
//             <FaPhoneAlt className="text-blue-400" />
//             <span>+91 98765 43210</span>
//           </div>
//           <div className="text-sm flex items-center gap-2 mb-2">
//             <FaEnvelope className="text-blue-400" />
//             <span>support@realestate.com</span>
//           </div>
//           <div className="text-sm flex items-center gap-2">
//             <FaMapMarkerAlt className="text-blue-400" />
//             <span>123 Estate Lane, New Delhi, India</span>
//           </div>

//           {/* Social Icons */}
//           <div className="flex gap-4 mt-4">
//             <a href="#"><FaFacebookF className="hover:text-blue-500" /></a>
//             <a href="#"><FaTwitter className="hover:text-blue-400" /></a>
//             <a href="#"><FaInstagram className="hover:text-pink-500" /></a>
//             <a href="#"><FaLinkedin className="hover:text-blue-600" /></a>
//           </div>
//         </div>
//       </div>

//       {/* Footer Bottom */}
//       <div className="mt-8 text-center text-xs text-gray-400">
//         © {new Date().getFullYear()} Real Estate. All rights reserved.
//       </div>
//     </motion.footer>
//   );
// }


