/* eslint-disable react/prop-types */

import { Link } from 'react-router-dom';
import { editorsPick } from '@/data';

const ShopCard = ({ title, image, link }) => {
  return (
    <Link to={link} className="relative block overflow-hidden">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover"
      />
      <div className="absolute bottom-4 left-4 bg-white py-1 px-3">
        <h3 className="text-sm px-6 py-1 font-semibold text-gray-800 uppercase">{title}</h3>
      </div>
    </Link>
  );
};

const EditorsPick = () => {
  return (
    <section className="py-8 bg-gray-100 px-12 max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold mb-2 text-center">{editorsPick.title}</h2>
      <p className="text-center text-gray-600 mb-6">{editorsPick.subtitle}</p>
      
      {/* Mobil görünüm */}
      <div className="md:hidden space-y-8">
        {editorsPick.categories.map((category, index) => (
          <ShopCard key={index} {...category} />
        ))}
      </div>
      
      {/* Desktop görünüm */}
      <div className="hidden md:grid grid-cols-5 gap-4">
        <div className="col-span-2">
          <ShopCard {...editorsPick.categories[0]} />
        </div>
        <div className="col-span-2">
          <ShopCard {...editorsPick.categories[1]} />
        </div>
        <div className="col-span-1 grid grid-rows-2 gap-4">
          <ShopCard {...editorsPick.categories[2]} />
          <ShopCard {...editorsPick.categories[3]} />
        </div>
      </div>
    </section>
  );
};

export default EditorsPick;