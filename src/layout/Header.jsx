import { mobileMenuData, desktopMenuData, brandName, contactInfo, socialMediaLinks, specialOffer, headerLinks } from '@/data';
import { useState } from 'react';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false); // Varsayılan olarak menü kapalı

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
        <a href="/" className="text-primary text-xl font-bold">
          {brandName}
        </a>

        {/* Icons for mobile view */}
        <div className="flex items-center space-x-4 md:hidden">
          {/* Mobil görünüm için ikonları ekliyoruz */}
          {headerLinks.map((link, index) => (
            <a key={index} href={link.link} className="text-black hover:text-accent">
              <i className={link.iconClass}></i>
            </a>
          ))}
          {/* Menü açma/kapama butonu en sona ekleniyor */}
          <button onClick={() => setMenuOpen(!menuOpen)} className="hover:text-gray-800">
            <i className="fas fa-bars"></i>
          </button>
        </div>

        {/* Menu for desktop view */}
        <nav className="hidden md:flex space-x-8 text-base">
          {desktopMenuData.map((item, index) => (
            <a key={index} href={item.link} className="text-light font-semibold hover:text-primary">
              {item.label}
            </a>
          ))}

          {/* Shop dropdown */}
          <div className="relative group">
            <button className="text-light font-semibold hover:text-primary">Shop</button>
            <div className="absolute hidden group-hover:flex bg-white shadow-lg mt-2">
              <div className="p-4 flex space-x-8">
                {desktopMenuData.find(item => item.label === 'Shop').subMenu.map((category, index) => (
                  <div key={index}>
                    <h3 className="font-bold text-primary">{category.title}</h3>
                    <ul>
                      {category.items.map((subItem, idx) => (
                        <li key={idx}>
                          <a href={subItem.link} className="hover:text-primary">
                            {subItem.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </nav>

        {/* Icons for desktop view (Dinamik metin ve ikonlar) */}
        <div className="hidden md:flex items-center space-x-4 text-light">
          {headerLinks.map((link, index) => (
            <a key={index} href={link.link} className="hover:text-accent">
              <i className={link.iconClass}></i> {link.label}
            </a>
          ))}
        </div>
      </div>

      {/* Mobile Menu - Ortalı hale getiriyoruz */}
      {menuOpen && (
        <nav className="md:hidden mt-4">
          <ul className="flex flex-col space-y-4 text-center text-gray-700">
            {mobileMenuData.map((item, index) => (
              <li key={index}>
                <a href={item.link} className="text-xl font-semibold hover:text-primary">
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
