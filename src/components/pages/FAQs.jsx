// import React from "react";

// const FAQs = () => {
//     const faqs = [
//         {
//             question: "What is the process for buying a property?",
//             answer:
//                 "The process involves finding a property, securing financing, making an offer, and completing the necessary paperwork for closing.",
//         },
//         {
//             question: "How can I determine the value of a property?",
//             answer:
//                 "You can determine the value by comparing similar properties in the area, consulting a real estate agent, or getting a professional appraisal.",
//         },
//         {
//             question: "What are the common costs involved in real estate transactions?",
//             answer:
//                 "Common costs include down payment, closing costs, property taxes, insurance, and maintenance expenses.",
//         },
//         {
//             question: "Do I need a real estate agent to buy or sell a property?",
//             answer:
//                 "While not mandatory, a real estate agent can provide valuable expertise, market knowledge, and negotiation skills.",
//         },
//     ];

//     return (
//         <div className="bg-gray-100 py-10 px-5 md:px-20">
//             <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
//                 Frequently Asked Questions
//             </h1>
//             <div className="space-y-6">
//                 {faqs.map((faq, index) => (
//                     <div
//                         key={index}
//                         className="bg-white shadow-md rounded-lg p-5 hover:shadow-lg transition-shadow duration-300"
//                     >
//                         <h2 className="text-xl font-semibold text-gray-800 mb-3">
//                             {faq.question}
//                         </h2>
//                         <p className="text-gray-600">{faq.answer}</p>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default FAQs;

// import React, { useState } from "react";
// import { FaChevronDown, FaChevronUp } from "react-icons/fa";

// const FAQs = () => {
//     const [openIndex, setOpenIndex] = useState(null);

//     const faqs = [
//         {
//             question: "What is the process for buying a property?",
//             answer:
//                 "The process involves finding a property, securing financing, making an offer, and completing the necessary paperwork for closing.",
//         },
//         {
//             question: "How can I determine the value of a property?",
//             answer:
//                 "You can determine the value by comparing similar properties in the area, consulting a real estate agent, or getting a professional appraisal.",
//         },
//         {
//             question: "What are the common costs involved in real estate transactions?",
//             answer:
//                 "Common costs include down payment, closing costs, property taxes, insurance, and maintenance expenses.",
//         },
//         {
//             question: "Do I need a real estate agent to buy or sell a property?",
//             answer:
//                 "While not mandatory, a real estate agent can provide valuable expertise, market knowledge, and negotiation skills.",
//         },
//     ];

//     const toggleFAQ = (index) => {
//         setOpenIndex(index === openIndex ? null : index);
//     };

//     return (
//         <div className="bg-gradient-to-r from-indigo-50 to-purple-50 py-12 px-4 sm:px-8 md:px-16 lg:px-32">
//             <h1 className="text-4xl font-bold text-center text-indigo-700 mb-10">
//                 Frequently Asked Questions
//             </h1>

//             <div className="space-y-4 max-w-4xl mx-auto">
//                 {faqs.map((faq, index) => (
//                     <div
//                         key={index}
//                         className="bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-lg transition duration-300"
//                     >
//                         <button
//                             onClick={() => toggleFAQ(index)}
//                             className="w-full flex justify-between items-center text-left p-5 focus:outline-none"
//                         >
//                             <span className="text-lg font-semibold text-gray-800">
//                                 {faq.question}
//                             </span>
//                             <span className="text-indigo-600">
//                                 {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
//                             </span>
//                         </button>
//                         {openIndex === index && (
//                             <div className="px-5 pb-5 text-gray-600 animate-fade-in">
//                                 {faq.answer}
//                             </div>
//                         )}
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default FAQs;


import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const FAQs = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            question: "What is the process for buying a property?",
            answer:
                "The process involves finding a property, securing financing, making an offer, and completing the necessary paperwork for closing.",
        },
        {
            question: "How can I determine the value of a property?",
            answer:
                "You can determine the value by comparing similar properties in the area, consulting a real estate agent, or getting a professional appraisal.",
        },
        {
            question: "What are the common costs involved in real estate transactions?",
            answer:
                "Common costs include down payment, closing costs, property taxes, insurance, and maintenance expenses.",
        },
        {
            question: "Do I need a real estate agent to buy or sell a property?",
            answer:
                "While not mandatory, a real estate agent can provide valuable expertise, market knowledge, and negotiation skills.",
        },
    ];

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 py-12 px-4 sm:px-8 md:px-16 lg:px-32">
            <h1 className="text-4xl font-bold text-center text-indigo-700 mb-10">
                Frequently Asked Questions
            </h1>

            <div className="space-y-4 max-w-4xl mx-auto">
                {faqs.map((faq, index) => (
                    <div
                        key={index}
                        className="bg-white border border-gray-200 rounded-xl shadow-md transition-all duration-300 hover:shadow-lg"
                    >
                        <button
                            onClick={() => toggleFAQ(index)}
                            className="w-full flex justify-between items-center text-left p-5 focus:outline-none"
                        >
                            <span className="text-lg font-semibold text-gray-800">
                                {faq.question}
                            </span>
                            <span className="text-indigo-600">
                                {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
                            </span>
                        </button>

                        <div
                            className={`overflow-hidden transition-all duration-500 ease-in-out px-5 ${
                                openIndex === index ? "max-h-40 opacity-100 py-2" : "max-h-0 opacity-0 py-0"
                            }`}
                        >
                            <p className="text-gray-600">{faq.answer}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQs;

