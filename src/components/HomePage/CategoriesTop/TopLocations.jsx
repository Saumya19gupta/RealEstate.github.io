import React, { useEffect, useRef } from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const topLocations = [
  {
    name: "Gomti Nagar",
    city: "Lucknow",
    description:
      "Upscale area in Lucknow with excellent infrastructure and green surroundings.",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
  },
  {
    name: "Indira Nagar",
    city: "Lucknow",
    description:
      "Popular residential location with schools, hospitals, and shopping centers.",
    img: "https://images.unsplash.com/photo-1570129477492-45c003edd2be",
  },
  {
    name: "Sushant Golf City",
    city: "Lucknow",
    description:
      "Modern township with luxury villas near Shaheed Path.",
    img: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914",
  },
  {
    name: "Cantonment Area",
    city: "Varanasi",
    description: "Well-developed and peaceful living area in Varanasi.",
    img: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914",
  },
  {
    name: "Civil Lines",
    city: "Prayagraj",
    description: "Prime commercial and residential hub in Prayagraj.",
    img: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6",
  },
  {
    name: "Kamla Nagar",
    city: "Agra",
    description:
      "Ideal for families and retail businesses in central Agra.",
    img: "https://images.unsplash.com/photo-1570129477492-45c003edd2be",
  },
  {
    name: "Meja",
    city: "Prayagraj",
    description:
      "Peaceful and developing town area ideal for long-term investments.",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
  },
];

export default function TopLocations() {
  const sliderRef = useRef(null);

  // Force autoplay restart on mount
  useEffect(() => {
    const slider = sliderRef.current;
    if (slider && slider.slickPlay) {
      slider.slickPlay();
    }
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2500,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    pauseOnHover: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className="p-6 md:p-10 bg-gray-100 min-h-screen">
      <motion.h1
        className="text-2xl md:text-4xl font-bold text-center text-gray-800 mb-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Top Real Estate Locations in Uttar Pradesh
      </motion.h1>

      <Slider ref={sliderRef} {...settings}>
        {topLocations.map((location, index) => (
          <motion.div
            key={index}
            className="px-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
              <img
                src={location.img}
                alt={location.name}
                className="w-full h-52 object-cover"
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-800">
                  {location.name}, {location.city}
                </h2>
                <p className="text-sm text-gray-600 mt-1">
                  {location.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </Slider>
    </div>
  );
}





// import React from "react";
// import { motion } from "framer-motion";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const topLocations = [
//   {
//     name: "Gomti Nagar",
//     city: "Lucknow",
//     description:
//       "Upscale area in Lucknow with excellent infrastructure and green surroundings.",
//     img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
//   },
//   {
//     name: "Indira Nagar",
//     city: "Lucknow",
//     description:
//       "Popular residential location with schools, hospitals, and shopping centers.",
//     img: "https://images.unsplash.com/photo-1570129477492-45c003edd2be",
//   },
//   {
//     name: "Sushant Golf City",
//     city: "Lucknow",
//     description:
//       "Modern township with luxury villas near Shaheed Path.",
//     img: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914",
//   },
//   {
//     name: "Cantonment Area",
//     city: "Varanasi",
//     description:
//       "Well-developed and peaceful living area in Varanasi.",
//     img: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914",
//   },
//   {
//     name: "Civil Lines",
//     city: "Prayagraj",
//     description:
//       "Prime commercial and residential hub in Prayagraj.",
//     img: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6",
//   },
//   {
//     name: "Kamla Nagar",
//     city: "Agra",
//     description:
//       "Ideal for families and retail businesses in central Agra.",
//     img: "https://images.unsplash.com/photo-1570129477492-45c003edd2be",
//   },
//   {
//     name: "Meja",
//     city: "Prayagraj",
//     description:
//       "Peaceful and developing town area ideal for long-term investments.",
//     img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
//   },
// ];

// export default function TopLocations() {
//   const sliderSettings = {
//     dots: true,
//     infinite: true,
//     speed: 700,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 2500,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: { slidesToShow: 2 },
//       },
//       {
//         breakpoint: 640,
//         settings: { slidesToShow: 1 },
//       },
//     ],
//   };

//   return (
//     <div className="p-6 md:p-10 bg-gray-50">
//       <motion.h1
//         className="text-2xl md:text-4xl font-bold text-center text-gray-800 mb-8"
//         initial={{ opacity: 0, y: -30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//       >
//         Top Real Estate Locations in Uttar Pradesh
//       </motion.h1>

//       <Slider {...sliderSettings}>
//         {topLocations.map((location, index) => (
//           <motion.div
//             key={index}
//             className="px-3"
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.4, delay: index * 0.1 }}
//           >
//             <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300">
//               <img
//                 src={location.img}
//                 alt={location.name}
//                 className="w-full h-48 object-cover"
//               />
//               <div className="p-4">
//                 <h2 className="text-xl font-semibold text-gray-800 mb-1">
//                   {location.name}, {location.city}
//                 </h2>
//                 <p className="text-gray-600 text-sm">{location.description}</p>
//               </div>
//             </div>
//           </motion.div>
//         ))}
//       </Slider>
//     </div>
//   );
// }






// import React from "react";
// import { motion } from "framer-motion";

// const topLocations = [
//   {
//     name: "Gomti Nagar",
//     city: "Lucknow",
//     description: "One of the most upscale areas in Lucknow with excellent infrastructure and connectivity.",
//     img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c", // Sample placeholder
//   },
//   {
//     name: "Indira Nagar",
//     city: "Lucknow",
//     description: "A popular residential location with schools, hospitals, and shopping centers.",
//     img: "https://images.unsplash.com/photo-1570129477492-45c003edd2be", // Sample placeholder
//   },
//   {
//     name: "Sushant Golf City",
//     city: "Lucknow",
//     description: "Modern township with luxury villas and green surroundings near Shaheed Path.",
//     img: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914", // Sample placeholder
//   },
//   {
//     name: "Cantonment Area",
//     city: "Varanasi",
//     description: "Well-developed area in Varanasi known for peaceful living and modern homes.",
//     img: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914", // Sample placeholder
//   },
//   {
//     name: "Civil Lines",
//     city: "Prayagraj",
//     description: "Prime area for commercial and residential property with good amenities.",
//     img: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6", // Sample placeholder
//   },
//   {
//     name: "Kamla Nagar",
//     city: "Agra",
//     description: "Central Agra location ideal for families and retail businesses.",
//     img: "https://images.unsplash.com/photo-1570129477492-45c003edd2be", // Sample placeholder
//   },
// ];

// export default function TopLocations() {
//   return (
//     <div className="p-6 md:p-10 bg-gray-50 min-h-screen">

//       <SearchResults />
      


//       <motion.h1
//         className="text-2xl md:text-4xl font-bold text-gray-800 mb-8 text-center"
//         initial={{ opacity: 0, y: -30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//       >
//         Top Real Estate Locations in Uttar Pradesh
//       </motion.h1>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//         {topLocations.map((location, index) => (
//           <motion.div
//             key={index}
//             className="bg-white rounded-2xl shadow-lg overflow-hidden"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: index * 0.2, duration: 0.5 }}
//           >
//             <img
//               src={location.img}
//               alt={location.name}
//               className="w-full h-48 object-cover"
//             />
//             <div className="p-4">
//               <h2 className="text-xl font-semibold text-gray-800">
//                 {location.name}, {location.city}
//               </h2>
//               <p className="text-sm text-gray-600 mt-2">{location.description}</p>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// }



// import React, { useState } from "react";
// import { motion } from "framer-motion";

// const propertyTypes = [
//   "Multistorey Apartment",
//   "Builder Floor Apartment",
//   "Penthouse",
//   "Studio Apartment",
//   "Residential House",
//   "Villa",
// ];

// const postedSinceOptions = [
//   "All",
//   "Yesterday",
//   "Last Week",
//   "Last 2 Weeks",
//   "Last 3 Weeks",
//   "Last Month",
//   "Last 2 Months",
//   "Last 4 Months",
// ];

// export default function PropertyFilters() {
//   const [selectedTypes, setSelectedTypes] = useState([
//     "Multistorey Apartment",
//     "Builder Floor Apartment",
//     "Penthouse",
//     "Studio Apartment",
//     "Residential House",
//     "Villa",
//   ]);
//   const [saleType, setSaleType] = useState(null);
//   const [postedSince, setPostedSince] = useState("All");

//   const toggleType = (type) => {
//     setSelectedTypes((prev) =>
//       prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
//     );
//   };

//   return (
//     <div className="p-4 md:p-8 bg-white rounded-lg shadow-xl w-full max-w-4xl mx-auto mt-6">
//       <motion.h2
//         className="text-xl md:text-2xl font-bold text-gray-800 mb-6"
//         initial={{ opacity: 0, y: -10 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//       >
//         Filter Properties
//       </motion.h2>

//       {/* Sub Property Type */}
//       <div className="mb-6">
//         <p className="font-medium text-gray-700 mb-2">Sub Property Type</p>
//         <div className="flex flex-wrap gap-2">
//           {propertyTypes.map((type) => (
//             <motion.button
//               key={type}
//               onClick={() => toggleType(type)}
//               className={`px-3 py-1 text-sm rounded-full border transition-all duration-300 ${
//                 selectedTypes.includes(type)
//                   ? "bg-green-100 text-green-700 border-green-300"
//                   : "bg-gray-100 text-gray-700 border-gray-300"
//               }`}
//               whileTap={{ scale: 0.95 }}
//             >
//               {type}
//             </motion.button>
//           ))}
//         </div>
//       </div>

//       {/* Sale Type */}
//       <div className="mb-6">
//         <p className="font-medium text-gray-700 mb-2">Sale Type</p>
//         <div className="flex gap-2">
//           {["New", "Resale"].map((type) => (
//             <motion.button
//               key={type}
//               onClick={() => setSaleType(type)}
//               className={`px-3 py-1 text-sm rounded-full border transition-all duration-300 ${
//                 saleType === type
//                   ? "bg-red-100 text-red-700 border-red-300"
//                   : "bg-gray-100 text-gray-700 border-gray-300"
//               }`}
//               whileTap={{ scale: 0.95 }}
//             >
//               + {type}
//             </motion.button>
//           ))}
//         </div>
//       </div>

//       {/* Posted Since */}
//       <div className="mb-6">
//         <p className="font-medium text-gray-700 mb-2">Posted Since</p>
//         <div className="flex flex-wrap gap-2">
//           {postedSinceOptions.map((option) => (
//             <motion.button
//               key={option}
//               onClick={() => setPostedSince(option)}
//               className={`px-3 py-1 text-sm rounded-full border transition-all duration-300 ${
//                 postedSince === option
//                   ? "bg-blue-100 text-blue-700 border-blue-300"
//                   : "bg-gray-100 text-gray-700 border-gray-300"
//               }`}
//               whileTap={{ scale: 0.95 }}
//             >
//               {option}
//             </motion.button>
//           ))}
//         </div>
//       </div>

//       {/* Footer Buttons */}
//       <div className="flex justify-between items-center mt-8">
//         <button
//           onClick={() => {
//             setSelectedTypes([]);
//             setSaleType(null);
//             setPostedSince("All");
//           }}
//           className="text-sm px-4 py-2 border border-gray-400 text-gray-700 rounded-md transition duration-300 hover:bg-gray-100"
//         >
//           Clear All
//         </button>

//         <button className="bg-red-500 text-white px-6 py-2 rounded-md transition duration-300 hover:bg-red-600">
//           View 129 Properties
//         </button>
//       </div>
//     </div>
//   );
// }




