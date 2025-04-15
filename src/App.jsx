// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <h1 className="text-3xl font-bold underline">
//         Hello Vite + React!
//       </h1>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

// App.jsx
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import React from 'react';
// import Header from './components/Header';
// import Home from './components/pages/Home';
// import PayRent from './components/pages/PayRent';
// import Saved from './components/pages/Saved';
// import Packages from './components/pages/Packages';
// import SignUp from './components/pages/SignUp';
// function App() {
//   return (
//     <Router>
//       <Header />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/pay-rent" element={<PayRent />} />
//         <Route path="/saved" element={<Saved />} />
//         <Route path="/packages" element={<Packages />} />
//         <Route path="/signup" element={<SignUp />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;

// import React from 'react';
// import { Routes, Route } from 'react-router-dom';
// import Header from './components/Header';
// import Home from './components/pages/Home';
// import PayRent from './components/pages/PayRent';
// import Saved from './components/pages/Saved';
// import Packages from './components/pages/Packages';
// import SignUp from './components/pages/SignUp';

// function App() {
//   return (
//     <>
//       <Header />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/pay-rent" element={<PayRent />} />
//         <Route path="/saved" element={<Saved />} />
//         <Route path="/packages" element={<Packages />} />
//         <Route path="/signup" element={<SignUp />} />
//       </Routes>
//     </>
//   );
// }

// export default App;


// import React from 'react';
// import { Routes, Route } from 'react-router-dom';
// import Header from './components/Header';
// import Home from './components/pages/Home';
// import PayRent from './components/pages/PayRent';
// import Saved from './components/pages/Saved';
// import Packages from './components/pages/Packages';
// import SignUp from './components/pages/SignUp';

// import HomePage from './components/HomePage/HomePage.jsx';
// import SignInPage from './components/SignInPage/SignInPage.jsx';


// import About from './components/pages/About';
// // import Contact from './components/pages/Contact';
// // import Faqs from './components/pages/Faqs';


// function App() {
//   return (
//     <>
//       <Header />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/pay-rent" element={<PayRent />} />
//         <Route path="/homepage" element={<HomePage />} />
//         <Route path="/saved" element={<Saved />} />
//         <Route path="/packages" element={<Packages />} />
//         <Route path="/signup" element={<SignUp />} />
//         <Route path="/newsignup" element={<SignInPage />} />


//         <Route path="/about" element={<About />} />
//         {/* <Route path="/contact" element={<Contact />} />
//         <Route path="/faqs" element={<Faqs />} /> */}

//       </Routes>
//     </>
//   );
// }

// export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/pages/Home';
import PayRent from './components/pages/PayRent';
import Saved from './components/pages/Saved';
import Packages from './components/pages/Packages';
import SignUp from './components/pages/SignUp';

import HomePage from './components/HomePage/HomePage.jsx';
import SignInPage from './components/SignInPage/SignInPage.jsx';


import About from './components/pages/About';
import Contact from './components/pages/Contact';
import FAQs from './components/pages/FAQs';


import CityPage from './components/HomePage/CityPage.jsx';
import DownloadApp from './components/pages/DownloadApp.jsx';
import Testimonials from './components/pages/Testimonials.jsx';
import Career from './components/pages/Career.jsx';
import Blog from './components/pages/Blog.jsx';
import TermsConditions from './components/pages/TermsConditions.jsx';
import PrivacyPolicy from './components/pages/PrivacyPolicy .jsx';
import Categories from './components/pages/Categories.jsx';

import CustomerSignIn from './components/SignInPage/CustomerSignIn.jsx';
import AssociateSignIn from './components/SignInPage/AssociateSignInPage.jsx';

// import PrivacyPolicy from './components/pages/PrivacyPolicy.jsx';

import LandingPage from './components/HomePage/LandingPage.jsx';

// import CategoriesList from './components/HomePage/CategoriesTop/CategoriesList.jsx';


import TopSelling from "./components/HomePage/CategoriesTop/TopSelling";
import TopRent from "./components/HomePage/CategoriesTop/TopRent";
import TopValues from "./components/HomePage/CategoriesTop/TopValues";
import TopLocations from "./components/HomePage/CategoriesTop/TopLocations";


import ListYourProperty from './components/HomePage/ListYourProperty.jsx';


import SearchResults from "./components/HomePage/SearchResults.jsx";


import PropertyCard from './components/HomePage/PropertyCard.jsx';

// import FiltersSidebar from './components/FiltersSidebar';

function App() {
  return (

    <>
    
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pay-rent" element={<PayRent />} />
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/saved" element={<Saved />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/signup" element={<SignInPage />} />
        <Route path="/newsignup" element={<About />} />

        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/FAQs" element={<FAQs />} />
        <Route path="/city/:cityName" element={<CityPage />} />

        <Route path="/DownloadApp" element={<DownloadApp />} />
        <Route path="/Testimonials" element={<Testimonials />} />
        <Route path="/Career" element={<Career />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/TermsConditions" element={<TermsConditions />} />
        <Route path="/policy" element={<PrivacyPolicy />} />
        <Route path="/categories" element={<Categories />} />

        <Route path="/customersignin" element={<CustomerSignIn />} />
        <Route path="/associatesignin" element={<AssociateSignIn />} />

        {/* <Route path="/CategoriesList" element={<CategoriesList />} /> */}


        <Route path="/top-selling" element={<TopSelling />} />
                <Route path="/top-rent" element={<TopRent />} />
                <Route path="/top-values" element={<TopValues />} />
                <Route path="/top-locations" element={<TopLocations />} />

        <Route path="/list-your-property" element={<ListYourProperty />} />


        <Route path="/property/:id" element={<PropertyCard />} />

       




       

        {/* <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} /> */}

        {/* Add the new route for property search */}

        <Route path="/city/:cityName/property" element={<LandingPage />} />

        <Route path="/search-results" element={<SearchResults />} />

      </Routes>
    </>
  );
}

export default App;

