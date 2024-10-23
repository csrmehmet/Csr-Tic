import { products } from '../data';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import IconSection from '../components/IconSection';

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
             <h3 className="text-xl font-bold">{product.descriptionData.features[0].title}</h3>
             {product.descriptionData.mainText.map((paragraph, index) => (
               <p key={index} className="text-gray-600">{paragraph}</p>
             ))}
           </div>

           {product.descriptionData.features.map((feature, featureIndex) => (
             <div key={featureIndex} className="mt-8 space-y-4">
               <h3 className="text-xl font-bold">{feature.title}</h3>
               <div className="space-y-2">
                 {feature.items.map((item, itemIndex) => (
                   <div key={itemIndex} className="flex items-center space-x-2">
                     <i className="fas fa-chevron-right text-gray-400"></i>
                     <span className="text-gray-600">{item}</span>
                   </div>
                 ))}
               </div>
             </div>
           ))}
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
             <div className="grid grid-cols-3 gap-8">
               {/* Sol taraf - Resim */}
               <div className="col-span-1">
                 <img 
                   src={product.descriptionImage} 
                   alt="Description" 
                   className="w-full rounded-lg"
                 />
               </div>

               {/* Orta kısım - Ana metin */}
               <div className="col-span-1">
                 <h3 className="text-2xl font-bold mb-4">{product.descriptionData.features[0].title}</h3>
                 <div className="space-y-4">
                   {product.descriptionData.mainText.map((paragraph, index) => (
                     <p key={index} className="text-gray-600">
                       {paragraph}
                     </p>
                   ))}
                 </div>
               </div>

               {/* Sağ taraf - Listeler */}
               <div className="col-span-1 space-y-8">
                 {product.descriptionData.features.map((feature, featureIndex) => (
                   <div key={featureIndex}>
                     <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                     <div className="space-y-2">
                       {feature.items.map((item, itemIndex) => (
                         <div key={itemIndex} className="flex items-center space-x-2">
                           <i className="fas fa-chevron-right text-gray-400"></i>
                           <span className="text-gray-600">{item}</span>
                         </div>
                       ))}
                     </div>
                   </div>
                 ))}
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

     {/* Bestseller Products Section */}
     <section className="mt-16">
  <h2 className="text-2xl font-bold text-center">BESTSELLER PRODUCTS</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
    {products
      .slice(0, 8)  // İlk 8 ürünü göster
      .map(relatedProduct => (
        <ProductCard 
          key={relatedProduct.id} 
          product={relatedProduct} 
        />
      ))}
  </div>
</section>

     {/* Icon Section */}
     <IconSection />
   </div>
 );
};

export default ProductDetail;