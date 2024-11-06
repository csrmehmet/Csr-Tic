// src/pages/CategoryPage.jsx
import { useParams } from 'react-router-dom';
import { products } from '@/data';
import ProductCard from '@/components/ProductCard';

const CategoryPage = () => {
  const { gender, category } = useParams();
  
  // URL'den gelen parametrelere göre ürünleri filtrele
  const filteredProducts = products.filter(product => 
    product.gender === gender && product.category === category
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold capitalize">
          {gender} {category}
        </h1>
        <p>Showing {filteredProducts.length} products</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;