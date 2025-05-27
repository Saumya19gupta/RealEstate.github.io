// import React from "react";
// import { FaHeart, FaChevronLeft, FaChevronRight } from "react-icons/fa";

// const properties = [
//   {
//     id: 1,
//     image: "https://via.placeholder.com/300x200",
//     price: "₹ 8 L",
//     location: "Naini",
//     posted: "3 months ago",
//   },
//   {
//     id: 2,
//     image: "https://via.placeholder.com/300x200",
//     price: "₹ 13 L",
//     location: "Naini",
//     posted: "2 months ago",
//   },
//   {
//     id: 3,
//     image: "https://via.placeholder.com/300x200",
//     price: "₹ 16.85 L",
//     location: "Garapur Road, Jhusi",
//     posted: "5 days ago",
//   },
//   {
//     id: 4,
//     image: "https://via.placeholder.com/300x200",
//     price: "₹ 14 L",
//     location: "Jhusi",
//     posted: "Posted by Owner",
//   },
// ];

// const RecommendedProperties = () => {
//   const scrollRef = React.useRef(null);

//   const scroll = (direction) => {
//     if (scrollRef.current) {
//       const scrollAmount = direction === "left" ? -300 : 300;
//       scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
//     }
//   };

//   return (
//     <section className="p-4 md:p-8">
//       <h2 className="text-2xl font-bold mb-1">Recommended Properties</h2>
//       <p className="text-gray-600 mb-4">Curated especially for you</p>

//       <div className="relative">
//         <button
//           className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg p-2 rounded-full hover:bg-gray-100"
//           onClick={() => scroll("left")}
//         >
//           <FaChevronLeft />
//         </button>

//         <div
//           ref={scrollRef}
//           className="flex overflow-x-auto gap-4 scrollbar-hide scroll-smooth"
//         >
//           {properties.map((property) => (
//             <div
//               key={property.id}
//               className="min-w-[250px] bg-white rounded-lg shadow hover:shadow-lg transition-shadow duration-300 flex-shrink-0"
//             >
//               <div className="relative">
//                 <img
//                   src={property.image}
//                   alt="property"
//                   className="w-full h-40 object-cover rounded-t-lg"
//                 />
//                 <div className="absolute top-2 right-2 bg-white rounded-full p-1">
//                   <FaHeart className="text-red-500" />
//                 </div>
//                 <div className="absolute bottom-2 left-2 bg-white text-sm px-2 py-1 rounded font-semibold">
//                   {property.price}
//                 </div>
//               </div>
//               <div className="p-3">
//                 <h3 className="font-semibold">Land</h3>
//                 <p className="text-sm text-gray-500">In {property.location}</p>
//                 <p className="text-xs text-gray-400">{property.posted}</p>
//               </div>
//             </div>
//           ))}
//         </div>

//         <button
//           className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg p-2 rounded-full hover:bg-gray-100"
//           onClick={() => scroll("right")}
//         >
//           <FaChevronRight />
//         </button>
//       </div>
//     </section>
//   );
// };

// export default RecommendedProperties;




// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import { FaHeart } from "react-icons/fa";
// import { Link } from 'react-router-dom';


// const properties = [
//   {
//     id: 1,
//     image: "https://images.unsplash.com/photo-1582213782179-8c4e6b9dc340?auto=format&fit=crop&w=800&q=80",
//     price: "₹ 8 L",
//     location: "Naini",
//     posted: "3 months ago",
//   },
//   {
//     id: 2,
//     image: "https://images.unsplash.com/photo-1613946062283-d2d3c9736dc1?auto=format&fit=crop&w=800&q=80",
//     price: "₹ 13 L",
//     location: "Naini",
//     posted: "2 months ago",
//   },
//   {
//     id: 3,
//     image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=800&q=80",
//     price: "₹ 16.85 L",
//     location: "Garapur Road, Jhusi",
//     posted: "5 days ago",
//   },
//   {
//     id: 4,
//     image: "https://images.unsplash.com/photo-1592928303263-6bcb9b7ef870?auto=format&fit=crop&w=800&q=80",
//     price: "₹ 14 L",
//     location: "Jhusi",
//     posted: "Posted by Owner",
//   },
// ];

// const RecommendedProperties = () => {
//   return (
//     <section className="p-4 md:p-8">
//       <h2 className="text-2xl font-bold mb-1">Recommended Properties</h2>
//       <p className="text-gray-600 mb-4">Curated especially for you</p>

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
//         {properties.map((property) => (
//           <SwiperSlide key={property.id}>
//             <div className="bg-white rounded-lg shadow hover:shadow-xl transition-shadow duration-300">
//               <div className="relative">
//                 <img
//                   src={property.image}
//                   alt="property"
//                   className="w-full h-48 object-cover rounded-t-lg"
//                 />
//                 <div className="absolute top-2 right-2 bg-white rounded-full p-1 shadow">
//                   <FaHeart className="text-red-500" />
//                 </div>
//                 <div className="absolute bottom-2 left-2 bg-white text-sm px-2 py-1 rounded font-semibold shadow">
//                   {property.price}
//                 </div>
//               </div>
//               <div className="p-3">
//                 <h3 className="font-semibold">Land</h3>
//                 <p className="text-sm text-gray-500">In {property.location}</p>
//                 <p className="text-xs text-gray-400">{property.posted}</p>
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>

//       <Link to="/top-rent" className="bg-white text-purple-700 px-3 py-1 rounded-md font-semibold hover:bg-purple-100 transition duration-300">
//           View All Rents
//           </Link>


//     </section>
//   );
// };

// export default RecommendedProperties;



// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination } from "swiper/modules";
// import { motion } from "framer-motion";
// import { Link } from "react-router-dom";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

// const sellingProperties = [
//   {
//     id: 1,
//     image:
//       "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80",
//     name: "Luxury Beach Villa",
//     location: "Goa",
//     price: "₹ 3.5 Cr",
//   },
//   {
//     id: 2,
//     image:
//       "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
//     name: "Modern Apartment",
//     location: "Mumbai",
//     price: "₹ 1.9 Cr",
//   },


//   {
//     id: 3,
//     image:
//     "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
//     name: "Independent House",
//     location: "Bangalore",
//     price: "₹ 2.8 Cr",
//   },
  

//   {
//     id: 4,
//     image:
//     "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
//     name: "Independent House",
//     location: "Bangalore",
//     price: "₹ 2.8 Cr",
//   },

 
// ];

// const TopSellingProperties = () => {
//   return (
//     <section className="p-4 md:p-8 bg-gray-100">
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//       >
//         <div className="flex justify-between items-center mb-4">
//           <div>
//             <h2 className="text-2xl font-bold">Top Selling Properties</h2>
//             <p className="text-gray-600">Explore our best-selling listings</p>
//           </div>
//           <Link
//             to="/top-selling"
//             className="bg-white text-purple-700 px-3 py-1 rounded-md font-semibold hover:bg-purple-100 transition duration-300"
//           >
//             View All Sales
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
//           {sellingProperties.map((property) => (
//             <SwiperSlide key={property.id}>
//               <motion.div
//                 whileHover={{ scale: 1.03 }}
//                 transition={{ duration: 0.3 }}
//                 className="bg-white rounded-lg shadow hover:shadow-xl"
//               >
//                 <img
//                   src={property.image}
//                   alt={property.name}
//                   className="w-full h-48 object-cover rounded-t-lg"
//                 />
//                 <div className="p-4">
//                   <h3 className="font-semibold text-lg">{property.name}</h3>
//                   <p className="text-gray-500">{property.location}</p>
//                   <p className="text-blue-600 font-bold">{property.price}</p>
//                 </div>
//               </motion.div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </motion.div>
//     </section>
//   );
// };

// export default TopSellingProperties;


import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const sellingProperties = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80",
    name: "Luxury Beach Villa",
    location: "Goa",
    price: "₹ 3.5 Cr",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    name: "Modern Apartment",
    location: "Mumbai",
    price: "₹ 1.9 Cr",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    name: "Independent House",
    location: "Bangalore",
    price: "₹ 2.8 Cr",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    name: "Independent House",
    location: "Bangalore",
    price: "₹ 2.8 Cr",
  },
];

const TopSellingProperties = () => {
  return (
    <section className=" bg-gray-100 px-4 md:px-12 lg:px-20 py-12 ">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex justify-between items-center mb-4">
          <div>
            <h2 className="text-2xl font-bold">Top Selling Properties</h2>
            <p className="text-gray-600">Explore our best-selling listings</p>
          </div>
          <Link
            to="/top-selling"
            className="bg-white text-purple-700  px-3 py-1 rounded-md font-semibold hover:bg-purple-100 transition duration-300"
          >
            View All Sales
          </Link>
        </div>

        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          navigation={true}
          pagination={{ clickable: true }}
          autoplay={{ delay: 2200, disableOnInteraction: false }}
          speed={800}
          modules={[Navigation, Pagination, Autoplay]}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {sellingProperties.map((property) => (
            <SwiperSlide key={property.id}>
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-lg shadow hover:shadow-xl"
              >
                <img
                  src={property.image}
                  alt={property.name}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-lg">{property.name}</h3>
                  <p className="text-gray-500">{property.location}</p>
                  <p className="text-blue-600 font-bold">{property.price}</p>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </section>
  );
};

export default TopSellingProperties;
