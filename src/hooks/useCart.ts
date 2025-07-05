
import { useState, useEffect } from 'react';
import { CartItem, Product } from '../types';

const CART_STORAGE_KEY = 'myntra-cart';

export const useCart = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  useEffect(() => {
    const savedCart = localStorage.getItem(CART_STORAGE_KEY);
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product: Product, size?: string, color?: string) => {
    const existingItemIndex = cartItems.findIndex(
      item => item.id === product.id && item.selectedSize === size && item.selectedColor === color
    );

    if (existingItemIndex >= 0) {
      const updatedItems = [...cartItems];
      updatedItems[existingItemIndex].quantity += 1;
      setCartItems(updatedItems);
    } else {
      const newItem: CartItem = {
        ...product,
        quantity: 1,
        selectedSize: size,
        selectedColor: color
      };
      setCartItems([...cartItems, newItem]);
    }
  };

  const removeFromCart = (itemId: string, size?: string, color?: string) => {
    setCartItems(cartItems.filter(item => 
      !(item.id === itemId && item.selectedSize === size && item.selectedColor === color)
    ));
  };

  const updateQuantity = (itemId: string, newQuantity: number, size?: string, color?: string) => {
    if (newQuantity <= 0) {
      removeFromCart(itemId, size, color);
      return;
    }

    setCartItems(cartItems.map(item => 
      (item.id === itemId && item.selectedSize === size && item.selectedColor === color)
        ? { ...item, quantity: newQuantity }
        : item
    ));
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return {
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    getTotalPrice,
    getTotalItems,
    clearCart
  };
};
