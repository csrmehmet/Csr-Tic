import { Link } from 'react-router-dom';
import { shopPageData, products } from '../data';
import ClothsCard from '../components/ClothsCard';
import ProductCard from '../components/ProductCard';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import IconSection from '@/components/IconSection';

const ShopPage = () => {
    const [view, setView] = useState('grid');
    const [sortBy, setSortBy] = useState('popularity');
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 8;

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

    const totalPages = Math.ceil(products.length / productsPerPage);

    return (
        <>
            <div className="container mx-auto px-4 py-8">
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
            </div>

            <div className="container mx-auto px-4 py-8">
                <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
                    <p className="mb-4 sm:mb-0">Showing all {products.length} results</p>
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

                <div className={`grid ${view === 'grid' ? 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4' : 'grid-cols-1'} gap-6`}>
                    {currentProducts.map(product => (
                        <ProductCard key={product.id} product={product} view={view} />
                    ))}
                </div>

                {/* Pagination */}
                <div className="flex justify-center items-center space-x-2 my-8">
                    <Button variant="outline" size="sm" onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))} disabled={currentPage === 1}>
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
                    <Button variant="outline" size="sm" onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))} disabled={currentPage === totalPages}>
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