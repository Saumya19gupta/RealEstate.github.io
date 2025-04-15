// import { Link } from 'react-router-dom'
// import { Menu, Heart, Download, User, PackageOpen } from 'lucide-react'
// import { FaHome } from "react-icons/fa";
// import { useState } from 'react'

// const Header = () => {
//   return (
//     <header className="bg-gradient-to-r from-purple-800 to-purple-900 text-white py-3 px-4 shadow-md">
//       <div className="max-w-7xl mx-auto flex justify-between items-center">
//         {/* Logo */}
//         <Link to="/" className="flex items-center gap-2 text-lg font-bold">
//           <img src="https://housing.com/favicon.ico" alt="Logo" className="h-6" />
//           HOUSING.COM
//         </Link>

//         {/* Nav Items */}
//         <div className="hidden md:flex items-center gap-6 text-sm">
//           <Link to="/pay-rent" className="bg-white text-purple-700 px-3 py-1 rounded-md font-semibold">Pay Rent</Link>
//           <a href="#" className="flex items-center gap-1 hover:text-gray-300"><Download size={16} />Download App</a>
//           <Link to="/saved" className="flex items-center gap-1 hover:text-gray-300"><Heart size={16} />Saved</Link>
//           <div className="flex items-center gap-1 hover:text-gray-300 cursor-pointer">
//             <PackageOpen size={16} />
//             Packages ▼
//           </div>
//           <Link to="/signup" className="bg-pink-600 px-3 py-1 rounded-md text-white font-bold">Post Property FREE</Link>
//         </div>

//         {/* Mobile Menu Icon */}
//         <div className="md:hidden">
//           <Menu />
//         </div>
//       </div>
//     </header>
//   )
// }

// export default Header

// import { Link, useLocation } from 'react-router-dom';
// import { Menu, Heart, Download, User, PackageOpen } from 'lucide-react';
// import { useState } from 'react';
// import { FaHome } from 'react-icons/fa';

// const Header = () => {
//   const location = useLocation();
//   const [menuOpen, setMenuOpen] = useState(false);

//   const navItems = [
//     { to: '/pay-rent', label: 'Pay Rent', className: 'bg-white text-purple-700 px-3 py-1 rounded-md font-semibold' },
//     { to: '/saved', label: 'Saved', icon: <Heart size={16} /> },
//     { to: '/packages', label: 'Packages', icon: <PackageOpen size={16} />, hasDropdown: true },
//     { to: '/signup', label: 'Post Property FREE', className: 'bg-pink-600 px-3 py-1 rounded-md text-white font-bold' },
//   ];

//   return (
//     <header className="bg-gradient-to-r from-purple-800 to-purple-900 text-white py-3 px-4 shadow-md">
//       <div className="max-w-7xl mx-auto flex justify-between items-center">
//         {/* Logo */}
//         <Link to="/" className="flex items-center gap-2 text-lg font-bold">
//           <img src="https://housing.com/favicon.ico" alt="Logo" className="h-6" />
//           HOUSING.COM
//         </Link>

//         {/* Nav Items - Desktop */}
//         <div className="hidden md:flex items-center gap-6 text-sm">
//           {navItems.map(({ to, label, icon, className, hasDropdown }) => (
//             <Link to={to} key={to} className={`flex items-center gap-1 hover:text-gray-300 ${className || ''}`}>
//               {icon && icon}
//               {label}
//               {hasDropdown && '▼'}
//             </Link>
//           ))}
//           <a href="#" className="flex items-center gap-1 hover:text-gray-300">
//             <Download size={16} />Download App
//           </a>
//         </div>

//         {/* Mobile Menu Icon */}
//         <button
//           className="md:hidden focus:outline-none"
//           onClick={() => setMenuOpen(!menuOpen)}
//         >
//           <Menu />
//         </button>
//       </div>

//       {/* Mobile Nav */}
//       {menuOpen && (
//         <div className="md:hidden mt-2 space-y-2">
//           {navItems.map(({ to, label, icon, className, hasDropdown }) => (
//             <Link
//               to={to}
//               key={to}
//               className={`block px-4 py-2 bg-purple-700 text-white rounded-md ${className || ''}`}
//               onClick={() => setMenuOpen(false)}
//             >
//               {icon && <span className="mr-2">{icon}</span>}
//               {label} {hasDropdown && '▼'}
//             </Link>
//           ))}
//           <a
//             href="#"
//             className="block px-4 py-2 bg-purple-700 text-white rounded-md"
//             onClick={() => setMenuOpen(false)}
//           >
//             <Download size={16} className="inline-block mr-2" />Download App
//           </a>
//         </div>
//       )}
//     </header>
//   );
// };

// export default Header;


// Header.jsx
// import { Link } from 'react-router-dom';
// import { Menu, Heart, Download, PackageOpen } from 'lucide-react';
// import { useState } from 'react';

// const Header = () => {
//   const [showMenu, setShowMenu] = useState(false);

//   return (
//     <header className="bg-gradient-to-r from-purple-800 to-purple-900 text-white py-3 px-4 shadow-md">
//       <div className="max-w-7xl mx-auto flex justify-between items-center">
//         {/* Logo */}
//         <Link to="/" className="flex items-center gap-2 text-lg font-bold">
//           <img src="https://housing.com/favicon.ico" alt="Logo" className="h-6" />
//           HOUSING.COM
//         </Link>

//         {/* Desktop Nav */}
//         <div className="hidden md:flex items-center gap-6 text-sm">
//           <Link to="/pay-rent" className="bg-white text-purple-700 px-3 py-1 rounded-md font-semibold">
//             Pay Rent
//           </Link>

//           <Link to="/homepage" className="bg-white text-purple-700 px-3 py-1 rounded-md font-semibold">
//             HomePage
//           </Link>

         

//           <Link to="#" className="flex items-center gap-1 hover:text-gray-300">
//             <Download size={16} /> Download App
//           </Link>
//           <Link to="/saved" className="flex items-center gap-1 hover:text-gray-300">
//             <Heart size={16} /> Saved
//           </Link>
//           <Link to="/packages" className="flex items-center gap-1 hover:text-gray-300">
//             <PackageOpen size={16} /> Packages ▼
//           </Link>

//           {/* More Options Dropdown */}
// <div className="relative group">
//   <button className="flex items-center gap-1 hover:text-gray-300">
//     More Options ▼
//   </button>
//   <div className="absolute top-full left-0 bg-white text-purple-800 rounded-md shadow-md mt-1 p-2 hidden group-hover:block z-10 w-40">
//     <Link to="/about" className="block px-3 py-1 hover:bg-purple-100 rounded">About</Link>
//     {/* <Link to="/contact" className="block px-3 py-1 hover:bg-purple-100 rounded">Contact</Link>
//     <Link to="/faqs" className="block px-3 py-1 hover:bg-purple-100 rounded">FAQs</Link> */}
//   </div>
// </div>


//           <Link to="/newsignup" className="bg-white text-purple-700 px-3 py-1 rounded-md font-semibold">
//             Login 
//           </Link>

//           <Link to="/signup" className="bg-pink-600 px-3 py-1 rounded-md text-white font-bold">
//             Post Property FREE
//           </Link>
//         </div>

//         {/* Mobile Menu Toggle */}
//         <div className="md:hidden cursor-pointer" onClick={() => setShowMenu(!showMenu)}>
//           <Menu />
//         </div>
//       </div>

//       {/* Mobile Nav Menu */}
//       {showMenu && (
//         <div className="md:hidden mt-2 px-4 flex flex-col gap-4 text-sm">
//           <Link to="/pay-rent" className="bg-white text-purple-700 px-3 py-1 rounded-md font-semibold">
//             Pay Rent
//           </Link>

//           <Link to="/homepage" className="bg-white text-purple-700 px-3 py-1 rounded-md font-semibold">
//             HomePage
//           </Link>

//           <Link to="/packages" className="flex items-center gap-1 hover:text-gray-300">
//             <PackageOpen size={16} /> Packages ▼

//             </Link>

//             {/* More Options Dropdown */}
// <div className="relative group">
//   <button className="flex items-center gap-1 hover:text-gray-300">
//     More Options ▼
//   </button>
//   <div className="absolute top-full left-0 bg-white text-purple-800 rounded-md shadow-md mt-1 p-2 hidden group-hover:block z-10 w-40">
//     <Link to="/about" className="block px-3 py-1 hover:bg-purple-100 rounded">About</Link>
//     {/* <Link to="/contact" className="block px-3 py-1 hover:bg-purple-100 rounded">Contact</Link>
//     <Link to="/faqs" className="block px-3 py-1 hover:bg-purple-100 rounded">FAQs</Link> */}
//   </div>
// </div>

            

          


//           <Link to="#" className="flex items-center gap-1 hover:text-gray-300">
//             <Download size={16} /> Download App
//           </Link>
//           <Link to="/saved" className="flex items-center gap-1 hover:text-gray-300">
//             <Heart size={16} /> Saved
//           </Link>
//           <Link to="/packages" className="flex items-center gap-1 hover:text-gray-300">
//             <PackageOpen size={16} /> Packages ▼
//           </Link> 

//           <Link to="/newsignup" className="bg-white text-purple-700 px-3 py-1 rounded-md font-semibold">
//             Login 
//           </Link>


//           <Link to="/signup" className="bg-pink-600 px-3 py-1 rounded-md text-white font-bold">
//             Post Property FREE
//           </Link>

          

//         </div>
//       )}
//     </header>
//   );
// };

// export default Header;


// import { Link } from 'react-router-dom';
// import { Menu, Heart, Download, PackageOpen } from 'lucide-react';
// import { useState } from 'react';

// const Header = () => {
//   const [showMenu, setShowMenu] = useState(false);
//   const [showDropdown, setShowDropdown] = useState(false); // for mobile dropdown

//   return (
//     <header className="bg-gradient-to-r from-purple-800 to-purple-900 text-white py-3 px-4 shadow-md">
//       <div className="max-w-7xl mx-auto flex justify-between items-center">
//         {/* Logo */}
//         <Link to="/" className="flex items-center gap-2 text-lg font-bold">
//           <img src="https://housing.com/favicon.ico" alt="Logo" className="h-6" />
//           A.K Infra Dream
//         </Link>

//         {/* Desktop Nav */}
//         <div className="hidden md:flex items-center gap-6 text-sm">
//           <Link to="/pay-rent" className="bg-white text-purple-700 px-3 py-1 rounded-md font-semibold">
//             Pay Rent
//           </Link>

//           <Link to="/newsignup" className="bg-white text-purple-700 px-3 py-1 rounded-md font-semibold">
//             About us
//           </Link>

//           {/* <Link to="/homepage" className="bg-white text-purple-700 px-3 py-1 rounded-md font-semibold">
//             HomePage
//           </Link>

//           <Link to="#" className="flex items-center gap-1 hover:text-gray-300">
//             <Download size={16} /> Download App
//           </Link> */}

//           {/* <Link to="/saved" className="flex items-center gap-1 hover:text-gray-300">
//             <Heart size={16} /> Saved
//           </Link> */}

//           {/* <Link to="" className="flex items-center gap-1 hover:text-gray-300">
//             <PackageOpen size={16} /> Packages ▼
//           </Link> */}

//           {/* More Options Dropdown - Desktop */}
//           {/* <div className="relative group">
//             <button className="flex items-center gap-1 hover:text-gray-300">
//               More Options ▼
//             </button>
//             <div className="absolute top-full left-0 bg-white text-purple-800 rounded-md shadow-md mt-1 p-2 hidden group-hover:block z-10 w-40">
//               <Link to="/about" className="block px-3 py-1 hover:bg-purple-100 rounded">About</Link>
//               {/* <Link to="/contact" className="block px-3 py-1 hover:bg-purple-100 rounded">Contact</Link>
//               <Link to="/faqs" className="block px-3 py-1 hover:bg-purple-100 rounded">FAQs</Link> */}
//             {/* </div>
//           </div>  */}
          
//           {/* <Link to="/newsignup" className="bg-white text-purple-700 px-3 py-1 rounded-md font-semibold">
//             About us
//           </Link> */}


//           <div className="relative group">
//             <button className="flex items-center gap-1 hover:text-gray-300 bg-pink-600 px-3 py-1 rounded-md text-white font-bold">
//               View More ▼
//             </button>
//             <div className="absolute top-full left-0 bg-white text-purple-800 rounded-md shadow-md mt-1 p-2 hidden group-hover:block z-10 w-40">
//               <Link to="/categories" className="block px-3 py-1 hover:bg-purple-100 rounded">Categories</Link>
//               <Link to="/DownloadApp" className="block px-3 py-1 hover:bg-purple-100 rounded">Download App</Link>
//               <Link to="/contact" className="block px-3 py-1 hover:bg-purple-100 rounded">Contact</Link>
//               <Link to="/faqs" className="block px-3 py-1 hover:bg-purple-100 rounded">FAQs</Link>
//               <Link to="/Testimonials" className="block px-3 py-1 hover:bg-purple-100 rounded">Testimonials</Link>
//               <Link to="/Career" className="block px-3 py-1 hover:bg-purple-100 rounded">Career</Link>
//               <Link to="/Blog" className="block px-3 py-1 hover:bg-purple-100 rounded">Blogs</Link>
//               <Link to="/TermsConditions" className="block px-3 py-1 hover:bg-purple-100 rounded">Terms&Conditions</Link>
//               <Link to="/policy" className="block px-3 py-1 hover:bg-purple-100 rounded">Privacy Policy</Link>

//             </div>
//           </div>

//           <div className="relative group">
//             <button className="flex items-center gap-1 hover:text-gray-300 bg-pink-600 px-3 py-1 rounded-md text-white font-bold">
//             SignUp / Login
//             </button>
//             <div className="absolute top-full left-0 bg-white text-purple-800 rounded-md shadow-md mt-1 p-2 hidden group-hover:block z-10 w-40">
//               <Link to="/associatesignin" className="block px-3 py-1 hover:bg-purple-100 rounded">Associate Sign In</Link>
//               <Link to="/customersignin" className="block px-3 py-1 hover:bg-purple-100 rounded">Customer Sign In</Link>
              

//             </div>
//           </div>

//           </div>



//           {/* <Link to="/newsignup" className="bg-white text-purple-700 px-3 py-1 rounded-md font-semibold">
//             About us
//           </Link> */}

//           {/* <Link to="/signup" className="bg-pink-600 px-3 py-1 rounded-md text-white font-bold">
//             SignUp / Login
//           </Link>*}

           

//         {/* Mobile Menu Toggle */}
//         <div className="md:hidden cursor-pointer" onClick={() => setShowMenu(!showMenu)}>
//           <Menu />
//         </div>
//       </div>

//       {/* Mobile Nav Menu */}
//       {showMenu && (
//         <div className="md:hidden mt-2 px-4 flex flex-col gap-4 text-sm">
//           <Link to="/pay-rent" className="bg-white text-purple-700 px-3 py-1 rounded-md font-semibold">
//             Pay Rent
//           </Link>

//           <Link to="/newsignup" className="bg-white text-purple-700 px-3 py-1 rounded-md font-semibold">
//             About us
//           </Link>


//           <Link to="/homepage" className="bg-white text-purple-700 px-3 py-1 rounded-md font-semibold">
//             HomePage
//           </Link>

//           {/* <Link to="/packages" className="flex items-center gap-1 hover:text-gray-300">
//             <PackageOpen size={16} /> Packages ▼
//           </Link> */}

//           {/* <button
//             onClick={() => setShowDropdown(!showDropdown)}
//             className="flex items-center gap-1 hover:text-gray-300"
//           >
//             View More  ▼
//           </button>
//           {showDropdown && (
//             <div className="bg-white text-purple-800 rounded-md shadow-md p-2 w-40">
//               <Link to="/about" className="block px-3 py-1 hover:bg-purple-100 rounded">Categories</Link>
//               <Link to="/contact" className="block px-3 py-1 hover:bg-purple-100 rounded">Contact</Link>
//               <Link to="/faqs" className="block px-3 py-1 hover:bg-purple-100 rounded"> Testimonials</Link>
//               <Link to="/faqs" className="block px-3 py-1 hover:bg-purple-100 rounded">Career</Link>
//               <Link to="/faqs" className="block px-3 py-1 hover:bg-purple-100 rounded">Blogs</Link>
//               <Link to="/faqs" className="block px-3 py-1 hover:bg-purple-100 rounded">Terms&Conditions</Link>
//               <Link to="/faqs" className="block px-3 py-1 hover:bg-purple-100 rounded">Privacy Policy</Link>
              
//             </div>
//           )} */}

          

//           {/* <Link to="/saved" className="flex items-center gap-1 hover:text-gray-300">
//             <Heart size={16} /> Saved
//           </Link> */}

//           {/* <Link to="/newsignup" className="bg-white text-purple-700 px-3 py-1 rounded-md font-semibold">
//             About us
//           </Link> */}
//           <button
//             onClick={() => setShowDropdown(!showDropdown)}
//             className="flex items-center gap-1 hover:text-gray-300 bg-pink-600 px-3 py-1 rounded-md text-white font-bold"
//           >
//             View More  ▼
//           </button>
//           {showDropdown && (
//             <div className="bg-white text-purple-800 rounded-md shadow-md p-2 w-40">
//               <Link to="/categories" className="block px-3 py-1 hover:bg-purple-100 rounded">Categories</Link>
//               <Link to="/DownloadApp" className="block px-3 py-1 hover:bg-purple-100 rounded">Download App</Link>
//               <Link to="/contact" className="block px-3 py-1 hover:bg-purple-100 rounded">Contact</Link>
//               <Link to="/faqs" className="block px-3 py-1 hover:bg-purple-100 rounded"> FAQs</Link>
//               <Link to="/Testimonials" className="block px-3 py-1 hover:bg-purple-100 rounded"> Testimonials</Link>
//               <Link to="/Career" className="block px-3 py-1 hover:bg-purple-100 rounded">Career</Link>
//               <Link to="/Blog" className="block px-3 py-1 hover:bg-purple-100 rounded">Blogs</Link>
//               <Link to="/TermsConditions" className="block px-3 py-1 hover:bg-purple-100 rounded">Terms&Conditions</Link>
//               <Link to="/policy" className="block px-3 py-1 hover:bg-purple-100 rounded">Privacy Policy</Link>
              
//             </div>
//           )}
          
//           <button
//             onClick={() => setShowDropdown(!showDropdown)}
//             className="flex items-center gap-1 hover:text-gray-300 bg-pink-600 px-3 py-1 rounded-md text-white font-bold"
//           >
//             View More  ▼
//           </button>
//           {showDropdown && (
//             <div className="bg-white text-purple-800 rounded-md shadow-md p-2 w-40">
//               <Link to="/categories" className="block px-3 py-1 hover:bg-purple-100 rounded">Categories</Link>
//               <Link to="/DownloadApp" className="block px-3 py-1 hover:bg-purple-100 rounded">Download App</Link>
//               <Link to="/contact" className="block px-3 py-1 hover:bg-purple-100 rounded">Contact</Link>
//               <Link to="/faqs" className="block px-3 py-1 hover:bg-purple-100 rounded"> FAQs</Link>
//               <Link to="/Testimonials" className="block px-3 py-1 hover:bg-purple-100 rounded"> Testimonials</Link>
//               <Link to="/Career" className="block px-3 py-1 hover:bg-purple-100 rounded">Career</Link>
//               <Link to="/Blog" className="block px-3 py-1 hover:bg-purple-100 rounded">Blogs</Link>
//               <Link to="/TermsConditions" className="block px-3 py-1 hover:bg-purple-100 rounded">Terms&Conditions</Link>
//               <Link to="/policy" className="block px-3 py-1 hover:bg-purple-100 rounded">Privacy Policy</Link>
              
//             </div>
//           )}

//           {/* <Link to="/signup" className="bg-pink-600 px-3 py-1 rounded-md text-white font-bold">
//           SignUp / Login
//           </Link> */}


//         </div>
//       )}
//     </header>
//   );
// };

// export default Header;


// 

import { Link } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { useState } from 'react';
import logo from "/src/img/logonew.webp";
import { motion } from "framer-motion";
import { FaSearch } from "react-icons/fa";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const navItems = [
    ['Categories', '/categories'],
    ['Download App', '/DownloadApp'],
    ['Contact', '/contact'],
    ['FAQs', '/faqs'],
    ['Testimonials', '/Testimonials'],
    ['Career', '/Career'],
    ['Blogs', '/Blog'],
    ['Terms&Conditions', '/TermsConditions'],
    ['Privacy Policy', '/policy'],
  ];


  const [showLoginDropdown, setShowLoginDropdown] = useState(false);


  return (
    <header className="bg-gradient-to-r from-purple-800 to-purple-900 text-white py-3 px-4 shadow-md transition-all duration-500 ease-in-out">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 text-lg font-bold hover:scale-105 transition-transform duration-300">
          <img src={logo} alt="Logo" className="h-6" />
          A.K Infra Dream
        </Link>

        {/* Desktop Nav (only visible on large screens) */}
        <div className="hidden lg:flex items-center gap-6 text-sm">
        {/* onClick={handleFilter} */}
          {/* <Link to = "/search-results" className="bg-white text-purple-700 px-3 py-1 rounded-md font-semibold hover:bg-purple-100 transition duration-300"> */}
          <Link to = "/search-results" className="flex items-center gap-2 bg-white text-purple-700 px-3 py-1 rounded-md font-semibold hover:bg-purple-100 transition duration-300">
             <FaSearch />  Search
          </Link>

          {/* <Link to="/list-your-property" className="bg-white text-purple-700 px-3 py-1 rounded-md font-semibold hover:bg-purple-100 transition duration-300">
            Post Property <span className="text-pink-600 font-bold italic">FREE</span>
          </Link> */}

          <Link to="/newsignup" className="bg-white text-purple-700 px-3 py-1 rounded-md font-semibold hover:bg-purple-100 transition duration-300">
            About Us
          </Link>

          <Link to="/list-your-property" className="bg-white text-purple-700 px-3 py-1 rounded-md font-semibold hover:bg-purple-100 transition duration-300">
            Post Property <span className="text-pink-600 font-bold italic">FREE</span>
          </Link>

          {/* View More Dropdown */}
          <div className="relative group">
            <button className="flex items-center gap-1 bg-pink-600 px-3 py-1 rounded-md text-white font-bold hover:bg-pink-700 transition duration-300">
              View More ▼
            </button>
            <div className="absolute top-full left-0 bg-white text-purple-800 rounded-md shadow-md mt-1 p-2 hidden group-hover:block z-10 w-44">
              {navItems.map(([text, path]) => (
                <Link key={path} to={path} className="block px-3 py-1 hover:bg-purple-100 rounded transition duration-200">
                  {text}
                </Link>
              ))}
            </div>
          </div>

          {/* Login Dropdown */}
          <div className="relative group">
            <button className="flex items-center gap-1 bg-pink-600 px-3 py-1 rounded-md text-white font-bold hover:bg-pink-700 transition duration-300">
              SignUp / Login
            </button>
            <div className="absolute top-full left-0 bg-white text-purple-800 rounded-md shadow-md mt-1 p-2 hidden group-hover:block z-10 w-44">
              <Link to="/associatesignin" className="block px-3 py-1 hover:bg-purple-100 rounded transition duration-200">
                Associate Sign In
              </Link>
              <Link to="/customersignin" className="block px-3 py-1 hover:bg-purple-100 rounded transition duration-200">
                Customer Sign In
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile/Tablet Menu Toggle (visible on md and lg <) */}
        <div className="lg:hidden cursor-pointer transition-transform duration-300 hover:scale-110" onClick={() => setShowMenu(!showMenu)}>
          <Menu />
        </div>
      </div>

      {/* Mobile/Tablet Nav */}
      {showMenu && (
        <div className="lg:hidden mt-2 px-4 flex flex-col gap-4 text-sm animate-slideDown">
          
          <Link to="/search-results" className=" flex items-center gap-2 bg-white text-purple-700 px-3 py-1 rounded-md font-semibold hover:bg-purple-100 transition">
          <FaSearch />  Search
          </Link>


          <Link to="/list-your-property" className="bg-white text-purple-700 px-3 py-1 rounded-md font-semibold hover:bg-purple-100 transition">
            Post Property <span className="text-pink-600 font-bold italic">FREE</span>
          </Link>

          <Link to="/newsignup" className="bg-white text-purple-700 px-3 py-1 rounded-md font-semibold hover:bg-purple-100 transition">
            About Us
          </Link>

          {/* View More Dropdown */}
          <button
            onClick={() => setShowDropdown(!showDropdown)}
            className="flex items-center gap-1 bg-pink-600 px-3 py-1 rounded-md text-white font-bold hover:bg-pink-700 transition"
          >
            View More ▼
          </button>
          {showDropdown && (
            <div className="bg-white text-purple-800 rounded-md shadow-md p-2 w-44">
              {navItems.map(([text, path]) => (
                <Link key={path} to={path} className="block px-3 py-1 hover:bg-purple-100 rounded transition duration-200">
                  {text}
                </Link>
              ))}
            </div>
          )}

          {/* Login Dropdown - Mobile/Tablet */}
          {/* <div className="relative group">
            <button className="flex items-center gap-1 bg-pink-600 px-3 py-1 rounded-md text-white font-bold hover:bg-pink-700 transition">
              SignUp / Login
            </button>
            <div className=" bg-white text-purple-800 rounded-md shadow-md mt-1 p-2 hidden group-hover:block z-10 w-44">
              <Link to="/associatesignin" className="block px-3 py-1 hover:bg-purple-100 rounded transition duration-200">
                Associate Sign In
              </Link>
              <Link to="/customersignin" className="block px-3 py-1 hover:bg-purple-100 rounded transition duration-200">
                Customer Sign In
              </Link>
            </div>
          </div> */}

          {/* SignUp/Login - Mobile Dropdown */}
<button
  onClick={() => setShowLoginDropdown(!showLoginDropdown)}
  className="flex items-center gap-1 bg-pink-600 px-3 py-1 rounded-md text-white font-bold hover:bg-pink-700 transition"
>
  SignUp / Login ▼
</button>

{showLoginDropdown && (
  <div className="bg-white text-purple-800 rounded-md shadow-md p-2 w-44 animate-fadeIn">
    <Link to="/associatesignin" className="block px-3 py-1 hover:bg-purple-100 rounded transition duration-200">
      Associate Sign In
    </Link>
    <Link to="/customersignin" className="block px-3 py-1 hover:bg-purple-100 rounded transition duration-200">
      Customer Sign In
    </Link>
  </div>
)}





        </div>
      )}
    </header>
  );
};

export default Header;
