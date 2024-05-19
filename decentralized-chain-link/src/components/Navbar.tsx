'use client'
import Link from 'next/link';
import React, { useState } from 'react';

interface LinkSections {
  [key: string]: string[];
}

const Navbar: React.FC = () => {
  const [hoveredLink, setHoveredLink] = useState<string>('');

  const linkSections: LinkSections = {
    Ecosystem: ['DCLscan Explorer', 'Exchange', 'Wallet'],
    Community: ['Documentation', 'Github', 'Developers Chat', 'Blog'],
    Explore: ['About', 'Blog', 'Contact'],
    More: [''],
  };

  const handleMouseEnter = (link: string) => {
    setHoveredLink(link);
  };

  const handleMouseLeave = () => {
    setHoveredLink('');
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-10 bg-white mt-0 pt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center h-16 relative">
            <div className="flex space-x-4">
              <div className="relative">
                <Link 
                  href="/" 
                  className="text-zinc-950 hover:text-blue-500 px-3 py-2 text-m"
                >
                  Home
                </Link>
              </div>
              {Object.keys(linkSections).map((link) => (
                <div key={link} className="relative">
                  <Link 
                    href={`/${link.toLowerCase().replace(/\s+/g, '-')}`} 
                    className="text-zinc-950 hover:text-blue-500 px-3 py-2 text-m"
                    onMouseEnter={() => handleMouseEnter(link)}
                    onMouseLeave={handleMouseLeave}
                  >
                    {link.charAt(0).toUpperCase() + link.slice(1)}
                  </Link>
                  {hoveredLink === link && (
                    <div
                      className="absolute left-1/2 transform -translate-x-1/2 mt-2 bg-white border border-zinc-300 rounded shadow-lg w-auto p-4"
                      onMouseEnter={() => handleMouseEnter(link)}
                      onMouseLeave={handleMouseLeave}
                    >
                      <div className="flex flex-col space-y-2"> 
                        {linkSections[link].map((subLink, index) => (
                          <Link 
                            key={index}
                            href={`/${subLink.toLowerCase().replace(/\s+/g, '-')}`}
                            className="text-gray-700 hover:text-blue-500 overflow-hidden whitespace-nowrap text-overflow-ellipsis px-2 py-1"
                            style={{ maxWidth: '150px' }} 
                          >
                            {subLink}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </nav>
      <div className="mt-16">
        {/* Other content goes here */}
      </div>
    </>
  );
};

export default Navbar;
