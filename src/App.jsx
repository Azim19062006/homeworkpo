import { ProductCard } from "./components/ProductCard";
import { Cart } from "./components/Cart";
import { useEffect, useState } from "react";
import { CartProvider } from "./context/CartContext";
import "./index.css";

function App() {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("men's clothing");

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json))
      .finally(() => setLoading(false));
  }, []);

  const filteredProducts = products.filter((product) => product.category === selectedCategory);

  return (
    <CartProvider>
      <div className="filter-buttons">
        <button 
          className={selectedCategory === "men's clothing" ? "active" : ""}
          onClick={() => setSelectedCategory("men's clothing")}
        >
          Men's Clothing
        </button>
        <button 
          className={selectedCategory === "women's clothing" ? "active" : ""}
          onClick={() => setSelectedCategory("women's clothing")}
        >
          Women's Clothing
        </button>
        <button 
          className={selectedCategory === "jewelery" ? "active" : ""}
          onClick={() => setSelectedCategory("jewelery")}
        >
          Jewelry
        </button>
        <button 
          className={selectedCategory === "electronics" ? "active" : ""}
          onClick={() => setSelectedCategory("electronics")}
        >
          Electronics
        </button>
      </div>

      <div className="allCards">
        {loading && <div>Loading...</div>}
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} data={product} />
        ))}
      </div>

      <Cart />
    </CartProvider>
  );
}

export default App;
