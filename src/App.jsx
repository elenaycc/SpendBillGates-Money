import { useState } from "react";
import Header from "./components/Header";
import ProductCard from "./components/ProductCard";
import Receipt from "./components/Receipt";
import products from "./data/products";
import './App.css'

function App() {
  const [balance, setBalance] = useState(100_000_000_000); // $100,000,000,000
  const [cart, setCart] = useState({});

  const handleBuy = (product) => {
    if (balance >= product.price) {
      setBalance(balance - product.price);
      setCart((prev) => ({
        ...prev,
        [product.id]: (prev[product.id] || 0) + 1,
      }));
    }
  };

  const handleSell = (product) => {
    if (cart[product.id]) {
      setBalance(balance + product.price);
      setCart((prev) => ({
        ...prev,
        [product.id]: prev[product.id] - 1,
      }));
    }
  };
  return (
  <div className="App">
      {/* Top header section */}
      <Header />

      {/* Sticky balance bar */}
      <div className="balance-bar">
        ${balance.toLocaleString()}
      </div>

      {/* Product grid */}
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            quantity={cart[product.id] || 0}
            onBuy={() => handleBuy(product)}
            onSell={() => handleSell(product)}
            canBuy={balance >= product.price}
          />
        ))}
      </div>

      {/* Purchase receipt" */}
      <Receipt products={products} cart={cart} />
    </div>
  )
}

export default App;
