// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination } from "swiper/modules";
// import { motion } from "framer-motion";
// import { Link } from "react-router-dom";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

// const villas = [
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
//     name: "Modern Hilltop Villa",
//     location: "Mussoorie",
//     price: "₹ 2.1 Cr",
//   },

//   {
//     id: 3,
//     image:
//       "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
//     name: "Modern Hilltop Villa",
//     location: "Mussoorie",
//     price: "₹ 2.1 Cr",
//   },


//   {
//     id: 4,
//     image:
//       "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
//     name: "Modern Hilltop Villa",
//     location: "Mussoorie",
//     price: "₹ 2.1 Cr",
//   },


 


//   {
//     id: 5,
//     image:
//       "https://images.unsplash.com/photo-1572120360610-d971b9b7886a?auto=format&fit=crop&w=800&q=80",
//     name: "Forest Retreat Villa",
//     location: "Ooty",
//     price: "₹ 1.8 Cr",
//   },
// ];

// const TopVillas = () => {
//   return (
//     <section className="p-4 md:p-8 bg-gray-100">
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//       >
//         <div className="flex justify-between items-center mb-4">
//           <div>
//             <h2 className="text-2xl font-bold">Top Villas</h2>
//             <p className="text-gray-600">Handpicked premium villas for you</p>
//           </div>
//           <Link
//             to="/top-values"
//             className="bg-white text-purple-700 px-3 py-1 rounded-md font-semibold hover:bg-purple-100 transition duration-300"
//           >
//             View All Villas
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
//           className="relative"
//         >
//           {villas.map((villa) => (
//             <SwiperSlide key={villa.id}>
//               <motion.div
//                 whileHover={{ scale: 1.03 }}
//                 transition={{ duration: 0.3 }}
//                 className="bg-white rounded-lg shadow hover:shadow-xl"
//               >
//                 <img
//                   src={villa.image}
//                   alt={villa.name}
//                   className="w-full h-48 object-cover rounded-t-lg"
//                 />
//                 <div className="p-4">
//                   <h3 className="font-semibold text-lg">{villa.name}</h3>
//                   <p className="text-gray-500">{villa.location}</p>
//                   <p className="text-blue-600 font-bold">{villa.price}</p>
//                 </div>
//               </motion.div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </motion.div>
//     </section>
//   );
// };

// export default TopVillas;



// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination } from "swiper/modules";
// import { motion } from "framer-motion";
// import { Link } from "react-router-dom";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

// const villas = [
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
//     name: "Modern Hilltop Villa",
//     location: "Mussoorie",
//     price: "₹ 2.1 Cr",
//   },

//   {
//     id: 3,
//     image:
//       "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
//     name: "Modern Hilltop Villa",
//     location: "Mussoorie",
//     price: "₹ 2.1 Cr",
//   },


//   {
//     id: 4,
//     image:
//       "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
//     name: "Modern Hilltop Villa",
//     location: "Mussoorie",
//     price: "₹ 2.1 Cr",
//   },


 


//   {
//     id: 5,
//     image:
//       "https://images.unsplash.com/photo-1572120360610-d971b9b7886a?auto=format&fit=crop&w=800&q=80",
//     name: "Forest Retreat Villa",
//     location: "Ooty",
//     price: "₹ 1.8 Cr",
//   },
// ];

// const TopVillas = () => {
//   return (
//     <section className="p-4 md:p-8 bg-gray-100">
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//       >
//         <div className="flex justify-between items-center mb-4">
//           <div>
//             <h2 className="text-2xl font-bold">Top Villas</h2>
//             <p className="text-gray-600">Handpicked premium villas for you</p>
//           </div>
//           <Link
//             to="/top-values"
//             className="bg-white text-purple-700 px-3 py-1 rounded-md font-semibold hover:bg-purple-100 transition duration-300"
//           >
//             View All Villas
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
//           className="relative"
//         >
//           {villas.map((villa) => (
//             <SwiperSlide key={villa.id}>
//               <motion.div
//                 whileHover={{ scale: 1.03 }}
//                 transition={{ duration: 0.3 }}
//                 className="bg-white rounded-lg shadow hover:shadow-xl"
//               >
//                 <img
//                   src={villa.image}
//                   alt={villa.name}
//                   className="w-full h-48 object-cover rounded-t-lg"
//                 />
//                 <div className="p-4">
//                   <h3 className="font-semibold text-lg">{villa.name}</h3>
//                   <p className="text-gray-500">{villa.location}</p>
//                   <p className="text-blue-600 font-bold">{villa.price}</p>
//                 </div>
//               </motion.div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </motion.div>
//     </section>
//   );
// };

// export default TopVillas;


import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const villas = [
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
    name: "Modern Hilltop Villa",
    location: "Mussoorie",
    price: "₹ 2.1 Cr",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    name: "Mountain View Villa",
    location: "Manali",
    price: "₹ 2.4 Cr",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    name: "Riverfront Villa",
    location: "Rishikesh",
    price: "₹ 1.9 Cr",
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    name: "Forest Retreat Villa",
    location: "Ooty",
    price: "₹ 1.8 Cr",
  },
];

const TopVillas = () => {
  return (
    <section className=" bg-gray-100 px-4 md:px-12 lg:px-20 py-12 ">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex justify-between items-center mb-4">
          <div>
            <h2 className="text-2xl font-bold">Top Villas</h2>
            <p className="text-gray-600">Handpicked premium villas for you</p>
          </div>
          <Link
            to="/top-values"
            className="bg-white text-purple-700 px-3 py-1 rounded-md font-semibold hover:bg-purple-100 transition duration-300"
          >
            View All Villas
          </Link>
        </div>

        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          navigation={true}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
          modules={[Navigation, Pagination, Autoplay]}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="relative"
        >
          {villas.map((villa) => (
            <SwiperSlide key={villa.id}>
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-lg shadow hover:shadow-xl"
              >
                <img
                  src={villa.image}
                  alt={villa.name}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-lg">{villa.name}</h3>
                  <p className="text-gray-500">{villa.location}</p>
                  <p className="text-blue-600 font-bold">{villa.price}</p>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </section>
  );
};

export default TopVillas;
