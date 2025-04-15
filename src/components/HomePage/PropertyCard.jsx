

import React from "react";

const PropertyCard = ({ title, price, location, type, area, postedBy, image }) => {
  return (
    <div className="flex flex-col md:flex-row border rounded shadow hover:shadow-md transition overflow-hidden">
      <img
        src={image}
        alt={title}
        className="w-full md:w-1/3 h-60 object-cover"
      />
      <div className="p-4 flex flex-col justify-between w-full">
        <div>
          <h3 className="text-lg font-bold">{title || "No Title"}</h3>
          <p className="text-sm text-gray-600">{location || "No Location"}</p>
          <p className="text-sm text-gray-500">{type || "No Type Info"}</p>
          <p className="text-sm">Area: {area || "N/A"} sqft</p>
          <p className="text-sm">Posted by: {postedBy || "N/A"}</p>
          
        </div>
        <p className="font-semibold text-green-700 mt-2">₹{price || "N/A"} Lakhs</p>
      </div>

      

    </div>
  );
};

export default PropertyCard;


// import { useLocation } from "react-router-dom";

// const PropertyDetail = () => {
//   const location = useLocation();
//   const property = location.state?.property;

//   if (!property) return <div className="p-4">Property not found!</div>;

//   return (
//     <div className="max-w-4xl mx-auto p-6">
//       <h1 className="text-2xl font-bold">{property.title}</h1>
//       <img src={property.image} alt={property.title} className="w-full h-96 object-cover rounded my-4" />
//       <div className="space-y-2">
//         <p><strong>Location:</strong> {property.location}</p>
//         <p><strong>Type:</strong> {property.type}</p>
//         <p><strong>Bedrooms:</strong> {property.bedrooms}</p>
//         <p><strong>Area:</strong> {property.area || "N/A"} sqft</p>
//         <p><strong>Price:</strong> ₹{property.price} Lakh</p>
//         <p><strong>Posted By:</strong> {property.postedBy || "N/A"}</p>
//         <p><strong>Owner:</strong> {property.owner || "N/A"}</p>
//         <p><strong>Contact:</strong> {property.phone || "N/A"}</p>
//         <p><strong>Address:</strong> {property.address || "N/A"}</p>
//         <p><strong>Availability:</strong> {property.status || "N/A"}</p>
//       </div>
//     </div>
//   );
// };

// export default PropertyDetail;



// const PropertyCard = ({ property }) => {
//   const {
//     title,
//     price,
//     location,
//     type,
//     area,
//     postedBy,
//     image,
//     owner,
//     phone,
//     address,
//     status
//   } = property;

//   return (
//     <div className="flex flex-col md:flex-row border rounded shadow hover:shadow-md transition overflow-hidden">
//       <img
//         src={image}
//         alt={title}
//         className="w-full md:w-1/3 h-60 object-cover"
//       />
//       <div className="p-4 flex flex-col justify-between w-full">
//         <div>
//           <h3 className="text-lg font-bold">{title || "No Title"}</h3>
//           <p className="text-sm text-gray-600">{location || "No Location"}</p>
//           <p className="text-sm text-gray-500">{type || "No Type Info"}</p>
//           <p className="text-sm">Area: {area || "N/A"} sqft</p>
//           <p className="text-sm">Posted by: {postedBy || "N/A"}</p>
//           <p><strong>Owner:</strong> {owner || "N/A"}</p>
//           <p><strong>Contact:</strong> {phone || "N/A"}</p>
//           <p><strong>Address:</strong> {address || "N/A"}</p>
//           <p><strong>Availability:</strong> {status || "N/A"}</p>
//         </div>
//         <p className="font-semibold text-green-700 mt-2">₹{price || "N/A"} Lakhs</p>
//       </div>
//     </div>
//   );
// };

// export default PropertyCard;



// import React from "react";



// const PropertyCard = ({ property = {} }) => {
//   const {
    
//     title,
//     price,
//     location,
//     type,
//     area,
//     postedBy,
//     image,
//     owner,
//     phone,
//     address,
//     status
//   } = property;

//   // if (!title && !image) {
//   //   return <div className="p-4 text-red-500">Invalid property data</div>;
//   // }

 

//   return (
//     <div className="flex flex-col md:flex-row border rounded shadow hover:shadow-md transition overflow-hidden">
//       <img
//         src={image || "https://via.placeholder.com/300x200?text=No+Image"}
//         alt={title || "Property"}
//         className="w-full md:w-1/3 h-60 object-cover"
//       />
//       <div className="p-4 flex flex-col justify-between w-full">
//         <div>
//           <h3 className="text-lg font-bold">{title || "No Title"}</h3>
//           <p className="text-sm text-gray-600">{location || "No Location"}</p>
//           <p className="text-sm text-gray-500">{type || "No Type Info"}</p>
//           <p className="text-sm">Area: {area || "N/A"} sqft</p>
//           <p className="text-sm">Posted by: {postedBy || "N/A"}</p>
//           <p><strong>Owner:</strong> {owner || "N/A"}</p>
//           <p><strong>Contact:</strong> {phone || "N/A"}</p>
//           <p><strong>Address:</strong> {address || "N/A"}</p>
//           <p><strong>Availability:</strong> {status || "N/A"}</p>
//         </div>
//         <p className="font-semibold text-green-700 mt-2">
//           ₹{price ? `${price.toLocaleString()}${price < 1000 ? ' Lakhs' : '/mo'}` : 'N/A'}
//         </p>
//       </div>
//     </div>
//   );
// };

// export default PropertyCard;



// import React from "react";

// const PropertyCard = ({ property = {}, onClick }) => {
//   const {
//     title,
//     price,
//     location,
//     type,
//     area,
//     postedBy,
//     image,
//     owner,
//     phone,
//     address,
//     status
//   } = property;

//   return (
//     <div
//       className="flex flex-col md:flex-row border rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden cursor-pointer bg-white"
//       onClick={onClick}
//     >
//       <img
//         src={image || "https://via.placeholder.com/300x200?text=No+Image"}
//         alt={title || "Property"}
//         className="w-full md:w-1/3 h-60 object-cover"
//       />
//       <div className="p-4 flex flex-col justify-between w-full space-y-2">
//         <div className="space-y-1">
//           <h3 className="text-xl font-semibold text-gray-800">{title || "No Title"}</h3>
//           <p className="text-sm text-gray-600">{location || "No Location"}</p>
//           <p className="text-sm text-gray-500 italic">{type || "No Type Info"}</p>
//           <p className="text-sm">Area: {area || "N/A"} sqft</p>
//           <p className="text-sm">Posted by: {postedBy || "N/A"}</p>
//           <p className="text-sm"><strong>Owner:</strong> {owner || "N/A"}</p>
//           <p className="text-sm"><strong>Contact:</strong> {phone || "N/A"}</p>
//           <p className="text-sm"><strong>Address:</strong> {address || "N/A"}</p>
//           <p className="text-sm"><strong>Availability:</strong> {status || "N/A"}</p>
//         </div>

//         <div className="flex justify-between items-center">
//           <p className="font-bold text-green-700 text-lg">
//             ₹{price ? `${price.toLocaleString()}${price < 1000 ? " Lakhs" : "/mo"}` : "N/A"}
//           </p>

//           <button
//             className="text-sm px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
//             onClick={(e) => {
//               e.stopPropagation(); // prevents outer card click from triggering
//               onClick?.(); // optional custom logic
//             }}
//           >
//             View Details
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PropertyCard;
