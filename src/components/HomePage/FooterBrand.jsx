
// import React, { useState } from 'react';




// import { Link } from 'react-router-dom';
// import { Menu } from 'lucide-react';
// import { useState } from 'react';
// import Image2 from "/src/img/Image2.webp"


import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { Menu } from 'lucide-react';
import logo from "/src/img/logonew.webp";


const tabsData = {
  "REAL ESTATE": [
    "Flats in Mumbai", "Flats in Bengaluru", "Flats in Hyderabad",
    "Flats in Pune", "Flats in Chennai", "Flats in Delhi",
    "Flats in Gurgaon", "Flats in Noida", "Flats in Kolkata",
    "Flats in Ahmedabad", "Flats in Thane", "Flats in Navi Mumbai",
    "Flats in Faridabad", "Flats in Ghaziabad", "Flats in Coimbatore"
  ],
  "RENTALS": [
    "Rental Homes in Mumbai", "Rental Apartments in Delhi",
    "Rental Flats in Bangalore", "Rental Properties in Pune",
    "Flats for rent in Mumbai", "Flats for rent in Bengaluru",
    "Flats for rent in Hyderabad", "Flats for rent in Pune",
    "Flats for rent in Chennai", "Flats for rent in Delhi",
    "Flats for rent in Noida", "Flats for rent in Kolkata",
    "Flats for rent in Ahmedabad"
  ],
  "PROJECTS": [
    "Upcoming Projects in Mumbai", "New Projects in Hyderabad",
    "Luxury Projects in Gurgaon", "Affordable Projects in Noida",
      "Upcoming Projects in Mumbai", "New Projects in Hyderabad",
     "Luxury Projects in Gurgaon", "Affordable Projects in Noida"
  ],
  "CITY DATA": [
    "Property Trends in Pune", "Price Index for Bangalore",
    "Top Localities in Hyderabad", "Investment Areas in Delhi",
     "Property Trends in Pune", "Price Index for Bangalore",
     "Top Localities in Hyderabad", "Investment Areas in Delhi"
  ],
  "POPULAR SEARCHES": [
    "Properties in India", "Agricultural Lands in India",
    "Plots in India", "Flats in India",
     "Properties in India", "Agricultural Lands in India",
     "Plots in India", "Flats in India"
  ]
};

const FooterBrand = () => {
  const [activeTab, setActiveTab] = useState("REAL ESTATE");

  return (
    <footer className="bg-gray-900  text-white text-sm px-4 md:px-12 lg:px-20 py-12 ">
      {/* Brand Section */}
      {/* <div className="bg-[#1a1a1a] py-4 text-center">
        <p className="text-gray-400 text-sm">Our Brands</p>
        <div className="flex justify-center items-center mt-2">
          <img src= {Image2} alt="PropTiger" className="h-6" />
        </div>
      </div> */}

      {/* REA Group Section */}
      <div className="bg-white py-6 flex justify-center items-center px-4 md:px-12 lg:px-20 ">
        <p className="text-black text-base md:text-lg font-medium flex items-center gap-2">
          Part of 
          {/* <img src= {Image2} alt="REA Group" className="h-6 md:h-7" /> */}

          <Link to="/" className="flex items-center gap-2 text-lg font-bold hover:scale-105 transition-transform duration-300">
          <img src= {logo} alt="Logo" className="h-6" />
          A.K Infra Dream
        </Link>
        </p>
      </div>

      {/* Tabs Navigation */}
      <div className="px-4 md:px-10 pt-6">
        <div className="flex flex-wrap justify-start md:justify-between items-center border-b border-gray-700 pb-3 mb-6 gap-4 overflow-auto">
          {Object.keys(tabsData).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`text-sm md:text-base px-2 py-1 font-medium whitespace-nowrap ${
                activeTab === tab
                  ? 'text-white border-b-2 border-white'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Dynamic Tab Content */}
      <div className="px-4 md:px-10 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-2 gap-x-6">
          {tabsData[activeTab].map((item, idx) => (
            <p key={idx} className="text-gray-300 hover:text-white cursor-pointer">
              {item}
            </p>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default FooterBrand;