
import EditorsPick from '@/components/ShopCard';
import Hero from '@/components/Hero';
import ProductCard from '@/components/ProductCard';
import { featuredProductsHeading, products } from '@/data';

const HomePage = () => {
  return (
    <div>
      <Hero />
      <EditorsPick />
      
      {/* Featured Products Section */}
      <section className="py-16 px-8">
        <div className="container  mx-auto">
          <h2 className="text-2xl py-2 font-bold text-center mb-2">{featuredProductsHeading.title}</h2>
          <h3 className="text-xl px-16 font-semibold text-center mb-2">{featuredProductsHeading.subtitle}</h3>
          <p className="text-center px-8 text-gray-600 mb-8">{featuredProductsHeading.description}</p>
          
          <div className="grid grid-cols-1 py-8  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
            {products.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;