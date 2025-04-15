import React from "react";
import { FaHome } from "react-icons/fa";
import Vila from "/src/img/Vila.jpg"


const properties = [
    {
        id: 1,
        name: "Luxury Villa",
        location: "Los Angeles, CA",
        price: "$2,500,000",
        image: Vila,
        // <img
        //             src= {Image1}
        //             alt="Couple Looking Out the Window"
        //             className="rounded-lg shadow-lg w-full max-w-md"
        //           />
        
    },
    {
        id: 2,
        name: "Modern Apartment",
        location: "New York, NY",
        price: "$1,200,000",
        image: "https://via.placeholder.com/300x200",
    },
    {
        id: 3,
        name: "Beach House",
        location: "Miami, FL",
        price: "$3,800,000",
        image: "https://via.placeholder.com/300x200",
    },
];

const TopSellingProperties = () => {
    return (
        <div className="top-selling-properties">
            <h1 className="title font-bold text-lg">Top Selling Properties</h1>
            <div className="properties-grid">
                {properties.map((property) => (
                    <div className="property-card " key={property.id}>
                        <img
                            src={property.image}
                           
                            alt={property.name}
                            className="property-image justify-center flex w-120 h-80 object-cover rounded-lg shadow-lg"
                             
                        />
                        <div className="property-details">
                            <h2 className="property-name font-bold text-lg ">{property.name}</h2>
                            <p className="property-location font-semibold">{property.location}</p>
                            <p className="property-price font-bold text-indigo-700 ">{property.price}</p>
                            {/* <button className="property-button bg-indigo-700 text-white px-4 py-2 rounded hover:bg-indigo-800 mt-2 flex items-center gap-1">
                                <FaHome /> View Details
                            </button> */}
                            
                            <button className="mt-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-all duration-300">
                                View Details
                                </button>
     
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TopSellingProperties;