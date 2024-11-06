import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ClothsCard = () => {
  const history = useHistory();
  const { categories } = useSelector(state => state.product);

  const handleCategoryClick = (gender, category) => {
    history.push(`/shop/${gender}/${category.toLowerCase()}`);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {categories.map((category) => (
        <div 
          key={category.id}
          onClick={() => handleCategoryClick(category.gender, category.name)}
          className="relative group overflow-hidden rounded-lg h-[300px] cursor-pointer"
        >
          <img 
            src={category.image} 
            alt={category.name}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
          
          <div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-300" />
          
          <div className="absolute bottom-6 left-6 text-white">
            <h3 className="text-2xl font-bold mb-2">{category.name}</h3>
            <p className="text-sm capitalize">{category.gender} Koleksiyonu</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ClothsCard;