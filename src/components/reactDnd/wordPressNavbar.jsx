import React, { useState } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';
import { getStoreData } from '@/datasStore/useContextStore';

const WordPressNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { setPreview, preview } = getStoreData();
  const navData = {
    logo: "/logo.png", // Replace with the path to your logo
    links: [
      { label: "Home", url: "/" },
      { label: "About", url: "/about" },
      { label: "Services", url: "/services", dropdown: ["Web Development", "App Development", "SEO"] },
      { label: "Portfolio", url: "/portfolio" },
      { label: "Contact", url: "/contact" },
    ],
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 w-full z-10">
      <div className="container mx-auto flex justify-between items-center p-4">
        <Link href="/">
         <span>WordPress Clone</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          {navData.links.map((link, index) => (
            <div key={index} className="relative group">
              <span className='cursor-pointer'>
                <span className="text-gray-700 hover:text-blue-500">{link.label}</span>
              </span>
              {link.dropdown && (
                <div
                  className="absolute hidden group-hover:flex flex-col bg-white shadow-lg rounded-lg p-2 mt-2"
                  onMouseEnter={() => setIsDropdownOpen(true)}
                  onMouseLeave={() => setIsDropdownOpen(false)}
                >
                  {link.dropdown.map((item, idx) => (
                    <span key={idx}>
                      <span className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-md">{item}</span>
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
                            <button onClick={()=>setPreview(!preview)}>View</button>

        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md">
          {navData.links.map((link, index) => (
            <div key={index} className="border-b border-gray-200">
              <Link href={link.url}>
                <span className="block px-4 py-2 text-gray-700">{link.label}</span>
              </Link>
              {link.dropdown && (
                <div className="pl-6">
                  {link.dropdown.map((item, idx) => (
                    <span key={idx}>
                      <span className="block px-4 py-2 text-gray-600">{item}</span>
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </nav>
  );
};

export default WordPressNavbar;
