
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination } from "swiper/modules";
// import { motion } from "framer-motion";

// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

// import { Link } from 'react-router-dom'


// const topLocations = [
//   {
//     id: 1,
//     imimport React from "react";age:
//       "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?auto=format&fit=crop&w=800&q=80",
//     city: "Prayagraj",
//     properties: "120+ Properties",
//   },
//   {
//     id: 2,
//     image:
//       "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=800&q=80",
//     city: "Jhusi",
//     properties: "80+ Properties",
//   },
//   {
//     id: 3,
//     image:
//       "https://images.unsplash.com/photo-1586201375761-83865001e17c?auto=format&fit=crop&w=800&q=80",
//     city: "Naini",
//     properties: "60+ Properties",
//   },
//   {
//     id: 4,
//     image:
//       "https://images.unsplash.com/photo-1582407947304-fd86f8dbd060?auto=format&fit=crop&w=800&q=80",
//     city: "Lukarganj",
//     properties: "45+ Properties",
//   },
//   {
//     id: 5,
//     image:
//       "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
//     city: "George Town",
//     properties: "90+ Properties",
//   },
// ];

// const TopLocations = () => {
//   return (
//     <section className="p-4 md:p-8">
//       <h2 className="text-2xl font-bold mb-1">Top Locations</h2>
//       <p className="text-gray-600 mb-4">Explore the best areas in the city</p>

//       <Swiper
//         spaceBetween={20}
//         slidesPerView={1}
//         navigation
//         pagination={{ clickable: true }}
//         modules={[Navigation, Pagination]}
//         breakpoints={{
//           640: { slidesPerView: 1 },
//           768: { slidesPerView: 2 },
//           1024: { slidesPerView: 3 },
//         }}
//       >
//         {topLocations.map((location) => (
//           <SwiperSlide key={location.id}>
//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5 }}
//               className="bg-white rounded-lg shadow hover:shadow-xl transition-shadow duration-300"
//             >
//               <div className="relative">
//                 <img
//                   src={location.image}
//                   alt={location.city}
//                   className="w-full h-48 object-cover rounded-t-lg"
//                 />
//                 <div className="absolute bottom-2 left-2 bg-white text-sm px-3 py-1 rounded shadow font-semibold">
//                   {location.city}
//                 </div>
//               </div>
//               <div className="p-3">
//                 <p className="text-sm text-gray-600">{location.properties}</p>
//               </div>
//             </motion.div>
//           </SwiperSlide>
//         ))}
//       </Swiper>

//       <div className="text-center mt-6">
//         {/* <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2 rounded-full transition duration-300">
//           Explore All Locations
//         </button> */}

// <Link to="/top-locations" className="bg-white text-purple-700 px-3 py-1 rounded-md font-semibold hover:bg-purple-100 transition duration-300">
//           View All Locality
//           </Link>



//       </div>


//     </section>
//   );
// };

// export default TopLocations;




// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination } from "swiper/modules";
// import { motion } from "framer-motion";
// import { Link } from "react-router-dom";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

// const locations = [
  

//     {
//       id: 1,
//       image:
//         "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=800&q=80",
//       name: "Delhi",
//       properties: "950+ Properties",
//     },


    
//     {



//     id: 2,
//     image:
//       "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=800&q=80",
//     name: "Mumbai",
//     properties: "1200+ Properties",
//   },
  

//   {
//     id: 3,
//     image:
//       "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=800&q=80",
//     name: "Delhi",
//     properties: "950+ Properties",
//   },

 

//   {
//     id: 4,
//     image:
//       "https://images.unsplash.com/photo-1581852013891-31b7099c1f6a?auto=format&fit=crop&w=800&q=80",
//     name: "Bangalore",
//     properties: "850+ Properties",
//   },

//   {
//     id: 4,
//     image:
//       "https://images.unsplash.com/photo-1581852013891-31b7099c1f6a?auto=format&fit=crop&w=800&q=80",
//     name: "Bangalore",
//     properties: "850+ Properties",
//   },
 
 
// ];

// const TopLocations = () => {
//   return (


//     <section className="p-4 md:p-8 bg-gray-100">
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.6 }}
//     >
    
//         <div className="flex justify-between items-center mb-4">
//           <div>
//             <h2 className="text-2xl font-bold">Top Locations</h2>
//             <p className="text-gray-600">Explore properties in top cities</p>
//           </div>
//           <Link
//             to="/top-locations"
//             className="bg-white text-purple-700 px-3 py-1 rounded-md font-semibold hover:bg-purple-100 transition duration-300"
//           >
//             View All Locations
//           </Link>
//         </div>

//         <Swiper
//           spaceBetween={20}
//           slidesPerView={1}
//           navigation={true}
//           pagination={{ clickable: true }}
//           modules={[Navigation, Pagination]}
//           breakpoints={{
//             640: { slidesPerView: 1 },
//             768: { slidesPerView: 2 },
//             1024: { slidesPerView: 3 },
//           }}
//         >
//           {locations.map((loc) => (
//             <SwiperSlide key={loc.id}>
//               <motion.div
//                 whileHover={{ scale: 1.03 }}
//                 transition={{ duration: 0.3 }}
//                 className="bg-white rounded-lg shadow hover:shadow-xl"
//               >
//                 <img
//                   src={loc.image}
//                   alt={loc.name}
//                   className="w-full h-48 object-cover rounded-t-lg"
//                 />
//                 <div className="p-4">
//                   <h3 className="font-semibold text-lg">{loc.name}</h3>
//                   <p className="text-gray-500">{loc.properties}</p>
//                 </div>
//               </motion.div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </motion.div>
//     </section>
//   );
// };

// export default TopLocations;



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

  {
    name: "Meja",
    city: "Prayagraj",
    description:
      "Peaceful and developing town area ideal for long-term investments.",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
  },

  {
    name: "Meja",
    city: "Prayagraj",
    description:
      "Peaceful and developing town area ideal for long-term investments.",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
  },


  {
    name: "Meja",
    city: "Prayagraj",
    description:
      "Peaceful and developing town area ideal for long-term investments.",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
  },


  {
    name: "Meja",
    city: "Prayagraj",
    description:
      "Peaceful and developing town area ideal for long-term investments.",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
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
    // <div className="p-6 md:p-10 bg-gray-100 min-h-screen">
    <div className="px-4 md:px-12 lg:px-20 py-12  bg-gray-100 rounded-xl shadow-md">
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