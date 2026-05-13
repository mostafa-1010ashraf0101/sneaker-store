import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { products } from '../data';
import { useCart } from '../context/CartContext';

export default function HomePage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBrand, setSelectedBrand] = useState('All');
  const [priceRange] = useState([0, 250]);
  const { toggleWishlist, isInWishlist } = useCart();

  const brands = ['All',...new Set(products.map(p => p.brand))];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          product.brand.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesBrand = selectedBrand === 'All' || product.brand === selectedBrand;
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
    return matchesSearch && matchesBrand && matchesPrice;
  });

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Banner */}
      <div className="relative bg-black text-white">
        <img
          src="https://images.unsplash.com/photo-1556906781-9a412961c28e?w=1600&h=600&fit=crop&q=80"
          alt="Hero"
          className="w-full h- md:h- object-cover opacity-80"
          onError={(e) => e.target.src = 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=1600&h=600&fit=crop'}
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-center px-4">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-4">
              Just Do It
            </h1>
            <p className="text-lg md:text-2xl font-medium mb-8">
              The Future of Athletic Footwear
            </p>
            <button className="bg-white text-black px-8 py-4 rounded-full font-bold uppercase tracking-wide hover:bg-slate-100 transition">
              Shop Now
            </button>
          </motion.div>
        </div>
      </div>

      <div className="max-w- mx-auto px-6 py-12">
        <div className="mb-12">
          <div className="flex flex-wrap gap-4 items-center justify-between mb-8">
            <h2 className="text-3xl font-black uppercase tracking-tight">
              All Shoes ({filteredProducts.length})
            </h2>
            <div className="flex gap-4 items-center">
              <input
                type="text"
                placeholder="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="px-4 py-2 border border-slate-300 rounded-full focus:border-black outline-none w-64"
              />
              <select
                value={selectedBrand}
                onChange={(e) => setSelectedBrand(e.target.value)}
                className="px-4 py-2 border border-slate-300 rounded-full focus:border-black outline-none font-medium"
              >
                {brands.map(brand => (
                  <option key={brand} value={brand}>{brand}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product, idx) => {
            const discount = Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100);
            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
              >
                <div className="group relative">
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      toggleWishlist(product.id);
                    }}
                    className="absolute top-4 right-4 z-10 bg-white rounded-full p-2 shadow-md hover:scale-110 transition opacity-0 group-hover:opacity-100"
                  >
                    <span className="text-xl">
                      {isInWishlist(product.id)? '❤️' : '🤍'}
                    </span>
                  </button>

                  <Link to={`/product/${product.id}`}>
                    <div className="bg-slate-50 aspect-square mb-4 overflow-hidden">
                      <img
                        src={product.colors[0].images[0]}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                      />
                    </div>
                    <div className="space-y-1">
                      {discount > 0 && (
                        <p className="text-red-600 font-medium text-sm">
                          {discount}% off
                        </p>
                      )}
                      <h3 className="font-medium text-black">{product.name}</h3>
                      <p className="text-slate-600 text-sm">{product.category}</p>
                      <p className="font-medium text-black">${product.price}</p>
                    </div>
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-20">
            <h3 className="text-2xl font-bold">No products found</h3>
          </div>
        )}
      </div>
    </div>
  );
}