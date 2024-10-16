import { footerData, socialMediaLinks, copyrightText } from '../data';

const Footer = () => {
  

  return (
    <footer className="bg-primary text-white p-16">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between">
          {footerData.map((section, index) => (
            <div key={index} className="mb-8 md:mb-0">
              <h2 className="text-xl font-bold mb-6">{section.title}</h2>
              {section.type === 'text' ? (
                <p className="text-sm">{section.content}</p>
              ) : (
                <ul className="space-y-2">
                  {section.items.map((item, itemIndex) => (
                    <li key={itemIndex}>
                      <a href={item.link} className="text-sm hover:text-accent">
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
              {section.socialLinks && (
                <div className="flex space-x-4 mt-4">
                  {socialMediaLinks.map((social, socialIndex) => (
                    <a key={socialIndex} href={social.link} target="_blank" rel="noopener noreferrer" className="text-white hover:text-accent">
                      <i className={`fab fa-${social.platform.toLowerCase()}`}></i>
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="mt-24 text-center text-sm">
          <p>{copyrightText}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;