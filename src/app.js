// src/App.js
import React, { useState } from 'react';
import TShirt from './TShirt';
import tshirtsData from './t-shirts';
import './App.css';

const App = () => {
  const [tshirts, setTshirts] = useState(tshirtsData);

  const setQuantity = (title, quantity) => {
    setTshirts(tshirts.map(tshirt =>
      tshirt.title === title ? { ...tshirt, quantity } : tshirt
    ));
  };

  const handleBuy = (title) => {
    setTshirts(tshirts.map(tshirt =>
      tshirt.title === title ? { ...tshirt, stock: tshirt.stock - tshirt.quantity } : tshirt
    ));
  };

  return (
    <div className="store">
      {tshirts.map(tshirt => (
        <TShirt
          key={tshirt.title}
          {...tshirt}
          setQuantity={setQuantity}
          onBuy={handleBuy}
        />
      ))}
    </div>
  );
};

export default App;