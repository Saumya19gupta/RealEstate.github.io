


// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { FaSearch } from "react-icons/fa";
// import { Link } from "react-router-dom";
// // import TopSelling from "./components/HomePage/CategoriesTop/TopSelling";

// import TopSelling from "./CategoriesTop/TopSelling";


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

// const saleTypes = ["New", "Resale"];
// const possessionStatuses = ["Ready To Move", "Under Construction"];
// const postedBy = ["Owners", "Agents", "Builders"];
// const ownershipOptions = [
//   "Freehold",
//   "Leasehold",
//   "Power Of Attorney",
//   "Co-operative Society",
// ];
// const furnishingOptions = ["Furnished", "Semi-Furnished", "Unfurnished"];

// export default function PropertyFilters() {
//   const [filters, setFilters] = useState({
//     selectedTypes: [],
//     saleType: null,
//     possession: null,
//     postedSince: "All",
//     postedBy: null,
//     ownership: null,
//     furnishing: null,
//     searchInput: "",
//   });

//   const toggleArrayValue = (key, value) => {
//     setFilters((prev) => ({
//       ...prev,
//       [key]: prev[key].includes(value)
//         ? prev[key].filter((v) => v !== value)
//         : [...prev[key], value],
//     }));
//   };

//   const setSingleValue = (key, value) => {
//     setFilters((prev) => ({ ...prev, [key]: value }));
//   };

//   const handleFilter = () => {
//     console.log("Applied Filters:", filters);
//     alert("Applied Filters:\n" + JSON.stringify(filters, null, 2));
//   };

//   const clearFilters = () => {
//     setFilters({
//       selectedTypes: [],
//       saleType: null,
//       possession: null,
//       postedSince: "All",
//       postedBy: null,
//       ownership: null,
//       furnishing: null,
//       searchInput: "",
//     });
//   };

//   const renderOptions = (title, options, key) => (
//     <div className="mb-6">
//       <p className="font-medium text-gray-700 mb-2">{title}</p>
//       <div className="flex flex-wrap gap-2">
//         {options.map((option) => (
//           <motion.button
//             key={option}
//             onClick={() => setSingleValue(key, option)}
//             className={`px-3 py-1 text-sm rounded-full border transition-all duration-300 ${
//               filters[key] === option
//                 ? "bg-blue-100 text-blue-700 border-blue-300"
//                 : "bg-gray-100 text-gray-700 border-gray-300"
//             }`}
//             whileTap={{ scale: 0.95 }}
//           >
//             {option}
//           </motion.button>
//         ))}
//       </div>
//     </div>
//   );

//   return (
//     <div className="p-4 md:p-8 bg-white rounded-lg shadow-xl w-full max-w-5xl mx-auto mt-6">
//       {/* Search Bar */}
//       <motion.div
//         className="flex flex-col md:flex-row gap-3 items-center mb-8"
//         initial={{ opacity: 0, y: -10 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//       >
//         <input
//           type="text"
//           value={filters.searchInput}
//           onChange={(e) =>
//             setFilters((prev) => ({ ...prev, searchInput: e.target.value }))
//           }
//           placeholder="Search by locality, project, landmark..."
//           className="w-full md:w-3/4 px-4 py-2 border border-gray-300 rounded-md text-gray-800 focus:ring-2 focus:ring-blue-300"
//         />
//         <button
//           onClick={handleFilter}
//           className="w-full md:w-auto flex items-center justify-center gap-2 bg-blue-500 text-white px-5 py-2 rounded-md hover:bg-blue-600 transition"
//         >
//           <FaSearch /> Search
//         </button>
//       </motion.div>

//       {/* Filter Title */}
//       <motion.h2
//         className="text-xl md:text-2xl font-bold text-gray-800 mb-6"
//         initial={{ opacity: 0, y: -10 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//       >
//         Filter Properties
//       </motion.h2>

//       {/* Optional: Active Filters Summary */}
//       {/* <div className="mb-4 flex flex-wrap gap-2">
//         {Object.entries(filters)
//           .filter(([key, val]) =>
//             Array.isArray(val) ? val.length > 0 : val && val !== "All"
//           )
//           .map(([key, val]) => (
//             <span
//               key={key}
//               className="inline-block bg-blue-50 text-blue-700 text-xs px-3 py-1 rounded-full"
//             >
//               {key}: {Array.isArray(val) ? val.join(", ") : val}
//             </span>
//           ))}
//       </div> */}

//       {/* Filter Sections */}
//       {renderOptions("Possession Status", possessionStatuses, "possession")}

//       {/* Sub Property Type */}
//       <div className="mb-6">
//         <p className="font-medium text-gray-700 mb-2">Sub Property Type</p>
//         <div className="flex flex-wrap gap-2">
//           {propertyTypes.map((type) => (
//             <motion.button
//               key={type}
//               onClick={() => toggleArrayValue("selectedTypes", type)}
//               className={`px-3 py-1 text-sm rounded-full border transition-all duration-300 ${
//                 filters.selectedTypes.includes(type)
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

//       {renderOptions("Sale Type", saleTypes, "saleType")}
//       {renderOptions("Posted Since", postedSinceOptions, "postedSince")}
//       {renderOptions("Posted By", postedBy, "postedBy")}
//       {renderOptions("Ownership", ownershipOptions, "ownership")}
//       {renderOptions("Furnishing", furnishingOptions, "furnishing")}

//       {/* Footer Buttons */}
//       <div className="flex justify-between items-center mt-8">
//         <button
//           onClick={clearFilters}
//           className="text-sm px-4 py-2 border border-gray-400 text-gray-700 rounded-md transition duration-300 hover:bg-gray-100"
//         >
//           Clear All
//         </button>
//         <button
//           onClick={handleFilter}
//           className="bg-red-500 text-white px-6 py-2 rounded-md transition duration-300 hover:bg-red-600"
//         >
//           View Filtered Properties
//         </button>
//       </div>

//       {/* About Us Link */}
//       <div className="flex justify-end mt-6">
//         <Link
//           to="/list-your-property"
//           className="text-purple-700 px-4 py-2 rounded-md font-semibold hover:bg-purple-100 transition duration-300 border border-purple-200"
//         >
//           Post Your Property
//         </Link>
//       </div>

//       {/* Top Selling Properties Section */}
//       <div className="mt-10">
//         <TopSelling />
//       </div>
//     </div>
//   );
// }


// src/components/HomePage/SearchResults.jsx
// import React, { useState } from "react";
// import FiltersSidebar from "./FiltersSidebar";
// import TopSellingProperties from "./TopSellingProperties";

// const dummyData = [
//   { title: "Luxury Apartment in Kalyanpur", price: 85, location: "Kalyanpur", bhk: "3 BHK", type: "Apartment" },
//   { title: "3BHK Villa in Kidwai Nagar", price: 150, location: "Kidwai Nagar", bhk: "3 BHK", type: "Villa" },
//   { title: "1BHK Builder Floor", price: 25, location: "Panki", bhk: "1 BHK", type: "Builder Floor" },
//   { title: "Residential Plot in Swaroop Nagar", price: 60, location: "Swaroop Nagar", bhk: "N/A", type: "Plot" }
// ];

// const SearchResults = () => {
//   const [filters, setFilters] = useState({
//     minBudget: "",
//     maxBudget: "",
//     propertyType: [],
//     bedrooms: []
//   });

//   const handleFilterChange = (key, value) => {
//     setFilters((prev) => {
//       if (key === "propertyType" || key === "bedrooms") {
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

//   const filteredData = dummyData.filter((item) => {
//     const minMatch = !filters.minBudget || item.price >= Number(filters.minBudget);
//     const maxMatch = !filters.maxBudget || item.price <= Number(filters.maxBudget);
//     const typeMatch = !filters.propertyType.length || filters.propertyType.includes(item.type);
//     const bhkMatch = !filters.bedrooms.length || filters.bedrooms.includes(item.bhk);
//     return minMatch && maxMatch && typeMatch && bhkMatch;
//   });

//   return (
//     <div className="flex flex-col md:flex-row gap-4 p-4">
//       <FiltersSidebar filters={filters} onChange={handleFilterChange} />
//       <TopSellingProperties properties={filteredData} />
//     </div>
//   );
// };

// export default SearchResults;


// src/components/HomePage/FilterPage.jsx




// src/components/HomePage/FilterPage.jsx
// import React, { useState } from "react";
// import FiltersSidebar from "./FiltersSidebar";
// // import FiltersSidebar from "src/components/HomePage/FiltersSidebar";
// import TopSellingProperties from "./TopSellingProperties";

// // Sample data for properties
// const dummyData = [
//   { title: "Luxury Apartment", price: 85, location: "Kalyanpur", type: "Residential Apartment", bedrooms: "3 BHK" },
//   { title: "3BHK Villa", price: 150, location: "Kidwai Nagar", type: "Independent House/Villa", bedrooms: "3 BHK" },
//   { title: "1BHK Builder Floor", price: 25, location: "Panki", type: "Independent/Builder Floor", bedrooms: "1 BHK" },
//   { title: "Residential Plot", price: 60, location: "Swaroop Nagar", type: "Residential Land", bedrooms: "N/A" }


//   // { title: "Luxury1 Apartment", price: 95, location: "Kalyanpur", type: "Residential Apartment", bedrooms: "3 BHK" },
//   // { title: "3BHK Villa", price: 150, location: "Kidwai Nagar", type: "Independent House/Villa", bedrooms: "3 BHK" },
//   // { title: "1BHK Builder Floor", price: 25, location: "Panki", type: "Independent/Builder Floor", bedrooms: "1 BHK" },
//   // { title: "Residential Plot", price: 60, location: "Swaroop Nagar", type: "Residential Land", bedrooms: "N/A" }


//   // { title: "Luxury Apartment", price: 85, location: "Kalyanpur", type: "Residential Apartment", bedrooms: "3 BHK" },
//   // { title: "3BHK Villa", price: 150, location: "Kidwai Nagar", type: "Independent House/Villa", bedrooms: "3 BHK" },
//   // { title: "1BHK Builder Floor", price: 25, location: "Panki", type: "Independent/Builder Floor", bedrooms: "1 BHK" },
//   // { title: "Residential Plot", price: 60, location: "Swaroop Nagar", type: "Residential Land", bedrooms: "N/A" }
// ];


// const FilterPage = () => {
//   const [filters, setFilters] = useState({
//     hideSeen: false,
//     verified: false,
//     minBudget: "",
//     maxBudget: "",
//     propertyType: [],
//     bedrooms: [],
//     constructionStatus: [],
//     postedBy: [],
//     minArea: "",
//     maxArea: "",
//     localities: [],
//     amenities: [],
//     furnishingStatus: [],
//     reraApproved: false
//   });

//   const handleFilterChange = (key, value) => {
//     setFilters((prev) => {
//       if (key === "clear") return {};
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

//   const filteredData = dummyData.filter((item) => {
//     const minMatch = !filters.minBudget || item.price >= Number(filters.minBudget);
//     const maxMatch = !filters.maxBudget || item.price <= Number(filters.maxBudget);
//     const typeMatch = !filters.propertyType.length || filters.propertyType.includes(item.type);
//     const bhkMatch = !filters.bedrooms.length || filters.bedrooms.includes(item.bhk);
//     return minMatch && maxMatch && typeMatch && bhkMatch;
//   });

//   return (
//     <div className="flex flex-col md:flex-row gap-4 p-4">
//       <FiltersSidebar filters={filters} onChange={handleFilterChange} />
//       <TopSellingProperties properties={filteredData} />
//     </div>
//   );
// };

// export default FilterPage;


// import React, { useState } from "react";
// import FiltersSidebar from "./FiltersSidebar";
// import TopSellingProperties from "./TopSellingProperties";

// // Sample data for properties
// const dummyData = [
//   { title: "Luxury Apartment", price: 85, location: "Kalyanpur", type: "Residential Apartment", bedrooms: "3 BHK" },
//   { title: "3BHK Villa", price: 150, location: "Kidwai Nagar", type: "Independent House/Villa", bedrooms: "3 BHK" },
//   { title: "1BHK Builder Floor", price: 25, location: "Panki", type: "Independent/Builder Floor", bedrooms: "1 BHK" },
//   { title: "Residential Plot", price: 60, location: "Swaroop Nagar", type: "Residential Land", bedrooms: "N/A" }
// ];

// const FilterPage = () => {
//   const [filters, setFilters] = useState({
//     hideSeen: false,
//     verified: false,
//     minBudget: "",
//     maxBudget: "",
//     propertyType: [],
//     bedrooms: [],
//     constructionStatus: [],
//     postedBy: [],
//     minArea: "",
//     maxArea: "",
//     localities: [],
//     amenities: [],
//     furnishingStatus: [],
//     reraApproved: false
//   });

//   const handleFilterChange = (key, value) => {
//     setFilters((prev) => {
//       if (key === "clear") return {};
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

//   const filteredData = dummyData.filter((item) => {
//     const minMatch = !filters.minBudget || item.price >= Number(filters.minBudget);
//     const maxMatch = !filters.maxBudget || item.price <= Number(filters.maxBudget);
//     const typeMatch = !filters.propertyType.length || filters.propertyType.includes(item.type);
//     const bhkMatch = !filters.bedrooms.length || filters.bedrooms.includes(item.bedrooms);
//     return minMatch && maxMatch && typeMatch && bhkMatch;
//   });

//   return (
//     <div className="flex flex-col md:flex-row gap-4 p-4">

// <FiltersSidebar filters={filters} onChange={handleFilterChange} />


//       {/* <FiltersSidebar filters={filters} onChange={handleFilterChange} /> */}
//       <TopSellingProperties properties={filteredData} />
//     </div>
//   );
// };

// export default FilterPage;


import React, { useState } from "react";
import FiltersSidebar from "./FiltersSidebar";
import TopSellingProperties from "./TopSellingProperties";
// import { motion } from "framer-motion";
// import { FaPhoneAlt } from "react-icons/fa";

// import imgroo1 from "./src/compoenents/img/imgroo1.jpg";

// import imgroo1 from "./components/img/imgroo1.jpg";

// import imgroo1 from "../img/imgroo1.jpg";

// import imgroo1 from "../img/imgroo1.jpg";


import imgroo1 from "/src/img/imgroo1.jpg";


import TopValues from "./CategoriesTop/TopValues";
// improt { Link } from "react-router-dom";






const dummyData = [
  {  title: "Luxury Apartment1", price: 85, location: "Kalyanpur", type: "Residential Apartment", bedrooms: "3 BHK", image: imgroo1, },

  { 
    
    title: "Luxury Apartment2",
    price: 85,
    location: "Kalyanpur",
    type: "Residential Apartment",
    bedrooms: "3 BHK",
    area: 1500,
    postedBy: "Owner",
    // image: "https://source.unsplash.com/400x300/?luxury,apartment",
    image: imgroo1
  },

  

  // {
  //   title: "Luxury Apartment",
  //   price: 85,
  //   location: "Kalyanpur",
  //   type: "Residential Apartment",
  //   bedrooms: "3 BHK",
  //   area: 1500,
  //   postedBy: "Owner",
  //   image: imgroo1,
  // },

  {
    
    title: "Luxury Apartment3",
    price: 85,
    location: "Kalyanpur",
    type: "Residential Apartment",
    bedrooms: "3 BHK",
    image: imgroo1,
  },
  {
    
    title: "3BHK Villa",
    price: 150,
    location: "Kidwai Nagar",
    type: "Independent House/Villa",
    bedrooms: "3 BHK",
    image: imgroo1,
  },


  {
    
    type: "Flat",
    title: "2 BHK Flat for Rent in Gomti Nagar, Lucknow",
    owner: "Amit Srivastava",
    phone: "8856543210",
    address: "Gomti Nagar, Lucknow, UP",
    area: "1150 sqft",
    status: "Available",
    possession: "Immediate",
    floor: "2nd out of 5",
    price: "₹18,000/mo",
    pricePerSqft: "15",
    // img: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80",
    image: imgroo1,
    updated: "Updated today"
  },






  {  title: "3BHK Villa 4", price: 150, location: "Kidwai Nagar", type: "Independent House/Villa", bedrooms: "3 BHK " , image: imgroo1, },
  {  title: "1BHK Builder Floor 5", price: 25, location: "Panki", type: "Independent/Builder Floor", bedrooms: "1 BHK" , image: imgroo1, },
  {  title: "Residential Plot 6", price: 60, location: "Swaroop Nagar", type: "Residential Land", bedrooms: "N/A", image: imgroo1, }
];

const FilterPage = () => {
  const [filters, setFilters] = useState({
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
    reraApproved: false
  });

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
        reraApproved: false
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

  const filteredData = dummyData.filter((item) => {
    const minMatch = !filters.minBudget || item.price >= Number(filters.minBudget);
    const maxMatch = !filters.maxBudget || item.price <= Number(filters.maxBudget);
    const typeMatch = !filters.propertyType.length || filters.propertyType.includes(item.type);
    const bhkMatch = !filters.bedrooms.length || filters.bedrooms.includes(item.bhk);
    return minMatch && maxMatch && typeMatch && bhkMatch;
  });

  return (
    <div className="flex flex-col md:flex-row gap-4 p-4">
      <FiltersSidebar filters={filters} onChange={handleFilterChange} />
      {/* <TopSellingProperties properties={filteredData} /> */}


      <TopSellingProperties
  properties={filteredData.map((item, index) => ({ ...item, key: `${item.title}-${item.location}-${index}` }))}
/>







      {/* <TopValues  /> */}





    </div>
  );
};

export default FilterPage;



// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import FiltersSidebar from "./FiltersSidebar";
// import imgroo1 from "/src/img/imgroo1.jpg";
// import PropertyCard from "./PropertyCard";

// // Dummy data as-is...
// const dummyData = [/* your full data */];

// const FilterPage = () => {
//   const navigate = useNavigate();

//   const [filters, setFilters] = useState({
//     hideSeen: false,
//     verified: false,
//     minBudget: "",
//     maxBudget: "",
//     propertyType: [],
//     bedrooms: [],
//     constructionStatus: [],
//     postedBy: [],
//     minArea: "",
//     maxArea: "",
//     localities: [],
//     amenities: [],
//     furnishingStatus: [],
//     reraApproved: false,
//   });

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

//   const filteredData = dummyData.filter((item) => {
//     const minMatch = !filters.minBudget || item.price >= Number(filters.minBudget);
//     const maxMatch = !filters.maxBudget || item.price <= Number(filters.maxBudget);
//     const typeMatch = !filters.propertyType.length || filters.propertyType.includes(item.type);
//     const bhkMatch = !filters.bedrooms.length || filters.bedrooms.includes(item.bedrooms);
//     return minMatch && maxMatch && typeMatch && bhkMatch;
//   });

//   return (
//     <div className="flex flex-col md:flex-row gap-4 p-4">
//       <FiltersSidebar filters={filters} onChange={handleFilterChange} />

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 flex-1">
//         {filteredData.map((property, index) => (
//           <div
//             key={index}
//             className="border rounded shadow-md p-4 hover:shadow-lg transition cursor-pointer"
//             onClick={() => navigate(`/property/${index}`, { state: { property } })}
//           >
//             <img src={property.image} alt={property.title} className="w-full h-40 object-cover rounded" />
//             <h2 className="font-semibold text-lg mt-2">{property.title}</h2>
//             <p className="text-sm">{property.location}</p>
//             <p className="text-sm">₹{property.price} Lakh</p>
//           </div>
//         ))}
//       </div>

   
//     <div className="flex flex-col md:flex-row gap-4 p-4">
      
//        < PropertyCard properties={filteredData} />
//       {/* <TopValues  /> */}





//      </div>
 
//     </div>
//   );
// };

// export default FilterPage;
