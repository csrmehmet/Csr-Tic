import { menuData, brandName, contactInfo, socialMediaLinks, specialOffer } from '@/data';
import { useState } from 'react';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="p-4">
      {/* Top bar for desktop view */}
      <div className="hidden md:flex bg-primary text-white py-2 px-4 justify-between items-center">
        <div className="flex items-center space-x-4">
          <span className="flex items-center space-x-2">
            <i className="fas fa-phone-alt"></i>
            <span>{contactInfo.phone}</span>
          </span>
          <span className="flex items-center space-x-2">
            <i className="fas fa-envelope"></i>
            <span>{contactInfo.email}</span>
          </span>
        </div>
        <div>{specialOffer}</div>
        <div className="flex items-center space-x-4">
          <span>{socialMediaLinks[0].label}</span>
          {socialMediaLinks.slice(1).map((social, index) => (
            <a key={index} href={social.link} target="_blank" rel="noopener noreferrer">
              <i className={`fab fa-${social.platform.toLowerCase()}`}></i>
            </a>
          ))}
        </div>
      </div>

      {/* Main navigation */}
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Brand Name */}
        <a href="/" className="text-primary text-xl font-bold">
          {brandName}
        </a>

        {/* Icons for mobile view */}
        <div className="flex items-center space-x-4 md:hidden">
          <a href="#" className="hover:text-gray-800">
            <i className="fas fa-user"></i>
          </a>
          <a href="#" className="hover:text-gray-800">
            <i className="fas fa-search"></i>
          </a>
          <a href="#" className="hover:text-gray-800">
            <i className="fas fa-shopping-cart"></i>
          </a>
          <button onClick={() => setMenuOpen(!menuOpen)} className="hover:text-gray-800">
            <i className="fas fa-bars"></i>
          </button>
        </div>

        {/* Menu for desktop view */}
        <nav className="hidden md:flex space-x-8 text-base">
          {menuData.map((item, index) => (
            <a key={index} href={item.link} className="text-light font-semibold hover:text-primary">
              {item.label}
            </a>
          ))}
        </nav>

        {/* Icons for desktop view */}
        <div className="hidden md:flex items-center space-x-4 text-light">
          <a href="#" className="hover:text-accent">
            <i className="fas fa-user"></i> Login / Register
          </a>
          <a href="#" className="hover:text-gray-800">
            <i className="fas fa-search"></i>
          </a>
          <a href="#" className="hover:text-accent">
            <i className="fas fa-shopping-cart"></i>
          </a>
          <a href="#" className="hover:text-accent">
            <i className="fas fa-heart"></i>
          </a>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="md:hidden mt-4">
          <ul className="flex flex-col space-y-4">
            {menuData.map((item, index) => (
              <li key={index}>
                <a href={item.link} className="text-gray-800 hover:text-primary text-center">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;