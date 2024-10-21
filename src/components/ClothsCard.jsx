/* eslint-disable react/prop-types */


const ClothsCard = ({ category }) => {
  return (
    <div className="relative w-full mb-4" style={{ backgroundColor: category.backgroundColor }}>
      <img src={category.image} alt={category.title} className="w-full h-auto" />
      <div className="absolute bottom-0 left-0 p-4 text-white">
        <h3 className="text-2xl font-bold">{category.title}</h3>
        <p>{category.itemCount} items</p>
      </div>
    </div>
  );
};

export default ClothsCard;