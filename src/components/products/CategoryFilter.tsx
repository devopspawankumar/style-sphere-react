
import React from 'react';

interface CategoryFilterProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({ selectedCategory, onCategoryChange }) => {
  const categories = [
    { id: 'all', label: 'All Categories' },
    { id: 'men', label: 'Men' },
    { id: 'women', label: 'Women' },
    { id: 'kids', label: 'Kids' },
    { id: 'accessories', label: 'Accessories' },
  ];

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Categories</h3>
      <div className="space-y-2">
        {categories.map((category) => (
          <label key={category.id} className="flex items-center cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition-colors">
            <input
              type="radio"
              name="category"
              value={category.id}
              checked={selectedCategory === category.id}
              onChange={(e) => onCategoryChange(e.target.value)}
              className="sr-only"
            />
            <div className={`w-4 h-4 rounded-full border-2 mr-3 flex items-center justify-center ${
              selectedCategory === category.id 
                ? 'border-pink-500 bg-pink-500' 
                : 'border-gray-300'
            }`}>
              {selectedCategory === category.id && (
                <div className="w-2 h-2 bg-white rounded-full"></div>
              )}
            </div>
            <span className={`text-sm ${
              selectedCategory === category.id 
                ? 'text-pink-600 font-medium' 
                : 'text-gray-700'
            }`}>
              {category.label}
            </span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;
