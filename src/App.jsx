import {Route, Routes, BrowserRouter} from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import Navbar from "./components/Navbar";
import {useState} from "react";

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product, quantity) => {

    setCart((currentCart) => {

      const existingProduct = currentCart.find((item) => item.id === product.id);

      if (existingProduct) {
        return currentCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } 

        return [
          ...currentCart, 
          {
            id: product.id,
            title: product.title,
            price: product.price,
            thumbnail: product.thumbnail,
            quantity: quantity
          }
        ];
    });
  };

  const removeFromCart = (productId) => {
    setCart((currentCart) => currentCart.filter((item) => item.id !== productId));
  };

  const updateQuantity = (productId, newQuantity) => {
    setCart((currentCart) =>
      currentCart.map((item) =>
        item.id === productId 
          ? { 
              ...item, 
              quantity: newQuantity 
            } 
          : item
      )
    );
  };

    return (
        <BrowserRouter>
            <Navbar cart={cart} />
            <Routes>
                <Route 
                  path="/" 
                  element={<Home />} 
                />
                <Route 
                  path="/shop" 
                  element={<Shop addToCart={addToCart} />} 
                />
                <Route 
                  path="/cart" 
                  element={<Cart cart={cart} removeFromCart={removeFromCart} updateQuantity={updateQuantity} />} 
                />
            </Routes>
        </BrowserRouter>
    );
}

export default App;