import React from 'react'
import Home from './Home';
import Research from './Research';
import Sell from './Sell';
import Services from './Services';
import Signup from './SignUp';
import FooterBrand from './FooterBrand';
import TopCategories from './TopCategories';
import RecommendedProperties from './RecommendedProperties';
import TopRentListings from './TopRentListings';
import TopVillas from './TopVillas';
import TopLocations from './TopLocations';
import SearchResults from './SearchResults';
// import SlidingPage from './HomePage/Categories/SlidingPage';


// import SlidePage from './src/components/HomePage/SlidePage.jsx';

// import SlidePage from "./SlidePage.jsx";

import SlidePage from "./SlidePage";




const HomePage = () => {
    return (
      <div className=''>
        <Home />
        <TopCategories />

        {/* <SlidePage /> */}

        

        

        <RecommendedProperties />

        <TopRentListings />

        <TopVillas />

        

        <TopLocations />


        <SlidePage />

        {/* <SearchResults /> */}

       


        {/* <Services />
    <Research />
    <Signup /> */}
    <Sell />

    {/* <SlidePage /> */}


    {/* <SlidingPage /> */}
   
    <FooterBrand />


</div>
  )
}

export default HomePage;