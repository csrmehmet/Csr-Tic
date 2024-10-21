
import { Link } from 'react-router-dom';
import { shopPageData } from '../data';
import ClothsCard from '../components/ClothsCard';
import { useState } from 'react';
import ProductCard from '../components/ProductCard';
import { products } from '../data';

const ShopPage = () => {
    const [view, setView] = useState('grid');
    const [sortBy, setSortBy] = useState('popularity');
  return (
    <><div className="container mx-auto px-4 py-8">
          <div className="flex justify-between items-center mb-8">
              <h1 className="text-3xl font-bold">{shopPageData.title}</h1>
              <nav className="text-sm">
                  <ol className="flex items-center space-x-2">
                      {shopPageData.breadcrumb.map((item, index) => (
                          <li key={index} className="flex items-center">
                              {index > 0 && <span className="mx-2 text-gray-500">&gt;</span>}
                              {index === shopPageData.breadcrumb.length - 1 ? (
                                  <span className="text-gray-500">{item}</span>
                              ) : (
                                  <Link to={`/${item.toLowerCase()}`} className="text-blue-600 hover:underline">
                                      {item}
                                  </Link>
                              )}
                          </li>
                      ))}
                  </ol>
              </nav>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
              {shopPageData.clothsCategories.map(category => (
                  <ClothsCard key={category.id} category={category} />
              ))}
          </div>
      </div><div className="container mx-auto px-4 py-8">
              <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
                  <p className="mb-4 sm:mb-0">Showing all {products.length} results</p>
                  <div className="flex items-center space-x-4">
                      <div className="flex items-center">
                          <span className="mr-2">Views:</span>
                          <button onClick={() => setView('grid')} className={`mr-2 ${view === 'grid' ? 'text-blue-500' : 'text-gray-500'}`}>
                              <i className="fas fa-th"></i>
                          </button>
                          <button onClick={() => setView('list')} className={view === 'list' ? 'text-blue-500' : 'text-gray-500'}>
                              <i className="fas fa-list"></i>
                          </button>
                      </div>
                      <select
                          value={sortBy}
                          onChange={(e) => setSortBy(e.target.value)}
                          className="border rounded px-2 py-1"
                      >
                          <option value="popularity">Popularity</option>
                          <option value="price-low-to-high">Price: Low to High</option>
                          <option value="price-high-to-low">Price: High to Low</option>
                      </select>
                      <button className="bg-blue-500 text-white px-4 py-2 rounded">Filter</button>
                  </div>
              </div>

              <div className={`grid ${view === 'grid' ? 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4' : 'grid-cols-1'} gap-6`}>
                  {products.map(product => (
                      <ProductCard key={product.id} product={product} view={view} />
                  ))}
              </div>
          </div></>
    
  );
};

export default ShopPage;