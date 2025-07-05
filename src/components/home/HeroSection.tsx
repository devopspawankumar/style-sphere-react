
import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';

const HeroSection: React.FC = () => {
  return (
    <section className="relative h-96 md:h-[500px] bg-gradient-to-r from-pink-100 via-purple-50 to-indigo-100 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-purple-600/20"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
        <div className="max-w-xl">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Fashion that
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600">
              Speaks You
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
            Discover the latest trends and timeless classics. Shop from thousands of brands and get the best deals.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/products">
              <Button size="lg" className="w-full sm:w-auto">
                Shop Now
              </Button>
            </Link>
            <Link to="/products?category=women">
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                Women's Collection
              </Button>
            </Link>
          </div>
        </div>
        
        <div className="hidden lg:block absolute right-0 top-0 h-full w-1/2">
          <img
            src="https://images.unsplash.com/photo-1445205170230-053b83016050?w=600&h=500&fit=crop"
            alt="Fashion Model"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      
      {/* Sale Banner */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-r from-red-500 to-pink-500 text-white py-3">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="font-bold text-lg">
            🔥 MEGA SALE: Up to 70% OFF on All Categories! Limited Time Only 🔥
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
