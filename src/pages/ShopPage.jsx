// src/pages/ShopPage.jsx
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchCategories, fetchProducts } from '../store/actions/productActions';
import { Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import IconSection from '@/components/IconSection';
import ClothsCard from '../components/ClothsCard';
import ProductCard from '../components/ProductCard';

const ShopPage = () => {
  const dispatch = useDispatch();
  const { 
    productList, 
    total,
    fetchState,
    limit 
  } = useSelector(state => state.product);

  const [view, setView] = useState('grid');
  const [sortBy, setSortBy] = useState('popularity');
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchProducts(currentPage));
  }, [dispatch, currentPage]);

  const totalPages = Math.ceil(total / limit);

  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Shop</h1>
          <nav className="text-sm">
            <ol className="flex items-center space-x-2">
              <li><Link to="/" className="text-blue-600 hover:underline">Home</Link></li>
              <li><span className="mx-2 text-gray-500">&gt;</span></li>
              <li><span className="text-gray-500">Shop</span></li>
            </ol>
          </nav>
        </div>
        
        {/* Categories bölümü artık ClothsCard'dan geliyor */}
        <ClothsCard />
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
          <p className="mb-4 sm:mb-0">
            {fetchState === 'FETCHING' ? 'Loading...' : `Showing all ${total} results`}
          </p>
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <span className="mr-2">Views:</span>
              <Button variant="ghost" size="icon" onClick={() => setView('grid')}>
                <i className={`fas fa-th ${view === 'grid' ? 'text-primary' : 'text-gray-500'}`}></i>
              </Button>
              <Button variant="ghost" size="icon" onClick={() => setView('list')}>
                <i className={`fas fa-list ${view === 'list' ? 'text-primary' : 'text-gray-500'}`}></i>
              </Button>
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
            <Button variant="default" size="default">Filter</Button>
          </div>
        </div>

        {fetchState === 'FETCHING' ? (
          <div className="flex justify-center items-center py-20">
            <Loader2 className="h-10 w-10 animate-spin text-primary" />
          </div>
        ) : (
          <div className={`grid ${view === 'grid' ? 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4' : 'grid-cols-1'} gap-6`}>
            {productList?.map(product => (
              <ProductCard key={product.id} product={product} view={view} />
            ))}
          </div>
        )}

        {/* Pagination */}
        <div className="flex justify-center items-center space-x-2 my-8">
          <Button 
            variant="outline" 
            size="sm" 
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))} 
            disabled={currentPage === 1}
          >
            Prev
          </Button>
          {[...Array(totalPages).keys()].map(number => (
            <Button 
              key={number} 
              variant={currentPage === number + 1 ? "default" : "outline"}
              size="sm"
              onClick={() => setCurrentPage(number + 1)}
            >
              {number + 1}
            </Button>
          ))}
          <Button 
            variant="outline" 
            size="sm" 
            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))} 
            disabled={currentPage === totalPages}
          >
            Next
          </Button>
        </div>

        {/* Logo kısmı */}
        <IconSection />
      </div>
    </>
  );
};

export default ShopPage;