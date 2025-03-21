import React, { useState } from 'react';
import './App.css';

const ProduceStore = () => {
  const produceItems = [
    { id: 1, name: 'Apple', price: 1.00 },
    { id: 2, name: 'Banana', price: 0.50 },
    { id: 3, name: 'Orange', price: 0.75 },
    { id: 4, name: 'Grapes', price: 2.00 },
    { id: 5, name: 'Strawberry', price: 3.00 },
    { id: 6, name: 'Blueberry', price: 4.00 },
    { id: 7, name: 'Raspberry', price: 3.50 },
    { id: 8, name: 'Watermelon', price: 5.00 },
    { id: 9, name: 'Pineapple', price: 4.50 },
    { id: 10, name: 'Mango', price: 2.50 },
    { id: 11, name: 'Pear', price: 1.25 },
    { id: 12, name: 'Kiwi', price: 1.75 },
    { id: 13, name: 'Lemon', price: 0.60 },
    { id: 14, name: 'Lime', price: 0.65 },
    { id: 15, name: 'Peach', price: 1.50 },
    { id: 16, name: 'Plum', price: 1.30 },
    { id: 17, name: 'Cherry', price: 2.75 },
    { id: 18, name: 'Avocado', price: 2.25 },
    { id: 19, name: 'Tomato', price: 0.90 },
    { id: 20, name: 'Cucumber', price: 1.10 },
    { id: 21, name: 'Lettuce', price: 1.80 },
    { id: 22, name: 'Carrot', price: 0.80 },
    { id: 23, name: 'Potato', price: 0.70 },
    { id: 24, name: 'Onion', price: 0.60 },
    { id: 25, name: 'Garlic', price: 0.40 },
  ];

  const [cart, setCart] = useState({});

  const addToCart = (item) => {
    setCart((prevCart) => ({
      ...prevCart,
      [item.id]: { item, quantity: (prevCart[item.id]?.quantity || 0) + 1 },
    }));
  };

  const removeFromCart = (itemId) => {
    setCart((prevCart) => {
      const newCart = { ...prevCart };
      if (newCart[itemId].quantity > 1) {
        newCart[itemId].quantity -= 1;
      } else {
        delete newCart[itemId];
      }
      return newCart;
    });
  };

  const clearCart = () => {
    setCart({});
  };

  const calculateTotal = () => {
    return Object.values(cart).reduce(
      (total, cartItem) => total + cartItem.item.price * cartItem.quantity,
      0
    ).toFixed(2);
  };

  const getItemTotal = (cartItem) => {
    return (cartItem.item.price * cartItem.quantity).toFixed(2);
  };

  return (
    <div className="container">
      <h1>Produce Store</h1>
      <div className="store-layout">
        <div className="products">
          <h2>Products</h2>
          <ul className="product-list">
            {produceItems.map((item) => (
              <li key={item.id} className="product-item">
                <span className="product-name">{item.name}</span> - ${item.price.toFixed(2)}
                <button className="add-button" onClick={() => addToCart(item)}>
                  Add
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="cart">
          <h2>Cart</h2>
          <ul className="cart-items">
            {Object.values(cart).map((cartItem) => (
              <li key={cartItem.item.id} className="cart-item">
                <span className="cart-item-name">{cartItem.item.name}</span> - ${cartItem.item.price.toFixed(2)} x{cartItem.quantity} = ${getItemTotal(cartItem)}
                <button className="remove-button" onClick={() => removeFromCart(cartItem.item.id)}>
                  Remove
                </button>
              </li>
            ))}
          </ul>
          {Object.keys(cart).length === 0 && <p>Cart is empty</p>}
          {Object.keys(cart).length > 0 && (
            <div className="cart-total">
              <strong>Total: ${calculateTotal()}</strong>
            </div>
          )}
          <button className="clear-button" onClick={clearCart}>
            Clear Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProduceStore;