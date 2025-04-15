// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { FaSearch } from 'react-icons/fa';
// import Image1 from "/src/img/Image1.webp"

// const Home = () => {
//   const [category, setCategory] = useState('Buy');

//   const categories = ['Buy', 'Rent', 'Plots'];

//   const upCities = [
//     "Agra", "Aligarh", "Allahabad", "Amethi", "Amroha", "Ayodhya", "Azamgarh",
//     "Ballia", "Banda", "Barabanki", "Bareilly", "Basti", "Bijnor", "Budaun", 
//     "Bulandshahr", "Chandauli", "Deoria", "Etah", "Etawah", "Faizabad", 
//     "Farrukhabad", "Fatehpur", "Firozabad", "Gautam Buddha Nagar", "Ghaziabad",
//     "Ghazipur", "Gonda", "Gorakhpur", "Hamirpur", "Hardoi", "Hathras", 
//     "Jaunpur", "Jhansi", "Kannauj", "Kanpur", "Kaushambi", "Kushinagar", 
//     "Lakhimpur Kheri", "Lalitpur", "Lucknow", "Maharajganj", "Mahoba", 
//     "Mainpuri", "Mathura", "Meerut", "Mirzapur", "Moradabad", "Muzaffarnagar", 
//     "Pilibhit", "Pratapgarh", "Raebareli", "Rampur", "Saharanpur", "Sant Kabir Nagar", 
//     "Shahjahanpur", "Shamli", "Shravasti", "Siddharthnagar", "Sitapur", 
//     "Sonbhadra", "Sultanpur", "Unnao", "Varanasi"
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-r from-indigo-500 to-purple-500 text-white">
//       <div className="container mx-auto p-6">
//         <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-2">
//           Properties to {category.toLowerCase()} in <span className="text-white">Jaunpur </span>
//         </h1>
//         <p className="text-center text-lg mb-6">9K+ listings added daily and 65K+ total verified</p>

//         {/* Search bar */}
//         <div className="bg-white rounded-lg shadow-lg flex flex-col md:flex-row items-center justify-between p-4 md:px-8 gap-4 max-w-4xl mx-auto">
//           <select className="border p-2 rounded w-full md:w-1/4 text-black">
//             <option>Jaunpur</option>
//             <option>Allahabad </option>
//             <option>Banaras</option>
//             <option>Jaunpur</option>
//             <option>Jaunpur</option>
//             <option>Jaunpur</option>
//             <option>Jaunpur</option>
//             <option>Jaunpur</option>
//           </select>

//           <div className="bg-white rounded-lg shadow-lg flex flex-col md:flex-row items-center justify-between p-4 md:px-8 gap-4 max-w-4xl mx-auto">
//       <select className="border p-2 rounded w-full md:w-1/4 text-black">
//         {upCities.map((city, index) => (
//           <option key={index} value={city}>
//             {city}
//           </option>
//         ))}
//       </select>
//     </div>

//           <input
//             type="text"
//             placeholder={`Search for ${category.toLowerCase()} properties, locality, landmark, etc.`}
//             className="border p-2 rounded w-full md:w-2/3 text-black"
//           />

//           <button className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600 flex items-center gap-2">
//             <FaSearch /> Search
//           </button>
//         </div>

//         {/* Category Buttons */}
//         <div className="flex justify-center mt-6 space-x-4 text-sm md:text-base">
//           {categories.map((cat) => (
//             <button
//               key={cat}
//               onClick={() => setCategory(cat)}
//               className={`hover:underline ${category === cat ? 'font-bold underline' : ''}`}
//             >
//               {cat.toUpperCase()}
//             </button>
//           ))}
//         </div>

//         <div className="mt-8 text-center">
//           <p className="text-white">Are you a Property Owner? <Link to="/signup" className="underline font-semibold">Sell / Rent for FREE</Link></p>
//         </div>

//         <div className="mt-10 flex justify-center">
//           <img
//             src= {Image1}
//             alt="Couple Looking Out the Window"
//             className="rounded-lg shadow-lg w-full max-w-md"
//           />


//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;


// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { FaSearch } from 'react-icons/fa';
// import Image1 from "/src/img/Image1.webp";

// const Home = () => {
//   const [category, setCategory] = useState('Buy');

//   const categories = ['Buy', 'Rent', 'Plots'];

//   const upCities = [
//     "Agra", "Aligarh", "Allahabad", "Amethi", "Amroha", "Ayodhya", "Azamgarh",
//     "Ballia", "Banda", "Barabanki", "Bareilly", "Basti", "Bijnor", "Budaun", 
//     "Bulandshahr", "Chandauli", "Deoria", "Etah", "Etawah", "Faizabad", 
//     "Farrukhabad", "Fatehpur", "Firozabad", "Gautam Buddha Nagar", "Ghaziabad",
//     "Ghazipur", "Gonda", "Gorakhpur", "Hamirpur", "Hardoi", "Hathras", 
//     "Jaunpur", "Jhansi", "Kannauj", "Kanpur", "Kaushambi", "Kushinagar", 
//     "Lakhimpur Kheri", "Lalitpur", "Lucknow", "Maharajganj", "Mahoba", 
//     "Mainpuri", "Mathura", "Meerut", "Mirzapur", "Moradabad", "Muzaffarnagar", 
//     "Pilibhit", "Pratapgarh", "Raebareli", "Rampur", "Saharanpur", "Sant Kabir Nagar", 
//     "Shahjahanpur", "Shamli", "Shravasti", "Siddharthnagar", "Sitapur", 
//     "Sonbhadra", "Sultanpur", "Unnao", "Varanasi"
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-r from-indigo-500 to-purple-500 text-white">
//       <div className="container mx-auto p-6">
//         <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-2">
//           Properties to {category.toLowerCase()} in <span className="text-white">Jaunpur</span>
//         </h1>
//         <p className="text-center text-lg mb-6">9K+ listings added daily and 65K+ total verified</p>

//         {/* Search bar */}
//         <div className="bg-white rounded-lg shadow-lg flex flex-col md:flex-row items-center justify-between p-4 md:px-8 gap-4 max-w-4xl mx-auto">
//           <select className="border p-2 rounded w-full md:w-1/4 text-black">
//             {upCities.map((city, index) => (
//               <option key={index} value={city}>
//                 {city}
//               </option>
//             ))}
//           </select>

//           <input
//             type="text"
//             placeholder={`Search for ${category.toLowerCase()} properties, locality, landmark, etc.`}
//             className="border p-2 rounded w-full md:w-2/3 text-black"
//           />

//           <button className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600 flex items-center gap-2">
//             <FaSearch /> Search
//           </button>
//         </div>

//         {/* Category Buttons */}
//         <div className="flex justify-center mt-6 space-x-4 text-sm md:text-base">
//           {categories.map((cat) => (
//             <button
//               key={cat}
//               onClick={() => setCategory(cat)}
//               className={`hover:underline ${category === cat ? 'font-bold underline' : ''}`}
//             >
//               {cat.toUpperCase()}
//             </button>
//           ))}
//         </div>

//         <div className="mt-8 text-center">
//           <p className="text-white">
//             Are you a Property Owner?{' '}
//             <Link to="/signup" className="underline font-semibold">
//               Sell / Rent for FREE
//             </Link>
//           </p>
//         </div>

//         <div className="mt-10 flex justify-center">
//           <img
//             src={Image1}
//             alt="Couple Looking Out the Window"
//             className="rounded-lg shadow-lg w-full max-w-md"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;


// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { FaSearch } from 'react-icons/fa';
// import Image1 from "/src/img/Image1.webp";

// const Home = () => {
//   const [category, setCategory] = useState('Buy');
//   const [selectedCity, setSelectedCity] = useState('Jaunpur');
//   const navigate = useNavigate();

//   const categories = ['Buy', 'Rent', 'Plots'];

//   const upCities = [
//     "Agra", "Aligarh", "Allahabad", "Amethi", "Amroha", "Ayodhya", "Azamgarh",
//     "Ballia", "Banda", "Barabanki", "Bareilly", "Basti", "Bijnor", "Budaun", 
//     "Bulandshahr", "Chandauli", "Deoria", "Etah", "Etawah", "Faizabad", 
//     "Farrukhabad", "Fatehpur", "Firozabad", "Gautam Buddha Nagar", "Ghaziabad",
//     "Ghazipur", "Gonda", "Gorakhpur", "Hamirpur", "Hardoi", "Hathras", 
//     "Jaunpur", "Jhansi", "Kannauj", "Kanpur", "Kaushambi", "Kushinagar", 
//     "Lakhimpur Kheri", "Lalitpur", "Lucknow", "Maharajganj", "Mahoba", 
//     "Mainpuri", "Mathura", "Meerut", "Mirzapur", "Moradabad", "Muzaffarnagar", 
//     "Pilibhit", "Pratapgarh", "Raebareli", "Rampur", "Saharanpur", "Sant Kabir Nagar", 
//     "Shahjahanpur", "Shamli", "Shravasti", "Siddharthnagar", "Sitapur", 
//     "Sonbhadra", "Sultanpur", "Unnao", "Varanasi"
//   ];

//   // Navigate when a new city is selected
//   const handleCityChange = (e) => {
//     const city = e.target.value;
//     setSelectedCity(city);
//     navigate(`/city/${city}`);
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-r from-indigo-500 to-purple-500 text-white">
//       <div className="container mx-auto p-6">
//         <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-2">
//           Properties to {category.toLowerCase()} in <span className="text-white">{selectedCity}</span>
//         </h1>
//         <p className="text-center text-lg mb-6">9K+ listings added daily and 65K+ total verified</p>

//         {/* Search bar */}
//         <div className="bg-white rounded-lg shadow-lg flex flex-col md:flex-row items-center justify-between p-4 md:px-8 gap-4 max-w-4xl mx-auto">
//           <select
//             className="border p-2 rounded w-full md:w-1/4 text-black"
//             onChange={handleCityChange}
//             value={selectedCity}
//           >
//             {upCities.map((city, index) => (
//               <option key={index} value={city}>
//                 {city}
//               </option>
//             ))}
//           </select>

//           <input
//             type="text"
//             placeholder={`Search for ${category.toLowerCase()} properties, locality, landmark, etc.`}
//             className="border p-2 rounded w-full md:w-2/3 text-black"
//           />

//           <button className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600 flex items-center gap-2">
//             <FaSearch /> Search
//           </button>
//         </div>

//         {/* Category Buttons */}
//         <div className="flex justify-center mt-6 space-x-4 text-sm md:text-base">
//           {categories.map((cat) => (
//             <button
//               key={cat}
//               onClick={() => setCategory(cat)}
//               className={`hover:underline ${category === cat ? 'font-bold underline' : ''}`}
//             >
//               {cat.toUpperCase()}
//             </button>
//           ))}
//         </div>

//         <div className="mt-8 text-center">
//           <p className="text-white">
//             Are you a Property Owner?{' '}
//             <Link to="/signup" className="underline font-semibold">
//               Sell / Rent for FREE
//             </Link>
//           </p>
//         </div>

//         <div className="mt-10 flex justify-center">
//           <img
//             src={Image1}
//             alt="Couple Looking Out the Window"
//             className="rounded-lg shadow-lg w-full max-w-md"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;


// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { FaSearch } from 'react-icons/fa';
// import Image1 from "/src/img/Image1.webp";

// const Home = () => {
//   const [category, setCategory] = useState('Buy');
//   const [selectedCity, setSelectedCity] = useState('Jaunpur');
//   const [searchInput, setSearchInput] = useState('');
//   const navigate = useNavigate();

//   const categories = ['Buy', 'Rent', 'Plots'];

//   const upCities = [
//     "Agra", "Aligarh", "Allahabad", "Amethi", "Amroha", "Ayodhya", "Azamgarh",
//     "Ballia", "Banda", "Barabanki", "Bareilly", "Basti", "Bijnor", "Budaun", 
//     "Bulandshahr", "Chandauli", "Deoria", "Etah", "Etawah", "Faizabad", 
//     "Farrukhabad", "Fatehpur", "Firozabad", "Gautam Buddha Nagar", "Ghaziabad",
//     "Ghazipur", "Gonda", "Gorakhpur", "Hamirpur", "Hardoi", "Hathras", 
//     "Jaunpur", "Jhansi", "Kannauj", "Kanpur", "Kaushambi", "Kushinagar", 
//     "Lakhimpur Kheri", "Lalitpur", "Lucknow", "Maharajganj", "Mahoba", 
//     "Mainpuri", "Mathura", "Meerut", "Mirzapur", "Moradabad", "Muzaffarnagar", 
//     "Pilibhit", "Pratapgarh", "Raebareli", "Rampur", "Saharanpur", "Sant Kabir Nagar", 
//     "Shahjahanpur", "Shamli", "Shravasti", "Siddharthnagar", "Sitapur", 
//     "Sonbhadra", "Sultanpur", "Unnao", "Varanasi"
//   ];

//   const handleCityChange = (e) => {
//     const city = e.target.value;
//     setSelectedCity(city);
//   };

//   const handleSearch = () => {
//     if (searchInput.trim() !== '') {
//       navigate(`/city/${selectedCity}/property?q=${encodeURIComponent(searchInput)}`);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-r from-indigo-500 to-purple-500 text-white">
//       <div className="container mx-auto p-6">
//         <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-2">
//           Properties to {category.toLowerCase()} in <span className="text-white">{selectedCity}</span>
//         </h1>
//         <p className="text-center text-lg mb-6">9K+ listings added daily and 65K+ total verified</p>

//         {/* Search bar */}
//         <div className="bg-white rounded-lg shadow-lg flex flex-col md:flex-row items-center justify-between p-4 md:px-8 gap-4 max-w-4xl mx-auto">
//           <select
//             className="border p-2 rounded w-full md:w-1/4 text-black"
//             onChange={handleCityChange}
//             value={selectedCity}
//           >
//             {upCities.map((city, index) => (
//               <option key={index} value={city}>
//                 {city}
//               </option>
//             ))}
//           </select>

//           <input
//             type="text"
//             value={searchInput}
//             onChange={(e) => setSearchInput(e.target.value)}
//             placeholder={`Search for ${category.toLowerCase()} properties, locality, landmark, etc.`}
//             className="border p-2 rounded w-full md:w-2/3 text-black"
//           />

//           <button
//             onClick={handleSearch}
//             className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600 flex items-center gap-2"
//           >
//             <FaSearch /> Search
//           </button>
//         </div>

//         {/* Category Buttons */}
//         <div className="flex justify-center mt-6 space-x-4 text-sm md:text-base">
//           {categories.map((cat) => (
//             <button
//               key={cat}
//               onClick={() => setCategory(cat)}
//               className={`hover:underline ${category === cat ? 'font-bold underline' : ''}`}
//             >
//               {cat.toUpperCase()}
//             </button>
//           ))}
//         </div>

//         <div className="mt-8 text-center">
//           <p className="text-white">
//             Are you a Property Owner?{' '}
//             <Link to="/signup" className="underline font-semibold">
//               Sell / Rent for FREE
//             </Link>
//           </p>
//         </div>

//         <div className="mt-10 flex justify-center">
//           <img
//             src={Image1}
//             alt="Couple Looking Out the Window"
//             className="rounded-lg shadow-lg w-full max-w-md"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;


import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Image1 from "/src/img/Image1.webp";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay },
});

const Home = () => {
  const [category, setCategory] = useState('Buy');
  const [selectedCity, setSelectedCity] = useState('Jaunpur');
  const [searchInput, setSearchInput] = useState('');
  const navigate = useNavigate();

  const categories = ['Buy', 'Rent', 'Plots'];

  const upCities = [
    "Agra", "Aligarh", "Allahabad", "Amethi", "Amroha", "Ayodhya", "Azamgarh",
    "Ballia", "Banda", "Barabanki", "Bareilly", "Basti", "Bijnor", "Budaun",
    "Bulandshahr", "Chandauli", "Deoria", "Etah", "Etawah", "Faizabad",
    "Farrukhabad", "Fatehpur", "Firozabad", "Gautam Buddha Nagar", "Ghaziabad",
    "Ghazipur", "Gonda", "Gorakhpur", "Hamirpur", "Hardoi", "Hathras",
    "Jaunpur", "Jhansi", "Kannauj", "Kanpur", "Kaushambi", "Kushinagar",
    "Lakhimpur Kheri", "Lalitpur", "Lucknow", "Maharajganj", "Mahoba",
    "Mainpuri", "Mathura", "Meerut", "Mirzapur", "Moradabad", "Muzaffarnagar",
    "Pilibhit", "Pratapgarh", "Raebareli", "Rampur", "Saharanpur", "Sant Kabir Nagar",
    "Shahjahanpur", "Shamli", "Shravasti", "Siddharthnagar", "Sitapur",
    "Sonbhadra", "Sultanpur", "Unnao", "Varanasi"
  ];

  const handleCityChange = (e) => setSelectedCity(e.target.value);

  const handleSearch = () => {
    if (searchInput.trim() !== '') {
      navigate(`/city/${selectedCity}/property?q=${encodeURIComponent(searchInput)}`);
      // navigate(`/top-rent/${selectedCity}/top-rent?q=${encodeURIComponent(searchInput)}`);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-800 to-purple-900 text-white flex items-center">
      <div className="container mx-auto px-6 py-12 md:py-24 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Hero Text Section */}
        <motion.div {...fadeUp(0)}>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
            Properties to <span className="text-yellow-300">{category.toLowerCase()}</span> in <span className="text-white">{selectedCity}</span>
          </h1>
          <motion.p className="text-lg mb-6" {...fadeUp(0.2)}>
            9K+ listings added daily and 65K+ total verified properties across Uttar Pradesh.
          </motion.p>

          {/* Search bar */}
          <motion.div
            className="bg-white rounded-xl shadow-lg flex flex-col md:flex-row items-center justify-between p-4 gap-4 mb-6 max-w-2xl"
            {...fadeUp(0.3)}
          >
            <select
              className="border p-2 rounded w-full md:w-1/4 text-black"
              onChange={handleCityChange}
              value={selectedCity}
            >
              {upCities.map((city, index) => (
                <option key={index} value={city}>{city}</option>
              ))}
            </select>

            <input
              type="text"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              placeholder={`Search for ${category.toLowerCase()} properties, locality, etc.`}
              className="border p-2 rounded w-full md:w-2/3 text-black"
            />

            <button
              onClick={handleSearch}
              className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600 flex items-center gap-2 w-full md:w-auto"
            >
              <FaSearch /> Search
            </button>
          </motion.div>

          {/* Category Toggle */}
          <motion.div className="flex space-x-4 text-base" {...fadeUp(0.4)}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`hover:underline ${category === cat ? 'font-bold underline text-yellow-300' : ''}`}
              >
                {cat.toUpperCase()}
              </button>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div className="mt-6" {...fadeUp(0.5)}>
            <p>
              Are you a Property Owner?{' '}
              <Link to="/signup" className="underline font-semibold text-yellow-200">
                Sell / Rent for FREE
              </Link>
            </p>
          </motion.div>
        </motion.div>

        {/* Hero Image */}
        <motion.div className="text-center md:text-right" {...fadeUp(0.6)}>
          <img
            src={Image1}
            alt="Couple Looking Out the Window"
            className="rounded-2xl shadow-2xl max-w-md w-full mx-auto md:mx-0"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;











// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { FaSearch } from 'react-icons/fa';
// import { motion } from 'framer-motion';
// import Image1 from "/src/img/Image1.webp";

// const fadeUp = (delay = 0) => ({
//   initial: { opacity: 0, y: 30 },
//   animate: { opacity: 1, y: 0 },
//   transition: { duration: 0.6, delay },
// });

// const Home = () => {
//   const [category, setCategory] = useState('Buy');
//   const [selectedCity, setSelectedCity] = useState('Jaunpur');
//   const [searchInput, setSearchInput] = useState('');
//   const navigate = useNavigate();

//   const categories = ['Buy', 'Rent', 'Plots'];

//   const upCities = [
//     "Agra", "Aligarh", "Allahabad", "Amethi", "Amroha", "Ayodhya", "Azamgarh",
//     "Ballia", "Banda", "Barabanki", "Bareilly", "Basti", "Bijnor", "Budaun",
//     "Bulandshahr", "Chandauli", "Deoria", "Etah", "Etawah", "Faizabad",
//     "Farrukhabad", "Fatehpur", "Firozabad", "Gautam Buddha Nagar", "Ghaziabad",
//     "Ghazipur", "Gonda", "Gorakhpur", "Hamirpur", "Hardoi", "Hathras",
//     "Jaunpur", "Jhansi", "Kannauj", "Kanpur", "Kaushambi", "Kushinagar",
//     "Lakhimpur Kheri", "Lalitpur", "Lucknow", "Maharajganj", "Mahoba",
//     "Mainpuri", "Mathura", "Meerut", "Mirzapur", "Moradabad", "Muzaffarnagar",
//     "Pilibhit", "Pratapgarh", "Raebareli", "Rampur", "Saharanpur", "Sant Kabir Nagar",
//     "Shahjahanpur", "Shamli", "Shravasti", "Siddharthnagar", "Sitapur",
//     "Sonbhadra", "Sultanpur", "Unnao", "Varanasi"
//   ];

//   const handleCityChange = (e) => setSelectedCity(e.target.value);

//   const handleSearch = () => {
//     if (searchInput.trim() !== '') {
//       navigate(`/city/${selectedCity}/property?q=${encodeURIComponent(searchInput)}`);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
//       <div className="container mx-auto px-6 py-12 md:py-24 grid md:grid-cols-2 gap-12 items-center">
//         {/* Hero Text Section */}
//         <motion.div {...fadeUp(0)}>
//           <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
//             Properties to <span className="text-yellow-300">{category.toLowerCase()}</span> in <span className="text-white">{selectedCity}</span>
//           </h1>
//           <motion.p className="text-lg mb-6" {...fadeUp(0.2)}>
//             9K+ listings added daily and 65K+ total verified properties across Uttar Pradesh.
//           </motion.p>

//           {/* Search bar */}
//           <motion.div className="bg-white rounded-xl shadow-lg flex flex-col md:flex-row items-center justify-between p-4 gap-4 mb-6 max-w-2xl" {...fadeUp(0.3)}>
//             <select
//               className="border p-2 rounded w-full md:w-1/4 text-black"
//               onChange={handleCityChange}
//               value={selectedCity}
//             >
//               {upCities.map((city, index) => (
//                 <option key={index} value={city}>{city}</option>
//               ))}
//             </select>

//             <input
//               type="text"
//               value={searchInput}
//               onChange={(e) => setSearchInput(e.target.value)}
//               placeholder={`Search for ${category.toLowerCase()} properties, locality, etc.`}
//               className="border p-2 rounded w-full md:w-2/3 text-black"
//             />

//             <button
//               onClick={handleSearch}
//               className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600 flex items-center gap-2 w-full md:w-auto"
//             >
//               <FaSearch /> Search
//             </button>
//           </motion.div>

//           {/* Category Toggle */}
//           <motion.div className="flex space-x-4 text-base" {...fadeUp(0.4)}>
//             {categories.map((cat) => (
//               <button
//                 key={cat}
//                 onClick={() => setCategory(cat)}
//                 className={`hover:underline ${category === cat ? 'font-bold underline text-yellow-300' : ''}`}
//               >
//                 {cat.toUpperCase()}
//               </button>
//             ))}
//           </motion.div>

//           {/* CTA */}
//           <motion.div className="mt-6" {...fadeUp(0.5)}>
//             <p>
//               Are you a Property Owner?{' '}
//               <Link to="/signup" className="underline font-semibold text-yellow-200">
//                 Sell / Rent for FREE
//               </Link>
//             </p>
//           </motion.div>
//         </motion.div>

//         {/* Hero Image */}
//         <motion.div className="text-center md:text-right" {...fadeUp(0.6)}>
//           <img
//             src={Image1}
//             alt="Hero"
//             className="rounded-2xl shadow-2xl max-w-md w-full mx-auto md:mx-0"
//           />
//         </motion.div>
//       </div>

//       {/* Filters Section */}
//       <div className="bg-white text-black px-6 py-10">
//         <h2 className="text-2xl font-semibold mb-4">Filters</h2>
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//           <div>
//             <h3 className="font-semibold mb-2">Available For</h3>
//             <div className="space-y-1">
//               <label><input type="checkbox" /> Working Professionals</label><br />
//               <label><input type="checkbox" /> Students</label><br />
//               <label><input type="checkbox" /> Girls</label><br />
//               <label><input type="checkbox" /> Boys</label>
//             </div>
//           </div>

//           <div>
//             <h3 className="font-semibold mb-2">Sharing</h3>
//             <div className="space-y-1">
//               <label><input type="checkbox" /> Private Room</label><br />
//               <label><input type="checkbox" /> 2 per Room</label><br />
//               <label><input type="checkbox" /> More than 2 per Room</label>
//             </div>
//           </div>

//           <div>
//             <h3 className="font-semibold mb-2">Type of Property</h3>
//             <div className="space-y-1">
//               <label><input type="checkbox" /> Independent House/Villa</label><br />
//               <label><input type="checkbox" /> Residential Apartment</label><br />
//               <label><input type="checkbox" /> Independent/Builder Floor</label><br />
//               <label><input type="checkbox" /> 1 RK/Studio Apartment</label>
//             </div>
//           </div>

//           <div>
//             <h3 className="font-semibold mb-2">PG Services</h3>
//             <div className="space-y-1">
//               <label><input type="checkbox" /> Food Service</label><br />
//               <label><input type="checkbox" /> Wifi</label><br />
//               <label><input type="checkbox" /> AC Room</label><br />
//               <label><input type="checkbox" /> Laundry Available</label><br />
//               <label><input type="checkbox" /> Wheelchair Friendly</label>
//             </div>
//           </div>

//           <div>
//             <h3 className="font-semibold mb-2">Amenities</h3>
//             <div className="space-y-1">
//               <label><input type="checkbox" /> Power Backup</label><br />
//               <label><input type="checkbox" /> Parking</label><br />
//               <label><input type="checkbox" /> Vaastu Compliant</label><br />
//               <label><input type="checkbox" /> Park</label><br />
//               <label><input type="checkbox" /> Swimming Pool</label>
//             </div>
//           </div>

//           <div>
//             <h3 className="font-semibold mb-2">Furnishing Status</h3>
//             <div className="space-y-1">
//               <label><input type="checkbox" /> Furnished</label><br />
//               <label><input type="checkbox" /> Semi-Furnished</label><br />
//               <label><input type="checkbox" /> Unfurnished</label>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;


// import React, { useState } from 'react';

// const FilterSidebar = () => {
//   const [hideSeen, setHideSeen] = useState(false);
//   const [attachedBathroom, setAttachedBathroom] = useState(false);
//   const [budgetRange, setBudgetRange] = useState([0, 1000000]);
//   const [filtersOpen, setFiltersOpen] = useState({
//     availableFor: true,
//     sharing: true,
//     budget: true,
//   });

//   const toggleFilter = (key) => {
//     setFiltersOpen((prev) => ({ ...prev, [key]: !prev[key] }));
//   };

//   const toggleOption = (key) => {
//     return `border rounded-full px-3 py-1 text-sm cursor-pointer m-1 bg-gray-100 hover:bg-blue-100`;
//   };

//   return (
//     <div className="bg-white p-4 rounded-lg w-full md:w-80 shadow-md">
//       {/* Switches */}
//       <div className="flex justify-between items-center mb-4">
//         <span>Hide already seen</span>
//         <label className="relative inline-flex items-center cursor-pointer">
//           <input type="checkbox" checked={hideSeen} onChange={() => setHideSeen(!hideSeen)} className="sr-only peer" />
//           <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-checked:bg-blue-600 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
//         </label>
//       </div>

//       <div className="flex justify-between items-center mb-4">
//         <span>Attached Bathroom</span>
//         <label className="relative inline-flex items-center cursor-pointer">
//           <input type="checkbox" checked={attachedBathroom} onChange={() => setAttachedBathroom(!attachedBathroom)} className="sr-only peer" />
//           <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-checked:bg-blue-600 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
//         </label>
//       </div>

//       {/* Budget Filter */}
//       <div className="mb-4">
//         <div className="flex justify-between items-center mb-2 cursor-pointer" onClick={() => toggleFilter('budget')}>
//           <span className="font-semibold">Budget</span>
//           <span>{filtersOpen.budget ? '-' : '+'}</span>
//         </div>
//         {filtersOpen.budget && (
//           <div>
//             <input type="range" min="0" max="1000000" step="50000" value={budgetRange[1]} onChange={(e) => setBudgetRange([0, parseInt(e.target.value)])} className="w-full mb-2" />
//             <div className="flex gap-2">
//               <input className="border p-1 w-1/2 rounded text-sm" placeholder="Min Budget" />
//               <input className="border p-1 w-1/2 rounded text-sm" placeholder="Max Budget" />
//             </div>
//           </div>
//         )}
//       </div>

//       {/* Available For */}
//       <div className="mb-4">
//         <div className="flex justify-between items-center mb-2 cursor-pointer" onClick={() => toggleFilter('availableFor')}>
//           <span className="font-semibold">Available for</span>
//           <span>{filtersOpen.availableFor ? '-' : '+'}</span>
//         </div>
//         {filtersOpen.availableFor && (
//           <div className="flex flex-wrap">
//             {['Working Professionals', 'Students', 'Girls', 'Boys'].map((opt) => (
//               <div key={opt} className={toggleOption()}>{opt}</div>
//             ))}
//           </div>
//         )}
//       </div>

//       {/* Sharing */}
//       <div className="mb-4">
//         <div className="flex justify-between items-center mb-2 cursor-pointer" onClick={() => toggleFilter('sharing')}>
//           <span className="font-semibold">Sharing</span>
//           <span>{filtersOpen.sharing ? '-' : '+'}</span>
//         </div>
//         {filtersOpen.sharing && (
//           <div className="flex flex-wrap">
//             {['Private Room', '2 per Room', 'More than 2 per Room'].map((opt) => (
//               <div key={opt} className={toggleOption()}>{opt}</div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default FilterSidebar;
