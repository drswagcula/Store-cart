// ProductList.jsx
import React from 'react';

const ProductList = ({ produceItems, addToCart }) => {
  return (
    <div className="products">
      <h2>Products</h2>
      <div className="product-grid">
        {produceItems.map((item) => (
          <div key={item.id} className="product-item">
            <span className="product-name">{item.name}</span> - ${item.price.toFixed(2)}
            <button className="add-button" onClick={() => addToCart(item)}>
              Add
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
