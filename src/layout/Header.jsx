import { Link } from 'react-router-dom';
import { mobileMenuData, desktopMenuData, brandName, contactInfo, socialMediaLinks, specialOffer, headerLinks } from '@/data';
import { useState } from 'react';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="p-4 bg-gray-100 md:bg-transparent">
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
          <span>Follow Us :</span>
          {socialMediaLinks.map((social, index) => (
            <a key={index} href={social.link} target="_blank" rel="noopener noreferrer">
              <i className={`fab fa-${social.platform.toLowerCase()}`}></i>
            </a>
          ))}
        </div>
      </div>

      {/* Main navigation for mobile-first */}
      <div className="flex justify-between items-center p-4">
        {/* Brand Name */}
        <Link to="/" className="text-primary text-xl font-bold">
          {brandName}
        </Link>

        {/* Icons for mobile view */}
        <div className="flex items-center space-x-4 md:hidden">
          {headerLinks.map((link, index) => (
            <Link key={index} to={link.link || '#'} className="text-black hover:text-accent">
              <i className={link.iconClass}></i>
            </Link>
          ))}
          <button onClick={() => setMenuOpen(!menuOpen)} className="hover:text-gray-800">
            <i className="fas fa-bars"></i>
          </button>
        </div>

        {/* Menu for desktop view */}
        <nav className="hidden md:flex space-x-8 text-base">
          {desktopMenuData.map((item, index) => (
            item.subMenu ? (
              <div key={index} className="relative group">
                <Link to={item.link} className="text-light font-semibold hover:text-primary">
                  {item.label}
                </Link>
                <div className="absolute hidden group-hover:flex bg-white shadow-lg mt-2">
                  <div className="p-4 flex space-x-8">
                    {item.subMenu.map((category, catIndex) => (
                      <div key={catIndex}>
                        <h3 className="font-bold text-primary">{category.title}</h3>
                        <ul>
                          {category.items.map((subItem, idx) => (
                            <li key={idx}>
                              <Link to={subItem.link} className="hover:text-primary">
                                {subItem.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link 
                key={index} 
                to={item.link} 
                className="text-light font-semibold hover:text-primary"
              >
                {item.label}
              </Link>
            )
          ))}
        </nav>

        {/* Icons for desktop view */}
        <div className="hidden md:flex items-center space-x-4 text-light">
          {headerLinks.map((link, index) => (
            <Link key={index} to={link.link || '#'} className="hover:text-accent">
              <i className={link.iconClass}></i> {link.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="md:hidden mt-4">
          <ul className="flex flex-col space-y-4 text-center text-gray-700">
            {mobileMenuData.map((item, index) => (
              <li key={index}>
                <Link 
                  to={item.link} 
                  className="text-xl font-semibold hover:text-primary" 
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            {/* Mobil menüye Shop seçeneği ekliyoruz */}
            <li>
              <Link 
                to="/shop" 
                className="text-xl font-semibold hover:text-primary" 
                onClick={() => setMenuOpen(false)}
              >
                Shop
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;