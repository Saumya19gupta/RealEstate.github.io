// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import { FaHeart } from "react-icons/fa";
// import { useState, useEffect } from "react";
// import { motion } from "framer-motion";

// <motion.div
//   initial={{ opacity: 0, y: 20 }}
//   animate={{ opacity: 1, y: 0 }}
//   transition={{ duration: 0.5 }}
// >
//   <YourComponent />
// </motion.div>



// const rentListings = [
//   {
//     id: 1,
//     image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
//     price: "₹ 10,000/month",
//     location: "Civil Lines",
//     posted: "1 week ago",
//   },
//   {
//     id: 2,
//     image: "https://images.unsplash.com/photo-1572120360610-d971b9c7c68e?auto=format&fit=crop&w=800&q=80",
//     price: "₹ 12,500/month",
//     location: "Tagore Town",
//     posted: "2 weeks ago",
//   },
//   {
//     id: 3,
//     image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80",
//     price: "₹ 9,000/month",
//     location: "Naini",
//     posted: "3 days ago",
//   },
//   {
//     id: 4,
//     image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=800&q=80",
//     price: "₹ 11,000/month",
//     location: "Jhusi",
//     posted: "5 days ago",
//   },
// ];

// const TopRentListings = () => {
//   return (
//     <section className="p-4 md:p-8">
//       <h2 className="text-2xl font-bold mb-1">Top Rent Listings</h2>
//       <p className="text-gray-600 mb-4">Hand-picked rental homes just for you</p>

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
//         {rentListings.map((listing) => (
//           <SwiperSlide key={listing.id}>
//             <div className="bg-white rounded-lg shadow hover:shadow-xl transition-shadow duration-300">
//               <div className="relative">
//                 <img
//                   src={listing.image}
//                   alt="rental"
//                   className="w-full h-48 object-cover rounded-t-lg"
//                 />
//                 <div className="absolute top-2 right-2 bg-white rounded-full p-1 shadow">
//                   <FaHeart className="text-red-500" />
//                 </div>
//                 <div className="absolute bottom-2 left-2 bg-white text-sm px-2 py-1 rounded font-semibold shadow">
//                   {listing.price}
//                 </div>
//               </div>
//               <div className="p-3">
//                 <h3 className="font-semibold">Apartment</h3>
//                 <p className="text-sm text-gray-500">In {listing.location}</p>
//                 <p className="text-xs text-gray-400">{listing.posted}</p>
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>

//       <div className="text-center mt-6">
//         <button className="bg-blue-600 text-white px-5 py-2 rounded-lg shadow hover:bg-blue-700 transition duration-300">
//           Explore More
//         </button>
//       </div>
//     </section>
//   );
// };

// export default TopRentListings;



// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination } from "swiper/modules";
// import { FaHeart } from "react-icons/fa";
// import { motion } from "framer-motion";
// import { Link } from 'react-router-dom';


// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

// const properties = [
//   {
//     id: 1,
//     image:
//       "https://images.unsplash.com/photo-1582213782179-8c4e6b9dc340?auto=format&fit=crop&w=800&q=80",
//     price: "₹ 8 L",
//     location: "Naini",
//     posted: "3 months ago",
//   },
//   {
//     id: 2,
//     image:
//       "https://images.unsplash.com/photo-1613946062283-d2d3c9736dc1?auto=format&fit=crop&w=800&q=80",
//     price: "₹ 13 L",
//     location: "Naini",
//     posted: "2 months ago",
//   },
//   {
//     id: 3,
//     image:
//       "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=800&q=80",
//     price: "₹ 16.85 L",
//     location: "Garapur Road, Jhusi",
//     posted: "5 days ago",
//   },
//   {
//     id: 4,
//     image:
//       "https://images.unsplash.com/photo-1592928303263-6bcb9b7ef870?auto=format&fit=crop&w=800&q=80",
//     price: "₹ 14 L",
//     location: "Jhusi",
//     posted: "Posted by Owner",
//   },
// ];

// const TopRentListings = () => {
//   return (
//     <section className="p-4 md:p-8">
//       <h2 className="text-2xl font-bold mb-1">Top Rent Listings</h2>
//       <p className="text-gray-600 mb-4">Handpicked properties for you</p>

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
//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5 }}
//               className="bg-white rounded-lg shadow hover:shadow-xl transition-shadow duration-300"
//             >
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
//             </motion.div>
//           </SwiperSlide>
//         ))}
//       </Swiper>

//       <div className="text-center mt-6">
//         {/* <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2 rounded-full transition duration-300">
//           Explore More
//         </button> */}

// <Link to="/top-rent" className="bg-white text-purple-700 px-3 py-1 rounded-md font-semibold hover:bg-purple-100 transition duration-300">
//           View All Rents
//           </Link>

//       </div>
//     </section>
//   );
// };

// export default TopRentListings;



// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination } from "swiper/modules";
// import { motion } from "framer-motion";
// import { Link } from "react-router-dom";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

// const rentListings = [
//   {
//     id: 1,
//     image:
//     "https://images.unsplash.com/photo-1572120360610-d971b9b7886a?auto=format&fit=crop&w=800&q=80",
//     name: "2BHK Apartment",
//     location: "Noida",
//     rent: "₹ 25,000/mo",
//   },
//   {
//     id: 2,
//     image:
//       "https://images.unsplash.com/photo-1560185008-bcc7f9f5fd04?auto=format&fit=crop&w=800&q=80",
//     name: "Studio Flat",
//     location: "Mumbai",
//     rent: "₹ 18,000/mo",
//   },
//   {
//     id: 3,
//     image:
//       "https://images.unsplash.com/photo-1598928506312-c55ded9f8f06?auto=format&fit=crop&w=800&q=80",
//     name: "Furnished Room",
//     location: "Delhi",
//     rent: "₹ 12,000/mo",
//   },
//   {
//     id: 4,
//     image:
//       "https://images.unsplash.com/photo-1600585153821-7c6b57d7c9ce?auto=format&fit=crop&w=800&q=80",
//     name: "1BHK Apartment",
//     location: "Bangalore",
//     rent: "₹ 20,000/mo",
//   },
// ];

// const TopRentListings = () => {
//   return (
//     <section className="p-4 md:p-8 bg-white">
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//       >
//         <div className="flex justify-between items-center mb-4">
//           <div>
//             <h2 className="text-2xl font-bold">Top Rent Listings</h2>
//             <p className="text-gray-600">Best homes available for rent</p>
//           </div>
//           <Link
//             to="/rent-properties"
//             className="bg-white text-purple-700 px-3 py-1 rounded-md font-semibold hover:bg-purple-100 transition duration-300"
//           >
//             View All Rentals
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
//           {rentListings.map((listing) => (
//             <SwiperSlide key={listing.id}>
//               <motion.div
//                 whileHover={{ scale: 1.03 }}
//                 transition={{ duration: 0.3 }}
//                 className="bg-gray-50 rounded-lg shadow hover:shadow-xl"
//               >
//                 <img
//                   src={listing.image}
//                   alt={listing.name}
//                   className="w-full h-48 object-cover rounded-t-lg"
//                 />
//                 <div className="p-4">
//                   <h3 className="font-semibold text-lg">{listing.name}</h3>
//                   <p className="text-gray-500">{listing.location}</p>
//                   <p className="text-green-600 font-bold">{listing.rent}</p>
//                 </div>
//               </motion.div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </motion.div>
//     </section>
//   );
// };

// export default TopRentListings;



// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination } from "swiper/modules";
// import { motion } from "framer-motion";
// import { Link } from "react-router-dom";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import imgroo1 from "/src/img/imgroo1.jpg";

// const rentListings = [
//   {
//     id: 1,
//     image:
//       imgroo1,
//     name: "2BHK Apartment",
//     location: "Noida",
//     rent: "₹ 25,000/mo",
//   },
//   {
//     id: 2,
//     image:
//     imgroo1,
//     name: "Studio Flat",
//     location: "Mumbai",
//     rent: "₹ 18,000/mo",
//   },
//   {
//     id: 3,
//     image:
//     imgroo1,
//     name: "Furnished Room",
//     location: "Delhi",
//     rent: "₹ 12,000/mo",
//   },
//   {
//     id: 4,
//     image:
//     imgroo1,
//     name: "1BHK Apartment",
//     location: "Bangalore",
//     rent: "₹ 20,000/mo",
//   },

//   {
//     id: 5,
//     image:
//     imgroo1,
//     name: "1BHK Apartment",
//     location: "Bangalore",
//     rent: "₹ 20,000/mo",
//   },
// ];

// const TopRentListings = () => {
//   return (
//     <section className="p-4 md:p-8 bg-gray-100">
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//       >
//         <div className="flex justify-between items-center mb-4">
//           <div>
//             <h2 className="text-2xl font-bold">Top Rent Listings</h2>
//             <p className="text-gray-600">Best homes available for rent</p>
//           </div>
//           <Link
//                 // <Route path="/top-rent" element={<TopRent />} />
//             to="/top-rent"
//             className="bg-white text-purple-700 px-3 py-1 rounded-md font-semibold hover:bg-purple-100 transition duration-300"
//           >
//             View All Rentals
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
//           {rentListings.map((listing) => (
//             <SwiperSlide key={listing.id}>
//               <motion.div
//                 whileHover={{ scale: 1.03 }}
//                 transition={{ duration: 0.3 }}
//                 className="bg-gray-50 rounded-lg shadow hover:shadow-xl"
//               >
//                 <img
//                   src={listing.image}
//                   alt={listing.name}
//                   className="w-full h-48 object-cover rounded-t-lg"
//                 />
//                 <div className="p-4">
//                   <h3 className="font-semibold text-lg">{listing.name}</h3>
//                   <p className="text-gray-500">{listing.location}</p>
//                   <p className="text-green-600 font-bold">{listing.rent}</p>
//                 </div>
//               </motion.div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </motion.div>
//     </section>
//   );
// };

// export default TopRentListings;




import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import imgroo1 from "/src/img/imgroo1.jpg";

const rentListings = [
  {
    id: 1,
    image: imgroo1,
    name: "2BHK Apartment",
    location: "Noida",
    rent: "₹ 25,000/mo",
  },
  {
    id: 2,
    image: imgroo1,
    name: "Studio Flat",
    location: "Mumbai",
    rent: "₹ 18,000/mo",
  },
  {
    id: 3,
    image: imgroo1,
    name: "Furnished Room",
    location: "Delhi",
    rent: "₹ 12,000/mo",
  },
  {
    id: 4,
    image: imgroo1,
    name: "1BHK Apartment",
    location: "Bangalore",
    rent: "₹ 20,000/mo",
  },
  {
    id: 5,
    image: imgroo1,
    name: "1BHK Apartment",
    location: "Bangalore",
    rent: "₹ 20,000/mo",
  },
];

const TopRentListings = () => {
  return (
    <section className=" bg-gray-100 px-4 md:px-12 lg:px-20 py-12 ">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex justify-between items-center mb-4">
          <div>
            <h2 className="text-2xl font-bold">Top Rent Listings</h2>
            <p className="text-gray-600">Best homes available for rent</p>
          </div>
          <Link
            to="/top-rent"
            className="bg-white text-purple-700 px-3 py-1 rounded-md font-semibold hover:bg-purple-100 transition duration-300"
          >
            View All Rentals
          </Link>
        </div>

        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          navigation={true}
          pagination={{ clickable: true }}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          modules={[Navigation, Pagination, Autoplay]}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {rentListings.map((listing) => (
            <SwiperSlide key={listing.id}>
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
                className="bg-gray-50 rounded-lg shadow hover:shadow-xl"
              >
                <img
                  src={listing.image}
                  alt={listing.name}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-lg">{listing.name}</h3>
                  <p className="text-gray-500">{listing.location}</p>
                  <p className="text-green-600 font-bold">{listing.rent}</p>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </section>
  );
};

export default TopRentListings;
