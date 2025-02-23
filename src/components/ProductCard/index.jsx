import "./index.css";
import { useCart } from "../../context/CartContext";

export function ProductCard({ data }) {
  const { image, category, title, price, id } = data;
  const { cart, addToCart, increaseQuantity, decreaseQuantity } = useCart();
  const itemInCart = cart.find((item) => item.id === id);

  return (
    <div className="product-card">
      <div className="header">
        <img className="image" width="200" src={image} alt={title} />
        <div className="category">{category}</div>
        <h4 className="title">{title}</h4>
      </div>
      <div className="footer">
        <div className="price">${price}</div>
        {itemInCart ? (
          <div className="quantity-controls">
            <button onClick={() => decreaseQuantity(id)}>-</button>
            <span>{itemInCart.quantity}</span>
            <button onClick={() => increaseQuantity(id)}>+</button>
          </div>
        ) : (
          <button className="btn" onClick={() => addToCart(data)}>
            Add to cart
          </button>
        )}
      </div>
    </div>
  );
}
