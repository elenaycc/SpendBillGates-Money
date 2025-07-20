function Receipt({ products, cart }) {
  const total = Object.entries(cart).reduce((sum, [id, qty]) => {
    const product = products.find(p => p.id === parseInt(id));
    return sum + product.price * qty;
  }, 0);

  return (
    <div className="receipt">
      <h2>Your Receipt</h2>
      {Object.entries(cart).map(([id, qty]) => {
        const product = products.find(p => p.id === parseInt(id));
        if (qty > 0) {
          return (
            <p key={id}>
              {product.name} x{qty} — ${(product.price * qty).toLocaleString()}
            </p>
          );
        }
        return null;
      })}
      
      <hr />
      <div className="receipt-total-line" />
      <strong className="total">TOTAL: ${total.toLocaleString()}</strong>
    </div>
  );
}

export default Receipt;
