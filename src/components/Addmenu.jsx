import { Link } from 'react-router-dom';
import { Menu, Heart, Download, PackageOpen } from 'lucide-react';
import { useState } from 'react';

const Header = () => {
  const [showMenu, setShowMenu] = useState(true);

  return (
    <header className="bg-gradient-to-r from-purple-800 to-purple-900 text-white py-3 px-4 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 text-lg font-bold">
          <img src="https://housing.com/favicon.ico" alt="Logo" className="h-6" />
          HOUSING.COM
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6 text-sm">
          <Link to="/pay-rent" className="bg-white text-purple-700 px-3 py-1 rounded-md font-semibold">
            Pay Rent
          </Link>

          <Link to="/homepage" className="bg-white text-purple-700 px-3 py-1 rounded-md font-semibold">
            HomePage
          </Link>

         

          <Link to="#" className="flex items-center gap-1 hover:text-gray-300">
            <Download size={16} /> Download App
          </Link>
          <Link to="/saved" className="flex items-center gap-1 hover:text-gray-300">
            <Heart size={16} /> Saved
          </Link>
          <Link to="/packages" className="flex items-center gap-1 hover:text-gray-300">
            <PackageOpen size={16} /> Packages ▼
          </Link>

          <Link to="/newsignup" className="bg-white text-purple-700 px-3 py-1 rounded-md font-semibold">
            Login 
          </Link>

          <Link to="/signup" className="bg-pink-600 px-3 py-1 rounded-md text-white font-bold">
            Post Property FREE
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden cursor-pointer" onClick={() => setShowMenu(!showMenu)}>
          <Menu />
        </div>
      </div>

      {/* Mobile Nav Menu */}
      {showMenu && (
        <div className="md:hidden mt-2 px-4 flex flex-col gap-4 text-sm">
          <Link to="/pay-rent" className="bg-white text-purple-700 px-3 py-1 rounded-md font-semibold">
            Pay Rent
          </Link>

          <Link to="/homepage" className="bg-white text-purple-700 px-3 py-1 rounded-md font-semibold">
            HomePage
          </Link>

          <Link to="/packages" className="flex items-center gap-1 hover:text-gray-300">
            <PackageOpen size={16} /> Packages ▼

            </Link>


          <Link to="#" className="flex items-center gap-1 hover:text-gray-300">
            <Download size={16} /> Download App
          </Link>
          <Link to="/saved" className="flex items-center gap-1 hover:text-gray-300">
            <Heart size={16} /> Saved
          </Link>
          <Link to="/packages" className="flex items-center gap-1 hover:text-gray-300">
            <PackageOpen size={16} /> Packages ▼
          </Link> 

          <Link to="/newsignup" className="bg-white text-purple-700 px-3 py-1 rounded-md font-semibold">
            Login 
          </Link>


          <Link to="/signup" className="bg-pink-600 px-3 py-1 rounded-md text-white font-bold">
            Post Property FREE
          </Link>

          

        </div>
      )}
    </header>
  );
};

export default Header;
