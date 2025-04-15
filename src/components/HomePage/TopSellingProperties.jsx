

import React from "react";
import PropertyCard from "./PropertyCard";

const TopSellingProperties = ({ properties }) => {
  return (
    <div className="w-full md:w-3/4 p-4 space-y-4">
      {properties.map((item, index) => (
        <PropertyCard
          key={index}
          title={item.title}
          price={item.price}
          location={item.location}
          type={item.type}
          area={item.area}
          image={item.image}
          postedBy={item.postedBy}
        />
      ))}
    </div>
  );
};

export default TopSellingProperties;


// import { useNavigate } from "react-router-dom";
// import PropertyCard from "./PropertyCard";

// const TopSellingProperties = ({ properties }) => {
//   const navigate = useNavigate();

//   const handleClick = (id, property) => {
//     navigate(`/property/${id}`, { state: { property } });
//   };

//   return (
//     <div className="w-full md:w-3/4 p-4 space-y-4">
//       {properties.map((item, index) => (
//         <div key={index} onClick={() => handleClick(index, item)} className="cursor-pointer">
//           <PropertyCard
//             title={item.title}
//             price={item.price}
//             location={item.location}
//             type={item.type}
//             area={item.area}
//             image={item.image}
//             postedBy={item.postedBy}
//             owner={item.owner}
//             phone={item.phone}
//             address={item.address}
//             status={item.status}
//           />
//         </div>
//       ))}
//     </div>
//   );
// };

// export default TopSellingProperties;


// import { useNavigate } from "react-router-dom";
// import PropertyCard from "./PropertyCard";

// const TopSellingProperties = ({ properties }) => {
//   const navigate = useNavigate();

//   const handleClick = (id, property) => {
//     if (id && property) {
//       navigate(`/property/${id}`, { state: { property } });
//     }
//   };

//   return (
//     <div className="w-full md:w-3/4 p-4 space-y-4">
//       {properties.map((item) => (
//         <div key={item.id} onClick={() => handleClick(item.id, item)} className="cursor-pointer">
//           <PropertyCard {...item} />
//         </div>
//       ))}
//     </div>
//   );
// };

// export default TopSellingProperties;



// import PropertyCard from "./PropertyCard";
// import { useNavigate } from "react-router-dom";

// const properties = [
//   {
//     id: 1,
//     title: "Luxury Villa in Lucknow",
//     price: 9000000,
//     location: "Gomti Nagar, Lucknow",
//     type: "Villa",
//     area: 3000,
//     postedBy: "Agent",
//     image: "https://via.placeholder.com/300x200?text=Villa",
//     owner: "Raj Kumar",
//     phone: "9999999999",
//     address: "Gomti Nagar",
//     status: "Ready to Move"
//   },
//   {
//     id: 2,
//     title: "2 BHK Flat in Prayagraj",
//     price: 12000,
//     location: "Civil Lines",
//     type: "Flat",
//     area: 1200,
//     postedBy: "Owner",
//     image: "https://via.placeholder.com/300x200?text=Flat",
//     owner: "Amit Verma",
//     phone: "8888888888",
//     address: "Civil Lines",
//     status: "Available from May"
//   },
//   // Add more property objects...
// ];

// const TopSellingProperties = () => {
//   const navigate = useNavigate();

//   const handleClick = (property) => {
//     navigate(`/property/${property.id}`, { state: { property } });
//   };

//   return (
//     <div className="space-y-6">
//       {properties.map((property) => (
//         <PropertyCard
//           key={property.id}
//           property={property}
//           onClick={() => handleClick(property)}
//         />
//       ))}
//     </div>
//   );
// };

// export default TopSellingProperties;
