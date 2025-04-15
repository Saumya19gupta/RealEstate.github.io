// src/components/HomePage/FiltersSidebar.jsx
// import React from "react";

// const FiltersSidebar = ({ filters, onChange }) => {
//   return (
//     <div className="w-full md:w-1/4 p-4 bg-gray-50 rounded shadow-sm space-y-6">
//       {/* Budget Filter */}
//       <div>
//         <h3 className="font-semibold mb-2">Budget</h3>
//         <div className="flex gap-2">
//           <input
//             type="number"
//             placeholder="Min"
//             className="border p-1 w-full"
//             onChange={(e) => onChange("minBudget", e.target.value)}
//           />
//           <input
//             type="number"
//             placeholder="Max"
//             className="border p-1 w-full"
//             onChange={(e) => onChange("maxBudget", e.target.value)}
//           />
//         </div>
//       </div>

//       {/* Property Type Filter */}
//       <div>
//         <h3 className="font-semibold mb-2">Type of Property</h3>
//         {["Apartment", "Villa", "Plot", "Builder Floor"].map((type) => (
//           <label key={type} className="block">
//             <input
//               type="checkbox"
//               value={type}
//               onChange={(e) => onChange("propertyType", e.target.value)}
//             />{" "}
//             {type}
//           </label>
//         ))}
//       </div>

//       {/* BHK Filter */}
//       <div>
//         <h3 className="font-semibold mb-2">No. of Bedrooms</h3>
//         {[1, 2, 3, 4].map((bhk) => (
//           <label key={bhk} className="block">
//             <input
//               type="checkbox"
//               value={`${bhk} BHK`}
//               onChange={(e) => onChange("bedrooms", e.target.value)}
//             />{" "}
//             {bhk} BHK
//           </label>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default FiltersSidebar;



// import React from "react";

// // import FiltersSidebar from "./FiltersSidebar";

// const FiltersSidebar = ({ filters, onChange }) => {
//   return (
//     <div className="w-full md:w-1/4 p-4 bg-gray-100 rounded shadow-sm space-y-6">
      
//       {/* Hide Already Seen */}
//       <div>
//         <label className="block">
//           <input
//             type="checkbox"
//             checked={filters.hideSeen}
//             onChange={(e) => onChange("hideSeen", e.target.checked)}
//           />
//           Hide Already Seen
//         </label>
//       </div>

//       {/* Verified Properties */}
//       <div>
//         <label className="block">
//           <input
//             type="checkbox"
//             checked={filters.verified}
//             onChange={(e) => onChange("verified", e.target.checked)}
//           />
//           Verified by AK Infra Dream
//         </label>
//       </div>

//       {/* Budget Filter */}
//       <div>
//         <h3 className="font-semibold mb-2">Budget</h3>
//         <div className="flex gap-2">
//           <input
//             type="number"
//             placeholder="Min"
//             className="border p-1 w-full"
//             onChange={(e) => onChange("minBudget", e.target.value)}
//           />
//           <input
//             type="number"
//             placeholder="Max"
//             className="border p-1 w-full"
//             onChange={(e) => onChange("maxBudget", e.target.value)}
//           />
//         </div>
//       </div>

//       {/* Property Type Filter */}
//       <div>
//         <h3 className="font-semibold mb-2">Type of Property</h3>
//         {["Residential Land", "Residential Apartment", "Independent House/Villa", "Independent/Builder Floor", "Farm House"].map((type) => (
//           <label key={type} className="block">
//             <input
//               type="checkbox"
//               value={type}
//               checked={filters.propertyType.includes(type)}
//               onChange={(e) => onChange("propertyType", e.target.value)}
//             />{" "}
//             {type}
//           </label>
//         ))}
//       </div>

//       {/* No. of Bedrooms */}
//       <div>
//         <h3 className="font-semibold mb-2">No. of Bedrooms</h3>
//         {["1 RK/1 BHK", "2 BHK", "3 BHK", "4 BHK", "5 BHK"].map((bhk) => (
//           <label key={bhk} className="block">
//             <input
//               type="checkbox"
//               value={bhk}
//               checked={filters.bedrooms.includes(bhk)}
//               onChange={(e) => onChange("bedrooms", e.target.value)}
//             />{" "}
//             {bhk}
//           </label>
//         ))}
//       </div>

//       {/* Construction Status */}
//       <div>
//         <h3 className="font-semibold mb-2">Construction Status</h3>
//         {["New Launch", "Under Construction", "Ready to Move"].map((status) => (
//           <label key={status} className="block">
//             <input
//               type="checkbox"
//               value={status}
//               checked={filters.constructionStatus.includes(status)}
//               onChange={(e) => onChange("constructionStatus", e.target.value)}
//             />{" "}
//             {status}
//           </label>
//         ))}
//       </div>

//       {/* Posted by */}
//       <div>
//         <h3 className="font-semibold mb-2">Posted by</h3>
//         {["Owner", "Builder", "Dealer", "Feature Dealer"].map((postedBy) => (
//           <label key={postedBy} className="block">
//             <input
//               type="checkbox"
//               value={postedBy}
//               checked={filters.postedBy.includes(postedBy)}
//               onChange={(e) => onChange("postedBy", e.target.value)}
//             />{" "}
//             {postedBy}
//           </label>
//         ))}
//       </div>

//       {/* Area Filter */}
//       <div>
//         <h3 className="font-semibold mb-2">Area</h3>
//         <div className="flex gap-2">
//           <input
//             type="number"
//             placeholder="Min Area"
//             className="border p-1 w-full"
//             onChange={(e) => onChange("minArea", e.target.value)}
//           />
//           <input
//             type="number"
//             placeholder="Max Area"
//             className="border p-1 w-full"
//             onChange={(e) => onChange("maxArea", e.target.value)}
//           />
//         </div>
//       </div>

//       {/* Localities Filter */}
//       <div>
//         <h3 className="font-semibold mb-2">Localities</h3>
//         {["Kalyanpur", "Swaroop Nagar", "Kidwai Nagar", "Shyam Nagar", "Panki"].map((locality) => (
//           <label key={locality} className="block">
//             <input
//               type="checkbox"
//               value={locality}
//               checked={filters.localities.includes(locality)}
//               onChange={(e) => onChange("localities", e.target.value)}
//             />{" "}
//             {locality}
//           </label>
//         ))}
//       </div>

//       {/* Amenities Filter */}
//       <div>
//         <h3 className="font-semibold mb-2">Amenities</h3>
//         {["Parking", "Vaastu Compliant", "Power Backup", "Lift", "Park"].map((amenity) => (
//           <label key={amenity} className="block">
//             <input
//               type="checkbox"
//               value={amenity}
//               checked={filters.amenities.includes(amenity)}
//               onChange={(e) => onChange("amenities", e.target.value)}
//             />{" "}
//             {amenity}
//           </label>
//         ))}
//       </div>

//       {/* Furnishing Status */}
//       <div>
//         <h3 className="font-semibold mb-2">Furnishing Status</h3>
//         {["Semifurnished", "Unfurnished", "Furnished"].map((status) => (
//           <label key={status} className="block">
//             <input
//               type="checkbox"
//               value={status}
//               checked={filters.furnishingStatus.includes(status)}
//               onChange={(e) => onChange("furnishingStatus", e.target.value)}
//             />{" "}
//             {status}
//           </label>
//         ))}
//       </div>

//       {/* RERA Approved */}
//       <div>
//         <label className="block">
//           <input
//             type="checkbox"
//             checked={filters.reraApproved}
//             onChange={(e) => onChange("reraApproved", e.target.checked)}
//           />
//           RERA Approved Properties
//         </label>
//       </div>

//       {/* Clear Filters Button */}
//       <div>
//         <button
//           onClick={() => onChange("clear")}
//           className="bg-red-500 text-white py-2 px-4 rounded"
//         >
//           Clear Filters
//         </button>
//       </div>
//     </div>
//   );
// };

// export default FiltersSidebar;




// import React, { useState } from "react";
// // import { Switch } from "@headlessui/react";

// const FiltersSidebar = ({ filters, onChange }) => {
//   const [budgetRange, setBudgetRange] = useState([0, 100]); // In Lakhs or Crores

//   const toggleValue = (key, value) => {
//     if (filters[key].includes(value)) {
//       onChange(key, filters[key].filter((item) => item !== value));
//     } else {
//       onChange(key, [...filters[key], value]);
//     }
//   };




//   // const handleClearFilters = () => {
//   //   const defaultFilters = {
//   //     hideSeen: false,
//   //     verifiedOnly: false,
//   //     minBudget: 0,
//   //     maxBudget: 100000000, // 100 Cr
//   //     propertyTypes: [],
//   //     // Add other filters like bedrooms, furnishing, etc., here
//   //   };
  
//     setFilters(defaultFilters);  // Reset local state
//     onChange(defaultFilters);    // Notify parent
//   };
  



//   const [filters, setFilters] = useState({
//     hideSeen: false,
//     verifiedOnly: false,
//     minBudget: 0,
//     maxBudget: 100000000,
//     propertyTypes: [],
//   });
  

//   return (
//     <div className="w-full p-4 bg-white rounded-md shadow-md space-y-6 max-w-sm">
//       {/* Hide Already Seen */}
//       <div className="flex items-center justify-between">
//         <span className="text-sm font-medium">Hide already seen</span>
//         <Switch
//           checked={filters.hideSeen}
//           onChange={(val) => onChange("hideSeen", val)}
//           className={`${filters.hideSeen ? "bg-blue-600" : "bg-gray-300"} 
//             relative inline-flex h-6 w-11 items-center rounded-full transition`}
//         >
//           <span
//             className={`${
//               filters.hideSeen ? "translate-x-6" : "translate-x-1"
//             } inline-block h-4 w-4 transform rounded-full bg-white transition`}
//           />
//         </Switch>
//       </div>

//       {/* Verified Properties */}
//       <div className="flex items-center justify-between">
//         <span className="text-sm font-medium">Verified properties</span>
//         <Switch
//           checked={filters.verified}
//           onChange={(val) => onChange("verified", val)}
//           className={`${filters.verified ? "bg-green-600" : "bg-gray-300"} 
//             relative inline-flex h-6 w-11 items-center rounded-full transition`}
//         >
//           <span
//             className={`${
//               filters.verified ? "translate-x-6" : "translate-x-1"
//             } inline-block h-4 w-4 transform rounded-full bg-white transition`}
//           />
//         </Switch>
//       </div>

//       {/* Budget */}
//       <div>
//         <h3 className="text-md font-semibold mb-2">Budget</h3>
//         <div className="flex justify-between mb-2">
//           <span>{budgetRange[0]} L</span>
//           <span>{budgetRange[1]} Cr</span>
//         </div>
//         <input
//           type="range"
//           min="0"
//           max="100"
//           value={budgetRange[0]}
//           onChange={(e) => {
//             const newRange = [parseInt(e.target.value), budgetRange[1]];
//             setBudgetRange(newRange);
//             onChange("minBudget", newRange[0]);
//           }}
//           className="w-full mb-2"
//         />
//         <input
//           type="range"
//           min="0"
//           max="100"
//           value={budgetRange[1]}
//           onChange={(e) => {
//             const newRange = [budgetRange[0], parseInt(e.target.value)];
//             setBudgetRange(newRange);
//             onChange("maxBudget", newRange[1]);
//           }}
//           className="w-full"
//         />
//       </div>

//       {/* Property Types */}
//       <div>
//         <h3 className="text-md font-semibold mb-2">Type of property</h3>
//         <div className="space-y-1">
//           {[
//             "Residential Land",
//             "Residential Apartment",
//             "Independent House/Villa",
//             "Independent/Builder Floor",
//             "Farm House",
//           ].map((type) => (
//             <label key={type} className="flex items-center space-x-2 text-sm">
//               <input
//                 type="checkbox"
//                 checked={filters.propertyType.includes(type)}
//                 onChange={() => toggleValue("propertyType", type)}
//               />
//               <span>{type}</span>
//             </label>
//           ))}
//         </div>
//       </div>

//       {/* You can copy this structure for other sections: Bedrooms, Amenities, etc. */}

//       {/* Clear Filters Button */}
//       <div>
//         <button
//           onClick={() => onChange("clear")}
//           className="bg-red-500 text-white w-full py-2 rounded hover:bg-red-600"
//         >
//           Clear Filters
//         </button>
//       </div>

//       </div>

//         );

      



// {
//   /* <button
//   onClick={handleClearFilters}
//   className="bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300 mt-4"
// > */}
//   {/* Clear Filters
// </button> */}








// //     </div>
// //   );
// // };

// export default FiltersSidebar;








// import { motion } from "framer-motion";

// const FiltersSidebar = ({ filters, onChange }) => {
//   const propertyTypes = ["1 RK", "1 BHK", "2 BHK", "3 BHK", "4+ BHK"];

//   const toggleValue = (key, value) => {
//     if (Array.isArray(filters[key])) {
//       const newArray = filters[key].includes(value)
//         ? filters[key].filter((v) => v !== value)
//         : [...filters[key], value];
//       onChange(key, newArray);
//     } else {
//       onChange(key, value);
//     }
//   };

//   const handleClearFilters = () => {
//     const defaultFilters = {
//       hideSeen: false,
//       verifiedOnly: false,
//       minBudget: 0,
//       maxBudget: 100000000,
//       propertyTypes: [], // default to empty array
//     };

//     Object.entries(defaultFilters).forEach(([key, value]) => {
//       onChange(key, value);
//     });
//   };

//   return (
//     <motion.div
//       initial={{ opacity: 0, x: -30 }}
//       animate={{ opacity: 1, x: 0 }}
//       transition={{ duration: 0.5 }}
//       className="w-full md:w-64 bg-white p-6 shadow-lg rounded-2xl"
//     >
//       <div className="flex justify-between items-center mb-4">
//         <h2 className="text-xl font-semibold">Filters</h2>
//         <button
//           onClick={handleClearFilters}
//           className="text-sm text-blue-600 hover:underline"
//         >
//           Clear Filters
//         </button>
//       </div>

//       {/* Toggle Switches */}
//       <div className="space-y-4 border-b pb-4">
//         {/* Hide Already Seen */}
//         <div className="flex items-center justify-between">
//           <span>Hide Already Seen</span>
//           <label className="relative inline-flex items-center cursor-pointer">
//             <input
//               type="checkbox"
//               checked={filters.hideSeen || false} // default to false if undefined
//               onChange={(e) => onChange("hideSeen", e.target.checked)}
//               className="sr-only peer"
//             />
//             <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:bg-blue-600 after:content-[''] after:absolute after:top-0.5 after:left-[4px] after:bg-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full peer-checked:after:border-white" />
//           </label>
//         </div>

//         {/* Verified Only */}
//         <div className="flex items-center justify-between">
//           <span>Verified Properties</span>
//           <label className="relative inline-flex items-center cursor-pointer">
//             <input
//               type="checkbox"
//               checked={filters.verifiedOnly || false} // default to false if undefined
//               onChange={(e) => onChange("verifiedOnly", e.target.checked)}
//               className="sr-only peer"
//             />
//             <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:bg-blue-600 after:content-[''] after:absolute after:top-0.5 after:left-[4px] after:bg-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full peer-checked:after:border-white" />
//           </label>
//         </div>
//       </div>

//       {/* <div className="flex items-center justify-between">
//         <span className="text-sm font-medium">Verified properties</span>
//         <Switch
//           checked={filters.verified}
//           onChange={(val) => onChange("verified", val)}
//           className={`${filters.verified ? "bg-green-600" : "bg-gray-300"} 
//             relative inline-flex h-6 w-11 items-center rounded-full transition`}
//         >
//           <span
//             className={`${
//               filters.verified ? "translate-x-6" : "translate-x-1"
//             } inline-block h-4 w-4 transform rounded-full bg-white transition`}
//           />
//         </Switch>
//       </div>
//  */}



//       {/* Budget Slider */}
//       <div className="py-4 border-b">
//         <h3 className="text-sm font-medium mb-2">Budget (in ₹)</h3>
//         <div className="flex flex-col space-y-2">
//           <div className="flex items-center space-x-2">
//             <span className="text-sm">Min:</span>
//             <input
//               type="number"
//               className="w-full border px-2 py-1 rounded"
//               value={filters.minBudget || 0} // default to 0 if undefined
//               min={0}
//               max={filters.maxBudget || 100000000} // default to max budget if undefined
//               step={50000}
//               onChange={(e) => onChange("minBudget", Number(e.target.value))}
//             />
//           </div>
//           <div className="flex items-center space-x-2">
//             <span className="text-sm">Max:</span>
//             <input
//               type="number"
//               className="w-full border px-2 py-1 rounded"
//               value={filters.maxBudget || 100000000} // default to max budget if undefined
//               min={filters.minBudget || 0} // ensure min is defined
//               max={100000000}
//               step={50000}
//               onChange={(e) => onChange("maxBudget", Number(e.target.value))}
//             />
//           </div>
//         </div>
//       </div>

//       {/* Property Types */}
//       <div className="py-4">
//         <h3 className="text-sm font-medium mb-2">Property Type</h3>
//         <div className="grid grid-cols-2 gap-2">
//           {propertyTypes.map((type) => (
//             <label key={type} className="flex items-center space-x-2">
//               <input
//                 type="checkbox"
//                 checked={(filters.propertyTypes || []).includes(type)} // make sure filters.propertyTypes is an array
//                 onChange={() => toggleValue("propertyTypes", type)}
//                 className="form-checkbox text-blue-600"
//               />
//               <span>{type}</span>
//             </label>
//           ))}
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// export default FiltersSidebar;



// import React, { useState } from "react";
// import { Switch } from "@headlessui/react";

// const FiltersSidebar = ({ filters, onChange }) => {
//   const [budgetRange, setBudgetRange] = useState([
//     filters.minBudget || 0,
//     filters.maxBudget || 100,
//   ]);

//   const toggleValue = (key, value) => {
//     if (filters[key]?.includes(value)) {
//       onChange(key, filters[key].filter((item) => item !== value));
//     } else {
//       onChange(key, [...(filters[key] || []), value]);
//     }
//   };

//   const handleClearFilters = () => {
//     const defaultFilters = {
//       hideSeen: false,
//       verifiedOnly: false,
//       minBudget: 0,
//       maxBudget: 100,
//       propertyType: [],
//     };

//     setBudgetRange([0, 100]);
//     Object.keys(defaultFilters).forEach((key) => {
//       onChange(key, defaultFilters[key]);
//     });
//   };

//   return (
//     <div className="w-full p-4 bg-white rounded-md shadow-md space-y-6 max-w-sm">
//       {/* Hide Already Seen */}
//       <div className="flex items-center justify-between">
//         <span className="text-sm font-medium">Hide already seen</span>
//         <Switch
//           checked={filters.hideSeen}
//           onChange={(val) => onChange("hideSeen", val)}
//           className={`${
//             filters.hideSeen ? "bg-blue-600" : "bg-gray-300"
//           } relative inline-flex h-6 w-11 items-center rounded-full transition`}
//         >
//           <span
//             className={`${
//               filters.hideSeen ? "translate-x-6" : "translate-x-1"
//             } inline-block h-4 w-4 transform rounded-full bg-white transition`}
//           />
//         </Switch>
//       </div>

//       {/* Verified Properties */}
//       <div className="flex items-center justify-between">
//         <span className="text-sm font-medium">Verified properties</span>
//         <Switch
//           checked={filters.verifiedOnly}
//           onChange={(val) => onChange("verifiedOnly", val)}
//           className={`${
//             filters.verifiedOnly ? "bg-green-600" : "bg-gray-300"
//           } relative inline-flex h-6 w-11 items-center rounded-full transition`}
//         >
//           <span
//             className={`${
//               filters.verifiedOnly ? "translate-x-6" : "translate-x-1"
//             } inline-block h-4 w-4 transform rounded-full bg-white transition`}
//           />
//         </Switch>
//       </div>

//       {/* Budget */}
//       <div>
//         <h3 className="text-md font-semibold mb-2">Budget</h3>
//         <div className="flex justify-between mb-2 text-sm">
//           <span>{budgetRange[0]} L</span>
//           <span>{budgetRange[1]} Cr</span>
//         </div>
//         <input
//           type="range"
//           min="0"
//           max="100"
//           value={budgetRange[0]}
//           onChange={(e) => {
//             const newRange = [parseInt(e.target.value), budgetRange[1]];
//             setBudgetRange(newRange);
//             onChange("minBudget", newRange[0]);
//           }}
//           className="w-full mb-2"
//         />
//         <input
//           type="range"
//           min="0"
//           max="100"
//           value={budgetRange[1]}
//           onChange={(e) => {
//             const newRange = [budgetRange[0], parseInt(e.target.value)];
//             setBudgetRange(newRange);
//             onChange("maxBudget", newRange[1]);
//           }}
//           className="w-full"
//         />
//       </div>

//       {/* Property Types */}
//       <div>
//         <h3 className="text-md font-semibold mb-2">Type of property</h3>
//         <div className="space-y-1">
//           {[
//             "Residential Land",
//             "Residential Apartment",
//             "Independent House/Villa",
//             "Independent/Builder Floor",
//             "Farm House",
//           ].map((type) => (
//             <label key={type} className="flex items-center space-x-2 text-sm">
//               <input
//                 type="checkbox"
//                 checked={filters.propertyType?.includes(type)}
//                 onChange={() => toggleValue("propertyType", type)}
//               />
//               <span>{type}</span>
//             </label>
//           ))}
//         </div>
//       </div>

//       {/* Clear Filters Button */}
//       <div>
//         <button
//           onClick={handleClearFilters}
//           className="bg-red-500 text-white w-full py-2 rounded hover:bg-red-600"
//         >
//           Clear Filters
//         </button>
//       </div>
//     </div>
//   );
// };

// export default FiltersSidebar;







// import React, { useState } from "react";
// import { Switch } from "@headlessui/react";

// const FiltersSidebar = ({ filters, onChange }) => {
//   const [budgetRange, setBudgetRange] = useState([
//     filters.minBudget || 0,
//     filters.maxBudget || 100,
//   ]);
//   const [areaRange, setAreaRange] = useState([0, 4000]);

//   const toggleValue = (key, value) => {
//     if (filters[key]?.includes(value)) {
//       onChange(key, filters[key].filter((item) => item !== value));
//     } else {
//       onChange(key, [...(filters[key] || []), value]);
//     }
//   };

//   const handleClearFilters = () => {
//     const defaultFilters = {
//       hideSeen: false,
//       verifiedOnly: false,
//       minBudget: 0,
//       maxBudget: 100,
//       propertyType: [],
//       areaMin: 0,
//       areaMax: 4000,
//       postedBy: [],
//       preferredLandType: [],
//       localities: [],
//       purchaseType: [],
//       authorityApproval: [],
//       ownershipType: [],
//       facingDirection: [],
//       roadWidth: [],
//       hasPhotos: false,
//       hasVideos: false,
//       reraApproved: false,
//     };
//     setBudgetRange([0, 100]);
//     setAreaRange([0, 4000]);
//     Object.keys(defaultFilters).forEach((key) => {
//       onChange(key, defaultFilters[key]);
//     });
//   };

//   const checkboxGroup = (title, key, options, showMore = false) => (
//     <div>
//       <h3 className="text-md font-semibold mb-2">{title}</h3>
//       <div className="space-y-1">
//         {options.map((val) => (
//           <label key={val} className="flex items-center space-x-2 text-sm">
//             <input
//               type="checkbox"
//               checked={filters[key]?.includes(val)}
//               onChange={() => toggleValue(key, val)}
//             />
//             <span>{val}</span>
//           </label>
//         ))}
//         {showMore && <p className="text-blue-600 text-sm cursor-pointer">+ More</p>}
//       </div>
//     </div>
//   );

//   return (
//     <div className="w-full p-4 bg-white rounded-md shadow-md space-y-6 max-w-sm">
//       <h2 className="text-lg font-bold">Applied Filters</h2>
//       <button
//         onClick={handleClearFilters}
//         className="text-red-500 text-sm underline mb-4"
//       >
//         Clear All
//       </button>

//       {/* Hide Already Seen */}
//       <div className="flex items-center justify-between">
//         <span className="text-sm font-medium">Hide already seen</span>
//         <Switch
//           checked={filters.hideSeen}
//           onChange={(val) => onChange("hideSeen", val)}
//           className={`${
//             filters.hideSeen ? "bg-blue-600" : "bg-gray-300"
//           } relative inline-flex h-6 w-11 items-center rounded-full transition`}
//         >
//           <span
//             className={`${
//               filters.hideSeen ? "translate-x-6" : "translate-x-1"
//             } inline-block h-4 w-4 transform rounded-full bg-white transition`}
//           />
//         </Switch>
//       </div>

//       {/* Budget */}
//       <div>
//         <h3 className="text-md font-semibold mb-2">Budget</h3>
//         <div className="flex justify-between mb-2 text-sm">
//           <span>{budgetRange[0]} L</span>
//           <span>{budgetRange[1]} Cr</span>
//         </div>
//         <input
//           type="range"
//           min="0"
//           max="100"
//           value={budgetRange[0]}
//           onChange={(e) => {
//             const newRange = [parseInt(e.target.value), budgetRange[1]];
//             setBudgetRange(newRange);
//             onChange("minBudget", newRange[0]);
//           }}
//           className="w-full mb-2"
//         />
//         <input
//           type="range"
//           min="0"
//           max="100"
//           value={budgetRange[1]}
//           onChange={(e) => {
//             const newRange = [budgetRange[0], parseInt(e.target.value)];
//             setBudgetRange(newRange);
//             onChange("maxBudget", newRange[1]);
//           }}
//           className="w-full"
//         />
//       </div>

//       {/* Area */}
//       <div>
//         <h3 className="text-md font-semibold mb-2">Area (sq.ft.)</h3>
//         <div className="flex justify-between mb-2 text-sm">
//           <span>{areaRange[0]} sq.ft.</span>
//           <span>{areaRange[1]}+ sq.ft.</span>
//         </div>
//         <input
//           type="range"
//           min="0"
//           max="4000"
//           value={areaRange[0]}
//           onChange={(e) => {
//             const newRange = [parseInt(e.target.value), areaRange[1]];
//             setAreaRange(newRange);
//             onChange("areaMin", newRange[0]);
//           }}
//           className="w-full mb-2"
//         />
//         <input
//           type="range"
//           min="0"
//           max="4000"
//           value={areaRange[1]}
//           onChange={(e) => {
//             const newRange = [areaRange[0], parseInt(e.target.value)];
//             setAreaRange(newRange);
//             onChange("areaMax", newRange[1]);
//           }}
//           className="w-full"
//         />
//       </div>

//       {/* Property Types */}
//       {checkboxGroup("Type of property", "propertyType", [
//         "Residential Land",
//         "Residential Apartment",
//         "Independent House/Villa",
//         "Independent/Builder Floor",
//         "Farm House",
//       ])}

//       {/* Posted by */}
//       {checkboxGroup("Posted by", "postedBy", [
//         "Owner",
//         "Builder",
//         "Dealer",
//         "Feature Dealer",
//       ])}

//       {/* Preferred Plot / Land type */}
//       {checkboxGroup("Preferred Plot / Land type", "preferredLandType", [
//         "Corner Property",
//         "In Gated Society",
//       ])}

//       {/* Localities */}
//       {checkboxGroup(
//         "Localities",
//         "localities",
//         [
//           "Kalyanpur",
//           "Swaroop Nagar",
//           "Kidwai Nagar",
//           "Shyam Nagar",
//           "Chakeri",
//         ],
//         true
//       )}

//       {/* New Projects / Purchase Type */}
//       {checkboxGroup("Purchase type", "purchaseType", [
//         "New Projects",
//         "Resale",
//       ])}

//       {/* Approved by Authority */}
//       {checkboxGroup("Approved by Authority", "authorityApproval", [
//         "Local Authority",
//       ])}

//       {/* Ownership Type */}
//       {checkboxGroup("Ownership Type", "ownershipType", [
//         "Freehold",
//         "Co-operative Society",
//         "Power of Attorney",
//         "Leasehold",
//       ])}

//       {/* Facing Direction */}
//       {checkboxGroup("Facing Direction", "facingDirection", [
//         "East",
//         "North",
//         "North-East",
//         "South-East",
//         "South",
//         "West",
//         "North-West",
//         "South-West",
//       ])}

//       {/* Width of Facing Road */}
//       {checkboxGroup("Width of Facing Road", "roadWidth", [
//         "10-20 ft",
//         "20-50 ft",
//         "50+ ft",
//       ])}

//       {/* Media Filters */}
//       {checkboxGroup("Properties with Media", "mediaFilters", [
//         "Photos",
//         "Videos",
//       ])}

//       {/* RERA Approved */}
//       {checkboxGroup("RERA Approved", "reraApproved", [
//         "RERA approved properties",
//         "RERA registered dealers",
//       ])}
//     </div>
//   );
// };

// export default FiltersSidebar;

// import React from "react";

// const FiltersSidebar = ({ filters, onChange }) => {
//   const propertyTypes = [
//     "Residential Apartment",
//     "Independent House/Villa",
//     "Independent/Builder Floor",
//     "Residential Land"
//   ];

//   const bhkOptions = ["1 BHK", "2 BHK", "3 BHK"];

//   const handleFilterChange = (key, value) => {
//     if (key === "clear") {
//       setFilters({
//         hideSeen: false,
//         verified: false,
//         minBudget: "",
//         maxBudget: "",
//         propertyType: [],
//         bedrooms: [],
//         constructionStatus: [],
//         postedBy: [],
//         minArea: "",
//         maxArea: "",
//         localities: [],
//         amenities: [],
//         furnishingStatus: [],
//         reraApproved: false
//       });
//       return;
//     }
  
//     setFilters((prev) => {
//       if (Array.isArray(prev[key])) {
//         return {
//           ...prev,
//           [key]: prev[key].includes(value)
//             ? prev[key].filter((v) => v !== value)
//             : [...prev[key], value]
//         };
//       }
  
//       return { ...prev, [key]: value };
//     });
//   };
  

//   return (
//     <div className="w-full md:w-1/4 bg-white p-4 shadow-lg rounded-lg space-y-6">
//       <h2 className="text-xl font-semibold mb-2">Filters</h2>

//       {/* Budget Filter */}
//       <div>
//         <label className="block font-medium mb-1">Min Budget (in Lakhs)</label>
//         <input
//           type="number"
//           className="w-full border rounded p-2 mb-2"
//           value={filters.minBudget}
//           onChange={(e) => onChange("minBudget", e.target.value)}
//         />
//         <label className="block font-medium mb-1">Max Budget (in Lakhs)</label>
//         <input
//           type="number"
//           className="w-full border rounded p-2"
//           value={filters.maxBudget}
//           onChange={(e) => onChange("maxBudget", e.target.value)}
//         />
//       </div>

//       {/* Property Type Filter */}
//       <div>
//         <h3 className="font-medium mb-1">Property Type</h3>
//         {propertyTypes.map((type) => (
//           <label key={type} className="block text-sm">
//             <input
//               type="checkbox"
//               className="mr-2"
//               checked={Array.isArray(filters.propertyType) && filters.propertyType.includes(type)}
//               onChange={() => onChange("propertyType", type)}
//             />
//             {type}
//           </label>
//         ))}
//       </div>

//       {/* BHK Filter */}
//       <div>
//         <h3 className="font-medium mb-1">Bedrooms (BHK)</h3>
//         {bhkOptions.map((bhk) => (
//           <label key={bhk} className="block text-sm">
//             <input
//               type="checkbox"
//               className="mr-2"
//               checked={Array.isArray(filters.bedrooms) && filters.bedrooms.includes(bhk)}
//               onChange={() => onChange("bedrooms", bhk)}
//             />
//             {bhk}
//           </label>
//         ))}
//       </div>

//       {/* Verified Filter (Switch or Checkbox) */}
//       <div>
//         <label className="flex items-center text-sm">
//           <input
//             type="checkbox"
//             className="mr-2"
//             checked={filters.verified}
//             onChange={(e) => onChange("verified", e.target.checked)}
//           />
//           Verified Listings Only
//         </label>
//       </div>

//       {/* RERA Approved */}
//       <div>
//         <label className="flex items-center text-sm">
//           <input
//             type="checkbox"
//             className="mr-2"
//             checked={filters.reraApproved}
//             onChange={(e) => onChange("reraApproved", e.target.checked)}
//           />
//           RERA Approved
//         </label>
//       </div>

//       {/* Clear All */}
//       <div className="pt-4">


//         {/* <button
//           onClick={() => onChange("clear")}
//           className="text-red-600 hover:underline text-sm"
//         >
//           Clear All Filters
//         </button> */}


// <button
//   onClick={() => onChange("clear")}
//   className="text-red-600 hover:underline text-sm"
// >
//   Clear All Filters
// </button>



//       </div>





//     </div>
//   );
// };

// export default FiltersSidebar;




// import React from "react";

// const FiltersSidebar = ({ filters, onChange }) => {
//   const propertyTypes = [
//     "Residential Apartment",
//     "Independent House/Villa",
//     "Independent/Builder Floor",
//     "Residential Land"
//   ];

//   const bhkOptions = ["1 BHK", "2 BHK", "3 BHK"];

//   return (
//     <div className="w-full md:w-1/4 bg-white p-4 shadow rounded-lg space-y-6">
//       <h2 className="text-xl font-semibold mb-2">Filters</h2>

//       {/* Budget Filter */}
//       <div>
//         <label className="block font-medium mb-1">Min Budget (in Lakhs)</label>
//         <input
//           type="number"
//           className="w-full border rounded p-2 mb-2"
//           value={filters.minBudget}
//           onChange={(e) => onChange("minBudget", e.target.value)}
//         />
//         <label className="block font-medium mb-1">Max Budget (in Lakhs)</label>
//         <input
//           type="number"
//           className="w-full border rounded p-2"
//           value={filters.maxBudget}
//           onChange={(e) => onChange("maxBudget", e.target.value)}
//         />
//       </div>

//       {/* Property Type */}
//       <div>
//         <h3 className="font-medium mb-1">Property Type</h3>
//         {propertyTypes.map((type) => (
//           <label key={type} className="block text-sm">
//             <input
//               type="checkbox"
//               className="mr-2"
//               checked={filters.propertyType.includes(type)}
//               onChange={() => onChange("propertyType", type)}
//             />
//             {type}
//           </label>
//         ))}
//       </div>

//       {/* BHK */}
//       <div>
//         <h3 className="font-medium mb-1">Bedrooms (BHK)</h3>
//         {bhkOptions.map((bhk) => (
//           <label key={bhk} className="block text-sm">
//             <input
//               type="checkbox"
//               className="mr-2"
//               checked={filters.bedrooms.includes(bhk)}
//               onChange={() => onChange("bedrooms", bhk)}
//             />
//             {bhk}
//           </label>
//         ))}
//       </div>

//       {/* Clear All */}
//       <button
//         onClick={() => onChange("clear")}
//         className="mt-4 text-sm text-red-600 hover:underline"
//       >
//         Clear All Filters
//       </button>
//     </div>
//   );
// };

// export default FiltersSidebar;



// import React from "react";

// const FiltersSidebar = ({ filters, onChange }) => {
//   const propertyTypes = [
//     "Residential Apartment",
//     "Independent House/Villa",
//     "Independent/Builder Floor",
//     "Residential Land",
//   ];

//   const bhkOptions = ["1 BHK", "2 BHK", "3 BHK"];

//   return (
//     <div className="w-full md:w-1/4 bg-white p-4 shadow-lg rounded-lg space-y-6">
//       <h2 className="text-xl font-semibold mb-2">Filters</h2>

//       {/* Budget Filter */}
//       <div>
//         <label className="block font-medium mb-1">Min Budget (in Lakhs)</label>
//         <input
//           type="number"
//           className="w-full border rounded p-2 mb-2"
//           value={filters.minBudget}
//           onChange={(e) => onChange("minBudget", e.target.value)}
//         />
//         <label className="block font-medium mb-1">Max Budget (in Lakhs)</label>
//         <input
//           type="number"
//           className="w-full border rounded p-2"
//           value={filters.maxBudget}
//           onChange={(e) => onChange("maxBudget", e.target.value)}
//         />
//       </div>

//       {/* Property Type Filter */}
//       <div>
//         <h3 className="font-medium mb-1">Property Type</h3>
//         {propertyTypes.map((type) => (
//           <label key={type} className="block text-sm">
//             <input
//               type="checkbox"
//               className="mr-2"
//               checked={Array.isArray(filters.propertyType) && filters.propertyType.includes(type)}
//               onChange={() => onChange("propertyType", type)}
//             />
//             {type}
//           </label>
//         ))}
//       </div>

//       {/* BHK Filter */}
//       <div>
//         <h3 className="font-medium mb-1">Bedrooms (BHK)</h3>
//         {bhkOptions.map((bhk) => (
//           <label key={bhk} className="block text-sm">
//             <input
//               type="checkbox"
//               className="mr-2"
//               checked={Array.isArray(filters.bedrooms) && filters.bedrooms.includes(bhk)}
//               onChange={() => onChange("bedrooms", bhk)}
//             />
//             {bhk}
//           </label>
//         ))}
//       </div>

//       {/* Verified Filter (Switch or Checkbox) */}
//       <div>
//         <label className="flex items-center text-sm">
//           <input
//             type="checkbox"
//             className="mr-2"
//             checked={filters.verified}
//             onChange={(e) => onChange("verified", e.target.checked)}
//           />
//           Verified Listings Only
//         </label>
//       </div>

//       {/* RERA Approved */}
//       <div>
//         <label className="flex items-center text-sm">
//           <input
//             type="checkbox"
//             className="mr-2"
//             checked={filters.reraApproved}
//             onChange={(e) => onChange("reraApproved", e.target.checked)}
//           />
//           RERA Approved
//         </label>
//       </div>

//       {/* Clear All */}
//       <div className="pt-4">
//         <button
//           onClick={() => onChange("clear")}
//           className="text-red-600 hover:underline text-sm"
//         >
//           Clear All Filters
//         </button>
//       </div>
//     </div>
//   );
// };

// export default FiltersSidebar;


// import React from "react";

// const FiltersSidebar = ({ filters, onChange }) => {
//   const propertyTypes = [
//     "Residential Apartment",
//     "Independent House/Villa",
//     "Independent/Builder Floor",
//     "Residential Land",
//   ];

//   const bhkOptions = ["1 BHK", "2 BHK", "3 BHK"];

//   return (
//     <div className="w-full md:w-1/4 bg-white p-4 shadow-lg rounded-lg space-y-6">
//       <h2 className="text-xl font-semibold mb-2">Filters</h2>

//       {/* Budget Filter */}
//       <div>
//         <label className="block font-medium mb-1">Min Budget (in Lakhs)</label>
//         <input
//           type="number"
//           className="w-full border rounded p-2 mb-2"
//           value={filters.minBudget}
//           onChange={(e) => onChange("minBudget", e.target.value)}
//         />
//         <label className="block font-medium mb-1">Max Budget (in Lakhs)</label>
//         <input
//           type="number"
//           className="w-full border rounded p-2"
//           value={filters.maxBudget}
//           onChange={(e) => onChange("maxBudget", e.target.value)}
//         />
//       </div>

//       {/* Property Type Filter */}
//       <div>
//         <h3 className="font-medium mb-1">Property Type</h3>
//         {propertyTypes.map((type) => (
//           <label key={type} className="block text-sm">
//             <input
//               type="checkbox"
//               className="mr-2"
//               checked={Array.isArray(filters.propertyType) && filters.propertyType.includes(type)}
//               onChange={() => onChange("propertyType", type)}
//             />
//             {type}
//           </label>
//         ))}
//       </div>

//       {/* BHK Filter */}
//       <div>
//         <h3 className="font-medium mb-1">Bedrooms (BHK)</h3>
//         {bhkOptions.map((bhk) => (
//           <label key={bhk} className="block text-sm">
//             <input
//               type="checkbox"
//               className="mr-2"
//               checked={Array.isArray(filters.bedrooms) && filters.bedrooms.includes(bhk)}
//               onChange={() => onChange("bedrooms", bhk)}
//             />
//             {bhk}
//           </label>
//         ))}
//       </div>

//       {/* Verified Filter */}
//       <div>
//         <label className="flex items-center text-sm">
//           <input
//             type="checkbox"
//             className="mr-2"
//             checked={filters.verified}
//             onChange={(e) => onChange("verified", e.target.checked)}
//           />
//           Verified Listings Only
//         </label>
//       </div>

//       {/* RERA Approved */}
//       <div>
//         <label className="flex items-center text-sm">
//           <input
//             type="checkbox"
//             className="mr-2"
//             checked={filters.reraApproved}
//             onChange={(e) => onChange("reraApproved", e.target.checked)}
//           />
//           RERA Approved
//         </label>
//       </div>

//       {/* Clear All Filters */}
//       <div className="pt-4">
//         <button
//           onClick={() => onChange("clear")}
//           className="text-red-600 hover:underline text-sm"
//         >
//           Clear All Filters
//         </button>
//       </div>
//     </div>
//   );
// };

// export default FiltersSidebar;


// import React, { useState } from "react";

// const FiltersSidebar = ({ filters, onChange }) => {
//   const propertyTypes = [
//     "Residential Apartment",
//     "Independent House/Villa",
//     "Independent/Builder Floor",
//     "Residential Land",
//   ];

//   const bhkOptions = ["1 BHK", "2 BHK", "3 BHK"];

//   const constructionStatusOptions = [
//     "New Launch",
//     "Under Construction",
//     "Ready to move",
//   ];

//   const postedByOptions = ["Owner", "Builder", "Dealer"];

//   const localitiesOptions = [
//     { name: "Kalyanpur", rating: 4.0 },
//     { name: "Swaroop Nagar", rating: 4.5 },
//     { name: "Kidwai Nagar", rating: 4.2 },
//     { name: "Shyam Nagar", rating: 4.1 },
//     { name: "Panki", rating: 4.1 },
//   ];

//   const handleFilterChange = (key, value) => {
//     if (key === "clear") {
//       setFilters({
//         hideSeen: false,
//         verified: false,
//         minBudget: "",
//         maxBudget: "",
//         propertyType: [],
//         bedrooms: [],
//         constructionStatus: [],
//         postedBy: [],
//         minArea: "",
//         maxArea: "",
//         localities: [],
//         amenities: [],
//         furnishingStatus: [],
//         reraApproved: false,
//       });
//       return;
//     }

//     setFilters((prev) => {
//       if (Array.isArray(prev[key])) {
//         return {
//           ...prev,
//           [key]: prev[key].includes(value)
//             ? prev[key].filter((v) => v !== value)
//             : [...prev[key], value],
//         };
//       }

//       return { ...prev, [key]: value };
//     });
//   };

//   return (
//     <div className="w-full md:w-1/4 bg-white p-4 shadow-lg rounded-lg space-y-6">
//       <h2 className="text-xl font-semibold mb-2">Filters</h2>

//       {/* Budget Filter */}
//       <div>
//         <label className="block font-medium mb-1">Min Budget (in Lakhs)</label>
//         <input
//           type="number"
//           className="w-full border rounded p-2 mb-2"
//           value={filters.minBudget}
//           onChange={(e) => onChange("minBudget", e.target.value)}
//         />
//         <label className="block font-medium mb-1">Max Budget (in Lakhs)</label>
//         <input
//           type="number"
//           className="w-full border rounded p-2"
//           value={filters.maxBudget}
//           onChange={(e) => onChange("maxBudget", e.target.value)}
//         />
//       </div>

//       {/* Property Type Filter */}
//       <div>
//         <h3 className="font-medium mb-1">Property Type</h3>
//         {propertyTypes.map((type) => (
//           <label key={type} className="block text-sm">
//             <input
//               type="checkbox"
//               className="mr-2"
//               checked={Array.isArray(filters.propertyType) && filters.propertyType.includes(type)}
//               onChange={() => onChange("propertyType", type)}
//             />
//             {type}
//           </label>
//         ))}
//       </div>

//       {/* BHK Filter */}
//       <div>
//         <h3 className="font-medium mb-1">Bedrooms (BHK)</h3>
//         {bhkOptions.map((bhk) => (
//           <label key={bhk} className="block text-sm">
//             <input
//               type="checkbox"
//               className="mr-2"
//               checked={Array.isArray(filters.bedrooms) && filters.bedrooms.includes(bhk)}
//               onChange={() => onChange("bedrooms", bhk)}
//             />
//             {bhk}
//           </label>
//         ))}
//       </div>

//       {/* Construction Status Filter */}
//       <div>
//         <h3 className="font-medium mb-1">Construction Status</h3>
//         {constructionStatusOptions.map((status) => (
//           <label key={status} className="block text-sm">
//             <input
//               type="checkbox"
//               className="mr-2"
//               checked={Array.isArray(filters.constructionStatus) && filters.constructionStatus.includes(status)}
//               onChange={() => onChange("constructionStatus", status)}
//             />
//             {status}
//           </label>
//         ))}
//       </div>

//       {/* Posted By Filter */}
//       <div>
//         <h3 className="font-medium mb-1">Posted By</h3>
//         {postedByOptions.map((type) => (
//           <label key={type} className="block text-sm">
//             <input
//               type="checkbox"
//               className="mr-2"
//               checked={Array.isArray(filters.postedBy) && filters.postedBy.includes(type)}
//               onChange={() => onChange("postedBy", type)}
//             />
//             {type}
//           </label>
//         ))}
//       </div>

//       {/* Area Filter */}
//       <div>
//         <label className="block font-medium mb-1">Min Area (sq.ft.)</label>
//         <input
//           type="number"
//           className="w-full border rounded p-2 mb-2"
//           value={filters.minArea}
//           onChange={(e) => onChange("minArea", e.target.value)}
//         />
//         <label className="block font-medium mb-1">Max Area (sq.ft.)</label>
//         <input
//           type="number"
//           className="w-full border rounded p-2"
//           value={filters.maxArea}
//           onChange={(e) => onChange("maxArea", e.target.value)}
//         />
//       </div>

//       {/* Localities Filter */}
//       <div>
//         <h3 className="font-medium mb-1">Localities</h3>
//         {localitiesOptions.map((locality) => (
//           <label key={locality.name} className="block text-sm">
//             <input
//               type="checkbox"
//               className="mr-2"
//               checked={Array.isArray(filters.localities) && filters.localities.includes(locality.name)}
//               onChange={() => onChange("localities", locality.name)}
//             />
//             {locality.name} <span className="text-yellow-500">★ {locality.rating}</span>
//           </label>
//         ))}
//         <label className="block text-sm mt-2">
//           <input
//             type="checkbox"
//             className="mr-2"
//             checked={filters.localities.includes("More Localities")}
//             onChange={() => onChange("localities", "More Localities")}
//           />
//           More Localities
//         </label>
//       </div>

//       {/* Verified Filter (Switch or Checkbox) */}
//       <div>
//         <label className="flex items-center text-sm">
//           <input
//             type="checkbox"
//             className="mr-2"
//             checked={filters.verified}
//             onChange={(e) => onChange("verified", e.target.checked)}
//           />
//           Verified Listings Only
//         </label>
//       </div>

//       {/* RERA Approved */}
//       <div>
//         <label className="flex items-center text-sm">
//           <input
//             type="checkbox"
//             className="mr-2"
//             checked={filters.reraApproved}
//             onChange={(e) => onChange("reraApproved", e.target.checked)}
//           />
//           RERA Approved
//         </label>
//       </div>

//       {/* Clear All */}
//       <div className="pt-4">
//         <button
//           onClick={() => onChange("clear")}
//           className="text-red-600 hover:underline text-sm"
//         >
//           Clear All Filters
//         </button>
//       </div>
//     </div>
//   );
// };

// export default FiltersSidebar;


import React, { useState } from "react";

const FiltersSidebar = ({ filters, onChange }) => {
  const propertyTypes = [
    "Residential Apartment",
    "Independent House/Villa",
    "Independent/Builder Floor",
    "Residential Land",
  ];

  const bhkOptions = ["1 BHK", "2 BHK", "3 BHK"];

  const constructionStatusOptions = [
    "New Launch",
    "Under Construction",
    "Ready to move",
  ];

  const postedByOptions = ["Owner", "Builder", "Dealer"];

  const localitiesList = [
    { city: "Allahabad", area: "Civil Lines", rating: 4.5 },
    { city: "Kanpur", area: "Kidwai Nagar", rating: 4.0 },
    { city: "Lucknow", area: "Hazratganj", rating: 4.3 },
    { city: "Varanasi", area: "Assi Ghat", rating: 4.7 },
    { city: "Agra", area: "Taj Ganj", rating: 4.1 },
    { city: "Meerut", area: "Shastri Nagar", rating: 4.2 },
    { city: "Bareilly", area: "Civil Lines", rating: 4.0 },
    { city: "Mathura", area: "Vikramshila", rating: 4.6 },
    { city: "Ghaziabad", area: "Indirapuram", rating: 4.4 },
    // Add more localities here as needed
  ];

  const [searchQuery, setSearchQuery] = useState("");
  const [displayedLocalities, setDisplayedLocalities] = useState(localitiesList.slice(0, 3));

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    // Filter localities based on search query
    const filteredLocalities = localitiesList.filter(
      (locality) =>
        locality.city.toLowerCase().includes(query.toLowerCase()) ||
        locality.area.toLowerCase().includes(query.toLowerCase())
    );
    setDisplayedLocalities(filteredLocalities);
  };

  const handleFilterChange = (key, value) => {
    if (key === "clear") {
      setFilters({
        hideSeen: false,
        verified: false,
        minBudget: "",
        maxBudget: "",
        propertyType: [],
        bedrooms: [],
        constructionStatus: [],
        postedBy: [],
        minArea: "",
        maxArea: "",
        localities: [],
        amenities: [],
        furnishingStatus: [],
        reraApproved: false,
      });
      return;
    }

    setFilters((prev) => {
      if (Array.isArray(prev[key])) {
        return {
          ...prev,
          [key]: prev[key].includes(value)
            ? prev[key].filter((v) => v !== value)
            : [...prev[key], value],
        };
      }

      return { ...prev, [key]: value };
    });
  };

  return (
    // <div className="w-full md:w-1/4 bg-gray-100 p-4 shadow-lg rounded-lg space-y-6">
      // <div className=" w-full md:w-1/4 bg-size-full bg-gray-200 p-4 shadow-lg rounded-lg space-y-6 justify-center">
      <div className="w-full md:w-1/4 bg-gray-200 bg-cover p-4 shadow-lg rounded-lg space-y-6 flex flex-col ">

      <h2 className="text-xl font-semibold mb-2">Filters</h2>

      {/* Budget Filter */}
      <div>
        <label className="block font-medium mb-1">Min Budget (in Lakhs)</label>
        <input
          type="number"
          className="w-full border rounded p-2 mb-2"
          placeholder="0.00"
          value={filters.minBudget}
          onChange={(e) => onChange("minBudget", e.target.value)}
        />
        <label className="block font-medium mb-1">Max Budget (in Lakhs)</label>
        <input
          type="number"
          className="w-full border rounded p-2"
          placeholder="1000000000000.00"
          value={filters.maxBudget}
          onChange={(e) => onChange("maxBudget", e.target.value)}
        />
      </div>

      {/* Property Type Filter */}
      <div>
        <h3 className="font-medium mb-1">Property Type</h3>
        {propertyTypes.map((type) => (
          <label key={type} className="block text-sm">
            <input
              type="checkbox"
              className="mr-2"
              // placeholder="Residential Apartment"
              checked={Array.isArray(filters.propertyType) && filters.propertyType.includes(type)}
              onChange={() => onChange("propertyType", type)}
            />
            {type}
          </label>
        ))}
      </div>

      {/* BHK Filter */}
      <div>
        <h3 className="font-medium mb-1">Bedrooms (BHK)</h3>
        {bhkOptions.map((bhk) => (
          <label key={bhk} className="block text-sm">
            <input
              type="checkbox"
              className="mr-2"
              checked={Array.isArray(filters.bedrooms) && filters.bedrooms.includes(bhk)}
              onChange={() => onChange("bedrooms", bhk)}
            />
            {bhk}
          </label>
        ))}
      </div>

      {/* Construction Status Filter */}
      <div>
        <h3 className="font-medium mb-1">Construction Status</h3>
        {constructionStatusOptions.map((status) => (
          <label key={status} className="block text-sm">
            <input
              type="checkbox"
              className="mr-2"
              checked={Array.isArray(filters.constructionStatus) && filters.constructionStatus.includes(status)}
              onChange={() => onChange("constructionStatus", status)}
            />
            {status}
          </label>
        ))}
      </div>

      {/* Posted By Filter */}
      <div>
        <h3 className="font-medium mb-1">Posted By</h3>
        {postedByOptions.map((type) => (
          <label key={type} className="block text-sm">
            <input
              type="checkbox"
              className="mr-2"
              checked={Array.isArray(filters.postedBy) && filters.postedBy.includes(type)}
              onChange={() => onChange("postedBy", type)}
            />
            {type}
          </label>
        ))}
      </div>

      {/* Area Filter */}
      <div>
        <label className="block font-medium mb-1">Min Area (sq.ft.)</label>
        <input
          type="number"
          className="w-full border rounded p-2 mb-2"
          placeholder="0 sq.ft"
          value={filters.minArea}
          onChange={(e) => onChange("minArea", e.target.value)}
        />
        <label className="block font-medium mb-1">Max Area (sq.ft.)</label>
        <input
          type="number"
          className="w-full border rounded p-2"
          placeholder="4000+ sq.ft."
          value={filters.maxArea}
          onChange={(e) => onChange("maxArea", e.target.value)}
        />
      </div>

      {/* Localities Filter */}
      <div>
        <h3 className="font-medium mb-1">Localities</h3>

        {/* Search bar for localities */}
        <input
          type="text"
          className="w-full border rounded p-2 mb-2"
          placeholder="Search localities..."
          value={searchQuery}
          onChange={handleSearchChange}
        />

        {displayedLocalities.slice(0, 3).map((locality, index) => (
          <label key={index} className="block text-sm">
            <input
              type="checkbox"
              className="mr-2"
              checked={Array.isArray(filters.localities) && filters.localities.includes(locality.area)}
              onChange={() => onChange("localities", locality.area)}
            />
            {locality.area} <span className="text-yellow-500">★ {locality.rating}</span>
          </label>
        ))}

        {/* More Localities option */}
        {displayedLocalities.length > 3 && (
          <label className="block text-sm mt-2">
            <input
              type="checkbox"
              className="mr-2"
              checked={filters.localities.includes("More Localities")}
              onChange={() => onChange("localities", "More Localities")}
            />
            More Localities
          </label>
        )}
      </div>

      {/* Verified Filter */}
      <div>
        <label className="flex items-center text-sm">
          <input
            type="checkbox"
            className="mr-2"
            checked={filters.verified}
            onChange={(e) => onChange("verified", e.target.checked)}
          />
          Verified Listings Only
        </label>
      </div>

      {/* RERA Approved */}
      <div>
        <label className="flex items-center text-sm">
          <input
            type="checkbox"
            className="mr-2"
            checked={filters.reraApproved}
            onChange={(e) => onChange("reraApproved", e.target.checked)}
          />
          RERA Approved
        </label>
      </div>

      <button
        className="w-full bg-red-600 text-white p-2 rounded mt-4"
        onClick={() => onChange("clear")}
      >
        Clear All
      </button>
    </div>
  );
};

export default FiltersSidebar;
