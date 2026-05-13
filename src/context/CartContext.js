import { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState(() => {
    const saved = localStorage.getItem('wishlist');
    return saved? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  const addToCart = (product, color, size, quantity) => {
    const existingItem = cart.find(
      item => item.product.id === product.id &&
              item.color.name === color.name &&
              item.size === size
    );

    if (existingItem) {
      setCart(cart.map(item =>
        item.product.id === product.id &&
        item.color.name === color.name &&
        item.size === size
   ? {...item, quantity: item.quantity + quantity }
          : item
      ));
    } else {
      setCart([...cart, { product, color, size, quantity }]);
    }
  };

  const removeFromCart = (productId, colorName, size) => {
    setCart(cart.filter(
      item =>!(item.product.id === productId &&
                item.color.name === colorName &&
                item.size === size)
    ));
  };

  const updateQuantity = (productId, colorName, size, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(productId, colorName, size);
      return;
    }
    setCart(cart.map(item =>
      item.product.id === productId &&
      item.color.name === colorName &&
      item.size === size
  ? {...item, quantity: newQuantity }
        : item
    ));
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.product.price * item.quantity, 0);
  };

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  const toggleWishlist = (productId) => {
    if (wishlist.includes(productId)) {
      setWishlist(wishlist.filter(id => id!== productId));
    } else {
      setWishlist([...wishlist, productId]);
    }
  };

  const isInWishlist = (productId) => wishlist.includes(productId);

  return (
    <CartContext.Provider value={{
      cart,
      addToCart,
      removeFromCart,
      updateQuantity,
      getTotalPrice,
      getTotalItems,
      wishlist,
      toggleWishlist,
      isInWishlist
    }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);