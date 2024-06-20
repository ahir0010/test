// src/TShirt.js
import React from 'react';

const TShirt = ({ title, image, price, stock, quantity, setQuantity, onBuy }) => {
  return (
    <div className="tshirt">
      <h2>{title}</h2>
      <img src={image} alt={title} />
      <p>Price: ${price.toFixed(2)}</p>
      {stock > 0 ? (
        <>
          <p>Stock: {stock}</p>
          <label>
            Quantity:
            <select value={quantity} onChange={(e) => setQuantity(title, parseInt(e.target.value))}>
              {[...Array(stock).keys()].map(n => (
                <option key={n + 1} value={n + 1}>{n + 1}</option>
              ))}
            </select>
          </label>
          <button onClick={() => onBuy(title)}>Buy</button>
        </>
      ) : (
        <p>Out of Stock</p>
      )}
    </div>
  );
};

export default TShirt;