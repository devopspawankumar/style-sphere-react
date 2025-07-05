
import { Product } from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Premium Cotton T-Shirt',
    price: 1299,
    originalPrice: 1999,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=500&fit=crop',
    category: 'men',
    brand: 'StyleCraft',
    rating: 4.5,
    reviews: 245,
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Black', 'White', 'Navy'],
    description: 'Comfortable premium cotton t-shirt perfect for everyday wear.'
  },
  {
    id: '2',
    name: 'Elegant Summer Dress',
    price: 2499,
    originalPrice: 3999,
    image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400&h=500&fit=crop',
    category: 'women',
    brand: 'FashionHouse',
    rating: 4.8,
    reviews: 189,
    sizes: ['XS', 'S', 'M', 'L'],
    colors: ['Pink', 'Blue', 'Yellow'],
    description: 'Beautiful flowy summer dress perfect for any occasion.'
  },
  {
    id: '3',
    name: 'Kids Adventure Sneakers',
    price: 1899,
    originalPrice: 2499,
    image: 'https://images.unsplash.com/photo-1544966503-7cc5ac882d5d?w=400&h=500&fit=crop',
    category: 'kids',
    brand: 'PlayTime',
    rating: 4.6,
    reviews: 156,
    sizes: ['28', '30', '32', '34'],
    colors: ['Red', 'Blue', 'Green'],
    description: 'Durable and comfortable sneakers for active kids.'
  },
  {
    id: '4',
    name: 'Leather Crossbody Bag',
    price: 3299,
    originalPrice: 4999,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=500&fit=crop',
    category: 'accessories',
    brand: 'LuxeLeather',
    rating: 4.7,
    reviews: 92,
    colors: ['Brown', 'Black', 'Tan'],
    description: 'Genuine leather crossbody bag with multiple compartments.'
  },
  {
    id: '5',
    name: 'Slim Fit Jeans',
    price: 2199,
    originalPrice: 2999,
    image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=500&fit=crop',
    category: 'men',
    brand: 'DenimCo',
    rating: 4.4,
    reviews: 320,
    sizes: ['30', '32', '34', '36'],
    colors: ['Dark Blue', 'Light Blue', 'Black'],
    description: 'Classic slim fit jeans made from premium denim.'
  },
  {
    id: '6',
    name: 'Floral Print Blouse',
    price: 1799,
    originalPrice: 2599,
    image: 'https://images.unsplash.com/photo-1564859228273-274232fdb516?w=400&h=500&fit=crop',
    category: 'women',
    brand: 'FloralFashion',
    rating: 4.3,
    reviews: 78,
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Pink', 'Blue', 'White'],
    description: 'Elegant floral print blouse perfect for office wear.'
  },
  {
    id: '7',
    name: 'Kids Colorful Backpack',
    price: 1299,
    originalPrice: 1799,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=500&fit=crop',
    category: 'kids',
    brand: 'SchoolBuddy',
    rating: 4.9,
    reviews: 234,
    colors: ['Rainbow', 'Blue', 'Pink'],
    description: 'Spacious and colorful backpack perfect for school.'
  },
  {
    id: '8',
    name: 'Classic Watch',
    price: 4999,
    originalPrice: 7999,
    image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=400&h=500&fit=crop',
    category: 'accessories',
    brand: 'TimeKeeper',
    rating: 4.6,
    reviews: 145,
    colors: ['Silver', 'Gold', 'Black'],
    description: 'Timeless classic watch with premium finishing.'
  }
];
