// ShoppingCart.jsx
import React from 'react';

const ShoppingCart = ({ cart, removeFromCart, clearCart, calculateTotal, getItemTotal }) => {
  return (
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
  );
};

export default ShoppingCart;