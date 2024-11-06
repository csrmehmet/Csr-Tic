/* eslint-disable react/prop-types */ 
import { Link } from 'react-router-dom';

const ProductCard = ({ product = {} }) => {
  // Varsayılan değerler ve null check ekleyelim
  const { 
    id = '', 
    image = '', 
    title = '', 
    subtitle = '', 
    price = 0, 
    discountedPrice = 0, 
    colors = [] 
  } = product || {};

  // Güvenli price formatlaması
  const formattedPrice = typeof price === 'number' ? price.toFixed(2) : '0.00';
  const formattedDiscountedPrice = typeof discountedPrice === 'number' ? discountedPrice.toFixed(2) : '0.00';

  return (
    <Link to={`/product-detail/${id}`}>
      <div className="flex flex-col items-center max-w-sm mx-auto">
        <div className="relative overflow-hidden w-full">
          <img src={image} alt={title} className="w-full h-auto object-cover" />
        </div>
        <div className="mt-4 text-center w-full">
          <h3 className="text-base font-bold text-gray-800">{title}</h3>
          <p className="text-sm text-gray-500 mt-1">{subtitle}</p>
          <div className="flex justify-center items-center mt-2">
            <span className="text-gray-500 line-through mr-2">${formattedPrice}</span>
            <span className="text-green-600 font-bold">${formattedDiscountedPrice}</span>
          </div>
          <div className="flex justify-center mt-3 space-x-2">
            {colors.map((color, index) => (
              <button 
                key={index}
                className="w-4 h-4 rounded-full border border-gray-300"
                style={{ backgroundColor: color }}
                aria-label={`Select ${color} color`}
                onClick={(e) => e.preventDefault()} // Renk butonlarına tıklandığında sayfa yönlendirmesini engelle
              />
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;