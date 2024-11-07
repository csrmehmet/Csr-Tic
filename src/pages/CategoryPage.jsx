// src/pages/CategoriesPage.jsx
import { Link } from 'react-router-dom';
import { products } from '@/data';

const CategoriesPage = () => {
  // Benzersiz kategori kombinasyonlarını oluştur
  const uniqueCategories = [...new Set(products.map(p => `${p.gender}/${p.category}`))];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Tüm Kategoriler</h1>

      {/* Kadın Kategorileri */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Kadın Koleksiyonu</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {uniqueCategories
            .filter(cat => cat.startsWith('kadin'))
            .map((category, index) => {
              const [gender, cat] = category.split('/');
              return (
                <Link 
                  key={index}
                  to={`/shop/${gender}/${cat}`}
                  className="relative h-[300px] group overflow-hidden rounded-lg"
                >
                  <img
                    src="/src/assets/collection-image.jpg" // Varsayılan resim
                    alt={`${gender} ${cat}`}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end p-6">
                    <div className="text-white">
                      <h3 className="text-xl font-bold">{cat.charAt(0).toUpperCase() + cat.slice(1)}</h3>
                      <p>Koleksiyonu</p>
                    </div>
                  </div>
                </Link>
              );
            })}
        </div>
      </div>

      {/* Erkek Kategorileri */}
      <div>
        <h2 className="text-2xl font-bold mb-6">Erkek Koleksiyonu</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {uniqueCategories
            .filter(cat => cat.startsWith('erkek'))
            .map((category, index) => {
              const [gender, cat] = category.split('/');
              return (
                <Link 
                  key={index}
                  to={`/shop/${gender}/${cat}`}
                  className="relative h-[300px] group overflow-hidden rounded-lg"
                >
                  <img
                    src="/src/assets/collection-image.jpg" // Varsayılan resim
                    alt={`${gender} ${cat}`}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end p-6">
                    <div className="text-white">
                      <h3 className="text-xl font-bold">{cat.charAt(0).toUpperCase() + cat.slice(1)}</h3>
                      <p>Koleksiyonu</p>
                    </div>
                  </div>
                </Link>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default CategoriesPage;