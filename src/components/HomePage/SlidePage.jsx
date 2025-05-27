// import React from 'react';
// import Slider from 'react-slick';
// // Removed: import 'slick-carousel/slick/slick.css';
// // Removed: import 'slick-carousel/slick/slick-theme.css';

// const SlidingPage = ({ data }) => {
//     const settings = {
//         dots: true,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 3,
//         slidesToScroll: 1,
//         autoplay: true,
//         autoplaySpeed: 3000,
//         responsive: [
//             {
//                 breakpoint: 768,
//                 settings: {
//                     slidesToShow: 1,
//                 },
//             },
//         ],
//     };

//     return (
//         <div className="sliding-page">
//             <h2>Data Slider</h2>
//             <Slider {...settings}>
//                 {(data || []).map((item, index) => (
//                     <div key={index} className="slide-item">
//                         <img
//                             src={item.image}
//                             alt={item.title}
//                             className="slide-image"
//                             style={{
//                                 width: '100%',
//                                 height: 'auto',
//                                 borderRadius: '8px',
//                                 transition: 'transform 0.3s ease-in-out',
//                             }}
//                             onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
//                             onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
//                         />
//                         <h3>{item.title}</h3>
//                         <p>{item.description}</p>
//                     </div>
//                 ))}
//             </Slider>
//         </div>
//     );
// }


// export default SlidingPage;





// src/components/HomePage/SlidePage.jsx
// import React from "react";
// import Slider from "react-slick";
// import { motion } from "framer-motion";

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const SlidePage = ({ data }) => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 600,
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

//   const slideData = [
//     {
//       image: "https://images.unsplash.com/photo-1...q=80",
//       title: "Gomti Nagar, Lucknow",
//       description: "2 BHK fully furnished flat.",
//     },
//     {
//       image: "https://images.unsplash.com/photo-2...q=80",
//       title: "Civil Lines, Prayagraj",
//       description: "3 BHK Independent house.",
//     },
//   ];
  

//   return (
//     <div className="p-6 bg-white rounded-xl shadow-md">
//       <motion.h2
//         className="text-2xl md:text-3xl font-bold mb-6 text-center text-gray-800"
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//       >
//         Featured Listings
//       </motion.h2>

//       <Slider {...settings}>
//         {data?.map((item, index) => (
//           <motion.div
//             key={index}
//             className="p-4 flex flex-col items-center text-center"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.4, delay: index * 0.2 }}
//           >
//             <img
//               src={item.image}
//               alt={item.title}
//               className="w-40 h-40 object-cover rounded-full border-4 border-gray-300 shadow-md mb-4 hover:scale-105 transition-transform duration-300"
//             />
//             <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
//             <p className="text-sm text-gray-600">{item.description}</p>
//           </motion.div>
//         ))}
//       </Slider>
//     </div>
//   );
// };

// export default SlidePage;


import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SlidePage() {
  const rentListings = [
    {
      title: "2 BHK in Gomti Nagar",
      description: "Fully furnished, immediate possession.",
      image:
        "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "3 BHK in Civil Lines",
      description: "Independent house, spacious and serene.",
      image:
        "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "1 BHK in Sigra",
      description: "Ideal for working professionals.",
      image:
        "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Studio in Hazratganj",
      description: "Cozy, modern, and centrally located.",
      image:
        "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Flat in Aliganj",
      description: "2 BHK, semi-furnished with balcony.",
      image:
        "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
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
    <div className="px-4 md:px-12 lg:px-20 py-12  bg-gray-100 rounded-xl shadow-md">
      <motion.h2
        className="text-2xl md:text-3xl font-bold mb-6 text-center text-gray-800"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Yesterday Project Finalized 
      </motion.h2>

      <h3><strong> View More...</strong></h3>

      <Slider {...settings}>
        {rentListings.map((item, index) => (
          <motion.div
            key={index}
            className="p-4 flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.2 }}
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-36 h-36 object-cover rounded-full border-4 border-gray-300 shadow-md mb-4 hover:scale-105 transition-transform duration-300"
            />
            <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
            <p className="text-sm text-gray-600">{item.description}</p>
          </motion.div>
        ))}
      </Slider>
    </div>
  );
}
