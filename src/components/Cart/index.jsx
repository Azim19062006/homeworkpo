import { useCart } from "../../context/CartContext";
import "./index.css";

export function Cart() {
  const { cart, increaseQuantity, decreaseQuantity } = useCart();

  return (
    <div className="cart-container">
      <h2>Cart</h2>
      {cart.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <div className="cart-items">
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.title} width="120" />
              <div className="cart-info">
                <h4 className="cart-category">Men's Clothing</h4>
                <h4 className="cart-title">{item.title}</h4>
                <p className="cart-price"><strong>${item.price}</strong></p>
                <div className="cart-controls">
                  <button className="cart-btn" onClick={() => decreaseQuantity(item.id)}>-</button>
                  <span className="cart-quantity">{item.quantity}</span>
                  <button className="cart-btn" onClick={() => increaseQuantity(item.id)}>+</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
