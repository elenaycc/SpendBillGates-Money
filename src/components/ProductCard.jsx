function ProductCard({ product, quantity, onBuy, onSell, canBuy }) {
  return (
    <div className="product-card">
      <img src={product.img} alt={product.name} />
      <h4>{product.name}</h4>
      <p>${product.price.toLocaleString()}</p>
      <button className="sellButton" onClick={onSell} disabled={quantity === 0}>Sell</button>
      <span>{quantity}</span>
      <button onClick={onBuy} disabled={!canBuy}>Buy</button>
    </div>
  );
}

export default ProductCard;
