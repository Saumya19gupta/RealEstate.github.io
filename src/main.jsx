import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import HomePage from './components/HomePage/HomePage.jsx'
import Footer from './components/Footer.jsx'
import Header from './components/Header.jsx'
import { BrowserRouter } from "react-router-dom";

import TopCategories from './components/TopCategories/TopCategories.jsx';

import SignInPage from './components/SignInPage/SignInPage.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <BrowserRouter>
      {/* <Header />
    {/* <App /> */}
    {/* <HomePage /> */}
    {/* <Header /> */}
    <App />
   <Footer /> 

   {/* <TopCategories /> */}

   {/* <SignInPage /> */}


   </BrowserRouter>

  </StrictMode>,
)
