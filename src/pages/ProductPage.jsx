import { products } from '../data';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  const { id } = useParams();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [activeTab, setActiveTab] = useState('description');
  const product = products.find(p => p.id === Number(id));

  if (!product) return <div>Ürün bulunamadı</div>;

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <i 
        key={index} 
        className={`${index < rating ? 'fas' : 'far'} fa-star text-yellow-400`}
      ></i>
    ));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <nav className="mb-8">
        <ol className="flex items-center space-x-2">
          <li>
            <a href="/" className="text-gray-600">Home</a>
          </li>
          <li>
            <span className="mx-2 text-gray-500">&gt;</span>
            <span className="text-gray-500">Shop</span>
          </li>
        </ol>
      </nav>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Sol taraf - Görsel kısmı */}
        <div>
          <div className="relative mb-4">
            <img 
              src={product.images[currentImageIndex].main} 
              alt={product.title} 
              className="w-full h-auto"
            />
            <button 
              onClick={() => setCurrentImageIndex(prev => Math.max(0, prev - 1))}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
            >
              <i className="fas fa-chevron-left"></i>
            </button>
            <button 
              onClick={() => setCurrentImageIndex(prev => Math.min(product.images.length - 1, prev + 1))}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
            >
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>
          <div className="flex space-x-2">
            {product.images.map((image, index) => (
              <img
                key={image.id}
                src={image.thumbnail}
                alt=""
                className={`w-20 h-20 object-cover cursor-pointer ${currentImageIndex === index ? 'border-2 border-blue-500' : ''}`}
                onClick={() => setCurrentImageIndex(index)}
              />
            ))}
          </div>
        </div>

        {/* Sağ taraf - Ürün detayları */}
        <div>
          <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
          
          <div className="flex items-center mb-4">
            <div className="flex mr-2">
              {renderStars(product.rating)}
            </div>
            <span className="text-gray-600">{product.reviews} Reviews</span>
          </div>

          <div className="text-2xl font-bold mb-4">
            {product.discountedPrice && (
              <span className="line-through text-gray-500 mr-2">${product.price}</span>
            )}
            ${product.discountedPrice || product.price}
          </div>

          <div className="mb-4">
            <span className="text-gray-600">Availability : </span>
            <span className="text-blue-500">{product.availability.text}</span>
          </div>

          <p className="text-gray-600 mb-6">{product.description}</p>

          <div className="flex space-x-2 mb-6">
            {product.colors.map((color, index) => (
              <button 
                key={index}
                className="w-6 h-6 rounded-full"
                style={{ backgroundColor: color }}
              ></button>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <Button variant="default" size="lg">
              Select Options
            </Button>
            <Button className="rounded-full" variant="outline" size="icon">
              <i className="far fa-heart"></i>
            </Button>
            <Button className="rounded-full" variant="outline" size="icon">
              <i className="fas fa-shopping-cart"></i>
            </Button>
            <Button className="rounded-full" variant="outline" size="icon">
              <i className="far fa-eye"></i>
            </Button>
          </div>
        </div>
      </div>

      {/* Tab Menüsü */}
      <div className="mt-16">
        {/* Mobil Tab Menüsü */}
        <div className="md:hidden">
          <button 
            className={`w-full text-left p-4 border-b ${activeTab === 'description' ? 'font-bold' : ''}`}
            onClick={() => setActiveTab('description')}
          >
            Description
          </button>
          <div className={`p-4 ${activeTab === 'description' ? 'block' : 'hidden'}`}>
            <div className="space-y-6">
              <h3 className="text-xl font-bold">the quick fox jumps over</h3>
              <p className="text-gray-600">Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.</p>
              <p className="text-gray-600">Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.</p>
              <p className="text-gray-600">Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.</p>
            </div>

            <div className="mt-8 space-y-4">
              <h3 className="text-xl font-bold">the quick fox jumps over</h3>
              <div className="space-y-2">
                {[...Array(4)].map((_, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <i className="fas fa-chevron-right text-gray-400"></i>
                    <span className="text-gray-600">the quick fox jumps over the lazy dog</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 space-y-4">
              <h3 className="text-xl font-bold">the quick fox jumps over</h3>
              <div className="space-y-2">
                {[...Array(3)].map((_, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <i className="fas fa-chevron-right text-gray-400"></i>
                    <span className="text-gray-600">the quick fox jumps over the lazy dog</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <button 
            className={`w-full text-left p-4 border-b ${activeTab === 'additional' ? 'font-bold' : ''}`}
            onClick={() => setActiveTab('additional')}
          >
            Additional Information
          </button>
          <div className={`p-4 ${activeTab === 'additional' ? 'block' : 'hidden'}`}>
            {/* Additional Information içeriği */}
          </div>

          <button 
            className={`w-full text-left p-4 border-b ${activeTab === 'reviews' ? 'font-bold' : ''}`}
            onClick={() => setActiveTab('reviews')}
          >
            Reviews (0)
          </button>
          <div className={`p-4 ${activeTab === 'reviews' ? 'block' : 'hidden'}`}>
            {/* Reviews içeriği */}
          </div>
        </div>

        {/* Desktop Tab Menüsü */}
        <div className="hidden md:block">
          <div className="flex border-b">
            <button 
              className={`px-8 py-4 ${activeTab === 'description' ? 'border-b-2 border-blue-500 font-bold' : ''}`}
              onClick={() => setActiveTab('description')}
            >
              Description
            </button>
            <button 
              className={`px-8 py-4 ${activeTab === 'additional' ? 'border-b-2 border-blue-500 font-bold' : ''}`}
              onClick={() => setActiveTab('additional')}
            >
              Additional Information
            </button>
            <button 
              className={`px-8 py-4 ${activeTab === 'reviews' ? 'border-b-2 border-blue-500 font-bold' : ''}`}
              onClick={() => setActiveTab('reviews')}
            >
              Reviews (0)
            </button>
          </div>

          <div className="p-8">
            {activeTab === 'description' && (
              <div className="grid grid-cols-2 gap-8">
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold">the quick fox jumps over</h3>
                  <p className="text-gray-600">Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.</p>
                  <p className="text-gray-600">Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.</p>
                  <p className="text-gray-600">Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.</p>
                </div>
                <div className="space-y-8">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">the quick fox jumps over</h3>
                    <div className="space-y-2">
                      {[...Array(4)].map((_, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <i className="fas fa-chevron-right text-gray-400"></i>
                          <span className="text-gray-600">the quick fox jumps over the lazy dog</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-4">the quick fox jumps over</h3>
                    <div className="space-y-2">
                      {[...Array(3)].map((_, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <i className="fas fa-chevron-right text-gray-400"></i>
                          <span className="text-gray-600">the quick fox jumps over the lazy dog</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
            {activeTab === 'additional' && (
              <div>
                {/* Additional Information içeriği */}
              </div>
            )}
            {activeTab === 'reviews' && (
              <div>
                {/* Reviews içeriği */}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;